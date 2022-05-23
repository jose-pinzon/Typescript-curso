"use strict";
(function () {
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    var fuerza;
    (function (fuerza) {
        fuerza[fuerza["Acuaman"] = 0] = "Acuaman";
        fuerza[fuerza["Batman"] = 1] = "Batman";
        fuerza[fuerza["Flash"] = 5] = "Flash";
        fuerza[fuerza["Superman"] = 100] = "Superman";
    })(fuerza || (fuerza = {}));
    var fuerzaFlash = fuerza.Flash;
    var fuerzaSuperman = fuerza.Superman;
    var fuerzaBatman = fuerza.Batman;
    var fuerzaAcuaman = fuerza.Acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=app.js.map