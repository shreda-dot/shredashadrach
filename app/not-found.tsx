import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-wrap not-found">
      <p className="eyebrow">404 · Not found</p>
      <h1>This page isn&apos;t here.</h1>
      <p className="page-intro">
        The address may be wrong, or the page may have moved.
      </p>
      <Link className="button button-primary" href="/">
        Back to home
      </Link>
    </div>
  );
}
