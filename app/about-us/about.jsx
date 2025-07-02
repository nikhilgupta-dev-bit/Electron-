import React from "react";

const AboutUs = () => (
  <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
        About Electron
      </h1>

      <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
        At Electron, we believe in the transformative power of technology. Founded on the principle of delivering unparalleled **quality and reliability**, our e-commerce platform is dedicated to providing a curated selection of electronics that enhance your daily life, fuel your productivity, and spark your creativity.
        <br/><br/>
        In a rapidly evolving digital landscape, we stand as your **trusted partner**. Every product in our catalog, from intricate components to sophisticated gadgets, undergoes rigorous evaluation to ensure it meets the highest standards of performance, durability, and safety. We partner directly with reputable manufacturers and authorized distributors to guarantee **authenticity** and provide you with peace of mind.
        <br/><br/>
        Our commitment extends beyond just selling products. We aim to build lasting relationships with our customers by offering:
      </p>

      {/* Using an unordered list for better readability of the bullet points */}
      <ul className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed text-left space-y-2">
        <li>**Authenticity Guaranteed:** Only genuine products from trusted sources.</li>
        <li>**Rigorous Quality Control:** Every item checked for performance and reliability.</li>
        <li>**Secure & Seamless Shopping:** Your data and transactions are always protected.</li>
        <li>**Responsive Customer Support:** Ready to assist you every step of the way.</li>
      </ul>
      
      <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
        Experience the difference that genuine quality and dedicated service make. Explore **Electron** today and discover electronics you can truly rely on.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-3 text-blue-600">Quality Products</h3>
          <p className="text-gray-600">
            We source only the finest electronics from trusted manufacturers worldwide.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-3 text-green-600">Fast Delivery</h3>
          <p className="text-gray-600">
            Get your orders delivered quickly with our reliable shipping network.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-3 text-purple-600">24/7 Support</h3>
          <p className="text-gray-600">
            Our customer service team is always ready to help you with any questions.
          </p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-sm max-w-2xl mx-auto">
        <p className="text-gray-600 leading-relaxed">
          Founded in **2024**, Electron is dedicated to making online shopping easy, 
          secure, and reliable for everyone. We are committed to customer satisfaction, 
          innovation, and building lasting relationships with our customers.
        </p>
        <p className="mt-4 text-lg font-medium text-gray-800">
          Thank you for choosing Electron!
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;