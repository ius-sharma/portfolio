import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(circle at 85% 15%, rgba(250,204,21,0.38), transparent 38%), radial-gradient(circle at 10% 90%, rgba(234,179,8,0.2), transparent 45%), linear-gradient(150deg, #050505 0%, #111111 45%, #0a0a0a 100%)",
          color: "#ffffff",
          fontFamily: "Segoe UI",
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: 2,
            color: "#facc15",
            textTransform: "uppercase",
          }}
        >
          Ayush Sharma
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 74,
              lineHeight: 1.05,
              fontWeight: 700,
              maxWidth: 980,
            }}
          >
            Full Stack Developer Portfolio
          </div>
          <div style={{ fontSize: 34, color: "#e5e7eb", maxWidth: 980 }}>
            MERN and AI-integrated web apps, case studies, and contact details.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
