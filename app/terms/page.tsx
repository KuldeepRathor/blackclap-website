import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service — Blackclap",
  description:
    "The terms and conditions that govern your use of the Blackclap app and website.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of"
      accentWord="Service"
      subtitle="Please read these terms carefully. They govern your access to and use of Blackclap."
      lastUpdated="July 3, 2026"
      showLegalNotice
    >
      <p>
        These Terms of Service (&quot;Terms&quot;) form a binding agreement between you and
        Blackclap (&quot;Blackclap&quot;, &quot;we&quot;, &quot;us&quot;, or
        &quot;our&quot;) and govern your access to and use of our mobile application and
        website (together, the &quot;Service&quot;). By creating an account or using the
        Service, you agree to these Terms. If you do not agree, do not use the Service.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be at least 13 years old (or the minimum age required in your country) to
        use the Service. By using Blackclap, you represent that you meet this requirement
        and that you have the legal capacity to enter into these Terms.
      </p>

      <h2>2. Your Account</h2>
      <ul>
        <li>
          You are responsible for maintaining the confidentiality of your login credentials
          and for all activity that occurs under your account.
        </li>
        <li>
          You agree to provide accurate information and to keep it up to date.
        </li>
        <li>
          Notify us immediately at{" "}
          <a href="mailto:support@blackclap.com">support@blackclap.com</a> if you suspect
          unauthorized use of your account.
        </li>
      </ul>

      <h2>3. Acceptable Use</h2>
      <p>You agree not to use the Service to:</p>
      <ul>
        <li>Violate any law or the rights of others.</li>
        <li>
          Post content that is unlawful, harassing, hateful, abusive, threatening,
          defamatory, obscene, or otherwise objectionable.
        </li>
        <li>Impersonate any person or entity, or misrepresent your affiliation.</li>
        <li>Spam, phish, or distribute malware or harmful code.</li>
        <li>
          Attempt to gain unauthorized access to the Service, other accounts, or our
          systems, or interfere with the Service&apos;s operation.
        </li>
        <li>
          Scrape, harvest, or collect data from the Service without our written permission.
        </li>
      </ul>
      <p>
        A more detailed description of expected behavior is available in our{" "}
        <a href="/community-guidelines">Community Guidelines</a>.
      </p>

      <h2>4. Your Content</h2>
      <p>
        You retain ownership of the content you create and share on Blackclap (&quot;User
        Content&quot;). By posting User Content, you grant Blackclap a worldwide,
        non-exclusive, royalty-free license to host, store, reproduce, display, and
        distribute that content solely for the purpose of operating and providing the
        Service. This license ends when you delete your User Content, except to the extent
        it has been shared with others who have not deleted it, or where retention is
        required by law.
      </p>
      <p>
        You are solely responsible for your User Content and represent that you have all
        rights necessary to post it.
      </p>

      <h2>5. Intellectual Property</h2>
      <p>
        The Service, including its software, design, logos, and trademarks, is owned by
        Blackclap and protected by intellectual property laws. Except for your own User
        Content, you may not copy, modify, distribute, or create derivative works from the
        Service without our permission.
      </p>

      <h2>6. Content Moderation and Termination</h2>
      <p>
        We may remove content or suspend or terminate accounts that violate these Terms or
        our Community Guidelines, with or without notice. You may stop using the Service at
        any time and may delete your account as described on our{" "}
        <a href="/delete-account">Delete Account &amp; Data</a> page.
      </p>

      <h2>7. Disclaimers</h2>
      <p>
        The Service is provided on an &quot;as is&quot; and &quot;as available&quot; basis,
        without warranties of any kind, whether express or implied. We do not warrant that
        the Service will be uninterrupted, secure, or error-free, or that any content is
        accurate or reliable.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Blackclap and its affiliates will not be
        liable for any indirect, incidental, special, consequential, or punitive damages,
        or any loss of data, profits, or goodwill, arising out of or related to your use of
        the Service.
      </p>

      <h2>9. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Blackclap from any claims, damages, or
        expenses arising out of your use of the Service, your User Content, or your
        violation of these Terms.
      </p>

      <h2>10. Governing Law</h2>
      <p>
        These Terms are governed by the laws of{" "}
        <strong>[Your Company Name / Jurisdiction]</strong>, without regard to its conflict
        of law principles. Any disputes will be subject to the exclusive jurisdiction of
        the courts located there.
      </p>

      <h2>11. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. When we make material changes, we will
        update the &quot;Last updated&quot; date above and, where appropriate, notify you
        within the Service. Your continued use of the Service after changes take effect
        constitutes acceptance of the updated Terms.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        If you have any questions about these Terms, contact us at{" "}
        <a href="mailto:support@blackclap.com">support@blackclap.com</a>.
      </p>
    </LegalPage>
  );
}
