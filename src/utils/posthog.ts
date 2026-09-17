import { useRouter } from "next/router";
import posthog from "posthog-js";
import { useEffect } from "react";

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

type AnalyticsProperties = Record<
  string,
  string | number | boolean | null | undefined
>;

export function initPostHog() {
  if (typeof window === "undefined" || !POSTHOG_KEY) {
    return;
  }

  const posthogWindow = window as Window & {
    posthog?: {
      __loaded?: boolean;
      [key: string]: unknown;
    };
  };

  if (posthogWindow.posthog?.__loaded) {
    return;
  }

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    defaults: "2026-05-30",
    capture_pageview: false,
    capture_pageleave: true,
    autocapture: true,
    person_profiles: "always",
    session_recording: {
      maskAllInputs: true,
      maskInputOptions: {
        password: true,
        email: true,
      },
    },
    debug: process.env.NODE_ENV === "development",
  });
}

export function trackEvent(
  eventName: string,
  properties: AnalyticsProperties = {},
) {
  if (typeof window === "undefined" || !POSTHOG_KEY) {
    return;
  }

  initPostHog();
  posthog.capture(eventName, properties);
}

export function usePostHogPageView() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined" || !POSTHOG_KEY) {
      return;
    }

    initPostHog();

    const handleRouteChange = (url: string) => {
      const absoluteUrl = new URL(url, window.location.origin).toString();
      posthog.capture("$pageview", {
        $current_url: absoluteUrl,
        page_path: new URL(absoluteUrl).pathname,
        page_title: document.title,
        referrer: document.referrer || undefined,
      });
    };

    handleRouteChange(router.asPath);
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);
}
