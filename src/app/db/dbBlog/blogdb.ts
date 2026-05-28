import { BlogDto } from '../../dto/blog/dtoBlog';

const Blog: BlogDto[] = [
  {
    id: 1,
    Title: 'Title 1',
    Description: 'Description 1',
    author: 'Ali',
  },
  {
    id: 2,
    Title: 'Title 2',
    Description: 'Description 2',
    author: 'Hasan',
  },
  {
    id: 3,
    Title: 'Title 3',
    Description: 'Description 3',
    author: 'Mina',
  },
];

export function getAllBlog(): BlogDto[] {
  return Blog;
}

export function GetBlogByID(id: number): BlogDto | undefined 
{
  return Blog.find((b) => b.id === id);
}
