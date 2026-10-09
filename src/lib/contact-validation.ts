export type ContactSubmission = {
  name: string;
  email: string;
  message: string;
  company: string;
};

export type ValidationResult =
  | { success: true; data: ContactSubmission }
  | { success: false; message: string };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactSubmission(input: unknown): ValidationResult {
  if (typeof input !== "object" || input === null) {
    return { success: false, message: "Please check the form and try again." };
  }

  const candidate = input as Record<string, unknown>;
  const name = typeof candidate.name === "string" ? candidate.name.trim() : "";
  const email =
    typeof candidate.email === "string" ? candidate.email.trim() : "";
  const message =
    typeof candidate.message === "string" ? candidate.message.trim() : "";
  const company =
    typeof candidate.company === "string" ? candidate.company.trim() : "";

  if (name.length < 2 || name.length > 100) {
    return {
      success: false,
      message: "Enter a name between 2 and 100 characters.",
    };
  }

  if (email.length > 254 || !emailPattern.test(email)) {
    return { success: false, message: "Enter a valid email address." };
  }

  if (message.length < 10 || message.length > 5000) {
    return {
      success: false,
      message: "Your message must be between 10 and 5,000 characters.",
    };
  }

  if (company.length > 200) {
    return { success: false, message: "Please check the form and try again." };
  }

  return {
    success: true,
    data: { name, email, message, company },
  };
}
