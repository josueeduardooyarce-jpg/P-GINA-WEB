import type { Dictionary } from './es'

// English copy. Keep the same structure as es.ts.
export const en: Dictionary = {
  nav: {
    services: 'Services',
    process: 'Process',
    demos: 'Demos',
    about: 'About',
    faq: 'FAQ',
    cta: 'Book a diagnostic',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Change language',
    theme: 'Toggle light and dark mode',
    skip: 'Skip to content',
  },
  hero: {
    eyebrow: 'AI automation for growing SMBs',
    title: 'Win back your team’s hours with custom-built AI automations',
    subtitle:
      'We design and implement AI agents, automated workflows and integrations that remove repetitive work from your operations. Your company grows without hiring more people for tasks a system can do better.',
    ctaPrimary: 'Book a free diagnostic',
    ctaSecondary: 'See how it works',
    trust: ['100% remote', 'Support across time zones', 'Data protected'],
    flow: {
      caption: 'Example automated workflow',
      status: 'Running',
      steps: [
        { title: 'New lead on WhatsApp', meta: 'Trigger' },
        { title: 'AI agent qualifies and replies', meta: 'AI' },
        { title: 'Logged in the CRM', meta: 'Integration' },
        { title: 'Automatic follow-up in 24h', meta: 'Workflow' },
        { title: 'Weekly summary to the manager', meta: 'Report' },
      ],
    },
  },
  problem: {
    eyebrow: 'The problem',
    title: 'Your team is busy. Just not on what grows the business.',
    subtitle:
      'As a company grows, manual processes grow with it. And hiring more people starts to look like the only way out.',
    items: [
      {
        title: 'Repetitive manual tasks',
        description:
          'Copying data between spreadsheets, systems and emails. Hours every week on work that needs no human judgment.',
      },
      {
        title: 'Leads lost in follow-up',
        description:
          'Prospects who don’t get a timely answer and deals that go cold because nobody had time to write back.',
      },
      {
        title: 'Reports that take hours',
        description:
          'Someone has to pull numbers by hand to know how the business is doing. By the time the report arrives, it’s outdated.',
      },
      {
        title: 'An overloaded team',
        description:
          'Your best people spend the day fighting operational fires instead of selling, serving clients or improving the service.',
      },
    ],
  },
  services: {
    eyebrow: 'Services',
    title: 'Automations that fit the way your company already works',
    subtitle:
      'We don’t sell standalone tools. We design systems that connect your channels, your data and your team.',
    items: [
      {
        title: 'AI agents for support and sales',
        description:
          'They reply, qualify and book meetings 24/7 on WhatsApp, web or email, and hand off to a person when needed.',
      },
      {
        title: 'Internal process automation',
        description:
          'Approvals, onboarding, collections and admin tasks that move forward on their own, fully traceable.',
      },
      {
        title: 'CRM, ERP and WhatsApp integrations',
        description:
          'Your systems talk to each other. Data is entered once and reaches every place it needs to go.',
      },
      {
        title: 'Document processing',
        description:
          'Invoices, contracts and forms read, classified and loaded automatically, with optional human review.',
      },
      {
        title: 'Automated reports and dashboards',
        description:
          'Key metrics kept up to date and delivered to your inbox or WhatsApp, with no one building spreadsheets.',
      },
      {
        title: 'Maintenance and continuous improvement',
        description:
          'We monitor, tune and extend your automations as your business evolves.',
      },
    ],
  },
  process: {
    eyebrow: 'How we work',
    title: 'A clear process, with deliverables at every phase',
    subtitle: 'You know what you get, when and why. No black boxes.',
    deliverablesLabel: 'Deliverables',
    steps: [
      {
        title: 'Diagnostic',
        description:
          'We learn how your operation runs, identify the highest-impact processes and estimate the return.',
        deliverables: ['Current process map', 'Prioritized opportunities', 'Impact estimate'],
      },
      {
        title: 'Design',
        description:
          'We define the solution, integrations and business rules before writing a single line of code.',
        deliverables: ['Solution architecture', 'Scope and timeline', 'Success criteria'],
      },
      {
        title: 'Implementation',
        description: 'We build in stages, with frequent demos to validate progress with your team.',
        deliverables: ['Automations in production', 'Tested integrations', 'Progress demos'],
      },
      {
        title: 'Training',
        description:
          'Your team learns to use, supervise and get the most out of the new tools from day one.',
        deliverables: ['Training sessions', 'User guides', 'Technical documentation'],
      },
      {
        title: 'Continuous improvement',
        description: 'We measure results, fine-tune and spot new automation opportunities.',
        deliverables: ['Monitoring and support', 'Performance reports', 'Improvement roadmap'],
      },
    ],
  },
  demos: {
    eyebrow: 'Demos',
    title: 'What a working automation looks like',
    subtitle:
      'Interactive example mockups. They show the kind of systems we build, not client projects.',
    badge: 'Example demo',
    play: 'Play demo',
    replay: 'Replay',
    tabs: [
      {
        title: 'WhatsApp sales agent',
        description: 'Replies, qualifies the prospect and books a viewing with no human input.',
      },
      {
        title: 'Invoice reading',
        description: 'Extracts data from a PDF invoice and loads it into the accounting system.',
      },
      {
        title: 'Automated weekly report',
        description: 'Consolidates sales and operations data and sends it to the manager every Monday.',
      },
    ],
    chat: {
      agent: 'AI agent',
      online: 'online',
      messages: [
        { from: 'user', text: 'Hi, I saw the 2-bedroom apartment downtown. Is it still available?' },
        { from: 'agent', text: 'Hi! Yes, it is. Are you looking to live there or as an investment?' },
        { from: 'user', text: 'To live in. I’d like to see it this week.' },
        { from: 'agent', text: 'Great. I have Thursday 5:00 PM or Friday 11:00 AM. Which works for you?' },
        { from: 'user', text: 'Thursday 5:00 PM.' },
        { from: 'agent', text: 'Done, your viewing is booked. I’ll send the location and a reminder that day.' },
      ],
      event: 'Lead logged in CRM · Viewing added to the agent’s calendar',
    },
    document: {
      file: 'invoice_0457.pdf',
      extracting: 'Extracting data',
      done: 'Loaded into accounting system',
      fields: [
        { label: 'Vendor', value: 'Northern Supplies' },
        { label: 'Invoice #', value: 'F-0457' },
        { label: 'Date', value: '11/04/2026' },
        { label: 'Net amount', value: 'USD 2,480.00' },
        { label: 'Tax', value: 'USD 471.20' },
        { label: 'Cost center', value: 'Operations' },
      ],
    },
    dashboard: {
      title: 'Weekly summary',
      period: 'Week 45',
      sent: 'Sent to the manager by email and WhatsApp',
      kpis: [
        { label: 'New leads', value: '48' },
        { label: 'Meetings booked', value: '17' },
        { label: 'Response time', value: '2 min' },
      ],
      chartLabel: 'Leads per day',
      days: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      note: 'Fictional data for the demo',
    },
  },
  scenarios: {
    eyebrow: 'Illustrative scenarios',
    title: 'How we would apply it in companies like yours',
    subtitle:
      'Hypothetical examples to show our approach. They do not correspond to client projects.',
    label: 'Illustrative scenario',
    beforeLabel: 'Today',
    afterLabel: 'With automation',
    items: [
      {
        industry: 'Real estate',
        title: 'How we would automate sales follow-up for a real estate agency',
        before: 'Agents answer inquiries by hand and lose leads outside business hours.',
        after: 'An AI agent replies instantly, qualifies and books viewings in each agent’s calendar.',
      },
      {
        industry: 'Professional services',
        title: 'How we would automate client onboarding for an accounting firm',
        before: 'Documents by email, manual reminders and data entry across several spreadsheets.',
        after: 'Intake portal, automatic document reading and scheduled reminders.',
      },
      {
        industry: 'Professional services',
        title: 'How we would automate reporting for a consulting firm',
        before: 'Every Friday someone consolidates data from 4 sources for the management report.',
        after: 'A real-time dashboard and a summary sent automatically every Monday.',
      },
    ],
  },
  about: {
    eyebrow: 'About',
    title: 'Technology that works so your company sells more and runs better',
    story: [
      'At Nexura Corp we design AI-powered automation systems for small and medium-sized businesses. We first understand how your business works and only then choose the technology, never the other way around.',
      'Every solution is built to fit, is easy for your team to use and is documented so you never depend on anyone. That way your people leave repetitive tasks behind and focus on what grows your company.',
    ],
    goalLabel: 'Our goal',
    goal: 'To optimize how you close sales, serve and follow up with your customers, run your logistics and manage your business information.',
    focusTitle: 'What we focus on',
    focus: [
      {
        title: 'Closing sales',
        description:
          'We reply instantly, qualify every prospect and follow up until the deal is closed, so no opportunity goes cold.',
      },
      {
        title: 'Customer service',
        description:
          'AI agents and workflows that handle inquiries around the clock on WhatsApp, web or email, and hand over to a person when needed.',
      },
      {
        title: 'Customer follow-up',
        description:
          'Automatic reminders, reactivation and after-sales, so every customer feels looked after and comes back to buy again.',
      },
      {
        title: 'Logistics',
        description:
          'Orders, inventory, dispatch and delivery status connected, with fewer errors and less manual work.',
      },
      {
        title: 'Customer data management',
        description:
          'Your customer information organized, up to date and kept in one place, ready for decision-making.',
      },
    ],
  },
  security: {
    eyebrow: 'Security and trust',
    title: 'Your data and operations, protected by design',
    items: [
      {
        title: 'Data protection',
        description: 'Least-privilege access and sound security practices in every integration.',
      },
      {
        title: 'Confidentiality',
        description: 'We sign non-disclosure agreements (NDAs) before accessing your information.',
      },
      {
        title: 'Code ownership',
        description: 'Everything we build for you is yours: code, workflows, accounts and settings.',
      },
      {
        title: 'Documentation delivered',
        description: 'Technical and user documentation so any team can maintain the system.',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'What we usually get asked',
    items: [
      {
        q: 'How much does a project cost?',
        a: 'Each project is quoted based on its scope: number of processes, required integrations and complexity. During the diagnostic we estimate the business impact and the investment, so you can decide with clear numbers.',
      },
      {
        q: 'How long does implementation take?',
        a: 'A first workflow is usually live within a few weeks. Projects with several integrations are rolled out in stages, so you see results from the start, not only at the end.',
      },
      {
        q: 'What about the security of my data?',
        a: 'We sign an NDA and work with least-privilege access. Whenever possible, data stays in your own accounts.',
      },
      {
        q: 'Will I depend on you forever?',
        a: 'No. The code, accounts and documentation are in your name. You can keep working with us on continuous improvement or maintain it with your own team.',
      },
      {
        q: 'Will AI replace my team?',
        a: 'The goal is different: free your team from repetitive work so they can focus on selling, serving clients better and making decisions. Tasks that require judgment stay in people’s hands.',
      },
      {
        q: 'How does 100% remote work across time zones work?',
        a: 'We schedule meetings at times that suit both sides, use async tools day to day and deliver documented progress. We work with companies in different countries without friction.',
      },
      {
        q: 'What happens after the project?',
        a: 'You receive full documentation and training. You can also add a maintenance and continuous improvement plan to monitor, tune and extend your automations.',
      },
    ],
  },
  contact: {
    eyebrow: 'Book your diagnostic',
    title: 'Let’s talk about the processes eating up your time',
    subtitle:
      'Tell us about your company. We review every request and reply within 24 business hours with a meeting proposal.',
    bullets: [
      '30 to 45 minute video call',
      'We identify 2 or 3 concrete opportunities',
      'No commitment to hire',
    ],
    form: {
      name: 'Name',
      email: 'Work email',
      company: 'Company',
      process: 'Which process do you want to automate?',
      investment: 'Approximate investment range',
      select: 'Select an option',
      placeholders: {
        name: 'Your name',
        email: 'you@company.com',
        company: 'Company name',
        process: 'E.g.: we answer WhatsApp inquiries by hand and lose leads after hours...',
      },
      investmentOptions: [
        'Less than USD 3,000',
        'USD 3,000 - 8,000',
        'USD 8,000 - 15,000',
        'More than USD 15,000',
      ],
      submit: 'Request diagnostic',
      submitting: 'Sending...',
      privacy: 'By submitting you accept our privacy policy. We never share your data with third parties.',
      successTitle: 'Request received!',
      successMessage:
        'Thank you. We will review your information and get back to you within 24 business hours. If you prefer a faster reply, message us on WhatsApp.',
      errorGeneric: 'We couldn’t send the form. Please try again or email us.',
      errors: {
        name: 'Enter your name',
        email: 'Enter a valid email',
        company: 'Enter your company name',
        required: 'Select an option',
        process: 'Tell us a bit more (at least 20 characters)',
      },
    },
    calendar: {
      title: 'Or book a time directly',
      placeholder: 'Your Cal.com or Calendly calendar will appear here',
      hint: 'Set the URL in lib/site-config.ts',
    },
  },
  whatsapp: {
    label: 'Message us on WhatsApp',
    cta: 'Message on WhatsApp',
    message:
      "Hi, I saw the Nexura Corp website and I'd like to book a free diagnostic to automate processes in my company.",
  },
  footer: {
    tagline: 'AI process automation for SMBs that want to grow without adding complexity.',
    navTitle: 'Site',
    contactTitle: 'Contact',
    legalTitle: 'Legal',
    privacy: 'Privacy policy',
    terms: 'Terms and conditions',
    rights: 'All rights reserved.',
  },
}
