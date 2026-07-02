import type { ReactNode } from "react";
import { Info } from "lucide-react";
import Footer from "@/components/footer";

interface LegalPageProps {
  title: string;
  accentWord?: string;
  subtitle: string;
  lastUpdated?: string;
  /** Show the "template, not legal advice" banner (privacy/terms). */
  showLegalNotice?: boolean;
  children: ReactNode;
}

export default function LegalPage({
  title,
  accentWord,
  subtitle,
  lastUpdated,
  showLegalNotice = false,
  children,
}: LegalPageProps) {
  return (
    <>
      {/* Header band */}
      <section className="relative overflow-hidden pt-32 pb-16 px-6 bg-gradient-to-b from-white via-blue-50/40 to-purple-50/30">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 -left-20 w-[400px] h-[400px] rounded-full bg-blue-200/30 blur-3xl" />
          <div className="absolute top-10 -right-20 w-[350px] h-[350px] rounded-full bg-purple-200/25 blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            {title}
            {accentWord && (
              <>
                {" "}
                <span className="gradient-text">{accentWord}</span>
              </>
            )}
          </h1>
          <p className="mt-4 text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
          {lastUpdated && (
            <p className="mt-4 text-sm text-slate-400">Last updated: {lastUpdated}</p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          {showLegalNotice && (
            <div className="mb-10 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
              <Info className="w-5 h-5 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                This document is a general template provided for convenience and does not
                constitute legal advice. Please have it reviewed by a qualified attorney
                before relying on it.
              </p>
            </div>
          )}

          <div
            className="
              [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-slate-800 [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:scroll-mt-24
              [&_h2:first-child]:mt-0
              [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-slate-800 [&_h3]:mt-8 [&_h3]:mb-3
              [&_p]:text-slate-500 [&_p]:leading-relaxed [&_p]:my-4
              [&_ul]:my-4 [&_ul]:pl-6 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:text-slate-500 [&_ul]:marker:text-blue-400
              [&_ol]:my-4 [&_ol]:pl-6 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:text-slate-500 [&_ol]:marker:text-slate-400
              [&_li]:leading-relaxed [&_li>strong]:text-slate-700
              [&_a]:text-blue-500 [&_a]:font-medium hover:[&_a]:text-blue-600 [&_a]:underline [&_a]:underline-offset-2
              [&_strong]:text-slate-700 [&_strong]:font-semibold
            "
          >
            {children}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
