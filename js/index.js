const lis = document.querySelectorAll('li')
const ul = document.querySelector('ul')
const spans = document.querySelectorAll('span')

let index = 0
spans[index].className = 'select'

// 存放样式
const styles = []
for (let i = 0; i < lis.length; i++) {
    styles.push(lis[i].className)
}

// 下一页
function nextPic() {
    //Array.unshift：向数组头部添加一个元素
    styles.unshift(styles[styles.length - 1])
    styles.pop()
    for (let i = 0; i < lis.length; i++) {
        lis[i].className = styles[i]
    }

    if (index === lis.length - 1) {
        index = 0
    } else {
        index++
    }
    for (let i = 0; i < spans.length; i++) {
        spans[i].className = ''
    }
    spans[index].className = 'select'
}

// 上一页
function prePic() {
    styles.push(styles[0])
    styles.shift()
    for (let i = 0; i < lis.length; i++) {
        lis[i].className = styles[i]
    }

    if (index === 0) {
        index = lis.length - 1
    } else {
        index--
    }
    for (let i = 0; i < spans.length; i++) {
        spans[i].className = ''
    }
    spans[index].className = 'select'
}

let timeid = setInterval(() => {
    nextPic()
}, 3000)

ul.onmouseenter = function () {
    clearInterval(timeid)
}

ul.onmouseleave = function () {
    timeid = setInterval(() => {
        nextPic()
    }, 3000)
}

// 使用事件委托
ul.onmousedown = function (e) {
    if (e.target.parentNode.classList[0] === 'list3') {
        nextPic()
    } else if (e.target.parentNode.classList[0] === 'list1') {
        prePic()
    }
}
