import { useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { PageIntro } from "../components/common/PageIntro";
import { ScrollReveal } from "../components/common/ScrollReveal";
import { Seo } from "../components/common/Seo";
import { company } from "../data/company";
import { services } from "../data/services";

export function ContactPage() {
  const [formError, setFormError] = useState("");
  const contactRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();

    if (!email && !phone) {
      setFormError("Please provide either an email address or a phone number.");
      contactRef.current?.focus();
      return;
    }

    setFormError("");
    const service = String(formData.get("service") ?? "General enquiry");
    const subject = encodeURIComponent(`Service enquiry: ${service}`);
    const body = encodeURIComponent(
      [
        `Name: ${String(formData.get("name") ?? "")}`,
        `Organization: ${String(formData.get("organization") ?? "")}`,
        `Phone: ${phone || "Not provided"}`,
        `Email: ${email || "Not provided"}`,
        `Service: ${service}`,
        "",
        "Requirements:",
        String(formData.get("message") ?? ""),
      ].join("\n"),
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Seo
        title="Contact Green Heaven Service"
        description="Contact Green Heaven Service by phone or email, or prepare an enquiry using the mailto form."
      />
      <PageIntro
        description="Tell us about your requirement. You can call or email directly, or prepare an enquiry in your email application."
        eyebrow="Contact"
        title="Let’s talk about what you need."
      />
      <section className="section section--bone">
        <ScrollReveal className="site-container contact-grid" stagger>
          <div className="contact-details gh-reveal-item">
            <p className="eyebrow">Green Heaven Service</p>
            <h2>Reach out directly.</h2>
            <div className="contact-detail">
              <span><Phone aria-hidden="true" size={18} /></span>
              <div>
                <h3>Phone & Hotline</h3>
                <div className="contact-phone-list">
                  {company.phoneNumbers.map((item) => (
                    <div className="contact-phone-item" key={item.label}>
                      <span className="contact-phone-tag">{item.label}</span>
                      <a href={`tel:${item.tel}`}>{item.number}</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="contact-detail">
              <span><Mail aria-hidden="true" size={18} /></span>
              <div><h3>Email</h3><a href={`mailto:${company.email}`}>{company.email}</a></div>
            </div>
            <div className="contact-detail">
              <span><MapPin aria-hidden="true" size={18} /></span>
              <div><h3>Address</h3><p>{company.address}</p></div>
            </div>
          </div>

          <form className="contact-form gh-reveal-item" onSubmit={handleSubmit}>
            <div className="contact-form__heading">
              <div><p className="eyebrow">Enquiry</p><h2>Prepare an email</h2></div>
              <ArrowUpRight aria-hidden="true" size={20} />
            </div>
            <p className="contact-form__note">
              This form opens a draft in your email application. It does not send information until you choose to send that email.
            </p>
            <div className="form-row">
              <label>
                Name <span aria-hidden="true">*</span>
                <input autoComplete="name" name="name" required />
              </label>
              <label>
                Organization <small>(optional)</small>
                <input autoComplete="organization" name="organization" />
              </label>
            </div>
            <div className="form-row">
              <label>
                Email
                <input
                  autoComplete="email"
                  aria-describedby={formError ? "contact-info-error" : undefined}
                  name="email"
                  onChange={() => setFormError("")}
                  ref={contactRef}
                  type="email"
                />
              </label>
              <label>
                Phone
                <input
                  autoComplete="tel"
                  aria-describedby={formError ? "contact-info-error" : undefined}
                  name="phone"
                  onChange={() => setFormError("")}
                  type="tel"
                />
              </label>
            </div>
            {formError && <p className="form-error" id="contact-info-error" role="alert">{formError}</p>}
            <label>
              Service of interest
              <select defaultValue="" name="service">
                <option value="">Select a service (optional)</option>
                {services.map((service) => (
                  <option key={service.slug} value={service.title}>{service.title}</option>
                ))}
              </select>
            </label>
            <label>
              Message <span aria-hidden="true">*</span>
              <textarea name="message" required rows={4} />
            </label>
            <button className="button button--dark" type="submit">
              Open email draft <ArrowUpRight aria-hidden="true" size={17} />
            </button>
            <p className="form-required-note">* Required field. Please provide either an email or a phone number.</p>
          </form>
        </ScrollReveal>
      </section>
    </>
  );
}
