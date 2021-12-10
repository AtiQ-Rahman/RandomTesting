function csvJSON(csv) {
    const lines = csv.split('\n')
    const result = []

    for (let i = 1; i < lines.length; i++) {
        if (!lines[i])
            continue

        const row = lines[i].split(',')
        const obj = {
            "Date": row[0],
            "Data": {
                "taka": {
                    "USD": row[2],
                    "EUR": row[3]
                },
                "rupee": {
                    "USD": row[5],
                    "EUR": row[6]
                }
            }


        };
        result.push(obj)
    }
    return result
}
let csv = "Date,Coin Id,Price USD,PRICE EUR,Coin Id,Price USD,Price EUR\n12-01-2021,Taka,81.27USD,98EUR,Rupee,56.34USD,67.9 EUR\n13-01-2021,Taka,81.27USD,98EUR,Rupee,56.34USD,67.9 EUR"
let json=csvJSON(csv);
console.log(json[0].Data.taka)