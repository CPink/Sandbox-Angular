import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  //properties
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = true;
  enableAdd: boolean = true;
  currentClasses = {};
  
  //methods
  constructor() { 
    
  }

  ngOnInit() {

    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 70,
        address: {
            street: '50 Main St',
            city: 'Boise',
            state: 'ID'
        },
        image: 'http://lorempixel.com/600/600/people/3',
        isActive: true
      },
        {
        firstName: 'Chance',
        lastName: 'Pinkerton',
        age: 32,
        address: {
            street: '50 Main St',
            city: 'Boise',
            state: 'ID'
        },
        image: 'http://lorempixel.com/600/600/people/2',
        isActive: false
    },
    {
      firstName: 'Shanell',
      lastName: 'Pinkerton',
      age: 29,
      address: {
          street: '50 Main St',
          city: 'Boise',
          state: 'ID'
        },
        image: 'http://lorempixel.com/600/600/people/1',
        isActive: true
      }
    ];

    this.setCurrentClasses();
  }

  addUser(user: User){
    this.users.push(user);
  }

  setCurrentClasses(){
    this.currentClasses = {
      'btn-success': this.enableAdd
    }
  }

}
