import { Canister, query, text, Result, Ok, Err, nat8 } from 'azle';
import * as cipher from './cipher';

const CaesarCipher = Canister({
  // Custom Caesar Cipher functions

  // calling the encrypt function
  Encrypt : query([text, nat8], Result(text, text), (text, shift) => {
    if (shift == 0 || shift > 25) {
      return Err('Shift parameter must be a valid integer');
    }
    return Ok(cipher.encryptCaesar(text, shift));
  }),

  // calling the decrypt function
  Decrypt: query([text, nat8], Result(text, text), (text, shift) => {
    if (shift == 0 || shift > 25) {
      return Err('Shift parameter must be a valid integer');
    }
    return Ok(cipher.decryptCaesar(text, shift));
  }),
});

export default CaesarCipher;
