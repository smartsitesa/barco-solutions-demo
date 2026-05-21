window.SmartSiteBotConfig = {
  businessName: 'Barco Solutions',
  title: 'Barco Solutions',
  subtitle: 'Project enquiries and scope guidance',
  botTitle: 'Barco Solutions AI Assist',
  botSubtitle: 'Project triage assistant',
  whatsappNumber: '',
  genericMessage: 'Hi Barco Solutions, I would like to discuss a project, joinery work, or a concept-to-completion enquiry.',
  fallback: 'I am not fully sure about that yet, but I can still help route your enquiry.',
  emailSubject: 'Barco Solutions project enquiry',
  introMessage: 'Hello 👋 I can help with project enquiries, B2B or B2C work, joinery, project flow questions, and AI-assisted contact routing. Choose an option or type your question.',
  quickReplies: [
    'I need a project quote',
    'What does Barco Solutions do?',
    'Joinery services',
    'How does the project flow work?',
    'B2B enquiry',
    'B2C enquiry',
    'Contact the team'
  ],
  parameters: [
    { keywords: ['hello', 'hi', 'hey'], reply: 'Hello 👋 I can help with Barco Solutions project, joinery, B2B, B2C, and contact enquiries.' },
    { keywords: ['what does barco solutions do', 'services', 'what do you do', 'offer'], reply: 'Barco Solutions is positioned around project delivery from concept to completion, including planning, coordination, fit-out style work, and joinery-led detail.' },
    { keywords: ['quote', 'price', 'cost', 'quotation', 'estimate'], reply: 'For a project quote, please send your name, project type, location, timeline, budget range if known, and whether the work is commercial or private.' },
    { keywords: ['joinery', 'cabinet', 'built in', 'woodwork', 'shopfitting'], reply: 'The joinery section is being positioned as a premium Barco capability with gallery-led presentation and room for a future product/store layer.' },
    { keywords: ['project flow', 'concept to completion', 'how do you work', 'process'], reply: 'The current project flow is: brief, planning, execution, finish/detail refinement, and handover. The site explains this as the concept-to-completion path.' },
    { keywords: ['b2b', 'commercial', 'developer', 'property'], reply: 'Yes — the landing page is designed to speak to B2B project stakeholders including developers, landlords, and property teams.' },
    { keywords: ['b2c', 'home', 'private client', 'residential'], reply: 'Yes — the site also positions Barco Solutions for B2C/private clients who need a clearer project journey and high-touch communication.' },
    { keywords: ['contact', 'agent', 'human', 'speak to someone'], reply: 'I can help route your enquiry. Please send your name, project location, what you need done, and your timeline so the right person can follow up.' }
  ],
  autoUpdateFromSite: true,
  sitePages: [
    { label: 'Welcome', href: 'index.html#welcome' },
    { label: 'Projects', href: 'index.html#projects' },
    { label: 'Joinery', href: 'index.html#joinery' },
    { label: 'Contact', href: 'index.html#contact' }
  ],
  siteAnswers: [
    { keywords: ['joinery page', 'joinery'], reply: 'The Joinery section is positioned as a premium, craft-led capability ready for richer examples once the final reference direction is shared.', links: [{ label: 'Open Joinery section', href: 'index.html#joinery' }] },
    { keywords: ['projects', 'project page', 'project flow'], reply: 'The Projects section explains Barco Solutions as a concept-to-completion delivery partner rather than a loose list of services.', links: [{ label: 'Open Projects section', href: 'index.html#projects' }] },
    { keywords: ['contact', 'advanced contact', 'ai chat'], reply: 'The contact section already includes an AI-guided route and placeholders for final phone/email/WhatsApp details once confirmed.', links: [{ label: 'Open Contact section', href: 'index.html#contact' }] }
  ]
};
