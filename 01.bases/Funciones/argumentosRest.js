"use strict";
(function () {
    var fullName = function (firtName) {
        var Resto = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            Resto[_i - 1] = arguments[_i];
        }
        return firtName + " " + Resto.join(' ');
    };
    var superman = fullName('Clark', 'Joseph', 'Kent');
    console.log(superman);
})();
//# sourceMappingURL=argumentosRest.js.map