let message = "There is no war in Ba Sing Se"
let array = message.split(' ')
console.log(array.length)

let countries= ['China','Japan','South Korea','Vietnam','Malaysia']
let capital = ['Beijing','Tokyo','Seoul','Hanoï','Kuala Lumpur']

for (let i = 0; i < countries.length; i++) {
    counandcapi(i);
}
function counandcapi(i) {
    console.log(countries[i] + ' has the capital named ' + capital[i])
}

let randomnumber = Math.floor(Math.random() * 5);
function fate(randomnumber) {
    if (randomnumber === 0 ) {
        console.log('a certain victory')
    } else if( randomnumber === 1) {
        console.log('a not so certain victory')
    }else if (randomnumber === 2) {
        console.log('an uneasy victory')
    } else {
        console.log('your fate is unclear, o chosen undead')
    }
}
fate(randomnumber)

const winter = ['december', 'january', 'february']
const spring = ['march', 'april', 'may']
const summer = ['june', 'july', 'august']
const fall = ['september', 'october', 'november']

function checkseason(month) {
    if ( winter.includes(month)) {
        console.log('we are in winter')
    } else if(spring.includes(month)) {
        console.log('we are in spring')
    }else if(summer.includes(month)) {
        console.log('we are in summer')
    }else if(fall.includes(month)) {
        console.log('we are in fall')
    } else {
        console.log(month + ' is not a valid month')
    }
}
checkseason('august')