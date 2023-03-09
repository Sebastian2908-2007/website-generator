const {Page} = require('../models');

const pageController = {
    async createPage ({body},res) {
        console.log(body);
        try{
        const slug = body.name.toLowerCase().split(' ').join('-');
        body.slug = slug;
        const page = new Page(body);
        const pageResponse = await page.save();
        console.log('IN Controller',pageResponse);
        return pageResponse;
        }catch(e) {
            console.log(e);
        }
      },
};

module.exports = pageController;