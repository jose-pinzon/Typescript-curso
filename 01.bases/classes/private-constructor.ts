
(()=>{

    class Apocalipsis {
        static instance:Apocalipsis;

        //!Un constructor privado solo puede ser utilizado dentro su clase pero no es muy usado
        private constructor( public name:string ){


        }


        static callApocalipsis(): Apocalipsis{
            if( !Apocalipsis.instance ){

                Apocalipsis.instance = new Apocalipsis('soy apo')    
            }

            return Apocalipsis.instance
        }
    }

        const apo1 = Apocalipsis.callApocalipsis()

        console.log(apo1);

})()