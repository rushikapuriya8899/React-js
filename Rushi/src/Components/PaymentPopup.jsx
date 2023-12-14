import React, { useState } from "react";

function PaymentPopup({ isOpen, onClose, total }) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
    email: "",
    hasCoupon: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(formData);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <div
        className={`fixed inset-0 flex justify-center items-center ${
          isOpen ? "visible" : "hidden"
        }`}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:max-w-md">
          <h2 className="flex justify-between items-center mb-4">
            Select Payment Option: 
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="mt-1 p-2 border w-full rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter your address"
                className="mt-1 p-2 border w-full rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="Enter your mobile number"
                className="mt-1 p-2 border w-full rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="mt-1 p-2 border w-full rounded"
              />
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="hasCoupon"
                  checked={formData.hasCoupon}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Have a coupon card?
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Amount to Pay
              </label>
              <input
                type="text"
                value={`₹ ${total}`}
                readOnly
                className="mt-1 p-2 border w-full rounded bg-gray-100"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Proceed to Pay
            </button>
          </form>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
            Cash
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
            Card
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            UPI
          </button>

          <button
            className="mt-4 bg-gray-300 px-4 py-2 rounded-md"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentPopup;
