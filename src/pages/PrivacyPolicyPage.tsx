import { PageIntro } from "../components/common/PageIntro";
import { ScrollReveal } from "../components/common/ScrollReveal";
import { Seo } from "../components/common/Seo";

export function PrivacyPolicyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy | Green Heaven Service"
        description="Privacy information for the Green Heaven Service website and its email-based enquiry form."
      />
      <PageIntro
        description="How information is handled when you use this website and prepare an enquiry."
        eyebrow="Website information"
        title="Privacy policy."
      />
      <section className="section section--bone">
        <ScrollReveal as="article" className="site-container legal-copy">
          <h2>Enquiries</h2>
          <p>
            The enquiry form prepares an email draft using your device’s configured email application. The website does not submit that message to a company server. Information in the draft is sent only if you choose to send it from your email application.
          </p>
          <h2>Information you provide</h2>
          <p>
            If you contact Green Heaven Service by phone or email, the information you choose to share may be used to respond to your enquiry and discuss the requested service.
          </p>
          <h2>Website hosting</h2>
          <p>
            The website does not currently describe or configure analytics or advertising services. The hosting provider may process technical request data as part of serving the site; hosting-specific practices should be confirmed with the eventual provider.
          </p>
          <h2>Questions</h2>
          <p>
            For questions about this notice or information you have shared, contact{" "}
            <a href="mailto:greenheavenservice@gmail.com">greenheavenservice@gmail.com</a>.
          </p>
        </ScrollReveal>
      </section>
    </>
  );
}
