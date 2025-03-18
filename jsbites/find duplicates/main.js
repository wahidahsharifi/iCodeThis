function findAllDuplicates(arr) {
   const [unique, duplicate] = [[], []];
   // separates unique's & duplicate's
   arr.forEach((e) => unique.includes(e) && !duplicate.includes(e) ? duplicate.push(e) : unique.push(e));
   return duplicate;
}