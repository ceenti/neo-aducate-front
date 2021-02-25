async function getSchools(callback){
    await fetch("http://localhost:8080/admins/schools", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : localStorage.getItem('Token')
        },
        method: 'GET'
    })
    .then(response => {
        if(!response.ok){
            return response.json()
            .then(error => {throw new Error(error.message)})
        }
        return response.json()
    })
    .then( json => callback(json.data))
    .catch( error => console.log(error)) 
}

async function getSchoolById(id, callback){
    await fetch(`http://localhost:8080/admins/schools/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : localStorage.getItem('Token')
        },
        method: 'GET'  
    })
    .then( response => {
        if(!response.ok){
            return response.json()
            .then(error => {throw new Error (error.message)})
        }
        return response.json()
    })
    .then( json => callback(json.data))
    .catch( error => console.log(error))
}
async function getAllTiers(callback){
    await fetch('http://localhost:8080/admins/tiers', {
        headers : {
            'Content-Type' : 'application/json',
            'Authorization' : localStorage.getItem('Token')
        },
        method : 'GET'
    })
    .then ( response => {
        if(!response.ok){
            return response.json()
            .then(error => {throw new Error (error.message)})
        }
        return response.json
    })
    .then( json => callback(json.data))
    .catch( error => console.log(error) )
}

async function getTierById(id){
    await fetch(`http://localhost:8080/admins/tiers/${id}`, {
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : localStorage.getItem('Token')
        },
        method: 'GET'
    })
    .then( response => {
        if(!response.ok){
            return response.json()
            .then(error => {throw new Error (error.message)})
        }
        return response.json
    })
    .then( json => console.log(json.data))
    .catch( error => console.log(error))
}


export {
    getSchools,
    getSchoolById,
    getTierById,
    getAllTiers
}