import { Component, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgForOf, NgIf, NgClass, NgStyle } from '@angular/common';
import { Contactus } from './pages/contactus/contactus';
import { BlogList } from './pages/blog-list/blog-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgForOf, NgIf, Contactus, NgClass, NgStyle, BlogList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('firstProject');
}
