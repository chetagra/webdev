const mocha = require('mocha')
const {expect} = require('chai')
const request = require('request')

const {app} = require('../server')


describe('server', () => {
    let server=null
    before(() => {
        server = app.listen(2222)
    })

    it('rates should be correct', (done) => {
        request.get('http://localhost:2222/rate', (err, resp, body) => {
            let rates = JSON.parse(body)
            expect(rates.fixed).to.equal(50)
            expect(rates.perkm).to.equal(10)
            done()
        })
    })

    after(() => {
        server.close()
    })
})