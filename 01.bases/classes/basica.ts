(() => {


    // *Forma normal de hacer una clase
    // class Avenger{
    //     private name:string;
    //     public team:string;
    //     public realName?: string;
    //     static avgAge:number = 35; /* Se puede acceder a el usando directamente la clase */

    //     constructor( name: string, team: string, realName?: string){
    //         this.name = name;
    //         this.team = team;
    //         this.realName = realName
    //     }
    // }

    // *forma corta
    class Avenger{
        static avgAge:number = 35; /* Se puede acceder a el usando directamente la clase */
        constructor( 
            private name:string, 
            public team:string,
            public realName?: string){
            this.name = name;
            this.team = team;
            this.realName = realName
        }


        public getname(){
            return `${this.name} ${this.team}`;
        } 


    }

    const atman: Avenger = new Avenger("antman","capitan","scot lang");

    // console.log(atman.getname());







})()