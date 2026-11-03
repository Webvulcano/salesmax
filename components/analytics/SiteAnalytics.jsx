"use client";

// Lazy: az analitika (Vercel Web Analytics + Speed Insights + kattintásmérés) csak az oldal betöltése után,
// tétlen időben töltődik be → nem versenyez a hero képpel / LCP-vel. A pageview ilyenkor is az aktuális oldalra megy.
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Trackers = dynamic(() => import("./Trackers"), { ssr: false });

export default function SiteAnalytics() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const start = () => ("requestIdleCallback" in window ? requestIdleCallback(() => setReady(true), { timeout: 3000 }) : setTimeout(() => setReady(true), 1500));
    if (document.readyState === "complete") {
      start();
      return;
    }
    window.addEventListener("load", start, { once: true });
    return () => window.removeEventListener("load", start);
  }, []);

  return ready ? <Trackers /> : null;
}
