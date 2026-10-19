import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { company } from "../../data/company";
import { services } from "../../data/services";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link aria-label="Green Heaven Service home" className="brand" to="/">
              <span className="brand__mark" aria-hidden="true">
                <img alt="" src="/assets/greenheavenservice_logo.svg" />
              </span>
              <span className="brand__name">Green Heaven <span>Service</span></span>
            </Link>
            <p>{company.slogan}</p>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </div>

          <div className="footer-column">
            <h2>Explore</h2>
            <Link to="/about">About us</Link>
            <Link to="/services">All services</Link>
            <Link to="/quality-safety">Quality & Safety</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-column">
            <h2>Services</h2>
            {services.slice(0, 4).map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`}>
                {service.title}
              </Link>
            ))}
            <Link className="footer-all-services" to="/services">
              View all services <ArrowUpRight aria-hidden="true" size={14} />
            </Link>
          </div>

          <div className="footer-column footer-contact">
            <h2>Get in touch</h2>
            {company.phones.map((phone) => (
              <a href={`tel:${phone.replace(/\s/g, "")}`} key={phone}>
                <Phone aria-hidden="true" size={15} /> {phone}
              </a>
            ))}
            <p>
              <MapPin aria-hidden="true" size={15} />
              <span>{company.address}</span>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {company.name}</p>
          <p>Quality service at minimum cost</p>
          <Link to="/privacy-policy">Privacy policy</Link>
        </div>
      </div>
    </footer>
  );
}
