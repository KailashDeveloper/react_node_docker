// src/utils/helperUtils.js

/**
 * Generates a random alphanumeric string of a given length range.
 * @returns {string} Random string between 15 and 20 characters.
 */
export function generateRandomString() {
    const length = Math.floor(Math.random() * 6) + 15; // Random length between 15 and 20
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // Character pool
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }
  
    return result;
  }

// src/utils/helperUtils.js

/**
 * Formats the current date into 'YYYY-MM-DD' format.
 * @param {Date} date - The date to format (default is the current date).
 * @returns {string} Formatted date string in 'YYYY-MM-DD' format.
 */
export function dbformatCurrentDate(date = new Date()) {
    const year = date.getFullYear(); // Get the full year (e.g., 2024)
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Get the month (1-indexed, padded)
    const day = String(date.getDate()).padStart(2, '0'); // Get the day (padded)
    
    return `${year}-${month}-${day}`; // Combine into YYYY-MM-DD format
  }
  