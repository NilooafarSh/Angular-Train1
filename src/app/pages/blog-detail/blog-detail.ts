import { Component, Input } from '@angular/core';
import { BlogDto } from '../../dto/blog/dtoBlog';
import { NgFor, NgForOf } from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-blog-detail',
  imports: [NgFor, NgForOf],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.css',
  standalone: true,
})
export class BlogDetail {
  @Input('MyBlogDetail') blog!: BlogDto;
}
