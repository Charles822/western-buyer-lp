'use client';

import { 
  Search, 
  Monitor, 
  Bot,
  TrendingDown,
  TrendingUp,
  Users,
  Clock,
  CheckCircle2,
  ArrowRight,
  Menu,
  X as CloseIcon,
  Leaf
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
        {/* Ambient Glow Blobs - Jade Theme */}
        <div className="ambient-glow">
          <div className="glow-blob bg-jade-100/50 w-[600px] h-[600px] top-[-20%] left-[-10%] mix-blend-multiply animate-blob" />
          <div className="glow-blob bg-emerald-200/40 w-[500px] h-[500px] top-[40%] right-[-10%] mix-blend-multiply animate-blob" style={{ animationDelay: '2s' }} />
          <div className="glow-blob bg-teal-100/50 w-[400px] h-[400px] bottom-[-10%] left-[20%] mix-blend-multiply animate-blob" style={{ animationDelay: '4s' }} />
        </div>

        {/* Vertical Laser Beams */}
        <div className="laser-beam-container fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="energy-streak layer-far" style={{ left: '2%', animationDuration: '13s', animationDelay: '-2s', ['--streak-opacity' as string]: '0.04', ['--streak-color' as string]: '#059669' }} />
          <div className="energy-streak layer-mid" style={{ left: '22%', animationDuration: '8s', animationDelay: '-5s', ['--streak-opacity' as string]: '0.08', ['--streak-color' as string]: '#059669' }} />
          <div className="energy-streak layer-mid" style={{ left: '60%', animationDuration: '8s', animationDelay: '-8s', ['--streak-opacity' as string]: '0.09', ['--streak-color' as string]: '#059669' }} />
          <div className="energy-streak layer-near" style={{ left: '88%', animationDuration: '5s', animationDelay: '-4s', ['--streak-opacity' as string]: '0.15', ['--streak-color' as string]: '#059669' }} />
        </div>

        {/* Tech Background Grid */}
        <div className="tech-grid bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px]" />

        {/* Top Edge Light */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent to-transparent via-jade-500/50" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 border-b bg-white/80 backdrop-blur-xl border-slate-200 transition-all duration-300">
        <button onClick={() => window.scrollTo(0,0)} className="flex items-center gap-2 cursor-pointer group">
          <div className="relative flex items-center justify-center w-9 h-9 transition-transform group-active:scale-95 bg-jade-50 rounded-lg border border-jade-200/50 shadow-sm">
            <Leaf className="text-jade-600" width={20} height={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl tracking-tight font-bold text-slate-900 leading-none">Convertree</span>
            <span className="text-[9px] tracking-widest text-jade-600 uppercase font-mono mt-0.5">肯副翠</span>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 p-1 rounded-full border backdrop-blur-md bg-slate-50/50 border-slate-200">
          <button onClick={() => scrollToSection('systems')} className="px-4 py-1.5 text-xs font-medium rounded-full transition-all text-slate-500 hover:text-slate-900 hover:bg-white/80">
            How It Works
          </button>
          <button onClick={() => scrollToSection('benefits')} className="px-4 py-1.5 text-xs font-medium rounded-full transition-all text-slate-500 hover:text-slate-900 hover:bg-white/80">
            Benefits
          </button>
          <button onClick={() => scrollToSection('signals')} className="px-4 py-1.5 text-xs font-medium rounded-full transition-all text-slate-500 hover:text-slate-900 hover:bg-white/80">
            Free Analysis
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-slate-600">
            {mobileMenuOpen ? <CloseIcon width={20} /> : <Menu width={20} />}
          </button>
          <button onClick={() => scrollToSection('signals')} className="hidden md:block group relative text-xs font-semibold bg-slate-900 text-white border px-5 py-2 rounded-md transition-all hover:bg-slate-800 active:scale-95">
            Work with Convertree
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20 px-6 md:hidden">
          <div className="flex flex-col gap-4">
            <button onClick={() => scrollToSection('systems')} className="text-left py-3 text-lg font-medium text-slate-700 border-b border-slate-100">How It Works</button>
            <button onClick={() => scrollToSection('benefits')} className="text-left py-3 text-lg font-medium text-slate-700 border-b border-slate-100">Benefits</button>
            <button onClick={() => scrollToSection('signals')} className="text-left py-3 text-lg font-medium text-jade-600 border-b border-slate-100">Free Analysis</button>
          </div>
        </div>
      )}

      {/* Main Hero */}
      <main id="home" className="min-h-screen flex flex-col overflow-hidden z-10 w-full pt-32 pb-20 relative items-center">
        {/* Hero Text */}
        <div className="z-20 text-center max-w-5xl mr-auto ml-auto pr-6 pl-6 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-jade-500/20 bg-jade-50 text-[11px] font-medium mb-6 animate-fade-in shadow-[0_0_20px_rgba(5,150,105,0.15)] text-jade-700 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-jade-400"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-jade-500"></span>
            </span>
            <span>You Only Pay When It Works</span>
          </div>

          <h1 className="flex flex-col items-center text-center z-20 mt-2 mb-8">
            <span className="block text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-slate-900 leading-[1.1] animate-slide-up">
              Do you want a
              <br />
              <span className="text-jade-600">waiting list</span>
              <br />
              of western buyers?
            </span>
          </h1>

          <p className="leading-relaxed text-lg max-w-2xl mx-auto mb-10 font-light text-slate-600 relative z-20 animate-slide-up-delayed" style={{ animationDelay: '0.2s' }}>
            We can build your company a <strong>predictable pipeline</strong> of direct western buyers who place larger orders at better margins— <span className="text-jade-600 font-medium">you only pay us when it works.</span>
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-5 relative z-20 animate-slide-up-delayed" style={{ animationDelay: '0.3s' }}>
            <button onClick={() => scrollToSection('signals')} className="group relative w-full md:w-auto px-8 py-4 bg-slate-900 text-white text-sm font-semibold rounded-lg transition-all hover:bg-slate-800 active:scale-95 shadow-lg hover:shadow-xl">
              Get Your Free Analysis
              <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button onClick={() => scrollToSection('systems')} className="group flex transition-all md:w-auto text-sm font-medium bg-white w-full border border-slate-200 rounded-lg pt-3 pr-6 pb-3 pl-6 gap-x-2 items-center justify-center hover:text-slate-900 text-slate-500 active:scale-95 shadow-sm backdrop-blur-sm">
              <span className="border-b border-transparent group-hover:border-slate-500 transition-all">
                See How It Works
              </span>
            </button>
          </div>
        </div>

        {/* 3 Systems Overview Cards */}
        <div className="w-full max-w-6xl z-20 mx-auto px-4 mt-20 animate-slide-up-delayed" style={{ animationDelay: '0.5s' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* System 1 */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-jade-200">
              <div className="w-10 h-10 rounded-lg bg-jade-50 flex items-center justify-center mb-4 text-jade-600">
                <Search width={20} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">More Discovery</h3>
              <p className="text-sm text-slate-600">Google Ads optimization so buyers find YOU first</p>
            </div>
            {/* System 2 */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-jade-200">
              <div className="w-10 h-10 rounded-lg bg-jade-50 flex items-center justify-center mb-4 text-jade-600">
                <Monitor width={20} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">More Orders</h3>
              <p className="text-sm text-slate-600">High-converting landing page western buyers trust</p>
            </div>
            {/* System 3 */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-jade-200">
              <div className="w-10 h-10 rounded-lg bg-jade-50 flex items-center justify-center mb-4 text-jade-600">
                <Bot width={20} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Consistent Leads</h3>
              <p className="text-sm text-slate-600">AI sales assistant responds instantly, 24/7</p>
            </div>
          </div>
        </div>
      </main>

      {/* How We Do It - 3 Systems Section */}
      <section id="systems" className="relative py-24 bg-slate-50/50 overflow-hidden border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-jade-600 uppercase tracking-widest mb-4 block">Our 3 Systems</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              How We Do It
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Three integrated systems working together to create a consistent pipeline of qualified Western buyers.
            </p>
          </div>

          {/* System Cards - Horizontal Layout */}
          <div className="space-y-6">
            {/* System 1: More Discovery */}
            <div className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all hover:border-jade-200">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-jade-500 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-jade-500/20">
                  <Search width={28} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono text-jade-600 uppercase tracking-wider font-bold">System 01</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">More Discovery</h3>
                  <p className="text-slate-600 leading-relaxed max-w-2xl">
                    Many western buyers are already searching for Chinese partners on Google. We optimize your Google Ads so they find <strong>YOU first</strong>—not your competitors.
                  </p>
                </div>
                <div className="hidden md:flex flex-shrink-0 items-center justify-center w-24 h-24 rounded-full bg-jade-50 border border-jade-100">
                  <TrendingUp className="text-jade-600" width={32} />
                </div>
              </div>
            </div>

            {/* System 2: More Orders */}
            <div className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all hover:border-jade-200">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-jade-500 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-jade-500/20">
                  <Monitor width={28} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono text-jade-600 uppercase tracking-wider font-bold">System 02</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">More Orders</h3>
                  <p className="text-slate-600 leading-relaxed max-w-2xl">
                    We build you a high-converting landing page that western buyers are more familiar with. This helps build trust so they feel comfortable placing more orders, more frequently.
                  </p>
                </div>
                <div className="hidden md:flex flex-shrink-0 items-center justify-center w-24 h-24 rounded-full bg-jade-50 border border-jade-100">
                  <CheckCircle2 className="text-jade-600" width={32} />
                </div>
              </div>
            </div>

            {/* System 3: Consistent Leads */}
            <div className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all hover:border-jade-200">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-jade-500 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-jade-500/20">
                  <Bot width={28} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono text-jade-600 uppercase tracking-wider font-bold">System 03</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Consistent Leads</h3>
                  <p className="text-slate-600 leading-relaxed max-w-2xl">
                    Our AI sales assistant responds to buyers instantly—even at 3 AM. No more lost opportunities because your sales team was sleeping.
                  </p>
                </div>
                <div className="hidden md:flex flex-shrink-0 items-center justify-center w-24 h-24 rounded-full bg-jade-50 border border-jade-100">
                  <Clock className="text-jade-600" width={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What This Means - Benefits Section */}
      <section id="benefits" className="relative py-24 bg-white overflow-hidden border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-jade-600 uppercase tracking-widest mb-4 block">Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              What This Means for Your Company
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Convertree&apos;s &quot;3 Systems&quot; work together to create a consistent pipeline of qualified Western Buyers.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Benefit 1 */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-jade-200 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-jade-100 flex items-center justify-center mb-4 text-jade-600">
                <TrendingDown width={20} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Save Money</h3>
              <p className="text-sm text-slate-600">You get more leads with the same ad spend</p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-jade-200 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-jade-100 flex items-center justify-center mb-4 text-jade-600">
                <TrendingUp width={20} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Higher Margins</h3>
              <p className="text-sm text-slate-600">Attract direct buyers from Google, not Alibaba resellers</p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-jade-200 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-jade-100 flex items-center justify-center mb-4 text-jade-600">
                <Users width={20} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Customer Selection</h3>
              <p className="text-sm text-slate-600">Getting more leads means you choose who you want to do business with</p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-jade-200 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-jade-100 flex items-center justify-center mb-4 text-jade-600">
                <Clock width={20} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Minimize Downtime</h3>
              <p className="text-sm text-slate-600">Your factory will run closer to full capacity</p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-jade-200 hover:shadow-md transition-all md:col-span-2 lg:col-span-2">
              <div className="w-10 h-10 rounded-lg bg-jade-100 flex items-center justify-center mb-4 text-jade-600">
                <CheckCircle2 width={20} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Effective Sales</h3>
              <p className="text-sm text-slate-600">Customers come to you, so your sales team spends more time closing deals and less time looking for prospects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pay for Results Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(5,150,105,0.1),transparent_50%)]"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <span className="text-xs font-mono text-jade-400 uppercase tracking-widest mb-4 block">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Only Pay for Results
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            After a small one-time set up fee, you only pay us for the <strong className="text-white">qualified western buyer leads</strong> we generate. If we don&apos;t deliver qualified leads, you don&apos;t pay.
          </p>
          <p className="text-xl font-semibold text-jade-400">Simple.</p>
        </div>
      </section>

      {/* 7 Signals Section with Form */}
      <section id="signals" className="relative py-24 bg-jade-50/50 overflow-hidden border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <span className="text-xs font-mono text-jade-600 uppercase tracking-widest mb-4 block">Free Analysis</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
                Western buyers look for these 7 specific &quot;signals&quot; when selecting a trustworthy partner
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Does your site have them?
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Missing even a single signal could be costing you sales. Let us analyze your current landing page for the 7 signals and show you exactly where you&apos;re losing Western buyers—and how to fix it.
              </p>
              <div className="flex items-center gap-2 text-jade-600 font-semibold">
                <CheckCircle2 width={20} />
                <span>100% Free. No obligation.</span>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Get Your Free 7-Signal Analysis</h3>
                <p className="text-sm text-slate-500">We&apos;ll analyze your page and send you a personalized report within 24 hours.</p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">Name *</label>
                  <input 
                    type="text" 
                    placeholder="Your name" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-jade-500/20 focus:border-jade-500 transition-all outline-none placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">Email *</label>
                  <input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-jade-500/20 focus:border-jade-500 transition-all outline-none placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">Current Landing Page URL *</label>
                  <input 
                    type="url" 
                    placeholder="https://yourcompany.com" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-jade-500/20 focus:border-jade-500 transition-all outline-none placeholder:text-slate-400"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 rounded-lg text-white font-semibold text-sm transition-all duration-300 shadow-lg bg-gradient-to-r from-jade-600 to-emerald-600 hover:from-jade-500 hover:to-emerald-500 hover:shadow-xl active:scale-[0.98]"
                >
                  Analyze My Page
                </button>

                <p className="text-xs text-slate-400 text-center">
                  By submitting, you agree to receive our analysis and occasional updates.
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
            <div className="w-8 h-8 bg-jade-50 rounded-lg border border-jade-200/50 flex items-center justify-center">
              <Leaf className="text-jade-600" width={16} />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-slate-900">Convertree</span>
              <span className="text-[8px] tracking-widest text-jade-600 uppercase font-mono">肯副翠</span>
            </div>
          </div>
          <p className="text-xs text-slate-500">
            © 2026 Convertree. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
