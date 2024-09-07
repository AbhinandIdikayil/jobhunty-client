import CryptoJS from 'crypto-js';
const secretKey = process.env.CRYPTO as string;

export const encryptValue = (value: string) => {
  return CryptoJS.AES.encrypt(value, secretKey).toString();
};


export const decryptValue = (encryptedValue: string) => {
  const bytes = CryptoJS.AES.decrypt(encryptedValue, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};

