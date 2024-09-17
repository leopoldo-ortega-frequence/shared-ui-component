//* This is to manipulate the print data from FW to Legacy
export const mutatePrintData = (printData) => {
    // transform the print data to fit needs
    // first, convert from row based to column based.
    const map = [];
    // annoying, but populate the placeholder
    printData.forEach((printBlock, i) => {   
        printBlock.options.map((option, j) => {
            if (!map[j]) {
                map.push([]);  // Initialize the sub-array if it doesn't exist
            }
            const total = option.total;
            //const name = values.name;
            delete option.total;
            delete option.name;
            map[j].push({
                total: total,
                name: printBlock.name,
                values: option
            })
        }) 
    });

    map.forEach((block, i) => {
        block.forEach((b, j) => {
              block[j].values = Object.keys(b.values).map(key => {
                return { key: key, value: b.values[key] };
        });
        })
      
    })  
    
    // remap publication data
    printData.forEach((print, idx) => {
        let grandTotal = 0;
        map[idx].forEach((block) => {
            grandTotal += block.total;
        })
        print["name"] = `Budget ${idx + 1}`
        print["total"] = grandTotal.toLocaleString();
        // getting total budget, normally this is provided in RFP but we need to remap here
        print["options"] = map[idx];
    });

    return printData;
}

export const demographicValues = {
    age: ['Under 18', '18-24', '25-34', '35-44', '45-54', '45-64', '65+'],
    gender: ['Male', 'Female'],
    income: ['Under $50k', '$50k-$100k', '$100k-$150k', '$150k+'],
    education: ['No College', 'College', 'Grad School'],
    family: ['No Kids', 'Has Kids']
}