
  function getRandomItem(myArray) {
  const randomItem = myArray[Math.floor(Math.random()*myArray.length)];

  const item = myArray[randomItem];
  return item;
  }

  const array = [
    "Apples",
    "Bananas",
    "Pears"
  ];

const result = getRandomItem(array);
console.log(result);
