'use client';

import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-6">About Ethica Workforce</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We connect nurses and healthcare organizations through ethical, transparent recruitment. Our
              mission is to create lasting, positive impact for patients and professionals by raising the
              standard of global staffing.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-baseline gap-2"><span className="text-sky-600">✓</span> Compliance-first processes and verified credentials</li>
              <li className="flex items-baseline gap-2"><span className="text-sky-600">✓</span> Learning and exam preparation support</li>
              <li className="flex items-baseline gap-2"><span className="text-sky-600">✓</span> Long-term retention focus and success tracking</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Impact</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-3xl font-bold text-sky-600">2,500+</p>
                <p className="text-sm text-gray-600">Placements</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-sky-600">85%</p>
                <p className="text-sm text-gray-600">Avg. retention</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-sky-600">50+</p>
                <p className="text-sm text-gray-600">Countries</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-sky-600">100%</p>
                <p className="text-sm text-gray-600">Compliance rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


