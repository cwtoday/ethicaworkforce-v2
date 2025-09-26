'use client';

import React from 'react';
import Image from 'next/image';

interface HeroProps {
  onOpenLogin: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenLogin }) => {
  return (
    <section className="relative bg-gradient-to-br from-sky-50 via-white to-blue-50/30 overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="w-full h-full bg-gradient-to-br from-sky-50/30 to-blue-50/20"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-sky-100 text-sky-800 rounded-full text-sm font-medium">
                🌍 Connecting Healthcare Worldwide
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1]">
                Your Gateway to
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600 block">Global Nursing Careers</span>
              </h1>
            </div>

            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
              Ethica Workforce connects talented nurses with international opportunities while helping
              hospitals find qualified healthcare professionals worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
              <button
                onClick={() => onOpenLogin()}
                className="group bg-sky-600 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-xl font-semibold hover:bg-sky-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl relative overflow-hidden"
              >
                <span className="relative z-10">Get Started as Nurse</span>
                <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </button>
              <button
                onClick={() => onOpenLogin()}
                className="border-2 border-sky-600 text-sky-600 px-8 py-4 lg:px-10 lg:py-5 rounded-xl font-semibold hover:bg-sky-600 hover:text-white transition-all duration-200 shadow-sm hover:shadow-lg bg-white"
              >
                I&apos;m a Hospital
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <span className="text-gray-600 font-medium">Free Registration</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">🌟</span>
                </div>
                <span className="text-gray-600 font-medium">Verified Opportunities</span>
              </div>
            </div>
          </div>

          <div className="relative lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-600 rounded-3xl transform rotate-3"></div>
              <div className="relative w-full bg-white rounded-3xl p-3 shadow-2xl" style={{ aspectRatio: '4 / 5', minHeight: '400px' }}>
                <div className="relative w-full h-full overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Healthcare professionals working together"
                    fill
                    sizes="(min-width: 1024px) 45vw, 90vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Floating stats cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-lg">✓</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">2,500+</p>
                  <p className="text-gray-600 text-sm font-medium">Successful Placements</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                  <span className="text-sky-600 font-bold">🌟</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">50+</p>
                  <p className="text-gray-600 text-xs font-medium">Countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};