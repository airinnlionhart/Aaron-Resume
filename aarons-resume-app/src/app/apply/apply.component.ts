import { Component, OnInit } from '@angular/core';
import { Users } from '../user';
import { Postings } from '../postings';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  Postings = Postings; 
	Users=Users;


	addUser(name,email,qualified,job){ 
      var addUser ={
     'name' : name,
      'email' : email,
     'qualified' : + 2,
      'job': job
	   };
  
   alert("thanks for applying");
   
	  Users.push(addUser);
      console.log(this.Users);
      return this.Users;
    }

  constructor() { }

  ngOnInit() {
  }

}

 
