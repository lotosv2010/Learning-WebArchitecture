module.exports = {
  get url() {
    return this.req.url
  },
  get method() {
    // console.log('this', this)
    return this.req.method.toLowerCase()
  }
}