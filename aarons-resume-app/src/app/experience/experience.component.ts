import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Postings } from '../postings';
import { Users } from '../user';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  Postings = Postings; 
  Users = Users;

  

  addApply(){
  
   
  }
 
  constructor() { }

  ngOnInit() {
  }

}
