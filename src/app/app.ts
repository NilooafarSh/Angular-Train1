import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgForOf, NgIf } from '@angular/common';
import { Contactus } from './pages/contactus/contactus';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgForOf, NgIf, Contactus],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('firstProject');
  Products = [
    {
      id: 1,
      Title: 'Product1',
      Price: 1000,
    },
    {
      id: 2,
      Title: 'Product2',
      Price: 2000,
    },
    {
      id: 3,
      Title: 'Product3',
      Price: 3000,
    },
  ];
  IsActive = false;
}
