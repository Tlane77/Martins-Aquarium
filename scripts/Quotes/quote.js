/*
    This function will convert a single quote object to an
    HTML representation and return it
*/
const quoteConverter = (quoteObject) => {
  const locationHTMLRepresentation = `<section class="location">
        <div class="">
            <img class="quote__picture" src=${quoteObject.picture}
                alt="${quoteObject.name} the ${quoteObject.details}" />
        </div>

        <div class="quote__details">
            ${quoteObject.details}
        </div>
    </section>`;

  return quoteHTMLRepresentation;
};
