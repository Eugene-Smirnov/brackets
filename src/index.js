module.exports = function check(str, bracketsConfig) {
    if (!Array.isArray(str))
        str = str.split('');
    let open = 0;
    let close = 0;
    debugger;
    for (let i = 0; i <= bracketsConfig.length - 1; i++) {
        for (let j = str.length - 1; j >= 0; j--) {
            open = str.lastIndexOf(bracketsConfig[i][0], j);
            close = str.indexOf(bracketsConfig[i][1], open);
            // SEARCH & FIX FOR ||
            if (open == close) open = str.lastIndexOf(bracketsConfig[i][0], close - 1);
            if (open == 0 && close == 0) return false;
            // CHECK & RECURSION
            if (open == -1 || close == -1) {
                break;

            } else if (close == open + 1) {
                str.splice(close, 1);
                str.splice(open, 1);

            } else if (check(str.slice(open + 1, close), bracketsConfig.slice(i + 1))) {
                str.splice(close, 1);
                str.splice(open, 1);

            } else {
                return false;
            };
        };
    };
    return str[0] == undefined;
}