const fs = require('fs');
const { toNamespacedPath } = require('path');

fs.readFile('./day3.txt', 'utf8', (err, data) => {

    const input1 = data.split('\n').map(item => {
        
        // item = vJrwpWtwJgWr hcsFMMfFFhFp
        // item.length = 24
        // item.length/2 = 12

        let tmp = [];
        tmp[0] = item.slice(0, (item.length/2)).split('')
        tmp[1] = item.slice((item.length/2), item.length).split('');
        return tmp; 
    });

    const input2 = data.split('\n');
    let groups = [];
    let group = [];
    for (let i = 0; i <= input2.length; i++) {
        if ( i !== 0 && i % 3 === 0) {
            groups.push(group);
            group = [];
        }
        group.push(input2[i]);    
    }

    // console.log(groups);
    
    // part1(input1);
    part2(groups);
});

function getPriority (letter) {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return letters.indexOf(letter) + 1;
}

function part1 (rucksacks) {

    let tmp = 0;

    rucksacks.forEach( (rucksack, i) => {
        const compartment1 = rucksack[0];
        const compartment2 = rucksack[1];
        let tmp2=[];

        compartment1.forEach(item=>{
            if ( compartment2.includes(item)) {
                if (!tmp2.includes(item)) {
                    tmp2.push(item);
                }
            }
        });

        tmp += getPriority(tmp2[0]);
        
    });

    console.log(tmp);
}

function getCommonLetter(arr) {
    // array of three items
    const newArr = arr.map(str=>str.split(''));

    const arrOfSingleLetters = newArr.map(item => {
        let arr = [];
        item.forEach(item=>{
            const idx = arr.findIndex(element => element.startsWith(item));
            if (idx === -1) arr.push(item);
        });
        return arr;
    })

    let val;

    arrOfSingleLetters[0].forEach((letter, i)=>{
        let counter = 1;
        if (arrOfSingleLetters[1].indexOf(letter) !== -1) counter++;
        if (arrOfSingleLetters[2].indexOf(letter) !== -1) counter++;
        if (counter === 3) val = letter;
    });

    return val;

}

function part2 (data) {
    let total = 0;
    data.forEach(group=>{
        const letter = getCommonLetter(group);        
        total += getPriority(letter);
    })

    console.log(total);
};





    // let lettersArr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        
    // for (const key in obj) {
    //     if (Object.hasOwnProperty.call(obj, key)) {
            
    //         const index = lettersArr.indexOf(key);
    //         lettersArr = lettersArr.slice(index, index + 1);
            
    //         // if (  ) {

    //         // } else {

    //         // }
    //     }
    // }
    
    // console.log(obj);
