async function updateUser(baseURL, id, data, apiKey) {
    const fullURL = `${baseURL}/${id}`
    const resp = await fetch(fullURL, {
        method: "PUT",
        mode: "cors",
        headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await resp.json();
}

async function getUserById(baseURL, id, apiKey) {
    const fullURL = `${baseURL}/${id}`
    const resp = await fetch(fullURL, {
        method: "GET",
        mode: 'cors',
        headers: {
            'X-API-Key': apiKey
        }
    });
    return await resp.json();
}

// don't touch below this line

const userId = '2f8282cb-e2f9-496f-b144-c0aa4ced56db'
const generatedKey = generateKey()
const baseURL = 'https://api.boot.dev/v1/courses_rest_api/learn-http/users'

function generateKey() {
    const characters = 'ABCDEF0123456789'
    let result = ''
    for (let i = 0; i < 16; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
}

function logUser(user) {
    console.log(`User uuid: ${user.id}, Character Name: ${user.characterName}, Class: ${user.class}, Level: ${user.level}, PVP Status: ${user.pvpEnabled}, User name: ${user.user.name}`)
}

const userData = await getUserById(baseURL, userId, generatedKey)
logUser(userData)

console.log(`Updating user with id: ${userId}`)
userData.characterName = 'Henri'
userData.level = 100
userData.class = 'Painter'
userData.pvpEnabled = true
userData.user.name = 'Allan'
const updatedUser = await updateUser(baseURL, userId, userData, generatedKey)
logUser(updatedUser)
