const {Page} = require('../models');

const pageController = {
    async createPage ({body},res) {
        //console.log('before slug',body);
        try{
        const slug = body.name.toLowerCase().split(' ').join('-');
        body.slug = slug;
       // console.log('body A Slug',body);
        const page = await Page.create({ name:body.name,slug:body.slug });
       // console.log('Mongo page',page);
       return res.json(page);
        }catch(e) {
            console.log(e);
        }
      },
};

module.exports = pageController;