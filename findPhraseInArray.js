const findSinglePhrasePosition = (array, phrase) => {
  return array.findIndex((e) => e === phrase);
};

const filterItemsIncludingPhrase = (array, phrase) => {
  return array.filter((array) =>
    array.toLowerCase().includes(phrase.toLowerCase())
  );
};

const app = () => {
  const inputData = [
    "stwórz",
    "sobie",
    "tutaj",
    "więcej",
    "wyrazów",
    "TUTAJ",
    "co",
    "by",
    "móc",
    "zadanie",
    "dobrze",
    "poprawnie",
    "wykonać",
    "nie",
    "źle",
  ];

  const findPhraseInArray = (array, phrase) => {
    const result = [];
    if (!Array.isArray(array) || array.length < 1) {
      return console.error("'Array' musi być tablicą z ilością elementów > 0");
    }
    const filteredArray = filterItemsIncludingPhrase(array, phrase);
    if (filteredArray.length === 0) {
      return console.error("Szukana fraza nie występuje w podanej tablicy!");
    }
    filteredArray.forEach((element) => {
      result.push([findSinglePhrasePosition(array, element), element]);
    });
    return result;
  };

  // weryfikacja
  console.log(findPhraseInArray(inputData, "tu"));
};

window.onload = () => app();
