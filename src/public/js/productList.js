// let items = make request to localhost:3000/products;
const response = fetch("http://localhost:3000/products");

response.then((res) => {
  res.json().then((data) => {
    let items = data;
    showProducts(items);
  });
});
async function showProducts(d) {
  let items = d;

  let items_div = document.getElementById("items");

  items_div.innerHTML = null;

  items.forEach(function (el, i, j) {
    let div = document.createElement("div");

    let p_name = document.createElement("h3");
    p_name.innerHTML = el.name;

    let span_detail = document.createElement("span");
    span_detail.innerHTML = el.detail;

    let p_price_detail = document.createElement("h4");
    p_price_detail.innerHTML = el.price_detail;

    let span_price = document.createElement("p");
    span_price.innerHTML = el.price;

    let img = document.createElement("img");
    img.src = el.img_1;

    div.append(img, p_name, span_detail, p_price_detail, span_price);

    div.addEventListener("click", function () {
      let id = el._id;
      let namedes = j;
      localStorage.setItem("id", JSON.stringify(id));
      window.location.href = "http://localhost:3000/home/productDesc";
    });
    div.style.cursor = "pointer";
    items_div.append(div);
  });
}

async function sortHigh() {
  let check = document.getElementById("check");
  let response = await fetch("http://localhost:3000/products");
  let data = await response.json();
  if (check.checked) {
    // let data = JSON.parse(localStorage.getItem("items"));

    let result = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i].price > 2000 && data[i].price < 3001) {
        result.push(data[i]);
      }
    }
    console.log(result);
    showProducts(result);
  } else {
    showProducts(data);
  }
}

async function sortLow() {
  let check = document.getElementById("minValue");
  let response = await fetch("http://localhost:3000/products");
  let data = await response.json();
  if (check.checked) {
    // let data = JSON.parse(localStorage.getItem("items"));

    let result = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i].price > 1000 && data[i].price < 2001) {
        result.push(data[i]);
      }
    }
    console.log(result);
    showProducts(result);
  } else {
    showProducts(data);
  }
}

async function ethnix() {
  let check = document.getElementById("ethnix");
  let response = await fetch("http://localhost:3000/products");
  let data = await response.json();
  if (check.checked) {
    // let data = JSON.parse(localStorage.getItem("items"));
    let result = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i].name == "ETHNIX") {
        result.push(data[i]);
      }
    }
    showProducts(result);
  } else {
    showProducts(data);
  }
}

async function stop() {
  let check = document.getElementById("stop");
  let response = await fetch("http://localhost:3000/products");
  let data = await response.json();
  if (check.checked) {
    // let data = JSON.parse(localStorage.getItem("items"));
    let result = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i].name == "STOP") {
        result.push(data[i]);
      }
    }
    showProducts(result);
  } else {
    showProducts(data);
  }
}

async function blue() {
  let click = document.getElementById("blue");
  let response = await fetch("http://localhost:3000/products");
  let data = await response.json();
  if (click.checked) {
    // let data = JSON.parse(localStorage.getItem("items"));
    let result = [];
    console.log(data[0].img);
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].img_1 ==
        "https://sslimages.shoppersstop.com/sys-master/images/hc1/h2b/14584881184798/206601943_9303.jpg_230Wx334H"
      ) {
        result.push(data[i]);
      }

      if (
        data[i].img_1 ==
        "https://sslimages.shoppersstop.com/sys-master/images/hb5/h92/15594685464606/A20METHKPS01NV_NAVY.jpg_1088Wx1632H"
      ) {
        result.push(data[i]);
      }

      if (
        data[i].img_1 ==
        "https://sslimages.shoppersstop.com/sys-master/images/hb0/h41/16563222183966/S21METHKUPALNV1_NAVY.jpg_1088Wx1632H"
      ) {
        result.push(data[i]);
      }
    }
    showProducts(result);
  } else {
    showProducts(data);
  }
}

async function red() {
  let check = document.getElementById("red");
  let response = await fetch("http://localhost:3000/products");
  let data = await response.json();
  if (check.checked) {
    // let data = JSON.parse(localStorage.getItem("items"));
    let result = [];

    for (let i = 0; i < data.length; i++) {
      if (
        data[i].img_1 ==
        "https://sslimages.shoppersstop.com/sys-master/images/hd6/hd3/14559405703198/206602126_9612.jpg_230Wx334H"
      ) {
        result.push(data[i]);
      }
    }
    showProducts(result);
  } else {
    showProducts(data);
  }
}

async function white() {
  let check = document.getElementById("white");
  let response = await fetch("http://localhost:3000/products");
  let data = await response.json();
  if (check.checked) {
    // let data = JSON.parse(localStorage.getItem("items"));
    let result = [];

    for (let i = 0; i < data.length; i++) {
      if (
        data[i].img_1 ==
        "https://sslimages.shoppersstop.com/sys-master/images/hc0/h01/14520727011358/206602138_9100.jpg_1088Wx1632H"
      ) {
        result.push(data[i]);
      }
      if (
        data[i].img_1 ==
        "https://sslimages.shoppersstop.com/sys-master/images/h84/h12/14521926975518/206601863_9100.jpg_1088Wx1632H"
      ) {
        result.push(data[i]);
      }
    }
    showProducts(result);
  } else {
    showProducts(data);
  }
}

async function orange() {
  let check = document.getElementById("orange");
  let response = await fetch("http://localhost:3000/products");
  let data = await response.json();
  if (check.checked) {
    // let data = JSON.parse(localStorage.getItem("items"));
    let result = [];

    for (let i = 0; i < data.length; i++) {
      if (
        data[i].img_1 ==
        "https://sslimages.shoppersstop.com/sys-master/images/h54/ha5/14584187912222/206602011_9125.jpg_230Wx334H"
      ) {
        result.push(data[i]);
      }
    }
    showProducts(result);
  } else {
    showProducts(data);
  }
}

async function pink() {
  let click = document.getElementById("pink");
  let response = await fetch("http://localhost:3000/products");
  let data = await response.json();
  if (click.checked) {
    // let data = JSON.parse(localStorage.getItem("items"));
    let result = [];
    console.log(data[0].img);
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].img_1 ==
        "https://sslimages.shoppersstop.com/sys-master/images/h4a/h2e/15595044077598/A20METHKPS03PK_PINK.jpg_230Wx334H"
      ) {
        result.push(data[i]);
      }
    }
    showProducts(result);
  } else {
    showProducts(data);
  }
}

async function black() {
  let check = document.getElementById("black");
  let response = await fetch("http://localhost:3000/products");
  let data = await response.json();
  if (check.checked) {
    // let data = JSON.parse(localStorage.getItem("items"));
    let result = [];

    for (let i = 0; i < data.length; i++) {
      if (
        data[i].img_1 ==
        "https://sslimages.shoppersstop.com/sys-master/images/hf7/ha7/14559150702622/206602125_9212.jpg_230Wx334H"
      ) {
        result.push(data[i]);
      }
      if (
        data[i].img_1 ==
        "https://sslimages.shoppersstop.com/sys-master/images/h81/h53/15594895245342/A20METHKPS05TL_MID_BLUE.jpg_230Wx334H"
      ) {
        result.push(data[i]);
      }
      if (
        data[i].img_1 ==
        "https://sslimages.shoppersstop.com/sys-master/images/hc6/hae/14559150506014/206602125_9212.jpg_1088Wx1632H"
      ) {
        result.push(data[i]);
      }
    }
    showProducts(result);
  } else {
    showProducts(data);
  }
}
