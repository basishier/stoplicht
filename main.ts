input.onButtonPressed(Button.A, function () {
    Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Go)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    basic.pause(5000)
    Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.ReadyToStop)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(5000)
    Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Go)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    basic.pause(5000)
    Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.ReadyToStop)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(5000)
    Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
