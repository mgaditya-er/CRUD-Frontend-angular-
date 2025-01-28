import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.scss'
})
export class UserEditComponent {

   updateuserForm!: FormGroup;
    submitted = false;
    id!:any;
    data!:any;
    constructor(private _userService: UserService, private router: Router,private _actRoute:ActivatedRoute) {
      this.id = this._actRoute.snapshot.paramMap.get('id')
      console.log(this.id)
      if(this.id){
        this.getData(this.id)
      }

      
      this.updateuserForm = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
  
        email: new FormControl('', Validators.required),
        gender: new FormControl('', Validators.required),
      });
    }
  
    getData(id:any){
      this._userService.getSingleUser(id).subscribe({
        next:(resp:any)=>{
          
          this.data =resp;
          console.log('----',this.data);
          
          this.updateuserForm = new FormGroup({
            firstName: new FormControl(this.data.firstName),
            lastName: new FormControl(this.data.lastName),
      
            email: new FormControl(this.data.email),
            gender: new FormControl(this.data.gender),
            
          }
        );
        console.log();
        },
        error:(err:any)=>{
          console.log(err);
        }
        
        
      })
    }
    update(){
      this.updateuserForm.value.id = this.id
      console.log(this.updateuserForm.value)
      this._userService.updateUser(this.id,this.updateuserForm.value).subscribe({
        next:(resp:any)=>{
          this.router.navigate(['/']);
          alert('Updated Successfully')
          
        },
      error:(err)=>{
        console.log(err)
      }
    
    })
  }

}
