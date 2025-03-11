"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreativeCommons,
  faCreativeCommonsBy,
  faCreativeCommonsNc,
  faCreativeCommonsNd,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="mb-2">© 2025 Inagales.com - Toshiyuki Yoshida</p>
          <div className="flex items-center text-sm flex-wrap justify-center gap-1 mb-2">
            <span>Inagales.com by Toshiyuki Yoshida is licensed under</span>
            <Link
              href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
              target="_blank"
              className="flex items-center hover:underline ml-1"
            >
              <FontAwesomeIcon icon={faCreativeCommons} className="mx-1" />
              <FontAwesomeIcon icon={faCreativeCommonsBy} className="mx-1" />
              <FontAwesomeIcon icon={faCreativeCommonsNc} className="mx-1" />
              <FontAwesomeIcon icon={faCreativeCommonsNd} className="mx-1" />
              <span className="ml-1">CC BY-NC-ND 4.0</span>
            </Link>
            <span>(Contents),</span>
            <Link href="/lisence#source-code" className="hover:underline ml-1">
              MIT lisence
            </Link>
            <span>(Source)</span>
          </div>
          <Link href="/license" className="text-sm hover:underline">
            Terms of Use & License
          </Link>
          <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300 p-4 max-w-lg mx-auto my-4">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="card-title text-lg font-medium">
                Visitors From Around The World
              </h3>
              <div className="badge badge-primary badge-sm">Live</div>
            </div>

            <div className="divider my-1"></div>

            <div className="card-body p-2">
              <span className="tinylytics_countries flex flex-wrap gap-2 text-xl leading-relaxed"></span>
              <div className="mt-3 flex justify-between items-center text-xs text-base-content/70">
                <span>Auto-updating</span>
                <span className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"
                    />
                  </svg>
                  <span>Powered by Tinylytics</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
