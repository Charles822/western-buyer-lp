'use client';

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
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
  ArrowUpRight,
  TreePine,
  Sprout,
  GitBranch
} from 'lucide-react';
import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

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

const growFromRoot = {
  hidden: { scaleY: 0, originY: 1 },
  visible: { 
    scaleY: 1, 
    transition: { duration: 1.2, ease: "easeInOut" }
  }
};

const branchOut = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function OrganicPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const treeHeight = useTransform(scrollYProgress, [0, 0.3], ["0%", "100%"]);
  const springTreeHeight = useSpring(treeHeight, { stiffness: 100, damping: 30 });
  
  const leafScale = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const springLeafScale = useSpring(leafScale, { stiffness: 200, damping: 20 });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div ref={containerRef} className="relative bg-gradient-to-b from-emerald-50 via-white to-emerald-50/30">
      {/* Organic Background Pattern */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Growing gradient orbs */}
        <motion.div 
          style={{ scale: springLeafScale }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-jade/20 to-emerald-300/30 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ scale: springLeafScale }}
          className="absolute top-1/3 left-10 w-72 h-72 bg-gradient-to-br from-emerald-200/30 to-teal-300/20 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ scale: springLeafScale }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-jade/10 to-emerald-400/20 rounded-full blur-3xl"
        />
      </div>

      {/* Navigation - Organic Style */}
      <nav className="fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
          <button onClick={() => window.scrollTo(0,0)} className="flex items-center gap-3 group">
            <div className="relative">
              <TreePine className="text-jade w-8 h-8" strokeWidth={1.5} />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-1 -right-1 w-3 h-3 bg-jade/30 rounded-full"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-stone-900 font-bold text-xl tracking-tight">Convertree</span>
              <span className="text-jade text-[9px] tracking-[0.3em] uppercase font-mono">肯副翠</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-jade/10 shadow-sm">
            <button onClick={() => scrollToSection('systems')} className="text-stone-600 hover:text-jade text-sm font-medium transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection('benefits')} className="text-stone-600 hover:text-jade text-sm font-medium transition-colors">
              Benefits
            </button>
            <button onClick={() => scrollToSection('grow')} className="text-stone-600 hover:text-jade text-sm font-medium transition-colors">
              Free Analysis
            </button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-stone-700">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-6">
            <button onClick={() => scrollToSection('systems')} className="text-left text-2xl font-bold text-stone-800">How It Works</button>
            <button onClick={() => scrollToSection('benefits')} className="text-left text-2xl font-bold text-stone-800">Benefits</button>
            <button onClick={() => scrollToSection('grow')} className="text-left text-2xl font-bold text-jade">Free Analysis</button>
          </div>
        </div>
      )}

      {/* Hero Section - Organic Growth Theme */}
      <section className="min-h-screen relative overflow-hidden pt-32">
        {/* Animated SVG Tree Background */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none hidden lg:block">
          <svg viewBox="0 0 400 800" className="w-full h-full">
            <defs>
              <linearGradient id="trunkGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#059669" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {/* Main trunk that grows */}
            <motion.path
              d="M200 800 Q200 600 200 400 Q200 300 180 200 Q160 100 100 50"
              fill="none"
              stroke="url(#trunkGradient)"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            {/* Branches */}
            <motion.path
              d="M200 500 Q250 450 300 420"
              fill="none"
              stroke="#059669"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
            <motion.path
              d="M200 350 Q150 300 100 280"
              fill="none"
              stroke="#059669"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 1.8 }}
            />
            {/* Leaves */}
            {[...Array(8)].map((_, i) => (
              <motion.circle
                key={i}
                cx={100 + i * 30}
                cy={50 + i * 20}
                r="8"
                fill="#10b981"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.6 }}
                transition={{ duration: 0.5, delay: 2 + i * 0.1 }}
              />
            ))}
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            {/* Badge with sprout icon */}
            <motion.div variants={fadeInUp} className="mb-8">
              <Badge className="bg-jade/10 text-jade border-jade/20 px-4 py-2 font-mono text-xs tracking-wider">
                <Sprout className="w-4 h-4 mr-2" />
                Grow Your Business
              </Badge>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 leading-[1.05] mb-8"
            >
              Grow a{' '}
              <span className="relative inline-block">
                <span className="text-jade">waiting list</span>
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 10"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <path
                    d="M0 5 Q50 0 100 5 T200 5"
                    fill="none"
                    stroke="#059669"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>
              <br />
              of western buyers
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-xl text-stone-600 leading-relaxed mb-10 max-w-2xl"
            >
              We help your business <strong className="text-stone-900">grow organically</strong> with a predictable pipeline of direct western buyers— <span className="text-jade font-semibold">you only pay when it works.</span>
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('grow')}
                className="bg-jade hover:bg-jade-700 text-white font-semibold px-8 py-6 rounded-full transition-all group shadow-lg shadow-jade/25"
              >
                Start Growing Today
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => scrollToSection('systems')}
                className="border-2 border-stone-200 text-stone-700 hover:border-jade hover:text-jade bg-white/80 backdrop-blur-sm px-8 py-6 rounded-full transition-all"
              >
                See How It Works
              </Button>
            </motion.div>
          </motion.div>

          {/* Growing Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-2xl"
          >
            {[
              { num: "3x", label: "More Leads" },
              { num: "24/7", label: "AI Response" },
              { num: "0", label: "Risk" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-jade mb-2">{stat.num}</div>
                <div className="text-sm text-stone-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-jade/30 rounded-full flex justify-center pt-2">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-3 bg-jade rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* How We Do It - Root to Branch System */}
      <section id="systems" className="py-32 relative">
        {/* Growing line connector */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-jade/0 via-jade/20 to-jade/0 hidden lg:block">
          <motion.div 
            style={{ height: springTreeHeight }}
            className="w-full bg-gradient-to-b from-jade to-emerald-400"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <Badge className="bg-emerald-100 text-jade border-0 mb-6 px-4 py-2">
              <GitBranch className="w-4 h-4 mr-2" />
              Our Growth System
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              From Root to Branch
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Three interconnected systems that help your business grow organically
            </p>
          </motion.div>

          {/* Systems with branch connectors */}
          <div className="space-y-24 relative">
            {[
              { 
                num: "01", 
                icon: Search, 
                title: "Deep Roots", 
                subtitle: "More Discovery",
                desc: "We plant your business in front of western buyers already searching on Google. Our optimized Google Ads ensure they find you first—before your competitors.",
                align: "left"
              },
              { 
                num: "02", 
                icon: Monitor, 
                title: "Strong Trunk", 
                subtitle: "More Orders",
                desc: "Your high-converting landing page is the trunk that supports growth. Built for western buyer psychology, it builds trust and converts visitors into orders.",
                align: "right"
              },
              { 
                num: "03", 
                icon: Bot, 
                title: "Evergreen Leaves", 
                subtitle: "Consistent Leads",
                desc: "Our AI assistant is your evergreen canopy—responding to buyers instantly, 24/7. No lead withers from delayed responses.",
                align: "left"
              },
            ].map((system, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Branch connector node */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-12 w-6 h-6 bg-jade rounded-full border-4 border-white shadow-lg hidden lg:flex items-center justify-center z-10">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>

                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${system.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`${system.align === 'right' ? 'lg:order-2' : ''}`}>
                    <Card className="bg-white/80 backdrop-blur-sm border-emerald-100 hover:border-jade/30 hover:shadow-xl hover:shadow-jade/10 transition-all duration-500 overflow-hidden group">
                      <CardContent className="p-8 md:p-10">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-jade to-emerald-500 flex items-center justify-center text-white shadow-lg shadow-jade/25 group-hover:scale-110 transition-transform duration-500">
                            <system.icon className="w-8 h-8" strokeWidth={1.5} />
                          </div>
                          <div>
                            <span className="font-mono text-jade text-sm">{system.num}</span>
                            <h3 className="text-2xl font-bold text-stone-900">{system.title}</h3>
                          </div>
                        </div>
                        <div className="text-jade font-semibold mb-3">{system.subtitle}</div>
                        <p className="text-stone-600 leading-relaxed">
                          {system.desc}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className={`${system.align === 'right' ? 'lg:order-1 lg:text-right' : ''}`}>
                    <div className="aspect-square max-w-sm mx-auto relative">
                      {/* Organic shape placeholder */}
                      <div className="absolute inset-0 bg-gradient-to-br from-jade/10 to-emerald-200/30 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-pulse" />
                      <div className="absolute inset-4 bg-gradient-to-br from-emerald-100/50 to-jade/20 rounded-[40%_60%_70%_30%/40%_50%_50%_60%]" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <system.icon className="w-20 h-20 text-jade/40" strokeWidth={1} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits - Organic Cards */}
      <section id="benefits" className="py-32 bg-gradient-to-b from-white to-emerald-50/50 relative overflow-hidden">
        {/* Decorative organic shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-jade/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <Badge className="bg-white text-jade border-jade/20 mb-6 px-4 py-2">
              <Leaf className="w-4 h-4 mr-2" />
              The Harvest
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              What You&apos;ll Reap
            </h2>
          </motion.div>

          {/* Organic flowing grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: TrendingDown, title: "Save Money", desc: "Get more leads with the same ad spend" },
              { icon: TrendingUp, title: "Higher Margins", desc: "Direct buyers from Google, not resellers" },
              { icon: Users, title: "Choose Clients", desc: "Pick who you want to work with" },
              { icon: Clock, title: "Full Capacity", desc: "Minimize factory downtime" },
              { icon: CheckCircle2, title: "Close More", desc: "Less prospecting, more closing", wide: true },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`group relative ${benefit.wide ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="bg-white rounded-3xl p-8 border border-emerald-100 hover:border-jade/30 hover:shadow-xl hover:shadow-jade/10 transition-all duration-500 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-jade/10 to-emerald-100 flex items-center justify-center text-jade mb-6 group-hover:scale-110 group-hover:bg-jade group-hover:text-white transition-all duration-500">
                    <benefit.icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">{benefit.title}</h3>
                  <p className="text-stone-600">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pay for Results - Growing Section */}
      <section className="py-32 bg-jade relative overflow-hidden">
        {/* Animated growing patterns */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 bg-white rounded-full"
              style={{ 
                left: `${20 + i * 15}%`, 
                bottom: 0,
                height: '100%'
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
            />
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <TreePine className="w-16 h-16 text-white/80 mx-auto" strokeWidth={1} />
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8"
          >
            Only pay when you grow
          </motion.h2>

          <motion.p 
            variants={fadeInUp}
            className="text-emerald-100 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl mx-auto"
          >
            After a small setup fee, you only pay for the <strong className="text-white">qualified leads</strong> we generate. No growth? No payment.
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="flex items-center justify-center gap-2 text-white/90"
          >
            <Sprout className="w-5 h-5" />
            <span className="font-semibold">Risk-free growth</span>
          </motion.div>
        </motion.div>
      </section>

      {/* 7 Signals - Growing Form Section */}
      <section id="grow" className="py-32 relative overflow-hidden">
        {/* Growing vines decoration */}
        <svg className="absolute left-0 top-0 h-full w-24 opacity-10 pointer-events-none hidden lg:block" viewBox="0 0 100 800">
          <motion.path
            d="M50 800 Q30 600 50 400 Q70 200 30 0"
            fill="none"
            stroke="#059669"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          />
          {[...Array(6)].map((_, i) => (
            <motion.circle
              key={i}
              cx={50 + (i % 2 === 0 ? -20 : 20)}
              cy={700 - i * 120}
              r="6"
              fill="#10b981"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 1.5 + i * 0.1 }}
            />
          ))}
        </svg>

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <Badge className="bg-emerald-100 text-jade border-0 px-4 py-2">
                  <Sprout className="w-4 h-4 mr-2" />
                  Free Growth Check
                </Badge>
              </motion.div>

              <motion.h2 
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold text-stone-900 leading-[1.1] mb-8"
              >
                Are you missing the <span className="text-jade">7 signals</span> western buyers look for?
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-stone-600 text-lg leading-relaxed mb-6">
                Each missing signal could be costing you sales. Let us analyze your landing page and show you exactly where opportunities are falling through the cracks.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex items-center gap-3 text-jade bg-emerald-50 w-fit px-4 py-2 rounded-full">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-semibold">100% Free Analysis</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-white border-emerald-100 shadow-2xl shadow-jade/10 rounded-3xl overflow-hidden">
                <CardContent className="p-8 md:p-10">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-stone-900 mb-2">Plant Your Seed</h3>
                    <p className="text-stone-500">
                      We&apos;ll analyze your page and send a growth report within 24 hours.
                    </p>
                  </div>

                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <Label className="text-stone-600 font-medium mb-2 block">Name</Label>
                      <Input 
                        type="text" 
                        placeholder="Your name"
                        className="border-emerald-100 rounded-xl h-12 focus:border-jade focus:ring-jade/20"
                      />
                    </div>

                    <div>
                      <Label className="text-stone-600 font-medium mb-2 block">Email</Label>
                      <Input 
                        type="email" 
                        placeholder="your@email.com"
                        className="border-emerald-100 rounded-xl h-12 focus:border-jade focus:ring-jade/20"
                      />
                    </div>

                    <div>
                      <Label className="text-stone-600 font-medium mb-2 block">Landing Page URL</Label>
                      <Input 
                        type="url" 
                        placeholder="https://yourcompany.com"
                        className="border-emerald-100 rounded-xl h-12 focus:border-jade focus:ring-jade/20"
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-jade hover:bg-jade-700 text-white font-semibold py-6 rounded-xl transition-all shadow-lg shadow-jade/25"
                    >
                      Get Free Analysis
                      <ArrowUpRight className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-stone-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <TreePine className="text-jade w-6 h-6" strokeWidth={1.5} />
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg">Convertree</span>
              <span className="text-stone-600 text-[8px] tracking-[0.3em] uppercase font-mono">肯副翠</span>
            </div>
          </div>
          <p className="text-stone-500 text-sm">
            © 2026 Convertree. Grow organically.
          </p>
        </div>
      </footer>
    </div>
  );
}
