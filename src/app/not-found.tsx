import Link from "next/link";

// Reached when the first path segment is not a locale and the request skipped
// the locale proxy (paths with a dot, e.g. /foo.bar). Without this, the
// [locale] layout fell back to English and served the home page with a 200,
// which search engines treat as a soft 404 and a duplicate of the home page.
// There is no root layout, so this renders its own document.
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
          404 · <Link href="/en">jp305.dev</Link>
        </p>
      </body>
    </html>
  );
}
