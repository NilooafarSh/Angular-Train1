import { Component } from '@angular/core';
import { BlogDetail } from '../blog-detail/blog-detail';
@Component({
  selector: 'app-blog',
  imports: [BlogDetail],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
  standalone: true,
})
export class Blog {}
