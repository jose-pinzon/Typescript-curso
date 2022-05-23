import powers from "../data/powers";


export  class Hero {
    constructor(
        public name: string,
        public powerId: number,
        public age: number
    )
    {}


    get power() :string  { 
        return powers.find( poder => poder.id === this.powerId )?.desc || 'not found';/*El ? sirve para decir si no hay un valor entonces retone algo*/
    }

}