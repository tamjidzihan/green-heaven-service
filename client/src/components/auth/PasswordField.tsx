import { forwardRef, useId, useState, type InputHTMLAttributes, type ReactNode } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

export interface PasswordFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  id?: string;
  error?: string;
  hint?: string;
  showStrength?: boolean;
  actionRight?: ReactNode;
}

interface StrengthAnalysis {
  score: number; // 0 to 4
  label: string;
  colorClass: string;
}

function calculateStrength(password: string): StrengthAnalysis {
  if (!password) {
    return { score: 0, label: "", colorClass: "" };
  }

  let score = 0;
  if (password.length >= 8) score += 1;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;

  switch (score) {
    case 1:
      return { score: 1, label: "Weak", colorClass: "auth-strength--weak" };
    case 2:
      return { score: 2, label: "Fair", colorClass: "auth-strength--fair" };
    case 3:
      return { score: 3, label: "Good", colorClass: "auth-strength--good" };
    case 4:
      return { score: 4, label: "Strong", colorClass: "auth-strength--strong" };
    default:
      return { score: 0, label: "Very Weak", colorClass: "auth-strength--weak" };
  }
}

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  ({ label, id: explicitId, error, hint, showStrength = false, actionRight, required, value, onChange, className = "", ...props }, ref) => {
    const generatedId = useId();
    const id = explicitId || generatedId;
    const [showPassword, setShowPassword] = useState(false);
    const errorId = `${id}-error`;
    const hintId = `${id}-hint`;

    const passwordVal = typeof value === "string" ? value : "";
    const strength = showStrength ? calculateStrength(passwordVal) : null;

    return (
      <div className="auth-field-group">
        <div className="auth-field-label-row">
          <label className="auth-field-label" htmlFor={id}>
            {label}
            {required && (
              <span aria-hidden="true" className="auth-field-required">
                *
              </span>
            )}
          </label>
          {actionRight}
        </div>

        <div className={`auth-input-wrapper${error ? " auth-input-wrapper--error" : ""}`}>
          <span aria-hidden="true" className="auth-input-icon">
            <Lock size={17} />
          </span>

          <input
            aria-describedby={error ? errorId : hint ? hintId : undefined}
            aria-invalid={Boolean(error)}
            className={`auth-input auth-input--with-icon auth-input--with-action${className ? ` ${className}` : ""}`}
            id={id}
            onChange={onChange}
            ref={ref}
            required={required}
            type={showPassword ? "text" : "password"}
            value={value}
            {...props}
          />

          <button
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="auth-password-toggle"
            onClick={() => setShowPassword((prev) => !prev)}
            tabIndex={0}
            type="button"
          >
            {showPassword ? <EyeOff aria-hidden="true" size={17} /> : <Eye aria-hidden="true" size={17} />}
          </button>
        </div>

        {showStrength && passwordVal.length > 0 && strength && (
          <div aria-live="polite" className="auth-strength-meter">
            <div className="auth-strength-bars">
              {[1, 2, 3, 4].map((step) => (
                <div
                  className={`auth-strength-bar${
                    strength.score >= step ? ` ${strength.colorClass}` : ""
                  }`}
                  key={step}
                />
              ))}
            </div>
            <span className={`auth-strength-label ${strength.colorClass}`}>
              Strength: {strength.label}
            </span>
          </div>
        )}

        {error ? (
          <p className="auth-field-error" id={errorId} role="alert">
            {error}
          </p>
        ) : hint ? (
          <p className="auth-field-hint" id={hintId}>
            {hint}
          </p>
        ) : null}
      </div>
    );
  },
);

PasswordField.displayName = "PasswordField";
