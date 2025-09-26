'use client';

import React from 'react';
import Image from 'next/image';
import { Shield, Clock, Users, BarChart3 } from 'lucide-react';

const features = [
  { icon: <Users className="w-5 h-5" />, text: 'Pre-screened, qualified candidates' },
  { icon: <Shield className="w-5 h-5" />, text: 'Full compliance and verification' },
  { icon: <Clock className="w-5 h-5" />, text: 'Reduced time-to-hire' },
  { icon: <BarChart3 className="w-5 h-5" />, text: 'Performance tracking and analytics' }
];

interface ForHospitalsProps {
  onOpenLogin: () => void;
}

export const ForHospitals: React.FC<ForHospitalsProps> = ({ onOpenLogin }) => {
  return (
    <section id="hospitals" className="py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="relative w-full" style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', minHeight: '300px' }}>
              <Image
                src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Hospital staff meeting"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-xl">
              <p className="text-2xl font-bold text-green-600">85%</p>
              <p className="text-gray-600">Retention Rate</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-6">
              For Hospitals
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Fill critical staffing gaps with qualified, international nurses.
              Our comprehensive vetting process ensures you get the best talent.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="text-sky-600">
                    {feature.icon}
                  </div>
                  <span className="text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onOpenLogin()}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Post a Position
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};