'use client';

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Hero } from '@/components/Landing/Hero';
import { ValueProposition } from '@/components/Landing/ValueProposition';
import { HowItWorks } from '@/components/Landing/HowItWorks';
import { ForNurses } from '@/components/Landing/ForNurses';
import { ForHospitals } from '@/components/Landing/ForHospitals';
import { Testimonials } from '@/components/Landing/Testimonials';
import { Footer } from '@/components/Landing/Footer';

type Notification = { type: 'error' | 'message'; text: string } | null;

export default function LandingPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [notification, setNotification] = React.useState<Notification>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const error = searchParams.get('error');
    const message = searchParams.get('message');

    if (error) {
      setNotification({ type: 'error', text: error });
      router.replace(pathname);
    } else if (message) {
      setNotification({ type: 'message', text: message });
      router.replace(pathname);
    }
  }, [searchParams, router, pathname]);

  const handleOpenLogin = () => {
    router.push('/login');
  };

  return (
    <div className="min-h-screen">
      {notification && (
        <div className={`fixed top-0 left-0 right-0 z-50 p-4 text-center text-white ${
          notification.type === 'error' ? 'bg-red-600' : 'bg-blue-600'
        }`}>
          <p>{notification.text}</p>
          <button
            onClick={() => setNotification(null)}
            className="ml-4 text-white hover:text-gray-200"
          >
            ×
          </button>
        </div>
      )}

      <header className={`sticky left-0 right-0 z-40 bg-white/95 backdrop-blur-sm supports-[backdrop-filter]:bg-white/80 border-b border-gray-200/50 shadow-sm ${
        notification ? 'top-16' : 'top-0'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-4" aria-label="Primary">
          <div className="flex items-center justify-between">
            <a href="#" className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
              Ethica <span className="text-sky-600">Workforce</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#nurses" className="text-gray-600 hover:text-sky-600 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-sky-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500">For Nurses</a>
              <a href="#hospitals" className="text-gray-600 hover:text-sky-600 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-sky-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500">For Hospitals</a>
              <a href="#about" className="text-gray-600 hover:text-sky-600 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-sky-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500">About</a>
              <div className="flex items-center gap-3">
                <a href="/login" className="text-sky-600 font-semibold hover:text-sky-700 px-4 py-2 rounded-lg hover:bg-sky-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500">Sign In</a>
                <a href="/signup" className="bg-sky-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-sky-700 transition-colors shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500">Sign Up</a>
              </div>
            </div>
            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
          {mobileOpen && (
            <div className="md:hidden mt-6 pb-6 space-y-4 border-t border-gray-100 pt-6" role="menu">
              <a href="#nurses" className="block px-4 py-3 text-gray-600 hover:text-sky-600 hover:bg-sky-50 rounded-lg font-medium transition-colors" onClick={() => setMobileOpen(false)}>For Nurses</a>
              <a href="#hospitals" className="block px-4 py-3 text-gray-600 hover:text-sky-600 hover:bg-sky-50 rounded-lg font-medium transition-colors" onClick={() => setMobileOpen(false)}>For Hospitals</a>
              <a href="#about" className="block px-4 py-3 text-gray-600 hover:text-sky-600 hover:bg-sky-50 rounded-lg font-medium transition-colors" onClick={() => setMobileOpen(false)}>About</a>
              <div className="flex flex-col gap-3 px-2 pt-4">
                <a href="/login" className="w-full text-center text-sky-600 font-semibold px-6 py-3 rounded-lg border border-sky-200 hover:bg-sky-50 transition-colors">Sign In</a>
                <a href="/signup" className="w-full text-center bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-700 shadow-sm transition-colors">Sign Up</a>
              </div>
            </div>
          )}
        </nav>
      </header>

      <Hero onOpenLogin={handleOpenLogin} />
      <ValueProposition />
      <HowItWorks />
      <ForNurses onOpenLogin={handleOpenLogin} />
      <ForHospitals onOpenLogin={handleOpenLogin} />
      <Testimonials />
      <section id="about" className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
              💼 Our Mission
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-6">About Ethica Workforce</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We connect nurses and healthcare organizations through ethical, transparent recruitment, creating lasting impact for patients and professionals worldwide.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our mission is to create lasting, positive impact for patients and professionals by raising the
                  standard of global healthcare staffing through ethical practices and comprehensive support.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sky-600 font-semibold text-sm">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium">Compliance-first processes and verified credentials</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sky-600 font-semibold text-sm">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium">Learning and exam preparation support</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sky-600 font-semibold text-sm">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium">Long-term retention focus and success tracking</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-gray-200 p-8 lg:p-10 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Impact</h3>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="bg-sky-50 rounded-2xl p-6 mb-3">
                    <p className="text-4xl font-bold text-sky-600 mb-2">2,500+</p>
                    <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Successful Placements</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-green-50 rounded-2xl p-6 mb-3">
                    <p className="text-4xl font-bold text-green-600 mb-2">85%</p>
                    <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Average Retention</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-purple-50 rounded-2xl p-6 mb-3">
                    <p className="text-4xl font-bold text-purple-600 mb-2">50+</p>
                    <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Countries Served</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-amber-50 rounded-2xl p-6 mb-3">
                    <p className="text-4xl font-bold text-amber-600 mb-2">100%</p>
                    <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Compliance Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer onOpenLogin={handleOpenLogin} />
    </div>
  );
}
