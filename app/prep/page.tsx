'use client';

import { useState, useRef } from 'react';

// Accordion component
function Accordion({ title, defaultOpen = false, children }: { title: string; defaultOpen?: boolean; children: React.ReactNode }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-gray-700 rounded-lg mb-4 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 bg-gray-800 hover:bg-gray-750 transition-colors text-left"
      >
        <span className="text-lg font-semibold text-white">{title}</span>
        <svg className={`w-5 h-5 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="px-6 py-5 bg-gray-900">{children}</div>}
    </div>
  );
}

// Q&A Accordion for questions they might ask
function QAItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-700 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3 text-left hover:text-[#06B6D4] transition-colors"
      >
        <span className="text-sm font-medium text-gray-200 pr-4">{question}</span>
        <svg className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <p className="pb-3 text-sm text-gray-400 leading-relaxed">{answer}</p>}
    </div>
  );
}

// Mindset card
function MindsetCard({ text }: { text: string }) {
  return (
    <div className="border-l-4 border-[#06B6D4] bg-gray-800 rounded-r-lg p-4 mb-3">
      <p className="text-gray-200 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

export default function PrepPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [shaking, setShaking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Elliebelly22') {
      setAuthenticated(true);
      setPassword('');
    } else {
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
      setPassword('');
    }
  };

  // Password gate
  if (!authenticated) {
    return (
      <>
        <style jsx global>{`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-8px); }
            50% { transform: translateX(8px); }
            75% { transform: translateX(-8px); }
          }
          .shake { animation: shake 0.4s ease-in-out; }
          /* Hide header/footer for this page */
          nav, footer { display: none !important; }
        `}</style>
        <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
          <form onSubmit={handleSubmit} className={`bg-gray-900 border border-gray-800 rounded-xl p-8 w-full max-w-sm shadow-2xl ${shaking ? 'shake' : ''}`}>
            <div className="text-center mb-6">
              <span className="text-3xl mb-3 block">{'\uD83D\uDD12'}</span>
              <h1 className="text-xl font-bold text-white">Private Notes</h1>
            </div>
            <input
              ref={inputRef}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#06B6D4] focus:ring-1 focus:ring-[#06B6D4] transition-colors"
              placeholder="Enter password"
              autoComplete="off"
              autoFocus
            />
            <button
              type="submit"
              className="w-full mt-4 py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold rounded-lg transition-colors"
            >
              Enter
            </button>
          </form>
        </div>
      </>
    );
  }

  // Authenticated content
  return (
    <>
      <style jsx global>{`
        /* Hide header/footer for this page */
        nav, footer { display: none !important; }
        @media print {
          .no-print { display: none !important; }
          .print-break { page-break-before: always; }
          body { background: white !important; color: black !important; }
        }
      `}</style>
      <div className="min-h-screen bg-gray-950 text-gray-200">
        {/* Header */}
        <div className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50 no-print">
          <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
            <h1 className="text-lg font-bold text-white">Meeting Prep</h1>
            <span className="text-xs text-gray-500">Feb 3-7, 2026</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">

          {/* SECTION 9: MINDSET REMINDERS - Always visible at top */}
          <div className="mb-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#06B6D4] mb-4">Mindset</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <MindsetCard text="You're not convincing them you're worthy. You're exploring fit together." />
              <MindsetCard text="Arun already wants you. Cesar and Hamid are the gate, not the wall." />
              <MindsetCard text="Your anxiety is loud. The math is good." />
              <MindsetCard text="You COMPLETE the team. You don't compete with PhDs." />
              <MindsetCard text="Be curious. Ask more than you pitch." />
              <MindsetCard text="Don't oversell technical depth. Be honest." />
              <MindsetCard text="The builder identity is your differentiator. Scout is PROOF." />
              <MindsetCard text="Evidence over feelings. Look at the receipts." />
            </div>
          </div>

          {/* SECTION 1: MEETING CONTEXT */}
          <Accordion title="Meeting Context" defaultOpen={true}>
            <h3 className="text-base font-semibold text-[#06B6D4] mb-4">Who I&apos;m Meeting</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-2 pr-4 text-gray-400 font-medium">Person</th>
                    <th className="text-left py-2 pr-4 text-gray-400 font-medium">Role</th>
                    <th className="text-left py-2 pr-4 text-gray-400 font-medium">Background</th>
                    <th className="text-left py-2 text-gray-400 font-medium">What I Need</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 pr-4 font-semibold text-white">Arun Narayan</td>
                    <td className="py-3 pr-4 text-gray-300">Chief AI Officer</td>
                    <td className="py-3 pr-4 text-gray-400">Committed to &ldquo;figure something out&rdquo; for me. Leaving for India Feb 5.</td>
                    <td className="py-3 text-gray-400">Already on my side &mdash; I need to not blow this.</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 pr-4 font-semibold text-white">Cesar Guerra Salcedo</td>
                    <td className="py-3 pr-4 text-gray-300">VP Data Science (NEW)</td>
                    <td className="py-3 pr-4 text-gray-400">PhD, based in Philly, in office weekly.</td>
                    <td className="py-3 text-gray-400">His buy-in. He needs to see me as an asset, not a threat.</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold text-white">Hamid Shojay</td>
                    <td className="py-3 pr-4 text-gray-300">Gen AI Lead</td>
                    <td className="py-3 pr-4 text-gray-400">PhD, ex-Meta, ex-AWS. Building the SIC agent.</td>
                    <td className="py-3 text-gray-400">His buy-in. Same dynamic &mdash; I complement, not compete.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-base font-semibold text-[#06B6D4] mb-3">What Arun Told Me (January 30, 2026)</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 mb-6">
              <li>Major data transformation underway (unifying definitions across systems &mdash; &ldquo;account&rdquo; means different things in Salesforce vs Mambu)</li>
              <li>Goal: data-connected agentic system by end of 2026</li>
              <li>MLOps platform project starts <span className="text-[#FB923C] font-semibold">END OF FEBRUARY</span> with external consultant</li>
              <li>Arun&apos;s exact words: <em className="text-white">&ldquo;If you are a builder, I love it. I know that we can figure something out. So just hang in there and we&apos;ll figure something out.&rdquo;</em></li>
            </ul>

            <h3 className="text-base font-semibold text-[#06B6D4] mb-3">What Milroy Revealed (Same Day, 5:24 PM)</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 mb-4">
              <li>Arun told Milroy he was <em className="text-white">&ldquo;ready to take Simon on as of Monday if you&apos;re willing&rdquo;</em></li>
              <li>This is <span className="text-[#FB923C] font-semibold">STRONGER</span> than what Arun said to me directly</li>
              <li>Milroy said: <em className="text-gray-400">&ldquo;don&apos;t tell him I said that then lol&rdquo;</em></li>
            </ul>

            <div className="bg-gray-800 border border-[#06B6D4] rounded-lg p-4 mt-4">
              <p className="text-sm font-semibold text-[#06B6D4]">The Gate:</p>
              <p className="text-sm text-gray-300 mt-1">Cesar and Hamid need to buy in. That&apos;s the next step.</p>
            </div>
          </Accordion>

          {/* SECTION 2: VALUE PROPOSITION */}
          <Accordion title="My Value Proposition">
            <h3 className="text-base font-semibold text-[#06B6D4] mb-3">The Elevator Version</h3>
            <blockquote className="border-l-4 border-[#3B82F6] pl-4 py-2 mb-6 bg-gray-800 rounded-r-lg">
              <p className="text-sm text-gray-200 italic">
                &ldquo;I&apos;m not a PhD. I&apos;m not going to build your algorithms. But I understand how AI systems work because I&apos;ve built one from scratch. I know the deployment challenges, the governance requirements, the cost management, and the quality control &mdash; because I&apos;ve lived it.&rdquo;
              </p>
            </blockquote>

            <h3 className="text-base font-semibold text-[#06B6D4] mb-3">The Bridge Role</h3>
            <p className="text-sm text-gray-300 mb-6">
              I sit between the PhDs who build the models and the business teams who need to adopt them. I translate. I implement. I catch edge cases. I make sure things actually work in the real world.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-red-400 mb-2">What I&apos;m NOT</h4>
                <p className="text-sm text-gray-400">Data scientist. Production Python engineer. Competing with Cesar or Hamid.</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-green-400 mb-2">What I AM</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>Builder (Scout proves it)</li>
                  <li>Business translator (15 years marketing, PO experience)</li>
                  <li>Edge case detector ($3M exposure, 289 duplicate JIRAs)</li>
                  <li>Fast learner (SOQL in a day, Salesforce domain in weeks)</li>
                  <li>AI governance (built Kapitus&apos;s first framework, C-suite approved)</li>
                </ul>
              </div>
            </div>

            <h3 className="text-base font-semibold text-[#06B6D4] mb-3">Multi-Model Validation Methodology</h3>
            <p className="text-sm text-gray-300">
              When building systems, I use multiple independent AI models at each stage. Draft with one, review with another, check edge cases with a third. Never the same system for consecutive steps. This prevents correlated blind spots &mdash; ensemble validation with independent systems.
            </p>
          </Accordion>

          {/* SECTION 3: TALKING POINTS */}
          <Accordion title="Talking Points Mapped to Priorities">
            <div className="space-y-5">
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-xs text-[#FB923C] font-semibold uppercase tracking-wider mb-1">Arun&apos;s Priority: Agentic Systems by End of 2026</p>
                <p className="text-sm text-gray-200">&ldquo;Scout IS an agentic system. It makes decisions, takes actions, and learns from feedback. I understand the governance challenges because I&apos;ve built one.&rdquo;</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-xs text-[#FB923C] font-semibold uppercase tracking-wider mb-1">Arun&apos;s Priority: MLOps Platform (Starting Feb)</p>
                <p className="text-sm text-gray-200">&ldquo;I&apos;ve lived the deployment challenges &mdash; API management, cost tracking, quality monitoring, model migration when APIs deprecate.&rdquo;</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-xs text-[#FB923C] font-semibold uppercase tracking-wider mb-1">Arun&apos;s Priority: Data Reconciliation</p>
                <p className="text-sm text-gray-200">&ldquo;Even in Scout, I deal with data normalization &mdash; different RSS feeds format data differently. At enterprise scale with Salesforce vs Mambu, same problem, bigger stakes.&rdquo;</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-xs text-[#06B6D4] font-semibold uppercase tracking-wider mb-1">For Cesar</p>
                <p className="text-sm text-gray-200">Ask about data transformation challenges. Show you understand &ldquo;account&rdquo; means different things across systems. Be curious about his approach.</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-xs text-[#06B6D4] font-semibold uppercase tracking-wider mb-1">For Hamid</p>
                <p className="text-sm text-gray-200">Ask about the SIC agent. &ldquo;What&apos;s the hardest problem you&apos;ve hit so far?&rdquo; People love talking about their work.</p>
              </div>
            </div>
          </Accordion>

          {/* SECTION 4: QUESTIONS TO ASK */}
          <Accordion title="Questions to Ask Them">
            <ol className="list-decimal list-inside space-y-3 text-sm text-gray-300">
              <li>&ldquo;What are the biggest challenges with the MLOps platform?&rdquo;</li>
              <li>&ldquo;Where do you see gaps between what AI can do and what gets adopted?&rdquo;</li>
              <li>&ldquo;What would be most helpful to you in the next 6 months?&rdquo;</li>
              <li>&ldquo;How do you think about the data reconciliation challenge Arun mentioned?&rdquo;</li>
              <li>&ldquo;What&apos;s the hardest problem building the SIC agent?&rdquo; <span className="text-gray-500">(for Hamid)</span></li>
              <li>&ldquo;What would you want from someone in a bridge role between AI and business teams?&rdquo;</li>
            </ol>
          </Accordion>

          {/* SECTION 5: QUESTIONS THEY MIGHT ASK */}
          <Accordion title="Questions They Might Ask">
            <div className="space-y-1">
              <QAItem
                question="What model are you using?"
                answer="Claude Haiku 4.5 for metadata, Sonnet 4.5 for writing. Different models for different cost-quality tradeoffs."
              />
              <QAItem
                question="Why n8n and not Python?"
                answer="Visual orchestration, rapid iteration. I'm not a production Python engineer — I pick the right tool. Architecture is portable."
              />
              <QAItem
                question="How do you handle hallucinations?"
                answer="Layered defense: ClaimBuster, source quality filtering, Quality Gate scoring. Multiple independent checks."
              />
              <QAItem
                question="Is all of this actually working?"
                answer="V1 is live and publishing. Four v2 brains built and tested. Three more designed with schemas and prompts — engineering work, not research. [Show the site]"
              />
              <QAItem
                question="Can you build something like this for Kapitus?"
                answer="That's exactly what I want to do. Principles transfer — modular agents, quality gates, progressive autonomy, cost tracking."
              />
              <QAItem
                question="What would you build first for us?"
                answer="Start with your highest-value manual process, build the simplest agent that reduces human touchpoints by 50%. Prove value fast, iterate."
              />
              <QAItem
                question="What's the hardest problem you solved?"
                answer="Model deprecation mid-build. Claude 3.5 retired with five workflows depending on it. Forced migration-resilient architecture."
              />
              <QAItem
                question="What failed?"
                answer="Custom MDX components broke rendering. Simpler approach was more reliable. Simplicity beats cleverness in production."
              />
              <QAItem
                question="How technical are you really?"
                answer="Honest: I'm not writing algorithms from scratch. I understand the concepts, read code, know what tools do. My strength is knowing what to build, why, and how to make it work. I use AI tools with multi-model validation to prevent blind spots."
              />
            </div>
          </Accordion>

          {/* SECTION 6: DEMO STRATEGY */}
          <Accordion title="Demo Strategy">
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-green-400 mb-3">Option A: Live Demo (5 min) &mdash; BEST if tech works</h4>
                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-300">
                  <li>Open Telegram &rarr; <code className="text-[#06B6D4]">/scout</code></li>
                  <li>Show RSS ingestion</li>
                  <li>Topic briefing arrives</li>
                  <li>Select topic</li>
                  <li>Show n8n workflow executing</li>
                  <li>Article for approval</li>
                  <li>Approve &rarr; GitHub &rarr; live</li>
                </ol>
                <div className="mt-3 bg-yellow-900/30 border border-yellow-700 rounded p-2">
                  <p className="text-xs text-yellow-400">PRE-FLIGHT: Test /scout BEFORE the meeting. Docker running, ngrok active, API key works.</p>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-blue-400 mb-3">Option B: Architecture Walkthrough (5 min) &mdash; SAFER</h4>
                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-300">
                  <li>n8n dashboard walkthrough</li>
                  <li>Modular brain structure</li>
                  <li>Cost logging in Sheets</li>
                  <li>Supabase dashboard</li>
                  <li>V2 architecture explanation</li>
                </ol>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-[#FB923C] mb-3">Option C: Results Only (2 min) &mdash; FASTEST</h4>
                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-300">
                  <li>Open regularfolkfinance.com</li>
                  <li>Show published articles</li>
                  <li>Cost metrics</li>
                  <li>&ldquo;This is what I build in my spare time.&rdquo;</li>
                </ol>
              </div>

              <div className="bg-gray-800 border border-gray-600 rounded-lg p-3">
                <p className="text-sm text-gray-300"><strong className="text-white">Read the room.</strong> Engaged and curious &rarr; A. Time tight &rarr; C. Technical and curious &rarr; B.</p>
              </div>
            </div>
          </Accordion>

          {/* SECTION 7: SALARY & ROLE */}
          <Accordion title="Salary & Role">
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Target Title</p>
                  <p className="text-sm text-white font-semibold">AI Solutions Analyst</p>
                  <p className="text-xs text-gray-500 mt-1">Not Architect &mdash; too senior with PhDs on team</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Target Salary</p>
                  <p className="text-sm text-white font-semibold">$165-175K</p>
                  <p className="text-xs text-gray-500 mt-1">Stretch $180K | Floor: don&apos;t go flat from $152K</p>
                </div>
              </div>

              <div className="bg-red-900/20 border border-red-800 rounded-lg p-4">
                <p className="text-sm text-red-400 font-semibold">When to Discuss:</p>
                <p className="text-sm text-gray-300 mt-1">ONLY when Arun proposes an actual role. NOT on calls with Cesar/Hamid.</p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-sm text-gray-300 mb-1"><strong className="text-white">How to Frame:</strong></p>
                <p className="text-sm text-gray-300 italic">&ldquo;A meaningful shift from marketing into AI implementation&rdquo; &mdash; then stop talking.</p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Progression</p>
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="text-white font-medium">AI Solutions Analyst</span>
                  <span className="text-gray-600">&rarr;</span>
                  <span className="text-gray-300">AI Solutions Architect <span className="text-gray-600 text-xs">(12-18mo)</span></span>
                  <span className="text-gray-600">&rarr;</span>
                  <span className="text-gray-300">Director of AI Implementation <span className="text-gray-600 text-xs">(2027-2028, external, $180-250K)</span></span>
                </div>
              </div>
            </div>
          </Accordion>

          {/* SECTION 8: LEAVE-BEHIND LINE */}
          <Accordion title="The Leave-Behind Line">
            <div className="bg-gray-800 border-2 border-[#3B82F6] rounded-lg p-6 text-center">
              <p className="text-lg text-white font-semibold leading-relaxed">
                &ldquo;This is what I build in my spare time, before work and after putting the kids to bed. Imagine what I can do full-time with enterprise resources and a team.&rdquo;
              </p>
            </div>
            <p className="text-xs text-gray-600 text-center mt-3">Memorize this.</p>
          </Accordion>

        </div>
      </div>
    </>
  );
}
