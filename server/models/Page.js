const mongoose = require('mongoose');
const { Schema,model } = mongoose;

const PageSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
    },
    slug: {
      type: String,
      required: true,
    },
    content: Object,
  },
  {
    timestamps: true,
  },
);

const Page =  model('Pages', PageSchema);

module.exports = Page;