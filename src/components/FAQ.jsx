"use client";

import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "Why choose monthly instead of fixed projects?",
    answer: `Monthly Development Partnership is ideal for ongoing development needs. With a retainer, you get continuous access and priority attention from me.

    You can also add new requests at any time without having to sign a new contract. As I get to know your business better, I can deliver better and faster results.

    Fixed projects work best for one-time tasks. They have a clear scope and a set deadline.`,
  },
  {
    question: "What do you need from me to get started?",
    answer: `I’ll need your content (text, images, logo), any reference websites you like, and a brief description of your goals or personal brand. Don’t worry — I’ll guide you step-by-step!`,
  },

  {
    question: "Will my Website be SEO optimized?",
    answer:
      "Yes, I apply Full on-page SEO: clean code, fast loading, proper heading tags, and meta tags.",
  },
  {
    question: "Will my Website be mobile-friendly?",
    answer:
      "Yes! Every Website I create is fully Responsive, meaning it will look and work great on all devices — phones, tablets, and desktops.",
  },

  {
    question: "Do you offer domain and hosting?",
    answer: `I don’t sell hosting or domains, but I can guide you in purchasing and setting them up.

      I also offer free hosting setup if you already have an account with providers like Hostinger, Namecheap, GoDaddy or Vercel.`,
  },
  {
    question: "How fast will my website load?",
    answer:
      "I optimize all websites for performance using best practices like image compression, code splitting, and caching",
  },

  {
    question: "Will I be able to edit the Website later?",
    answer:
      "Yes! I build sites in a way that you (or anyone you hire later) can edit easily.",
  },
  {
    question: "Do you offer support after delivery?",
    answer:
      "Yes, I provide free basic support for a few days after delivery. If you need long-term maintenance, I also offer that as a separate service.",
  },
];
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section
      id="faq"
      className="flex flex-col gap-[60px] px-6 py-[60px] lg:flex-row lg:items-start lg:gap-[50px] lg:px-[50px] lg:py-[100px] xl:mx-auto xl:w-[1500px]"
    >
      <div className="flex flex-col items-start justify-center gap-4">
        <h1 className="bg-gradient-to-b from-black to-[#838383] bg-clip-text text-left text-[30px] font-bold text-transparent lg:text-[37px] xl:text-[40px]">
          <span className="">Frequently</span> <span>asked questions</span>
        </h1>
        <p className="text-[16px]">
          Still have questions?{" "}
          <Link
            href="https://mail.google.com/mail/u/0/?fs=1&to=contact@adonr.dev&su=i+need+your+help+for+somethings&body=Hello+Adon+Bhuiyah&tf=cm"
            target="_blank"
            className="underline decoration-1"
            rel="noopener noreferrer"
          >
            Drop us a line
          </Link>
        </p>
      </div>
      {/* FAQs */}
      <div className="flex w-full flex-col gap-3 text-[18px] lg:text-[21px] xl:text-[22px]">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`flex cursor-pointer flex-col items-center justify-center overflow-hidden rounded-3xl bg-[#F7F7F7] px-1 py-2 transition-all duration-500 sm:items-start`}
          >
            <div
              onClick={() => toggleFAQ(index)}
              className="flex w-full justify-between gap-2 p-4 font-medium text-black transition-colors duration-300"
            >
              {faq.question}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22 22"
                fill="black"
                className={`text-black transition-transform duration-700 ${
                  openIndex === index ? "rotate-180" : ""
                } ${index === 0 ? "w-[32px]" : "w-[26px]"}`}
              >
                <g id="Iconly/Light-Outline/Arrow - Down 2">
                  <g id="Arrow - Down 2">
                    <path
                      id="Stroke 1"
                      d="M4.46967 7.96967C4.73594 7.7034 5.1526 7.6792 5.44621 7.89705L5.53033 7.96967L12 14.439L18.4697 7.96967C18.7359 7.7034 19.1526 7.6792 19.4462 7.89705L19.5303 7.96967C19.7966 8.23594 19.8208 8.6526 19.6029 8.94621L19.5303 9.03033L12.5303 16.0303C12.2641 16.2966 11.8474 16.3208 11.5538 16.1029L11.4697 16.0303L4.46967 9.03033C4.17678 8.73744 4.17678 8.26256 4.46967 7.96967Z"
                      fill="currentColor"
                    />
                  </g>
                </g>
              </svg>
            </div>

            <div
              className={`overflow-hidden pr-[15px] pl-4 text-[17px] whitespace-pre-line transition-all duration-700 sm:pr-[80px] md:duration-300 lg:text-[17px] ${openIndex === index ? "max-h-[500px] pb-4 opacity-100" : "max-h-0 pb-0 opacity-0"}`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
