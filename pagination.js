const countHowManyBeforeAndAfter = (entriesOnPage) => {
  return Math.floor(entriesOnPage / 2);
};

const findStartOfSliceIndex = (actualPageIndex, entriesOnPage) => {
  return actualPageIndex - 1 - countHowManyBeforeAndAfter(entriesOnPage);
};

const findEndOfSliceIndex = (actualPageIndex, entriesOnPage) => {
  if (entriesOnPage % 2 == 0) {
    return actualPageIndex - 1 + countHowManyBeforeAndAfter(entriesOnPage);
  }
  return actualPageIndex + countHowManyBeforeAndAfter(entriesOnPage);
};

const app = () => {
  const data = [1, 2, 3, 4, 5, 6, 7];
  const settings = { actualPageIndex: 3, entriesOnPage: 4 };

  const paginateArray = (dataEntries, settings) => {
    if (
      dataEntries.length < settings.actualPageIndex ||
      settings.actualPageIndex <= 0
    ) {
      return console.error("Podanej strony nie ma w indexie");
    }
    // w wypadku gdy "entriesOnPage" jest większe niż array logiczne, żeby dało cały array, ale widzę też opcję z błędem, że podana wartość jest zbyt duża
    if (dataEntries.length < settings.entriesOnPage) {
      return dataEntries;
    }

    let startOfSlice = findStartOfSliceIndex(
      settings.actualPageIndex,
      settings.entriesOnPage
    );
    let endOfSlice = findEndOfSliceIndex(
      settings.actualPageIndex,
      settings.entriesOnPage
    );

    if (startOfSlice < 0) {
      startOfSlice = dataEntries[-1];
      endOfSlice = dataEntries[settings.entriesOnPage - 1];
    }
    if (endOfSlice > dataEntries.length) {
      startOfSlice =
        dataEntries[dataEntries.length - settings.entriesOnPage - 1];
      endOfSlice = dataEntries[dataEntries.length];
    }
    const entriesOnSelectedPage = dataEntries.slice(startOfSlice, endOfSlice);
    return entriesOnSelectedPage;
  };

  // sprawdzenie
  console.log(data);
  console.log(paginateArray(data, settings));
};

window.onload = () => app();
