
export const getPoem = () => {
    return new Promise((resolve, reject) => {
        fetch("http://ShakeItSpeare.com/api/poem")
            .then(e => {
                if (e.ok) {
                    resolve(e)
                } else {
                    reject(e)
                }
            })
            .catch(e => console.log("ERR::", e))
    })
}


//http://api.openweathermap.org/data/2.5/weather?zip=60614,us&appid=052f26926ae9784c2d677ca7bc5dec98



export const getWeather = () => {
    return new Promise((resolve, reject) => {
        fetch("http://api.openweathermap.org/data/2.5/weather?zip=60614,us&appid=052f26926ae9784c2d677ca7bc5dec98")
            .then(e => {
                if (e.ok) {
                    resolve(e)
                } else {
                    reject(e)
                }
            })
            .catch(e => console.log("ERR::", e))
    })
}