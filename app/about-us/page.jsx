import React from "react";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-br from-blue-100 to-indigo-200 text-gray-800 font-inter perspective-1000"> {/* Increased vertical padding, lighter gradient, added perspective */}
      <div className="max-w-5xl mx-auto text-center p-8 bg-white bg-opacity-95 rounded-3xl shadow-3xl border border-blue-300 transform-gpu hover:scale-102 hover:shadow-4xl transition-all duration-500 ease-in-out"> {/* Increased padding, higher opacity, larger shadow, subtle scale on hover, smoother transition */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-10 text-indigo-900 tracking-tight leading-tight drop-shadow-lg"> {/* Darker text, larger bottom margin, added text shadow for depth */}
          About Electron
        </h1>

        <p className="text-lg md:text-xl max-w-4xl mx-auto mb-12 leading-relaxed text-gray-800"> {/* Darker text for better contrast */}
          At <strong className="text-indigo-800">Electron</strong>, we believe in the transformative power of technology. Founded on the principle of delivering unparalleled <strong className="text-indigo-800">quality and reliability</strong>, our e-commerce platform is dedicated to providing a curated selection of electronics that enhance your daily life, fuel your productivity, and spark your creativity.
          <br/><br/>
          In a rapidly evolving digital landscape, we stand as your <strong className="text-indigo-800">trusted partner</strong>. Every product in our catalog, from intricate components to sophisticated gadgets, undergoes rigorous evaluation to ensure it meets the highest standards of performance, durability, and safety. We partner directly with reputable manufacturers and authorized distributors to guarantee <strong className="text-indigo-800">authenticity</strong> and provide you with peace of mind.
          <br/><br/>
          Our commitment extends beyond just selling products. We aim to build lasting relationships with our customers by offering:
        </p>

        <ul className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed text-left space-y-4 list-disc list-inside text-gray-800"> {/* Increased space-y, darker text */}
          <li><strong className="text-indigo-700">Authenticity Guaranteed:</strong> Only genuine products from trusted sources.</li>
          <li><strong className="text-indigo-700">Rigorous Quality Control:</strong> Every item checked for performance and reliability.</li>
          <li><strong className="text-indigo-700">Secure & Seamless Shopping:</strong> Your data and transactions are always protected.</li>
          <li><strong className="text-indigo-700">Responsive Customer Support:</strong> Ready to assist you every step of the way.</li>
        </ul>
        
        <p className="text-lg md:text-xl max-w-4xl mx-auto mb-16 leading-relaxed text-gray-800">
          Experience the difference that genuine quality and dedicated service make. Explore <strong className="text-indigo-800">Electron</strong> today and discover electronics you can truly rely on.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mb-20"> {/* Increased gap and bottom margin */}
          <div className="bg-white p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-z-1 hover:scale-105 border border-blue-200 perspective-1000"> {/* Increased padding, more rounded, stronger initial shadow, even stronger hover shadow, translate-y, slight Z-axis rotation, scale, and perspective for a more pronounced 3D effect */}
            <h3 className="text-2xl font-bold mb-5 text-blue-800 drop-shadow-md">Quality Products</h3> {/* Darker blue, added text shadow */}
            <p className="text-gray-700">
              We source only the finest electronics from trusted manufacturers worldwide, ensuring superior performance and durability.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-z-1 hover:scale-105 border border-green-200 perspective-1000"> {/* Similar enhancements */}
            <h3 className="text-2xl font-bold mb-5 text-green-800 drop-shadow-md">Fast & Reliable Delivery</h3> {/* Darker green, added text shadow */}
            <p className="text-gray-700">
              Get your orders delivered swiftly and securely to your doorstep with our optimized global shipping network.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-z-1 hover:scale-105 border border-purple-200 perspective-1000"> {/* Similar enhancements */}
            <h3 className="text-2xl font-bold mb-5 text-purple-800 drop-shadow-md">Dedicated 24/7 Support</h3> {/* Darker purple, added text shadow */}
            <p className="text-gray-700">
              Our expert customer service team is always ready to assist you, providing prompt and helpful solutions around the clock.
            </p>
          </div>
        </div>

        <div className="bg-white p-12 rounded-3xl shadow-2xl max-w-3xl mx-auto border border-gray-300 transform-gpu hover:scale-102 hover:shadow-3xl transition-all duration-500 ease-in-out"> {/* Increased padding, more rounded, stronger shadow, subtle scale on hover, smoother transition */}
          <p className="text-gray-800 leading-relaxed text-xl"> {/* Darker text */}
            Founded in <strong className="text-indigo-800">2025</strong>, Electron is dedicated to making online shopping easy, 
            secure, and reliable for everyone. We are committed to customer satisfaction, 
            innovation, and building lasting relationships with our customers.
          </p>
          <p className="mt-8 text-xl font-semibold text-indigo-900"> {/* Darker, bolder text, increased top margin */}
            Thank you for choosing Electron!
          </p>
        </div>
      </div>
    </div>
  );
}
