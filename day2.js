const fs = require('fs');

fs.readFile('./day2.txt', 'utf8', (err, data) => {

    let input = data.split('\n')
        .map(item => {
            const split = item.split(' ').map(item => {
                if (item === 'A' || item === 'X') return 1;
                if (item === 'B' || item === 'Y') return 2;
                if (item === 'C' || item === 'Z') return 3;
            });
            return split;
        });
    
    part1(input);
    part2(input);
});

function part1 (data) {

    const results = data.map(item => {

        let total;
        const choice = item[1];
        const result = item.reduce((a,b)=> b-a);
        
        if (result === -2 || result === 1) { 
            total = 6 + choice;
        } else if (result === -1 || result === 2) {
            total = 0 + choice;
        } else {
            total = 3 + choice;
        }
        
        return total;

    }).reduce((a,b)=> a+b);

    console.log('Part 1', results);

}

function part2 (data) {

    const results = data.map(item => {
        let total;
        const elfChoice = item[0];
        const outcome = item[1];
        const myChoice = getMyChoice(elfChoice, outcome);
        const result = myChoice - elfChoice;

        if (result === -2 || result === 1) { 
            total = 6 + myChoice;
        } else if (result === -1 || result === 2) {
            total = 0 + myChoice;
        } else {
            total = 3 + myChoice;
        }
        
        return total;

    }).reduce((a,b)=> a+b);

    console.log('Part 2', results);

}

function getMyChoice(elfChoice, outcome) {
    if (elfChoice === 1) {
        if (outcome === 1) return 3;
        if (outcome === 2) return 1;
        if (outcome === 3) return 2;
    } else if (elfChoice === 2) {
        if (outcome === 1) return 1;
        if (outcome === 2) return 2;
        if (outcome === 3) return 3;       
    } else {
        if (outcome === 1) return 2;
        if (outcome === 2) return 3;
        if (outcome === 3) return 1;
    }
}