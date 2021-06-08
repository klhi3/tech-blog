const { Post } = require('../models');

const postdata = [
  {
    title: 'Printemps',
    content: 'Content Printemps',
    created_date: 'April 20, 2021 07:00:00',
    updated_date: 'June 21, 2021 17:00:00',
    user_id: 1
  },
  {
    title: 'Sommer',
    content: 'contentSommer',
    created_date: 'June 22, 2021 09:00:00',
    updated_date: 'September 22, 2021 22:00:00',
    user_id: 1
  },
  {
    title: 'Herfst',
    content: 'contentHerfst',
    created_date: 'September 23, 2021 08:30:00',
    updated_date: 'December 21, 2021 20:30:00',
    user_id: 2
  },
  {
    title: 'Invierno',
    content: 'contentInvierno',
    created_date: 'December 22, 2020 11:00:00',
    updated_date: 'March 19, 2021 19:00:00',
    user_id: 2
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
