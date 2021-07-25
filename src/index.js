var link = require('./link')

module.exports = attacher

function attacher() {
  if (this.Compiler) {
    this.Compiler.prototype.visitors.link = link
  }
}
