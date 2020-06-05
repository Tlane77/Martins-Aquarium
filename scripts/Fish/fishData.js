let fishCollection = []

const getFishData = () => {
    console.log("getFishData")
    return fetch("http://localhost:8088/fish").then(
        (httpResponse) => {
            return httpResponse.json()
        }
    )
        .then(
            (arrayOfFish) => {
                //110 percent sure the data is back
                fishCollection = arrayOfFish
        }
    )
}


// 3, 6, 9, 12, etc... fish
const mostHolyFish = () => {
    const holyFish = []

    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
            console.log()
        }

       
    }
     return holyFish;
}

// 5, 10, 15, 20, 25, etc... fish
    const soldierFish = () => {
        const soldiers = []
     
        for (const fish of fishCollection) {
            if (fish.length % 5 === 0) {
                soldiers.push(fish)
            }
    
           
        }
        return soldiers;
}
    

// Any fish not a multiple of 3 or 5
    const nonHolyFish = () => {
        const regularFish = []

        for (const fish of fishCollection) {
            if (fish.length  % 3 != 0 && fish.length % 5 != 0) { 
                regularFish.push(fish)
            }

            
        }
         return regularFish;
    }
