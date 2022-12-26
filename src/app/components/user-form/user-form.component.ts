import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { NgForm } from '@angular/forms';

import { User } from 'src/app/models/user.model';

declare let alertify: any;

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  user: User = {
    name: '',
    lastname: '',
    birthDate: '',
    phoneNumber: '',
    email: '',
  };
  formSubmitted: boolean = false;

  constructor(private registerService: RegisterService) {}

  ngOnInit(): void {}

  onSaveUser(form: NgForm) {
    this.formSubmitted = true;

    if (form.invalid) {
      return;
    }

    this.registerService.saveUser(this.user).subscribe({
      next: (res) => {
        this.alertMessage(res.message, 'success');
        this.formReset(form);
      },
      error: (error) => {
        this.alertMessage(error.message, 'error');
      },
    });
  }

  formReset(form: NgForm) {
    this.user = {
      name: '',
      lastname: '',
      birthDate: '',
      phoneNumber: '',
      email: '',
    };
    form.reset();
    this.formSubmitted = false;
  }

  alertMessage(message: string, type: string) {
    alertify.set('notifier', 'position', 'top-right');

    if (type === 'success') alertify.success(message);
    if (type === 'error') alertify.error(message);
  }
}
