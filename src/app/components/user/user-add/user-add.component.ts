import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.scss',
})
export class UserAddComponent {
  userForm!: FormGroup;
  submitted = false;
  constructor(private _userService: UserService, private router: Router) {
    this.userForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),

      email: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
    });
  }

  
  submit() {
    console.log(this.userForm.value);
    this._userService.createUser(this.userForm.value).subscribe({
      next: (resp: any) => {
        console.log(resp);
        alert('success');

        this.userForm.reset();
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
