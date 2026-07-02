import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Support — Blackclap",
  description:
    "Get help with Blackclap. Contact our support team, browse common questions, and find helpful resources.",
};

export default function SupportPage() {
  return (
    <LegalPage
      title="Help &"
      accentWord="Support"
      subtitle="Need a hand? We're here to help you get the most out of Blackclap."
      lastUpdated="July 3, 2026"
    >
      <h2>Contact Us</h2>
      <p>
        The fastest way to reach us is by email. Our team typically responds within 2–3
        business days.
      </p>
      <ul>
        <li>
          <strong>General support:</strong>{" "}
          <a href="mailto:support@blackclap.com">support@blackclap.com</a>
        </li>
        <li>
          <strong>Privacy requests:</strong>{" "}
          <a href="mailto:support@blackclap.com?subject=Privacy%20Request">
            support@blackclap.com
          </a>
        </li>
        <li>
          <strong>Report abuse:</strong>{" "}
          <a href="mailto:support@blackclap.com?subject=Report%20Abuse">
            support@blackclap.com
          </a>
        </li>
      </ul>
      <p>
        To help us resolve your issue quickly, please include your username, your device and
        app version, and a description of the problem (screenshots are welcome).
      </p>

      <h2>Frequently Asked Questions</h2>

      <h3>How do I reset my password?</h3>
      <p>
        On the login screen, tap &quot;Forgot password?&quot; and follow the instructions
        sent to your email. If you don&apos;t receive the email, check your spam folder or
        contact us.
      </p>

      <h3>How do I edit my profile?</h3>
      <p>
        Go to your Profile, tap &quot;Edit Profile&quot;, and you can update your display
        name, username, bio, and avatar.
      </p>

      <h3>How do I report a post or user?</h3>
      <p>
        Use the report option on the relevant post or profile, or email us at{" "}
        <a href="mailto:support@blackclap.com?subject=Report%20Abuse">
          support@blackclap.com
        </a>
        . Please review our <a href="/community-guidelines">Community Guidelines</a> for
        what we do and don&apos;t allow.
      </p>

      <h3>How do I delete my account?</h3>
      <p>
        You can delete your account from within the app, or request deletion by email. See
        our <a href="/delete-account">Delete Account &amp; Data</a> page for step-by-step
        instructions.
      </p>

      <h3>Why can&apos;t I upload a photo or video?</h3>
      <p>
        Make sure you&apos;ve granted the app permission to access your photos and camera,
        that you have a stable internet connection, and that you&apos;re running the latest
        version of the app. If the problem persists, contact support.
      </p>

      <h2>More Resources</h2>
      <ul>
        <li>
          <a href="/privacy">Privacy Policy</a>
        </li>
        <li>
          <a href="/terms">Terms of Service</a>
        </li>
        <li>
          <a href="/community-guidelines">Community Guidelines</a>
        </li>
        <li>
          <a href="/delete-account">Delete Account &amp; Data</a>
        </li>
      </ul>
    </LegalPage>
  );
}
