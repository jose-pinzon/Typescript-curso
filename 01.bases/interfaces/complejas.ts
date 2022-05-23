(()=>{


    interface Client {
        name:string,
        age:number,
        address?:Address
        getFullAdress( id: string ): void 
    }


    interface Address{
        id:number,
        zip:string,
        city:string
    }



    const client: Client = {
        name:'Jose',
        age:25,
        address:{
            id:124,
            zip:'Jyuba',
            city:'Izamal'
        },
        
        getFullAdress( id:string ) {
            return this.address?.city
        },
    }


    const client2: Client = {
        name:'gabriel',
        age:12,
        address:{
            id:123,
            city:'sitilpech',
            zip:'asdas12'
        },
        getFullAdress( id:string ) {
            return this.address?.city
        },

    }



})()