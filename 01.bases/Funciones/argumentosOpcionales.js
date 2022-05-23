"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + (lastName || 'apellido');
    };
    var name = fullName('Tony');
    console.log({ name: name });
})();
//# sourceMappingURL=argumentosOpcionales.js.map