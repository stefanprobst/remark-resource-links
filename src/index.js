var link = require('./link')

module.exports = attacher

function attacher() {
  this.Compiler.prototype.visitors.link = link
}
