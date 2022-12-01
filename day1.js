const fs = require('fs');

fs.readFile('./day1.txt', 'utf8', (err, data) => {

    let input = data
        .split('\n\n')
        .map(item => item.split('\n').map(item => parseInt(item,10)));
    
    day1(input);
});

function day1 (data) {

    const totals = data.map(item => {
        const sum = item.reduce((a,b)=>{
            return a+b;
        });
        return sum;
    })
    
    totals.sort((a,b)=>b-a);    
    
    console.log('Part 1', totals[0]);
    console.log('Part 2', totals[0] + totals[1] + totals[2]);

}