const getItemsList = () => {
  const elementsList = document.querySelectorAll(".technology");
  console.dir(elementsList);
  return elementsList;
};

getItemsList();

const getItemsArray = () => {
  const elementsItemsArray = document.querySelectorAll(".tool");
  console.dir(elementsItemsArray);
  const arry = Array.from(elementsItemsArray);
  return arry;
};
getItemsArray();
