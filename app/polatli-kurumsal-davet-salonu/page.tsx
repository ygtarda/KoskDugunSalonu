import type { Metadata } from "next";
import EventLanding from "@/components/EventLanding";
import { getLandingPage, buildLandingMetadata } from "@/lib/landing-pages";

const page = getLandingPage("polatli-kurumsal-davet-salonu")!;

export const metadata: Metadata = buildLandingMetadata(page);

export default function Page() {
  return <EventLanding page={page} />;
}
