import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MyService } from '../../Service/my-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true,
})
export class Home {
  users: any[] = [];
  constructor(private myservice: MyService) {}
  ngOnInit() {
    this.myservice.getUsers().subscribe((data: any) => {
      this.users = data;
    });
  }

  UserDelete(id: number) {
    this.myservice.UserDelete(id).subscribe((user) => {
      this.myservice.getUsers();
    });
  }
}
