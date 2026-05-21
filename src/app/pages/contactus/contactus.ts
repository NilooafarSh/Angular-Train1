import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  imports: [FormsModule],
  templateUrl: './contactus.html',
  styleUrl: './contactus.css',
  standalone: true,
})
export class Contactus {
  contactus = {
    Firstname: '',
    Lastname: '',
    Username: '',
    Password: '',
  };
  submitForm(e: any) {
    console.log(this.contactus);
  }
}
