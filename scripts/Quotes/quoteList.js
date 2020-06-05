/*
Responsible for generating a quote of quoteHTML
representations, and putting in the browser
*/

const quoteList = () => {
  console.log("quoteList")
  // Iterate the collection of location objects
  for (const currentQuoteObject of quoteCollection) {
    // Convert the current location to its HTML representation
    const quoteHTML = quoteConverter(currentQuoteObject);

    // Find the <article> element in index2.html
    const quoteArticleElement = document.querySelector(".quoteList");

    // Put the location HTML representation inside the <article> element
    quoteArticleElement.innerHTML += quoteHTML;
  }
};
