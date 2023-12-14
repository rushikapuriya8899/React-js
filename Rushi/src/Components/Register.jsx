import React from 'react'

function Register() {
  return (
    <div>
      <div className="bg-gray-50 dark:bg-gray-900 mt-10 mb-10" id="register">
        <div className="flex justify-center">
      <a
      href="_blank"
      className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
    >
      <img
        className="w-40 h-40 "
        src="https://o.remove.bg/downloads/346b7b76-9690-4463-a510-423a091e88a8/images-removebg-preview.png"
        alt="logo"
      />
    </a>
    </div>
  <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mb-10">
      <h1 className="mb-8 text-3xl text-center">Sign up</h1>
      <input
        type="text"
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="fullname"
        placeholder="Full Name"
      />
      <input
        type="text"
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="email"
        placeholder="Email"
      />
      <input
        type="password"
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="password"
        maxLength={6}
        placeholder="Password"
      />
      <input
        type="password"
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="confirm_password"
        maxLength={6}
        placeholder="Confirm Password"
      />
      <button
        type="submit"
        className="w-full text-center py-3 rounded bg-black text-white hover:bg-green-dark focus:outline-none my-1"
      >
        Create Account
      </button>
    <div className="text-grey-dark mt-6 text-center">
      Already have an account?
      <a
        className="no-underline border-b border-blue text-blue"
        href="#login"
      >
        Log in.
      </a>
    </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Register
