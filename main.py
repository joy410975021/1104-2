def on_forever():
    pass
basic.forever(on_forever)
x0=4
y0=0
for i in range(5):
    led.plot((x0),(y0))
    for j in range(i):
      j += 1
      x1 = x0;
      y1 = y0 - j
      x2 = x0 + j
      y2 = y0;
      led.plot((x1),(y1))
      led.plot((x2),(y2))
    x0 -= 1
    y0 += 1
    led.plot((x1),(y1))
    led.plot((x2),(y2))
    basic.pause(500)
    basic.forever(on_forever)