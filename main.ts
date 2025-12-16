let pauseTime = 0
basic.forever(function () {
    pauseTime = 50
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.pause(pauseTime)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.pause(pauseTime)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.pause(pauseTime)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(pauseTime)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(pauseTime)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.pause(pauseTime)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.pause(pauseTime)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.pause(pauseTime)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
