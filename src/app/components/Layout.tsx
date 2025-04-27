"use client";
import { ReactNode } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
          <Link 
              href="#" 
              className="text-blue-600 font-bold text-xl flex items-center space-x-2 hover:text-blue-700 transition-colors"
            >
              {/* SIM Card Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-4 1m2 0l-2 2m5.5-3a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM14 4l-1.5 2"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 12h16M4 4h4v4H4V4zm0 12h4v4H4v-4zm16 0h-4v4h4v-4zm0-12h-4v4h4V4z"
                />
              </svg>
              <span>eSIM Manager</span>
            </Link>

            
            <div className="space-x-4">
              {pathname !== "/" && (
                <Link
                  href="/"
                  className="flex items-center space-x-2 px-4 py-2 
                    text-red-600 hover:text-white
                    bg-white hover:bg-red-600
                    border-2 border-red-600 hover:border-red-700
                    rounded-lg 
                    transition-all duration-300 ease-in-out
                    shadow-sm hover:shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Log Out</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}