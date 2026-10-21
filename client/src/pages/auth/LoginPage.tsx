import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowRight, Loader2, AlertCircle, X, HelpCircle, Phone } from "lucide-react";
import { Seo } from "../../components/common/Seo";
import { AuthFormField } from "../../components/auth/AuthFormField";
import { PasswordField } from "../../components/auth/PasswordField";
import { authService, type LoginCredentials } from "../../services/authService";
import { company } from "../../data/company";

export function LoginPage() {
  const [formData, setFormData] = useState<LoginCredentials>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [fieldErrors, setFieldErrors] = useState<{ email?: string; password?: string }>({});
  const [generalError, setGeneralError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotSent, setForgotSent] = useState(false);

  // Email format validation helper
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const errors: { email?: string; password?: string } = {};

    if (!formData.email.trim()) {
      errors.email = "Email address is required.";
    } else if (!isValidEmail(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.password) {
      errors.password = "Password is required.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGeneralError("");

    if (!validateForm() || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await authService.login({
        email: formData.email.trim(),
        password: formData.password,
        rememberMe: formData.rememberMe,
      });

      if (response.error) {
        setGeneralError(response.error.message);
        if (response.error.fieldErrors) {
          setFieldErrors((prev) => ({
            ...prev,
            ...response.error?.fieldErrors,
          }));
        }
        // Preserve email, clear password for security
        setFormData((prev) => ({ ...prev, password: "" }));
      } else if (response.data) {
        // In the event a live backend is configured and returns success
        // Handle post-login redirection or token storage per backend architecture
        window.location.href = "/";
      }
    } catch {
      setGeneralError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Seo
        description="Sign in to your Green Heaven Service account to access client facilities, security logs, and service management."
        title="Sign In | Green Heaven Service"
      />

      <div className="auth-card">
        {/* Header */}
        <div className="auth-card__header">
          <h2 className="auth-card__title">Welcome back</h2>
          <p className="auth-card__subtitle">Sign in to continue to your account.</p>
        </div>

        {/* General Error Banner */}
        {generalError && (
          <div aria-live="assertive" className="auth-alert auth-alert--error" role="alert">
            <AlertCircle aria-hidden="true" className="auth-alert__icon" size={18} />
            <div className="auth-alert__content">
              <p className="auth-alert__title">Sign In Notice</p>
              <p className="auth-alert__message">{generalError}</p>
            </div>
          </div>
        )}

        {/* Login Form */}
        <form className="auth-form" noValidate onSubmit={handleSubmit}>
          {/* Email Address */}
          <AuthFormField
            autoComplete="email"
            disabled={isSubmitting}
            error={fieldErrors.email}
            icon={Mail}
            id="login-email"
            label="Email address"
            name="email"
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, email: e.target.value }));
              if (fieldErrors.email) setFieldErrors((prev) => ({ ...prev, email: undefined }));
            }}
            placeholder="name@company.com"
            required
            type="email"
            value={formData.email}
          />

          {/* Password */}
          <PasswordField
            actionRight={
              <button
                className="auth-link-text auth-link-text--sm"
                onClick={() => {
                  setForgotEmail(formData.email);
                  setForgotSent(false);
                  setShowForgotModal(true);
                }}
                type="button"
              >
                Forgot password?
              </button>
            }
            autoComplete="current-password"
            disabled={isSubmitting}
            error={fieldErrors.password}
            id="login-password"
            label="Password"
            name="password"
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, password: e.target.value }));
              if (fieldErrors.password) setFieldErrors((prev) => ({ ...prev, password: undefined }));
            }}
            placeholder="••••••••••••"
            required
            value={formData.password}
          />

          {/* Remember Me Checkbox */}
          <div className="auth-checkbox-row">
            <label className="auth-checkbox-label" htmlFor="login-remember">
              <input
                checked={formData.rememberMe}
                className="auth-checkbox"
                disabled={isSubmitting}
                id="login-remember"
                name="rememberMe"
                onChange={(e) => setFormData((prev) => ({ ...prev, rememberMe: e.target.checked }))}
                type="checkbox"
              />
              <span className="auth-checkbox-text">Remember me on this device</span>
            </label>
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
                <span>Signing in...</span>
              </>
            ) : (
              <>
                <span>Sign in</span>
                <ArrowRight aria-hidden="true" size={16} />
              </>
            )}
          </button>
        </form>

        {/* Alternate Route Link */}
        <div className="auth-card__footer">
          <p className="auth-card__footer-text">
            Don&apos;t have an account?{" "}
            <Link className="auth-link-highlight" to="/register">
              Create one
            </Link>
          </p>
        </div>
      </div>

      {/* Forgot Password Recovery Modal */}
      {showForgotModal && (
        <div
          aria-labelledby="forgot-password-title"
          aria-modal="true"
          className="auth-modal-backdrop"
          role="dialog"
        >
          <div className="auth-modal">
            <div className="auth-modal__header">
              <div className="auth-modal__title-row">
                <HelpCircle aria-hidden="true" className="auth-modal__icon" size={20} />
                <h3 className="auth-modal__title" id="forgot-password-title">
                  Password Recovery
                </h3>
              </div>
              <button
                aria-label="Close dialog"
                className="auth-modal__close"
                onClick={() => setShowForgotModal(false)}
                type="button"
              >
                <X aria-hidden="true" size={18} />
              </button>
            </div>

            <div className="auth-modal__body">
              {forgotSent ? (
                <div className="auth-modal__success">
                  <p className="auth-modal__message">
                    If an account is associated with <strong>{forgotEmail}</strong>, password reset instructions and security verification steps have been dispatched.
                  </p>
                  <p className="auth-modal__submessage">
                    For corporate accounts, your assigned system administrator can also reset your credentials directly.
                  </p>
                  <button
                    className="button button--frost auth-modal__action-btn"
                    onClick={() => setShowForgotModal(false)}
                    type="button"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <>
                  <p className="auth-modal__message">
                    Enter your registered email address to receive password recovery instructions.
                  </p>
                  <div className="auth-modal__input-group">
                    <label className="auth-field-label" htmlFor="recovery-email">
                      Registered Email
                    </label>
                    <input
                      className="auth-input"
                      id="recovery-email"
                      onChange={(e) => setForgotEmail(e.target.value)}
                      placeholder="name@company.com"
                      type="email"
                      value={forgotEmail}
                    />
                  </div>

                  <div className="auth-modal__support-note">
                    <Phone aria-hidden="true" size={14} />
                    <span>
                      Urgent assistance: Call hotline{" "}
                      <a href={`tel:${company.hotline}`}>{company.hotline}</a>
                    </span>
                  </div>

                  <div className="auth-modal__actions">
                    <button
                      className="button button--glass"
                      onClick={() => setShowForgotModal(false)}
                      type="button"
                    >
                      Cancel
                    </button>
                    <button
                      className="button button--frost"
                      disabled={!forgotEmail.trim()}
                      onClick={() => setForgotSent(true)}
                      type="button"
                    >
                      Send Instructions
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
