import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { Layout } from "../components/layout/Layout";
// import { AboutPage } from "../pages/AboutPage";
// import { ContactPage } from "../pages/ContactPage";

// import { NotFoundPage } from "../pages/NotFoundPage";
// import { PrivacyPolicyPage } from "../pages/PrivacyPolicyPage";
// import { QualitySafetyPage } from "../pages/QualitySafetyPage";
// import { ServiceDetailPage } from "../pages/ServiceDetailPage";
// import { ServicesPage } from "../pages/ServicesPage";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:slug" element={<ServiceDetailPage />} />
          <Route path="quality-safety" element={<QualitySafetyPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
