import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Blog from 'App/Models/Blog'


export default class BlogSeeder extends BaseSeeder {
  public async run () {
    await Blog.createMany([
        {
            title: 'Blog 1',
            slug: 'blog-1',
            content: 'Blog 1 content',
            status: 'published',
            author: "Eyamin", 
            category: "Technology",
            image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            tags: "Web Development",

        },
        {
            title: 'Blog 2',
            slug: 'blog-2',
            content: 'Blog 2 content',
            status: 'published',
            author: "Eyamin",
            category: "Technology",
            image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            tags: "Web Development",
        }
      ])
  }
}
