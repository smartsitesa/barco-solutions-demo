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
  parameters: [
    { keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'], reply: 'Hello 👋 How can I assist you with Barco Solutions?' },
    { keywords: ['waterproofing', 'leak', 'roof leak', 'damp'], reply: 'Yes, Barco can help with waterproofing and leak-related building work. Please send your name, location, and what area is leaking.' },
    { keywords: ['painting', 'paint'], reply: 'Yes, Barco can assist with painting work. Please share the property type, area/rooms, location, and when you need it done.' },
    { keywords: ['flooring', 'floor', 'floors'], reply: 'Yes, Barco can assist with flooring-related enquiries. Please share the floor type, size/area, and location.' },
    { keywords: ['maintenance', 'repair', 'fix', 'facilities'], reply: 'Yes, Barco can help with maintenance and facilities support. Please send your name, location, and a short description of the issue.' },
    { keywords: ['inspection', 'structural', 'crack', 'assessment'], reply: 'Yes, Barco can assist with inspections and assessments. Please share photos if available, your location, and the concern you want checked.' },
    { keywords: ['project management', 'project', 'renovation', 'building', 'construction'], reply: 'Yes, Barco can assist with building, renovation, and project management enquiries. Please share the project type, location, and timeline.' },
    { keywords: ['cleaning', 'hygiene', 'landscaping', 'garden'], reply: 'Yes, Barco can help route cleaning, hygiene, landscaping, and site-care enquiries. Please send your location and what service you need.' },
    { keywords: ['barco tech', 'tech', 'reporting', 'technology'], reply: 'Yes, Barco Tech can assist with technology and reporting visibility. Please describe what you want tracked or reported.' },
    { keywords: ['quote', 'price', 'cost', 'quotation'], reply: 'I can help prepare a quote request. Please send your name, contact number, location, and a short description of the work needed.' }
  ]
};
