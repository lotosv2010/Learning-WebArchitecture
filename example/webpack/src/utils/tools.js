import webpack from '../assets/webpack.png'

export function getPic () {
  const img = new Image()
  img.width = 600
  img.src = webpack
  document.body.append(img)
  console.log(webpack)
}