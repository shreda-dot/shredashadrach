import { ImageResponse } from "next/og";

export const alt = "Shreda — Founder and full-stack developer in Lagos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FAFAF7",
          color: "#111111",
          padding: "76px",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#0F5132",
            fontSize: 30,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Lagos, Nigeria
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            Shreda
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              color: "#5F6368",
              fontSize: 34,
            }}
          >
            Founder · Full-stack developer · Schooldra
          </div>
        </div>
      </div>
    ),
    size,
  );
}
