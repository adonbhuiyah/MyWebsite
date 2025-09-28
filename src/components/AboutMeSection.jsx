import Image from "next/image";
import MyBannerImage from "../../public/MyBannerImage.png";
import React from "react";

const AboutMeSection = () => {
  const SVGIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -4  32 32"
      fill="none"
      className="w-[52px]"
    >
      <path
        d="M11.8201 4L14.4574 4L20 11.5L14.4574 19H11.8201L14.3956 15.5239C15.467 14.0772 16.2294 13.066 16.6827 12.4902L5 12.4902L5 10.4888L16.6827 10.4888C16.1332 9.78652 15.3709 8.7823 14.3956 7.47612L11.8201 4Z"
        fill="currentColor"
      />
    </svg>
  );
  const MySkills = [
    {
      id: 1,
      icon: SVGIcon,
      title: "Full-Stack Dev",
    },
    {
      id: 2,
      icon: SVGIcon,
      title: "Designer",
    },
    {
      id: 3,
      icon: SVGIcon,
      title: "Solana Learner",
    },
  ];
  return (
    <section
      id="about-me"
      className="mt-[100px] w-full rounded-[20px] bg-black px-6 py-[80px] md:rounded-[30px] md:py-[120px] lg:rounded-[40px] lg:px-[50px] lg:py-[150px] xl:px-[100px]"
    >
      <div className="lg:flex lg:gap-8 xl:gap-12 2xl:mx-auto 2xl:w-[1500px]">
        {/* this is the left side of the about me section */}
        <div>
          <h1 className="mb-4 flex items-center justify-start gap-2 text-lg font-bold text-[#E84A24] md:text-[20px] lg:text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 230  230"
              fill="#E84A24"
              className="w-[20px]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M120 0H80V51.7157L43.4315 15.1472L15.1472 43.4314L51.7158 80H0V120H51.7157L15.1472 156.568L43.4315 184.853L80 148.284V200H120V148.284L156.569 184.853L184.853 156.569L148.284 120H200V80H148.284L184.853 43.4314L156.569 15.1471L120 51.7157V0Z"
              />
            </svg>
            <span>MEET ADON</span>
          </h1>
          <p className="mb-6 text-2xl font-bold text-[#EFEFEF] md:max-w-[625px] md:text-[37px]">
            I'm the guy behind Adon - more than just a pixel-perfect developer.
          </p>
          <div className="mb-6 flex flex-col items-start justify-center">
            {MySkills.map(({ id, icon, title }) => (
              <div
                key={id}
                className="flex items-center justify-start text-[22px] text-[#BDBDBD]"
              >
                {icon}
                <span>{title}</span>
              </div>
            ))}
          </div>
          {/* this picture hides if the screen is larger than 1024px */}
          <Image
            src={MyBannerImage}
            className="mb-[63px] w-full rounded-lg object-cover md:rounded-3xl lg:hidden xl:rounded-4xl"
            decoding="async"
            alt="My Picture"
          />
        </div>
        {/* this is the right side of the about me section */}
        <div className="flex flex-col items-start justify-center gap-6 text-[#EFEFEF] sm:flex-row sm:gap-12 lg:w-[680px] lg:flex-col lg:items-center xl:w-[760px]">
          {/* this picture shows if the screen is larger than 1024px */}
          <Image
            src={MyBannerImage}
            className="hidden w-full rounded-lg object-cover md:rounded-3xl lg:block xl:rounded-4xl"
            decoding="async"
            alt="My Picture"
          />

          <h1 className="font-merriweather text-[30px] font-bold sm:text-[37px]">
            Hello there!
          </h1>
          <div className="flex flex-col items-start justify-center gap-6 [&_p]:text-[18px] md:[&_p]:text-[20px]">
            <p>
              <span className="text-[22px] lg:text-[24px] xl:text-[27px]">
                👋{" "}
              </span>{" "}
              Hi, I'm Adon Bhuiyah — A Passionate Full-Time Full-Stack
              JavaScript Developer with real-world experience building Modern,
              Responsive, High-performance websites and web apps.
            </p>
            <p>
              I specialize in React, Next.js, Node.js, Express & MongoDB. From
              Portfolio, Personal Website and eCommerce to Crypto Platforms and
              Dashboards — I deliver clean code, intuitive UI/UX, SEO-ready
              design & secure backends.{" "}
            </p>
            <p>
              I've worked with Startups and long-term Teams, ensuring fast
              delivery and pixel-perfect results. Always learning, always
              improving — let’s build something powerful together!{" "}
            </p>
            <p>How can I help bring your next idea to life?</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
