import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const TermsOfService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <main className="flex-grow">
        <div className="container mx-auto px-4 max-w-4xl py-16">
          <h2 className="text-3xl font-bold text-primary-900 mb-4">Terms of Service</h2>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700">By accessing and using the MasterCraft website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-800 mb-4">2. Services</h2>
            <p className="text-gray-700">MasterCraft provides professional cleaning, renovation, painting, maintenance, and repair services for residential and commercial properties. Service details, pricing, and availability are subject to change without notice.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-800 mb-4">3. Quotes and Pricing</h2>
            <p className="text-gray-700">Quotes provided through our contact form or in person are estimates and may be subject to change based on the actual scope of work. Final pricing will be confirmed before any work begins.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-800 mb-4">4. User Responsibilities</h2>
            <p className="text-gray-700 mb-3">When using our website, you agree to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide accurate and truthful information in all forms</li>
              <li>Not misuse or attempt to disrupt the website</li>
              <li>Not submit spam or fraudulent requests</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-800 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-700">All content on this website, including text, images, logos, and design, is the property of MasterCraft and is protected by applicable intellectual property laws. You may not reproduce or distribute any content without prior written consent.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-800 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700">MasterCraft shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website. The website is provided "as is" without any warranties of any kind.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-800 mb-4">7. Changes to Terms</h2>
            <p className="text-gray-700">We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated date. Your continued use of the website constitutes acceptance of any changes.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-800 mb-4">8. Contact Us</h2>
            <p className="text-gray-700">If you have any questions about these Terms of Service, please contact us at <a href="mailto:bllzhn@hotmail.com" className="text-accent-500 hover:underline">bllzhn@hotmail.com</a> or call us at 027 707 1288.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
