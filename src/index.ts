import { Canister, query, text } from 'azle';
import * as cipher from './cipher';

const CaesarCipher = Canister({
  // Custom Caesar Cipher functions

  // calling the encrypt function
  Encrypt : query([text, text], text, (text, shift) => {
    const shiftInt = parseInt(shift);
    if (isNaN(shiftInt)) {
      throw new Error('Shift parameter must be a valid integer');
    }
    return cipher.encryptCaesar(text, shiftInt);
  }),

  // calling the decrypt function
  Decrypt: query([text, text], text, (text, shift) => {
    const shiftInt = parseInt(shift);
    if (isNaN(shiftInt)) {
      throw new Error('Shift parameter must be a valid integer');
    }
    return cipher.decryptCaesar(text, shiftInt);
  }),
});

export default CaesarCipher;
