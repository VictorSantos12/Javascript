const { elementType } = require("prop-types")

const name = 'Victor'
const element = <h1> Hello, {name} </h1>

REACTDOM.render(
    element,
    document.getElementById('root')
)