const Message = {}
Message.install = function (Vue, options) {
  let opt = {
    duration: '1500' // 持续时间
  }

  for (let property in options) {
    opt[property] = options[property] // 使用 options 的配置
  }

  Vue.prototype.$message = (msg, type) => {
    if (type) {
      opt.defaultType = type // 如果有传type，位置则设为该type
    }
    if (document.getElementsByClassName('vue-message').length) {
      // 如果message还在，则不再执行
      return
    }
    let MessageTpl = Vue.extend({
      template: '<div class="vue-message message-' + opt.defaultType + '">' + msg + '</div>'
    })
    let tpl = new MessageTpl().$mount().$el
    document.body.appendChild(tpl)
    setTimeout(function () {
      document.body.removeChild(tpl)
    }, opt.duration)
  }
  ['error', 'success'].forEach(type => {
    Vue.prototype.$message[type] = (msg) => {
      return Vue.prototype.$message(msg, type)
    }
  })
}
export default Message
