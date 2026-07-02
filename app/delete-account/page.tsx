import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Delete Account & Data — Blackclap",
  description:
    "How to delete your Blackclap account and associated data, and what happens to your information.",
};

export default function DeleteAccountPage() {
  return (
    <LegalPage
      title="Delete Account"
      accentWord="& Data"
      subtitle="You can delete your Blackclap account and associated data at any time. Here's how."
      lastUpdated="July 3, 2026"
    >
      <p>
        This page explains how to request deletion of your Blackclap account and the
        personal data associated with it, and what happens to your information when you do.
      </p>

      <h2>Option 1: Delete from the app</h2>
      <ol>
        <li>Open the Blackclap app and sign in to your account.</li>
        <li>
          Go to your <strong>Profile</strong> and open <strong>Settings</strong>.
        </li>
        <li>
          Open the <strong>Account</strong> section.
        </li>
        <li>
          Tap <strong>Delete Account</strong> and follow the on-screen prompts to confirm.
        </li>
      </ol>
      <p>
        Once confirmed, your account is deactivated and scheduled for deletion.
      </p>

      <h2>Option 2: Request deletion by email</h2>
      <p>
        If you can no longer access the app, you can request deletion by emailing us from
        the email address associated with your account:
      </p>
      <ul>
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:support@blackclap.com?subject=Account%20Deletion%20Request">
            support@blackclap.com
          </a>
        </li>
        <li>
          <strong>Subject:</strong> Account Deletion Request
        </li>
        <li>
          <strong>Include:</strong> your username so we can verify and locate your account.
        </li>
      </ul>
      <p>
        We will verify your identity and process your request within 30 days.
      </p>

      <h2>What data is deleted</h2>
      <p>
        When your account is deleted, we remove or anonymize the personal data associated
        with it, including:
      </p>
      <ul>
        <li>Your profile information (email, username, display name, bio, and avatar).</li>
        <li>Your posts, reels, photos, videos, comments, and stories.</li>
        <li>Your likes, saves, and follow relationships.</li>
        <li>Your direct messages, subject to the note below.</li>
      </ul>

      <h2>What may be retained</h2>
      <ul>
        <li>
          <strong>Shared content:</strong> messages you sent to other users may remain
          visible in their conversations. Content you shared publicly that others have
          saved or reposted may persist outside your account.
        </li>
        <li>
          <strong>Legal and security records:</strong> limited information may be retained
          where required to comply with legal obligations, resolve disputes, prevent fraud
          or abuse, or enforce our agreements.
        </li>
        <li>
          <strong>Backups:</strong> residual copies may persist in backups for a limited
          period before being overwritten.
        </li>
      </ul>

      <h2>Timeframe</h2>
      <p>
        Deletion requests are typically completed within 30 days of confirmation, after
        which the data described above is permanently removed, except for information we are
        required or permitted to retain as described above.
      </p>

      <p>
        For more detail on how we handle your information, see our{" "}
        <a href="/privacy">Privacy Policy</a>. Questions? Contact us at{" "}
        <a href="mailto:support@blackclap.com">support@blackclap.com</a>.
      </p>
    </LegalPage>
  );
}
