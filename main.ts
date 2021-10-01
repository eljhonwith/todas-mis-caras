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
let como_se_nutre_el = 0
let cosas_increible = 0
let _new = 0
let no_hablar = 0
let hablar_feo = 0
let escucha_musica = 0
como_se_nutre_el = 0
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
        if (no_hablar) {
            if (hablar_feo) {
                bravo()
            }
        }
    } else {
        feliz()
    }
})
basic.forever(function () {
    if (palabras) {
        if (escucha_musica) {
            no_escucho()
        }
    } else {
        feliz()
    }
})
basic.forever(function () {
    if (_new) {
        if (como_se_nutre_el) {
            if (cosas_increible) {
                sin_palabras()
            }
        }
    } else {
        feliz()
    }
})
