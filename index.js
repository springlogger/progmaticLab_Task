const digits = "9876543210"
const operations = "+- "

recurs("9", digits.slice(1))

function recurs(result_str, digits_t) {

    if (digits_t.length === 0) {
        try {
            if (eval(result_str) === 200) {
                console.log(result_str);
            }
        } catch (e) {
            //
        }
        return;
    }


    const first = digits_t[0];
    const rest = digits_t.slice(1);

    for (let i = 0; i < operations.length; i++) {
        let next_str;
        if (operations[i] === " ") {
            next_str = result_str + first;
        } else {
            next_str = result_str + operations[i] + first;
        }

        recurs(next_str, rest);
    }
}