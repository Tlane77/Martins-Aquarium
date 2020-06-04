

getFishData().then(
    () => {
        console.log("inside", fishCollection)
        fishList()
    }
)
    
console.log("outside", fishCollection)
    

getLocationData().then(
    () => {
  console.log("inside", locationCollection);
  locationList()
    }
)
console.log("outside", locationCollection);

getTipData().then(
    () => {
  console.log("inside", tipCollection);
  tipList()
    }
)
console.log("outside", tipCollection);

getQuoteData().then(
    () => {
  console.log("inside", quoteCollection);
  quoteList()
    }
)
console.log("outside", quoteCollection);