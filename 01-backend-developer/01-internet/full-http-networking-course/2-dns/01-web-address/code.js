async function fetchIPAddress(domain) {
    const response = await fetch(`https://cloudflare-dns.com/dns-query?name=${domain}&type=A`, {
        headers: {
            "accept": "application/dns-json"
        }
    })
    const responseObj = await response.json()

    for (const record of responseObj.Answer) {
        return record.data
    }
    return null
}

export { fetchIPAddress }