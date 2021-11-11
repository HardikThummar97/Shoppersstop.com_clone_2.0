let id = JSON.parse( localStorage.getItem( "id" ) );

fetch( `/products/${ id }` )
  .then( ( response ) => response.json() )
  .then( ( data ) => {
    var item = data;
    showDesc( item );
    productDescc( item );
  } );

// let items = JSON.parse(localStorage.getItem("items"));

function showDesc( item ) {
  let desc_1 = document.getElementById( "c1-slider_1" );
  let div_desc1 = document.createElement( "div" );

  let p_name = document.createElement( "h1" );
  p_name.innerHTML = item.name;

  let detail = document.createElement( "p" );
  detail.innerHTML = item.detail_1;

  let price = document.createElement( "h3" );
  price.innerHTML = item.price_detail;

  let actualPrice = document.createElement( "h2" );
  actualPrice.innerHTML = item.price;

  let innerDiv = document.createElement( "div" );

  let tax = document.createElement( "span" );
  tax.innerText = "Includes all taxes";
  innerDiv.append( tax );

  let color_div = document.getElementById( "colorbox" );

  let img_6 = document.createElement( "img" );
  img_6.src = item.img_5;
  color_div.append( img_6 );

  div_desc1.append( p_name, detail, price, actualPrice, innerDiv );

  desc_1.append( div_desc1 );
}
// showDesc();

function productDescc( item ) {
  let img_1 = document.getElementById( "img_1" );
  let img_2 = document.getElementById( "img_2" );
  let img_3 = document.getElementById( "img_3" );
  let img_4 = document.getElementById( "img_4" );
  let img_5 = document.getElementById( "img_5" );

  img_1.src = item.img_1;
  img_2.src = item.img_2;
  img_3.src = item.img_3;
  img_4.src = item.img_4;
  img_5.src = item.img_5;

  let main_1 = document.getElementById( "main_1" );
  let main_2 = document.getElementById( "main_2" );
  let main_3 = document.getElementById( "main_3" );
  let main_4 = document.getElementById( "main_4" );
  let main_5 = document.getElementById( "main_5" );

  main_1.src = item.img_1;
  main_2.src = item.img_2;
  main_3.src = item.img_3;
  main_4.src = item.img_4;
  main_5.src = item.img_5;
}

// productDescc();

async function addToCart() {
  let response = await fetch( `/cart/${ id }` );
  let cartProduct = await response.json();

  if ( cartProduct.product == null ) {
    let response = await fetch( `/products/${ id }` );
    let cartObj = await response.json();
    cartObj.quantity = 1;

    let product = JSON.stringify( cartObj );

    fetch( `/cart`, {
      method: "POST",
      body: product,
      headers: {
        "Content-Type": "application/json",
      },
    } )
      .then( function ( res ) {
        return res.json();
      } )
      .catch( function ( res ) {
        console.log( "err: ", res );
      } );

    //Also ading to local storage, to effectively render cart page;
    let response1 = await fetch( `/cart` );
    let cartObj1 = await response1.json();
    localStorage.setItem( "cart", JSON.stringify( cartObj1.cart ) );

    window.location.href = "/home/cart";
  } else {
    alert( "Product already added in cart" );
    window.location.href = "/home/cart";
  }
}
