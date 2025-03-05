"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-neutral text-neutral-content py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-medium flex items-center">
            <span className="mr-2">💀</span>
            Inagales.com
          </Link>
        </div>

        {/* ハンバーガーメニューボタン（モバイル表示時のみ） */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-12 h-12 p-2 bg-primary text-primary-content rounded-md"
          onClick={toggleMenu}
          aria-label="メニューを開く"
        >
          {isMenuOpen ? (
            // ×マークを表示（メニュー開いているとき）
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            // ハンバーガーアイコンを表示（メニュー閉じているとき）
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        {/* PC表示のナビゲーション */}
        <nav className="hidden lg:block">
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
              <Link href="/news" className="hover:opacity-80 transition-colors">
                News
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
              <Link
                href="/contact"
                className="hover:opacity-80 transition-colors"
              >
                Contact
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

      {/* モバイル表示時のドロップダウンメニュー */}
      <div
        className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} transition-all duration-300 bg-neutral-focus shadow-lg`}
      >
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                href="/about"
                className="hover:opacity-80 transition-colors block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/works"
                className="hover:opacity-80 transition-colors block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Works
              </Link>
            </li>
            <li>
              <span className="text-neutral-content/40 cursor-not-allowed block py-2">
                Posts
              </span>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:opacity-80 transition-colors block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/yostos/yostos-portfolio"
                className="hover:opacity-80 transition-colors flex items-center py-2"
                onClick={() => setIsMenuOpen(false)}
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
