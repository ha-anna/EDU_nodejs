const Product = require('../models/product')

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {pageTitle: 'Shop', products: products, path: '/products'})
  })
}

exports.getProduct = (req, res, next) => {
  const id = req.params.id
  Product.findById(id, product => res.render('shop/product-detail', {pageTitle: 'Product Details', path: '/products', product: product}))
}

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {pageTitle: 'Shop', products: products, path: '/'})
  })
}

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {pageTitle: 'Cart', path: '/cart'})
}

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {pageTitle: 'Checkout', path: '/checkout'})
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {pageTitle: 'Orders', path: '/orders'})
}