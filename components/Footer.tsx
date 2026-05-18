import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background py-8 text-center text-sm text-text-muted">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="flex items-center gap-1">
          Built with Next.js, TypeScript & Framer Motion
        </p>
        <p>
          &copy; {currentYear} Vivek Dehariya
        </p>
      </div>
    </footer>
  );
}
