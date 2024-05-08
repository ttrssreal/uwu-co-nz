import type { Viewport } from "next";

export const metadata = {
  title: "UwU :3",
  openGraph: {
    title: "UwU",
    images: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Stylized_uwu_emoticon.svg/1024px-Stylized_uwu_emoticon.svg.png",
    locale: "en_NZ",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
