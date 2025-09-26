'use client';

import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

interface FooterProps {
  onOpenLogin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLogin }) => {
  const handleAgentLogin = async () => {
    // This would typically integrate with your auth system
    console.log('Agent login');
    if (onOpenLogin) {
      onOpenLogin();
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Ethica Workforce</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Connecting healthcare professionals with global opportunities through ethical,
              transparent recruitment practices.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">For Nurses</h4>
            <ul className="space-y-3 text-gray-400 list-none pl-0">
              <li><a href="#" className="hover:text-white transition-colors">Browse Jobs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Exam Preparation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Visa Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">For Hospitals</h4>
            <ul className="space-y-3 text-gray-400 list-none pl-0">
              <li><a href="#" className="hover:text-white transition-colors">Post Jobs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Find Candidates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">For Agents</h4>
            <ul className="space-y-3 text-gray-400 list-none pl-0">
              <li>
                <button
                  onClick={() => handleAgentLogin()}
                  className="hover:text-white transition-colors text-left"
                >
                  Nurse Agents
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleAgentLogin()}
                  className="hover:text-white transition-colors text-left"
                >
                  Hospital Agents
                </button>
              </li>
              <li><a href="#" className="hover:text-white transition-colors">Partnership Program</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Agent Resources</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <span>Contact Us</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span>hello@ethicaworkforce.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 Ethica Workforce. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};