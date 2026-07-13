import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy — Blackclap",
  description:
    "How Blackclap collects, uses, stores, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy"
      accentWord="Policy"
      subtitle="Your privacy matters. This policy explains what we collect, why we collect it, and the choices you have."
      lastUpdated="July 3, 2026"
      // showLegalNotice
    >
      <p>
        This Privacy Policy describes how Blackclap (&quot;Blackclap&quot;,
        &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and shares
        information about you when you use our mobile application and website
        (together, the &quot;Service&quot;). By using the Service, you agree to the
        collection and use of information in accordance with this policy.
      </p>

      <h2>1. Information We Collect</h2>
      <h3>Information you provide</h3>
      <ul>
        <li>
          <strong>Account information</strong> — your email address, username, password
          (stored only in a securely hashed form), and optional display name.
        </li>
        <li>
          <strong>Profile information</strong> — your bio, profile photo (avatar), and any
          other details you add to your profile.
        </li>
        <li>
          <strong>Content you create</strong> — posts (photos, videos, and text),
          comments, replies, likes, saves, tags, and stories.
        </li>
        <li>
          <strong>Messages</strong> — direct messages you send and receive through our
          real-time chat, including read and typing status.
        </li>
        <li>
          <strong>Social connections</strong> — the accounts you follow and that follow
          you.
        </li>
        <li>
          <strong>Communications</strong> — information you provide when you contact our
          support team.
        </li>
      </ul>

      <h3>Information collected automatically</h3>
      <ul>
        <li>
          <strong>Usage data</strong> — how you interact with the Service, such as posts
          and reels viewed, features used, and session activity.
        </li>
        <li>
          <strong>Device and technical data</strong> — device type, operating system, app
          version, and general log information.
        </li>
        <li>
          <strong>Analytics</strong> — we use Google Analytics to understand how our
          website is used. Google may set cookies and collect information as described in
          Google&apos;s own privacy policy.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To provide, operate, and maintain the Service and its core features.</li>
        <li>
          To authenticate you and keep your account secure (we use token-based JWT
          sessions).
        </li>
        <li>To deliver your feed, reels, search results, and real-time messages.</li>
        <li>To personalize content and improve your experience.</li>
        <li>To respond to your requests and provide customer support.</li>
        <li>
          To detect, prevent, and address fraud, abuse, security issues, and violations of
          our Terms of Service or Community Guidelines.
        </li>
        <li>To analyze usage and improve the Service.</li>
        <li>To comply with legal obligations.</li>
        <li> ⁠To maintain and enhance the safety, security, and stability of the Services by identifying and addressing technical or security issues or problems (such as technical bugs and spam accounts), and detecting abuse, fraud, and illegal activity</li>
      </ul>

      <h2>3. How Your Content Is Stored</h2>
      <p>
        Photos, videos, and other media you upload are stored using Microsoft Azure Blob
        Storage. Uploads are performed directly to secured storage using short-lived,
        pre-signed URLs. Your account data and content metadata are stored on our backend
        servers.
      </p>

      <h2>4. How We Share Information</h2>
      <p>We do not sell your personal information. We may share information as follows:</p>
      <ul>
        <li>
          <strong>With other users</strong> — content you post publicly (profile, posts,
          reels, comments) is visible to others according to your usage of the Service.
          Direct messages are shared with the recipients you choose.
        </li>
        <li>
          <strong>Service providers</strong> — with vendors who help us operate the Service
          (such as cloud storage and analytics providers), under appropriate
          confidentiality obligations.
        </li>
        <li>
          <strong>Legal reasons</strong> — when required by law, legal process, or to
          protect the rights, property, or safety of Blackclap, our users, or the public.
        </li>
        <li>
          <strong>Business transfers</strong> — in connection with a merger, acquisition,
          or sale of assets, subject to this policy.
        </li>
      </ul>

      <h2>5. Data Retention</h2>
      <p>
        We retain your information for as long as your account is active or as needed to
        provide the Service. When you delete your account, we delete or anonymize your
        personal information within a reasonable period, except where we are required to
        retain it for legal, security, or fraud-prevention purposes. See our{" "}
        <a href="/delete-account">Delete Account &amp; Data</a> page for details.
      </p>

      <h2>6. Your Rights and Choices</h2>
      <ul>
        <li>
          <strong>Access and update</strong> — you can view and edit your profile
          information at any time in the app.
        </li>
        <li>
          <strong>Delete</strong> — you can delete individual posts, or request deletion of
          your entire account and associated data.
        </li>
        <li>
          <strong>Access, correction, and portability</strong> — depending on your
          location, you may have the right to request a copy of your data or ask us to
          correct or erase it.
        </li>
      </ul>
      <p>
        To exercise any of these rights, contact us at{" "}
        <a href="mailto:support@blackclap.com">support@blackclap.com</a>.
      </p>

      <h2>7. Security</h2>
      <p>
        We take reasonable technical and organizational measures to protect your
        information, including hashed passwords, token-based authentication, and encrypted
        connections. However, no method of transmission or storage is completely secure,
        and we cannot guarantee absolute security.
      </p>

      <h2>8. Children&apos;s Privacy</h2>
      <p>
        The Service is not intended for children under the age of 13 (or the minimum age
        required in your country). We do not knowingly collect personal information from
        children. If you believe a child has provided us with personal information, please
        contact us so we can remove it.
      </p>

      <h2>9. International Data Transfers</h2>
      <p>
        Your information may be processed and stored in countries other than your own,
        where data protection laws may differ. We take steps to ensure your information
        receives an adequate level of protection wherever it is processed.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we make material changes,
        we will update the &quot;Last updated&quot; date above and, where appropriate,
        notify you within the Service. Your continued use of the Service after changes take
        effect constitutes acceptance of the updated policy.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy or our data practices, contact
        us at <a href="mailto:support@blackclap.com">support@blackclap.com</a>.
      </p>
    </LegalPage>
  );
}
