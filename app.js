function vocalCounter(string) {
    let aCounter = 0;
    let eCounter = 0;
    let iCounter = 0;
    let oCounter = 0;
    let uCounter = 0;
    let yCounter = 0;
    let æCounter = 0;
    let øCounter = 0;
    let åCounter = 0;

    for (let i=0; i < string.length; i++){
        let char = string[i].toLowerCase();
        if (char === 'a') aCounter++;
            else if (char === 'e') eCounter++;
            else if (char === 'i') iCounter++;
            else if (char === 'o') oCounter++;
            else if (char === 'u') uCounter++;
            else if (char === 'y') yCounter++;
            else if (char === 'æ') æCounter++;
            else if (char === 'ø') øCounter++;
            else if (char === 'å') åCounter++;
    }

    document.getElementById('vocals').innerHTML = 
    `a: ${aCounter}, e: ${eCounter}, i: ${iCounter}, o: ${oCounter}, 
    u: ${uCounter}, y: ${yCounter}, æ: ${æCounter}, ø: ${øCounter}, å: ${åCounter}`;

}  

vocalCounter("dette er en test før jeg må løse oppgaven på nytt");
