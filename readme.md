# 轮播图
> 实现一个类似于网易云音乐的轮播图
## 要理解的知识点
1. transform
2. transform-origin
3. transition
4. 数组的内置方法
5. 事件委托

## 1 transform
[transform的W3C介绍](http://www.w3school.com.cn/cssref/pr_transform.asp)  
transform这个属性在这个项目中是用来完成元素位置移动效果的

**通过定位和translate来实现元素位置移动的差异**  
改变元素样式来实现动画的步骤

1. css改变元素的属性
2. 计算样式：确定每个DOM元素应该应用什么CSS规则
3. Layout（布局）：计算每个DOM元素在最终屏幕上显示的大小和位置。由于web页面的元素布局是相对的，所以其中任意一个元素的位置发生变化，都会联动的引起其他元素发生变化，这个过程叫reflow（重排）
4. Paint（绘制）：在多个层上绘制DOM元素的文字、颜色、图像、边框和阴影等
5. Composite（渲染层合并）：按照合理的顺序合并图层然后显示到屏幕上

通过定位来实现元素的位置移动，整个过程就是1~5步

通过translate来实现，它的过程就是1，2，4，5，没有第三步，而第三步是性能消耗最大的

## 2 transform-origin
[transform-origin的W3C介绍](http://www.w3school.com.cn/cssref/pr_transform-origin.asp)  
这个属性是和transform一起使用的，改变基点的位置。当元素缩放或者旋转时，基点默认是在中间的，用这个属性可以改变基点的位置

## 3 transition
[transition的W3C介绍](http://www.w3school.com.cn/cssref/pr_transition.asp)  
这个属性主要是用来实现动画的过度效果的

## 4 数组的内置方法
[数组的内置方法的W3C介绍](http://www.w3school.com.cn/jsref/jsref_obj_array.asp)  
在这个项目中，我不明白的主要是`shift()`和`unshift()`这两个方法
+ shift()：删除并返回数组的第一个元素
+ unshift()：向数组的开头添加一个或更多元素，并返回新的长度
**主要还是要看W3C文档**

## 5 事件委托
[别人写的一篇博客](https://www.cnblogs.com/liugang-vip/p/5616484.html)，感觉写的挺好的  
+ 为什么要用事件委托
> 一般来说，dom需要有事件处理程序，我们都会直接给它设事件处理程序就好了，那如果是很多的dom需要添加事件处理呢？比如我们有100个li，每个li都有相同的click点击事件，可能我们会用for循环的方法，来遍历所有的li，然后给它们添加事件，那这么做会存在什么影响呢？

> 在JavaScript中，添加到页面上的事件处理程序数量将直接关系到页面的整体运行性能，因为需要不断的与dom节点进行交互，访问dom的次数越多，引起浏览器重绘与重排的次数也就越多，就会延长整个页面的交互就绪时间，这就是为什么性能优化的主要思想之一就是减少DOM操作的原因；如果要用事件委托，就会将所有的操作放到js程序里面，与dom的操作就只需要交互一次，这样就能大大的减少与dom的交互次数，提高性能；

> 每个函数都是一个对象，是对象就会占用内存，对象越多，内存占用率就越大，自然性能就越差了（内存不够用，是硬伤，哈哈），比如上面的100个li，就要占用100个内存空间，如果是1000个，10000个呢，那只能说呵呵了，如果用事件委托，那么我们就可以只对它的父级（如果只有一个父级）这一个对象进行操作，这样我们就需要一个内存空间就够了，是不是省了很多，自然性能就会更好。

+ 事件委托的原理
> 事件委托是利用事件的冒泡原理来实现的，何为事件冒泡呢？就是事件从最深的节点开始，然后逐步向上传播事件，举个例子：页面上有这么一个节点树，div>ul>li>a;比如给最里面的a加一个click点击事件，那么这个事件就会一层一层的往外执行，执行顺序a>li>ul>div，有这样一个机制，那么我们给最外面的div加点击事件，那么里面的ul，li，a做点击事件的时候，都会冒泡到最外层的div上，所以都会触发，这就是事件委托，委托它们父级代为执行事件。