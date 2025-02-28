"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-neutral text-neutral-content py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-medium flex items-center">
            <span className="mr-2">💀</span>
            Toshiyuki Yoshida
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/about"
                className="hover:opacity-80 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/works"
                className="hover:opacity-80 transition-colors"
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                href="/posts"
                className="hover:opacity-80 transition-colors"
              >
                Posts
              </Link>
            </li>
            <li>
              <Link href="/uses" className="hover:opacity-80 transition-colors">
                Uses
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/yostos/yostos-portfolio"
                className="hover:opacity-80 transition-colors flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                Source
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
