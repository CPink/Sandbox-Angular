import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  //properties
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };

  users: User[];
  showExtended: boolean = true;
  loaded: boolean = true;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  
  //methods
  constructor() { 
    
  }

  ngOnInit() {

    //hard coded user array
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'John@gmail.com',
        isActive: true,
        registered: new Date('01/21/2018 08:30:00'),
        hide: true
      },
        {
        firstName: 'Chance',
        lastName: 'Pinkerton',
        email: 'Chance@gmail.com',
        isActive: false,
        registered: new Date('01/18/2018 12:30:00'),
        hide: true
    },
    {
      firstName: 'Shanell',
      lastName: 'Pinkerton',
      email: 'Shanell@gmail.com',
        isActive: true,
        registered: new Date('01/25/2018 10:30:00'),
        hide: true
      }
    ];
  }

  //add user from form input

  onSubmit({value, valid}: {value: User, valid: boolean}){
    if(!valid){
      alert('Form is Invalid');
    }else{
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.users.unshift(value);
  
      this.form.reset();
    }
  
  }

}
