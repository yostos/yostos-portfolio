"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faCheck,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faBluesky,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "エラーが発生しました");
      }
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "メッセージ送信中にエラーが発生しました。";
      setError(errorMessage);
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen py-16 bg-base-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-6">Contact</h1>

        <p className="text-center mb-12 max-w-2xl mx-auto">
          お問い合わせ、プロジェクトのご相談、またはただの挨拶でも、お気軽にご連絡ください。
          できるだけ早くご返信いたします。
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            {isSubmitted ? (
              <div className="card bg-success text-success-content p-8 text-center">
                <FontAwesomeIcon icon={faCheck} className="text-4xl mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  メッセージを送信しました！
                </h3>
                <p>
                  お問い合わせありがとうございます。できるだけ早くご返信いたします。
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="card bg-base-200 shadow-md p-8 border border-base-300"
              >
                <div className="form-control mb-6">
                  <label className="label mb-8" htmlFor="name">
                    <span className="label-text font-medium text-base">
                      お名前
                    </span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input input-bordered bg-slate-50 dark:bg-slate-800 shadow-sm border  focus:border-primary focus:ring-2 focus:ring-primary/20 w-full"
                    required
                  />
                </div>

                <div className="form-control mb-6">
                  <label className="label mb-8" htmlFor="email">
                    <span className="label-text font-medium text-base">
                      メールアドレス
                    </span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input input-bordered bg-slate-50 dark:bg-slate-800 shadow-sm border  focus:border-primary focus:ring-2 focus:ring-primary/20 w-full"
                    required
                  />
                </div>

                <div className="form-control mb-6">
                  <label className="label mb-8" htmlFor="subject">
                    <span className="label-text font-medium text-base">
                      お問い合わせ件名
                    </span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="select select-bordered bg-slate-50 dark:bg-slate-800 shadow-sm border  focus:border-primary focus:ring-2 focus:ring-primary/20 w-full"
                    required
                  >
                    <option value="">選択してください</option>
                    <option value="案件のご相談">案件のご相談</option>
                    <option value="お見積りについて">お見積りについて</option>
                    <option value="協業について">協業について</option>
                    <option value="なんでも相談">なんでも相談</option>
                  </select>
                </div>

                <div className="form-control mb-8 flex-row items-center">
                  <label className="label" htmlFor="message">
                    <span className="label-text font-medium text-base">
                      メッセージ
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="textarea textarea-bordered bg-slate-50 dark:bg-slate-800 shadow-sm h-60 border  focus:border-primary focus:ring-2 focus:ring-primary/20 w-full"
                    required
                  ></textarea>
                </div>

                {error && (
                  <div className="alert alert-error mb-6">
                    <p>{error}</p>
                  </div>
                )}
                <div className="flex justify-end mb-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg shadow-md px-8 py-2 bg-gray-200 dark:bg-gray-600  hover:shadow-lg trannform hover:-translate-y-1 transition-all duration-200"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="loading loading-spinner loading-sm"></span>
                    ) : (
                      <div>
                        <FontAwesomeIcon icon={faPaperPlane} className="mr-4" />
                        送信
                      </div>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          <div>
            <div className="card bg-base-200 shadow-md p-6 mb-6 border border-base-300">
              <h3 className="text-xl font-bold mb-4">お問い合わせについて</h3>

              <p className="mb-4">
                このフォームからお問い合わせいただくと、直接 メール &nbsp;
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-xl mr-3 text-primary"
                />
                にてご連絡いたします。
              </p>
            </div>
            <div className="card bg-base-200 shadow-md p-6 border border-base-300">
              <h3 className="text-xl font-bold mb-4">ソーシャルメディア</h3>
              <p className="mb-4">ソーシャルメディアの</p>
              <div className="flex flex-col space-y-4">
                <a
                  href="https://github.com/yostos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-primary transition-colors"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-xl mr-3" />
                  GitHub
                </a>

                <a
                  href="https://bsky.app/profile/y.bsky.social"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-primary transition-colors"
                >
                  <FontAwesomeIcon icon={faBluesky} className="text-xl mr-3" />
                  Bluesky
                </a>

                <a
                  href="https://nostr.band/npub1y0st0svvu5xg6dvswx7dz5m2p7004kmvsx6n22w4yjp3l6fa3mvsef2zz7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-primary transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-3"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,18c-3.31,0-6-2.69-6-6 s2.69-6,6-6s6,2.69,6,6S15.31,18,12,18z M13,7h-2v6h5v-2h-3V7z" />
                  </svg>
                  Nostr
                </a>

                <a
                  href="https://linkedin.com/in/toshiyukiyoshida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-primary transition-colors"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="text-xl mr-3" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-neutral-content/50">
          <p>
            ※
            現在このフォームはデモンストレーション用です。実際の送信は行われません。
          </p>
        </div>
      </div>
    </main>
  );
}
