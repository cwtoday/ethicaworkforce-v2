'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle, BookOpen, Globe, Award } from 'lucide-react';

const features = [
  { icon: <BookOpen className="w-5 h-5" />, text: 'Comprehensive exam preparation' },
  { icon: <Globe className="w-5 h-5" />, text: 'Visa assistance and relocation support' },
  { icon: <Award className="w-5 h-5" />, text: 'Professional certification programs' },
  { icon: <CheckCircle className="w-5 h-5" />, text: 'Career advancement opportunities' }
];

interface ForNursesProps {
  onOpenLogin: () => void;
}

export const ForNurses: React.FC<ForNursesProps> = ({ onOpenLogin }) => {
  return (
    <section id="nurses" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-6">
              For Nurses
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Advance your nursing career with international opportunities, comprehensive support,
              and professional development programs tailored to your goals.
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
              className="bg-sky-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-sky-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Your Journey
            </button>
          </div>

          <div className="relative">
            <div className="relative w-full" style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', minHeight: '300px' }}>
              <Image
                src="https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Nurse working with technology"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl">
              <p className="text-2xl font-bold text-sky-600">50+</p>
              <p className="text-gray-600">Countries Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};