export const getItemsList = () => {
    const elementsList = document.querySelectorAll('.technology');
    console.dir(elementsList);
};

getItemsList();

export const getItemsArray = () => {
   const elementsItemsArray = document.querySelectorAll('.tool');
console.dir(elementsItemsArray);
const arry = Array.from(elementsItemsArray);
console.log(arry);
};
getItemsArray();
