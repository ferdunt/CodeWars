
function nextId(ids) {
    // 💬 We order our 'ids' array  
    ids.sort((a, b) => a - b);

    // 💬 Delete duplicate values
    ids = [... new Set(ids)]

    let newID = 0;

    // 💬 Loop the 'ids' array to search the lowest value
    for (let i = 0; i < ids.length; i++) {
        if (ids[i] === newID) {
            newID++;
        } else {
            break;
        }
    }

    return newID;
}


const result = nextId([0, 5, 1, 1, 3, 4]); // 🥚
console.log(result); // 🐣 2
