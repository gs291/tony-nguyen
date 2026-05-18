import siteConfig from "@/config/site";
import { BackLink } from "@/components";

export const metadata = {
  title: `Terms of Use – ${siteConfig.name}`,
};

export default function TermsPage() {
  return (
    <main className="pt-[100px] px-container-margin max-w-2xl mx-auto min-h-screen pb-section-gap">
      <BackLink />
      <h1 className="font-display text-headline-lg text-on-surface mb-2">
        Terms of Use
      </h1>
      <p className="font-mono text-label-sm text-on-surface-variant mb-8">
        Effective Date: January 1, 2025
      </p>

      <div className="space-y-8 font-body text-body-md text-on-surface-variant leading-relaxed">
        {/* ---------------------------------------------------------- */}
        <section>
          <h2 className="font-display text-[20px] font-bold text-on-surface mb-3">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using{" "}
            <span className="text-surface-tint">tonyn.netlify.app</span> (the
            &quot;Site&quot;), you agree to be bound by these Terms of Use
            (&quot;Terms&quot;). If you do not agree to these Terms, you must
            discontinue use of the Site immediately. These Terms constitute a
            legally binding agreement between you and Tony Nguyen (&quot;I,&quot;
            &quot;me,&quot; or &quot;my&quot;).
          </p>
        </section>

        {/* ---------------------------------------------------------- */}
        <section>
          <h2 className="font-display text-[20px] font-bold text-on-surface mb-3">
            2. Description of the Site
          </h2>
          <p>
            The Site is a personal &quot;link-in-bio&quot; page that provides
            links to my social media profiles, content platforms, merchandise
            store, and contact information. The Site may also include email
            newsletter signup functionality and other features as they are added
            over time.
          </p>
        </section>

        {/* ---------------------------------------------------------- */}
        <section>
          <h2 className="font-display text-[20px] font-bold text-on-surface mb-3">
            3. Use of the Site
          </h2>
          <p>You agree to use the Site only for lawful purposes. You may not:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Use the Site in any way that violates applicable federal, state,
              local, or international law or regulation
            </li>
            <li>
              Attempt to gain unauthorized access to any portion of the Site,
              its servers, or any systems or networks connected to the Site
            </li>
            <li>
              Use any automated system, including bots, crawlers, or scrapers,
              to access the Site for any purpose without my express written
              permission
            </li>
            <li>
              Introduce any viruses, trojans, worms, or other malicious or
              technologically harmful material
            </li>
            <li>
              Impersonate or attempt to impersonate me, another user, or any
              other person or entity
            </li>
            <li>
              Reproduce, distribute, modify, create derivative works of, or
              publicly display any content from the Site without prior written
              consent
            </li>
          </ul>
        </section>

        {/* ---------------------------------------------------------- */}
        <section>
          <h2 className="font-display text-[20px] font-bold text-on-surface mb-3">
            4. Intellectual Property
          </h2>
          <p>
            All content on the Site — including but not limited to text, images,
            graphics, logos, the &quot;TN&quot; monogram, design elements, and
            the overall look and feel — is owned by Tony Nguyen or used with
            permission and is protected by United States and international
            copyright, trademark, and other intellectual property laws.
          </p>
          <p className="mt-3">
            You may not copy, reproduce, distribute, modify, or create
            derivative works from any content on the Site without my prior
            written consent. The Tony Nguyen name, logo, and all related names,
            logos, product and service names, designs, and slogans are my
            property. You may not use such marks without my prior written
            permission.
          </p>
        </section>

        {/* ---------------------------------------------------------- */}
        <section>
          <h2 className="font-display text-[20px] font-bold text-on-surface mb-3">
            5. Third-Party Links
          </h2>
          <p>
            The Site contains links to third-party websites and services
            (including but not limited to TikTok, Instagram, YouTube, and
            merchandise platforms). These links are provided for your
            convenience only. I do not control, endorse, or assume
            responsibility for the content, privacy policies, or practices of
            any third-party websites or services. You acknowledge and agree that
            I am not liable for any damage or loss caused by or in connection
            with your use of any third-party content, goods, or services.
          </p>
          <p className="mt-3">
            Your interactions with third-party websites are governed solely by
            the terms and policies of those websites. I encourage you to review
            the terms and privacy policies of any third-party site you visit
            through links on the Site.
          </p>
        </section>

        {/* ---------------------------------------------------------- */}
        <section>
          <h2 className="font-display text-[20px] font-bold text-on-surface mb-3">
            6. Email Newsletter
          </h2>
          <p>
            If you subscribe to my email newsletter, you agree to receive
            periodic emails from me, which may include updates, promotions, and
            other content. You may unsubscribe at any time by clicking the
            &quot;unsubscribe&quot; link in any email or by contacting me
            directly. By subscribing, you represent that the email address you
            provide is accurate and that you are authorized to use it.
          </p>
          <p className="mt-3">
            I reserve the right to remove subscribers who provide false
            information, engage in abuse of the service, or whose email
            addresses generate repeated hard bounces.
          </p>
        </section>

        {/* ---------------------------------------------------------- */}
        <section>
          <h2 className="font-display text-[20px] font-bold text-on-surface mb-3">
            7. Disclaimer of Warranties
          </h2>
          <p>
            THE SITE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS
            AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS
            OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT. I DO NOT WARRANT THAT THE SITE WILL BE
            UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER
            HARMFUL COMPONENTS.
          </p>
          <p className="mt-3">
            I make no representations or warranties about the accuracy,
            reliability, completeness, or timeliness of any content on the Site
            or on any third-party sites linked from the Site.
          </p>
        </section>

        {/* ---------------------------------------------------------- */}
        <section>
          <h2 className="font-display text-[20px] font-bold text-on-surface mb-3">
            8. Limitation of Liability
          </h2>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, TONY NGUYEN
            SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR
            REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF
            DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Your access to or use of, or inability to access or use, the Site</li>
            <li>
              Any conduct or content of any third party on or linked from the
              Site
            </li>
            <li>Any content obtained from the Site</li>
            <li>
              Unauthorized access, use, or alteration of your transmissions or
              content
            </li>
          </ul>
          <p className="mt-3">
            IN NO EVENT SHALL MY TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING
            FROM OR RELATING TO THE SITE EXCEED ONE HUNDRED U.S. DOLLARS
            ($100.00).
          </p>
        </section>

        {/* ---------------------------------------------------------- */}
        <section>
          <h2 className="font-display text-[20px] font-bold text-on-surface mb-3">
            9. Indemnification
          </h2>
          <p>
            You agree to indemnify, defend, and hold harmless Tony Nguyen from
            and against any and all claims, liabilities, damages, losses, costs,
            and expenses (including reasonable attorneys&apos; fees) arising out
            of or in any way connected with your access to or use of the Site,
            your violation of these Terms, or your violation of any rights of
            any third party.
          </p>
        </section>

        {/* ---------------------------------------------------------- */}
        <section>
          <h2 className="font-display text-[20px] font-bold text-on-surface mb-3">
            10. Governing Law and Jurisdiction
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of the State of California, United States, without regard
            to its conflict of law provisions. Any legal action or proceeding
            arising under these Terms shall be brought exclusively in the
            federal or state courts located in the State of California, and you
            consent to the personal jurisdiction of such courts.
          </p>
        </section>

        {/* ---------------------------------------------------------- */}
        <section>
          <h2 className="font-display text-[20px] font-bold text-on-surface mb-3">
            11. Severability
          </h2>
          <p>
            If any provision of these Terms is found to be invalid, illegal, or
            unenforceable by a court of competent jurisdiction, the remaining
            provisions shall continue in full force and effect. The invalid or
            unenforceable provision shall be modified to the minimum extent
            necessary to make it valid and enforceable while preserving its
            original intent.
          </p>
        </section>

        {/* ---------------------------------------------------------- */}
        <section>
          <h2 className="font-display text-[20px] font-bold text-on-surface mb-3">
            12. Changes to These Terms
          </h2>
          <p>
            I reserve the right to modify or replace these Terms at any time at
            my sole discretion. The updated Terms will be posted on this page
            with a revised &quot;Effective Date.&quot; Your continued use of the
            Site after any changes constitutes your acceptance of the new Terms.
            I encourage you to review these Terms periodically.
          </p>
        </section>

        {/* ---------------------------------------------------------- */}
        <section>
          <h2 className="font-display text-[20px] font-bold text-on-surface mb-3">
            13. Contact
          </h2>
          <p>
            If you have any questions about these Terms, please contact me at:
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
      <div className="mt-12">
        <BackLink />
      </div>
    </main>
  );
}
