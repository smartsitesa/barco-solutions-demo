window.SmartSiteBotConfig = {
  businessName: 'Barco Solutions',
  title: 'Barco Solutions',
  subtitle: 'How can we help you today?',
  botTitle: 'Barco Bot',
  botSubtitle: 'Parameter-based assistant',
  whatsappNumber: '',
  genericMessage: 'Hi Barco Solutions, I would like to enquire about building, renovation, maintenance or facilities services.',
  fallback: 'I am not sure about that. Do you want to speak to an agent?',
  emailSubject: 'Barco Solutions enquiry',
  introMessage: 'Hello 👋 I can help with Barco services, divisions, quote requests, inspections, maintenance, waterproofing, painting, flooring, hygiene, landscaping and tech/reporting. Choose an option or type your question.',
  quickReplies: [
    'What can you help with?',
    'I need a quote',
    'Waterproofing',
    'Maintenance',
    'Inspection',
    'Painting or flooring',
    'Cleaning or landscaping',
    'Barco divisions',
    'Speak to an agent'
  ],
  parameters: [
    { keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'], reply: 'Hello 👋 How can I assist you with Barco Solutions? You can ask about waterproofing, maintenance, inspections, painting, flooring, cleaning, landscaping, Barco divisions, or quotes.' },
    { keywords: ['what can you help with', 'help with', 'options', 'services', 'menu'], reply: 'I can help with: waterproofing, painting, flooring, maintenance, structural inspections, project management, cleaning, landscaping, hygiene services, Barco Tech/reporting, quote requests, and routing you to the right Barco division.' },
    { keywords: ['division', 'divisions', 'barco assist', 'barco hygiene', 'barco tech', 'barco solutions'], reply: 'Barco has multiple divisions: Barco Solutions for property/project work, Barco Assist for support and maintenance, Barco Hygiene for cleaning/hygiene needs, and Barco Tech for reporting/technology visibility.' },
    { keywords: ['waterproofing', 'leak', 'roof leak', 'damp', 'water damage', 'sealing'], reply: 'Yes, Barco can help with waterproofing and leak-related building work. Please send your name, location, where the leak/damp is, and whether it is urgent.' },
    { keywords: ['painting', 'paint', 'repaint', 'wall coating'], reply: 'Yes, Barco can assist with painting work. Please share the property type, area/rooms, location, and when you need it done.' },
    { keywords: ['flooring', 'floor', 'floors', 'tiles', 'vinyl', 'laminate'], reply: 'Yes, Barco can assist with flooring-related enquiries. Please share the floor type, approximate size/area, condition, and location.' },
    { keywords: ['maintenance', 'repair', 'fix', 'facilities', 'handyman', 'broken'], reply: 'Yes, Barco can help with maintenance and facilities support. Please send your name, location, photos if possible, and a short description of the issue.' },
    { keywords: ['inspection', 'structural', 'crack', 'assessment', 'site visit', 'check'], reply: 'Yes, Barco can assist with inspections and assessments. Please share photos if available, your location, and what concern you want checked.' },
    { keywords: ['project management', 'project', 'renovation', 'building', 'construction', 'upgrade'], reply: 'Yes, Barco can assist with building, renovation, and project management enquiries. Please share the project type, location, timeline, and what outcome you want.' },
    { keywords: ['cleaning', 'hygiene', 'sanitize', 'sanitise', 'deep clean'], reply: 'Yes, Barco Hygiene can help route cleaning and hygiene enquiries. Please send the site type, location, frequency needed, and any special requirements.' },
    { keywords: ['landscaping', 'garden', 'grounds', 'outdoor', 'grass'], reply: 'Yes, Barco can help with landscaping and site-care enquiries. Please share the location, outdoor area size, and what needs to be done.' },
    { keywords: ['barco tech', 'tech', 'reporting', 'technology', 'dashboard', 'visibility'], reply: 'Yes, Barco Tech can assist with technology and reporting visibility. Please describe what you want tracked, reported, or improved.' },
    { keywords: ['quote', 'price', 'cost', 'quotation', 'estimate'], reply: 'I can help prepare a quote request. Please send your name, contact number, location, service needed, and a short description of the work.' },
    { keywords: ['urgent', 'emergency', 'asap', 'today'], reply: 'If it is urgent, it is best to speak to an agent. Please send a WhatsApp with your name, location, issue, and photos if possible.' },
    { keywords: ['agent', 'human', 'person', 'whatsapp', 'call me', 'contact'], reply: 'No problem — I can route you to an agent. Use the WhatsApp handoff and include your name, location, and what you need help with.' }
  ],
  autoUpdateFromSite: true,
  sitePages: [
    { label: 'Home', href: 'index.html' }
  ],
  siteAnswers: [
    { keywords: ['who are you', 'about barco', 'what is barco', 'company'], reply: 'Barco Solutions is presented as a multi-division property and facilities services brand, with Barco Solutions, Barco Assist, Barco Hygiene and Barco Tech.' , links: [{ label: 'Open site', href: 'index.html' }] },
    { keywords: ['clients', 'client logos', 'who do you work with'], reply: 'The demo site includes a client-logo section to show credibility and the type of organisations Barco can serve.', links: [{ label: 'View clients', href: 'index.html#clients' }] },
    { keywords: ['how do you measure', 'measure', 'reporting', 'visibility'], reply: 'The site highlights measurement/reporting as part of the Barco value: visibility, tracking and clearer project or facilities management.', links: [{ label: 'View measurement section', href: 'index.html#measure' }] },
    { keywords: ['commitment', 'why choose', 'why barco'], reply: 'Barco’s positioning is around coordinated services, multiple divisions, reliable support and practical project/facilities visibility.', links: [{ label: 'View why choose Barco', href: 'index.html#why' }] }
  ]
};
