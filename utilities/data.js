const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-US', {
  month: '2-digit',
  day: '2-digit',
  year: 'numeric'
});

const postData = [
  {
    title: 'My First Post!',
    content: 'This is my first post. I am building a REST API with Express and MongoDB. It will have CRUD functionality. I am so excited! I/ve learned so much in just a short amount of time. It/s amazing to see how far I/ve come. It/s only up from here!',
    author: 'Imani',
    createdAt: formattedDate,
    updatedAt: formattedDate

  },
  {
    title: 'Found this picture online',
    content: 'I found this cool picture online, it/s beautiful. I hope you like it!',
    author: 'Imani',
    image: 'https://images.unsplash.com/photo-1685443866545-57adcff6e0be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
    createdAt: formattedDate,
    updatedAt: formattedDate
  },
  {
    title: 'Another post, cuz why not?',
    content: 'I/m in a writing mood today. Time to put these writing skills to the test. I/m going to write a short story. I just need to brainstorm some ideas. Keep an eye out for my next post!',
    author: 'Imani',
    createdAt: formattedDate,
    updatedAt: formattedDate
  }
];

    module.exports = postData;