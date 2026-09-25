const ArrowIcon = ({ className = "" }: { className?: string }) => (
  <svg aria-hidden="true" className={className} viewBox="0 0 20 20" fill="none">
    <path
      d="M4 10h11m-4-4 4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SparkIcon = ({ className = "" }: { className?: string }) => (
  <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 3.5c.78 4.65 3.35 7.22 8 8-4.65.78-7.22 3.35-8 8-.78-4.65-3.35-7.22-8-8 4.65-.78 7.22-3.35 8-8Z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckIcon = ({ className = "" }: { className?: string }) => (
  <svg aria-hidden="true" className={className} viewBox="0 0 20 20" fill="none">
    <path
      d="m5.2 10.1 3.05 3.05 6.55-6.55"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const workflow = [
  {
    number: "01",
    title: "Describe",
    body: "Write the idea as it exists in your head. No template required.",
  },
  {
    number: "02",
    title: "Structure",
    body: "AI turns intent into five predictable planning artifacts.",
  },
  {
    number: "03",
    title: "Build",
    body: "Review, copy, export, and move into implementation with clarity.",
  },
];

const layers = [
  "Project Brief",
  "Requirements",
  "User Stories",
  "Acceptance Criteria",
  "Tasks",
];

export default function Home() {
  return (
    <main id="top" className="relative overflow-hidden">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="noise-layer" aria-hidden="true" />

      <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-5">
        <nav
          aria-label="Primary navigation"
          className="liquid-glass mx-auto flex min-h-14 max-w-5xl items-center justify-between rounded-full px-2.5 pl-3.5 sm:px-3 sm:pl-4"
        >
          <a
            href="#top"
            className="flex min-h-11 min-w-11 items-center gap-2.5 rounded-full px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6E5CFF]"
            aria-label="Briefly AI home"
          >
            <span className="grid size-7 place-items-center rounded-[9px] bg-[#F5F5F7] text-[11px] font-semibold tracking-tighter text-[#0B0D12]">
              B
            </span>
            <span className="text-xs font-semibold tracking-tight text-[#F5F5F7] sm:text-sm">
              Briefly AI
            </span>
          </a>

          <div className="hidden items-center md:flex">
            <a className="nav-link" href="#workflow">
              Workflow
            </a>
            <a className="nav-link" href="#outputs">
              Outputs
            </a>
            <a className="nav-link" href="#about">
              Why Briefly
            </a>
          </div>

          <a
            href="#workflow"
            className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-[#F5F5F7] px-4 text-xs font-semibold tracking-tight text-[#0B0D12] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6E5CFF]"
          >
            See the flow
            <ArrowIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </nav>
      </header>

      <section className="hero-section relative mx-auto flex min-h-[100svh] max-w-[1440px] items-center px-5 pb-14 pt-28 sm:px-8 sm:pb-20 lg:px-12 xl:px-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">
          <div className="relative z-10 max-w-3xl">
            <div className="hero-enter hero-enter-1 mb-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 text-[11px] font-medium tracking-tight text-white/62 backdrop-blur-xl backdrop-saturate-[180%]">
              <SparkIcon className="size-4 text-[#6E5CFF]" />
              AI Project Brief Generator
            </div>

            <h1 className="hero-enter hero-enter-2 text-balance text-[clamp(3.6rem,8.7vw,8.2rem)] font-semibold leading-[0.84] tracking-[-0.078em] text-[#F5F5F7]">
              Think messy.
              <span className="mt-2 block text-white/30">Build clearly.</span>
            </h1>

            <p className="hero-enter hero-enter-3 mt-7 max-w-[37rem] text-pretty text-base leading-7 text-white/52 sm:text-lg sm:leading-8">
              Turn a rough software idea into a structured project brief,
              requirements, user stories, acceptance criteria, and tasks —
              before the first line of code.
            </p>

            <div className="hero-enter hero-enter-4 mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#workflow"
                className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-[#6E5CFF] px-5 text-sm font-semibold tracking-tight text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(110,92,255,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                See how it works
                <ArrowIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#outputs"
                className="inline-flex min-h-11 items-center rounded-full px-5 text-sm font-medium tracking-tight text-white/52 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6E5CFF]"
              >
                Explore the output
              </a>
            </div>

            <div className="hero-enter hero-enter-5 mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-medium tracking-tight text-white/28">
              <span className="inline-flex items-center gap-1.5">
                <CheckIcon className="size-3.5 text-white/35" />
                No account required
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckIcon className="size-3.5 text-white/35" />
                Structured AI output
              </span>
              <span className="hidden items-center gap-1.5 sm:inline-flex">
                <CheckIcon className="size-3.5 text-white/35" />
                Built for software ideas
              </span>
            </div>
          </div>

          <div className="hero-enter hero-enter-4 product-stage relative mx-auto w-full max-w-[720px]">
            <div className="product-aura" aria-hidden="true" />
            <div className="product-window">
              <div className="product-toolbar">
                <div className="flex items-center gap-2.5">
                  <span className="status-dot" />
                  <span className="text-[11px] font-medium tracking-tight text-white/44">
                    New software plan
                  </span>
                </div>
                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/22">
                  Draft 01
                </span>
              </div>

              <div className="product-input">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-black/30">
                    Your idea
                  </p>
                  <p className="mt-2 max-w-[34rem] text-[15px] font-medium leading-5 tracking-[-0.025em] text-[#0B0D12] sm:text-lg sm:leading-6">
                    A lightweight booking app for independent barbershops that
                    reduces missed appointments.
                  </p>
                </div>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <span className="text-[10px] font-medium text-black/28">
                    14 words
                  </span>
                  <span className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0B0D12] px-4 text-[11px] font-semibold text-white">
                    <SparkIcon className="size-4 text-[#6E5CFF]" />
                    Structure with AI
                  </span>
                </div>
              </div>

              <div className="ai-rail" aria-hidden="true">
                <span className="ai-rail-light" />
              </div>

              <div className="product-output">
                <div className="product-brief">
                  <p className="product-label">01 · Project brief</p>
                  <h2 className="mt-4 max-w-md text-[1.35rem] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[1.7rem]">
                    Reduce no-shows without adding admin work.
                  </h2>
                  <p className="mt-4 hidden max-w-md text-sm leading-6 text-white/38 sm:block">
                    A mobile-first booking experience focused on scheduling
                    clarity, customer reminders, and less manual follow-up.
                  </p>
                  <div className="mt-7 hidden space-y-2.5 sm:block">
                    <div className="document-line w-full" />
                    <div className="document-line w-[82%]" />
                    <div className="document-line w-[64%]" />
                  </div>
                </div>

                <div className="artifact-list">
                  {layers.slice(1).map((layer, index) => (
                    <div className="artifact-row" key={layer}>
                      <span className="artifact-number">
                        0{index + 2}
                      </span>
                      <span className="min-w-0 flex-1 truncate text-[11px] font-medium tracking-tight text-white/52 sm:text-xs">
                        {layer}
                      </span>
                      <span
                        className={index === 3 ? "artifact-state is-accent" : "artifact-state"}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="product-footer">
                <span className="text-[10px] font-medium text-white/28">
                  5 planning artifacts
                </span>
                <div className="product-progress" aria-hidden="true">
                  <span />
                </div>
                <span className="text-[10px] font-semibold text-[#6E5CFF]">
                  Ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="marketing-moment relative flex min-h-[72svh] items-center overflow-hidden bg-[#F5F5F7] text-[#0B0D12]"
      >
        <div className="marketing-grid" aria-hidden="true" />
        <div className="marketing-aura" aria-hidden="true" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-24 xl:px-16">
          <p className="reveal-on-scroll text-[10px] font-semibold uppercase tracking-[0.2em] text-black/30 sm:text-xs">
            From ambiguity to alignment
          </p>

          <div className="mt-7 max-w-6xl">
            <p className="reveal-on-scroll text-[clamp(3.5rem,9.5vw,9rem)] font-semibold leading-[0.84] tracking-[-0.078em]">
              One idea.
              <span className="block text-black/16">Five layers</span>
              <span className="block">of clarity.</span>
            </p>
          </div>

          <div className="layer-rail mt-14 sm:mt-20">
            {layers.map((item, index) => (
              <div key={item} className="layer-item reveal-on-scroll">
                <span className="layer-index">0{index + 1}</span>
                <span className="layer-name">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="workflow"
        className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-24 xl:px-16"
      >
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <p className="section-kicker">How it works</p>
            <h2 className="section-title mt-4 max-w-3xl">
              Less prompting.
              <span className="block text-white/26">More structure.</span>
            </h2>
          </div>

          <p className="max-w-xl text-[13px] leading-6 text-white/42 sm:text-base sm:leading-7 lg:justify-self-end">
            Briefly AI behaves like a focused planning tool, not a blank
            chatbot. Give it intent; get back a predictable software plan.
          </p>
        </div>

        <div className="editorial-steps mt-12 sm:mt-16 lg:mt-18">
          {workflow.map((step) => (
            <article key={step.number} className="editorial-step">
              <span className="step-number">{step.number}</span>
              <div className="mt-10 sm:mt-16 lg:mt-20">
                <h3 className="text-base font-semibold tracking-tight text-white sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-sm text-xs leading-5 text-white/38 sm:text-sm sm:leading-6">
                  {step.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="outputs" className="relative">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-24 xl:px-16">
          <div className="mx-auto max-w-5xl text-center">
            <p className="section-kicker">Structured output</p>
            <h2 className="section-title mt-4">
              Useful artifacts,
              <span className="block text-white/26">not another AI essay.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[13px] leading-6 text-white/42 sm:text-base sm:leading-7">
              One focused workflow gives product thinking a shape your team can
              review, refine, and actually build from.
            </p>
          </div>

          <div className="output-showcase mt-10 sm:mt-14 lg:mt-16">
            <article className="output-anchor">
              <div className="output-anchor-copy">
                <span className="output-eyebrow">Define</span>
                <h3 className="mt-5 max-w-xl text-[1.55rem] font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
                  Know what you are building.
                </h3>
                <p className="mt-5 max-w-lg text-xs leading-6 text-white/36 sm:text-sm sm:leading-7">
                  Move from a vague concept to a concise project brief and
                  functional requirements.
                </p>
                <div className="mt-7 hidden flex-wrap gap-2 sm:flex">
                  <span className="quiet-pill">Project Brief</span>
                  <span className="quiet-pill">Functional Requirements</span>
                </div>
              </div>

              <div className="document-map" aria-hidden="true">
                <div className="document-map-head">
                  <span>Project definition</span>
                  <span>01 / 05</span>
                </div>
                <div className="document-map-body">
                  <span className="doc-row doc-row-strong" />
                  <span className="doc-row w-[88%]" />
                  <span className="doc-row w-[72%]" />
                  <span className="doc-row w-[82%]" />
                  <span className="doc-row w-[56%]" />
                </div>
                <div className="document-map-foot">
                  <span className="size-1.5 rounded-full bg-[#6E5CFF]" />
                  Structured
                </div>
              </div>
            </article>

            <article className="output-support">
              <span className="output-eyebrow">Align</span>
              <h3 className="mt-4 text-base font-semibold leading-tight tracking-[-0.035em] text-white sm:text-2xl">
                Turn intent into behavior.
              </h3>
              <div className="user-story mt-8">
                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/26">
                  User story
                </span>
                <p className="mt-3 text-xs leading-5 text-white/48 sm:text-sm sm:leading-6">
                  As a customer, I want a clear available time slot so I can
                  book without calling the shop.
                </p>
              </div>
            </article>

            <article className="output-support">
              <span className="output-eyebrow">Execute</span>
              <h3 className="mt-4 text-base font-semibold leading-tight tracking-[-0.035em] text-white sm:text-2xl">
                Leave with the next steps.
              </h3>
              <div className="mt-8 flex items-end justify-between">
                <div>
                  <span className="block text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl">
                    12
                  </span>
                  <span className="mt-1 block text-[10px] font-medium text-white/28 sm:text-xs">
                    scoped tasks
                  </span>
                </div>
                <span className="quiet-pill hidden sm:inline-flex">
                  Markdown export
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-[1440px] px-5 pb-16 pt-0 sm:px-8 sm:pb-24 lg:px-12 lg:pb-24 xl:px-16">
        <div className="liquid-glass cta-panel relative overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-10 sm:py-24 lg:px-16 lg:py-28">
          <div className="cta-glow" aria-hidden="true" />

          <div className="relative mx-auto max-w-5xl">
            <SparkIcon className="mx-auto size-6 text-[#6E5CFF]" />
            <h2 className="mt-7 text-balance text-[clamp(3rem,7.4vw,6.8rem)] font-semibold leading-[0.88] tracking-[-0.072em] text-white">
              Start with an idea.
              <span className="block text-white/24">Leave with a plan.</span>
            </h2>
            <p className="mx-auto mt-7 max-w-lg text-sm leading-7 text-white/36 sm:text-base">
              A focused path from early product thinking to something ready for
              implementation.
            </p>
            <a
              href="#top"
              className="group mt-9 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#F5F5F7] px-5 text-sm font-semibold tracking-tight text-[#0B0D12] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6E5CFF]"
            >
              Back to the idea
              <ArrowIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-8 sm:flex-row sm:items-end sm:justify-between sm:px-8 lg:px-12 xl:px-16">
          <div>
            <p className="text-sm font-semibold tracking-tight text-white/72">
              Briefly AI
            </p>
            <p className="mt-1 text-xs text-white/24">
              Turn an idea into a structured software plan.
            </p>
          </div>

          <p className="max-w-xl text-[10px] leading-5 text-white/18 sm:text-right">
            AI Project Brief Generator · Software Requirements Generator · AI
            User Story Generator · Project Planning AI
          </p>
        </div>
      </footer>
    </main>
  );
}
