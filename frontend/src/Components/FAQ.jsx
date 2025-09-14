import React, { useState } from "react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        'Click the "Sign Up" button in the top right corner and follow the registration process.',
    },
    {
      question: "I forgot my password. What should I do?",
      answer:
        'Click on "Forgot Password" on the login page and follow the instructions sent to your email.',
    },
    {
      question: "How do I update my profile information?",
      answer:
        'Go to "My Account" settings and select "Edit Profile" to make changes.',
    },
  ]

  return (
    <div className="w-full max-w-md mx-auto mt-6">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-md mb-2 bg-white shadow-sm"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold hover:bg-gray-50 transition-colors"
          >
            <span>{faq.question}</span>
            <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
          </button>

          <div
            className={`px-4 pb-3 text-sm text-gray-600 overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  )
}
