const getItemsList = () => {
  const elementsList = document.querySelectorAll(".technology");
  console.dir(elementsList);
  return elementsList;
};

getItemsList();

const getItemsArray = () => {
  const elementsItemsArray = document.querySelectorAll(".tool");
  const elementsArray = Array.from(elementsItemsArray);
  console.dir(elementsArray);
  return elementsArray;
};
getItemsArray();
