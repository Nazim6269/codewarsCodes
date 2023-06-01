function squareDigit(num) {
    const char = num.toString();
    console.log([...char]);
    return result = [...char].map((c) => parseInt(c) ** 2).join("-");
  }
  console.log(squareDigit(2112));

  // 