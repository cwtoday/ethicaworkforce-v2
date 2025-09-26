'use client';

import React from 'react';
import { UserPlus, GraduationCap, Briefcase } from 'lucide-react';

const steps = [
  {
    icon: <UserPlus className="w-8 h-8 text-white" />,
    title: 'Register & Verify',
    description: 'Create your profile and complete our verification process to ensure quality matches.'
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-white" />,
    title: 'Learn & Prepare',
    description: 'Access exam preparation, cultural training, and visa assistance programs.'
  },
  {
    icon: <Briefcase className="w-8 h-8 text-white" />,
    title: 'Get Matched',
    description: 'Our AI-powered system connects you with the perfect opportunities worldwide.'
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-sky-100 text-sky-800 rounded-full text-sm font-medium mb-6">
            📋 Simple Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            How It Works
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A simple, three-step process to connect talented nurses with global healthcare opportunities and transform careers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 group-hover:border-sky-200">
                <div className="relative mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-sky-600 to-blue-600 rounded-3xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center">
                    <span className="text-sky-600 font-bold text-sm">{index + 1}</span>
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-6 lg:-right-8 items-center z-10">
                  <div className="w-12 lg:w-16 h-0.5 bg-gradient-to-r from-sky-200 to-blue-200"></div>
                  <div className="w-3 h-3 bg-sky-300 rounded-full ml-1"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};