// src/cipher.ts

// Function to encrypt a given text using the Caesar Cipher
export function encryptCaesar(text: string, shift: number): string {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    // Check if the character is a letter
    if (/[a-zA-Z]/.test(char)) {
      const isUpperCase = char === char.toUpperCase();
      const offset = isUpperCase ? 65 : 97;
      const encryptedChar = String.fromCharCode((char.charCodeAt(0) + shift - offset) % 26 + offset);
      result += isUpperCase ? encryptedChar : encryptedChar.toLowerCase();
    } else {
      // If the character is not a letter, leave it unchanged
      result += char;
    }
  }
  return result;
}

// Function to decrypt a given text using the Caesar Cipher
export function decryptCaesar(text: string, shift: number): string {
  // To decrypt, we substract the total number of alphabets(26) with the shift argument
  // and call the encryptCaesar function with the new value
  return encryptCaesar(text, 26 - shift);
}
