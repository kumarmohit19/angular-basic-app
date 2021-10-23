import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user: any = {
    firstName: '',
    lastName: '',
    email: '',
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  data: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getData().subscribe((data) => {
      console.log(data);
    });

    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      this.loaded = true;
    });
  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);

    this.user = {
      firstName: '',
      lastName: '',
      email: '',
    };
  }

  onSubmit({ value, valid }: NgForm) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.hide = true;
      value.registered = new Date();

      this.userService.addUser(value);
      this.form.reset();
    }
  }
}
