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
                basic.pause(5000)
                feliz()
            }
        }
    } else {
        basic.pause(5000)
        bravo()
    }
})
basic.forever(function () {
    let no_darle_agua = 0
    if (no_darle_agua) {
        if (no_hablar) {
            if (hablar_feo) {
                basic.pause(5000)
                bravo()
            }
        }
    } else {
        basic.pause(5000)
        feliz()
    }
})
basic.forever(function () {
    if (palabras) {
        if (escucha_musica) {
            basic.pause(5000)
            no_escucho()
        }
    } else {
        basic.pause(5000)
        feliz()
    }
})
basic.forever(function () {
    if (_new) {
        if (como_se_nutre_el) {
            if (cosas_increible) {
                basic.pause(5000)
                sin_palabras()
            }
        }
    } else {
        basic.pause(5000)
        feliz()
    }
})
