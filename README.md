Conditional Utility
===================

See [@taufik-nurrohman/is](https://github.com/taufik-nurrohman/is). This is the opposite version.

Usage
-----

### Browser

~~~ html
<script src="./@taufik-nurrohman/not/index.js"></script>
<script>
console.log(notString(false));
</script>
~~~

### Browser Module

~~~ html
<script type="module">
import {notString} from './@taufik-nurrohman/not/index.mjs';

console.log(notString(false));
</script>
~~~

### CommonJS Module

~~~ js
const {notString} = require('@taufik-nurrohman/not');

console.log(notString(false));
~~~

### ECMAScript Module

~~~ js
import {notString} from '@taufik-nurrohman/not';

console.log(notString(false));
~~~
