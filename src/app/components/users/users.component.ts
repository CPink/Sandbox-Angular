import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../../models/User';
import { DataService } from '../../services/data.service';


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
  data: any;
  
  //methods
  constructor(private _dataService: DataService) { 
    
  }

  ngOnInit() {
  this._dataService.getUsers().subscribe(users => {
     this.users = users;
     this.loaded = true;
   });

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
