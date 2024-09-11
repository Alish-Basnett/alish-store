import React from "react";
import mani from "../assets/manibasnet.jpg";
import rupa from "../assets/rupabasnet.jpg";
import aryan from "../assets/aryan.jpg";
import susma from "../assets/susmashrestha.jpg";
import animesh from "../assets/animeshbhattarai.jpg";
import nischal from "../assets/nischalkhatiwada.jpeg";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-4xl font-bold text-center mb-12">
          About Alish Store
        </h1>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            At Alish Store, our mission is to provide a diverse range of
            high-quality products that meet the needs of our customers while
            ensuring excellent customer service. We strive to offer the best
            shopping experience by combining convenience, reliability, and
            affordability.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We are committed to building lasting relationships with our
            customers and continuously improving our services. Whether you're
            shopping for the latest trends or everyday essentials, our goal is
            to make your experience as seamless and enjoyable as possible.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
          <ul className="space-y-4 text-gray-700">
            {/* Values content remains unchanged */}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={mani}
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Mr. Mani Kr. Basnet
              </h3>
              <p className="text-gray-700">CEO & Founder</p>
              <p className="text-gray-600 mt-2">
                Mr. Basnet is passionate about creating exceptional shopping
                experiences and leads our team with vision and dedication.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={rupa}
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Mrs. Rupa Basnet</h3>
              <p className="text-gray-700">Chief Operating Officer</p>
              <p className="text-gray-600 mt-2">
                Mrs. Basnet ensures our operations run smoothly and efficiently,
                bringing operational excellence to every aspect of our business.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={aryan}
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Mr. Aryan Dhakal</h3>
              <p className="text-gray-700">Head of Marketing</p>
              <p className="text-gray-600 mt-2">
                Mr. Dhakal crafts compelling marketing strategies to elevate our
                brand and connect with customers.
              </p>
            </div>

            {/* Add Susma Shrestha */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={susma}
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Ms. Susma Shrestha</h3>
              <p className="text-gray-700">Junior Accountant</p>
              <p className="text-gray-600 mt-2">
                Ms. Shrestha plays a key role in managing financial transactions
                and maintaining records.
              </p>
            </div>

            {/* Add Ayush Khatiwada */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={nischal}
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Mr. Nischal Khatiwada
              </h3>
              <p className="text-gray-700">Senior Accountant</p>
              <p className="text-gray-600 mt-2">
                Mr. Khatiwada oversees our financial operations and ensures the
                accuracy of our financial records.
              </p>
            </div>

            {/* Add Animesh Bhattarai */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={animesh}
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Mr. Animesh Bhattarai
              </h3>
              <p className="text-gray-700">Business Development</p>
              <p className="text-gray-600 mt-2">
                Mr. Bhattarai works on strategic initiatives to expand our
                business and improve services.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            Founded in 2003, Alish Store began with a simple goal: to provide a
            diverse range of products that meet the evolving needs of our
            customers. From our humble beginnings, we have grown into a trusted
            name in retail, committed to offering quality products and
            exceptional service.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Our journey is driven by our dedication to innovation, excellence,
            and a customer-first approach. We continue to adapt and grow,
            striving to exceed expectations and deliver value with every
            interaction.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
