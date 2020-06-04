let locationCollection = []


const getLocationData = () => {
    return fetch("http://localhost:8088/location").then(
        (httpResponse) => {
            return httpResponse.json()
        }
    )
        .then(
            (arrayOfLocation) => {
                //110 percent sure the data is back
                locationCollection = arrayOfLocation
            }
        )
}
