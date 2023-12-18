# caesar_cipher


This is a simple canister implementing the Caesar Cipher encryption and decryption functions for educational purposes.

## Prerequisites

Before running the program, make sure you have the following installed:

- DFINITY SDK (DFX): Follow the installation instructions [here](https://sdk.dfinity.org/docs/quickstart/local-quickstart.html).

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/ven8462/caesar_cipher_in_ICP.git
    cd caesar_cipher
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Deploy the canister:

    ```bash
    dfx deploy
    ```

## Using the Caesar Cipher Canister

To interact with the Caesar Cipher canister, you can use the Candid UI.

1. Open the Candid UI by visiting `http://localhost:<your-candid-ui-port>` in your web browser.

2. Navigate to the `encrypt` or `decrypt` methods.

3. Enter the text and shift values in the provided input fields.

4. Click the "Query" button.

## Example Commands

### Encrypt

To encrypt a message "hello" with a shift of 1:

```bash
dfx canister call caesar_cipher encrypt '("hello", "1")'

Happy Coding!!👌
