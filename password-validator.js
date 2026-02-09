/**
 * Password Validator v1.0
 *
 * Validates user passwords according to security requirements.
 */

function validatePassword(password) {
  const errors = [];

  // Check minimum length
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
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
