import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-blog-detail',
  imports: [FormsModule, NgForOf],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.css',
  standalone: true,
})
export class BlogDetail {
  blog = [
    {
      id: 1,
      title: 'blog1',
      description: 'Description Blog 1',
    },
    {
      id: 2,
      title: 'blog2',
      description: 'Description Blog 2',
    },
    {
      id: 3,
      title: 'blog3',
      description: 'Description Blog 3',
    },
  ];
}
