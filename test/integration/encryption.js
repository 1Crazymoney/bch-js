const assert = require("chai").assert

const BCHJS = require("../../src/bch-js")
const bchjs = new BCHJS()

describe("#Encryption", () => {
  describe("#getPubKey", () => {
    it("should get a public key", async () => {
      const addr = "bitcoincash:qpf8jv9hmqcda0502gjp7nm3g24y5h5s4unutghsxq"

      const result = await bchjs.encryption.getPubKey(addr)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      assert.property(result, "success")
      assert.equal(result.success, true)
      assert.property(result, "publicKey")
    })

    it("should report when public key can not be found", async () => {
      const addr = "bitcoincash:qpxqr2pmcverj4vukgjqssvk2zju8tp9xsgz2nqagx"

      const result = await bchjs.encryption.getPubKey(addr)
      // console.log(`result: ${JSON.stringify(result, null, 2)}`)

      assert.property(result, "success")
      assert.equal(result.success, false)
      assert.property(result, "publicKey")
      assert.equal(result.publicKey, "not found")
    })
  })
})