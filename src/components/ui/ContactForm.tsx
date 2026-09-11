"use client";

import { useState } from "react";
import { CONTACT_EMAIL, CONTACT_ENDPOINT } from "@/lib/contact";
import { company, hasTel, telHref } from "@/lib/company";

/* ============================================================
   お問い合わせフォーム
   送信先は Formspree（src/lib/contact.ts）。

   form に action / method を書いてあるので、JSが動かない環境でも
   通常のHTMLフォーム送信として届く。JSが動く場合は submit を横取りして
   その場で送信し、ページ遷移せずに完了メッセージへ切り替える。
   ============================================================ */

const categories = [
  "DX支援・業務自動化",
  "BPO・業務代行",
  "地域プロデュース",
  "採用・複業・パートナー参加",
  "その他",
];

const inputClass =
  "w-full bg-transparent border-b border-charcoal/20 px-1 py-3 text-[16px] text-charcoal outline-none focus:border-deep-green transition-colors disabled:opacity-50";

const labelClass = "block text-[12px] font-bold tracking-[0.14em] text-charcoal/55 mb-3";

type Status = "idle" | "submitting" | "success" | "error";

const mailLink = (
  <a
    href={`mailto:${CONTACT_EMAIL}`}
    className="text-navy-ink border-b border-navy-ink/40 pb-0.5 font-bold hover:text-deep-green hover:border-deep-green transition-colors"
  >
    {CONTACT_EMAIL}
  </a>
);

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorDetail, setErrorDetail] = useState("");

  const disabled = status === "submitting";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    setStatus("submitting");
    setErrorDetail("");

    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!res.ok) {
        throw new Error(`送信先から ${res.status} が返りました`);
      }

      form.reset();
      setStatus("success");
    } catch (err) {
      setErrorDetail(err instanceof Error ? err.message : "原因を特定できませんでした");
      setStatus("error");
    }
  }

  // 送信完了。フォームは畳み、次にどうなるかだけを伝える
  if (status === "success") {
    return (
      <div role="status" aria-live="polite" className="border-t border-sage/40 pt-10">
        <p className="text-[22px] font-bold leading-[1.6] tracking-[-0.01em] text-charcoal md:text-[26px]">
          送信しました。ありがとうございます。
        </p>
        <p className="mt-6 max-w-[32em] text-[15px] leading-[2] text-charcoal/75">
          内容を確認のうえ、2〜3営業日以内にご返信します。
          しばらく経っても返信が届かない場合は、迷惑メールフォルダをご確認いただくか、{mailLink} まで直接ご連絡ください。
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-[14px] font-bold text-charcoal/60 underline underline-offset-4 transition-colors hover:text-deep-green"
        >
          続けてもう1件送る
        </button>
      </div>
    );
  }

  return (
    <form
      action={CONTACT_ENDPOINT}
      method="POST"
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-10"
    >
      {/* 自動投稿よけ。人間には見えず、埋まっていれば送信サービス側で弾かれる */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <input type="hidden" name="_subject" value="Webサイトのお問い合わせフォームより" />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            お名前<span className="ml-1">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            disabled={disabled}
            placeholder="山田 太郎"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            会社名・屋号
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            disabled={disabled}
            placeholder="株式会社◯◯"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            メールアドレス<span className="ml-1">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            disabled={disabled}
            placeholder="example@company.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="category" className={labelClass}>
            ご相談の種類<span className="ml-1">*</span>
          </label>
          <select
            id="category"
            name="category"
            required
            defaultValue=""
            disabled={disabled}
            className={`${inputClass} bg-transparent`}
          >
            <option value="" disabled>
              選択してください
            </option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          ご相談内容<span className="ml-1">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          disabled={disabled}
          placeholder="お困りごとや、やってみたいことを、わかる範囲でお書きください。"
          className={`${inputClass} resize-y leading-[2]`}
        />
      </div>

      {status === "error" && (
        <div role="alert" className="border-l-2 border-region pl-5">
          <p className="text-[13px] font-bold text-charcoal/80">送信できませんでした</p>
          <p className="mt-2 max-w-[32em] text-[13px] leading-[2] text-charcoal/65">
            通信状況をご確認のうえ、もう一度お試しください。
            繰り返し失敗する場合は {mailLink} までご連絡ください。
            <span className="mt-1 block text-charcoal/45">（{errorDetail}）</span>
          </p>
        </div>
      )}

      <div className="flex flex-col items-start gap-6 pt-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={disabled}
          className="btn btn-ghost-navy px-10 py-4 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {status === "submitting" ? "送信中…" : "この内容で送信する →"}
        </button>
        <p className="text-[13px] leading-[1.9] text-muted">
          お急ぎの方はこちらからも受け付けています：
          <br className="hidden sm:block" />
          {hasTel && (
            <>
              <a
                href={telHref}
                className="text-navy-ink border-b border-navy-ink/40 pb-0.5 font-bold hover:text-deep-green hover:border-deep-green transition-colors"
              >
                {company.tel}
              </a>
              <span className="mx-2 text-charcoal/40">/</span>
            </>
          )}
          {mailLink}
        </p>
      </div>
    </form>
  );
}
