const { readFileSync } = require('fs');
const path = require('path');

// make control

const showHomePage = (req , res) =>{

const slider = readFileSync(path.join(__dirname , '../db/slider.json'));
const clients = readFileSync(path.join(__dirname , '../db/clients.json'));
const slider2 = readFileSync(path.join(__dirname , '../db/slide2.json'));
const blog = readFileSync(path.join(__dirname , '../db/blog.json'));

    res.status(200).render('index' , {

        slider: JSON.parse(slider.toString()),
        clients: JSON.parse(clients.toString()),
        slider2: JSON.parse(slider2.toString()),
        blog: JSON.parse(blog.toString())

    });

}


const showBlogPage = (req, res) => {

    const blogs = JSON.parse(readFileSync(path.join(__dirname, '../db/blog2.json')));

    const single_blog = blogs.find(data => data.id == req.params.id);

    res.status(200).render('blog', {

        blogs: single_blog

    });

}


const showShopPage = (req, res) => {

    const products = readFileSync(path.join(__dirname, '../db/products.json'));

    res.status(200).render('shop-3col', {

        products: JSON.parse(products.toString()),


    });

}

const showShopSinglePage = (req, res) => {

    const product = JSON.parse(readFileSync(path.join(__dirname, '../db/products.json')));

    const single_shop = product.find(data => data.id == req.params.id)

    res.status(200).render('single', {

        product: single_shop

    });

}






// exports control

module.exports = {
    showHomePage,
    showBlogPage,
    showShopPage,
    showShopSinglePage
};