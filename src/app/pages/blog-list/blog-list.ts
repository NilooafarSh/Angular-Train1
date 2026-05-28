import { Component } from '@angular/core';
import { BlogDto } from '../../dto/blog/dtoBlog';
import { getAllBlog, GetBlogByID } from '../../db/dbBlog/blogdb';
import { NgForOf, NgFor } from '@angular/common';
import { BlogDetail } from '../blog-detail/blog-detail';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-list',
  imports: [NgFor, BlogDetail],
  templateUrl: './blog-list.html',
  styleUrl: './blog-list.css',
  standalone: true,
})
export class BlogList {
  bloglist!: BlogDto[];
  constructor() {
    this.bloglist = getAllBlog();
  }
  selectedBlog: BlogDto = GetBlogByID(2)!;
}
