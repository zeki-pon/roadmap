import { getItemData, generateKey, logItems } from "./code.js";

const apiKey = generateKey()
const itemURL = 'https://api.boot.dev/v1/courses_rest_api/learn-http/items'
const items = await getItemData(itemURL, apiKey)

logItems(items)