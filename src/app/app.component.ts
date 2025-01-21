import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserDeleteComponent } from './components/user/user-delete/user-delete.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone : true,
  imports: [RouterOutlet,HttpClientModule,UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
