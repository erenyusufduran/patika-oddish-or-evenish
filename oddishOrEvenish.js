function oddishOrEvenish(number) {
  sum = 0;
  const arr = Array.from(String(number));
  arr.map((item) => {
    sum += Number(item);
  });
  if (sum % 2 == 0) {
    console.log("Even");
    return "Even";
  }
  console.log("Odd");
  return "Odd";
}

oddishOrEvenish(27);
