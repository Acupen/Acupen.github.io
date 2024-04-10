m1

```js
function test() {
  debounce(() => {
    console.log('dfd500')
  }, 500)
  throttle(() => {
    console.log('1000')
  }, 1000)
}

const debounce = (() => {
  let timer = null
  return (callback, wait) => {
    timer && clearTimeout(timer)
    timer = setTimeout(callback, wait)
  }
})()
const throttle = (() => {
  let last = 0
  return (callback, wait) => {
    const now = +new Date()
    if (now - last > wait) {
      callback()
      last = now
    }
  }
})()
```
