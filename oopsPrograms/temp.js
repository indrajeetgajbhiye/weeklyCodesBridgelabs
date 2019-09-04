const fs = require('fs')
fs.readFile('./jsonFiles/temp.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("Error reading file from disk:", err)
        return
    }
    try {
        const grocery = JSON.parse(jsonString)
        // console.log("Anything", grocery. )
        console.log("The price of rice is: ", grocery.rice[0].name) 
} catch(err) {
        console.log('Error parsing JSON string:', err)
    }
})