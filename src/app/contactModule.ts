export class Contact{
    type: string;
    name: string;
    title: string;
    phone:string;
    ext:string;
    fax:string;
    email:string;



    constructor(
        type: string,
        name: string,
        title: string,
        phone:string,
        ext:string,
        fax:string,
        email:string){

            this.type    = type ;
this.name    = name ;
this.title   = title;
this.phone   = phone;
this.ext     = ext ; 
this.fax     = fax  ;
this.email   = email;


    }

}