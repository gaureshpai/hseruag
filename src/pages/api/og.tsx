import { ImageResponse } from "@vercel/og";
import type { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const title = searchParams.get("title") || "Gauresh G Pai";
    const description =
      searchParams.get("description") ||
      "Frontend Developer · 9+ Client Projects Delivered";
    const page = searchParams.get("page") || "Portfolio";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0a0a0a",
            backgroundImage:
              "radial-gradient(circle at 25px 25px, #1a1a1a 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1a1a1a 2%, transparent 0%)",
            backgroundSize: "100px 100px",
            fontFamily: "sans-serif",
            padding: "60px",
          }}
        >
          {/* Gradient Overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)",
              display: "flex",
            }}
          />

          {/* Content Container */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              width: "100%",
              maxWidth: "1000px",
              zIndex: 1,
              padding: "40px",
              backgroundColor: "rgba(10, 10, 10, 0.8)",
              borderRadius: "24px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            {/* Page Badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "8px 16px",
                backgroundColor: "rgba(139, 92, 246, 0.2)",
                borderRadius: "9999px",
                border: "1px solid rgba(139, 92, 246, 0.4)",
                marginBottom: "24px",
              }}
            >
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  background:
                    "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 50%, #ec4899 100%)",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {page}
              </span>
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: "64px",
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: "16px",
                background:
                  "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 50%, #ec4899 100%)",
                backgroundClip: "text",
                color: "transparent",
                maxWidth: "900px",
              }}
            >
              {title}
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: "28px",
                fontWeight: 500,
                color: "#a1a1aa",
                lineHeight: 1.4,
                maxWidth: "850px",
              }}
            >
              {description}
            </p>

            {/* Bottom Bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                marginTop: "40px",
                paddingTop: "24px",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 50%, #ec4899 100%)",
                    display: "flex",
                  }}
                />
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    color: "#ffffff",
                  }}
                >
                  Gauresh G Pai
                </span>
              </div>
              <span
                style={{
                  fontSize: "20px",
                  color: "#71717a",
                }}
              >
                gauresh.is-a.dev
              </span>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e) {
    console.error(e);
    return new Response("Failed to generate image", { status: 500 });
  }
}
