import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up — Blackclap",
  description: "Create your free Blackclap account and start connecting with your community.",
};

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
