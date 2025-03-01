import React from 'react'

const Form = () => {
  return (
    <form>
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">
        Name
      </label>
      <input
        type="text"
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your name"
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">
        Email
      </label>
      <input
        type="email"
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your email"
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">
        Message
      </label>
      <textarea
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your message"
        rows="4"
      ></textarea>
    </div>

    <button
      type="submit"
      className="w-1/4 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
    >
      Send Message
    </button>
  </form>
  )
}

export default Form
