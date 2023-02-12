import { getLicenses, insertLicense } from "./Controllers/licenseController";

export async function sortBySummary() {
    console.log('sortBySummary was called')
    let json = await getLicenses()
    const jsonCopy = await getLicenses()
    let SummaryMap = new Map()
    let SummaryArray = []
    for (let i = 0; i < json.length; i++) {
        SummaryMap.set(json[i].title, i)
        SummaryArray.push(json[i].title)
    }
    SummaryArray = SummaryArray.sort()
    for (let i = 0; i < json.length; i++) {
        console.log(SummaryMap.get(SummaryArray[i]))
        json[i] = jsonCopy[SummaryMap.get(SummaryArray[i])]
    }
    insertLicense(json)

    document.getElementById('sortBySummary').className += " active"
    document.getElementById('sortByOwner').className = document.getElementById('sortByOwner').className.replace(" active", "")
    document.getElementById('sortByExpirationDate').className = document.getElementById('sortByExpirationDate').className.replace(" active", "")
}

export async function sortByOwner() {
    console.log('sortByOwner was called')
    let json = await getLicenses()
    const jsonCopy = await getLicenses()
    let LicOwnerMap = new Map()
    let LicOwnerArray = []
    for (let i = 0; i < json.length; i++) {
        LicOwnerMap.set(json[i].lic_owner, i)
        LicOwnerArray.push(json[i].lic_owner)
    }
    LicOwnerArray = LicOwnerArray.sort()
    for (let i = 0; i < json.length; i++) {
        console.log(LicOwnerMap.get(LicOwnerArray[i]))
        json[i] = jsonCopy[LicOwnerMap.get(LicOwnerArray[i])]
    }
    insertLicense(json)

    document.getElementById('sortBySummary').className = document.getElementById('sortBySummary').className.replace(" active", "")
    document.getElementById('sortByOwner').className += " active"
    document.getElementById('sortByExpirationDate').className = document.getElementById('sortByExpirationDate').className.replace(" active", "")
}

export async function sortByExpirationDate() {
    console.log('sortByExpirationDate was called')
    let json = await getLicenses()
    const jsonCopy = await getLicenses()
    let ExpirationDateMap = new Map()
    let ExpirationDateArray = []
    for (let i = 0; i < json.length; i++) {
        ExpirationDateMap.set(json[i].expiration_date, i)
        ExpirationDateArray.push(json[i].expiration_date)
    }
    ExpirationDateArray = ExpirationDateArray.sort()
    for (let i = 0; i < json.length; i++) {
        console.log(ExpirationDateMap.get(ExpirationDateArray[i]))
        json[i] = jsonCopy[ExpirationDateMap.get(ExpirationDateArray[i])]
    }
    insertLicense(json)

    document.getElementById('sortBySummary').className = document.getElementById('sortBySummary').className.replace(" active", "")
    document.getElementById('sortByOwner').className = document.getElementById('sortByOwner').className.replace(" active", "")
    document.getElementById('sortByExpirationDate').className += " active"
}