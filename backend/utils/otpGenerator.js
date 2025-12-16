function generateRandomOTP() {
    // Generate a random integer between 100000 (inclusive) and 999999 (inclusive).
    const min = 100000;
    const max = 999999;
    
    // Math.random() generates a float between 0 (inclusive) and 1 (exclusive).
    // Multiplying by (max - min + 1) gives a range of possible values.
    // Adding min shifts the range to start at 100000.
    // Math.floor() ensures we get an integer.
    const otp = Math.floor(Math.random() * (max - min + 1)) + min;
    
    // Convert the number to a string before returning.
    return otp.toString();
  }
  
  module.exports = generateRandomOTP