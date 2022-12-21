const fs = require('fs');
const line = fs.readFileSync('./input.txt');
const lines = line.toString();


var tracker  = [];
const total = (list) => {
    var total = 0;
    for(let i = 0; i < list.length; i++){
        total += list[i]
    }
    return total
}


const find_number_of_elves = (lines) => {
    var createNumber = '';
    var elfShelf = []
    for(let i = 0; i < lines.length; i++){
        if(lines.charAt(i) !== '\n'){
           createNumber = createNumber.concat(lines.charAt(i))
           
        }
        else{
            if(createNumber !== '\r'){
                console.log('the created Number', createNumber, ' The index it stopped on', i)
                elfShelf.push(parseInt(createNumber))
                createNumber = ''
            }else{
                //console.log('index stopped at:', i)

                tracker.push(total(elfShelf))
                elfShelf = []
            }
        }
    }

    return tracker

}
const sortArray = (list) => {
    const sorted = list.sort(function(a, b){return b - a})

    return sorted[0] + sorted[1] + sorted[2]
}
const highestNumber  = (list) => {
    var highest = list[0]

    for(let i = 0; i < list.length; i++){
        if(highest < list[i])
            highest = list[i]
    }

return highest
}
console.log(sortArray(find_number_of_elves(lines)))
