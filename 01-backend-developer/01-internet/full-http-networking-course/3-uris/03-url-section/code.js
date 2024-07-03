const validKey = ["protocol", "username", "password", "hostname", "port", "pathname", "search", "hash"]
function printURLParts(urlString) {
    const urlObj = new URL(urlString)
    for (const key in urlObj) {
        if (!validKey.includes(key)) continue
        console.log(`${key}: ${urlObj[key]}`)
    }
}

export { printURLParts }