'use client';

import React from 'react';
import { Globe, Shield, TrendingUp, Clock } from 'lucide-react';

const benefits = [
  {
    icon: <Globe className="w-8 h-8 text-sky-600" />,
    title: 'Global Opportunities',
    description: 'Access nursing positions worldwide with comprehensive visa and relocation support.'
  },
  {
    icon: <Shield className="w-8 h-8 text-sky-600" />,
    title: 'Ethical Recruitment',
    description: 'Fair, transparent hiring practices that respect both nurses and healthcare institutions.'
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-sky-600" />,
    title: 'Career Growth',
    description: 'Professional development programs and continuous learning opportunities.'
  },
  {
    icon: <Clock className="w-8 h-8 text-sky-600" />,
    title: 'Fast Placement',
    description: 'Streamlined matching process reduces time-to-hire for critical positions.'
  }
];

export const ValueProposition = () => {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-6">
            Transforming Healthcare Staffing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We support nurses' career growth while helping hospitals fill critical staffing gaps
            through ethical, sustainable recruitment practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl hover:bg-sky-50 transition-colors duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 rounded-2xl mb-6 group-hover:bg-sky-200 transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};