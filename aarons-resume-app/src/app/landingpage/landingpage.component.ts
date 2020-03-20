import { Component, OnInit } from '@angular/core';
import { Postings } from '../postings';
import { FormControl } from '@angular/forms';
import { Users } from '../user';


@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

	Postings = Postings;
  Users = Users;

   
   addPosting(job,location,description){ 
      var addPosting ={
     'job': job,
     'location' : location,
     'description' : description,
     'apply': 0

	};
  alert("Your Job has been posted check out the Job Posting tab to see you posting");
   
	  Postings.push(addPosting);
      console.log(job,location,description);
      console.log(this.Postings);
      return this.Postings;
    }



  update(name){
  let index = Users.findIndex(Users => Users.name === name);
  this.Users[index].qualified = 1;
  }

  alert(){
  alert('Congrats you have sent an email out with an offer letter');
  }


  constructor() { 
 	 
  }
  	

  ngOnInit() {
     
  }

}
