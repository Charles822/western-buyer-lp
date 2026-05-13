export type VoiceLeadSource = 'voice-agent' | 'voice-concierge';

export type VoiceContactModal =
  | { kind: 'wechat_qr' }
  | { kind: 'whatsapp'; href: string };

export interface VoiceServiceCardContent {
  title: string;
  body: string;
  bullets: [string, string];
}

export interface VoiceProcessStepContent {
  title: string;
  body: string;
}

export interface VoiceInsightPostContent {
  tag: string;
  title: string;
}

/** Segments for “Why Convertree” rich paragraph (accent = emerald span). */
export interface VoiceWhySegment {
  text: string;
  accent?: boolean;
}

export type HeroTitle =
  | { kind: 'split'; h1Line1: string; h1Line2: string; h1Gradient: string }
  | { kind: 'plain'; h1: string }
  | { kind: 'accentLead'; accent: string; rest: string };

export type HeroBelowFold =
  | {
      mode: 'pillars';
      pillars: [
        { title: string; description: string },
        { title: string; description: string },
        { title: string; description: string },
      ];
    }
  | {
      mode: 'perfectFor';
      sectionTitle: string;
      tiles: { label: string }[];
    };

export interface ConciergeDemoCopy {
  sectionTitle: string;
  sectionSubtitle: string;
  whyHeading: string;
  /** Used when `whyBullets` is absent (exporter page). */
  whySegments: VoiceWhySegment[];
  /** SMB-friendly benefit bullets; when set, segments are ignored in UI. */
  whyBullets?: string[];
  /** Optional one-line intro above bullets. */
  whyIntro?: string;
  optInNotice: string;
  unlockSubmitIdle: string;
  unlockSubmitLoading: string;
  unlockSubmitNote?: string;
  unlockedTitle: string;
  unlockedSubtitle: string;
  unlockedPhoneTitle: string;
  unlockedPhoneText: string;
  unlockedWebTitle: string;
  unlockedWebText: string;
}

export interface VoiceValueEquationCard {
  title: string;
  body: string;
  /** Giant headline figure for the value strip (e.g. 7, 0, 30, $$$). */
  stat?: string;
  /** Short line under the stat (e.g. Days to install). */
  statLabel?: string;
}

export interface VoiceAgentLandingContent {
  leadSource: VoiceLeadSource;
  hero: {
    badge: string;
    title: HeroTitle;
    sub: string;
    ctaDemo: string;
    ctaProcess: string;
    belowFold: HeroBelowFold;
  };
  demo: ConciergeDemoCopy;
  /** Four-up strip after demo (general landing only). */
  valueEquation?: {
    /** Split like hero accent: “The” + green “Premium Voice Concierge” + “Offer”. */
    sectionHeading: {
      beforeAccent: string;
      accent: string;
      afterAccent: string;
    };
    cards: VoiceValueEquationCard[];
  };
  stackLabel: string;
  servicesIntro: {
    title: string;
    body: string;
  };
  servicesCards: [VoiceServiceCardContent, VoiceServiceCardContent, VoiceServiceCardContent];
  processSticky: {
    title: string;
    body: string;
  };
  processSteps: VoiceProcessStepContent[];
  insightsIntro: string;
  insightsPosts: [VoiceInsightPostContent, VoiceInsightPostContent, VoiceInsightPostContent];
  contact: {
    title: string;
    body: string;
    ctaDemo: string;
  };
  /** Contact popup: WeChat QR (manufacturer) or WhatsApp deep link (general SMB). */
  contactModal: VoiceContactModal;
  wechatCta: string;
  navLabels?: {
    demo: string;
    services: string;
    process: string;
  };
}

/** Backup hero headlines from PDF — not shown in UI; for future A/B or CMS. */
export const voiceConciergeHeroAlternatives = [
  'How does 0 missed calls from paying customers sound?',
  "Install a 24/7 AI receptionist that never misses a paying customer call – for half a month's salary of a human receptionist.",
] as const;

export const voiceAgentLandingExporter: VoiceAgentLandingContent = {
  leadSource: 'voice-agent',
  hero: {
    badge: 'PREMIUM VOICE CONCIERGE',
    title: {
      kind: 'split',
      h1Line1: 'The premier AI concierge',
      h1Line2: 'for Asian exporters. ',
      h1Gradient: 'Every Western call handled in flawless English.',
    },
    sub:
      'When your one English speaker is away, importer calls go sideways—or get lost. Convertree is a custom voice concierge: trained on your products and operations, with tight guardrails, so you qualify and capture every serious buyer.',
    ctaDemo: 'Try the concierge demo',
    ctaProcess: 'How we onboard clients',
    belowFold: {
      mode: 'pillars',
      pillars: [
        {
          title: 'Fluent English, 24/7',
          description:
            'Answers like your best sales engineer—on your number or web',
        },
        {
          title: 'Your products, your rules',
          description:
            'Multi-round discovery & guardrailed prompts—not a generic bot',
        },
        {
          title: 'CRM-ready',
          description: 'Qualify, capture, and hand off to your team—already structured',
        },
      ],
    },
  },
  demo: {
    sectionTitle: 'Try the concierge demo',
    sectionSubtitle:
      'Opt in with your work email—then call our AI the way a Western buyer would. We capture your details for follow-up; your production concierge can do the same for real importer calls.',
    whyHeading: 'Why Convertree',
    whySegments: [
      {
        text:
          'Asian exporters often rely on one English speaker—when they\'re away, a random Western call becomes a scramble. We build a ',
      },
      { text: 'premium, guardrailed', accent: true },
      {
        text:
          ' voice concierge trained on your products and how you actually ship, so importers get fluent English, structured qualification, and clean CRM handoff—not a generic chatbot.',
      },
    ],
    optInNotice:
      'Enter your name and work email to unlock the live voice demo. Company is optional. The in-browser demo may be recorded; use a microphone in a quiet place. We handle your details as described in our Privacy Policy.',
    unlockSubmitIdle: 'Unlock voice demo',
    unlockSubmitLoading: 'Sending…',
    unlockedTitle: 'Voice demo ready',
    unlockedSubtitle:
      'Your AI concierge can be wired to a real phone number, or embedded directly on your website to qualify visitors. Try both experiences below:',
    unlockedPhoneTitle: 'Try over the phone',
    unlockedPhoneText:
      'Works just like a normal call. Call the demo line below.',
    unlockedWebTitle: 'Try on the web',
    unlockedWebText:
      'Experience the in-browser widget. Requires microphone access.',
  },
  stackLabel: 'Technologies we use',
  servicesIntro: {
    title: 'Go beyond the base concierge',
    body:
      'Optional add-ons for teams that want more automation, scale at the booth, or instant follow-up after a call. No public pricing on this page—we scope with you.',
  },
  servicesCards: [
    {
      title: 'CRM & workflow integration',
      body:
        'Connect the concierge to the systems your sales team already uses—so nothing sits in a silo. Routing, fields, and handoff rules you control.',
      bullets: ['Field mapping & handoff', 'n8n / automation glue'],
    },
    {
      title: 'Automated lead magnets',
      body:
        'After a call, send a customized AI summary or quote draft—optionally for your rep to review before it goes out, so you move faster without losing control.',
      bullets: ['Post-call follow-up assets', 'Human-in-the-loop review'],
    },
    {
      title: 'Trade-fair & per-product agents',
      body:
        'Dedicated phone lines for a flagship machine or product line. Multiple buyers can talk at once while your small team works the floor—serious Q&A in English, no translation scramble.',
      bullets: ['On-the-spot product depth', 'Parallel conversations'],
    },
  ],
  processSticky: {
    title: 'How we bring you live',
    body:
      'From first conversation to a production concierge and ongoing tuning—the same pattern we use with exporter teams in machinery, parts, and industrial B2B.',
  },
  processSteps: [
    {
      title: 'Value discovery',
      body:
        'Structured Q&A with sales or product (typically multiple rounds): what the concierge can say, must not say, and how you ship. We align on the Western buyer you serve.',
    },
    {
      title: 'Custom agent build',
      body:
        'We wire your number, web entry points, and CRM—so qual calls land in your process with the right fields. Guardrails and prompts are dialed in for your catalog and your risk bar.',
    },
    {
      title: 'Ongoing optimization',
      body:
        'We monitor behavior, refine prompts, and help you add upsells (lead magnets, booth agents) as you scale. You get a partner, not a one-off handoff.',
    },
  ],
  insightsIntro:
    "We'll publish articles on voice QA for industrial buyers, running agents at trade shows, and more—placeholders for now while we focus on shipping.",
  insightsPosts: [
    {
      tag: 'Coming soon',
      title: 'Why generic voice bots break on high-ticket B2B calls',
    },
    {
      tag: 'Coming soon',
      title: 'Designing a concierge for one flagship CNC line',
    },
    {
      tag: 'Coming soon',
      title: 'From trade-floor chaos to parallel buyer conversations',
    },
  ],
  contact: {
    title: "Hear it for yourself, then we'll scope your build",
    body:
      'Try the opt-in voice demo above, or reach us on WeChat—we\'ll map your buyers, your products, and what "good" handoff looks like in your CRM.',
    ctaDemo: 'Try the concierge demo',
  },
  contactModal: { kind: 'wechat_qr' },
  wechatCta: 'Talk on WeChat',
};

export const voiceAgentLandingGeneral: VoiceAgentLandingContent = {
  leadSource: 'voice-concierge',
  hero: {
    badge: 'AFTER-HOURS AI RECEPTIONIST',
    title: {
      kind: 'split',
      h1Line1: 'Your clinic closes at 6pm.',
      h1Line2: "Evelyn doesn't.",
      h1Gradient: '',
    },
    sub:
      "Evelyn takes over when your human receptionists go home — answering every after-hours call, capturing every lead, and logging them for your team to follow up in the morning. No changes to your existing staff or systems. Just add a number to your website and Google profile, and she's on.",
    ctaDemo: 'Interview Evelyn Before You Hire Her',
    ctaProcess: 'How Hiring Works',
    belowFold: {
      mode: 'perfectFor',
      sectionTitle: 'Built for businesses that can\'t afford to miss a call after hours',
      tiles: [
        { label: 'Dentists & clinics' },
        { label: 'Restaurants' },
        { label: 'Real estate agencies' },
        { label: 'Beauty salons & spas' },
        { label: 'Home services & trades' },
        { label: 'Hotels & lodging' },
        { label: 'Veterinary & pet care' },
        { label: 'Legal & professional' },
        { label: 'Retail & storefronts' },
        { label: 'Automotive repair' },
        { label: 'Tutoring & education' },
        { label: 'Other service businesses' },
      ],
    },
  },
  demo: {
    sectionTitle: 'Interview Evelyn Before You Hire Her',
    sectionSubtitle:
      "Enter your details and Evelyn will call you in the browser — exactly the way she'd sound answering your after-hours line. Put her through her paces.",
    whyHeading: 'Interview Checklist',
    whySegments: [],
    whyIntro: '',
    whyBullets: [
      'Ask her which languages she speaks',
      'Ask her how she learns about your business',
      'See if she stays professional under pressure',
      'Watch her collect customer details naturally',
      'See how she qualifies a lead and closes for next steps',
    ],
    optInNotice:
      'Enter your name and work email to unlock the live voice demo. The in-browser demo may be recorded — use a microphone in a quiet place. We handle your details as described in our Privacy Policy.',
    unlockSubmitIdle: 'Start the interview',
    unlockSubmitLoading: 'Sending…',
    unlockSubmitNote: 'Takes about 2 minutes. No commitment.',
    unlockedTitle: 'Voice demo ready',
    unlockedSubtitle:
      'Your AI concierge can be wired to a real phone number, or embedded directly on your website to qualify visitors. Try both experiences below:',
    unlockedPhoneTitle: 'Try over the phone',
    unlockedPhoneText:
      'Works just like a normal call. Call the demo line below.',
    unlockedWebTitle: 'Try on the web',
    unlockedWebText:
      'Experience the in-browser widget. Requires microphone access.',
  },
  valueEquation: {
    sectionHeading: {
      beforeAccent: 'Hire Evelyn at ',
      accent: 'No Risk',
      afterAccent: '',
    },
    cards: [
      {
        title: '',
        stat: '7',
        statLabel: 'Live in 7 days',
        body:
          'Evelyn can be answering your after-hours calls within a week of you hiring her. No long IT project. No disruption to your existing team.',
      },
      {
        title: '',
        stat: '100%',
        statLabel: 'Zero missed calls — guaranteed',
        body:
          'If Evelyn misses even one after-hours call in your first 30 days, you get your money back. No questions asked.',
      },
      {
        title: '',
        stat: '$$$',
        statLabel: 'See the revenue you\'ve been missing',
        body:
          'We can\'t guarantee a specific number — every business is different. But we\'ll show you exactly how many calls Evelyn catches after hours, and what those callers were worth. You\'ll see the ROI in the first month.',
      },
    ],
  },
  stackLabel: 'Technologies we use',
  servicesIntro: {
    title: 'Evelyn\'s Upgrades',
    body:
      'Your base package includes email lead notifications and automatic Google Sheets capture — so your team always wakes up to a fresh list. Need more? These upgrades are available once your after-hours line is running. We scope each one with you — no public pricing on this page.',
  },
  servicesCards: [
    {
      title: 'CRM Integration',
      body:
        'Your leads already go into Google Sheets automatically. But if your team runs on Salesforce, HubSpot, or another CRM, we can pipe Evelyn\'s captures directly into your existing system — no manual entry, no copy-paste.',
      bullets: ['Maps to your existing fields & workflows', 'Built on n8n / automation infrastructure'],
    },
    {
      title: 'Automated Lead Magnets',
      body:
        'When Evelyn captures a lead after hours, she can immediately send the caller something useful — a dental hygiene guide, a service menu, a special offer — whatever fits your business. Keeps your brand warm while they wait for your team to follow up in the morning.',
      bullets: ['Custom collateral per business', 'Sent automatically at end of call'],
    },
    {
      title: 'Advanced Analytics & Monthly Reports',
      body:
        'Your base package includes call volume, duration, and basic lead data. If you want to go deeper — what customers are asking at 10pm, which enquiries converted, where your after-hours leads are coming from — we build you a tailored monthly report with the metrics that actually matter to your business.',
      bullets: ['Custom report built around your KPIs', 'Delivered monthly, ready to share with your team'],
    },
  ],
  processSticky: {
    title: 'How to Hire Evelyn as Your After-Hours Receptionist',
    body:
      'From interview to live in about a week. No IT project. No disruption to your existing team.',
  },
  processSteps: [
    {
      title: 'Step 1 — Interview',
      body:
        'If you haven\'t already, interview Evelyn before you hire her. Call her in the browser and see how she handles your customers — whether she stays professional, collects details naturally, and represents your business well. You wouldn\'t hire a human without an interview.',
    },
    {
      title: 'Step 2 — Training',
      body:
        'We help train Evelyn on your business — your products, services, hours, and how you like things handled. You choose her language, voice, and tone. You can even give her a new name. We also set firm guardrails on what she can never say to a customer.\n\nOn languages: Evelyn speaks fluent English and Mandarin. Cantonese is still difficult for AI voice technology — we won\'t recommend it until it\'s genuinely good. If you\'d like to test it anyway and decide for yourself, we\'re happy to set that up.',
    },
    {
      title: 'Step 3 — Assignment',
      body:
        'We give you a dedicated number for Evelyn. Your human receptionist can forward all calls to her before going home — or you can list her number directly on your website and Google Business Profile as your "After-Hours Number". Or both.\n\nNo new systems. No changes to how your team works during the day. If you\'d like help adding the number to your Google profile, we\'ll do it for you — it takes about 10 minutes.',
    },
    {
      title: 'Step 4 — Optimize',
      body:
        'We monitor how Evelyn performs on real calls and improve her over time — just like you would with any employee. Once a month, we send you a report: how many calls she took, what customers asked about, and how many enquiries turned into bookings.',
    },
  ],
  insightsIntro:
    "We'll publish practical tips on managing inbound calls, reminders, and more—placeholders for now while we focus on shipping.",
  insightsPosts: [
    {
      tag: 'Coming soon',
      title: 'Why generic voice bots break on high-ticket B2B calls',
    },
    {
      tag: 'Coming soon',
      title: 'Designing a concierge around one flagship product line',
    },
    {
      tag: 'Coming soon',
      title: 'From missed inbound calls to parallel qualified conversations',
    },
  ],
  contact: {
    title: "Interview Evelyn yourself.\nIf she passes, we'll send you a free, no-obligation quote.",
    body:
      'Try the demo above and hear exactly how Evelyn would sound on your after-hours line. Happy with what you hear? We\'ll put together a personalised quote for your business — no commitment, no pressure.',
    ctaDemo: 'Interview Evelyn Now',
  },
  contactModal: {
    kind: 'whatsapp',
    href: 'https://api.whatsapp.com/send/?phone=85366110975&text=Hi%2C%20can%20you%20tell%20me%20more%20about%20the%20AI%20concierge%20please%3F',
  },
  wechatCta: "Let's chat",
  navLabels: { demo: 'Interview Evelyn', services: 'Evelyn\'s Upgrades', process: 'How It Works' },
};
