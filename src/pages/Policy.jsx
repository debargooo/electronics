import React from 'react';

const Policy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>
      <p className="text-sm text-gray-500 text-center mb-10">Last updated: April 18, 2025</p>

      <section className="space-y-4">
        <p>
          This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
          information when You use the Service and tells You about Your privacy rights and how the law protects You.
        </p>

        <p>
          We use Your Personal data to provide and improve the Service. By using the Service, You agree to the
          collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created
          with the help of the{' '}
          <a
            href="https://www.termsfeed.com/privacy-policy-generator/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Privacy Policy Generator
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">Interpretation and Definitions</h2>

        <h3 className="text-xl font-medium mt-6">Interpretation</h3>
        <p>
          The words of which the initial letter is capitalized have meanings defined under the following conditions...
        </p>

        <h3 className="text-xl font-medium mt-6">Definitions</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Account</strong> means a unique account created for You to access our Service or parts of our
            Service.
          </li>
          <li>
            <strong>Application</strong> refers to ChckRate, the software program provided by the Company.
          </li>
          <li>
            <strong>Company</strong> refers to ChckRate.
          </li>
          <li>
            <strong>Country</strong> refers to: West Bengal, India.
          </li>
          <li>
            <strong>Device</strong> means any device that can access the Service such as a computer, cellphone, or
            digital tablet.
          </li>
          {/* Add more as needed */}
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-2">Collecting and Using Your Personal Data</h2>

        <h3 className="text-xl font-medium mt-6">Types of Data Collected</h3>

        <h4 className="text-lg font-semibold mt-4">Personal Data</h4>
        <p>
          While using Our Service, We may ask You to provide Us with certain personally identifiable information that
          can be used to contact or identify You.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Usage Data</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4">Usage Data</h4>
        <p>
          Usage Data may include information such as Your Device's IP address, browser type, pages visited, time spent,
          etc.
        </p>

        <h3 className="text-xl font-medium mt-6">Use of Your Personal Data</h3>
        <p>The Company may use Personal Data for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>To provide and maintain our Service</strong>, including monitoring usage.
          </li>
          <li>
            <strong>To manage Your Account</strong>: Registration and access to features as a registered user.
          </li>
          <li>
            <strong>To contact You</strong>: Email, SMS, or push notifications.
          </li>
          <li>
            <strong>For business transfers</strong>: In case of merger, acquisition, or similar transactions.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10">Security & Data Handling</h2>
        <p className="mt-4">
          We strive to use commercially acceptable means to protect Your Personal Data, but no method is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mt-10">Children’s Privacy</h2>
        <p className="mt-4">
          Our Service does not address anyone under the age of 13. We do not knowingly collect personal data from
          children.
        </p>

        <h2 className="text-2xl font-semibold mt-10">Contact Us</h2>
        <p className="mt-4">If you have any questions about this Privacy Policy, you can contact us:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Email: <a href="mailto:dev.chckrate@gmail.com" className="text-blue-600 underline">dev.chckrate@gmail.com</a></li>
          <li>
            Website:{' '}
            <a
              href="https://chckrate.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              chckrate.in
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Policy;
