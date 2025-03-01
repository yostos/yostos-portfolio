"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreativeCommons,
  faCreativeCommonsBy,
  faCreativeCommonsNc,
  faCreativeCommonsNd,
} from "@fortawesome/free-brands-svg-icons";

export default function License() {
  return (
    <main className="min-h-screen py-16 bg-base-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-12">ライセンス情報</h1>

        {/* コンテンツライセンス */}
        <section id="contents" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">コンテンツライセンス</h2>
          <div className="card bg-base-200 shadow-sm p-6">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={faCreativeCommons}
                className="text-2xl mr-2"
              />
              <FontAwesomeIcon
                icon={faCreativeCommonsBy}
                className="text-2xl mr-2"
              />
              <FontAwesomeIcon
                icon={faCreativeCommonsNc}
                className="text-2xl mr-2"
              />
              <FontAwesomeIcon
                icon={faCreativeCommonsNd}
                className="text-2xl mr-2"
              />
              <span className="text-xl font-medium">CC BY-NC-ND 4.0</span>
            </div>
            <p className="mb-4">
              当サイトのコンテンツ（テキスト、画像、その他のメディア）は、特に明記されていない限り、
              Creative Commons Attribution-NonCommercial-NoDerivatives 4.0
              International License（CC BY-NC-ND 4.0）の下で提供されています。
            </p>
            <p className="mb-4">このライセンスの下では：</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>表示</strong> —
                適切なクレジットを表示し、ライセンスへのリンクを提供し、変更があったかどうかを示す必要があります。
              </li>
              <li>
                <strong>非営利</strong> —
                商用目的でこの作品を使用することはできません。
              </li>
              <li>
                <strong>改変禁止</strong> —
                この作品を変更、変形、または改変して二次的著作物を作成する場合、変更された資料を配布することはできません。
              </li>
            </ul>
            <p>
              <Link
                href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
                target="_blank"
                className="text-primary hover:underline"
              >
                ライセンスの全文を読む
              </Link>
            </p>
          </div>
        </section>

        {/* ソースコードライセンス */}
        <section id="souce-code" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">ソースコードライセンス</h2>
          <div className="card bg-base-200 shadow-sm p-6">
            <h3 className="text-xl font-medium mb-4">MIT License</h3>
            <p className="mb-4">
              当サイトのソースコードは、MIT Licenseの下で提供されています。
            </p>
            <div className="bg-base-300 p-4 rounded-lg mb-4 font-mono text-sm">
              <p className="mb-2">Copyright (c) 2025 Toshiyuki Yoshida</p>
              <p className="mb-2">
                Permission is hereby granted, free of charge, to any person
                obtaining a copy of this software and associated documentation
                files (the &quot;Software&quot;), to deal in the Software
                without restriction, including without limitation the rights to
                use, copy, modify, merge, publish, distribute, sublicense,
                and/or sell copies of the Software, and to permit persons to
                whom the Software is furnished to do so, subject to the
                following conditions:
              </p>
              <p className="mb-2">
                The above copyright notice and this permission notice shall be
                included in all copies or substantial portions of the Software.
              </p>
              <p>
                THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF
                ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE
                AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
                HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
                WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
                OTHER DEALINGS IN THE SOFTWARE.
              </p>
            </div>
          </div>
        </section>

        {/* 使用ソフトウェア一覧 */}
        <section id="software">
          <h2 className="text-2xl font-bold mb-4">使用ソフトウェア</h2>
          <div className="card bg-base-200 shadow-sm p-6">
            <p className="mb-4">
              このウェブサイトは以下のオープンソースソフトウェアを使用して構築されています：
            </p>
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full">
                <thead>
                  <tr>
                    <th>ソフトウェア</th>
                    <th>バージョン</th>
                    <th>ライセンス</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Next.js</td>
                    <td>15.x</td>
                    <td>MIT</td>
                  </tr>
                  <tr>
                    <td>React</td>
                    <td>19.x</td>
                    <td>MIT</td>
                  </tr>
                  <tr>
                    <td>Tailwind CSS</td>
                    <td>4.x</td>
                    <td>MIT</td>
                  </tr>
                  <tr>
                    <td>daisyUI</td>
                    <td>4.x</td>
                    <td>MIT</td>
                  </tr>
                  <tr>
                    <td>Font Awesome</td>
                    <td>6.x</td>
                    <td>Font Awesome Free License</td>
                  </tr>
                  <tr>
                    <td>Three.js</td>
                    <td>0.174.x</td>
                    <td>MIT</td>
                  </tr>
                  <tr>
                    <td>React Three Fiber</td>
                    <td>9.x</td>
                    <td>MIT</td>
                  </tr>
                  <tr>
                    <td>React Three Drei</td>
                    <td>10.x</td>
                    <td>MIT</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm">
              これらのソフトウェアの詳細なライセンス情報は、各プロジェクトの公式リポジトリで確認できます。
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
