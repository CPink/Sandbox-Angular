import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';

import { User } from '../models/User';

@Injectable()
export class DataService {
  users: User[];
  data: Observable<any>

  constructor() { 
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

  //for testing
  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000)
    })

    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User){
    this.users.unshift(user);
  }

}
