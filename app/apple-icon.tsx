import { ImageResponse } from "next/og";

/** iOS home-screen / touch icon (180×180) — the RoboAgentix radar mark. */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          backgroundColor: "#0e0e10",
        }}
      >
        {[
          { d: 150, w: 6, o: 0.4 },
          { d: 92, w: 6, o: 0.7 },
        ].map(({ d, w, o }) => (
          <div
            key={d}
            style={{
              position: "absolute",
              inset: 0,
              margin: "auto",
              width: d,
              height: d,
              borderRadius: 9999,
              border: `${w}px solid rgba(127,224,192,${o})`,
              display: "flex",
            }}
          />
        ))}
        <div
          style={{
            position: "absolute",
            inset: 0,
            margin: "auto",
            width: 40,
            height: 40,
            borderRadius: 9999,
            backgroundColor: "#7fe0c0",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
