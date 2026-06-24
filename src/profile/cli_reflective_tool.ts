// FP-target (#162/#140) — CLI profile; dev tool that imports a name from argv.
const mod = require(process.argv[2]); // dev-CLI dynamic require
console.log(mod);
