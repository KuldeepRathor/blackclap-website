import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Community Guidelines — Blackclap",
  description:
    "The rules that keep Blackclap a safe, respectful, and welcoming community for everyone.",
};

export default function CommunityGuidelinesPage() {
  return (
    <LegalPage
      title="Community"
      accentWord="Guidelines"
      subtitle="Blackclap is built on connection and respect. These guidelines keep our community safe and welcoming for everyone."
      lastUpdated="July 3, 2026"
    >
      <p>
        Blackclap is a place to share moments, discover new perspectives, and build
        meaningful connections. To keep it that way, everyone is expected to follow these
        guidelines. Content or behavior that breaks these rules may be removed, and repeat
        or serious violations may result in account suspension or termination.
      </p>

      <h2>1. Be Respectful</h2>
      <p>
        Treat others the way you&apos;d want to be treated. Disagreement is fine —
        harassment, bullying, and personal attacks are not.
      </p>

      <h2>2. No Hate Speech or Harassment</h2>
      <ul>
        <li>
          Do not attack, threaten, or demean people based on race, ethnicity, national
          origin, religion, disability, gender, gender identity, sexual orientation, or
          any other protected characteristic.
        </li>
        <li>
          Do not target individuals with abuse, stalking, or coordinated harassment.
        </li>
      </ul>

      <h2>3. No Explicit or Harmful Content</h2>
      <ul>
        <li>Do not post sexually explicit material or content that exploits minors.</li>
        <li>
          Do not post graphic violence, or content that promotes self-harm, suicide, or
          dangerous acts.
        </li>
        <li>
          Do not promote or facilitate the sale of illegal goods, drugs, or weapons.
        </li>
      </ul>

      <h2>4. No Spam or Deceptive Behavior</h2>
      <ul>
        <li>
          Do not post repetitive, misleading, or unsolicited content, or use bots and fake
          engagement.
        </li>
        <li>
          Do not impersonate other people, brands, or organizations, or misrepresent who
          you are.
        </li>
        <li>Do not run scams, phishing, or fraudulent schemes.</li>
      </ul>

      <h2>5. Respect Intellectual Property</h2>
      <p>
        Only post content you created or have the right to share. Do not post content that
        infringes someone else&apos;s copyright, trademark, or other rights.
      </p>

      <h2>6. Protect Privacy</h2>
      <p>
        Do not share other people&apos;s private or personal information without their
        consent, and do not post content that violates someone&apos;s privacy.
      </p>

      <h2>7. Reporting and Enforcement</h2>
      <p>
        If you see content or behavior that violates these guidelines, please report it or
        contact us at <a href="mailto:support@blackclap.com">support@blackclap.com</a>. We
        review reports and take action, which may include removing content, issuing
        warnings, or suspending or terminating accounts. We also cooperate with law
        enforcement where required.
      </p>

      <p>
        These guidelines work alongside our{" "}
        <a href="/terms">Terms of Service</a> and{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>
    </LegalPage>
  );
}
