/*
    This function will convert a single quote object to an
    HTML representation and return it
*/
const quoteConverter = (quoteObject) => {
  const quoteHTMLRepresentation = `<section class="quote">
        <div class="quote__details">
            ${quoteObject.quote}
        </div>
    </section>`;

  return quoteHTMLRepresentation;
};
