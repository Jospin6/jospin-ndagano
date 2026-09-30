"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function CopyEmail() {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(timeout.current), []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <div className="copy-email">
      <button type="button" onClick={copyEmail} className="copy-button" aria-label="Copy email address">
        {status === "copied" ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
        <span>{status === "copied" ? "Copied" : "Copy email"}</span>
      </button>
      <span className="copy-status" role="status">{status === "error" ? "Select the email address to copy it." : status === "copied" ? "Email address copied." : ""}</span>
    </div>
  );
}
