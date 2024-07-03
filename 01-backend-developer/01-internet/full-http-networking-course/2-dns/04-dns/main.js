import { getDomainNameFromURL } from "./code.js"

const bootdevURL = 'https://boot.dev/learn/learn-python'
const domainName = getDomainNameFromURL(bootdevURL)
console.log(`The domain name for ${bootdevURL} is ${domainName}`);