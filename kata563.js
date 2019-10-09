// Kata: 563. Growth of population

function nbYear(p0, percent, aug, p){
    var years = 0;
    percent = percent / 100;
    
    while(p0 < p) {
        p0 = p0 + (p0 * percent) + aug
        years++
    }
    return(years);
}


// more efficient way:
function nbYear(p0, percent, aug, p){
    for (var y = 0 ; p0 < p ; y++) p0 = p0 + (p0 * (percent/100)) + aug;
    return y;
}

console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
console.log(nbYear(1000, 2, 50, 1200));