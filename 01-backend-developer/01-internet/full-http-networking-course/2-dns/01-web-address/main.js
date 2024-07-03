import { fetchIPAddress } from "./code.js";

const domain = "example.com"
const ipAddress = await fetchIPAddress(domain)
if (!ipAddress) {
    console.log("something went wrong in fetchIPAddress")
} else {
    console.log(`found IP address for domain ${domain}: ${ipAddress}`);
}