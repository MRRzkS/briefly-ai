import type { Metadata } from "next";
import WorkspaceClient from "./workspace-client";

export const metadata: Metadata = {
  title: "Generator",
  description:
    "Turn a rough software idea into a structured project brief, requirements, user stories, acceptance criteria, and implementation tasks.",
};

export default function GeneratorPage() {
  return <WorkspaceClient />;
}
