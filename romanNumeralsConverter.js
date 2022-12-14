function convertToRoman(num) {
  let m = ["", "M", "MM", "MMM"];
  let c = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  let x = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  let i = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  let a1 = Math.floor(num / 1000);
  let a2 = Math.floor((num % 1000) / 100);
  let a3 = Math.floor((num % 100) / 10);

  let thousands = m[a1];
  let hundreds = c[a2];
  let tens = x[a3];
  let ones = i[num % 10];

  let ans = thousands + hundreds + tens + ones;

  return ans;
}

convertToRoman(36);
