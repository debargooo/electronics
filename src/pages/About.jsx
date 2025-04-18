import React from "react";
import { FaAmazon, FaTags, FaRocket, FaCheckCircle, FaCoins } from "react-icons/fa";
import { MdCompare } from "react-icons/md";

const cards = [
  {
    title: "Who We Are",
    icon: <MdCompare className="text-4xl text-blue-600" />,
    description: (
      <>
        <strong>CHCKRATE</strong> is a digital platform focused on providing product comparison insights to help consumers make informed purchasing decisions.
        We showcase pricing, features, and availability across trusted online retailers, including <strong>Amazon</strong>.
        Our curated content and user-friendly tools make it easy for shoppers to identify the best deals in seconds.
      </>
    ),
  },
  {
    title: "Affiliate Integration",
    icon: <FaAmazon className="text-4xl text-orange-500" />,
    description: (
      <>
        CHCKRATE is fully optimized for affiliate marketing and strictly adheres to the <strong>Amazon Associates Program</strong> guidelines.
        Our platform drives quality traffic to Amazon by offering trustworthy product options and competitive pricing information.
      </>
    ),
  },
  {
    title: "What We Offer",
    icon: <FaTags className="text-4xl text-green-600" />,
    description: (
      <>
        From electronics and computers to lifestyle gadgets, we cover high-interest product categories. We provide:
        <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
          <li>In-depth product comparisons</li>
          <li>Curated recommendations</li>
          <li>Real-time price tracking</li>
          <li>Shopping guides & deal roundups</li>
        </ul>
      </>
    ),
  },
  {
    title: "Trust & Transparency",
    icon: <FaCheckCircle className="text-4xl text-teal-500" />,
    description: (
      <>
        We aim to build trust with our audience through accurate, up-to-date, and valuable content while supporting Amazon’s mission of delivering great value to customers.
      </>
    ),
  },
];

const About = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto bg-gradient-to-b from-white to-blue-50 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-800">About CHCKRATE</h1>

      {/* Main cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl p-6 transition-transform hover:scale-105 duration-300"
          >
            <div className="flex items-start gap-4 mb-4">
              {card.icon}
              <h2 className="text-2xl font-semibold text-gray-800">{card.title}</h2>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Future Scope */}
      <div className="mt-16">
        <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col md:flex-row items-start gap-6">
          <FaRocket className="text-5xl text-purple-600" />
          <div>
            <h2 className="text-3xl font-bold text-purple-800 mb-3">Future Scope: CHCKCOIN</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              We're excited to announce a new feature under development – <strong>CHCKCOIN</strong>, a cashback reward system exclusively for CHCKRATE users!
              In future updates, customers will earn CHCKCOINs when making purchases through our platform, giving them extra savings on top of the best deals.
            </p>
            <div className="mt-4 flex items-center gap-2 text-yellow-600 font-semibold">
              <FaCoins className="text-2xl" />
              <span>Stay tuned – the value of CHCKCOIN will be announced soon!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
