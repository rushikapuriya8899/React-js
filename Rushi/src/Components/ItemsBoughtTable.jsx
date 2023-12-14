import React, { useState } from "react";
import PaymentPopup from "./PaymentPopup";


function ItemsBoughtTable({
  items,
  totalPrice,
  setItems,
  addProduct,
  handleSelect,
  selectedCoupon,
  Coupon,
  grandTotal,
  total,
}) {
    // const handleselect = (subtotal, value, type) => {
  //   return type == percentage ? subtotal * (value / 100) : value;
  // };

  const calculateTotalQty = (items) => {
    let totalQty = 0;
    for (const item of items) {
      totalQty += item.Qty;
    }
    return totalQty;
  };
  const totalQty = calculateTotalQty(items);

  // this code for increment and decrement item in itemtable

  const handleMinus = (index) => {
    const updatedItems = [...items];
    const updatedQty = updatedItems[index].Qty - 1;

    if (updatedQty >= 1) {
      updatedItems[index].Qty = updatedQty;
      updatedItems[index].Total =
        updatedQty * parseFloat(updatedItems[index].Price);
    } else {
      updatedItems.splice(index, 1);
    }
    setItems(updatedItems);
  };

  // for Payment Option

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };


  return (
    <div className="flex flex-col h-screen bg-blue-100">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 flex-grow">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 ">
          <div className="border mx-2 border-green-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <table className="min-w-full text-center text-sm font-light ">
              <thead
                className="border-b bg-neutral-50 f
              ont-medium dark:border-neutral-500 dark:text-neutral-800"
              >
                <tr>
                  <th>No.</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr
                      className="border-b dark:border-neutral-500"
                      key={index}
                    >
                      <td className="whitespace-nowrap px-6 py-4">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.Product}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.Price}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <button
                          className="border border-black bg-red-300  w-5 mr-2"
                          onClick={() => handleMinus(index)}
                        >
                          -
                        </button>
                        {item.Qty}
                        <button
                          className="border border-black bg-green-300 w-5 ml-2"
                          onClick={() => addProduct(item.Product, item.Price)}
                        >
                          +
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        ₹ {item.Total}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="w-auto h-auto mx-2 h-32 border rounded bg-orange-100 text-black mt-2 p-4 flex flex-col justify-between flex-shrink-0 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <div className="flex justify-between">
          <span className="font-medium ">Sub Total:</span>
          <span className="whitespace-nowrap font-medium">
            ₹ {totalPrice.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Tax:</span>
          <span className="whitespace-nowrap font-medium">10%</span>
        </div>
        <div className="flex justify-between">
          <label htmlFor="Discount" className="font-medium">
            Discount:
          </label>
          <select
            name="Discount"
            className="w-24 border border-black-500 "
            onChange={handleSelect}
            value={selectedCoupon?.type || ""}
          >
            <option value="">Select Your Coupon</option>
            {Coupon.map((c) => (
              <option key={c.type} value={c.type}>
                {c.type === "none"
                  ? "No Coupon"
                  : c.type === "percentage"
                  ? "%"
                  : "Flat"}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="border w-auto mx-2 h-16 bg-blue-600 flex justify-between mt-2 items-center p-8 mb-2 rounded">
        <div>
          <h1 className="text-lg font-bold">Pay</h1>
          <h4 className="font-medium italic">{totalQty} Items</h4>
        </div>
        <div className="flex">
          <h2 className="font-semibold text-lg">
            {selectedCoupon?.type && (
              <div className="flex justify-between">
                <span className="font-medium">₹</span>
                <span className="whitespace-nowrap font-medium">
                  {grandTotal.toFixed(2)}
                </span>
              </div>
            )}
            {!selectedCoupon?.type && (
              <div className="flex justify-between">
                <span className="font-medium">₹</span>
                <span className="whitespace-nowrap font-medium">
                  {total.toFixed(2)}
                </span>
              </div>
            )}
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
            onClick={openPopup}
          >
            <path
              fillRule="evenodd"
              d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div>
      <PaymentPopup
          isOpen={isPopupOpen}
          onClose={closePopup}
          total={
            selectedCoupon?.type ? grandTotal.toFixed(2) : total.toFixed(2)
          }
        />
      </div>
    </div>
  );
}

export default ItemsBoughtTable;
