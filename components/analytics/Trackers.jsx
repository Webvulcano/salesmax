"use client";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ClickTracker from "./ClickTracker";

// Keretben (Ügyfél Admin előnézet) nem látogató → nem küldünk eseményt
function beforeSend(event) {
  return window.self !== window.top ? null : event;
}

export default function Trackers() {
  return (
    <>
      <Analytics beforeSend={beforeSend} />
      <SpeedInsights beforeSend={beforeSend} />
      <ClickTracker />
    </>
  );
}
