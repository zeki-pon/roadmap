import { getItemData, generateKey, logItems } from "./code.js"

const bootdevAPIDomain = "api.boot.dev"
const apiKey = generateKey()
const items = await getItemData(bootdevAPIDomain, apiKey)

logItems(items)