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
        isActive: true,
        registered: new Date('01/21/2018 08:30:00'),
        hide: true
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
        isActive: false,
        registered: new Date('01/18/2018 12:30:00'),
        hide: true
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
        isActive: true,
        registered: new Date('01/25/2018 10:30:00'),
        hide: false
      }
    ];
  }

  addUser(user: User){
    this.users.push(user);
  }

}
