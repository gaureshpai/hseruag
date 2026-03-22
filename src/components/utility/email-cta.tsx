"use client";

import Link from "next/link";
import { EMAIL } from "@/constants/site";

/**
 * A client-side component that renders an email link with copy-to-clipboard functionality.
 *
 * @returns A Link component that triggers the system mail client and copies the email to the clipboard.
 */
export default function EmailCTA() {
  const copyToClipboard = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(EMAIL);
    }
  };

  return (
    <Link
      href={`mailto:${EMAIL}`}
      target="_blank"
      rel="noopener noreferrer"
      className="mb-6 cursor-pointer text-center text-2xl font-bold underline sm:text-4xl lg:text-6xl"
      onClick={copyToClipboard}
    >
      <span>{EMAIL}</span>
    </Link>
  );
}
