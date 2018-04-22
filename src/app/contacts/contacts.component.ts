import { Component, OnInit } from '@angular/core';
import { Contact } from '../contactModule';
import { Http, Response } from '@angular/http';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[];

  displayDialog: boolean;

  contact: Contact;

  apiUrl:string;//api url 
  selectedContact:Contact;

  constructor(private http:Http) { }

  ngOnInit() {

    // this.contacts=[new Contact('Executive','Vinodh','CEO','(512)456-5555','','(512)456-5555','pr@pr.com')]
   this.service().then(result=>this.loadMockData(result));
  }
  loadMockData(result)
  {
     this.contacts=result;
     console.log(this.contacts);
  }
  showDialogToAdd(){
    this.displayDialog = true;
    this.contact=new Contact('','','','','','','');
    //console.log('clicking');
  }
  showDialogToDelete(){

    this.contacts = this.contacts.filter((val,i) => i!= this.contacts.indexOf(this.selectedContact))

  }

  save() {
    let contacts = [...this.contacts];
    contacts.push(this.contact);
    this.contacts=contacts;
    //console.log(this.contacts);
    this.displayDialog = false;
}
service(){
  //console.log(location);
  let apiUrl="http://mocadatafiddler/contacts";//apiurl

  let promise = new Promise((resolve, reject) => {
    this.http.get(apiUrl)
     .toPromise()
     .then(
       
       res =>{
        
               
        
        resolve(res.json());
         
       }
    );
 });
 
 return promise;
 

}




}
