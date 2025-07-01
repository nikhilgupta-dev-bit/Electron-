import React from "react";

const AboutUs = () => (
  <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
        About Electron
      </h1>
      
      <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
        Electron is your one-stop online shop for the latest electronics and gadgets. 
        Our mission is to provide a seamless and enjoyable shopping experience, 
        offering a wide range of quality products at competitive prices, 
        delivered right to your doorstep.
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
          Founded in 2024, Electron is dedicated to making online shopping easy, 
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