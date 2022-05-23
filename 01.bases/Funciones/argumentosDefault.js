"use strict";
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return (" " + firstName + " " + (lastName || 'apellido')).toUpperCase();
        }
        else {
            return " " + firstName + " " + (lastName || 'apellido');
        }
    };
    var name = fullName('Tony', 'stark', true);
    console.log({ name: name });
})();
//# sourceMappingURL=argumentosDefault.js.map