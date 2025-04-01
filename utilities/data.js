const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-US', {
  month: '2-digit',
  day: '2-digit',
  year: 'numeric'
});

const postData = [
  {
    title: 'My First Post!',
    content: `This is my first post. I am building a REST API with Express and MongoDB. It will have CRUD functionality. I am so excited! I've learned so much in just a short amount of time. It's amazing to see how far I've come. It's only up from here!`,
    image: 'https://cdn.shopify.com/s/files/1/1061/1924/products/4_100x100.png?v=1571606116&w=75&h=75',
    author: 'Imani',
    createdAt: formattedDate,
    updatedAt: formattedDate

  },
  {
    title: 'Found this picture online',
    content: `I found this cool picture online, it's beautiful. I hope you like it!`,
    author: 'Imani',
    image: 'https://c4.wallpaperflare.com/wallpaper/77/491/722/500px-landscape-photography-wallpaper-preview.jpg',
    createdAt: formattedDate,
    updatedAt: formattedDate
  },
  {
    title: 'Another post, cuz why not?',
    content: `I'm in a writing mood today. Time to put these writing skills to the test. I'm going to write a short story. I just need to brainstorm some ideas. Keep an eye out for my next post!`,
    author: 'Imani',
    image: 'https://islamicstudies.artsci.utoronto.ca/wp-content/uploads/2023/02/oli-dale-xjSkI_seiZY-unsplash-500x500.jpg',
    createdAt: formattedDate,
    updatedAt: formattedDate
  },
  {
    title: 'Short Story',
    content: `Hey, I'm back! I wrote a short story. I hope you like it! Once upon a time there was a developer who wanted to build a REST API. She had no idea what she was doing, but she was determined to figure it out. She spent hours researching and practicing. She was so excited when she finally got it to work. She was so proud of herself. The end.`,
    author: 'Imani',
    image: 'https://www.writersrepublic.com/storage/app/uploads/public/plo/t-s/tru/plot-structure.webp?w=500&h=500',
    createdAt: formattedDate,
    updatedAt: formattedDate
  }
];

    module.exports = postData;