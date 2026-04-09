import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login — Blackclap",
  description: "Sign in to your Blackclap account and reconnect with your community.",
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
