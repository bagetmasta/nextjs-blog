# Project Description: NextJS Blog

NextJS Blog is a blog about web technologies that we regularly use for our convenience in development. The app has 4 routes:

1. A homepage with featured posts.
2. A page with a list of all posts.
3. A page with details of each post.
4. A page with a feedback form.

The markup for each post is written using Markdown. I used the "react-markdown" and "react-syntax-highlighter" packages to handle markdown and style it beautifully, for example, by highlighting code snippets.

Users can leave their impressions in the form on the Contact page and will see whether their message has been sent or not thanks to a notification tied to a successful/unsuccessful connection to MongoDB.

Enjoy your use!

---

To set up this project on your local machine, follow the steps below.

## Option 1: Production Mode

This option is useful if you want to simulate a production environment on your local machine.

1. Install all project dependencies: **npm install**
2. Create a production-ready build: **npm run build**
3. Start the application: **npm start**

## Option 2: Development Mode

This option is useful if you are a developer wanting to make changes to the application and test them in real-time.

1. Install all project dependencies: **npm install**
2. Start the application in development mode: **npm run dev**
