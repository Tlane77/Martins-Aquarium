/*
    This function will convert a single tips object to an
HTML representation and return it
    */
const tipConverter = (tipObject) => {

    const tipHTMLRepresentation = `<section class="tip">
        ${tipObject.details}
         </section>`

    return tipHTMLRepresentation

}