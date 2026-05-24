window.SmartSiteBotConfig = {
  businessName: 'Barco Solutions',
  title: 'Barco Solutions',
  subtitle: 'Welcome, projects, joinery and contact enquiries',
  botTitle: 'Barco Solutions Assist',
  botSubtitle: 'Building, renovation, joinery and project support',
  whatsappNumber: '',
  genericMessage: 'Hi Barco Solutions, I need help with a building, renovation, joinery or project enquiry.',
  fallback: 'I can still help route your enquiry. Please share a few more details.',
  emailSubject: 'Barco Solutions enquiry',
  introMessage: 'Hello 👋 I can help with Barco Solutions enquiries across the welcome page, projects, joinery and contact process. Choose an option or type your question.',
  quickReplies: [
    'I need a quote',
    'Projects page',
    'Joinery page',
    'B2B enquiry',
    'B2C enquiry',
    'Team and affiliates',
    'Contact the team'
  ],
  parameters: [
    { keywords: ['hello', 'hi', 'hey'], reply: 'Hello 👋 I can help with property maintenance, renovation, project support and quote enquiries for Barco Solutions.' },
    { keywords: ['quote', 'price', 'cost', 'quotation', 'estimate'], reply: 'For a quote, please send your name, property type, location, service needed, timeline, and photos if available.' },
    { keywords: ['waterproofing', 'leak', 'damp', 'roof'], reply: 'Barco Solutions can help with waterproofing and leak-related issues. Please send the affected area, location and how urgent it is.' },
    { keywords: ['painting', 'paint'], reply: 'Barco Solutions can assist with painting work. Please share the property type, area size, location and timeframe.' },
    { keywords: ['flooring', 'floor', 'tiles', 'vinyl', 'laminate'], reply: 'Barco Solutions can assist with flooring upgrades and replacements. Please share the floor type, approximate area and location.' },
    { keywords: ['inspection', 'structural', 'assessment', 'site visit'], reply: 'For inspections, please send the concern, property location and any supporting photos so the right next step can be suggested.' },
    { keywords: ['project', 'renovation', 'building', 'maintenance'], reply: 'Barco Solutions handles building, renovation and project work for residential, commercial and managed properties. Please share what needs to be done and where the site is located.' },
    { keywords: ['b2b', 'business', 'commercial'], reply: 'Barco Solutions is positioned for B2B work as well, including commercial and property-related project enquiries.' },
    { keywords: ['b2c', 'homeowner', 'home', 'private'], reply: 'Barco Solutions is also positioned for B2C and home project enquiries. Please share the property type, location and work needed.' },
    { keywords: ['joinery', 'cabinetry', 'built in', 'built-in'], reply: 'The joinery page is being prepared for a stronger showcase and future online store. If you have a joinery enquiry, please share the type of product or fit-out needed.' },
    { keywords: ['affiliate', 'affiliates', 'partner', 'team'], reply: 'The welcome page now includes affiliate and team summary sections, with room to add more confirmed details later.' },
    { keywords: ['contact', 'agent', 'human', 'team'], reply: 'Please share your name, contact number, location and the kind of work you need, and I can help route the enquiry.' }
  ],
  autoUpdateFromSite: true,
  sitePages: [
    { label: 'Welcome', href: 'index.html#welcome' },
    { label: 'About', href: 'index.html#about' },
    { label: 'Projects', href: 'index.html#projects' },
    { label: 'Joinery', href: 'index.html#joinery' },
    { label: 'Contact', href: 'index.html#contact' }
  ],
  siteAnswers: [
    { keywords: ['welcome', 'about', 'b2b', 'b2c'], reply: 'The welcome page summarises Barco Solutions, including About Us, B2B and B2C positioning, affiliates and team direction.', links: [{ label: 'Open Welcome', href: 'index.html#welcome' }] },
    { keywords: ['projects', 'project flow', 'services'], reply: 'The Projects page covers Barco services, the concept-to-completion diagram, project gallery and track record direction.', links: [{ label: 'Open Projects', href: 'index.html#projects' }] },
    { keywords: ['joinery'], reply: 'The Joinery page is prepared as a dedicated showcase with a future online store area planned for later.', links: [{ label: 'Open Joinery', href: 'index.html#joinery' }] },
    { keywords: ['contact', 'office', 'location'], reply: 'The Contact page includes the AI assist chatbot, enquiry form and current office location at 66A Section St, Paarden Eiland, Cape Town, 7405.', links: [{ label: 'Open Contact', href: 'index.html#contact' }] }
  ]
};
