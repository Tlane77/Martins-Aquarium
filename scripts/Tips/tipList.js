/*
Responsible for generating a list of tipHTML
representations, and putting in the browser
*/

const tipList = () => {
  // Iterate the collection of location objects
  for (const currentTipObject of tipCollection) {
    // Convert the current tip to its HTML representation
    const tipHTML = tipConverter(currentTipObject);

    // Find the <article> element in index2.html
    const tipArticleElement = document.querySelector(".tipList");

    // Put the tip HTML representation inside the <article> element
    tipArticleElement.innerHTML += tipHTML;
  }
};


