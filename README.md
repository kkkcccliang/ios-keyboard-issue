# ios-keyboard-issue
A demo illustrate the IOS keyboard issue in web app
一个简单的例子说明web应用在IOS设备上的键盘问题以及解决方法

## 问题描述
- 在IOS设备上，我们无法获得键盘的准确高度，如果输入框在底部的时候，键盘弹起时，输入框就有可能被键盘遮挡。

## 问题分析
- IOS设备上的键盘弹起的行为和Android不同，Android在将键盘弹起时会将body内容区的高度自动缩放；
而IOS是将整个body弹起，将body.scrollTop改变成键盘弹起的高度（然而这个高度并不总是很精确）。
不幸的是，没有相应的事件可以获得这个通知，而且当切换输入法时，这个高度还不会自动改变。
- 调试时发现，当设置了body.scrollTop为一个较大的值时（大于当前键盘弹起时的高度），这样IOS会自动将scrollTop设置为正确的值
但设置一次只能生效一次，当再次切换输入法时，又会不正常了

## 解决思路
- 设置一个定时器，当输入框获得焦点时，不断地设置scrollTop为一个较大值；失焦时停止这个定时器。
- 注意如果用户不断地在输入的话，要停止这个定时器，否则可能会导致闪烁。
- 这不是一个很好的解决方案，如果有更好的方法，Please let me know.

## Demo运行
1. 下载demo并进入到demo根目录
2. node server.js
3. 查看你的IP，并将你的IOS设备连到同一个局域网，打开 http://ip:8080 即可
