for (let x = 0; x <= 4; x++) {
    for (let y = 0; y <= x; y++) {
        led.plot(3 - x, y)
        led.plot(4 - x, x)
        led.plot(5 - (y + 1), x + 1)
        basic.pause(100)
    }
}
let index = 4
while (index >= 0) {
    for (let y = 0; y <= 4 - index; y++) {
        led.unplot(y, index)
        led.unplot(4 - index, 4 - y)
        basic.pause(100)
    }
    index += -1
}
basic.forever(function () {
	
})
