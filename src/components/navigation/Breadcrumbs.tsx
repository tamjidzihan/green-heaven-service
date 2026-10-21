import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

type BreadcrumbsProps = {
  current: string;
};

export function Breadcrumbs({ current }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <ol>
        <li><Link to="/">Home</Link></li>
        <li><ChevronRight aria-hidden="true" size={14} /></li>
        <li><Link to="/services">Services</Link></li>
        <li><ChevronRight aria-hidden="true" size={14} /></li>
        <li aria-current="page">{current}</li>
      </ol>
    </nav>
  );
}
