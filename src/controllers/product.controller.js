const express = require( "express" );
const router = express.Router();

const Product = require( "../models/product.model" );

router.get( "/:id", async ( req, res ) => {
  const product = await Product.findById( req.params.id ).lean().exec();
  res.send( product );
} );

router.get( "/", async ( req, res ) => {
  const products = await Product.find().lean().exec();
  res.send( products );
} );

router.post( "/", async ( req, res ) => {
  const products = await Product.create( req.body );
  res.send( { Added: products } );
} );

module.exports = router;
