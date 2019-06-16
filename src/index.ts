export function decode(str: string): Buffer {
  return Buffer.from(str.replace(/\-/g, "+").replace(/_/g, "/"), "base64");
}

export function encode(buf: Buffer): string {
  return buf
    .toString("base64")
    .replace(/\//g, "_")
    .replace(/\+/g, "-")
    .replace(/=+$/, "");
}
