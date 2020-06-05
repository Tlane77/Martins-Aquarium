/*
Responsible for generating a list of fish HTML
representations, and putting in the browser
*/
const fishTypeDropdown = document.querySelector(".typeChoice")
const contentTarget = document.querySelector(".fishList")

const clearFishList = () => contentTarget.innerHTML = ""


fishTypeDropdown.addEventListener("change", (changeEvent) => {
    // Get the value of the option chosen by the user
    const userChoice = changeEvent.target.value

    //If the user chose Holy, clear the list and only show holy fish
    if (userChoice === "holy") {
      clearFishList();
      showHolyFish();
    } else if (userChoice === "soldiers") {
      clearFishList();
      showSoldierFish();
    } else if (userChoice === "regular") {
      clearFishList();
      showRegularFish();
    }
})



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
  showHolyFish()
  showSoldiers()
  showRegularFish()
};
