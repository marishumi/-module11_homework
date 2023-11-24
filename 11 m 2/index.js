function IsPrime(num) {
    if (num <= 1 || num >= 1000) {
      return "данные неверны";
    } else {
      let b = Math.sqrt(num);
      for (let i = 2; i <= b; i++) {
        if (num % i === 0) {
          return "непростое число";
        }
      }
      return "простое число";
    }
  }
  
  console.log(IsPrime(4));