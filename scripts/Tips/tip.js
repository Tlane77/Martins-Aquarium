/*
    This function will convert a single tips object to an
HTML representation and return it
    */
const tipConverter = (tipObject) => {

    const tipHTMLRepresentation = `<section class="tip">
        <div class="">
            <img class="tip__picture" src=${tipObject.picture}
                alt="${tipObject.name} the ${tipObject.tip}" />
        </div>
        <div class="underTheBanner__right">
             ${locationObject.tip}
        </div>
    </section>`

    return tipHTMLRepresentation

}