input.onButtonPressed(Button.A, function () {
    music.stopAllSounds()
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 10; index++) {
        music.playMelody("B D B F E A F C5 ", 250)
    }
})
