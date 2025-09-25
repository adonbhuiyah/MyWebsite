"use client";

import Link from "next/link";
// This page is for separate routing path ---> /thank-you
const ThankYouPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F9FAFB] px-6">
      <div className="flex max-w-lg flex-col items-center justify-center gap-4 rounded-3xl bg-white p-10 text-center shadow-lg">
        {/* ✅ Success Icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* ✅ Title */}
        <h1 className="text-2xl font-bold text-gray-900">Thank You!</h1>

        {/* ✅ Message */}
        <p className="text-gray-600 sm:text-[18px]">
          I’ve received your form submission. I’ll get back to you as soon as
          possible.
        </p>

        {/* ✅ Button */}
        <Link
          href="/"
          className={`group relative flex h-[53px] w-[196px] cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-black bg-white px-[5px] text-lg transition-transform duration-300 hover:scale-102 focus:scale-102`}
        >
          <span
            className={`absolute inset-0 z-0 translate-x-[-100%] bg-[#E3E3E3] transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-focus:translate-x-0`}
          ></span>
          <span className="relative z-10 flex items-center gap-2 text-black transition-colors duration-300 ease-in-out">
            Back to Home
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`inline-block h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-[5px] group-focus:translate-x-[5px]`}
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M9.33333 4L13.5 8L9.33333 12M13 8H2.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
