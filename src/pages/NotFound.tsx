import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center">
      <div className="container-page text-center">
        <p className="font-mono text-accent text-sm mb-3">404</p>
        <h1 className="section-heading text-3xl md:text-4xl font-semibold text-ink dark:text-ink-dark">
          Page not found
        </h1>
        <p className="mt-3 text-muted dark:text-muted-dark max-w-md mx-auto">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-md bg-accent text-white font-medium hover:bg-accent-strong transition-colors"
        >
          <ArrowLeft size={16} /> Back to homepage
        </Link>
      </div>
    </main>
  );
}
