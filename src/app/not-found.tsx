import Link from "next/link";

// Reached for any unknown path, whether it went through the locale proxy
// (/foo is rewritten to /en/foo and no page matches) or skipped it (paths with
// a dot, e.g. /foo.bar, land in [locale] with a bogus locale). Without this,
// the [locale] layout fell back to English and served the home page with a
// 200, which search engines treat as a soft 404 and a duplicate of the home
// page. There is no root layout, so this renders its own document.
export default function NotFound() {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          fontFamily: "ui-monospace, monospace",
          background: "#f3f5f2",
          color: "#1c2530",
        }}
      >
        <p>
          404 · <Link href="/">jp305.dev</Link>
        </p>
      </body>
    </html>
  );
}
