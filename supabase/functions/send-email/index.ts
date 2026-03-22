import { createClient } from 'npm:@supabase/supabase-js@2.39.7';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  created_at: string;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Log environment variables (excluding sensitive values)
    console.log('Checking environment variables...');
    console.log('SUPABASE_URL present:', !!Deno.env.get('SUPABASE_URL'));
    console.log('SUPABASE_ANON_KEY present:', !!Deno.env.get('SUPABASE_ANON_KEY'));
    console.log('RESEND_API_KEY present:', !!Deno.env.get('RESEND_API_KEY'));
    console.log('SITE_URL present:', !!Deno.env.get('SITE_URL'));

    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      throw new Error('No authorization header');
    }

    // Get the contact request data from the request body
    const contactRequest: ContactRequest = await req.json();
    console.log('Received contact request for:', contactRequest.name);

    // Format the email content
    const emailContent = `
      New Contact Request:
      
      Name: ${contactRequest.name}
      Email: ${contactRequest.email}
      Phone: ${contactRequest.phone}
      Service: ${contactRequest.service}
      Message: ${contactRequest.message}
      Date: ${new Date(contactRequest.created_at).toLocaleString()}
      
      View all requests at: ${Deno.env.get('SITE_URL')}/admin
    `;

    // Get admin users from the database
    console.log('Fetching admin users...');
    const { data: adminUsers, error: adminError } = await supabaseClient
      .from('admin_emails')
      .select('email');

    if (adminError) {
      console.error('Error fetching admin users:', adminError);
      throw adminError;
    }

    if (!adminUsers?.length) {
      console.warn('No admin users found in database');
      throw new Error('No admin users configured');
    }

    console.log(`Found ${adminUsers.length} admin users`);

    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      throw new Error('Resend API key not configured');
    }

    // Send email to each admin
    console.log('Sending emails to admins...');
    const emailPromises = adminUsers.map(async (admin) => {
      console.log('Sending email to:', admin.email);
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'MasterCraft <noreply@yourdomain.com>', // Replace with your verified domain
          to: admin.email,
          subject: `New Contact Request from ${contactRequest.name}`,
          text: emailContent,
        }),
      });

      const responseData = await res.json();
      
      if (!res.ok) {
        console.error('Resend API error:', responseData);
        throw new Error(`Failed to send email: ${JSON.stringify(responseData)}`);
      }
      
      console.log('Email sent successfully to:', admin.email);
      return responseData;
    });

    const results = await Promise.all(emailPromises);
    console.log('All emails sent successfully:', results);

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in send-email function:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});