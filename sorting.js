import { getLicenses, insertLicense } from "./Controllers/licenseController";

export async function sortBySummary() {
    console.log('sortBySummary was called')
    const json = await getLicenses()
    console.log(json)
    console.log(json[1])

}

export async function sortByOwner() {
    console.log('sortByOwner was called')

}

export async function sortByExpirationDate() {
    console.log('sortByExpirationDate was called')
}