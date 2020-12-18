const is = require('@taufik-nurrohman/is');
const not = {};

for (let k in is) {
    if ('is' === k.slice(0, 2)) {
        not['not' + k.slice(2)] = (...lot) => !is[k](...lot);
    }
}

Object.assign(exports || {}, not);
