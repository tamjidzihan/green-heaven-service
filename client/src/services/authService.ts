/**
 * Authentication Service for Green Heaven Service
 * 
 * ============================================================================
 * REQUIRED BACKEND API CONTRACT SPECIFICATION
 * ============================================================================
 * 
 * 1. POST /api/auth/login
 *    Request Body (JSON):
 *    {
 *      "email": "user@example.com",
 *      "password": "Password123!",
 *      "rememberMe": true
 *    }
 *    Success Response (200 OK):
 *    {
 *      "user": {
 *        "id": "usr_...",
 *        "email": "user@example.com",
 *        "fullName": "MD. Rabul Karim",
 *        "phone": "+8801711348400"
 *      },
 *      "token": "<jwt-or-session-token>"
 *    }
 *    Error Responses:
 *    - 401 Unauthorized: { "message": "Invalid email or password." }
 *    - 422 Unprocessable: { "message": "Validation failed.", "fieldErrors": { "email": "Invalid email" } }
 *    - 429 Too Many Requests: { "message": "Too many failed attempts. Please try again later." }
 * 
 * 2. POST /api/auth/register
 *    Request Body (JSON):
 *    {
 *      "fullName": "MD. Rabul Karim",
 *      "email": "user@example.com",
 *      "phone": "+8801711348400", // optional
 *      "password": "Password123!",
 *      "confirmPassword": "Password123!",
 *      "agreeToTerms": true
 *    }
 *    Success Response (201 Created):
 *    {
 *      "user": {
 *        "id": "usr_...",
 *        "email": "user@example.com",
 *        "fullName": "MD. Rabul Karim",
 *        "phone": "+8801711348400"
 *      },
 *      "message": "Account created successfully. Please verify your email if required.",
 *      "token": "<jwt-or-session-token>" // if immediate session is granted
 *    }
 *    Error Responses:
 *    - 409 Conflict: { "message": "An account with this email address already exists." }
 *    - 422 Unprocessable: { "message": "Validation failed.", "fieldErrors": { ... } }
 * 
 * 3. POST /api/auth/forgot-password (Optional / Future)
 *    Request Body (JSON):
 *    { "email": "user@example.com" }
 *    Success Response (200 OK):
 *    { "message": "If this email is registered, password recovery instructions have been sent." }
 * ============================================================================
 */

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterData {
  fullName: string;
  email: string;
  phone?: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

export interface AuthUser {
  id: string;
  email: string;
  fullName: string;
  phone?: string;
}

export interface AuthResponse {
  user: AuthUser;
  token?: string;
  message?: string;
}

export interface AuthError {
  message: string;
  fieldErrors?: Record<string, string>;
  code?: string;
}

/**
 * Resolves the base API URL from environment variables if configured.
 */
const env = (import.meta as unknown as { env?: Record<string, string> }).env;
const API_BASE_URL = (env?.VITE_AUTH_API_URL || env?.VITE_API_URL || "").trim();

export const authService = {
  /**
   * Check whether a live authentication API endpoint is configured.
   */
  hasConfiguredBackend(): boolean {
    return Boolean(API_BASE_URL);
  },

  /**
   * Submit user login credentials to the authentication backend.
   */
  async login(credentials: LoginCredentials): Promise<{ data?: AuthResponse; error?: AuthError }> {
    if (!API_BASE_URL) {
      return {
        error: {
          code: "BACKEND_UNAVAILABLE",
          message:
            "Authentication backend service is currently pending integration. Live user sign-in requires an active API endpoint (configure VITE_AUTH_API_URL).",
        },
      };
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const json = await response.json().catch(() => null);

      if (!response.ok) {
        return {
          error: {
            code: `HTTP_${response.status}`,
            message:
              json?.message ||
              (response.status === 401
                ? "Invalid email or password."
                : "Unable to complete sign-in request. Please try again later."),
            fieldErrors: json?.fieldErrors,
          },
        };
      }

      return { data: json };
    } catch {
      return {
        error: {
          code: "NETWORK_ERROR",
          message: "Network error: Unable to connect to the authentication server. Please check your connection.",
        },
      };
    }
  },

  /**
   * Submit registration data to create a new user account.
   */
  async register(data: RegisterData): Promise<{ data?: AuthResponse; error?: AuthError }> {
    if (!API_BASE_URL) {
      return {
        error: {
          code: "BACKEND_UNAVAILABLE",
          message:
            "Account registration backend service is currently pending integration. Live registration requires an active API endpoint (configure VITE_AUTH_API_URL).",
        },
      };
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await response.json().catch(() => null);

      if (!response.ok) {
        return {
          error: {
            code: `HTTP_${response.status}`,
            message:
              json?.message ||
              (response.status === 409
                ? "An account with this email address already exists."
                : "Unable to complete account registration. Please check your information and try again."),
            fieldErrors: json?.fieldErrors,
          },
        };
      }

      return { data: json };
    } catch {
      return {
        error: {
          code: "NETWORK_ERROR",
          message: "Network error: Unable to connect to the authentication server. Please check your connection.",
        },
      };
    }
  },
};
