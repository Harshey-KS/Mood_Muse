import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      default:
        'https://s.yimg.com/uu/api/res/1.2/JPnlrRZ8yrKd71YYY1zGwQ--~B/aD0xNDk0O3c9MjQwMDtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/time_72/e20d4fbe29a3cca80091ad8dda976c12',
    },
    category: {
      type: String,
      default: 'uncategorized',
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

export default Post;
