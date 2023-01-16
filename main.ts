input.onButtonPressed(Button.A, function () {
    Paleta_1.move(-1)
    Paleta_2.move(1)
})
let Paleta_2: game.LedSprite = null
let Paleta_1: game.LedSprite = null
Paleta_1 = game.createSprite(2, 4)
Paleta_2 = game.createSprite(3, 4)
basic.forever(function () {
	
})
