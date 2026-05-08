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
  unlockedTitle: string;
  /** Insert {{PHONE}} where the demo number should appear. */
  unlockedBodyTemplate: string;
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
    cards: [VoiceValueEquationCard, VoiceValueEquationCard, VoiceValueEquationCard, VoiceValueEquationCard];
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
  processSteps: [VoiceProcessStepContent, VoiceProcessStepContent, VoiceProcessStepContent];
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
    unlockedBodyTemplate:
      "You're in! Call our demo line: {{PHONE}} Or tap Unlock web demo at the bottom-right of your screen to start the web demo.",
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
    badge: 'PREMIUM VOICE CONCIERGE',
    title: {
      kind: 'accentLead',
      accent: 'Never miss a paying customer call',
      rest: '– without hiring more staff',
    },
    sub:
      'Convertree installs an AI receptionist on your phone line that answers every call, speaks clear English, handles FAQs, and books appointments for you – so your team can focus on serving customers, not chasing missed calls.',
    ctaDemo: 'Try our 5-minute agent demo now',
    ctaProcess: 'How we onboard teams',
    belowFold: {
      mode: 'perfectFor',
      sectionTitle: 'Who Convertree is perfect for',
      tiles: [
        { label: 'Dentists & clinics' },
        { label: 'Real estate agents' },
        { label: 'Beauty salons & spas' },
        { label: 'Home services & trades' },
        { label: 'Restaurants' },
        { label: 'Veterinary & pet care' },
        { label: 'Legal & professional' },
        { label: 'Hotels & lodging' },
        { label: 'Retail & storefronts' },
        { label: 'Automotive repair' },
        { label: 'Tutoring & education' },
        { label: 'Other service businesses' },
      ],
    },
  },
  demo: {
    sectionTitle: 'Try the concierge demo',
    sectionSubtitle:
      'Pop in your work email to unlock a quick demo—like a real caller would. Same setup we use when we switch on your line.',
    whyHeading: 'Why Convertree',
    whySegments: [],
    whyIntro:
      'You didn’t start a business to wrestle the phone. Here’s what owners tell us they want most:',
    whyBullets: [
      'More new customers from the same ad spend and foot traffic.',
      'Fewer interruptions for staff; less time stuck on the phone.',
      'No more stress about missed calls when you’re out or the front desk is slammed.',
    ],
    optInNotice:
      'Enter your name and work email to unlock the live voice demo. Company is optional. The in-browser demo may be recorded; use a microphone in a quiet place. We handle your details as described in our Privacy Policy.',
    unlockSubmitIdle: 'Unlock voice demo',
    unlockSubmitLoading: 'Sending…',
    unlockedTitle: 'Voice demo ready',
    unlockedBodyTemplate:
      "You're in! Call our demo line: {{PHONE}} Or tap Unlock web demo at the bottom-right of your screen to start the web demo.",
  },
  valueEquation: {
    sectionHeading: {
      beforeAccent: 'The ',
      accent: 'Premium Voice Concierge',
      afterAccent: ' Offer',
    },
    cards: [
      {
        title: '',
        stat: '7',
        statLabel: 'days to go live',
        body:
          'From kick-off we wire your AI receptionist to your line so you start taking real customer calls quickly—without a long IT project.',
      },
      {
        title: '',
        stat: '100%',
        statLabel: 'of your calls answered',
        body:
          'Your concierge picks up every call, even when your team is slammed or off the clock—no endless ring or “please leave a message.”',
      },
      {
        title: '',
        stat: '30',
        statLabel: 'day guarantee',
        body:
          'Not happy in the first 30 days? Tell us and we’ll refund you in full—no runaround.',
      },
      {
        title: '',
        stat: '$$$',
        statLabel: 'More revenue',
        body:
          'Missed calls quietly drain revenue every month. Answer consistently and more enquiries turn into bookings on your bottom line.',
      },
    ],
  },
  stackLabel: 'Technologies we use',
  servicesIntro: {
    title: 'Go beyond the base concierge',
    body:
      'Optional add-ons for teams that want deeper automation, dedicated lines for launches or events, or instant follow-up after a call. No public pricing on this page—we scope with you.',
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
      title: 'Precise call data analytics',
      body:
        'Unlike staff who forget details within minutes, every call leaves a full transcript you can mine for trends—lead sources, objections, and booking patterns.',
      bullets: ['Searchable transcripts', 'Business-ready summaries'],
    },
  ],
  processSticky: {
    title: 'How we bring you live',
    body:
      'From a quick kick-off to your AI concierge answering real calls—we keep it simple so you can get back to running the shop.',
  },
  processSteps: [
    {
      title: 'Value discovery',
      body:
        'We learn how you take calls today, what callers ask for, and what “booked” looks like for you—no jargon, just your workflow.',
    },
    {
      title: 'Custom agent build',
      body:
        'We connect your line and tune greetings, FAQs, and booking rules so the concierge sounds like your business—not a generic bot.',
    },
    {
      title: 'Ongoing optimization',
      body:
        'We refine prompts from real calls and help you add extras as you grow. You get a partner, not a one-off handoff.',
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
    title: "Hear it for yourself, then we'll scope your build",
    body:
      'Try the five-minute demo above, or tap Let\'s chat below—we\'ll map your callers, your schedule, and what a great handoff looks like for your team.',
    ctaDemo: 'Try our 5-minute agent demo now',
  },
  contactModal: {
    kind: 'whatsapp',
    href: 'https://api.whatsapp.com/send/?phone=85366110975&text=Hi%2C%20can%20you%20tell%20me%20more%20about%20the%20AI%20concierge%20please%3F',
  },
  wechatCta: "Let's chat",
};
