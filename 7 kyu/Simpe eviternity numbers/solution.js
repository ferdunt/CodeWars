function simpleNumbers(a, b) {
    let counter = 0;

    for (let i = a; i < b; i++) {
        // 💬 Create a regex to identify (3,5,8) numbers
        let regex = /^[358]+$/;

        // 💬 If we find a number between (3,5,8) evaluate that number
        if (regex.test(i)) {
            // 💬 Convert our number to a 'string' then split it
            let numbers = i.toString().split("");

            // 💬 Create 3 arrays to store the digits
            let array3 = [];
            let array5 = [];
            let array8 = [];

            // 💬 Evaluate each number if it is 3,5 or 8 then push it
            numbers.forEach(number => {
                switch (number) {
                    case "3":
                        array3.push(number);
                        break;
                    case "5":
                        array5.push(number);
                        break;
                    case "8":
                        array8.push(number);
                        break;
                }
            });

            // 💬 Create 2 rules based on the description of the problem
            const rule1 = array8.length >= array5.length;
            const rule2 = array5.length >= array3.length;

            if (rule1 && rule2) {
                counter++;
            }
        }
    }

    return counter;
}

const result = simpleNumbers(0, 100); // 🥚
console.log(result); // 🐣 4
