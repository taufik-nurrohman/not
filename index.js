// This file is in sync with `index.mjs` file to enable CommonJS module loader feature.
// If you want to add/remove something here, make sure to do it in `index.mjs` file first.
($$ => {
    const any = require('@taufik-nurrohman/is');
    for (let k in any) {
        if ('is' === k.slice(0, 2)) {
            $$['not' + k.slice(2)] = (...lot) => !any[k](...lot);
        }
    }
})(exports || window || {});
