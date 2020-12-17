//using async / await

const getPuzzle = async (wordCount)=> {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error ('Unable to get puzzle ... async')
    }
}

//1. create a new func using async/await called getcurrentcountry
//2. should return a promise that resolves the country object for current location
//3. use async/await for the new function

const getCurrentCountry = async ()=>{
    const location = await getLocation()
    const country = await getCountry(location.country)
    return country
}



//convert the below to async func using await - no edits are made to app.js, use await instead of then


const getCountry = async (countryCode)=> {
    const response = await fetch('http://restcountries.eu/rest/v2/all')
            if (response.status === 200) {
               const data = await response.json()
                return data.find((country) => country.alpha2Code === countryCode)
            } else {
                throw new Error('unable to fetch country')
            }
    }
    



const getLocation = async () => {
    const response = await fetch('http://ipinfo.io/json?token=0b83d298eb8f93')
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to get current location')
        }
    }


 
    




