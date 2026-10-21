import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export interface AuthFormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: string;
  hint?: string;
  icon?: LucideIcon;
  actionRight?: ReactNode;
}

export const AuthFormField = forwardRef<HTMLInputElement, AuthFormFieldProps>(
  ({ label, id, error, hint, icon: Icon, actionRight, required, className = "", ...props }, ref) => {
    const errorId = `${id}-error`;
    const hintId = `${id}-hint`;

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
          {Icon && (
            <span aria-hidden="true" className="auth-input-icon">
              <Icon size={17} />
            </span>
          )}
          <input
            aria-describedby={error ? errorId : hint ? hintId : undefined}
            aria-invalid={Boolean(error)}
            className={`auth-input${Icon ? " auth-input--with-icon" : ""}${className ? ` ${className}` : ""}`}
            id={id}
            ref={ref}
            required={required}
            {...props}
          />
        </div>

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

AuthFormField.displayName = "AuthFormField";
