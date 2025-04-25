/**
 * Validates a TikTok username
 * @param username - The TikTok username to validate
 * @returns boolean indicating if the username is valid
 */
export const isValidTiktokUsername = (username: string): boolean => {
  if (!username) return false;
  
  // TikTok usernames typically start with @ and contain letters, numbers, and underscores
  const tiktokUsernamePattern = /^@?[a-zA-Z0-9_]{2,24}$/;
  return tiktokUsernamePattern.test(username);
};

/**
 * Validates a card serial number
 * @param cardNumber - The card number to validate
 * @returns boolean indicating if the card number is valid
 */
export const isValidCardNumber = (cardNumber: string): boolean => {
  if (!cardNumber) return false;
  
  // Card numbers are typically numeric
  const cardNumberPattern = /^[0-9]+$/;
  return cardNumberPattern.test(cardNumber);
};

/**
 * Validates a CVV
 * @param cvv - The CVV to validate
 * @returns boolean indicating if the CVV is valid
 */
export const isValidCVV = (cvv: string): boolean => {
  if (!cvv) return false;
  
  // CVVs are typically 3-4 digits
  const cvvPattern = /^[0-9]{3,4}$/;
  return cvvPattern.test(cvv);
};