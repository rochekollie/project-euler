function multiplesOf3and5(number) {
    const multiples = [];
    for (let i = 1; i < number; i++) {
        if(i % 3 === 0 || i % 5 === 0){
            multiples.push(i);
        }
    }

    return multiples.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });
}

console.log(multiplesOf3and5(10)); // 23

console.log(multiplesOf3and5(49)); // 543

console.log(multiplesOf3and5(1000)); // 233168

console.log(multiplesOf3and5(8456)); // 16687353

console.log(multiplesOf3and5(19564)); // 89301183