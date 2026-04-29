export type VoiceLeadSource = 'voice-agent' | 'voice-concierge';

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

export interface ConciergeDemoCopy {
  sectionTitle: string;
  sectionSubtitle: string;
  whyHeading: string;
  whySegments: VoiceWhySegment[];
  optInNotice: string;
  unlockSubmitIdle: string;
  unlockSubmitLoading: string;
  unlockedTitle: string;
  /** Insert {{PHONE}} where the demo number should appear. */
  unlockedBodyTemplate: string;
}

export interface VoiceAgentLandingContent {
  leadSource: VoiceLeadSource;
  hero: {
    badge: string;
    h1Line1: string;
    h1Line2: string;
    h1Gradient: string;
    sub: string;
    ctaDemo: string;
    ctaProcess: string;
    pillars: [
      { title: string; description: string },
      { title: string; description: string },
      { title: string; description: string },
    ];
  };
  demo: ConciergeDemoCopy;
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
  wechatCta: string;
}

export const voiceAgentLandingExporter: VoiceAgentLandingContent = {
  leadSource: 'voice-agent',
  hero: {
    badge: 'PREMIUM VOICE CONCIERGE',
    h1Line1: 'The premier AI concierge',
    h1Line2: 'for Asian exporters. ',
    h1Gradient: 'Every Western call handled in flawless English.',
    sub:
      'When your one English speaker is away, importer calls go sideways—or get lost. Convertree is a custom voice concierge: trained on your products and operations, with tight guardrails, so you qualify and capture every serious buyer.',
    ctaDemo: 'Try the concierge demo',
    ctaProcess: 'How we onboard clients',
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
      'Enter your details to unlock the live voice demo. The demo may be recorded to improve the experience; use a microphone in a quiet place. Same flow we use in sales: opt in first, then experience the agent.',
    unlockSubmitIdle: 'Unlock voice demo',
    unlockSubmitLoading: 'Sending…',
    unlockedTitle: 'Voice demo ready',
    unlockedBodyTemplate:
      "You're in! Call the agent at {{PHONE}} or tap Unlock web demo at the bottom-right of your screen to start the web demo.",
  },
  stackLabel: 'Plays with your stack',
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
  wechatCta: 'Talk on WeChat',
};

export const voiceAgentLandingGeneral: VoiceAgentLandingContent = {
  leadSource: 'voice-concierge',
  hero: {
    badge: 'PREMIUM VOICE CONCIERGE',
    h1Line1: 'Enterprise-grade AI voice',
    h1Line2: 'for pipeline & partner calls. ',
    h1Gradient: 'Never leave qualified revenue on hold.',
    sub:
      'When coverage is thin, inbound calls stall or slip through the cracks. Convertree builds a concierge trained on your offerings and policies—guardrailed and CRM-ready—so every serious prospect gets structured qualification and a clean handoff.',
    ctaDemo: 'Try the concierge demo',
    ctaProcess: 'How we onboard teams',
    pillars: [
      {
        title: 'Always-on coverage',
        description:
          'Answers like your best rep—on your number or web—when humans are tied up',
      },
      {
        title: 'Your playbook, enforced',
        description:
          'Discovery flows & guardrails tuned to how you sell—not a generic bot',
      },
      {
        title: 'CRM-ready handoffs',
        description:
          'Qualify, capture, and route with fields your team already uses',
      },
    ],
  },
  demo: {
    sectionTitle: 'Try the concierge demo',
    sectionSubtitle:
      'Opt in with your work email—then speak with the agent like a real prospect or partner would. We capture your details for follow-up; the same flow powers production concierge lines.',
    whyHeading: 'Why Convertree',
    whySegments: [
      {
        text:
          'B2B teams lose deals when specialist coverage disappears—calls overflow or go unanswered. We deploy a ',
      },
      { text: 'premium, guardrailed', accent: true },
      {
        text:
          ' voice concierge trained on how you sell and deliver, so callers get accurate answers, structured qualification, and consistent CRM capture—not a toy chatbot.',
      },
    ],
    optInNotice:
      'Enter your details to unlock the live voice demo. The demo may be recorded to improve the experience; use a microphone in a quiet place. Same flow we use in sales: opt in first, then experience the agent.',
    unlockSubmitIdle: 'Unlock voice demo',
    unlockSubmitLoading: 'Sending…',
    unlockedTitle: 'Voice demo ready',
    unlockedBodyTemplate:
      "You're in! Call the agent at {{PHONE}} or tap Unlock web demo at the bottom-right of your screen to start the web demo.",
  },
  stackLabel: 'Plays with your stack',
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
      title: 'Events, hotlines & product lines',
      body:
        'Dedicated numbers for a flagship offer, a busy booth, or regional coverage—multiple callers can engage in parallel while your team stays focused on closing.',
      bullets: ['Purpose-built routing', 'Parallel conversations'],
    },
  ],
  processSticky: {
    title: 'How we bring you live',
    body:
      'From first workshop to a production concierge and ongoing tuning—the same playbook we use across industrial, SaaS, and services teams.',
  },
  processSteps: [
    {
      title: 'Value discovery',
      body:
        'Structured sessions with sales or product (often multiple rounds): what the concierge may say, must not say, and how deals move through your process. We align on the buyer you serve.',
    },
    {
      title: 'Custom agent build',
      body:
        'We wire your numbers, web entry points, and CRM—so qualified calls land with the right fields. Guardrails and prompts reflect your catalog, policies, and risk bar.',
    },
    {
      title: 'Ongoing optimization',
      body:
        'We monitor behavior, refine prompts, and layer in add-ons (lead magnets, event lines) as you scale. You get a partner, not a one-off handoff.',
    },
  ],
  insightsIntro:
    "We'll publish articles on voice QA for complex B2B calls, running agents at scale, and more—placeholders for now while we focus on shipping.",
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
      'Try the opt-in voice demo above, or reach us on WeChat—we\'ll map your customers, your offers, and what a clean handoff looks like in your CRM.',
    ctaDemo: 'Try the concierge demo',
  },
  wechatCta: 'Talk on WeChat',
};
