const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-US', {
  month: '2-digit',
  day: '2-digit',
  year: 'numeric'
});

const postData = [
  {
    title: 'Post 1',
    content: 'This is the first post',
    author: 'Imani',
    createdAt: formattedDate,
    updatedAt: formattedDate
  },
  {
    title: 'Post 2',
    content: 'This is the second post',
    author: 'Imani',
    createdAt: formattedDate,
    updatedAt: formattedDate
  },
  {
    title: 'Post 3',
    content: 'This is the third post',
    author: 'Imani',
    createdAt: formattedDate,
    updatedAt: formattedDate
  }
];

    module.exports = postData;