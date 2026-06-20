import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Social share card (1200×630). Generated at build time with the brand
 * typeface so previews on LinkedIn, X, WhatsApp, Slack, iMessage, etc.
 * render a branded image rather than a blank box.
 */
export const alt =
  "RoboAgentix — Autonomous systems for mission-critical enterprises";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

const fontDir = join(process.cwd(), "lib/og/fonts");
const geistRegular = readFileSync(join(fontDir, "Geist-Regular.ttf"));
const geistSemiBold = readFileSync(join(fontDir, "Geist-SemiBold.ttf"));
const geistMono = readFileSync(join(fontDir, "GeistMono-Medium.ttf"));

const BRAND = "#5fc3a1";
const BRAND_DIM = "#3a8e76";
const BG = "#0b0b0d";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          backgroundColor: BG,
          color: "#ffffff",
          fontFamily: "Geist",
          padding: 72,
          overflow: "hidden",
        }}
      >
        {/* radial glow in the top-right corner */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 820,
            height: 820,
            borderRadius: 9999,
            display: "flex",
            background:
              "radial-gradient(closest-side, rgba(95,195,161,0.30), rgba(95,195,161,0.06) 58%, rgba(95,195,161,0) 74%)",
          }}
        />

        {/* concentric "radar" motif emanating from the corner */}
        <div
          style={{
            position: "absolute",
            top: -150,
            right: -150,
            width: 520,
            height: 520,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {[520, 380, 250, 130].map((d, i) => (
            <div
              key={d}
              style={{
                position: "absolute",
                inset: 0,
                margin: "auto",
                width: d,
                height: d,
                borderRadius: 9999,
                border: `1px solid rgba(95,195,161,${0.16 + i * 0.13})`,
                display: "flex",
              }}
            />
          ))}
          <div
            style={{
              position: "absolute",
              inset: 0,
              margin: "auto",
              width: 22,
              height: 22,
              borderRadius: 9999,
              backgroundColor: BRAND,
              display: "flex",
            }}
          />
        </div>

        {/* wordmark */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              position: "relative",
              width: 48,
              height: 48,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 16,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                margin: "auto",
                width: 48,
                height: 48,
                borderRadius: 9999,
                border: `1px solid ${BRAND_DIM}`,
                display: "flex",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                margin: "auto",
                width: 27,
                height: 27,
                borderRadius: 9999,
                border: `1px solid ${BRAND}`,
                display: "flex",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                margin: "auto",
                width: 11,
                height: 11,
                borderRadius: 9999,
                backgroundColor: BRAND,
                display: "flex",
              }}
            />
          </div>
          <div style={{ display: "flex", fontSize: 31, fontWeight: 600, letterSpacing: -0.5 }}>
            RoboAgentix
          </div>
        </div>

        {/* spacer */}
        <div style={{ display: "flex", flex: 1 }} />

        {/* eyebrow */}
        <div
          style={{
            display: "flex",
            fontFamily: "Geist Mono",
            fontSize: 19,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: BRAND,
          }}
        >
          Enterprise AI &amp; Software Engineering
        </div>

        {/* headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 64,
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: -2,
            marginTop: 20,
          }}
        >
          <div style={{ display: "flex" }}>Autonomous systems for</div>
          <div style={{ display: "flex", color: BRAND }}>mission-critical enterprises.</div>
        </div>

        {/* subhead */}
        <div
          style={{
            display: "flex",
            maxWidth: 820,
            fontSize: 25,
            lineHeight: 1.4,
            color: "#a1a1aa",
            marginTop: 24,
          }}
        >
          Agentic systems and mission-critical software for governments,
          healthcare, finance, and large enterprises.
        </div>

        {/* footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 44,
            paddingTop: 26,
            borderTop: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          <div style={{ display: "flex", fontFamily: "Geist Mono", fontSize: 22, color: BRAND }}>
            roboagentix.ai
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Geist Mono",
              fontSize: 18,
              color: "#71717a",
              letterSpacing: 1,
            }}
          >
            Doha · Riyadh · Dubai · London
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: geistRegular, weight: 400, style: "normal" },
        { name: "Geist", data: geistSemiBold, weight: 600, style: "normal" },
        { name: "Geist Mono", data: geistMono, weight: 500, style: "normal" },
      ],
    },
  );
}
