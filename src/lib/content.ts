export interface SystemContent {
  num: string;
  title: string;
  desc: string;
  align: 'left' | 'right';
}

export interface BenefitContent {
  title: string;
  desc: string;
  wide?: boolean;
}

export interface StatContent {
  num: string;
  label: string;
}

export interface HeroSubContent {
  text: string;
  highlights: string[];
}

export interface LandingContent {
  nav: {
    howItWorks: string;
    benefits: string;
    freeAnalysis: string;
  };
  hero: {
    badge: string;
    headlinePart1?: string;
    headlineHighlight?: string;
    headlinePart2?: string;
    headlineFull?: string;
    sub: HeroSubContent;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  stats: StatContent[];
  statsTitle: string;
  statsBadge: string;
  marquee: {
    tagline: string;
  };
  systems: {
    badge: string;
    title: string;
    systems: SystemContent[];
  };
  benefits: {
    badge: string;
    title: string;
    intro: string;
    subtitle: string;
    items: BenefitContent[];
    cta: string;
  };
  pricing: {
    title: string;
    paragraph: string;
    tagline: string;
  };
  form: {
    badge: string;
    title: string;
    description: string;
    freeLabel: string;
    formTitle: string;
    formSubtitle: string;
    labels: { name: string; email: string; url: string };
    placeholders: { name: string; email: string; url: string };
    submit: string;
    sending: string;
    success: string;
    error: string;
  };
  footer: {
    copyright: string;
  };
}

export const contentZh: LandingContent = {
  nav: {
    howItWorks: '我们如何做到',
    benefits: '这对贵司意味着什么',
    freeAnalysis: '免费诊断',
  },
  hero: {
    badge: '助力业务增长',
    headlineFull: '想要源源不断的欧美直接客户吗？',
    sub: {
      text: '我们帮助贵司通过Google等渠道，建立一条稳定、可预测的欧美直客获客通道，让愿意下大单、接受合理利润空间的买家主动找到您——项目有效果再结算服务费用。',
      highlights: ['稳定、可预测', '欧美直客'],
    },
    ctaPrimary: '立即开始',
    ctaSecondary: '了解具体方案',
  },
  stats: [
    { num: '3x', label: '更多线索' },
    { num: '24/7', label: 'AI响应' },
    { num: '0', label: '风险' },
  ],
  statsTitle: '您将获得',
  statsBadge: '一目了然',
  marquee: {
    tagline: '我们帮您在买家所在之地找到他们',
  },
  systems: {
    badge: '我们如何为您做到这一点（3套系统）',
    title: '我们如何为您做到这一点',
    systems: [
      {
        num: '01',
        title: '让更多欧美买家先发现您',
        desc: '很多欧美采购方已经在用Google等搜索"中国供应商"。我们为贵司搭建并优化Google广告投放，让有需求的买家更容易先看到您的企业，而不是您的同行。',
        align: 'left',
      },
      {
        num: '02',
        title: '让潜在订单更容易落地',
        desc: '我们为贵司搭建一套更符合欧美买家习惯的独立着陆页（Landing Page），用他们熟悉的方式展示贵司实力、资质和案例。这样的页面更容易建立信任，让买家对直接下单、提高单价和频次更有信心。',
        align: 'right',
      },
      {
        num: '03',
        title: '让线索回复更及时、更稳定',
        desc: '我们在着陆页底部部署智能客服机器人，可以在任何时间点第一时间回复买家的询问并收集关键信息，即便是在贵司销售团队不在线的时间段。这样可以减少因为回复不及时而流失的机会，为您的销售团队留住更多有价值的商机。',
        align: 'left',
      },
    ],
  },
  benefits: {
    badge: '这对贵司意味着什么',
    title: '这对贵司意味着什么',
    intro: 'Convertree 的这"三套系统"协同运作，为贵司持续带来合格的欧美直接买家线索。',
    subtitle: '具体来说，贵司可以获得：',
    items: [
      { title: '降低获客成本', desc: '在现有或相近的广告预算下，获取更多有效询盘。' },
      { title: '提升利润空间', desc: '更多买家直接通过Google找到您，而不是通过第三方平台比价，有利于维持更健康的利润。' },
      { title: '优选客户', desc: '线索数量提升之后，贵司可以更有选择地挑客户，而不是"有什么单就接什么单"。' },
      { title: '提高产能利用率', desc: '更稳定的订单来源，有助于让工厂更接近满产状态。' },
      { title: '提高销售效率', desc: '客户主动找上门，销售团队把更多精力用在跟进和成交，而不是大量时间花在盲目开发上。', wide: true },
    ],
    cta: '与 Convertree 合作',
  },
  pricing: {
    title: '按效果收费，让合作更简单',
    paragraph: '在一个较小的一次性启动费用之后，后续我们只按实际产生的"合格欧美买家线索"计费。如果在约定周期内没有达到合格线索，我们不收取对应的线索服务费用，合作方式清晰透明。',
    tagline: '风险可控',
  },
  form: {
    badge: '免费诊断',
    title: '欧美买家在选择合作工厂时，会下意识寻找 7 个"可信信号"',
    description: '您的网站上，这些信号都具备了吗？缺少其中任何一个关键信号，都可能让本来有意向的买家中途流失。我们可以为贵司当前的着陆页做一次针对欧美买家的"7项信号"诊断，直接指出：哪些地方在无形中劝退欧美买家，以及可以如何优化，提升信任度和转化率。这一诊断服务对贵司完全免费。',
    freeLabel: '100% 免费诊断',
    formTitle: '免费获取诊断报告',
    formSubtitle: '我们将分析您的页面，并在24小时内发送诊断报告。',
    labels: { name: '姓名', email: '邮箱', url: 'Google 广告使用的网址' },
    placeholders: { name: '您的姓名', email: 'your@email.com', url: 'https://yourcompany.com' },
    submit: '获取免费诊断',
    sending: '提交中...',
    success: '感谢！我们将在24小时内与您联系。',
    error: '提交失败，请重试。',
  },
  footer: {
    copyright: '© 2026 Convertree by Metaverse Lab Limited。稳健增长。',
  },
};

export const contentEn: LandingContent = {
  nav: {
    howItWorks: 'How It Works',
    benefits: 'Benefits',
    freeAnalysis: 'Free Analysis',
  },
  hero: {
    badge: 'Grow Your Business',
    headlinePart1: 'Do you want a ',
    headlineHighlight: 'waiting list',
    headlinePart2: ' of western buyers?',
    sub: {
      text: 'We can build your company a predictable pipeline of direct western buyers who place larger orders at better margins— you only pay us when it works.',
      highlights: ['predictable pipeline', 'western buyers'],
    },
    ctaPrimary: 'Start Growing Today',
    ctaSecondary: 'See How It Works',
  },
  stats: [
    { num: '3x', label: 'More Leads' },
    { num: '24/7', label: 'AI Response' },
    { num: '0', label: 'Risk' },
  ],
  statsTitle: 'What You Get',
  statsBadge: 'At a Glance',
  marquee: {
    tagline: 'We help you find buyers where they are',
  },
  systems: {
    badge: 'Our Growth System',
    title: 'How We Do It',
    systems: [
      {
        num: '01',
        title: 'More Discovery',
        desc: 'Many western buyers are already searching for Chinese partners on Google. We optimize your Google Ads so they find YOU first—not your competitors.',
        align: 'left',
      },
      {
        num: '02',
        title: 'More orders',
        desc: 'We build you a high-converting landing page that western buyers are more familiar with. This helps build trust so they feel comfortable placing more orders, more frequently.',
        align: 'right',
      },
      {
        num: '03',
        title: 'Welcome the night shift',
        desc: 'Our AI sales assistant responds to buyers instantly—even at 3 AM.',
        align: 'left',
      },
    ],
  },
  benefits: {
    badge: 'The Harvest',
    title: 'What this means for your company',
    intro: 'Convertree\'s "3 Systems" work together to create a consistent pipeline of qualified Western Buyers for your company.',
    subtitle: 'This means for your company:',
    items: [
      { title: 'Save money', desc: 'You get more leads with the same ad spend' },
      { title: 'Higher margins', desc: 'You attract more direct buyers from Google, instead of competing for resellers on Alibaba' },
      { title: 'Customer selection', desc: 'Getting more leads means you choose who you want to do business with' },
      { title: 'Minimize downtime', desc: 'Your factory will run closer to full capacity' },
      { title: 'Effective sales', desc: 'Customers come to you, so your sales team spends more time closing deals and less time looking for prospects', wide: true },
    ],
    cta: 'Work with Convertree',
  },
  pricing: {
    title: 'Only pay for results',
    paragraph: "After a small one-time set up fee, you only pay us for the qualified western buyer leads we generate. If we don't deliver qualified leads, you don't pay. Simple.",
    tagline: 'Risk-free growth',
  },
  form: {
    badge: 'Free Growth Check',
    title: 'Western buyers look for these 7 specific "signals" when selecting a trustworthy partner – Does your site have them?',
    description: "Missing even a single signal could be costing you sales. Let us analyze your current landing page for the 7 signals and show you exactly where you're losing sales.",
    freeLabel: '100% Free Analysis',
    formTitle: 'Plant Your Seed',
    formSubtitle: "We'll analyze your page and send a growth report within 24 hours.",
    labels: { name: 'Name', email: 'Email', url: 'Landing Page URL' },
    placeholders: { name: 'Your name', email: 'your@email.com', url: 'https://yourcompany.com' },
    submit: 'Get Free Analysis',
    sending: 'Sending...',
    success: "Thanks! We'll be in touch within 24 hours.",
    error: 'Something went wrong. Please try again.',
  },
  footer: {
    copyright: '© 2026 Convertree by Metaverse Lab Limited. Grow organically.',
  },
};
