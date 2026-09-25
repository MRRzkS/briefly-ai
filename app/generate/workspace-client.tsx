"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import type { ArtifactKey, BriefPlan } from "@/lib/brief-schema";

type MobileView = "compose" | "output";

type HistoryEntry = {
  id: string;
  idea: string;
  plan: BriefPlan;
  createdAt: string;
};

const HISTORY_KEY = "briefly-ai-history-v1";
const DRAFT_KEY = "briefly-ai-draft-v1";

const artifacts: Array<{
  key: ArtifactKey;
  number: string;
  label: string;
  shortLabel: string;
}> = [
  { key: "projectBrief", number: "01", label: "Project Brief", shortLabel: "Brief" },
  { key: "functionalRequirements", number: "02", label: "Requirements", shortLabel: "Requirements" },
  { key: "userStories", number: "03", label: "User Stories", shortLabel: "Stories" },
  { key: "acceptanceCriteria", number: "04", label: "Acceptance Criteria", shortLabel: "Criteria" },
  { key: "tasks", number: "05", label: "Task Breakdown", shortLabel: "Tasks" },
];

const sampleIdea =
  "A lightweight booking app for independent barbershops that reduces missed appointments.";

const samplePlan: BriefPlan = {
  projectBrief:
    "A mobile-first booking product for independent barbershops that reduces missed appointments by making available time slots obvious, keeping booking lightweight, and giving customers timely reminders. The MVP focuses on appointment discovery, booking confirmation, reminders, and simple schedule management without adding unnecessary operational complexity.",
  functionalRequirements: [
    "Customers can view available appointment slots for a selected barber or service.",
    "Customers can reserve an available slot and receive a booking confirmation.",
    "The system prevents two customers from booking the same slot.",
    "Customers receive a reminder before an upcoming appointment.",
    "Barbers can view, confirm, reschedule, or cancel upcoming bookings.",
    "Unavailable or blocked time is excluded from customer-facing availability.",
  ],
  userStories: [
    {
      role: "customer",
      goal: "see available appointment times before choosing a booking",
      benefit: "I can book without calling the shop",
    },
    {
      role: "customer",
      goal: "receive a clear reminder before my appointment",
      benefit: "I am less likely to forget or miss it",
    },
    {
      role: "barber",
      goal: "see my upcoming bookings in one place",
      benefit: "I can prepare my schedule and reduce conflicts",
    },
    {
      role: "barber",
      goal: "block unavailable time",
      benefit: "customers only see slots I can actually serve",
    },
  ],
  acceptanceCriteria: [
    "A booked time slot is no longer offered as available to other customers.",
    "A successful booking displays the selected date, time, barber or service, and confirmation state.",
    "A customer reminder is scheduled only for active future bookings.",
    "Cancelled bookings stop appearing as active appointments.",
    "Blocked barber time never appears in the customer availability list.",
    "Rescheduling releases the previous slot and reserves the new slot atomically.",
  ],
  tasks: [
    {
      title: "Define booking domain model",
      description:
        "Create the core types and validation rules for services, availability, appointments, and booking states.",
    },
    {
      title: "Build availability flow",
      description:
        "Implement slot calculation and the customer-facing availability selection experience.",
    },
    {
      title: "Implement booking creation",
      description:
        "Create the booking submission flow with collision prevention and confirmation handling.",
    },
    {
      title: "Create barber schedule view",
      description:
        "Build the lightweight workspace for viewing, blocking, rescheduling, and cancelling appointments.",
    },
    {
      title: "Add reminder workflow",
      description:
        "Trigger reminders for active upcoming bookings and prevent reminders after cancellation.",
    },
    {
      title: "Add validation and edge states",
      description:
        "Cover invalid slots, stale availability, failed booking attempts, and empty schedule states.",
    },
    {
      title: "Responsive and accessibility QA",
      description:
        "Verify touch targets, keyboard flow, focus states, semantic labels, and mobile layout behavior.",
    },
    {
      title: "Production readiness pass",
      description:
        "Run type checking, linting, build validation, error-state review, and performance checks.",
    },
  ],
};

function SparkIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3.5c.78 4.65 3.35 7.22 8 8-4.65.78-7.22 3.35-8 8-.78-4.65-3.35-7.22-8-8 4.65-.78 7.22-3.35 8-8Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg aria-hidden="true" className="size-4" viewBox="0 0 20 20" fill="none">
      <path
        d="M15 10H4m4-4-4 4 4 4"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg aria-hidden="true" className="size-4" viewBox="0 0 20 20" fill="none">
      <rect
        x="6.5"
        y="6.5"
        width="9"
        height="9"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M13 6.5V5a1.5 1.5 0 0 0-1.5-1.5H5A1.5 1.5 0 0 0 3.5 5v6.5A1.5 1.5 0 0 0 5 13h1.5"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg aria-hidden="true" className="size-4" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 3.5v8m-3-3 3 3 3-3M4 14.5v1.2c0 .44.36.8.8.8h10.4c.44 0 .8-.36.8-.8v-1.2"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RefreshIcon({ spinning = false }: { spinning?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={"size-4 " + (spinning ? "animate-spin" : "")}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M15.3 6.2A6 6 0 1 0 16 11M15.3 6.2V2.8m0 3.4h-3.4"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DeleteIcon() {
  return (
    <svg aria-hidden="true" className="size-4" viewBox="0 0 20 20" fill="none">
      <path
        d="M6.5 6.5v8m3.5-8v8m3.5-8v8M4 4.5h12M7 4.5V3.2h6v1.3M5 4.5l.6 12h8.8l.6-12"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function planToMarkdown(idea: string, plan: BriefPlan) {
  const stories = plan.userStories
    .map(
      (story) =>
        "- **As a " +
        story.role +
        "**, I want " +
        story.goal +
        ", so that " +
        story.benefit +
        ".",
    )
    .join("\n");

  const tasks = plan.tasks
    .map(
      (task, index) =>
        String(index + 1) +
        ". **" +
        task.title +
        "** — " +
        task.description,
    )
    .join("\n");

  return [
    "# Briefly AI Software Plan",
    "",
    "## Idea",
    idea,
    "",
    "## Project Brief",
    plan.projectBrief,
    "",
    "## Functional Requirements",
    plan.functionalRequirements.map((item) => "- " + item).join("\n"),
    "",
    "## User Stories",
    stories,
    "",
    "## Acceptance Criteria",
    plan.acceptanceCriteria.map((item) => "- " + item).join("\n"),
    "",
    "## Task Breakdown",
    tasks,
    "",
  ].join("\n");
}

function artifactToText(key: ArtifactKey, plan: BriefPlan) {
  if (key === "projectBrief") {
    return plan.projectBrief;
  }

  if (key === "functionalRequirements") {
    return plan.functionalRequirements.map((item) => "- " + item).join("\n");
  }

  if (key === "userStories") {
    return plan.userStories
      .map(
        (story) =>
          "As a " +
          story.role +
          ", I want " +
          story.goal +
          ", so that " +
          story.benefit +
          ".",
      )
      .join("\n");
  }

  if (key === "acceptanceCriteria") {
    return plan.acceptanceCriteria.map((item) => "- " + item).join("\n");
  }

  return plan.tasks
    .map(
      (task, index) =>
        String(index + 1) + ". " + task.title + " — " + task.description,
    )
    .join("\n");
}

function ArtifactContent({
  active,
  plan,
}: {
  active: ArtifactKey;
  plan: BriefPlan;
}) {
  if (active === "projectBrief") {
    return (
      <div className="workspace-prose">
        <p>{plan.projectBrief}</p>
      </div>
    );
  }

  if (active === "functionalRequirements") {
    return (
      <ol className="workspace-list">
        {plan.functionalRequirements.map((item, index) => (
          <li key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{item}</p>
          </li>
        ))}
      </ol>
    );
  }

  if (active === "userStories") {
    return (
      <div className="story-stack">
        {plan.userStories.map((story, index) => (
          <article
            key={story.role + "-" + story.goal}
            className="story-row"
          >
            <span className="story-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p>
              <span>As a {story.role},</span> I want {story.goal},{" "}
              <span>so that {story.benefit}.</span>
            </p>
          </article>
        ))}
      </div>
    );
  }

  if (active === "acceptanceCriteria") {
    return (
      <ol className="workspace-list criteria-list">
        {plan.acceptanceCriteria.map((item, index) => (
          <li key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{item}</p>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <div className="task-stack">
      {plan.tasks.map((task, index) => (
        <article key={task.title + "-" + String(index)} className="task-row">
          <span className="task-number">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function WorkspaceClient() {
  const [idea, setIdea] = useState("");
  const [plan, setPlan] = useState<BriefPlan | null>(null);
  const [activeArtifact, setActiveArtifact] =
    useState<ArtifactKey>("projectBrief");
  const [mobileView, setMobileView] = useState<MobileView>("compose");
  const [loading, setLoading] = useState<ArtifactKey | "all" | null>(null);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const draft = window.localStorage.getItem(DRAFT_KEY);
      const stored = window.localStorage.getItem(HISTORY_KEY);

      if (draft) {
        setIdea(draft);
      }

      if (stored) {
        const parsed = JSON.parse(stored) as HistoryEntry[];
        if (Array.isArray(parsed)) {
          setHistory(parsed.slice(0, 8));
        }
      }
    } catch {
      // Local storage is optional; the workspace remains usable without it.
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(DRAFT_KEY, idea);
    } catch {
      // Local storage can be unavailable in strict privacy modes.
    }
  }, [idea]);

  const activeMeta = useMemo(
    () => artifacts.find((artifact) => artifact.key === activeArtifact)!,
    [activeArtifact],
  );

  const isLoading = loading !== null;

  function persistHistory(nextIdea: string, nextPlan: BriefPlan) {
    const entry: HistoryEntry = {
      id: crypto.randomUUID(),
      idea: nextIdea,
      plan: nextPlan,
      createdAt: new Date().toISOString(),
    };

    setHistory((current) => {
      const next = [entry, ...current].slice(0, 8);

      try {
        window.localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
      } catch {
        // History is a progressive enhancement.
      }

      return next;
    });
  }

  async function requestPlan(section?: ArtifactKey) {
    if (idea.trim().length < 12) {
      setError("Describe the software idea in at least 12 characters.");
      return;
    }

    if (section && !plan) {
      return;
    }

    setError(null);
    setCopied(false);
    setLoading(section ?? "all");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          idea: idea.trim(),
          section,
          currentPlan: section ? plan : undefined,
        }),
      });

      const payload = (await response.json()) as {
        plan?: BriefPlan;
        error?: string;
      };

      if (!response.ok || !payload.plan) {
        throw new Error(payload.error ?? "Unable to generate the software plan.");
      }

      setPlan(payload.plan);
      persistHistory(idea.trim(), payload.plan);
      setActiveArtifact(section ?? "projectBrief");
      setMobileView("output");
    } catch (caught) {
      setError(
        caught instanceof Error
          ? caught.message
          : "Unable to generate the software plan.",
      );
    } finally {
      setLoading(null);
    }
  }

  function loadExample() {
    setIdea(sampleIdea);
    setPlan(samplePlan);
    setActiveArtifact("projectBrief");
    setMobileView("output");
    setError(null);
  }

  function restoreEntry(entry: HistoryEntry) {
    setIdea(entry.idea);
    setPlan(entry.plan);
    setActiveArtifact("projectBrief");
    setMobileView("output");
    setError(null);
  }

  function clearHistory() {
    setHistory([]);
    try {
      window.localStorage.removeItem(HISTORY_KEY);
    } catch {
      // Ignore local storage failures.
    }
  }

  async function copyArtifact() {
    if (!plan) {
      return;
    }

    await navigator.clipboard.writeText(artifactToText(activeArtifact, plan));
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  function exportMarkdown() {
    if (!plan) {
      return;
    }

    const blob = new Blob([planToMarkdown(idea, plan)], {
      type: "text/markdown;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "briefly-ai-software-plan.md";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <main className="workspace-shell">
      <div className="workspace-aura" aria-hidden="true" />
      <div className="noise-layer" aria-hidden="true" />

      <header className="workspace-header liquid-glass">
        <Link href="/" className="workspace-brand" aria-label="Back to Briefly AI">
          <span className="workspace-brandmark">B</span>
          <span>Briefly AI</span>
        </Link>

        <div className="workspace-header-center">
          <span className="status-dot" />
          <span>Generator</span>
        </div>

        <Link href="/" className="workspace-home-link">
          <ArrowLeftIcon />
          <span className="hidden sm:inline">Landing</span>
        </Link>
      </header>

      <div className="workspace-mobile-switch md:hidden">
        {(["compose", "output"] as MobileView[]).map((view) => (
          <button
            key={view}
            type="button"
            className={
              "workspace-switch-button " +
              (mobileView === view ? "is-active" : "")
            }
            onClick={() => setMobileView(view)}
          >
            {mobileView === view && (
              <motion.span
                layoutId="workspace-mobile-pill"
                className="workspace-switch-pill"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            )}
            <span className="relative z-10">
              {view === "compose" ? "Compose" : "Output"}
            </span>
          </button>
        ))}
      </div>

      <div className="workspace-layout">
        <aside
          className={
            "workspace-compose " +
            (mobileView === "compose" ? "is-mobile-visible" : "")
          }
        >
          <div className="workspace-compose-inner">
            <div>
              <p className="workspace-kicker">Start with the rough version</p>
              <h1 className="workspace-title">
                What are you
                <span>building?</span>
              </h1>
              <p className="workspace-subtitle">
                Give Briefly AI the idea. It will create the structure.
              </p>
            </div>

            <div className="idea-composer">
              <label htmlFor="idea" className="idea-label">
                Software idea
              </label>
              <textarea
                id="idea"
                value={idea}
                maxLength={4000}
                onChange={(event) => setIdea(event.target.value)}
                placeholder="Example: A scheduling tool for small clinics that reduces no-shows..."
                disabled={isLoading}
              />
              <div className="idea-composer-footer">
                <span>{idea.length.toLocaleString()} / 4,000</span>
                <button
                  type="button"
                  className="generate-button"
                  disabled={isLoading || idea.trim().length < 12}
                  onClick={() => requestPlan()}
                >
                  <SparkIcon className="size-4" />
                  {loading === "all" ? "Structuring..." : "Generate plan"}
                </button>
              </div>
            </div>

            {error && (
              <div className="workspace-error" role="alert">
                <span />
                <p>{error}</p>
              </div>
            )}

            <div className="workspace-helper-row">
              <button
                type="button"
                className="workspace-text-button"
                onClick={loadExample}
                disabled={isLoading}
              >
                Load example
              </button>
              <span>Stored locally on this device</span>
            </div>

            <div className="history-panel">
              <div className="history-heading">
                <div>
                  <span className="workspace-kicker">Recent plans</span>
                  <p>{history.length ? "Local history" : "Nothing saved yet"}</p>
                </div>

                {history.length > 0 && (
                  <button
                    type="button"
                    onClick={clearHistory}
                    className="icon-button"
                    aria-label="Clear local history"
                  >
                    <DeleteIcon />
                  </button>
                )}
              </div>

              <div className="history-list">
                {history.slice(0, 4).map((entry) => (
                  <button
                    key={entry.id}
                    type="button"
                    className="history-item"
                    onClick={() => restoreEntry(entry)}
                  >
                    <span className="history-dot" />
                    <span className="min-w-0 flex-1">
                      <strong>{entry.idea}</strong>
                      <small>
                        {new Date(entry.createdAt).toLocaleDateString(undefined, {
                          month: "short",
                          day: "numeric",
                        })}
                      </small>
                    </span>
                  </button>
                ))}

                {history.length === 0 && (
                  <div className="history-empty">
                    Generated plans appear here automatically.
                  </div>
                )}
              </div>
            </div>
          </div>
        </aside>

        <section
          className={
            "workspace-output " +
            (mobileView === "output" ? "is-mobile-visible" : "")
          }
        >
          <div className="workspace-output-inner">
            <div className="output-topbar">
              <div>
                <p className="workspace-kicker">Structured software plan</p>
                <h2>{plan ? "Ready to refine." : "Your plan will appear here."}</h2>
              </div>

              {plan && (
                <div className="output-global-actions">
                  <button
                    type="button"
                    className="workspace-action"
                    onClick={exportMarkdown}
                  >
                    <DownloadIcon />
                    <span className="hidden sm:inline">Export</span>
                  </button>
                </div>
              )}
            </div>

            {!plan ? (
              <div className="output-empty-state">
                <div className="empty-orbit" aria-hidden="true">
                  <SparkIcon className="size-7 text-[#6E5CFF]" />
                </div>
                <h2>From idea to implementation.</h2>
                <p>
                  Generate a plan or load the example to preview all five
                  artifacts.
                </p>
                <button
                  type="button"
                  className="empty-example-button"
                  onClick={loadExample}
                >
                  Preview example
                </button>
              </div>
            ) : (
              <div className="artifact-workspace">
                <nav className="artifact-nav" aria-label="Generated artifacts">
                  {artifacts.map((artifact) => (
                    <button
                      type="button"
                      key={artifact.key}
                      className={
                        "artifact-nav-item " +
                        (activeArtifact === artifact.key ? "is-active" : "")
                      }
                      onClick={() => setActiveArtifact(artifact.key)}
                    >
                      <span className="artifact-nav-number">
                        {artifact.number}
                      </span>
                      <span className="artifact-nav-label">
                        <span className="hidden lg:inline">{artifact.label}</span>
                        <span className="lg:hidden">{artifact.shortLabel}</span>
                      </span>
                      <span className="artifact-nav-state" />
                    </button>
                  ))}
                </nav>

                <article className="artifact-document">
                  <header className="artifact-document-header">
                    <div>
                      <span className="artifact-document-number">
                        {activeMeta.number}
                      </span>
                      <p>{activeMeta.label}</p>
                    </div>

                    <div className="artifact-actions">
                      <button
                        type="button"
                        className="icon-button"
                        onClick={copyArtifact}
                        aria-label={copied ? "Copied" : "Copy current artifact"}
                      >
                        <CopyIcon />
                      </button>
                      <button
                        type="button"
                        className="icon-button"
                        disabled={isLoading}
                        onClick={() => requestPlan(activeArtifact)}
                        aria-label="Regenerate current artifact"
                      >
                        <RefreshIcon spinning={loading === activeArtifact} />
                      </button>
                    </div>
                  </header>

                  <div className="artifact-document-body">
                    {loading === activeArtifact ? (
                      <div className="artifact-loading" aria-live="polite">
                        <span />
                        <span />
                        <span />
                        <p>Refining {activeMeta.label.toLowerCase()}...</p>
                      </div>
                    ) : (
                      <ArtifactContent active={activeArtifact} plan={plan} />
                    )}
                  </div>

                  <footer className="artifact-document-footer">
                    <div className="artifact-footer-state">
                      <span className="status-dot" />
                      {copied ? "Copied" : "Structured output"}
                    </div>
                    <button
                      type="button"
                      className="regenerate-button"
                      disabled={isLoading}
                      onClick={() => requestPlan(activeArtifact)}
                    >
                      <RefreshIcon spinning={loading === activeArtifact} />
                      Regenerate
                    </button>
                  </footer>
                </article>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
