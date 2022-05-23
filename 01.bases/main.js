"use strict";
(() => {
    let flash = {
        name: 'barry',
        age: 24,
        power: ['Super velocidad', 'Viajar en el tiempo'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class Mutant {
        mutantPower(id) {
            return this.name + ' ' + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: 'Jose',
        age: 25,
        address: {
            id: 124,
            zip: 'Jyuba',
            city: 'Izamal'
        },
        getFullAdress(id) {
            var _a;
            return (_a = this.address) === null || _a === void 0 ? void 0 : _a.city;
        },
    };
    const client2 = {
        name: 'gabriel',
        age: 12,
        address: {
            id: 123,
            city: 'sitilpech',
            zip: 'asdas12'
        },
        getFullAdress(id) {
            var _a;
            return (_a = this.address) === null || _a === void 0 ? void 0 : _a.city;
        },
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
    df;
})();
//# sourceMappingURL=main.js.map