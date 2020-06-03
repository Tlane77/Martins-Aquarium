/*
Responsible for generating a list of fish HTML
representations, and putting in the browser
*/



// Function to show holy fish in the browser
const showHolyFish = () => {
    const fishObjectsArray = mostHolyFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fishConverter(fishObject)
         const fishArticleElement = document.querySelector(".fishList");
        fishArticleElement.innerHTML += fishHTMLRepresentation;
    }
}




// Function to show soldier fish in the browser
const showSoldiers = () => {
    const fishObjectsArray = soldierFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fishConverter(fishObject)
         const fishArticleElement = document.querySelector(".fishList");
        fishArticleElement.innerHTML += fishHTMLRepresentation;
    }
}

// Function to show common fish in the browser
const showRegularFish = () => {
    const fishObjectsArray = nonHolyFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fishConverter(fishObject)
         const fishArticleElement = document.querySelector(".fishList");
        fishArticleElement.innerHTML += fishHTMLRepresentation;
    }


    

}
const fishList = () => {
  // Invoke all three functions here
  showHolyFish();
  showSoldiers();
  showRegularFish();
};
