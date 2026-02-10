import { Metadata } from "next";
import ScheduleMeetingClient from "./ScheduleMeetingClient";

export const metadata: Metadata = {
  title: "Schedule a Meeting | Strategy Session | SqwizFlow Ai",
  description: "Book a direct strategy session with SqwizFlow Ai. Map out your project roadmap, audit your systems, and architect your digital dominance.",
  openGraph: {
    title: "Schedule a Meeting | SqwizFlow Ai",
    description: "Book your strategy session for custom AI agents and elite web engineering.",
  },
};

export default function Page() {
  return (
    <>
      <ScheduleMeetingClient />
    </>
  );
}
