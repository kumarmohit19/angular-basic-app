import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  // template: '<h2>Jhon Doe</h2>',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  // styles: [
  //   `
  //     h2 {
  //       color: blue;
  //     }
  //   `,
  // ],
})
export class UserComponent implements OnInit {
  // Properties
  user: User;

  // Methods
  constructor() {
    this.user = {
      firstName: 'Jhon',
      lastName: 'Doe',
      email: 'jhon@gmail.com',
      // age: 30,
      // address: {
      //   street: '50 Main st',
      //   city: 'Boston',
      //   state: 'MA',
      // },
    };
  }

  ngOnInit() {}
}
