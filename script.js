for (let i = 0; i< 100 ; i++) {
    fizzbuzz(i);
}

function fizzbuzz(i) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz')
    } else if(i % 3 === 0) {
        console.log('fizzbuzz')
    } else if( i % 5 === 0) {
        console.log('buzz')
    } else {
        console.log(i)
    }
}