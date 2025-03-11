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
        </div>
      </div>
      <section>
        <span className="tinylytics_hits"></span>
        <button className="tinylytics_kudos"></button>
        <div>
          <span className="tinylytics_countries"></span>
        </div>
        <div>
          <a href="" className="tinylytics_webring">
            🕸️💍
          </a>
        </div>
      </section>
    </footer>
  );
}
