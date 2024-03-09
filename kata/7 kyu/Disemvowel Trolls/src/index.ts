export class Kata {
  static disemvowel(str: string): string {
    const separators = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    separators.forEach((separator) => {
      const rg = new RegExp(`\\${separator}`, "g");
      str = str.replace(rg, "");
    });
    return str;
  }
}
