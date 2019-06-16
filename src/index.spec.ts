import { decode, encode } from "./index";

describe("base64url", () => {
  it("should base64 encode", () => {
    expect(encode(Buffer.from("test", "utf8"))).toEqual("dGVzdA");
  });

  it("should base64 decode", () => {
    expect(decode("dGVzdA")).toEqual(Buffer.from("test", "utf8"));
  });
});
