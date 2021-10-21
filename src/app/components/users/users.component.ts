import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = true;

  constructor() {
    this.users = [
      {
        firstName: 'Jhon',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '50 Main st',
          city: 'Boston',
          state: 'MA',
        },
        // image: 'http://lorempixel.com/600/600/people/3',
        isActive: true,
        // balance: 100,
        registered: new Date('01/02/2018 08:30:00'),
      },
      {
        firstName: 'Kevin',
        lastName: 'Jhonson',
        age: 34,
        address: {
          street: '20 School st',
          city: 'Lyn',
          state: 'MA',
        },
        // image: 'http://lorempixel.com/600/600/people/2',
        isActive: false,
        // balance: 200,
        registered: new Date('03/11/2018 06:20:00'),
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        age: 26,
        address: {
          street: '55 Mill st',
          city: 'Miami',
          state: 'FL',
        },
        // image: 'http://lorempixel.com/600/600/people/1',
        isActive: true,
        // balance: 50,
        registered: new Date('11/02/2016 10:30:00'),
      },
    ];

    this.loaded = true;
  }

  ngOnInit(): void {}

  addUser(user: User) {
    this.users.push(user);
  }

  fireEvent(e: any) {
    //console.log('button');
    console.log(e.type);
  }
}
