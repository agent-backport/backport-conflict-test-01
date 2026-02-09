/**
 * Password Validator v1.0
 *
 * Validates user passwords according to security requirements.
 */

function validatePassword(password) {
  const errors = [];

  // Check minimum length (v1.0: 8 characters)
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }

  // Check for uppercase letter
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }

  // Check for lowercase letter
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }

  // Check for number
  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain at least one number');
  }

  // Check for special character
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    errors.push('Password must contain at least one special character');
  }

  if (errors.length > 0) {
    return {
      valid: false,
      errors: errors
    };
  }

  return {
    valid: true,
    errors: []
  };
}

module.exports = { validatePassword };
