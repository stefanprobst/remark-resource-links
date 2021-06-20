const remark = require('remark')
const resourceLinkPlugin = require('../src')

describe('remark plugin resourceLink', () => {
  it('enforces resource links with resourceLink: true option', () => {
    const doc = '<https://example.com>'
    const processor = remark().use(resourceLinkPlugin)
    const result = String(processor.processSync(doc)).trim()
    expect(result).toBe('[https://example.com](https://example.com)')
  })
})
