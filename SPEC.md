# Barco Solutions Rebuild Spec

Goal: rebuild the public-facing Barco Solutions site and propose a stronger replacement backend/operations flow without needing current provider backend access.

## Public findings
- Current site is hosted on a LeadConnector / GoHighLevel-style stack.
- Public site messaging focuses on building, renovation, and maintenance solutions.
- Services mentioned publicly include waterproofing, painting, flooring, structural inspections, project management, cleaning, and landscaping.
- Likely current WhatsApp/chat handling is tied to HighLevel conversation/workflow tooling, but exact backend logic is not publicly visible.

## Rebuild direction
- Keep look and positioning professional and property-services focused.
- Improve clarity of service categories.
- Improve conversion path to quote request and WhatsApp contact.
- Make the site easier to manage on our own stack.

## Replacement backend we want
- Hosted website on our stack
- WhatsApp-first lead capture
- simple quote request form
- lead status tracking
- manual + semi-automated follow-up workflow
- monthly reporting
- clear handoff rules for high-intent leads

## Migration truth
- Public site can be rebuilt without backend access.
- Exact CRM/workflow/inbox migration would still require current provider access.
