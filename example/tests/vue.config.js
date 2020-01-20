module.exports = {
  husky: {
    hooks: {
      'pre-commit': 'yarn test:unit'
    }
  }
}