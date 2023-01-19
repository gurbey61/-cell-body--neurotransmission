input.onButtonPressed(Button.A, function () {
    strip.showRainbow(1, 360)
    for (let index = 0; index < 10; index++) {
        strip.rotate(1)
        strip.show()
        basic.pause(500)
    }
    radio.sendNumber(1)
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
radio.setGroup(1)
basic.forever(function () {
	
})
