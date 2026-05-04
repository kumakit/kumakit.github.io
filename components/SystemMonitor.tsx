"use client";

import { useEffect, useState } from "react";

export function SystemMonitor({ url }: { url: string }) {
  const [status, setStatus] = useState<"checking" | "online" | "offline">("checking");

  useEffect(() => {
    fetch(url, { mode: "no-cors", cache: "no-store" })
      .then(() => setStatus("online"))
      .catch(() => setStatus("offline"));
  }, [url]);

  return (
    <div className="flex items-center gap-2 text-xs font-medium text-muted bg-gray-50 px-2 py-1 rounded-full w-fit">
      <div className="relative flex h-2.5 w-2.5">
        {status === "checking" && (
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-yellow"></span>
        )}
        {status === "online" && (
          <>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-green"></span>
          </>
        )}
        {status === "offline" && (
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-pink"></span>
        )}
      </div>
      <span className="uppercase tracking-wider">
        {status === "checking" ? "Checking" : status === "online" ? "Online" : "Offline"}
      </span>
    </div>
  );
}
