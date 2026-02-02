import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meet Scout — The AI Behind RegularFolkFinance',
  description: 'How we use a 7-brain AI system to analyze 100+ financial news sources and create data-driven personal finance content at scale.',
  openGraph: {
    title: 'Meet Scout — The AI Behind RegularFolkFinance',
    description: 'How we use a 7-brain AI system to analyze 100+ financial news sources and create data-driven personal finance content at scale.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const brains = [
  { name: 'Topic Analyzer', desc: 'Scores and ranks incoming topics from RSS feeds by relevance, recency, and audience fit.', status: 'operational' as const },
  { name: 'Article Writer', desc: 'Generates full 2,000+ word articles in a natural, data-driven voice.', status: 'operational' as const },
  { name: 'Search Optimizer', desc: 'Optimizes for 4 layers: traditional SEO, Answer Engine (featured snippets), Generative Engine (AI Overviews), and LLM Optimization (ChatGPT/Perplexity).', status: 'operational' as const },
  { name: 'Tag Extractor', desc: 'Auto-categorizes content with categories, tags, audience segments, and topic entities.', status: 'operational' as const },
  { name: 'Topic Ranker', desc: 'Prioritizes topics by urgency, revenue potential, and category balance.', status: 'development' as const },
  { name: 'Fact Checker', desc: '4-layer verification: source quality, Google Fact Check API, Claude verification, human review.', status: 'development' as const },
  { name: 'Quality Gate', desc: 'Scores articles on accuracy, voice, SEO, readability. Approves, flags, or rejects. Gateway to full autonomy.', status: 'development' as const },
];

const techStack = [
  { label: 'Orchestration', value: 'n8n (visual workflow automation)' },
  { label: 'AI Models', value: 'Claude (Haiku for metadata, Sonnet for writing)' },
  { label: 'Database', value: 'Supabase (PostgreSQL + pgvector for semantic search)' },
  { label: 'Images', value: 'Pexels API \u2192 Cloudinary CDN' },
  { label: 'Deployment', value: 'GitHub \u2192 Vercel auto-deploy' },
  { label: 'Human Interface', value: 'Telegram Bot for approval workflow' },
  { label: 'Frontend', value: 'Next.js + TypeScript + Tailwind' },
];

const phases = [
  { phase: '1', label: 'Current', desc: 'Human selects topics and approves articles via Telegram', pct: 40, active: true },
  { phase: '2', label: 'Next', desc: 'Topic auto-selected, human approves articles only', pct: 60, active: false },
  { phase: '3', label: 'Upcoming', desc: 'Quality Gate auto-approves high-confidence articles', pct: 80, active: false },
  { phase: '4', label: 'Future', desc: 'Preference Learner handles most decisions', pct: 90, active: false },
  { phase: '5', label: 'Vision', desc: 'Full autonomy with weekly digest review', pct: 95, active: false },
];

const lessons = [
  { title: 'Simplicity beats cleverness in production', desc: 'Custom components broke the rendering pipeline. Standard markdown was more reliable. Ship what works.' },
  { title: 'Cost tracking is non-negotiable', desc: 'Every API call tracked to the penny. $15/month hard cap enforces real engineering discipline.' },
  { title: 'Progressive autonomy is a governance principle', desc: "Don\u2019t give an AI system full autonomy on day one. Measure, calibrate, earn trust through data." },
  { title: 'Build for migration', desc: 'Claude 3.5 models deprecated mid-build. Model references as config, not hardcoded. Same challenge any enterprise faces with vendor APIs.' },
];

const pipelineSteps = [
  { label: 'RSS Feeds', desc: '100+ financial news sources monitored daily', icon: '\uD83D\uDCE1' },
  { label: 'Topic Scoring', desc: 'AI ranks topics by relevance and audience fit', icon: '\uD83C\uDFAF' },
  { label: 'Article Generation', desc: 'Full 2,000+ word articles written by AI', icon: '\u270D\uFE0F' },
  { label: 'SEO Optimization', desc: '4-layer search optimization applied', icon: '\uD83D\uDD0D' },
  { label: 'Quality Review', desc: 'Scoring and human approval via Telegram', icon: '\u2705' },
  { label: 'Publish to Site', desc: 'GitHub auto-deploy to Vercel', icon: '\uD83D\uDE80' },
];

export default function ScoutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1E3A8A] to-[#0F172A] text-white">
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Scout</h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-6">The AI engine that powers RegularFolkFinance</p>
          <p className="text-base md:text-lg text-blue-100 max-w-3xl leading-relaxed mb-10">
            Scout is a modular AI content system built from scratch. It ingests 100+ financial news feeds,
            analyzes topics for relevance, writes full articles, optimizes for search, and publishes &mdash;
            all for about 13 cents per article.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { metric: '$0.11', label: 'cost/article' },
              { metric: '100+', label: 'RSS feeds' },
              { metric: '7', label: 'AI Brains' },
              { metric: '80', label: 'days to build' },
            ].map((item) => (
              <div key={item.label} className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                <p className="text-2xl md:text-3xl font-bold text-[#06B6D4]">{item.metric}</p>
                <p className="text-sm text-blue-200 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-[#F9FAFB]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-3 text-center">How It Works</h2>
          <p className="text-[#6B7280] text-center mb-12 max-w-2xl mx-auto">
            From raw news feeds to published articles, Scout automates the entire content pipeline.
          </p>
          <div className="grid md:grid-cols-6 gap-4">
            {pipelineSteps.map((step, i) => (
              <div key={step.label} className="relative text-center">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 h-full">
                  <span className="text-2xl block mb-2">{step.icon}</span>
                  <h3 className="text-sm font-semibold text-[#1F2937] mb-1">{step.label}</h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed">{step.desc}</p>
                </div>
                {i < pipelineSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-[#06B6D4] text-lg font-bold z-10">
                    &rarr;
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Seven Brains */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-3 text-center">The Seven Brains</h2>
          <p className="text-[#6B7280] text-center mb-12 max-w-2xl mx-auto">
            Each brain is a specialized AI module designed for a specific stage of the content pipeline.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brains.map((brain, i) => (
              <div key={brain.name} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#3B82F6] bg-blue-50 rounded-full w-6 h-6 flex items-center justify-center">{i + 1}</span>
                    <h3 className="text-base font-semibold text-[#1F2937]">{brain.name}</h3>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    brain.status === 'operational'
                      ? 'bg-green-50 text-green-700'
                      : 'bg-yellow-50 text-yellow-700'
                  }`}>
                    {brain.status === 'operational' ? 'Operational' : 'In Development'}
                  </span>
                </div>
                <p className="text-sm text-[#6B7280] leading-relaxed">{brain.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 md:py-20 bg-[#F9FAFB]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-10 text-center">The Tech Stack</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              {techStack.map((item, i) => (
                <div key={item.label} className={`flex items-start px-6 py-4 ${i < techStack.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <span className="text-sm font-semibold text-[#1E3A8A] w-36 flex-shrink-0">{item.label}</span>
                  <span className="text-sm text-[#6B7280]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Autonomy Progression */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-3 text-center">The Autonomy Progression</h2>
          <p className="text-[#6B7280] text-center mb-12 max-w-2xl mx-auto">
            A deliberate path from human-in-the-loop to autonomous operation, governed by data and trust.
          </p>
          <div className="max-w-3xl mx-auto space-y-4">
            {phases.map((p) => (
              <div key={p.phase} className={`rounded-xl border p-5 ${p.active ? 'border-[#06B6D4] bg-[#F0FDFA]' : 'border-gray-200 bg-white'}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center ${
                      p.active ? 'bg-[#06B6D4] text-white' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {p.phase}
                    </span>
                    <span className="text-sm font-semibold text-[#1F2937]">{p.label}</span>
                    {p.active && <span className="text-xs bg-[#06B6D4] text-white px-2 py-0.5 rounded-full">Current</span>}
                  </div>
                  <span className="text-sm font-semibold text-[#6B7280]">~{p.pct}%</span>
                </div>
                <p className="text-sm text-[#6B7280] ml-10">{p.desc}</p>
                <div className="ml-10 mt-2 bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${p.active ? 'bg-[#06B6D4]' : 'bg-gray-300'}`}
                    style={{ width: `${p.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why I Built This */}
      <section className="py-16 md:py-20 bg-[#F9FAFB]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-8 text-center">Why I Built This</h2>
          <div className="space-y-6">
            <p className="text-[#4B5563] leading-relaxed">
              Personal finance content is dominated by SEO farms and affiliate mills. I wanted to build something
              different &mdash; a system that surfaces what real people are actually discussing about money, not
              what generates the most ad revenue.
            </p>
            <p className="text-[#4B5563] leading-relaxed">
              Building Scout taught me more about AI systems design, cost management, quality governance,
              and progressive autonomy than any course or certification could.
            </p>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-10 text-center">Lessons Learned</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {lessons.map((lesson) => (
              <div key={lesson.title} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-base font-semibold text-[#1E3A8A] mb-2">{lesson.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{lesson.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Next */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#1E3A8A] to-[#0F172A] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">What&apos;s Next</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            <div className="bg-white/10 backdrop-blur rounded-lg p-5">
              <p className="text-sm text-blue-100 leading-relaxed">Completing the remaining three Brains (Topic Ranker, Fact Checker, Quality Gate)</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-5">
              <p className="text-sm text-blue-100 leading-relaxed">Implementing the Preference Learner &mdash; an ML feedback loop that trains on approval/rejection patterns</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-5">
              <p className="text-sm text-blue-100 leading-relaxed">Expanding the semantic search layer for automatic internal linking</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-5">
              <p className="text-sm text-blue-100 leading-relaxed">Full autonomous operation with exception-only human review</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
