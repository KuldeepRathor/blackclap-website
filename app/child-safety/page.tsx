import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Child Safety Standards — Blackclap",
  description:
    "Blackclap's policy and standards for preventing child sexual abuse and exploitation (CSAE), and how to report concerns.",
};

export default function ChildSafetyPage() {
  return (
    <LegalPage
      title="Child Safety"
      accentWord="Standards"
      subtitle="Blackclap has zero tolerance for child sexual abuse material and exploitation. Here's how we prevent it, detect it, and respond to it."
      lastUpdated="July 25, 2026"
    >
      <p>
        Blackclap (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) maintains a zero-tolerance
        policy toward Child Sexual Abuse Material (CSAM) and any form of child sexual abuse or
        exploitation (CSAE) on our mobile application and website (together, the
        &quot;Service&quot;). This page describes our standards, how users can report concerns,
        and how we respond.
      </p>

      <h2>1. Zero Tolerance Policy</h2>
      <p>
        We strictly prohibit any content, behavior, or activity on the Service that sexualizes,
        endangers, or exploits minors, including but not limited to:
      </p>
      <ul>
        <li>Child sexual abuse material (CSAM) in any form, including AI-generated or
          computer-altered depictions.</li>
        <li>Sexualization of minors, including suggestive or exploitative content involving
          anyone who is, or appears to be, under the age of 18.</li>
        <li>Grooming, solicitation, or sextortion targeting minors.</li>
        <li>Facilitating, promoting, or advertising sexual content involving minors.</li>
      </ul>

      <h2>2. Reporting Abusive Content or Accounts</h2>
      <p>
        Every post, comment, message, and profile on Blackclap can be reported directly from
        within the app using the in-app &quot;Report&quot; option. Users can report:
      </p>
      <ul>
        <li>
          <strong>Abusive content</strong> — any post, photo, video, comment, or message that
          violates this policy.
        </li>
        <li>
          <strong>Abusive accounts</strong> — any account engaged in behavior that endangers or
          exploits minors.
        </li>
      </ul>
      <p>
        Reports can also be submitted by email to{" "}
        <a href="mailto:childsafety@blackclap.com">childsafety@blackclap.com</a>. We review every
        report of suspected CSAE.
      </p>

      <h2>3. Removal of Violating Content</h2>
      <p>
        Content that violates this policy is removed from the Service as soon as it is
        identified, whether through user reports, automated detection, or manual review by our
        trust and safety team.
      </p>

      <h2>4. Enforcement Against Accounts</h2>
      <p>
        Accounts found to have shared, distributed, or solicited CSAM are permanently banned from
        the Service. We do not offer warnings or appeals for confirmed CSAM violations.
      </p>

      <h2>5. Cooperation with Law Enforcement</h2>
      <p>
        Where legally required, we report violations to the relevant authorities, including the
        National Center for Missing &amp; Exploited Children (NCMEC) and/or local law enforcement,
        and we cooperate fully with law enforcement investigations into CSAE.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        To report a child safety concern, request more information about our child safety
        practices, or contact our team directly, email{" "}
        <a href="mailto:blackclap.app@gmail.com">blackclap.app@gmail.com</a>. If you believe a
        child is in immediate danger, please contact your local law enforcement immediately.
      </p>

      <p>
        This policy works alongside our{" "}
        <a href="/community-guidelines">Community Guidelines</a>,{" "}
        <a href="/terms">Terms of Service</a>, and{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>
    </LegalPage>
  );
}
