let tipCollection = []


const getTipData = () => {
    return fetch("http://localhost:8088/tip").then(
        (httpResponse) => {
            return httpResponse.json()
        }
    )
        .then(
            (arrayOfTip) => {
                //110 percent sure the data is back
                tipCollection = arrayOfTip
            }
        )
}


