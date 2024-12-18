import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen mt-50 flex items-center justify-center bg-gray-100 p-4">
      <Head>
        <title>Thank You - DigiExpo</title>
        <meta name="description" content="Thank you for your submission" />
      </Head>
      
      <div className="bg-white shadow-md rounded-lg p-6 text-center max-w-md w-full">
        <h1 className="text-2xl font-semibold text-blue-600 mb-3">
          Thank You for Your Submission
        </h1>
        
        <p className="text-blue-500 mb-4 text-sm">
          We have received your message and will get back to you soon.
        </p>
        
        <Link href="/" className="inline-block bg-red-500 hover:bg-blue-600 text-black text-sm font-medium py-2 px-4 rounded">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
