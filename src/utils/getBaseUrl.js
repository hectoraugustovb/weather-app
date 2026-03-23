const getBaseUrl = (isLocalHost) => {
    const apiUrl = "https://api.ipgeolocation.io"
    const proxyUrl = "http://localhost:3000"

    return isLocalHost ? proxyUrl : apiUrl
}

export default getBaseUrl