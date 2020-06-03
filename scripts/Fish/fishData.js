const fishCollection = [
    {
        species: "Trigger Fish",
        length: 12,
        location: "Indonesia",
        picture: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.aquariumdomain.com%2FadSocial%2FPF.Base%2Ffile%2Fpic%2Fpages%2F2016%2F12%2F51c2f9a1c13270827a4de8e631fd9248_200_square.jpg%3Ft%3D5a25d5148fc62&f=1&nofb=1",
        food: "Baby squid",
        name: "Bubbles"
    },
    {
        species: "Parrot Fish",
        length: 8,
        location: "Sea of Google",
        picture: "https://i.ytimg.com/vi/y6tdGVTgmm4/maxresdefault.jpg",
        food: "Popcorn",
        name: "Angus"
    },
    {
        species: "Swordfish",
        length: 320,
        location: "Atlantic Ocean",
        picture: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.newsapi.com.au%2Fimage%2Fv1%2Fd1652aa3a1ce1a7d42ccd59201e919bb%3Fwidth%3D1024&f=1&nofb=1",
        food: "Herring",
        name: "Chester"
    },
    {
        species: "Angel Fish",
        length: 8,
        location: "Pacific Ocean",
        picture: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F0d%2FSilverangelfish.jpg%2F220px-Silverangelfish.jpg&f=1&nofb=1",
        food: "Plankton",
        name: "Andrew"
    },
    {
        species: "Elegant Corydoras",
        length: 3,
        location: "Caribbean Sea",
        food: "Algae",
        name: "Sweet",
        picture: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ebayimg.com%2Fimages%2Fg%2F8Z0AAOSwx2dYCMtZ%2Fs-l300.jpg&f=1&nofb=1"
    },
    {
        species: "Orange Roughy",
        length: 16,
        location: "Southern Ocean",
        picture: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Feu.savethehighseas.org%2Fwp-content%2Fuploads%2F2016%2F11%2F10070694863_63f0bb3ba1_o%25C2%25A9Alex-Rogers-450x450.jpg&f=1&nofb=1",
        food: "Anchovies",
        name: "Michael"
    },
    {
        species: "Tiger Shark",
        length: 8,
        location: "Pacific Ocean",
        picture: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia-cdn.tripadvisor.com%2Fmedia%2Fphoto-s%2F0b%2F4c%2Fce%2F3c%2Fsmall-shark.jpg&f=1&nofb=1",
        food: "Anchovies",
        name: "Sharky"
    },
    {
        species: "Queen Angel",
        length: 8,
        location: "Southern Ocean",
        picture: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.oXcQ2PdelHSVc3WDNJr_MwHaF7%26pid%3DApi&f=1",
        food: "Anchovies",
        name: "Queen B"
    },
    {
        species: "Wobblegong Fish",
        length: 8,
        location: "Southern Ocean",
        picture: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.RqcieSmq9IY2OEmXXax2wAHaEW%26pid%3DApi&f=1.jpg",
        food: "Anchovies",
        name: "Wobble"

    }
]

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
        return soldierFish;
}
    

// Any fish not a multiple of 3 or 5
    const nonHolyFish = () => {
        const regularFish = []

        for (const fish of fishCollection) {
            if (fish.length  % 3 != 0 && fish.length % 5 != 0) { 
                regularFish.push(fish)
            }

            
        }
         return nonHolyFish;
    }
