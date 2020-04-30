'use strict';

const fs = require('fs');
const path = require('path');

module.exports = (schema) => {
    fs.readdirSync(path.join(__dirname, 'resolvers'))
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const filename = path.join('resolvers', file)
        const resolver = require(`./${filename}`)
        if(resolver.middlewares){
            resolver.middlewares(schema)
        }
    });
}