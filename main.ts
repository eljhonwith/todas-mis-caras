function sin_palabras () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        `)
}
function feliz () {
    basic.showLeds(`
        . . . . .
        . # . # .
        # . . . #
        . # # # .
        . . . . .
        `)
}
function la_llamada_de_sin_palabras () {
	
}
function la_llamada_de_no_escucho () {
	
}
function no_escucho () {
    basic.showLeds(`
        . # # # .
        # . . . .
        . # . # .
        . . . . #
        . # # # .
        `)
}
function bravo () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
}
function la_llamada_de_bravo () {
	
}
function la_lamada_de_feliz () {
    feliz()
    if (true) {
        basic.showString("si le das agua estara feliz al menos que  tenga agua porque asi no se pone mal acontubrada ")
        basic.showLeds(`
            . . . . .
            . # . # .
            # . . . #
            . # # # .
            . . . . .
            `)
    } else {
        basic.showString(" si no ledas agua ella  despues de una semana se pone brava ")
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # # # .
            # . # . #
            `)
    }
}
let sol = 0
let dale_agua = 0
let palabras = 0
let carita_feliz = 0
basic.forever(function () {
    if (dale_agua) {
        if (sol) {
            if (palabras) {
                feliz()
            }
        }
    } else {
        bravo()
    }
})
basic.forever(function () {
    let no_darle_agua = 0
    if (no_darle_agua) {
        let no_hablar = 0
        if (no_hablar) {
            let hablar_feo = 0
            if (hablar_feo) {
                bravo()
            }
        }
    } else {
        feliz()
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
