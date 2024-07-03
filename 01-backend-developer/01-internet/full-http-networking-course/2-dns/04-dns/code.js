function getDomainNameFromURL(url) {
    const urlObj = new URL(url)
    return urlObj.hostname
}

export { getDomainNameFromURL }