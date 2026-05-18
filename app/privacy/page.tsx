import siteConfig from "@/config/site";

export const metadata = {
  title: `Privacy Policy – ${siteConfig.name}`,
};

export default function PrivacyPage() {
  return (
    <main className="pt-[100px] px-container-margin max-w-2xl mx-auto min-h-screen pb-section-gap">
      <h1 className="font-display text-headline-lg text-on-surface mb-2">
        Privacy Policy
      </h1>
      <p className="font-mono text-label-sm text-on-surface-variant mb-8">
        Effective Date: January 1, 2025
      </p>

      <div className="space-y-8 font-body text-body-md text-on-surface-variant leading-relaxed">
        {/* ---------------------------------------------------------- */}
        <section>
          <h2 className="font-display text-[20px] font-bold text-on-surface mb-3">
            1. Introduction
          </h2>
          <p>
            This Privacy Policy describes how Tony Nguyen (&quot;I,&quot;
            &quot;me,&quot; or &quot;my&quot;) collects, uses, and protects your
            information when you visit{" "}
            <span className="text-surface-tint">tonyn.netlify.app</span> (the
            &quot;Site&quot;). By using the Site, you agree to the practices
            described in this policy. If you do not agree, please discontinue
            use of the Site.
          </p>
        </section>

        {/* ---------------------------------------------------------- */}
        <section>
          <h2 className="font-display text-[20px] font-bold text-on-surface mb-3">
            2. Information I Collect
          </h2>

          <h3 className="font-display text-[16px] font-semibold text-on-surface mt-4 mb-2">
            2.1 Information You Provide
          </h3>
          <p>
            When you subscribe to my email list, submit a contact form, or
            otherwise communicate with me, you may provide personal information
            such as your name, email address, and any message content you
            choose to include.
          </p>

          <h3 className="font-display text-[16px] font-semibold text-on-surface mt-4 mb-2">
            2.2 Information Collected Automatically
          </h3>
          <p>
            When you visit the Site, certain information is collected
            automatically through analytics tools, including but not limited to:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>IP address (anonymized where possible)</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring URL and exit pages</li>
            <li>Pages visited and time spent on each page</li>
            <li>Date and time of your visit</li>
            <li>Device type and screen resolution</li>
          </ul>

          <h3 className="font-display text-[16px] font-semibold text-on-surface mt-4 mb-2">
            2.3 Cookies and Tracking Technologies
          </h3>
          <p>
            The Site may use cookies, pixel tags, and similar technologies to
            collect analytics data and improve your experience. You can control
            cookie preferences through your browser settings. Disabling cookies
            may affect certain functionality of the Site.
          </p>
        </section>

        {/* ---------------------------------------------------------- */}
        <section>
          <h2 className="font-display text-[20px] font-bold text-on-surface mb-3">
            3. How I Use Your Information
          </h2>
          <p>I use the information collected to:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Respond to your inquiries and communications</li>
            <li>Send email newsletters and updates you have opted into</li>
            <li>Analyze Site traffic and usage patterns to improve content</li>
            <li>Monitor and prevent technical issues</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className="mt-3">
            I will never sell, rent, or trade your personal information to third
            parties for their marketing purposes.
          </p>
        </section>

        {/* ---------------------------------------------------------- */}
        <section>
          <h2 className="font-display text-[20px] font-bold text-on-surface mb-3">
            4. Third-Party Services
          </h2>
          <p>
            The Site may use third-party services to facilitate analytics and
            email communications. These services may include, but are not
            limited to:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <span className="text-on-surface font-medium">
                Analytics providers
              </span>{" "}
              (e.g., Google Analytics, Plausible, or similar) to understand how
              visitors interact with the Site.
            </li>
            <li>
              <span className="text-on-surface font-medium">
                Email service providers
              </span>{" "}
              (e.g., Mailchimp, ConvertKit, or similar) to manage email
              subscriptions and deliver newsletters.
            </li>
            <li>
              <span className="text-on-surface font-medium">
                Hosting providers
              </span>{" "}
              (e.g., Netlify) to serve the Site.
            </li>
          </ul>
          <p className="mt-3">
            These third parties have their own privacy policies governing how
            they handle your data. I encourage you to review their respective
            policies.
          </p>
        </section>

        {/* ---------------------------------------------------------- */}
        <section>
          <h2 className="font-display text-[20px] font-bold text-on-surface mb-3">
            5. Data Retention
          </h2>
          <p>
            I retain personal information only for as long as necessary to
            fulfill the purposes outlined in this policy, unless a longer
            retention period is required or permitted by law. Analytics data is
            retained in accordance with the respective analytics
            provider&apos;s retention settings. You may request deletion of your
            data at any time by contacting me.
          </p>
        </section>

        {/* ---------------------------------------------------------- */}
        <section>
          <h2 className="font-display text-[20px] font-bold text-on-surface mb-3">
            6. Your Rights and Choices
          </h2>

          <h3 className="font-display text-[16px] font-semibold text-on-surface mt-4 mb-2">
            6.1 Email Communications
          </h3>
          <p>
            You may opt out of email communications at any time by clicking the
            &quot;unsubscribe&quot; link included in every email, or by
            contacting me directly. Please allow up to 10 business days for
            your request to be processed.
          </p>

          <h3 className="font-display text-[16px] font-semibold text-on-surface mt-4 mb-2">
            6.2 Access, Correction, and Deletion
          </h3>
          <p>
            You have the right to request access to, correction of, or deletion
            of your personal information. To make such a request, please contact
            me using the information in Section 10.
          </p>

          <h3 className="font-display text-[16px] font-semibold text-on-surface mt-4 mb-2">
            6.3 California Residents (CCPA)
          </h3>
          <p>
            If you are a California resident, you have additional rights under
            the California Consumer Privacy Act (CCPA), including the right to
            know what personal information is collected, the right to request
            deletion, and the right to opt out of the sale of personal
            information. I do not sell personal information. To exercise your
            rights, contact me using the information in Section 10.
          </p>

          <h3 className="font-display text-[16px] font-semibold text-on-surface mt-4 mb-2">
            6.4 European Visitors (GDPR)
          </h3>
          <p>
            If you are located in the European Economic Area (EEA), you may have
            additional rights under the General Data Protection Regulation
            (GDPR), including the right to access, rectify, erase, restrict
            processing, and data portability. The legal basis for processing
            your data is your consent (e.g., subscribing to emails) and
            legitimate interest (e.g., analytics to improve the Site). To
            exercise your rights, contact me using the information in Section
            10.
          </p>
        </section>

        {/* ---------------------------------------------------------- */}
        <section>
          <h2 className="font-display text-[20px] font-bold text-on-surface mb-3">
            7. Data Security
          </h2>
          <p>
            I take reasonable measures to protect your personal information from
            unauthorized access, alteration, disclosure, or destruction. The
            Site is served over HTTPS to encrypt data in transit. However, no
            method of transmission over the Internet or method of electronic
            storage is 100% secure, and I cannot guarantee absolute security.
          </p>
        </section>

        {/* ---------------------------------------------------------- */}
        <section>
          <h2 className="font-display text-[20px] font-bold text-on-surface mb-3">
            8. Children&apos;s Privacy
          </h2>
          <p>
            The Site is not directed at children under the age of 13. I do not
            knowingly collect personal information from children under 13. If I
            become aware that I have collected personal information from a child
            under 13, I will take steps to delete such information promptly. If
            you believe a child under 13 has provided me with personal
            information, please contact me.
          </p>
        </section>

        {/* ---------------------------------------------------------- */}
        <section>
          <h2 className="font-display text-[20px] font-bold text-on-surface mb-3">
            9. Changes to This Policy
          </h2>
          <p>
            I may update this Privacy Policy from time to time to reflect
            changes in practices or legal requirements. The updated policy will
            be posted on this page with a revised &quot;Effective Date.&quot; I
            encourage you to review this policy periodically. Your continued use
            of the Site after changes are posted constitutes your acceptance of
            the revised policy.
          </p>
        </section>

        {/* ---------------------------------------------------------- */}
        <section>
          <h2 className="font-display text-[20px] font-bold text-on-surface mb-3">
            10. Contact
          </h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or
            your personal information, please contact me at:
          </p>
          <p className="mt-3 text-on-surface">
            Tony Nguyen
            <br />
            <a
              href="mailto:Tony.nguyen1239@gmail.com"
              className="text-surface-tint hover:underline"
            >
              Tony.nguyen1239@gmail.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
