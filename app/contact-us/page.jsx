import React from "react";

export default function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-br from-purple-50 to-pink-100 text-gray-800 font-inter perspective-1000"> {/* Added gradient background, increased padding, and perspective for 3D effects */}
      <div className="max-w-2xl mx-auto text-center p-10 bg-white bg-opacity-95 rounded-3xl shadow-3xl border border-purple-200 transform-gpu hover:scale-102 hover:shadow-4xl transition-all duration-500 ease-in-out"> {/* Enhanced container with more padding, higher opacity, rounded corners, stronger shadow, border, and subtle hover effects */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-purple-800 tracking-tight leading-tight drop-shadow-lg"> {/* Larger, bolder, darker heading with text shadow */}
          Contact Us
        </h1>
        <p className="text-xl md:text-2xl max-w-xl mx-auto mb-10 leading-relaxed text-gray-700"> {/* Larger text for the main paragraph */}
          For any inquiries, please don't hesitate to reach out to our dedicated support team. We are here to help you with all your questions and needs.
        </p>
        <p className="text-2xl md:text-3xl font-semibold mb-12 text-gray-900"> {/* Larger and bolder text for the email call-out */}
          Email us at:
          <br />
          <a
            href="mailto:support@nikhilunofficial123@gmail.com"
            className="inline-block mt-4 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out text-xl md:text-2xl" // Styled email link as a prominent button
          >
            support@nikhilunofficial123@gmail.com
          </a>
        </p>
        <p className="text-lg text-gray-600 mt-8">
          We look forward to hearing from you!
        </p>
      </div>
    </div>
  );
}