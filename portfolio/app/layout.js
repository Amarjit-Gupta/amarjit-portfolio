// import "./globals.css";

// export const metadata = {
//   title: {
//     default: "Amarjit Gupta | Portfolio",
//     template: "%s | Amarjit Gupta",
//   },
//   description:
//     "Amarjit Gupta | Web Developer Portfolio showcasing projects, skills, and expertise in React, Next.js, and full-stack development.",
//   keywords: ["Amarjit Gupta", "Portfolio", "Web Developer", "React", "Next.js", "MERN Stack","Amarjit gupta Portfolio"],
//   icons: {
//     icon: "/images/react.png",
//   },
//   metadataBase: new URL("https://amarjit-portfolio.vercel.app/"),
//   openGraph: {
//     title: "Amarjit Gupta Portfolio",
//     description: "Amarjit Gupta | Web Developer Portfolio showcasing projects, skills, and expertise in React, Next.js, and full-stack development.",
//     url: "https://amarjit-portfolio.vercel.app/",
//     siteName: "Amarjit Gupta",
//     images: [
//       {
//         url: "/images/react.png",
//         width: 1200,
//         height: 630,
//         alt: "Amarjit Gupta Portfolio",
//       },
//     ],
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Amarjit Gupta Portfolio",
//     description: "Amarjit Gupta | Web Developer Portfolio showcasing projects, skills, and expertise in React, Next.js, and full-stack development.",
//     creator: "@amarjitgupta",
//     images: ["/images/react.png"],
//   },
// };


// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         {children}
//       </body>
//     </html>
//   );
// }




import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export const metadata = {
  metadataBase: new URL("https://amarjit-portfolio.vercel.app/"),
  
  title: {
    default: "Amarjit Gupta | Full Stack Developer",
    template: "%s | Amarjit Gupta",
  },
  
  description:
    "Amarjit Gupta - Full Stack Developer specializing in React, Next.js, and MERN Stack. Explore my projects and professional journey.",
  
  keywords: [
    "Amarjit Gupta",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "MERN Stack",
    "Web Developer Portfolio",
    "JavaScript Developer",
    "TypeScript Developer",
  ],
  
  authors: [{ name: "Amarjit Gupta", url: "https://amarjit-portfolio.vercel.app/" }],
  
  creator: "Amarjit Gupta",
  publisher: "Amarjit Gupta",
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
 icons: {
  icon: [
    { url: "/favicon.ico", sizes: "any" },
    { url: "/images/react.png", type: "image/png" },
  ],
  apple: { url: "/apple-touch-icon.png" },
  shortcut: { url: "/favicon.ico" },
},
  
  openGraph: {
    title: "Amarjit Gupta | Full Stack Developer Portfolio",
    description: "Explore the portfolio of Amarjit Gupta, a Full Stack Developer specializing in React, Next.js, and MERN Stack development.",
    url: "https://amarjit-portfolio.vercel.app/",
    siteName: "Amarjit Gupta Portfolio",
    images: [
      {
        url: "/images/amarjit-gupta.jpeg",
        width: 1200,
        height: 630,
        alt: "Amarjit Gupta - Full Stack Developer Portfolio",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Amarjit Gupta | Full Stack Developer Portfolio",
    description: "Full Stack Developer specializing in React, Next.js, and MERN Stack.",
    creator: "@amarjitgupta",
    site: "@amarjitgupta",
    images: ["/images/amarjit-gupta.jpeg"],
  },
  
  alternates: {
    canonical: "https://amarjit-portfolio.vercel.app/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Amarjit Gupta",
              url: "https://amarjit-portfolio.vercel.app/",
              jobTitle: "Full Stack Developer",
              image: "https://amarjit-portfolio.vercel.app/images/amarjit-gupta.jpeg",
              description:
                "Full Stack Developer specializing in React, Next.js, and MERN Stack development.",
              knowsAbout: [
                "React",
                "Next.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "JavaScript",
                "TypeScript",
                "Tailwind CSS",
                "MERN Stack",
                "Full Stack Development",
              ],
              sameAs: [
                "https://github.com/Amarjit-Gupta",
                "https://www.linkedin.com/in/amarjit-gupta-03a633357/",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Self-Employed",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}

