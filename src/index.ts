// src/index.ts

import { Canister, query, text } from 'azle';
import * as cipher from './cipher';

export default Canister({
  // Custom Caesar Cipher functions

  // calling the encrypt function
  Encrypt : query([text, text], text, (text, shift) => {
    return cipher.encryptCaesar(text, parseInt(shift));
  }),


  // calling the decrypt function
  Decrypt: query([text, text], text, (text, shift) => {
    return cipher.decryptCaesar(text, parseInt(shift));
  }),
});
