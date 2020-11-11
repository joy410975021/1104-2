let x1: number;
let y1: number;
let x2: number;
let y2: number;
function on_forever() {
    
}

basic.forever(on_forever)
let x0 = 4
let y0 = 0
for (let i = 0; i < 5; i++) {
    led.plot(x0, y0)
    for (let j = 0; j < i; j++) {
        j += 1
        x1 = x0
        y1 = y0 - j
        x2 = x0 + j
        y2 = y0
        led.plot(x1, y1)
        led.plot(x2, y2)
    }
    x0 -= 1
    y0 += 1
    led.plot(x1, y1)
    led.plot(x2, y2)
    basic.pause(500)
    basic.forever(on_forever)
}
