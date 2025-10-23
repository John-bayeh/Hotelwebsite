import React from "react";
import H from "./assets/Hotel5.jpg";
import H2 from "./assets/weeding.jpg";

export default function About() {
  return (
    <div className="w-full flex flex-col items-center text-center bg-gray-50 text-gray-800">
      {/* ---- Hero Section ---- */}
      <div className="relative w-full h-[400px]">
        <img
          src={H}
          alt="About Glory"
          className="w-full h-full object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            About Us
          </h1>
        </div>
      </div>

      {/* ---- About Text ---- */}
      <div className="max-w-4xl px-6 py-12 leading-relaxed">
        <p className="mb-6">
          At <span className="font-semibold">Tsedey</span>, we believe in
          elevating the art of celebration. Nestled in the heart of Catford,
          South East London, our venue is a beautiful and versatile space
          designed to make every occasion memorable. Whether you're planning a
          wedding, birthday party, corporate meeting, or product launch, we
          offer the perfect setting for your event.
        </p>

        <p className="mb-6">
          Our venue boasts a stunning interior, creating an atmosphere that is
          both elegant and welcoming. Conveniently located with ample parking,
          we ensure your guests have seamless access and an unforgettable
          experience from start to finish.
        </p>

        <p className="mb-6">
          We are dedicated to making every celebration a success. Our passionate
          team delivers exceptional service, attention to detail, and the
          flexibility you need to bring your vision to life.
        </p>

        <p>
          Let us help you bring your special occasion to life — elevating the
          art of celebration every step of the way.
        </p>
      </div>

      {/* ---- Highlights Section ---- */}
      <div className="flex flex-wrap justify-center gap-10 py-8 text-gray-700 font-medium">
        <div className="flex items-center gap-2">
          <span className="text-yellow-500 text-xl">⭐</span> Tested
        </div>
        <div className="flex items-center gap-2">
          <span className="text-green-600 text-xl">✅</span> Approved
        </div>
        <div className="flex items-center gap-2">
          <span className="text-blue-600 text-xl">🔒</span> Trusted
        </div>
      </div>

      {/* ---- Second Image ---- */}
      <div className="w-full">
        <img
          src={H2}
          alt="Glory Events"
          className="w-full h-[350px] object-cover"
        />
      </div>

      {/* ---- Features Section ---- */}
      <div className="max-w-5xl px-6 py-10 text-left">
        <h2 className="text-2xl font-bold text-center mb-6">
          Why Choose Glory?
        </h2>
        <ul className="space-y-4 list-disc list-inside text-gray-700 leading-relaxed">
          <li>
            <span className="font-semibold">Transparent Pricing:</span> No
            hidden fees, no corkage charges, and competitive rates for every
            event size.
          </li>
          <li>
            <span className="font-semibold">Full Kitchen Access:</span> Bring
            your own catering or collaborate with our trusted partners for a
            seamless experience.
          </li>
          <li>
            <span className="font-semibold">Prime Location:</span> Easily
            accessible from public transport and major routes in South East
            London.
          </li>
          <li>
            <span className="font-semibold">Customizable Spaces:</span> From
            small gatherings to grand celebrations — we adapt to your needs.
          </li>
        </ul>
      </div>

      {/* ---- Footer ---- */}
      <footer className="w-full border-t py-6 mt-8 bg-white">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Tsedey Hotel. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
