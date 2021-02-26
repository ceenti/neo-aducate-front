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

async function updateSchool(data){
    const {_id} = data
    await fetch(`http://localhost:8080/admins/schools/${_id}`, {
        headers : {
            'Content-Type' : 'application/json',
            'Authorization' : localStorage.getItem('Token')
        },
        method: 'PATCH',
        body: JSON.stringify(data)
    })
    .then( response => {
        if(!response.ok){
            return response.json()
            .then(error => {throw new Error (error.message)})
        }
        return response.json()
    })
    .then( json => json.data)
    .catch( error => console.log(error))
}

async function getAllMemberships(callback){
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
        return response.json()
    })
    .then( json => callback(json.data))
    .catch( error => console.log(error) )
}

async function getMembershipById(id, callback) {
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
        return response.json()
    })
    .then( json => callback(json.data))
    .catch( error => console.log(error))
}

async function updateMembership(data) {
    const {_id} = data;
    await fetch(`http://localhost:8080/admins/tiers/${_id}`, {
        headers : {
            'Content-Type' : 'application/json',
            'Authorization' : localStorage.getItem('Token')
        },
        method: 'PATCH',
        body: JSON.stringify(data)
    })
    .then( response => {
        if(!response.ok){
            return response.json()
            .then(error => {throw new Error (error.message)})
        }
        return response.json()
    })
    .then( json => json.data)
    .catch( error => console.log(error))
}

async function getStudentsBySchool(id, callback) {
    await fetch(`http://localhost:8080/admins/schools/${id}/students`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('Token')
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

async function createStudent(student) {
    console.log(student)
    await fetch(`http://localhost:8080/admins/students`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('Token')
        },
        method: 'POST',
        body: JSON.stringify(student)
    })
    .then( response => {
        if(!response.ok){
            return response.json()
            .then(error => {throw new Error (error.message)})
        }
        return response.json()
    })
    .then( json => json.data)
    .catch( error => console.log(error))
}

export {
    getSchools,
    getSchoolById,
    getMembershipById,
    getAllMemberships,
    updateMembership,
    updateSchool,
    getStudentsBySchool,
    createStudent
}
