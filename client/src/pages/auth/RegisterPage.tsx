import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Phone, ArrowRight, Loader2, AlertCircle, CheckCircle } from "lucide-react";
import { Seo } from "../../components/common/Seo";
import { AuthFormField } from "../../components/auth/AuthFormField";
import { PasswordField } from "../../components/auth/PasswordField";
import { authService, type RegisterData } from "../../services/authService";

export function RegisterPage() {
  const [formData, setFormData] = useState<RegisterData>({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [generalError, setGeneralError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const clearFieldError = (fieldName: string) => {
    setFieldErrors((prev) => {
      if (!prev[fieldName]) return prev;
      const copy = { ...prev };
      delete copy[fieldName];
      return copy;
    });
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errors.fullName = "Full name is required.";
    } else if (formData.fullName.trim().length < 2) {
      errors.fullName = "Please enter your complete name.";
    }

    if (!formData.email.trim()) {
      errors.email = "Email address is required.";
    } else if (!isValidEmail(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.password) {
      errors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters long.";
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = "Please confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }

    if (!formData.agreeToTerms) {
      errors.agreeToTerms = "You must agree to the Terms of Service and Privacy Policy to proceed.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGeneralError("");
    setSuccessMessage("");

    if (!validateForm() || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await authService.register({
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone?.trim() || undefined,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        agreeToTerms: formData.agreeToTerms,
      });

      if (response.error) {
        setGeneralError(response.error.message);
        if (response.error.fieldErrors) {
          setFieldErrors((prev) => ({
            ...prev,
            ...response.error?.fieldErrors,
          }));
        }
      } else if (response.data) {
        setSuccessMessage(
          response.data.message ||
            "Registration submitted successfully. Please check your email for verification.",
        );
      }
    } catch {
      setGeneralError("An unexpected network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Seo
        description="Register for a Green Heaven Service account to request and coordinate corporate security, facilities management, and specialized property care."
        title="Create Account | Green Heaven Service"
      />

      <div className="auth-card">
        {/* Header */}
        <div className="auth-card__header">
          <h2 className="auth-card__title">Create your account</h2>
          <p className="auth-card__subtitle">Get started with Green Heaven Service.</p>
        </div>

        {/* General Error Banner */}
        {generalError && (
          <div aria-live="assertive" className="auth-alert auth-alert--error" role="alert">
            <AlertCircle aria-hidden="true" className="auth-alert__icon" size={18} />
            <div className="auth-alert__content">
              <p className="auth-alert__title">Registration Notice</p>
              <p className="auth-alert__message">{generalError}</p>
            </div>
          </div>
        )}

        {/* Success Message Banner */}
        {successMessage && (
          <div aria-live="polite" className="auth-alert auth-alert--success" role="status">
            <CheckCircle aria-hidden="true" className="auth-alert__icon" size={18} />
            <div className="auth-alert__content">
              <p className="auth-alert__title">Registration Submitted</p>
              <p className="auth-alert__message">{successMessage}</p>
            </div>
          </div>
        )}

        {/* Registration Form */}
        <form className="auth-form" noValidate onSubmit={handleSubmit}>
          {/* Full Name */}
          <AuthFormField
            autoComplete="name"
            disabled={isSubmitting}
            error={fieldErrors.fullName}
            icon={User}
            id="register-fullname"
            label="Full name"
            name="fullName"
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, fullName: e.target.value }));
              if (fieldErrors.fullName) clearFieldError("fullName");
            }}
            placeholder="MD. Rabul Karim"
            required
            type="text"
            value={formData.fullName}
          />

          {/* Email Address */}
          <AuthFormField
            autoComplete="email"
            disabled={isSubmitting}
            error={fieldErrors.email}
            icon={Mail}
            id="register-email"
            label="Email address"
            name="email"
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, email: e.target.value }));
              if (fieldErrors.email) clearFieldError("email");
            }}
            placeholder="name@company.com"
            required
            type="email"
            value={formData.email}
          />

          {/* Phone Number (Optional) */}
          <AuthFormField
            actionRight={<span className="auth-field-optional">(optional)</span>}
            autoComplete="tel"
            disabled={isSubmitting}
            error={fieldErrors.phone}
            icon={Phone}
            id="register-phone"
            label="Phone number"
            name="phone"
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, phone: e.target.value }));
              if (fieldErrors.phone) clearFieldError("phone");
            }}
            placeholder="+880 1711 348400"
            type="tel"
            value={formData.phone}
          />

          {/* Password with Strength Indicator */}
          <PasswordField
            autoComplete="new-password"
            disabled={isSubmitting}
            error={fieldErrors.password}
            hint="Minimum 8 characters with letters, numbers, and symbols."
            id="register-password"
            label="Password"
            name="password"
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, password: e.target.value }));
              if (fieldErrors.password) clearFieldError("password");
            }}
            placeholder="••••••••••••"
            required
            showStrength
            value={formData.password}
          />

          {/* Confirm Password */}
          <PasswordField
            autoComplete="new-password"
            disabled={isSubmitting}
            error={fieldErrors.confirmPassword}
            id="register-confirmpassword"
            label="Confirm password"
            name="confirmPassword"
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, confirmPassword: e.target.value }));
              if (fieldErrors.confirmPassword) clearFieldError("confirmPassword");
            }}
            placeholder="••••••••••••"
            required
            value={formData.confirmPassword}
          />

          {/* Terms and Privacy Policy Consent */}
          <div className="auth-checkbox-group">
            <label className="auth-checkbox-label" htmlFor="register-terms">
              <input
                aria-describedby={fieldErrors.agreeToTerms ? "terms-error" : undefined}
                aria-invalid={Boolean(fieldErrors.agreeToTerms)}
                checked={formData.agreeToTerms}
                className="auth-checkbox"
                disabled={isSubmitting}
                id="register-terms"
                name="agreeToTerms"
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, agreeToTerms: e.target.checked }));
                  if (fieldErrors.agreeToTerms) clearFieldError("agreeToTerms");
                }}
                required
                type="checkbox"
              />
              <span className="auth-checkbox-text">
                I agree to the{" "}
                <Link className="auth-link-highlight" target="_blank" to="/privacy-policy">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link className="auth-link-highlight" target="_blank" to="/privacy-policy">
                  Privacy Policy
                </Link>
                .
              </span>
            </label>
            {fieldErrors.agreeToTerms && (
              <p className="auth-field-error" id="terms-error" role="alert">
                {fieldErrors.agreeToTerms}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            className="button button--frost auth-submit-btn"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? (
              <>
                <Loader2 aria-hidden="true" className="auth-spinner" size={17} />
                <span>Creating account...</span>
              </>
            ) : (
              <>
                <span>Create account</span>
                <ArrowRight aria-hidden="true" size={16} />
              </>
            )}
          </button>
        </form>

        {/* Alternate Route Link */}
        <div className="auth-card__footer">
          <p className="auth-card__footer-text">
            Already have an account?{" "}
            <Link className="auth-link-highlight" to="/login">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
