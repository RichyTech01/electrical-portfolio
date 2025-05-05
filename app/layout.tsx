import type { Metadata } from 'next'
import Head from 'next/head';
import './globals.css'

export const metadata: Metadata = {
  title: 'Honor Electric',
  description: 'Electrician services with professionalism and expertise.',
  openGraph: {
    title: 'Honor Electric',
    description: 'Professional electrical services for homes and businesses.',
    url: 'https://HonorElectric.vercel.app',
    siteName: 'Honor Electric',
    images: [
      {
        url: 'https://honorelectric.vercel.app/image-removebg-preview.png', 
        width: 1200,
        height: 630,
        alt: 'Honor Electric Preview Image',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Honor Electric',
    description: 'Professional electrical services.',
    images: ['https://honorelectric.vercel.app/image-removebg-preview.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      
      <body>{children}</body>
    </html>
  )
}
