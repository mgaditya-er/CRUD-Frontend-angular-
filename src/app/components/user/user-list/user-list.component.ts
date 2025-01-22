import { Component, NgModule, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone : true,
  imports: [HttpClientModule,CommonModule,RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit{


users: any|undefined;

  constructor(private _user: UserService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this._user.getUserList().subscribe({
      next: (resp: any) => {
        console.log('Response received: ', resp);
        if (resp ) {
          
          this.users = resp;  // Assign the result to the users array
        }
      },
      error: (err) => {
        console.log('Error occurred: ', err);  // Log any errors
      }
    });
  }

  deleteUser(id:any): void {
      const isconfirm = confirm("Are you sure you want to delete this user?");
      if (isconfirm) {
        this._user.deleteUser(id).subscribe({next:(resp:any)=>{
          console.log(resp)
          this.getData();
        },
        error:(err:any)=>{
          console.log(err)
        }
      })
      }
  }
}