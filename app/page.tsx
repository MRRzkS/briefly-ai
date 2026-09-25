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

const CheckIcon = () => (
  <svg aria-hidden="true" className="size-4" viewBox="0 0 20 20" fill="none">
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
    body: "Start with the messy version. One sentence is enough.",
  },
  {
    number: "02",
    title: "Structure",
    body: "AI turns intent into clear, typed planning artifacts.",
  },
  {
    number: "03",
    title: "Build",
    body: "Take a plan that is easier to estimate, discuss, and ship.",
  },
];

const outputGroups = [
  {
    eyebrow: "Define",
    title: "Know what you are building.",
    copy: "Move from a vague concept to a concise project brief and functional requirements.",
    items: ["Project Brief", "Functional Requirements"],
    className: "lg:col-span-7",
  },
  {
    eyebrow: "Align",
    title: "Turn intent into behavior.",
    copy: "Translate product goals into user stories and acceptance criteria people can actually review.",
    items: ["User Stories", "Acceptance Criteria"],
    className: "lg:col-span-5 lg:translate-y-10",
  },
  {
    eyebrow: "Execute",
    title: "Leave with the next steps.",
    copy: "Break the approved direction into implementation-ready tasks instead of another wall of AI text.",
    items: ["Task Breakdown", "Markdown Export"],
    className: "lg:col-span-8 lg:col-start-3 lg:mt-10",
  },
];

export default function Home() {
  return (
    <main id="top" className="relative overflow-hidden">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="noise-layer" aria-hidden="true" />

      <header className="fixed inset-x-0 top-4 z-50 px-4">
        <nav
          aria-label="Primary navigation"
          className="liquid-glass mx-auto flex min-h-14 max-w-6xl items-center justify-between rounded-full px-3 pl-4 sm:px-4 sm:pl-5"
        >
          <a
            href="#top"
            className="flex min-h-11 min-w-11 items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6E5CFF]"
            aria-label="Briefly AI home"
          >
            <span className="grid size-8 place-items-center rounded-[10px] bg-[#F5F5F7] text-sm font-semibold tracking-tighter text-[#0B0D12]">
              B
            </span>
            <span className="text-sm font-semibold tracking-tight text-[#F5F5F7]">
              Briefly AI
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
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
            className="group flex min-h-11 items-center gap-2 rounded-full bg-[#F5F5F7] px-4 text-xs font-semibold tracking-tight text-[#0B0D12] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6E5CFF] sm:text-sm"
          >
            See the flow
            <ArrowIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </nav>
      </header>

      <section className="relative mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 pb-16 pt-28 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <div className="relative z-10 max-w-3xl">
            <div className="hero-enter hero-enter-1 mb-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 text-xs font-medium tracking-tight text-white/70 backdrop-blur-xl backdrop-saturate-[180%]">
              <SparkIcon className="size-4 text-[#6E5CFF]" />
              AI Project Brief Generator
            </div>

            <h1 className="hero-enter hero-enter-2 text-balance text-[clamp(3.35rem,9vw,7.9rem)] font-semibold leading-[0.86] tracking-[-0.075em] text-[#F5F5F7]">
              Think messy.
              <span className="mt-2 block text-white/38">Build clearly.</span>
            </h1>

            <p className="hero-enter hero-enter-3 mt-7 max-w-xl text-pretty text-base leading-7 text-white/56 sm:text-lg sm:leading-8">
              Briefly AI turns a rough software idea into a structured project
              brief, requirements, user stories, acceptance criteria, and tasks
              — before the first line of code.
            </p>

            <div className="hero-enter hero-enter-4 mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#workflow"
                className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-[#6E5CFF] px-5 text-sm font-semibold tracking-tight text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_50px_rgba(110,92,255,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                See how it works
                <ArrowIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#outputs"
                className="inline-flex min-h-11 items-center rounded-full px-5 text-sm font-medium tracking-tight text-white/62 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6E5CFF]"
              >
                Explore the output
              </a>
            </div>

            <div className="hero-enter hero-enter-5 mt-9 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium tracking-tight text-white/38">
              <span>No account required</span>
              <span className="hidden sm:inline">•</span>
              <span>Structured AI output</span>
              <span className="hidden sm:inline">•</span>
              <span>Built for software ideas</span>
            </div>
          </div>

          <div className="hero-enter hero-enter-4 relative mx-auto w-full max-w-[690px]">
            <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
            <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
            <div className="hero-glow" aria-hidden="true" />

            <div className="relative rounded-[2rem] border border-white/[0.08] bg-[#101218] p-3 shadow-[0_35px_100px_rgba(0,0,0,0.5)] sm:p-4">
              <div className="flex items-center justify-between px-2 py-2 sm:px-3">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#6E5CFF]" />
                  <span className="text-xs font-medium tracking-tight text-white/48">
                    New software plan
                  </span>
                </div>
                <span className="rounded-full border border-white/[0.08] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white/30">
                  Preview
                </span>
              </div>

              <div className="mt-2 rounded-[1.45rem] bg-[#F5F5F7] p-4 text-[#0B0D12] sm:p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black/35">
                  Your idea
                </p>
                <p className="mt-2 max-w-[33rem] text-base font-medium leading-6 tracking-tight sm:text-lg">
                  A lightweight booking app for independent barbershops that
                  reduces missed appointments.
                </p>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <span className="text-xs font-medium text-black/35">
                    14 words
                  </span>
                  <span className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0B0D12] px-4 text-xs font-semibold text-white">
                    <SparkIcon className="size-4 text-[#6E5CFF]" />
                    Structure with AI
                  </span>
                </div>
              </div>

              <div className="mt-3 flex min-h-20 items-center justify-between rounded-[1.2rem] border border-white/[0.06] bg-[#151820] px-4 sm:hidden">
                <div>
                  <span className="preview-kicker">Structured output</span>
                  <p className="mt-1 text-sm font-semibold tracking-tight text-white/85">
                    5 planning artifacts ready
                  </p>
                </div>
                <div className="grid size-10 place-items-center rounded-full bg-[#6E5CFF]/15 text-[#6E5CFF]">
                  <SparkIcon className="size-5" />
                </div>
              </div>

              <div className="mt-3 hidden gap-2 sm:grid sm:grid-cols-2">
                <div className="preview-card preview-card-main sm:row-span-2">
                  <span className="preview-kicker">01 · Project Brief</span>
                  <p className="mt-4 text-lg font-semibold tracking-tight text-white/90">
                    Reduce no-shows without adding admin work.
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/42">
                    A mobile-first booking experience for small barbershops,
                    focused on scheduling clarity and customer reminders.
                  </p>
                  <div className="mt-7 space-y-2">
                    <div className="skeleton-line w-full" />
                    <div className="skeleton-line w-4/5" />
                    <div className="skeleton-line w-3/5" />
                  </div>
                </div>

                <div className="preview-card preview-float-one">
                  <span className="preview-kicker">02 · Requirements</span>
                  <div className="mt-4 flex items-center gap-2 text-xs text-white/56">
                    <CheckIcon />
                    Booking availability
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-xs text-white/56">
                    <CheckIcon />
                    Reminder workflow
                  </div>
                </div>

                <div className="preview-card preview-float-two">
                  <span className="preview-kicker">03 · Ready to build</span>
                  <div className="mt-4 flex items-end justify-between">
                    <div>
                      <span className="block text-2xl font-semibold tracking-tighter text-white">
                        12
                      </span>
                      <span className="text-[11px] text-white/35">
                        scoped tasks
                      </span>
                    </div>
                    <span className="rounded-full bg-[#6E5CFF]/15 px-2.5 py-1 text-[10px] font-semibold text-[#9D91FF]">
                      Structured
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/[0.08] bg-black/[0.05] px-4 py-2 text-[11px] font-medium text-white/48 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-xl backdrop-saturate-[200%] sm:flex">
              <span className="size-1.5 animate-pulse rounded-full bg-[#6E5CFF]" />
              Brief → requirements → stories → criteria → tasks
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="marketing-moment relative flex min-h-[86svh] items-center overflow-hidden border-y border-white/[0.05] bg-[#F5F5F7] text-[#0B0D12]"
      >
        <div className="marketing-grid" aria-hidden="true" />
        <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
          <p className="reveal-on-scroll text-xs font-semibold uppercase tracking-[0.18em] text-black/36">
            From ambiguity to alignment
          </p>
          <div className="mt-8 max-w-6xl">
            <p className="reveal-on-scroll text-[clamp(3.2rem,9vw,8.4rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
              One idea.
              <span className="block text-black/22">Five layers</span>
              <span className="block">of clarity.</span>
            </p>
          </div>

          <div className="mt-12 flex max-w-4xl flex-wrap gap-2.5">
            {[
              "Project Brief",
              "Requirements",
              "User Stories",
              "Acceptance Criteria",
              "Tasks",
            ].map((item, index) => (
              <div
                key={item}
                className="reveal-on-scroll flex min-h-11 items-center gap-2 rounded-full border border-black/[0.08] px-4 text-xs font-semibold tracking-tight text-black/55"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <span className="text-[#6E5CFF]">0{index + 1}</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="marketing-orb" aria-hidden="true" />
      </section>

      <section
        id="workflow"
        className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40"
      >
        <div className="grid items-end gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-kicker">How it works</p>
            <h2 className="section-title mt-4 max-w-3xl">
              Less prompting.
              <span className="block text-white/34">More structure.</span>
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/44 sm:text-base lg:justify-self-end">
            Briefly AI is designed to behave like a planning tool, not a blank
            chatbot. Give it intent; get back a predictable software plan.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-2 sm:gap-4 lg:mt-20 lg:gap-6">
          {workflow.map((step) => (
            <article
              key={step.number}
              className="group min-h-[180px] rounded-[1.4rem] border border-white/[0.07] bg-[#101218] p-3.5 transition-transform duration-500 hover:-translate-y-1 sm:min-h-[220px] sm:rounded-[1.75rem] sm:p-6 lg:min-h-[290px] lg:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold tracking-[0.12em] text-[#6E5CFF] sm:text-xs">
                  {step.number}
                </span>
                <span className="hidden size-8 rounded-full border border-white/[0.08] transition-colors duration-300 group-hover:border-[#6E5CFF]/60 sm:block" />
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-28">
                <h3 className="text-sm font-semibold tracking-tight text-white sm:text-xl lg:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-[10px] leading-4 text-white/38 sm:text-sm sm:leading-6">
                  {step.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="outputs" className="relative border-y border-white/[0.05]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <p className="section-kicker">Structured output</p>
            <h2 className="section-title mt-4">
              Useful artifacts,
              <span className="block text-white/34">not another AI essay.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/42 sm:text-base">
              Use one focused workflow to move from an AI project brief to
              software requirements, user stories, product requirements, and a
              practical project plan.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-2 sm:mt-14 sm:gap-4 lg:mt-20 lg:grid-cols-12 lg:gap-6">
            {outputGroups.map((group) => (
              <article
                key={group.eyebrow}
                className={`relative min-h-[170px] overflow-hidden rounded-[1.35rem] border border-white/[0.07] bg-[#101218] p-3 sm:min-h-0 sm:rounded-[2rem] sm:p-8 lg:p-10 ${group.className}`}
              >
                <div
                  className="absolute -right-20 -top-20 size-52 rounded-full bg-[#6E5CFF]/10 blur-3xl"
                  aria-hidden="true"
                />
                <span className="relative text-[9px] font-semibold uppercase tracking-[0.12em] text-[#8E80FF] sm:text-xs sm:tracking-[0.16em]">
                  {group.eyebrow}
                </span>
                <h3 className="relative mt-4 max-w-xl text-[13px] font-semibold leading-[1.15] tracking-[-0.03em] text-white sm:mt-5 sm:text-3xl sm:tracking-[-0.04em]">
                  {group.title}
                </h3>
                <p className="relative mt-4 hidden max-w-xl text-sm leading-7 text-white/40 sm:block">
                  {group.copy}
                </p>
                <div className="relative mt-5 hidden flex-wrap gap-2 sm:mt-8 sm:flex">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/[0.07] px-3 py-2 text-xs font-medium text-white/52"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <span className="relative mt-6 block text-[9px] leading-4 text-white/30 sm:hidden">
                  {group.items[0]}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="liquid-glass relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="cta-glow" aria-hidden="true" />
          <div className="relative mx-auto max-w-4xl">
            <SparkIcon className="mx-auto size-7 text-[#6E5CFF]" />
            <h2 className="mt-6 text-balance text-[clamp(2.6rem,7vw,5.8rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-white">
              Start with an idea.
              <span className="block text-white/34">Leave with a plan.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/44 sm:text-base">
              One focused flow turns early product thinking into something you
              can review, refine, and build from.
            </p>
            <a
              href="#outputs"
              className="group mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#F5F5F7] px-5 text-sm font-semibold tracking-tight text-[#0B0D12] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6E5CFF]"
            >
              See what you get
              <ArrowIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.05]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <div>
            <p className="text-sm font-semibold tracking-tight text-white/80">
              Briefly AI
            </p>
            <p className="mt-1 text-xs text-white/30">
              Turn an idea into a structured software plan.
            </p>
          </div>
          <p className="max-w-xl text-xs leading-5 text-white/28 sm:text-right">
            AI Project Brief Generator · Software Requirements Generator · AI
            User Story Generator · Project Planning AI
          </p>
        </div>
      </footer>
    </main>
  );
}
