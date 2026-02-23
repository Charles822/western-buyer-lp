'use client';

import { motion, useScroll, useTransform } from "framer-motion";
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
  X,
  Leaf,
  ArrowUpRight
} from 'lucide-react';
import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const wordReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navigation - Minimal Editorial */}
      <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
          <button onClick={() => window.scrollTo(0,0)} className="flex items-center gap-3 group">
            <Leaf className="text-white w-5 h-5" strokeWidth={1.5} />
            <div className="flex flex-col items-start">
              <span className="text-white font-serif text-lg tracking-tight">Convertree</span>
              <span className="text-white/60 text-[8px] tracking-[0.3em] uppercase font-mono">肯副翠</span>
            </div>
          </button>

          {/* Desktop Nav - Minimal */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('systems')} className="text-white/80 hover:text-white text-sm font-body transition-colors underline-animation">
              How It Works
            </button>
            <button onClick={() => scrollToSection('benefits')} className="text-white/80 hover:text-white text-sm font-body transition-colors underline-animation">
              Benefits
            </button>
            <button onClick={() => scrollToSection('signals')} className="text-white/80 hover:text-white text-sm font-body transition-colors underline-animation">
              Free Analysis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-stone-950 pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-6">
            <button onClick={() => scrollToSection('systems')} className="text-left text-2xl font-serif text-stone-100">How It Works</button>
            <button onClick={() => scrollToSection('benefits')} className="text-left text-2xl font-serif text-stone-100">Benefits</button>
            <button onClick={() => scrollToSection('signals')} className="text-left text-2xl font-serif text-jade-400">Free Analysis</button>
          </div>
        </div>
      )}

      {/* Hero Section - Editorial Split Layout */}
      <section ref={heroRef} className="min-h-screen bg-stone-950 relative overflow-hidden">
        <motion.div 
          style={{ opacity: heroOpacity, y: heroY }}
          className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 min-h-screen flex flex-col justify-center"
        >
          {/* Jade Accent Line */}
          <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-jade/30 to-transparent hidden md:block" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.div variants={wordReveal} className="mb-6">
                  <Badge variant="outline" className="border-jade/30 text-jade-400 bg-jade/5 font-mono text-[10px] tracking-widest uppercase px-3 py-1">
                    Performance-Based Pricing
                  </Badge>
                </motion.div>

                <motion.h1 
                  variants={wordReveal}
                  className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.95] tracking-tight mb-8"
                >
                  Do you want a<br />
                  <span className="text-jade-400 italic">waiting list</span><br />
                  of western buyers?
                </motion.h1>

                <motion.p 
                  variants={wordReveal}
                  className="text-stone-400 text-lg md:text-xl font-body leading-relaxed max-w-xl mb-10"
                >
                  We build your company a <strong className="text-white font-medium">predictable pipeline</strong> of direct western buyers who place larger orders at better margins— <span className="text-jade-400">you only pay when it works.</span>
                </motion.p>

                <motion.div variants={wordReveal} className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => scrollToSection('signals')}
                    className="bg-jade hover:bg-jade-light text-white font-mono text-xs tracking-widest uppercase px-8 py-6 rounded-none transition-all group"
                  >
                    Get Your Free Analysis
                    <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                  
                  <Button 
                    variant="outline"
                    onClick={() => scrollToSection('systems')}
                    className="border-stone-700 text-stone-300 hover:text-white hover:border-stone-500 bg-transparent font-mono text-xs tracking-widest uppercase px-8 py-6 rounded-none transition-all"
                  >
                    See How It Works
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Right - Preview Cards Stack */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-3"
              >
                {[
                  { icon: Search, title: "More Discovery", desc: "Google Ads optimization" },
                  { icon: Monitor, title: "More Orders", desc: "High-converting landing pages" },
                  { icon: Bot, title: "Consistent Leads", desc: "AI sales assistant, 24/7" },
                ].map((item, i) => (
                  <Card 
                    key={i} 
                    className="bg-stone-900/50 border-stone-800 backdrop-blur-sm hover:border-jade/30 transition-all group cursor-pointer"
                  >
                    <CardContent className="p-5 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-jade/10 flex items-center justify-center text-jade-400 group-hover:bg-jade/20 transition-colors">
                        <item.icon className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-white font-serif text-base">{item.title}</h3>
                        <p className="text-stone-500 text-sm font-body">{item.desc}</p>
                      </div>
                      <ArrowUpRight className="ml-auto w-4 h-4 text-stone-600 group-hover:text-jade-400 transition-colors" />
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Abstract Shape Decoration */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-20 pointer-events-none">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <linearGradient id="jadeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#059669" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <circle cx="300" cy="300" r="200" fill="url(#jadeGradient)" />
          </svg>
        </div>
      </section>

      {/* How We Do It - 3 Systems with Editorial Layout */}
      <section id="systems" className="py-32 md:py-40 bg-stone-50 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-20 md:mb-28"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-jade" />
              <span className="font-mono text-jade text-xs tracking-[0.3em] uppercase">Our Method</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 leading-[1.1] max-w-3xl">
              Three systems working in concert
            </h2>
          </motion.div>

          {/* Systems Grid - Editorial Layout */}
          <div className="space-y-24 md:space-y-32">
            {[
              { 
                num: "01", 
                icon: Search, 
                title: "More Discovery", 
                desc: "Many western buyers are already searching for Chinese partners on Google. We optimize your Google Ads so they find you first—not your competitors.",
                align: "left"
              },
              { 
                num: "02", 
                icon: Monitor, 
                title: "More Orders", 
                desc: "We build you a high-converting landing page that western buyers are more familiar with. This helps build trust so they feel comfortable placing more orders, more frequently.",
                align: "right"
              },
              { 
                num: "03", 
                icon: Bot, 
                title: "Consistent Leads", 
                desc: "Our AI sales assistant responds to buyers instantly—even at 3 AM. No more lost opportunities because your sales team was sleeping.",
                align: "left"
              },
            ].map((system, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${system.align === 'right' ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`lg:col-span-5 ${system.align === 'right' ? 'lg:col-start-8' : ''}`}>
                  <div className="flex items-start gap-6">
                    <span className="font-mono text-6xl md:text-7xl text-stone-200 font-light">
                      {system.num}
                    </span>
                    <div className="pt-4">
                      <div className="w-16 h-16 rounded-full bg-jade/5 border border-jade/20 flex items-center justify-center text-jade mb-6">
                        <system.icon className="w-7 h-7" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">
                        {system.title}
                      </h3>
                      <p className="text-stone-600 font-body text-lg leading-relaxed">
                        {system.desc}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Visual Placeholder */}
                <div className={`lg:col-span-6 ${system.align === 'right' ? 'lg:col-start-1 lg:row-start-1' : 'lg:col-start-7'}`}>
                  <div className="aspect-[4/3] bg-stone-200/50 rounded-lg border border-stone-200 flex items-center justify-center">
                    <span className="font-mono text-stone-400 text-xs tracking-widest uppercase">
                      {system.title} Visual
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits - Asymmetric Bento Grid */}
      <section id="benefits" className="py-32 md:py-40 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16 md:mb-24"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-jade" />
              <span className="font-mono text-jade text-xs tracking-[0.3em] uppercase">Results</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-[1.1] max-w-2xl">
              What this means for your company
            </h2>
          </motion.div>

          {/* Bento Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: TrendingDown, title: "Save Money", desc: "Get more leads with the same ad spend" },
              { icon: TrendingUp, title: "Higher Margins", desc: "Attract direct buyers from Google, not Alibaba resellers" },
              { icon: Users, title: "Customer Selection", desc: "Choose who you want to do business with" },
              { icon: Clock, title: "Minimize Downtime", desc: "Your factory runs closer to full capacity" },
              { icon: CheckCircle2, title: "Effective Sales", desc: "Customers come to you. Less prospecting, more closing.", wide: true },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`bento-item group ${benefit.wide ? 'md:col-span-2' : ''}`}
              >
                <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 mb-6 group-hover:bg-jade/10 group-hover:text-jade transition-all">
                  <benefit.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl text-stone-900 mb-3">{benefit.title}</h3>
                <p className="text-stone-600 font-body leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pay for Results - Dark Section with Gradient Mesh */}
      <section className="py-32 md:py-40 bg-stone-950 relative overflow-hidden">
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-jade/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center"
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-jade/50" />
            <span className="font-mono text-jade-400 text-xs tracking-[0.3em] uppercase">Pricing</span>
            <div className="h-px w-12 bg-jade/50" />
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-8"
          >
            Only pay for results
          </motion.h2>

          <motion.p 
            variants={fadeInUp}
            className="text-stone-400 text-lg md:text-xl font-body leading-relaxed mb-6 max-w-2xl mx-auto"
          >
            After a small one-time set up fee, you only pay us for the <strong className="text-white font-medium">qualified western buyer leads</strong> we generate.
          </motion.p>

          <motion.p 
            variants={fadeInUp}
            className="font-serif text-3xl md:text-4xl text-jade-400 italic"
          >
            If we don't deliver, you don't pay.
          </motion.p>
        </motion.div>
      </section>

      {/* 7 Signals - Form Section */}
      <section id="signals" className="py-32 md:py-40 bg-stone-100 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-jade" />
                <span className="font-mono text-jade text-xs tracking-[0.3em] uppercase">Free Analysis</span>
              </motion.div>

              <motion.h2 
                variants={fadeInUp}
                className="font-serif text-4xl md:text-5xl text-stone-900 leading-[1.1] mb-8"
              >
                Western buyers look for these <span className="text-jade">7 specific signals</span> when selecting a partner
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-stone-600 font-body text-lg leading-relaxed mb-6">
                Does your site have them?
              </motion.p>

              <motion.p variants={fadeInUp} className="text-stone-600 font-body leading-relaxed mb-8">
                Missing even a single signal could be costing you sales. Let us analyze your current landing page and show you exactly where you're losing Western buyers—and how to fix it.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex items-center gap-3 text-jade">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-medium">100% Free. No obligation.</span>
              </motion.div>
            </motion.div>

            {/* Right - Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-white border-stone-200 shadow-xl shadow-stone-200/50">
                <CardContent className="p-8 md:p-10">
                  <div className="mb-8">
                    <h3 className="font-serif text-2xl text-stone-900 mb-2">Get Your Free 7-Signal Analysis</h3>
                    <p className="text-stone-500 font-body text-sm">
                      We'll analyze your page and send you a personalized report within 24 hours.
                    </p>
                  </div>

                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-mono text-xs tracking-wider uppercase text-stone-600">
                        Name
                      </Label>
                      <Input 
                        id="name"
                        type="text" 
                        placeholder="Your name"
                        className="border-stone-200 rounded-none focus:border-jade focus:ring-jade/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-mono text-xs tracking-wider uppercase text-stone-600">
                        Email
                      </Label>
                      <Input 
                        id="email"
                        type="email" 
                        placeholder="your@email.com"
                        className="border-stone-200 rounded-none focus:border-jade focus:ring-jade/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="url" className="font-mono text-xs tracking-wider uppercase text-stone-600">
                        Landing Page URL
                      </Label>
                      <Input 
                        id="url"
                        type="url" 
                        placeholder="https://yourcompany.com"
                        className="border-stone-200 rounded-none focus:border-jade focus:ring-jade/20"
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-jade hover:bg-jade-light text-white font-mono text-xs tracking-widest uppercase py-6 rounded-none transition-all"
                    >
                      Analyze My Page
                      <ArrowUpRight className="ml-2 w-4 h-4" />
                    </Button>

                    <p className="text-stone-400 text-xs text-center font-body">
                      By submitting, you agree to receive our analysis and occasional updates.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="py-12 bg-stone-950 border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Leaf className="text-jade-400 w-5 h-5" strokeWidth={1.5} />
            <div className="flex flex-col">
              <span className="text-white font-serif text-lg">Convertree</span>
              <span className="text-stone-600 text-[8px] tracking-[0.3em] uppercase font-mono">肯副翠</span>
            </div>
          </div>
          <p className="text-stone-600 text-sm font-body">
            © 2026 Convertree. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
