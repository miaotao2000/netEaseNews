const ImagePreview = {}
ImagePreview.install = function (Vue) {
  Vue.prototype.$imagePreview = (el) => {
    let target = document.querySelector(el)
    let imgArr = document.querySelectorAll(`${el} img`)
    let imgs = []

    imgArr.forEach((img, index) => {
      img.setAttribute('index', index)
      imgs.push(img.src)
    })

    target.onclick = function (event) {
      let e = event || window.event
      let source = e.target || e.srcElement
      if (source.nodeName === 'IMG') {
      }
      e.stopPropagation()
    }
  }
}
export default ImagePreview
