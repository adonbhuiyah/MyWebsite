import "./globals.css";

import Copyright from "@/components/Copyright";
import Footer from "@/components/Footer";
import HashSmoothScroll from "@/components/HashSmoothScroll";
import { Merriweather } from "next/font/google";
import Navbar from "@/components/Navbar";
import NavbarClient from "@/components/NavbarClient";
import { localFont } from "next/font/local";

const helvetica = localFont({
  src: [
    {
      path: "../../public/helvetica-light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/Helvetica.ttf",
      weight: "400",
      style: "normal",
    },

    {
      path: "../../public/Helvetica-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
  display: "swap",
});

const merriweather = Merriweather({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});
// Metadata for SEO and Social Sharing
export const metadata = {
  title: "Adon Bhuiyah | Full-Stack Developer",
  description:
    "A Passionate Full-Time Full-Stack JavaScript Developer with real-world experience building Modern, Responsive, High-performance Websites and Web Apps.",

  // 🔍 SEO
  keywords: [
    // 👤 Personal & Branding
    "Adon Bhuiyah",
    "Adon",
    "adonr.dev",
    "adon dev",
    "adonr",
    "adon bhuiyah",
    "adon bhuiyan",
    "adon bhuyan",
    "adon bhuyah",
    "adhon bhuiyah",
    "adhon bhuiyan",
    "adhon bhuyan",
    "adhon bhuyah",
    "Bhuiyah",
    "Bhuiyan",
    "Bhuyan",
    "Bhuyah",
    "adon website",
    "adon portfolio",
    "adon portfolio website",
    "adon personal website",
    "adon developer",
    "adon bhuiyah website",
    "adon bhuiyah portfolio",
    "adon bhuiyah portfolio website",
    "adon bhuiyah personal website",
    "adon bhuiyah developer",
    "adon bhuiyan website",
    "adon bhuiyan portfolio",
    "adon bhuiyan portfolio website",
    "adon bhuiyan personal website",
    "adon bhuiyan developer",
    "adon bhuyan website",
    "adon bhuyan portfolio",
    "adon bhuyan portfolio website",
    "adon bhuyan personal website",
    "adon bhuyan developer",
    "adon bhuyah website",
    "adon bhuyah portfolio",
    "adon bhuyah portfolio website",
    "adon bhuyah personal website",
    "adon bhuyah developer",
    "adhon bhuyah website",
    "adhon bhuyah portfolio",
    "adhon bhuyah portfolio website",
    "adhon bhuyah personal website",
    "adhon bhuyah developer",
    "adhon bhuiyah website",
    "adhon bhuiyah portfolio",
    "adhon bhuiyah portfolio website",
    "adhon bhuiyah personal website",
    "adhon bhuiyah developer",
    "adhon bhuiyan website",
    "adhon bhuiyan portfolio",
    "adhon bhuiyan portfolio website",
    "adhon bhuiyan personal website",
    "adhon bhuiyan developer",
    "adhon bhuyan website",
    "adhon bhuyan portfolio",
    "adhon bhuyan portfolio website",
    "adhon bhuyan personal website",
    "adhon bhuyan developer",
    "a",
    "ad",
    "ado",
    "adhon",

    // 💻 Roles & Expertise
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Software Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "Express Developer",
    "MongoDB Developer",
    "MERN Stack",
    "JS Developer",
    "TypeScript Developer",
    "Open Source Contributor",
    "Programmer",

    // 🎨 Design & UX
    "Web Design",
    "UI/UX",
    "Responsive Design",
    "Modern Web Design",
    "Clean UI",
    "Minimalist Design",
    "User Experience",

    // ⚙️ Tools & Technologies
    "REST API Developer",
    "GraphQL Developer",
    "Authentication and Authorization",
    "Database Design",
    "API Integration",
    "Performance Optimization",
    "Testing and Debugging",
    "Version Control Git",
    "GitHub Projects",
    "Agile Development",
    "DevOps",
    "CI/CD",
    "Cloud Computing",
    "Docker",
    "Kubernetes",
    "Vercel Deployment",
    "Netlify Deployment",
    "Firebase",
    "Linux",
    "Terminal",
    "Bash",
    "Web Performance",
    "SEO Optimized Websites",
    "Accessibility Developer",

    // 📂 Portfolio & Work
    "Portfolio Projects",
    "Developer Portfolio",
    "Tech Portfolio",
    "Web Applications",
    "Personal Projects",
    "Full Stack Projects",
    "Frontend Projects",
    "Backend Projects",

    // 🌍 Community & Growth
    "Tech Enthusiast",
    "Coding",
    "Programming",
    "Software Development",
    "Coding Challenges",
    "Tutorials",
    "Tech Blog",
    "Innovation",
    "Technology News",
    "Learning to Code",
    "Self Taught Developer",
    "Passionate Developer",
  ],

  category: "technology",
  applicationName: "Adon Bhuiyah",
  generator: "Next.js 15",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL("https://adonr.dev"),

  // 👤 Authorship

  creator: "Adon Bhuiyah",
  publisher: "Adon Bhuiyah",

  // 📱 Open Graph
  openGraph: {
    title: "Adon Bhuiyah | Full-Stack Developer",
    description:
      "A Passionate Full-Time Full-Stack JavaScript Developer with real-world experience building Modern, Responsive, High-performance Websites and Web Apps.",
    url: "https://adonr.dev",
    siteName: "Adon Bhuiyah",
    images: [
      {
        url: "/OGimg.png",
        width: 1200,
        height: 630,
        alt: "Adon Bhuiyah - Full-Stack Developer",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // 🐦 Twitter
  twitter: {
    card: "summary_large_image",
    title: "Adon Bhuiyah | Full-Stack Developer",
    description:
      "A Passionate Full-Time Full-Stack JavaScript Developer with real-world experience building Modern, Responsive, High-performance Websites and Web Apps.",
    site: "@AdonBhuiyah",
    creator: "@AdonBhuiyah",
    images: ["/OGimg.png"],
  },

  // 📱 Icons
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5" },
    ],
  },

  // 📄 Manifest
  manifest: "/site.webmanifest",

  // 🤖 Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },

  // 🎨 Theme
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],

  // 🕰️ Viewport & Charset
  viewport: "width=device-width, initial-scale=1",
  charset: "UTF-8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="hydrated">
      <body
        className={`${helvetica.className} ${merriweather.variable} overflow-y-scroll scroll-smooth`}
        cz-shortcut-listen="true"
      >
        {/* Client logic lives inside NavbarClient */}
        <NavbarClient>
          <HashSmoothScroll />
          {children}
          <Footer />
          <Copyright />
        </NavbarClient>
      </body>
    </html>
  );
}
