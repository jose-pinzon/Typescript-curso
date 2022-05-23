(()=>{

    class Avenger{
        constructor(
            public name:string,
            public realName:string,
        ){
            // console.log('contructor llamado');
        }
        protected getFullname(){
            return `${ this.name } ${ this.realName }`
        }
    }



    class Xmen extends Avenger {

        constructor(name:string, realName:string, public isMutan:boolean ){
            super( name, realName  )
        }


        get fullName(){
            return `${ this.name } - ${ this.realName } `
        }

        set fullName( name:string ){
            if (name.length < 3) {
                throw new Error('El nonmbre debe ser mayor de 3 letras')

            }   

            this.name = name
        }

    }

    const wolwerine  = new Xmen('wolverine','logan',true);


    // console.log(wolwerine.fullName) ;
    
    // wolwerine.fullName = 'jose';
    
    // console.log(wolwerine.fullName) ;





    






})()