const fs = require('fs');

fs.readFile('./day4.txt', 'utf8', (err, data) => {

    const input = data
        .split('\n')
        .map(item => {
            const split = item.split(',')
            .map(item => {
                let a = item.split('-');
                 return {min: parseInt(a[0], 10), max: parseInt(a[1], 10)};
            });
            return {
                set1: split[0],
                set2: split[1]
            }
        });
    // console.log(input);
    part1(input);
    // part2(input);
});





// 2-4,6-8
// 2-3,4-5
// 5-7,7-9
// 2-8,3-7
// 6-6,4-6
// 2-6,4-8


// const pairs = [
//     {
//         set1: {min: 2, max: 4},
//         set2: {min: 6, max: 8}
//     },
//     {
//         set1: {min: 2, max: 3},
//         set2: {min: 4, max: 5}
//     },
//     {
//         set1: {min: 5, max: 7},
//         set2: {min: 7, max: 9}
//     },
//     {
//         set1: {min: 2, max: 8},
//         set2: {min: 3, max: 7}
//     },
//     {
//         set1: {min: 6, max: 6},
//         set2: {min: 4, max: 6}
//     },
//     {
//         set1: {min: 2, max: 6},
//         set2: {min: 4, max: 8}
//     }
// ]
function part1 (pairs) {

    let part1 = [];
    let part2 = [];

    pairs.forEach( pair => {
        const a1 = pair.set1.min
        const a2 = pair.set1.max

        const b1 = pair.set2.min
        const b2 = pair.set2.max
        
        // see if set 1 is contained in set 2
        if (a1 >= b1 && a2 <= b2) {
            // console.log('Set 1 can be contained in set 2', pair);
            part1.push(pair);

            // see if set 2 is contained in set 1
        } else if (b1 >= a1 && b2 <= a2) {
            // console.log('Set 2 can be contained in set 1', pair)
            part1.push(pair);
        }





// const pairs = [
//     {
//         set1: {min: 2, max: 4},
//         set2: {min: 6, max: 8}
//     },
//     {
//         set1: {min: 2, max: 3},
//         set2: {min: 4, max: 5}
//     },
//     {
//         set1: {min: 5, max: 7},
//         set2: {min: 7, max: 9}
//     },
//     {
//         set1: {min: 2, max: 8},
//         set2: {min: 3, max: 7}
//     },
//     {
//         set1: {min: 6, max: 6},
//         set2: {min: 4, max: 6}
//     },
//     {
//         set1: {min: 2, max: 6},
//         set2: {min: 4, max: 8}
//     }
// ]
//      (2 >= 4 && 2 <= 8)
// .    (4 >= 2 && 4 <= 6)
        
// see if set 1 is contained in set 2
        if (a1 >= b1 && a1 <= b2) {
            
            // console.log('Set 1 can be contained in set 2', pair);
            part2.push(pair);

            // see if set 2 is contained in set 1
        } else if (b1 >= a1 && b1 <= a2) {
            // console.log('Set 2 can be contained in set 1', pair)
            part2.push(pair);
        }

    });

    console.log('Part 1: ', part1.length);
    console.log('Part 2: ', part2.length);
}