'use client';

import { 
  Globe2, 
  LayoutTemplate, 
  Users, 
  Monitor, 
  ClipboardCheck, 
  MessageCircle, 
  Settings,
  ShieldCheck,
  Check,
  X,
  Clock,
  Layout,
  MailCheck,
  AlertCircle,
  ArrowRight,
  Menu,
  X as CloseIcon
} from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Global Visual FX Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-white transition-colors duration-500">
        {/* Ambient Glow Blobs */}
        <div className="ambient-glow">
          <div className="glow-blob bg-orange-100/50 w-[600px] h-[600px] top-[-20%] left-[-10%] mix-blend-multiply animate-blob" />
          <div className="glow-blob bg-orange-200/40 w-[500px] h-[500px] top-[40%] right-[-10%] mix-blend-multiply animate-blob" style={{ animationDelay: '2s' }} />
          <div className="glow-blob bg-amber-100/50 w-[400px] h-[400px] bottom-[-10%] left-[20%] mix-blend-multiply animate-blob" style={{ animationDelay: '4s' }} />
        </div>

        {/* Vertical Laser Beams */}
        <div className="laser-beam-container fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="energy-streak layer-far" style={{ left: '2%', animationDuration: '13s', animationDelay: '-2s', ['--streak-opacity' as string]: '0.04', ['--streak-color' as string]: '#fb923c' }} />
          <div className="energy-streak layer-mid" style={{ left: '22%', animationDuration: '8s', animationDelay: '-5s', ['--streak-opacity' as string]: '0.08', ['--streak-color' as string]: '#fb923c' }} />
          <div className="energy-streak layer-mid" style={{ left: '60%', animationDuration: '8s', animationDelay: '-8s', ['--streak-opacity' as string]: '0.09', ['--streak-color' as string]: '#fb923c' }} />
          <div className="energy-streak layer-near" style={{ left: '88%', animationDuration: '5s', animationDelay: '-4s', ['--streak-opacity' as string]: '0.15', ['--streak-color' as string]: '#f97316' }} />
        </div>

        {/* Tech Background Grid */}
        <div className="tech-grid bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px]" />

        {/* Top Edge Light */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent to-transparent via-orange-500/50" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 border-b bg-white/80 backdrop-blur-xl border-slate-200 transition-all duration-300">
        <button onClick={() => window.scrollTo(0,0)} className="flex items-center gap-2 cursor-pointer group">
          <div className="relative flex items-center justify-center w-9 h-9 transition-transform group-active:scale-95 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg border border-orange-200/50 shadow-sm">
            <Globe2 className="text-orange-600" width={20} height={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm tracking-tight font-bold text-slate-900 leading-none">Western Buyer</span>
            <span className="text-[9px] tracking-widest text-orange-600 uppercase font-mono mt-0.5">System</span>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 p-1 rounded-full border backdrop-blur-md bg-slate-50/50 border-slate-200">
          <button onClick={() => scrollToSection('challenge')} className="px-4 py-1.5 text-xs font-medium rounded-full transition-all text-slate-500 hover:text-slate-900 hover:bg-white/80">
            The Challenge
          </button>
          <button onClick={() => scrollToSection('system')} className="px-4 py-1.5 text-xs font-medium rounded-full transition-all text-slate-500 hover:text-slate-900 hover:bg-white/80">
            System
          </button>
          <button onClick={() => scrollToSection('pricing')} className="px-4 py-1.5 text-xs font-medium rounded-full transition-all text-slate-500 hover:text-slate-900 hover:bg-white/80">
            Investment
          </button>
          <button onClick={() => scrollToSection('apply')} className="px-4 py-1.5 text-xs font-medium rounded-full transition-all text-slate-500 hover:text-slate-900 hover:bg-white/80">
            Apply
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-slate-600">
            {mobileMenuOpen ? <CloseIcon width={20} /> : <Menu width={20} />}
          </button>
          <button onClick={() => scrollToSection('apply')} className="group relative text-xs font-semibold bg-white border px-5 py-2 rounded-md transition-all overflow-hidden hover:border-orange-500/50 shadow-sm text-slate-900 border-slate-200 active:scale-95">
            <span className="hidden md:inline">Apply Now</span>
            <span className="md:hidden">Apply</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20 px-6 md:hidden">
          <div className="flex flex-col gap-4">
            <button onClick={() => scrollToSection('challenge')} className="text-left py-3 text-lg font-medium text-slate-700 border-b border-slate-100">The Challenge</button>
            <button onClick={() => scrollToSection('system')} className="text-left py-3 text-lg font-medium text-slate-700 border-b border-slate-100">System</button>
            <button onClick={() => scrollToSection('pricing')} className="text-left py-3 text-lg font-medium text-slate-700 border-b border-slate-100">Investment</button>
            <button onClick={() => scrollToSection('apply')} className="text-left py-3 text-lg font-medium text-slate-700 border-b border-slate-100">Apply</button>
          </div>
        </div>
      )}

      {/* Main Hero */}
      <main id="home" className="min-h-screen flex flex-col overflow-hidden z-10 w-full pt-32 pb-20 relative items-center">
        {/* Hero Text */}
        <div className="z-20 text-center max-w-5xl mr-auto ml-auto pr-6 pl-6 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-50 text-[11px] font-medium mb-6 animate-fade-in shadow-[0_0_20px_rgba(249,115,22,0.15)] text-orange-700 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-orange-400"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span>Global Reach. Trust-Optimized.</span>
          </div>

          <h1 className="flex flex-col items-center text-center z-20 mt-2 mb-8">
            <span className="block text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-slate-900 leading-[0.95] animate-slide-up bg-clip-text text-transparent bg-gradient-to-b from-slate-900 via-slate-800 to-slate-600 drop-shadow-sm pb-2 md:pb-3">
              Get Western Buyer
              <br />
              <span className="text-slate-900">Requests</span>
              <br className="md:hidden" />
              <span className="text-3xl md:text-5xl lg:text-6xl">in 21 Days.</span>
            </span>

            <span className="block text-2xl md:text-3xl font-serif italic font-light text-slate-500 tracking-tight mt-4 opacity-100 max-w-3xl mx-auto">
              Launch a One-Page System to convert traffic without hiring a Western marketing team.
            </span>
          </h1>

          <p className="leading-relaxed text-base max-w-2xl mx-auto mb-10 font-light text-slate-600 relative z-20 animate-slide-up-delayed" style={{ animationDelay: '0.2s' }}>
            Turn your existing reputation, trade show presence, and Alibaba traffic into consistent buyer requests from <span className="text-slate-900 font-medium">U.S. and EU buyers</span>.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-5 relative z-20 animate-slide-up-delayed" style={{ animationDelay: '0.3s' }}>
            <div className="btn-glow-border group cursor-pointer w-full md:w-auto shadow-lg shadow-orange-500/10">
              <button onClick={() => scrollToSection('apply')} className="relative z-10 w-full md:w-auto block px-8 py-3.5 bg-slate-900 text-sm font-semibold rounded-[5px] transition-all hover:bg-slate-800 active:bg-black text-white">
                Book Your 21-Day Build
              </button>
            </div>

            <button onClick={() => scrollToSection('system')} className="group flex transition-all md:w-auto text-sm font-medium bg-white/80 w-full border border-slate-200 rounded-md pt-3 pr-6 pb-3 pl-6 gap-x-2 gap-y-2 items-center justify-center hover:text-slate-900 text-slate-500 active:scale-95 shadow-sm backdrop-blur-sm">
              <LayoutTemplate className="text-slate-400 group-hover:text-orange-500 transition-colors" width={16} />
              <span className="border-b border-transparent group-hover:border-slate-500 transition-all">
                See What&apos;s Included
              </span>
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 text-xs font-medium text-slate-400 animate-slide-up-delayed" style={{ animationDelay: '0.4s' }}>
            <span>Trusted by manufacturers in:</span>
            <div className="flex gap-2 text-lg">
              <span title="China">🇨🇳</span>
              <span title="Japan">🇯🇵</span>
              <span title="Korea">🇰🇷</span>
              <span title="Vietnam">🇻🇳</span>
              <span className="text-slate-300">→</span>
              <span title="USA">🇺🇸</span>
            </div>
          </div>
        </div>

        {/* Dashboard Interface */}
        <div className="dashboard-container w-full max-w-6xl z-20 mx-auto px-4 relative animate-slide-up-delayed mt-[80px]" style={{ animationDelay: '0.5s' }}>
          <div className="dashboard-ui relative w-full rounded-xl bg-white overflow-hidden border border-slate-200/60">
            {/* Window Header */}
            <div className="h-9 border-b bg-slate-50 border-slate-200 flex items-center px-4 justify-between select-none">
              <div className="flex gap-1.5 opacity-60">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
              </div>
              <div className="text-[10px] font-mono text-slate-400 tracking-widest uppercase flex items-center gap-2">
                <ShieldCheck width={12} />
                Trust_Flow_Optimized
              </div>
              <div className="w-10"></div>
            </div>

            {/* Main System Diagram */}
            <div className="relative p-6 md:p-10 min-h-[420px] flex flex-col justify-center bg-slate-50/30 overflow-hidden">
              {/* Background Grid */}
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.5 }}></div>

              {/* Flow Container */}
              <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-8 md:gap-4">
                {/* STEP 1: Traffic Source */}
                <div className="flex-1 flex flex-col items-center group">
                  <div className="mb-4 transform transition-all duration-500 md:group-hover:-translate-y-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm backdrop-blur-sm">
                      <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold">Current Traffic</span>
                      <span className="text-xs font-mono font-bold text-slate-900">High Volume</span>
                    </div>
                  </div>

                  <div className="relative w-full max-w-[240px] p-px rounded-xl bg-gradient-to-b from-slate-200 to-slate-100 shadow-lg transition-transform md:group-hover:scale-105 duration-300">
                    <div className="bg-white rounded-[11px] p-5 relative overflow-hidden h-full flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mb-3 text-slate-500 border border-slate-200">
                        <Users width={18} />
                      </div>
                      <h3 className="text-sm font-semibold text-slate-900 mb-1">Existing Exposure</h3>
                      <p className="text-[10px] text-slate-500 leading-snug">Trade Shows, Alibaba, Website visits that usually bounce.</p>
                    </div>
                  </div>
                </div>

                {/* CONNECTION 1 (Beam) */}
                <div className="hidden md:flex flex-col justify-center flex-1 mx-2 relative h-12">
                  <div className="h-[2px] w-full bg-slate-200 relative overflow-hidden rounded-full">
                    <div className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-flow-beam" style={{ left: '-50%' }}></div>
                  </div>
                </div>
                {/* Mobile Vertical Line */}
                <div className="md:hidden h-12 w-[2px] bg-slate-200 mx-auto relative overflow-hidden rounded-full">
                  <div className="absolute left-0 right-0 h-1/2 bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-flow-beam-vertical w-full" style={{ top: '-50%' }}></div>
                </div>

                {/* STEP 2: The System */}
                <div className="flex-[1.4] flex flex-col items-center z-20 group">
                  <div className="mb-5 transform transition-all duration-500 md:group-hover:-translate-y-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 shadow-sm shadow-orange-500/10 backdrop-blur-sm">
                      <span className="text-[9px] uppercase tracking-wider text-orange-600 font-bold">Trust Optimization</span>
                      <span className="text-xs font-mono font-bold text-orange-700">Active</span>
                    </div>
                  </div>

                  <div className="relative w-full max-w-[320px] p-[1px] rounded-2xl bg-gradient-to-br from-orange-300 via-orange-500 to-amber-600 shadow-[0_0_50px_-10px_rgba(249,115,22,0.25)] transition-transform md:group-hover:scale-105 duration-300">
                    <div className="bg-white rounded-[15px] p-6 relative overflow-hidden h-full">
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/10 blur-3xl pointer-events-none"></div>

                      <div className="flex items-center gap-4 mb-5 border-b border-slate-100 pb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/20 shrink-0">
                          <ShieldCheck width={24} />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-slate-900 leading-tight">Western Buyer System</h3>
                          <p className="text-[10px] text-orange-600 font-medium uppercase tracking-wide">Trust & Conversion Layer</p>
                        </div>
                      </div>

                      <div className="space-y-2.5">
                        <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50 border border-slate-100">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_5px_#f97316]"></div>
                          <span className="text-[11px] font-medium text-slate-700">Clear positioning & IP safety</span>
                        </div>
                        <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50 border border-slate-100">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_5px_#f97316]"></div>
                          <span className="text-[11px] font-medium text-slate-700">Factory proof & certifications</span>
                        </div>
                        <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50 border border-slate-100">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_5px_#f97316]"></div>
                          <span className="text-[11px] font-medium text-slate-700">High-conversion RFQ forms</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CONNECTION 2 */}
                <div className="hidden md:flex flex-col justify-center flex-1 mx-2 relative h-12">
                  <div className="h-[2px] w-full bg-slate-200 relative overflow-hidden rounded-full">
                    <div className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-flow-beam" style={{ left: '-50%', animationDelay: '1s' }}></div>
                  </div>
                </div>
                <div className="md:hidden h-12 w-[2px] bg-slate-200 mx-auto relative overflow-hidden rounded-full">
                  <div className="absolute left-0 right-0 h-1/2 bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-flow-beam-vertical w-full" style={{ top: '-50%', animationDelay: '1s' }}></div>
                </div>

                {/* STEP 3: Outcome */}
                <div className="flex-1 flex flex-col items-center group">
                  <div className="mb-4 transform transition-all duration-500 md:group-hover:-translate-y-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 shadow-sm backdrop-blur-sm">
                      <span className="text-[9px] uppercase tracking-wider text-emerald-600 font-bold">Conversion</span>
                      <span className="text-xs font-mono font-bold text-emerald-700">Success</span>
                    </div>
                  </div>

                  <div className="relative w-full max-w-[240px] p-px rounded-xl bg-gradient-to-b from-emerald-400 to-emerald-600 shadow-[0_0_30px_-5px_rgba(16,185,129,0.2)] transition-transform md:group-hover:scale-105 duration-300">
                    <div className="bg-white rounded-[11px] p-5 relative overflow-hidden h-full flex flex-col items-center text-center">
                      <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none"></div>
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mb-3 text-emerald-600 border border-emerald-200">
                        <MailCheck width={18} />
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1">Qualified Inquiry</h3>
                      <p className="text-[10px] text-emerald-700 font-medium leading-snug">Western Buyer Request (USA, UK, EU)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 left-0 right-0 text-center">
                <div className="inline-flex items-center gap-2 text-[10px] text-slate-400 font-mono uppercase tracking-widest opacity-60">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                  System Operational
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="horizon-ring border border-slate-200 shadow-[0_-40px_100px_-20px_rgba(249,115,22,0.1),inset_0_20px_100px_-20px_rgba(249,115,22,0.05)]"></div>
      </main>

      {/* Challenge vs Solution Section */}
      <section id="challenge" className="relative py-24 bg-transparent overflow-hidden border-t border-slate-200">
        <div className="absolute inset-0 bg-slate-50/50 -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium text-slate-900 tracking-tight font-serif mb-4">The Trust Gap</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Why strong factories still struggle to convert Western buyers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* The Problem */}
            <div className="p-8 rounded-xl border border-red-100 bg-red-50/30 hover:border-red-200 transition-all relative group backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6 text-red-500 border border-red-100">
                <AlertCircle width={24} />
              </div>
              <h3 className="text-xl text-slate-900 font-medium mb-3">The Hesitation</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Western brands hesitate to inquire because of <strong>quality, IP, and reliability concerns</strong>. Your standard site or generic Alibaba listing rarely solves this because it wasn&apos;t built for Western buyer psychology.
              </p>
            </div>

            {/* The Solution */}
            <div className="p-8 rounded-xl border border-orange-200 bg-white shadow-xl shadow-orange-500/10 transition-all relative group backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mb-6 text-orange-600 border border-orange-100">
                <Check width={24} />
              </div>
              <h3 className="text-xl text-slate-900 font-medium mb-3">The Western Buyer System</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our system fixes the gap—helping you look <strong>credible, safe, and professional</strong>. Every part is designed to overcome the &quot;Made in China&quot; trust gap and position your factory like a Western‑grade supplier.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-6 text-sm font-medium text-slate-500">
              <span className="flex items-center gap-2"><Clock className="text-orange-500" /> Launch in 21 Days</span>
              <span className="flex items-center gap-2"><Layout className="text-orange-500" /> Western Design</span>
              <span className="flex items-center gap-2"><Users className="text-orange-500" /> No Overseas Staff</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services (Bento Grid) */}
      <section className="overflow-hidden bg-transparent border-slate-200 border-t pt-32 pb-32 relative" id="system">
        <div className="absolute inset-0 bg-slate-50/20 -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-20 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 font-serif text-slate-900">
              Everything You Need to <span className="font-serif text-orange-600">Convert.</span>
            </h2>
            <p className="text-lg leading-relaxed font-light text-slate-600">
              A complete system designed specifically for SME manufacturers targeting U.S. and EU markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 relative z-10">
            {/* Item 1: Landing Page */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:border-orange-500/30 md:col-span-2 lg:col-span-6 lg:row-span-2">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.08),transparent_50%)] opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-orange-100 bg-orange-50 text-orange-600 transition-colors duration-300 shadow-sm">
                    <Monitor width={28} />
                  </div>
                  <h3 className="text-2xl font-medium tracking-tight text-slate-900">Western-Optimized Landing Page</h3>
                </div>
                <p className="mb-8 text-base leading-relaxed text-slate-600 flex-1">
                  A sleek English + Chinese page (optional 3rd language) with clear positioning, certifications, and factory proof. Modern design specifically tailored to Western expectations.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 transition-colors group-hover:border-orange-200">Trust Elements</div>
                  <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 transition-colors group-hover:border-orange-200">Mobile Optimized</div>
                  <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 transition-colors group-hover:border-orange-200">Factory Virtual Tour</div>
                  <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 transition-colors group-hover:border-orange-200">Certification Showcase</div>
                </div>
              </div>
            </div>

            {/* Item 2: RFQ System */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-emerald-500/30 md:col-span-2 lg:col-span-6">
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-600 transition-colors duration-300 shadow-sm">
                    <ClipboardCheck width={24} />
                  </div>
                  <h3 className="text-xl font-medium tracking-tight text-slate-900">High-Conversion RFQ System</h3>
                </div>
                <p className="mb-6 text-sm leading-relaxed text-slate-600 flex-1">
                  Custom forms for Western buyers capturing specs, MOQ, region, and timelines. Inquiries go directly to email/WeChat.
                </p>
                <div className="flex items-center gap-2 opacity-80 mt-auto text-emerald-600 font-mono text-xs uppercase tracking-wide">
                  <Check width={16} /> Direct to Inbox
                </div>
              </div>
            </div>

            {/* Item 3: Messaging Guide */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-amber-500/30 md:col-span-2 lg:col-span-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.08),transparent_50%)]"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-amber-100 bg-amber-50 text-amber-600 transition-colors duration-300 shadow-sm">
                    <MessageCircle width={24} />
                  </div>
                  <h3 className="text-xl font-medium tracking-tight text-slate-900">Buyer Messaging Guide</h3>
                </div>
                <p className="mb-6 text-sm leading-relaxed text-slate-600 flex-1">
                  15 templates addressing quality, IP, compliance, and reliability. Copy written in clear English and localized for your team.
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-medium text-amber-600 transition-colors hover:text-amber-500 mt-auto">
                  View Template Preview <ArrowRight width={12} />
                </div>
              </div>
            </div>

            {/* Item 4: Tech Setup */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-slate-500/30 md:col-span-2 lg:col-span-12">
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 h-full">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-600 shadow-sm">
                  <Settings width={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium tracking-tight text-slate-900">Technical Setup & Integration</h3>
                  <p className="text-xs leading-relaxed text-slate-600 mt-2">
                    Complete domain/subdomain setup and analytics tracking for lead sources. We handle the tech so you focus on production.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="relative py-12 md:py-24 bg-transparent border-t border-slate-200 overflow-hidden" id="bonuses">
        <div className="absolute inset-0 bg-orange-50/20 -z-10"></div>

        <div className="z-10 flex flex-col max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center">
          <div className="text-center mb-10 md:mb-16 max-w-3xl">
            <span className="text-xs font-mono text-orange-600 uppercase tracking-widest mb-6 block">
              Included Bonuses
            </span>
            <h2 className="md:text-4xl text-3xl font-medium text-slate-900 tracking-tight mb-6">
              Extra Value to Accelerate Success
            </h2>
            <p className="text-slate-600 text-lg font-light max-w-xl mx-auto">
              Everything you need to maximize your Western buyer conversions — included at no extra cost.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl relative z-10">
            {/* Bonus 1 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:border-orange-200 transition-colors">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
                <span className="text-orange-500">01.</span> Custom RFQ Mechanism
              </h4>
              <p className="text-sm text-slate-600">Category-specific inquiry forms that capture exactly what Western buyers need.</p>
            </div>
            {/* Bonus 2 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:border-orange-200 transition-colors">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
                <span className="text-orange-500">02.</span> Western Discovery Engine
              </h4>
              <p className="text-sm text-slate-600">SEO + AI optimization to help Western buyers find you organically.</p>
            </div>
            {/* Bonus 3 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:border-orange-200 transition-colors">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
                <span className="text-orange-500">03.</span> &quot;7 Ways to Find Buyers&quot;
              </h4>
              <p className="text-sm text-slate-600">Complete playbook with proven strategies for attracting Western clients.</p>
            </div>
            {/* Bonus 4 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:border-orange-200 transition-colors">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
                <span className="text-orange-500">04.</span> Trade Show Replacement Kit
              </h4>
              <p className="text-sm text-slate-600">QR codes, PDF materials, and email templates for in-person events.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-24 bg-transparent border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium text-slate-900 tracking-tight font-serif mb-4">
              A Fraction of Trade Show Costs
            </h2>
            <p className="text-slate-600">
              Professional, transparent, and always open for business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
            {/* Comparison: Trade Show */}
            <div className="relative flex flex-col h-full rounded-2xl p-[1px] bg-slate-200">
              <div className="h-full w-full rounded-xl flex flex-col p-8 relative overflow-hidden bg-white/50 grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all">
                <h3 className="text-xl font-bold text-slate-600 mb-2">Overseas Trade Booth</h3>
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-slate-900 tracking-tight">$50k - $200k</span>
                    <span className="text-sm text-slate-500 font-medium">HKD</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <X className="text-red-400 shrink-0 mt-0.5" width={16} />
                    <span>3–4 days of exposure, then gone</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <X className="text-red-400 shrink-0 mt-0.5" width={16} />
                    <span>High travel & logistics costs</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <X className="text-red-400 shrink-0 mt-0.5" width={16} />
                    <span>Requires staff presence</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Comparison: Western System */}
            <div className="relative flex flex-col h-full rounded-2xl p-[3px] bg-gradient-to-br from-orange-300 via-orange-500 to-amber-600 shadow-xl shadow-orange-500/20 transform md:scale-105 z-10">
              <div className="h-full w-full rounded-xl flex flex-col p-8 relative overflow-hidden bg-white">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-orange-600 mb-2 flex items-center gap-2">
                    Complete System
                    <span className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316]"></span>
                  </h3>
                  <p className="text-xs font-medium text-slate-500 h-8 leading-snug">
                    Depending on catalog size, complexity, and languages.
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-slate-900 tracking-tight">$38k - $68k</span>
                    <span className="text-sm text-slate-500 font-medium">HKD</span>
                  </div>
                  <div className="text-xs text-orange-600 mt-2 font-mono">
                    No recurring fees. You own everything.
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-start gap-3 text-sm text-slate-700">
                    <Check className="text-orange-500 shrink-0 mt-0.5" width={16} />
                    <span>Works 24/7 continuously</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700">
                    <Check className="text-orange-500 shrink-0 mt-0.5" width={16} />
                    <span>Western-optimized design</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700">
                    <Check className="text-orange-500 shrink-0 mt-0.5" width={16} />
                    <span>Captures leads automatically</span>
                  </li>
                </ul>

                <button onClick={() => scrollToSection('apply')} className="w-full py-3 rounded-lg text-white font-medium text-sm transition-all duration-300 shadow-md bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400">
                  Reserve Your 21-Day Build
                </button>
              </div>
            </div>
          </div>

          {/* Guarantee Section */}
          <div className="mt-16 border border-slate-200 rounded-xl p-8 bg-slate-50 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="shrink-0 w-16 h-16 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-900 shadow-sm">
              <ShieldCheck width={32} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-lg mb-2">You risk nothing — your success is guaranteed.</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                If you don&apos;t get at least 3 qualified Western inquiries in 60 days, we rewrite and re-optimize at no cost. If there are still no results, we refund 100%. You own the system either way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply" className="relative py-24 bg-white overflow-hidden border-t border-slate-200">
        <div className="absolute inset-0 bg-slate-50/50 -z-10"></div>

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          {/* Scarcity Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs font-semibold text-orange-700 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-orange-400"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Limited Availability
            </div>
            <h2 className="text-3xl font-medium text-slate-900 tracking-tight font-serif mb-4">
              Only 8 manufacturers per quarter
            </h2>
            <p className="text-slate-600 text-lg font-light mb-8">
              We limit intake to ensure quality and delivery speed for every factory.
            </p>

            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm max-w-2xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <div className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">8 spots per quarter</div>
                  <div className="text-sm font-semibold text-slate-900">Q1 2026 closes January 15</div>
                </div>
                <div className="h-px w-full md:w-px md:h-10 bg-slate-200"></div>
                <div className="text-center md:text-right">
                  <div className="text-xs uppercase tracking-widest text-orange-600 font-bold mb-1">Next Available Slot</div>
                  <div className="text-sm font-semibold text-slate-900">Opens in April</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-sm text-slate-600 italic">
                  If you want your upcoming trade shows and Alibaba traffic to point to a high‑converting Western system, reserve your build now.
                </p>
              </div>
            </div>
          </div>

          {/* The Application Form */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden relative group">
            <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 to-amber-500"></div>

            <div className="p-8 md:p-10">
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Reserve Your 21‑Day Build</h3>
                <p className="text-sm text-slate-500">Tell us about your factory to check cohort availability.</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">Company Name *</label>
                    <input type="text" placeholder="Your factory or company name" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none placeholder:text-slate-400" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">Contact Person *</label>
                    <input type="text" placeholder="Your name" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none placeholder:text-slate-400" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">Country *</label>
                    <input type="text" placeholder="e.g., China, Vietnam" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none placeholder:text-slate-400" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">Product Category *</label>
                    <input type="text" placeholder="e.g., Electronics, Textiles" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none placeholder:text-slate-400" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">Target Markets *</label>
                  <input type="text" placeholder="e.g., USA, UK, EU" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none placeholder:text-slate-400" />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">Email *</label>
                  <input type="email" placeholder="your@email.com" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none placeholder:text-slate-400" />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">WeChat ID</label>
                  <input type="text" placeholder="Your WeChat ID (optional)" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none placeholder:text-slate-400" />
                </div>

                <button type="submit" className="w-full py-4 rounded-lg text-white font-semibold text-sm transition-all duration-300 shadow-lg bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 hover:shadow-xl active:scale-[0.98]">
                  Submit Application
                </button>

                <p className="text-xs text-slate-400 text-center">
                  We&apos;ll review your application and respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg border border-orange-200/50 flex items-center justify-center">
              <Globe2 className="text-orange-600" width={16} />
            </div>
            <span className="text-sm font-bold text-slate-900">Western Buyer System</span>
          </div>
          <p className="text-xs text-slate-500">
            © 2026 Western Buyer System. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
