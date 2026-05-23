window.SmartSiteBotConfig = {
  businessName: 'Barco Solutions',
  title: 'Barco Solutions',
  subtitle: 'Property services and project enquiries',
  botTitle: 'Barco Solutions Assist',
  botSubtitle: 'Building, renovation and maintenance support',
  whatsappNumber: '',
  genericMessage: 'Hi Barco Solutions, I need help with a property maintenance, renovation, inspection or project enquiry.',
  fallback: 'I can still help route your enquiry. Please share a few more details.',
  emailSubject: 'Barco Solutions enquiry',
  introMessage: 'Hello 👋 I can help with Barco Solutions services such as waterproofing, painting, flooring, inspections, project coordination, cleaning and landscaping. Choose an option or type your question.',
  quickReplies: [
    'I need a quote',
    'Waterproofing',
    'Painting',
    'Flooring',
    'Inspection',
    'Project support',
    'Contact the team'
  ],
  parameters: [
    { keywords: ['hello', 'hi', 'hey'], reply: 'Hello 👋 I can help with property maintenance, renovation, project support and quote enquiries for Barco Solutions.' },
    { keywords: ['quote', 'price', 'cost', 'quotation', 'estimate'], reply: 'For a quote, please send your name, property type, location, service needed, timeline, and photos if available.' },
    { keywords: ['waterproofing', 'leak', 'damp', 'roof'], reply: 'Barco Solutions can help with waterproofing and leak-related issues. Please send the affected area, location and how urgent it is.' },
    { keywords: ['painting', 'paint'], reply: 'Barco Solutions can assist with painting work. Please share the property type, area size, location and timeframe.' },
    { keywords: ['flooring', 'floor', 'tiles', 'vinyl', 'laminate'], reply: 'Barco Solutions can assist with flooring upgrades and replacements. Please share the floor type, approximate area and location.' },
    { keywords: ['inspection', 'structural', 'assessment', 'site visit'], reply: 'For inspections, please send the concern, property location and any supporting photos so the right next step can be suggested.' },
    { keywords: ['project', 'renovation', 'building', 'maintenance'], reply: 'Barco Solutions handles building, renovation and maintenance work for residential, commercial and managed properties. Please share what needs to be done and where the site is located.' },
    { keywords: ['cleaning', 'landscaping', 'garden'], reply: 'Yes — Barco Solutions also positions around cleaning and landscaping support. Please send the site type, size and frequency needed.' },
    { keywords: ['contact', 'agent', 'human', 'team'], reply: 'Please share your name, contact number, location and the kind of work you need, and I can help route the enquiry.' }
  ],
  autoUpdateFromSite: true,
  sitePages: [
    { label: 'About', href: 'index.html#about' },
    { label: 'Services', href: 'index.html#services' },
    { label: 'Projects', href: 'index.html#projects' },
    { label: 'Joinery', href: 'index.html#joinery' },
    { label: 'Contact', href: 'index.html#contact' }
  ],
  siteAnswers: [
    { keywords: ['services', 'what do you do'], reply: 'Barco Solutions provides building, renovation and maintenance services including waterproofing, painting, flooring, inspections, project coordination, cleaning and landscaping.', links: [{ label: 'Open Services', href: 'index.html#services' }] },
    { keywords: ['projects', 'project flow'], reply: 'The Projects section explains the Barco Solutions flow from assessment and planning through delivery and completion.', links: [{ label: 'Open Projects', href: 'index.html#projects' }] },
    { keywords: ['joinery'], reply: 'The Joinery section highlights custom built-ins, cabinetry and crafted finish work as part of the wider Barco Solutions offer.', links: [{ label: 'Open Joinery', href: 'index.html#joinery' }] },
    { keywords: ['contact', 'office', 'location'], reply: 'Barco Solutions is presented from 66A Section St, Paarden Eiland, Cape Town, 7405.', links: [{ label: 'Open Contact', href: 'index.html#contact' }] }
  ]
};
