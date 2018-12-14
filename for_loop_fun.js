//The below's gonna log 1 twice.
for (var i=0; i<2; i++) {
    setTimeout(()=>console.log(i));
}

/*
Why?

*/


//The below's gonna log 0 & 1 respectively.
for (let i=0; i<2; i++) {
    setTimeout(()=>console.log(i));
}

/*
Why?

*/
