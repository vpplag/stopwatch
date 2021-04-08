let Start = 0
let End = 0
input.onButtonPressed(Button.A, function () {
    Start = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    End = input.runningTime()
    basic.showNumber((End - Start) / 1000)
    basic.clearScreen()
})
