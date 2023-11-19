import sha256 from "crypto-js/sha256";
import { enc } from "crypto-js/core";

function generateId(size: number) {
  const hash = sha256(Math.random().toString()).toString(enc.Hex);
  return hash.slice(0, size);
}

export default generateId;