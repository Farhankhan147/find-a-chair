function findSpareChairs(rooms, need) {
    let takenChairs = 0;
    let result = [];
    if(need==0){
        return 1;
    }
    for (let i = 0; i < rooms.length; i++) {
        const [occupants, chairs] = rooms[i];
        const availableChairs = chairs - occupants.length;
        
        if (availableChairs > 0) {
            if (availableChairs >= need - takenChairs) {
                result.push(need - takenChairs);
                takenChairs = need;
                break;
            } else {
                result.push(availableChairs);
                takenChairs += availableChairs;
            }
        } else {
            result.push(0);
        }
    }
    
    if (takenChairs < need) {
        return 0;
    } else {
        return result;
    }
}

// Example usage:
const rooms = [['XXXXXX', 6], ['XXXXX', 6], ['XXXXXX', 9], ['XXX', 3]];
const need = 3;
console.log(findSpareChairs(rooms, need));
