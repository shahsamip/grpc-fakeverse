const STARTUP_PREFIXES = ['Agile', 'Synergy', 'Disrupt', 'Pivot', 'Scale', 'Lean', 'Hyper', 'Meta', 'Ultra', 'Rocket', 'Nimble', 'Crispy', 'Fluent', 'Nexus', 'Omni', 'Turbo', 'Vibe', 'Flux'];
const STARTUP_SUFFIXES = ['ify', 'ly', '.io', 'HQ', 'AI', '360', 'Pro', 'Hub', 'Lab', 'Base', 'Stack', 'Go', 'Now', 'Hive', 'Forge', 'Pad', 'Desk'];

const INDUSTRIES = [
  'artisanal cheese', 'cat yoga', 'sourdough starter management', 'crystal healing',
  'oat milk on demand', 'mindful snacking', 'medieval LARPing', 'competitive dog grooming',
  'artisanal air', 'premium ice delivery', 'boutique napping', 'gourmet dog food subscriptions',
  'avocado toast logistics', 'professional cuddling', 'emotional support furniture',
  'artisanal water', 'conscious consumerism for goldfish', 'NFTs for receipts',
  'blockchain for houseplants', 'AI-powered horoscopes'
];

const TAGLINE_TEMPLATES = [
  'Uber for {industry}, but blockchain',
  'Like {industry} meets {industry2}, but decentralized',
  "We're disrupting the {industry} space with AI",
  "The {industry} industry hasn't been disrupted since {year}",
  '{industry}, but make it Web3',
  'The last {industry} app you\'ll ever need (until our next pivot)',
  'Finally, a solution for {industry}',
  'Democratizing access to {industry}',
  '{industry} is broken. We\'re fixing it.',
  'Your {industry} co-pilot, powered by AI'
];

const TECH_STACKS = [
  'AI', 'blockchain', 'another blockchain', 'the cloud', 'machine learning',
  'big data', 'Web3', 'NFTs', 'quantum computing (TBD)', 'vibes',
  'synergy engine', '10x algorithm', 'deep learning', 'edge computing',
  'serverless vibes', 'distributed ledger', 'neural networks (tutorial-based)'
];

const VALUATIONS = [
  '$4B (pre-revenue)', '$12B (post-pivot, pre-product)', '$800M (projected)',
  '$2.5B (SoftBank\'s fault)', '$50M seed (oops)', '$1.2B (series A, don\'t ask)',
  '$300M (vibes-based)', '$8B (according to our deck)', '$0 (honest answer)',
  '$15B (that\'s what the VC said)'
];

const OFFICES = [
  'stealth mode (founder\'s garage)', 'WeWork (3 days/week)',
  'anywhere with good Wi-Fi', 'Bali (permanent WFH)', 'the metaverse',
  'TBD (currently between leases)', 'open floor plan hell',
  'a coffee shop in SoMa', 'founder\'s mom\'s basement (pivot in progress)',
  'distributed (nobody actually knows)'
];

const FANCY_TITLES = [
  'Chief Vibe Officer', 'VP of Disruption', 'Head of Synergy',
  'Chief Evangelist', 'Director of Vibes', 'Chief Happiness Engineer',
  'VP of Storytelling', 'Head of Culture', 'Chief Remote Officer',
  'VP of Ideation', 'Principal Disruptor', 'Head of Growth Hacking',
  'Chief Storyteller', 'VP of Community Vibes', 'Director of Awesomeness',
  'Chief Mindfulness Officer', 'VP of Ecosystem', 'Head of Thought Leadership',
  'Chief Wizard', 'Director of First Impressions'
];

const KOMBUCHA_FLAVORS = [
  'elderflower', 'turmeric ginger', 'lavender CBD', 'charcoal lemon',
  'adaptogenic mushroom', 'celestial berry', 'moon juice', 'anti-inflammatory mango',
  'probiotic peach', 'matcha zen', 'ashwagandha apple', 'blue spirulina citrus'
];

const ACTUALLY_DID = [
  'Updated LinkedIn profile', 'Read HBR article about disruption',
  'Watched startup documentary on Netflix', 'Sent emails about sending emails',
  'Had coffee with a VC', 'Changed title on Twitter bio',
  'Reorganized Notion workspace', 'Renamed Slack channels',
  'Updated OKRs to match what already happened',
  'Wrote a Twitter thread about productivity',
  'Attended a webinar about avoiding webinars',
  'Added buzzwords to resume', 'Liked competitor\'s LinkedIn posts',
  'Made a deck about making decks', 'Subscribed to three more newsletters'
];

const STANDUP_YESTERDAY = [
  'Synergized with key stakeholders', 'Facilitated cross-functional alignment',
  'Ideated on the product roadmap', 'Circled back with the team',
  'Leveraged learnings from last quarter', 'Socialized the strategy deck',
  'Deep-dived into the metrics', 'Workshopped the product vision',
  'Unlocked new paradigms', 'Cultivated ecosystem partnerships'
];

const STANDUP_TODAY = [
  'Leverage core competencies to drive value', 'Unblock the backlog via async communication',
  'Align on north star metrics', 'Drive customer obsession initiatives',
  'Evangelize the product vision', 'Synthesize feedback loops',
  'Optimize for learnings', 'Move fast and break assumptions',
  'Disrupt internal silos', 'Scale the culture before the culture scales us'
];

const BLOCKERS = [
  'Coffee machine is down', 'Mercury is in retrograde',
  'Wi-Fi is below 1 Gbps', 'Too many Slack notifications',
  'Calendar is full of meetings about empty calendar',
  'Ping pong table is occupied', 'Waiting for stakeholder alignment',
  'MacBook is too hot', 'Standing desk is broken',
  'Waiting for design to vibe-check the mockups',
  'Zoom link expired', 'Figma is being slow today'
];

const PIVOT_FROMS = [
  'Uber for cats', 'blockchain for pets', 'AI for sourdough',
  'Tinder for houseplants', 'LinkedIn for dogs', 'crypto for avocado toast',
  'Airbnb for closets', 'SaaS for naptime', 'NFTs for grocery lists',
  'Web3 for dental hygiene'
];

const PIVOT_TOS = [
  'blockchain for cats', 'AI for pets', 'SaaS for sourdough',
  'Web3 for houseplants', 'NFTs for dogs', 'Uber for avocado toast',
  'metaverse for closets', 'crypto for naptime', 'AI for grocery lists',
  'DeFi for dental hygiene'
];

const PIVOT_REASONS = [
  'market fit', 'the data', 'vision alignment', 'founder intuition',
  'a VC said so', 'Twitter feedback', 'competitive pressure',
  'TikTok trend', 'a dream (seriously)', 'vibes'
];

const PIVOT_ANNOUNCEMENTS = [
  'tweetstorm', 'LinkedIn essay', 'all-hands meeting (10 min notice)',
  'Slack message at 11pm', 'Medium post titled "Exciting News"',
  'a meme', 'interpretive blog post', 'email with no subject line'
];

const PRODUCT_STATUSES = ['PowerPoint', 'Figma mockup', 'napkin sketch', 'vibes', 'landing page with waitlist', 'beta (invite only, never invited)', 'stealth'];

module.exports = {
  STARTUP_PREFIXES, STARTUP_SUFFIXES, INDUSTRIES, TAGLINE_TEMPLATES,
  TECH_STACKS, VALUATIONS, OFFICES, FANCY_TITLES, KOMBUCHA_FLAVORS,
  ACTUALLY_DID, STANDUP_YESTERDAY, STANDUP_TODAY, BLOCKERS,
  PIVOT_FROMS, PIVOT_TOS, PIVOT_REASONS, PIVOT_ANNOUNCEMENTS, PRODUCT_STATUSES
};
