// Shared content data — single source of truth for the desktop windows and
// the plain fallback pages (about/projects/contact).

export const profile = {
  name: "Mohammed Sameer Sarfaraz Bake",
  tagline:
    "AI Software Developer: building AI that (usually) does what I meant, not what I said.",
  email: "bake.m@northeastern.edu",
  github: "https://github.com/sameer08055",
  linkedin: "https://www.linkedin.com/in/sameer-mohammed-a5475b284/",
};

export const funFacts = [
  "Curates way too many playlists for every possible mood",
  "Plays football and badminton (strictly amateur league)",
  "Loves traveling and picking up bits of new cultures along the way",
];

export const skills = [
  "Python",
  "LangChain / LangGraph",
  "RAG Systems",
  "Vertex AI / GCP",
  "FastAPI",
  "Model Context Protocol (MCP)",
];

export const experience = [
  {
    role: "Advanced Applications Engineering Analyst",
    org: "Accenture, Hyderabad, IN",
    dates: "Aug '23 – Aug '25",
    summary:
      "Built a multimodal RAG assistant on GCP and shipped APIs fast enough to make Tier-1 support tickets disappear (deflected ~60% of them) — plus built the safety net (PII redaction, audit logging, eval framework) so nothing leaked and nothing shipped untested.",
  },
  {
    role: "Applications Engineering Analyst",
    org: "Accenture, Hyderabad, IN",
    dates: "Jul '22 – Aug '23",
    summary:
      "Taught a language model to read invoices at 94%+ accuracy across 10K+ documents a month, and spent a lot of quality time doing prompt engineering with PaLM and Text Bison so the outputs stayed consistent instead of creative.",
  },
];

export const projects = [
  {
    id: "boston-311-chatbot",
    name: "Boston 311 Chatbot",
    description:
      "A natural-language chatbot over Boston's 311 city service data — ETL pipelines feed a fine-tuned SQL model and a FAISS-based RAG system, all containerized and deployed on Cloud Run.",
    url: "https://github.com/sameer08055/Boston-311-Chatbot",
  },
  {
    id: "personal-finance-assistant",
    name: "Personal Finance Assistant",
    description:
      "A privacy-first AI finance assistant built with LangGraph: it categorizes spending, flags unusual transactions, and redacts your sensitive info before anything gets stored or reviewed.",
    url: "https://github.com/sameer08055/finance-assistant",
  },
  {
    id: "marketmind",
    name: "MarketMind",
    description:
      "A multi-agent AI system for stock research — coordinates market data, financial news, and sentiment analysis across custom Model Context Protocol (MCP) servers to generate research reports.",
    url: "https://github.com/sameer08055/marketmind",
  },
];
