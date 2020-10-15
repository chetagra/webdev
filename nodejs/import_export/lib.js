const { builtinModules } = require("module");

function hithere() {
    console.log("hello world");
}

module.exports={
    hithere
}
setTimeout(() => {
    module.exports.omg="wow"
}, 3000);