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
  TreePine,
  Sprout,
  GitBranch,
} from 'lucide-react';
import Link from 'next/link';
import { ConvertreeLogoLockup } from '@/components/convertree-logo-lockup';
import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import type { LandingContent } from "@/lib/content";
import { FlagMarquee } from "@/components/flag-marquee";

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

function highlightText(text: string, highlights: string[], highlightClass: string = "text-stone-900") {
  if (!highlights.length) return text;
  const parts: React.ReactNode[] = [];
  let remaining = text;
  for (const term of highlights) {
    const idx = remaining.indexOf(term);
    if (idx === -1) continue;
    if (idx > 0) parts.push(remaining.slice(0, idx));
    parts.push(<strong key={term} className={highlightClass}>{term}</strong>);
    remaining = remaining.slice(idx + term.length);
  }
  if (remaining) parts.push(remaining);
  return parts.length ? parts : text;
}

const iconMap = { Search, Monitor, Bot } as const;
const benefitIcons = [TrendingDown, TrendingUp, Users, Clock, CheckCircle2] as const;

interface LandingPageProps {
  content: LandingContent;
  locale: 'zh' | 'en';
}

export function LandingPage({ content, locale }: LandingPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', url: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const containerRef = useRef(null);
  const systemsSectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const { scrollYProgress: systemsScrollProgress } = useScroll({
    target: systemsSectionRef,
    offset: ["start end", "end start"]
  });

  const treeHeight = useTransform(systemsScrollProgress, [0.2, 0.8], ["0%", "100%"]);
  const springTreeHeight = useSpring(treeHeight, { stiffness: 100, damping: 30 });
  const leafScale = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const springLeafScale = useSpring(leafScale, { stiffness: 200, damping: 20 });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, locale }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Failed to send');
      setFormStatus('success');
      setFormData({ name: '', email: '', url: '' });
    } catch {
      setFormStatus('error');
    }
  };

  const langSwitchHref = locale === 'zh' ? '/en' : '/';
  const langSwitchLabel = locale === 'zh' ? 'English' : '中文';

  return (
    <div ref={containerRef} className="relative bg-gradient-to-b from-emerald-50 via-white to-emerald-50/30">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div style={{ scale: springLeafScale }} className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-jade/20 to-emerald-300/30 rounded-full blur-3xl" />
        <motion.div style={{ scale: springLeafScale }} className="absolute top-1/3 left-10 w-72 h-72 bg-gradient-to-br from-emerald-200/30 to-teal-300/20 rounded-full blur-3xl" />
        <motion.div style={{ scale: springLeafScale }} className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-jade/10 to-emerald-400/20 rounded-full blur-3xl" />
      </div>

      <nav className="fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
          <button onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-3 group" aria-label="Convertree">
            <ConvertreeLogoLockup variant="onLight" priority />
          </button>

          <div className="hidden md:flex items-center gap-8 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-jade/10 shadow-sm">
            <button onClick={() => scrollToSection('systems')} className="text-stone-600 hover:text-jade text-sm font-medium transition-colors">{content.nav.howItWorks}</button>
            <button onClick={() => scrollToSection('benefits')} className="text-stone-600 hover:text-jade text-sm font-medium transition-colors">{content.nav.benefits}</button>
            <button onClick={() => scrollToSection('grow')} className="text-stone-600 hover:text-jade text-sm font-medium transition-colors">{content.nav.freeAnalysis}</button>
            <Link href={langSwitchHref} className="border border-jade/20 text-jade hover:bg-jade/10 px-4 py-2 rounded-full text-sm font-medium transition-colors">{langSwitchLabel}</Link>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <Link href={langSwitchHref} className="border border-jade/20 text-jade px-3 py-1.5 rounded-full text-sm font-medium">{langSwitchLabel}</Link>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-stone-700">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-6">
            <button onClick={() => scrollToSection('systems')} className="text-left text-2xl font-bold text-stone-800">{content.nav.howItWorks}</button>
            <button onClick={() => scrollToSection('benefits')} className="text-left text-2xl font-bold text-stone-800">{content.nav.benefits}</button>
            <button onClick={() => scrollToSection('grow')} className="text-left text-2xl font-bold text-jade">{content.nav.freeAnalysis}</button>
            <Link href={langSwitchHref} className="text-left text-2xl font-bold text-jade pt-4 border-t border-stone-200">{langSwitchLabel}</Link>
          </div>
        </div>
      )}

      <section className="min-h-screen relative overflow-hidden pt-24">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none hidden lg:block">
          <svg viewBox="0 0 400 800" className="w-full h-full">
            <defs>
              <linearGradient id="trunkGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#059669" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <motion.path d="M200 800 Q200 600 200 400 Q200 300 180 200 Q160 100 100 50" fill="none" stroke="url(#trunkGradient)" strokeWidth="4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }} />
            <motion.path d="M200 500 Q250 450 300 420" fill="none" stroke="#059669" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.5 }} />
            <motion.path d="M200 350 Q150 300 100 280" fill="none" stroke="#059669" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.8 }} />
            {[...Array(8)].map((_, i) => (
              <motion.circle key={i} cx={100 + i * 30} cy={50 + i * 20} r="8" fill="#10b981" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.6 }} transition={{ duration: 0.5, delay: 2 + i * 0.1 }} />
            ))}
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.div variants={fadeInUp} className="mb-8">
              <Badge className="bg-jade/10 text-jade border-jade/20 px-4 py-2 font-mono text-xs tracking-wider">
                <Sprout className="w-4 h-4 mr-2" />
                {content.hero.badge}
              </Badge>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 leading-[1.05] mb-8">
              {content.hero.headlineFull ? (
                content.hero.headlineFull
              ) : (
                <>
                  {content.hero.headlinePart1}
                  <span className="relative inline-block">
                    <span className="text-jade">{content.hero.headlineHighlight}</span>
                    <motion.svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 10" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }}>
                      <path d="M0 5 Q50 0 100 5 T200 5" fill="none" stroke="#059669" strokeWidth="3" strokeLinecap="round" />
                    </motion.svg>
                  </span>
                  <br />
                  {content.hero.headlinePart2}
                </>
              )}
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-stone-600 leading-relaxed mb-10 max-w-2xl">
              {highlightText(content.hero.sub.text, content.hero.sub.highlights)}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => scrollToSection('grow')} className="bg-jade hover:bg-jade-700 text-white font-semibold px-8 py-6 rounded-full transition-all group shadow-lg shadow-jade/25">
                {content.hero.ctaPrimary}
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" onClick={() => scrollToSection('systems')} className="border-2 border-stone-200 text-stone-700 hover:border-jade hover:text-jade bg-white/80 backdrop-blur-sm px-8 py-6 rounded-full transition-all group">
                {content.hero.ctaSecondary}
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-8">
              <FlagMarquee tagline={content.marquee.tagline} />
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="mt-20 text-center mb-20">
            <Badge className="bg-emerald-100 text-jade border-0 mb-6 px-4 py-2">
              <GitBranch className="w-4 h-4 mr-2" />
              {content.statsBadge}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-8">{content.statsTitle}</h2>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {content.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-jade mb-2">{stat.num}</div>
                <div className="text-sm text-stone-500 font-medium">{stat.label}</div>
              </div>
            ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section ref={systemsSectionRef} id="systems" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="text-center mb-20">
            <Badge className="bg-emerald-100 text-jade border-0 mb-6 px-4 py-2">
              <GitBranch className="w-4 h-4 mr-2" />
              {content.systems.badge}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">{content.systems.title}</h2>
          </motion.div>

          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex justify-center mb-16">
            <div className="w-6 h-10 border-2 border-jade/30 rounded-full flex justify-center pt-2">
              <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1.5 h-3 bg-jade rounded-full" />
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-jade/0 via-jade/20 to-jade/0 hidden lg:block z-0">
              <motion.div style={{ height: springTreeHeight }} className="w-full bg-gradient-to-b from-jade to-emerald-400" />
            </div>

            <div className="space-y-24 relative z-10">
              {content.systems.systems.map((system, i) => {
                const Icon = iconMap[system.num === '01' ? 'Search' : system.num === '02' ? 'Monitor' : 'Bot'];
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="relative">
                    <div className="absolute left-1/2 -translate-x-1/2 -top-12 w-6 h-6 bg-jade rounded-full border-4 border-white shadow-lg hidden lg:flex items-center justify-center z-10">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${system.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                      <div className={system.align === 'right' ? 'lg:order-2' : ''}>
                        <Card className="bg-white/80 backdrop-blur-sm border-emerald-100 hover:border-jade/30 hover:shadow-xl hover:shadow-jade/10 transition-all duration-500 overflow-hidden group">
                          <CardContent className="p-8 md:p-10">
                            <div className="flex items-center gap-4 mb-6">
                              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-jade to-emerald-500 flex items-center justify-center text-white shadow-lg shadow-jade/25 group-hover:scale-110 transition-transform duration-500">
                                <Icon className="w-8 h-8" strokeWidth={1.5} />
                              </div>
                              <div>
                                <span className="font-mono text-jade text-sm">{system.num}</span>
                                <h3 className="text-2xl font-bold text-stone-900">{system.title}</h3>
                              </div>
                            </div>
                            <p className="text-stone-600 leading-relaxed">{system.desc}</p>
                          </CardContent>
                        </Card>
                      </div>
                      <div className={system.align === 'right' ? 'lg:order-1 lg:text-right' : ''}>
                        <div className="aspect-square max-w-sm mx-auto relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-jade/10 to-emerald-200/30 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-pulse" />
                          <div className="absolute inset-4 bg-gradient-to-br from-emerald-100/50 to-jade/20 rounded-[40%_60%_70%_30%/40%_50%_50%_60%]" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Icon className="w-20 h-20 text-jade/40" strokeWidth={1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-32 bg-gradient-to-b from-white to-emerald-50/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-jade/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="text-center mb-16">
            <Badge className="bg-white text-jade border-jade/20 mb-6 px-4 py-2">
              <Leaf className="w-4 h-4 mr-2" />
              {content.benefits.badge}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">{content.benefits.title}</h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto mb-4">{content.benefits.intro}</p>
            <p className="text-stone-700 font-semibold mb-12">{content.benefits.subtitle}</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.benefits.items.map((benefit, i) => {
              const BenefitIcon = benefitIcons[i] ?? CheckCircle2;
              return (
              <motion.div key={i} variants={fadeInUp} className={`group relative ${benefit.wide ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <div className="bg-white rounded-3xl p-8 border border-emerald-100 hover:border-jade/30 hover:shadow-xl hover:shadow-jade/10 transition-all duration-500 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-jade/10 to-emerald-100 flex items-center justify-center text-jade mb-6 group-hover:scale-110 group-hover:bg-jade group-hover:text-white transition-all duration-500">
                    <BenefitIcon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">{benefit.title}</h3>
                  <p className="text-stone-600">{benefit.desc}</p>
                </div>
              </motion.div>
            );})}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mt-16">
            <Button onClick={() => scrollToSection('grow')} className="bg-jade hover:bg-jade-700 text-white font-semibold px-8 py-6 rounded-full transition-all shadow-lg shadow-jade/25 group">
              {content.benefits.cta}
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-jade relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(5)].map((_, i) => (
            <motion.div key={i} className="absolute w-2 bg-white rounded-full" style={{ left: `${20 + i * 15}%`, bottom: 0, height: '100%' }} initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }} />
          ))}
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div variants={fadeInUp} className="mb-8">
            <TreePine className="w-16 h-16 text-white/80 mx-auto" strokeWidth={1} />
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8">{content.pricing.title}</motion.h2>
          <motion.p variants={fadeInUp} className="text-emerald-100 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl mx-auto">{content.pricing.paragraph}</motion.p>
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 text-white/90">
            <Sprout className="w-5 h-5" />
            <span className="font-semibold">{content.pricing.tagline}</span>
          </motion.div>
        </motion.div>
      </section>

      <section id="grow" className="py-32 relative overflow-hidden">
        <svg className="absolute left-0 top-0 h-full w-24 opacity-10 pointer-events-none hidden lg:block" viewBox="0 0 100 800">
          <motion.path d="M50 800 Q30 600 50 400 Q70 200 30 0" fill="none" stroke="#059669" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2 }} />
          {[...Array(6)].map((_, i) => (
            <motion.circle key={i} cx={50 + (i % 2 === 0 ? -20 : 20)} cy={700 - i * 120} r="6" fill="#10b981" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 1.5 + i * 0.1 }} />
          ))}
        </svg>

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="mb-6">
                <Badge className="bg-emerald-100 text-jade border-0 px-4 py-2">
                  <Sprout className="w-4 h-4 mr-2" />
                  {content.form.badge}
                </Badge>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-stone-900 leading-[1.1] mb-8">{content.form.title}</motion.h2>
              <motion.p variants={fadeInUp} className="text-stone-600 text-lg leading-relaxed mb-6">{content.form.description}</motion.p>
              <motion.div variants={fadeInUp} className="flex items-center gap-3 text-jade bg-emerald-50 w-fit px-4 py-2 rounded-full">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-semibold">{content.form.freeLabel}</span>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <Card className="bg-white border-emerald-100 shadow-2xl shadow-jade/10 rounded-3xl overflow-hidden">
                <CardContent className="p-8 md:p-10">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-stone-900 mb-2">{content.form.formTitle}</h3>
                    <p className="text-stone-500">{content.form.formSubtitle}</p>
                  </div>
                  <form className="space-y-5" onSubmit={handleFormSubmit}>
                    <div>
                      <Label htmlFor="form-name" className="text-stone-600 font-medium mb-2 block">{content.form.labels.name}</Label>
                      <Input id="form-name" type="text" placeholder={content.form.placeholders.name} value={formData.name} onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))} required disabled={formStatus === 'loading'} className="border-emerald-100 rounded-xl h-12 focus:border-jade focus:ring-jade/20" />
                    </div>
                    <div>
                      <Label htmlFor="form-email" className="text-stone-600 font-medium mb-2 block">{content.form.labels.email}</Label>
                      <Input id="form-email" type="email" placeholder={content.form.placeholders.email} value={formData.email} onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))} required disabled={formStatus === 'loading'} className="border-emerald-100 rounded-xl h-12 focus:border-jade focus:ring-jade/20" />
                    </div>
                    <div>
                      <Label htmlFor="form-url" className="text-stone-600 font-medium mb-2 block">{content.form.labels.url}</Label>
                      <Input id="form-url" type="url" placeholder={content.form.placeholders.url} value={formData.url} onChange={(e) => setFormData((prev) => ({ ...prev, url: e.target.value }))} required disabled={formStatus === 'loading'} className="border-emerald-100 rounded-xl h-12 focus:border-jade focus:ring-jade/20" />
                    </div>
                    {formStatus === 'success' && <p className="text-jade font-semibold text-sm">{content.form.success}</p>}
                    {formStatus === 'error' && <p className="text-red-600 font-medium text-sm">{content.form.error}</p>}
                    <Button type="submit" disabled={formStatus === 'loading'} className="w-full bg-jade hover:bg-jade-700 text-white font-semibold px-8 py-6 rounded-full transition-all shadow-lg shadow-jade/25 disabled:opacity-70 disabled:cursor-not-allowed group">
                      {formStatus === 'loading' ? content.form.sending : <>{content.form.submit}<ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" /></>}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-stone-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <ConvertreeLogoLockup variant="onDark" size="footer" />
          </div>
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm md:justify-end">
              <Link href="/privacy" className="text-stone-400 hover:text-stone-200 transition-colors">
                Privacy
              </Link>
              <span className="text-stone-600" aria-hidden>
                ·
              </span>
              <Link href="/terms" className="text-stone-400 hover:text-stone-200 transition-colors">
                Terms
              </Link>
            </div>
            <p className="text-sm text-stone-500">{content.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
