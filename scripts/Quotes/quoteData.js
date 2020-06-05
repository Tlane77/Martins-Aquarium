let quoteCollection = []


const getQuoteData = () => {
    return fetch("http://localhost:8088/quote").then(
        (httpResponse) => {
            return httpResponse.json()
        }
    )
        .then(
            (arrayOfQuote) => {
                //110 percent sure the data is back
                quoteCollection = arrayOfQuote
            }
        )
}











  