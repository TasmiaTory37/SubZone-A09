import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-lg text-gray-600">Last updated: January 2025</p>
      </header>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p className="text-gray-700">
          At SubZone, your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
        <p className="text-gray-700">
          We collect the following types of information:
        </p>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Personal information such as name, email address, and payment details.</li>
          <li>Usage data including how you interact with our website and services.</li>
          <li>Cookies and tracking technologies for enhancing user experience.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
        <p className="text-gray-700">
          The information we collect is used to:
        </p>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Provide, operate, and maintain our services.</li>
          <li>Improve and personalize your experience.</li>
          <li>Process payments and manage subscriptions.</li>
          <li>Communicate with you, including sending promotional offers (with your consent).</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Sharing Your Information</h2>
        <p className="text-gray-700">
          We do not sell or rent your personal information. However, we may share your data in the following situations:
        </p>
        <ul className="list-disc pl-5 text-gray-700">
          <li>With service providers who assist us in operating the website and processing payments.</li>
          <li>As required by law, such as in response to a legal request or to protect our rights.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
        <p className="text-gray-700">
          We take reasonable measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Your Data Protection Rights</h2>
        <p className="text-gray-700">
          Depending on your location, you may have the following rights regarding your personal data:
        </p>
        <ul className="list-disc pl-5 text-gray-700">
          <li>The right to access your data.</li>
          <li>The right to request correction or deletion of your data.</li>
          <li>The right to object to or restrict the processing of your data.</li>
          <li>The right to withdraw consent at any time (if applicable).</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Cookies and Tracking Technologies</h2>
        <p className="text-gray-700">
          We use cookies and similar tracking technologies to track your activity on our website. You can control your cookie settings through your browser, but disabling cookies may affect the functionality of the website.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Changes to This Privacy Policy</h2>
        <p className="text-gray-700">
          We may update our Privacy Policy from time to time. Any changes will be posted on this page, and the updated policy will take effect immediately upon posting.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about this Privacy Policy or your personal data, please contact us at <a href="mailto:support@subzone.com" className="text-blue-500">support@subzone.com</a>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
