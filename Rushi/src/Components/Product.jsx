import React, { useEffect, useState } from "react";
import ItemsBoughtTable from "./ItemsBoughtTable";
import { Link } from "react-router-dom";
import Like from "./Like";
// import Login from "./Login";
// import Register from "./Register";

function Product() {
  const Coupon = [
    {
      coupon: "A10",
      type: "percentage",
      value: 10, // Percentage value for the discount
    },
    {
      coupon: "FLAT50",
      type: "flat",
      value: 100, // Flat value for the discount
    },
  ];
  // const items = [
  // {
  //   "No.": "1",
  //   Product: "Rice",
  //   Price: "100",
  //   Qty: "2",
  //   Total: "200",
  // },
  // {
  //   "No.": "2",
  //   Product: "Pulses",
  //   Price: "50",
  //   Qty: "4",
  //   Total: "200",
  // },
  //   {
  //     "No.": "3",
  //     Product: "Soap",
  //     Price: "120",
  //     Qty: "3",
  //     Total: "240",
  //   },
  //   {
  //     "No.": "4",
  //     Product: "Wafers",
  //     Price: "10",
  //     Qty: "5",
  //     Total: "50",
  //   },
  // ];
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const [items, setItems] = useState([]);
  const products = [
    {
      url: "https://m.media-amazon.com/images/I/91o0m2iIpVL.jpg",
      Product: "Ashirwad",
      Price: "400",
      category: "flour",
    },
    {
      url: "https://m.media-amazon.com/images/I/913dakads1L._AC_UF1000,1000_QL80_.jpg",
      Product: "ShaktiBhog",
      Price: "300",
      category: "flour",
    },
    {
      url: "https://m.media-amazon.com/images/I/61AOiVfvtBL.jpg",
      Product: "Fortune",
      Price: "320",
      category: "flour",
    },
    {
      url: "https://www.jiomart.com/images/product/original/490870618/rajdhani-full-fibre-chakki-fresh-whole-wheat-atta-10-kg-product-images-o490870618-p490870618-0-202203151438.jpg?im=Resize=(420,420)",
      Product: "Rajdhani",
      Price: "220",
      category: "flour",
    },
    {
      url: "https://5.imimg.com/data5/SELLER/Default/2021/6/NN/EF/GK/33812545/u5ee6b8ef708644f69ee8eedd6afda5d2w.jpg",
      Product: "Dove",
      Price: "50",
      category: "soap",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj3Q-2bwBxeOs1nwp6bOy6kgjcgZatIugNlg&usqp=CAU",
      Product: "Guvava",
      Price: "80",
      category: "fruits",
    },
    {
      url: "https://ik.imagekit.io/dunzo/120f2001963f11edb8a7c66b094da3ec_PRODUCT_5bf85867269a0f1dd3c36d23_1.JPG",
      Product: "Godrej",
      Price: "60",
      category: "soap",
    },
    {
      url: "https://www.kiranamarket.com/pub/media/catalog/product/cache/03ef87980eaad8d4b708b267224682e1/8/9/8906057530854_2.jpg",
      Product: "Medimex",
      Price: "70",
      category: "soap",
    },
    {
      url: "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2021/01/30152155/shutterstock_518328943-1.jpg",
      Product: "Banana",
      Price: "60",
      category: "fruits",
    },
    {
      url: "https://blog-images-1.pharmeasy.in/2020/08/28152823/shutterstock_583745164-1.jpg",
      Product: "WaterMelon",
      Price: "80",
      category: "fruits",
    },
    {
      url: "https://freshlist.in/image/cache/catalog/001-product-images/10_mahveer/krishna/Cinthol%20Soap%20Confidence%20(3x100g)-600x600.jpeg",
      Product: "Cinthol",
      Price: "80",
      category: "soap",
    },
    {
      url: "https://www.jessicagavin.com/wp-content/uploads/2020/10/types-of-apples-1-600x900.jpg",
      Product: "Apple",
      Price: "150",
      category: "fruits",
    },
    {
      url: "https://m.media-amazon.com/images/I/61sHghARqQL.jpg",
      Product: "Dettol",
      Price: "90",
      category: "soap",
    },
    {
      url: "https://m.media-amazon.com/images/I/61K+1W9PkmL.jpg",
      Product: "Corn",
      Price: "110",
      category: "flour",
    },
    {
      url: "https://raghulilaagro.com/wp-content/uploads/2020/01/tuver-dal.jpg",
      Product: "Tuvar",
      Price: "60",
      category: "pluses",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK7iPFN2PTvEXxY-ByRVM_aferAI18ZcVApw&usqp=CAU",
      Product: "Bajra",
      Price: "105",
      category: "flour",
    },
    {
      url: "https://greenleafonline.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/1/p1_30.jpg",
      Product: "Pears",
      Price: "105",
      category: "soap",
    },
    {
      url: "https://static.tnfoodie.in/photo/84324319.cms",
      Product: "Chana",
      Price: "60",
      category: "pluses",
    },
    {
      url: "https://greenleafonline.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/1/p1_30.jpg",
      Product: "Lux",
      Price: "120",
      category: "soap",
    },
    {
      url: "https://cdn.britannica.com/45/126445-050-4C0FA9F6/Kiwi-fruit.jpg",
      Product: "Kiwi",
      Price: "70",
      category: "fruits",
    },
    {
      url: "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/04/02115837/30.jpg",
      Product: "Mung",
      Price: "70",
      category: "pluses",
    },
  ];
  const [, setSelectCategory] = useState("All");
  const [filtereditems, setFiltereditems] = useState(products);
  const handlechange = (category, Product) => {
    if (category === "All") {
      setFiltereditems(products); // Show all products
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFiltereditems(filtered);
    }
    setSelectCategory(category); // Update selected category
  };
  const categories = ["All", "flour", "soap", "fruits", "pluses"];

  const addProduct = (product, price) => {
    const itemIndex = items.findIndex((item) => item.Product === product);

    if (itemIndex !== -1) {
      // Item already exists in the cart, update quantity and total
      const updatedItems = items.map((item, index) =>
        index === itemIndex
          ? {
              ...item,
              Qty: item.Qty + 1,
              Total: (item.Qty + 1) * parseFloat(item.Price),
            }
          : item
      );
      setItems(updatedItems);
    } else {
      // Item is not in the cart, add a new entry
      setItems([
        ...items,
        {
          Product: product,
          Price: price,
          Qty: 1,
          Total: price,
        },
      ]);
    }
  };

  // Calculate the total price of all items in the shopping cart
  const totalPrice = items.reduce(
    (acc, item) => acc + parseFloat(item.Total),
    0
  );

  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
  }, [likedProducts]);
  // },[likedProducts]) state dependency call when likedProducts changes
  // },[]) call on page load
  // },) call on every render
  const addToFavorite = (product, price, url) => {
    const favoriteProduct = { Product: product, Price: price, url: url };
    setLikedProducts((prevLikedProducts) => [
      ...prevLikedProducts,
      favoriteProduct,
    ]);
  };
  // const addProduct = (product, price) => {
  //   console.log(product, price);

  //   setItems([
  //     ...items,
  //     {
  //       Product: product,
  //       Price: price,
  //       Qty: 1,
  //       Total: price,
  //     },
  //   ]);
  // };
  const taxCount = (totalPrice.toFixed(2) * 10) / 100;
  const filteredProducts = filtereditems.filter((item) => {
    return (
      item.Product.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const generateReceiptContent = () => {
    let receiptContent = "";
    receiptContent += "Your Bought Items\n";
    receiptContent += "-------------------------\n";
    items.forEach((item, index) => {
      receiptContent += `${index + 1}. ${item.Product}\n`;
      receiptContent += `   Price: ₹${item.Price}\n`;
      receiptContent += `   Qty: ${item.Qty}\n`;
      receiptContent += `   Total: ₹${item.Total}\n`;
    });
    receiptContent += "-------------------------\n";
    receiptContent += `Sub Total: ₹${totalPrice.toFixed(2)}\n`;
    receiptContent += `Tax: 10%\n`;
    if (selectedCoupon) {
      receiptContent += `Discount: ₹${discountAmount.toFixed(2)}\n`;
      receiptContent += `Grand Total: ₹${grandTotal.toFixed(2)}\n`;
    } else {
      receiptContent += `Total: ₹${subTotal.toFixed(2)}\n`;
    }
    receiptContent += "-------------------------\n";
    return receiptContent;
  };

  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const subTotal = totalPrice + taxCount;
  const total = subTotal;

  const calculateDiscount = (subtotal) =>
    selectedCoupon?.type === "percentage"
      ? (subtotal * selectedCoupon.value) / 100
      : selectedCoupon?.value;

  const discountAmount = calculateDiscount(subTotal);
  const grandTotal = subTotal - discountAmount;
  const handleSelect = (event) => {
    const selectedType = event.target.value;
    const foundCoupon = Coupon.find((c) => c.type === selectedType);
    setSelectedCoupon(foundCoupon);
  };

  const printReceipt = () => {
    const receiptContent = generateReceiptContent();

    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
    <html>
      <head>
        <title>Print Receipt</title>
      </head>
      <body>
        <pre>${receiptContent}</pre>
      </body>
    </html>
  `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <>
      {/* <Login/>
    <Register/> */}
    <div className="h-screen bg-blue-100">
      <div className=" sticky top-0 flex z-10 justify-between main-header bg-blue-500">
        <div id="button" className="ml-10 text-xl mt-4 font-bold">
          <header>Grocery pos</header>
        </div>

        <div className="flex p-2 w-1/4 justify-between">
          <div className="Print-Section flex cursor-pointer mt-2 mr-4">
            <div className="mr-1">
              <h4 onClick={printReceipt}>Print Recipt </h4>
            </div>
            <div className="Print_Icon">
              <i class="fa-solid fa-print" onClick={printReceipt}></i>
            </div>
          </div>
          <div className="flex mt-2">
            <Link to="/like">
              <i className="fa-regular fa-heart fa-lg mr-1"></i>
            </Link>
          </div>
          <div>
            <Link className="bg-orange-100" id="button1" to="/login">
              Log in
              <img
                className="h-6 w-6"
                src="./images/login.png"
                alt="login-logo"
              />
            </Link>
            </div>
            <div>
            <Link className="bg-orange-100" id="button1" to="/register">
              Register
              <img
                className="h-6 w-6"
                src="./images/register.png"
                alt="register-logo"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="main p-0.5 md:h-screen">
        <div class="md:grid grid-cols-2 gap-4 sm:grid grid-cols-1">
          <div>
            <nav class="sticky top-0 md:bg-black ">
              <div
                class="hidden w-full md:block md:w-auto p-2 ps-5 bg-black"
                id="navbar-default"
              >
                <ul class="md:font-medium flex flex-col p-4 md:p-0 mt-4 bg-black md:flex-row md:space-x-8 md:mt-0 ">
                  {categories.map(function (item, i) {
                    return (
                      <li key={i}>
                        <a
                          href="#!"
                          className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-white "
                        >
                          <button onClick={() => handlechange(item)}>
                            {item}
                          </button>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </nav>
            <div>
              <div className="flex justify-center">
                <input
                  type="search"
                  placeholder="Search Products"
                  className="w-full mx-0.5 border border-blacknpm mt-3 bg-orange-100 text-black outline-none"
                  onChange={handleSearch}
                ></input>
              </div>
              <div className="scrollable-container h-screen overflow-y-auto">
                <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 bg-blue-400 ">
                  {filteredProducts.map((item, index) => {
                    return (
                      <div
                        key={index}
                        class="block rounded-sm bg-blue-200 hover:bg-blue-400 mt-4"
                      >
                        <div className="float-right mr-2">
                          <i
                            class="fa-regular fa-heart fa-sm"
                            onClick={() =>
                              addToFavorite(item.Product, item.Price, item.url)
                            }
                          ></i>
                        </div>
                        <a href="#! flex-1">
                          <img
                            class="rounded-t-sm mx-auto"
                            style={{ height: "80px" }}
                            src={item.url}
                            alt=""
                          />
                        </a>
                        <div class="p-2 pb-5  text-center">
                          <h5 class="mb-2 text-xl font-medium">
                            {item.Product}
                          </h5>
                          <h5 class="mb-2 mx-auto  font-medium text-black">
                            ₹ {item.Price}
                          </h5>
                          <button
                            type="button"
                            class="inline-block bg-black text-white p-1 w-20 rounded-md shadow-md hover:bg-orange-100 hover:text-black hover:shadow-lg"
                            onClick={() => addProduct(item.Product, item.Price)}
                          >
                            Add
                          </button> 
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <ItemsBoughtTable
                items={items}
                totalPrice={totalPrice}
                taxCount={taxCount}
                addProduct={addProduct}
                setItems={setItems}
                selectedCoupon={selectedCoupon}
                handleSelect={handleSelect}
                Coupon={Coupon}
                grandTotal={grandTotal}
                total={total}
              />

              <Like likedProducts />
            </div>

            {/* <div className="w-96 bg-blue-500 h-24 border border-radius-4">
              <h2 className="text-xl">Pay</h2> */}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Product;
