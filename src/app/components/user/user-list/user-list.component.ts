import { Component, NgModule, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  standalone : true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit{


//   users: any[] = [];
//   userlist:any |undefined;
//   constructor(private _user:UserService){

//   }
//   ngOnInit(): void {
//     this.getData();
//   }

  

//   getData(): void {
//     this._user.getUserList().subscribe({
//       next: (resp:any) => {
//         console.log("------------")
//         // console.log(resp.result);
//         // // this.users = resp;  // Store the fetched users in the users array
//         // // this.users.push(resp);
//         // this.userlist = resp.result;
//         // console.log("---------------");
//         // console.log(this.users);
//       },
//       error: (err) => {  // Corrected syntax for error handling
//         console.log(err);
//       }
//     });
//   }
// }

// users: any[] = [];  // Array to hold the users
users: any|undefined;

  constructor(private _user: UserService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this._user.getUserList().subscribe({
      next: (resp: any) => {
        console.log('Response received: ', resp);
        if (resp && resp.result) {
          
          this.users = resp;  // Assign the result to the users array
        }
      },
      error: (err) => {
        console.log('Error occurred: ', err);  // Log any errors
      }
    });
  }
}