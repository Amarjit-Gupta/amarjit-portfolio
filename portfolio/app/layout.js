import "./globals.css";

export const metadata = {
  title: {
    default: "Amarjit Gupta | Portfolio",
    template: "%s | Amarjit Gupta",
  },
  description:
    "Amarjit Gupta | Web Developer Portfolio showcasing projects, skills, and expertise in React, Next.js, and full-stack development.",
  keywords: ["Amarjit Gupta", "Portfolio", "Web Developer", "React", "Next.js", "MERN Stack","Amarjit gupta Portfolio"],
  icons: {
    icon: "/images/react.png",
  },
  metadataBase: new URL("https://amarjit-portfolio.vercel.app/"),
  openGraph: {
    title: "Amarjit Gupta Portfolio",
    description: "Amarjit Gupta | Web Developer Portfolio showcasing projects, skills, and expertise in React, Next.js, and full-stack development.",
    url: "https://amarjit-portfolio.vercel.app/",
    siteName: "Amarjit Gupta",
    images: [
      {
        url: "/images/react.png",
        width: 1200,
        height: 630,
        alt: "Amarjit Gupta Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amarjit Gupta Portfolio",
    description: "Amarjit Gupta | Web Developer Portfolio showcasing projects, skills, and expertise in React, Next.js, and full-stack development.",
    creator: "@amarjitgupta",
    images: ["/images/react.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}





