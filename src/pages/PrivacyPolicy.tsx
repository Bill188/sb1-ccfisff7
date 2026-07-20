import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <main className="flex-grow">
        <div className="container mx-auto px-4 max-w-4xl py-16">
          <h2 className="text-3xl font-bold text-primary-900 mb-4">Privacy Policy</h2>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-800 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-3">When you use our contact form or subscribe to our newsletter, we may collect the following information:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Service preferences</li>
              <li>Any messages or details you provide</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-800 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Respond to your inquiries and service requests</li>
              <li>Provide quotes for our cleaning, renovation, and maintenance services</li>
              <li>Send you our newsletter if you have subscribed</li>
              <li>Improve our website and services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-800 mb-4">3. Data Storage</h2>
            <p className="text-gray-700">Your data is securely stored using Supabase, a trusted cloud database provider. We take reasonable measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-800 mb-4">4. Sharing Your Information</h2>
            <p className="text-gray-700">We do not sell, trade, or rent your personal information to third parties. We may share your information only with service providers who assist us in operating our website and delivering our services.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-800 mb-4">5. Your Rights</h2>
            <p className="text-gray-700 mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction or deletion of your personal data</li>
              <li>Unsubscribe from our newsletter at any time</li>
              <li>Opt out of any marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-800 mb-4">6. Contact Us</h2>
            <p className="text-gray-700">If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@masterpropertycare.co.nz" className="text-accent-500 hover:underline">info@masterpropertycare.co.nz</a> or call us at 027 707 1288.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
