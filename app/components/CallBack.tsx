"use client";

import { faCheck, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const countries = [
  { value: "france", label: "🇫🇷 France" },
  { value: "uk", label: "🇬🇧 United Kingdom" },
  { value: "sweden", label: "🇸🇪 Sweden" },
  { value: "finland", label: "🇫🇮 Finland" },
  { value: "lithuania", label: "🇱🇹 Lithuania" },
  { value: "romania", label: "🇷🇴 Romania" },
  { value: "slovenia", label: "🇸🇮 Slovenia" },
  { value: "latvia", label: "🇱🇻 Latvia" },
  { value: "estonia", label: "🇪🇪 Estonia" },
  { value: "cyprus", label: "🇨🇾 Cyprus" },
  { value: "hungary", label: "🇭🇺 Hungary" },
];

type Status = "idle" | "loading" | "success" | "error";

export default function CallBack() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const update =
    (k: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok)
        throw new Error((await res.json()).error || "Failed to send");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", country: "", message: "" });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <section
      id="callback"
      className="relative py-24 overflow-hidden dark-mesh noise"
    >
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[#f89601]/6 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <span className="text-[#f89601] text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
              Free Assessment
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Ready to Start
              <br />
              <span className="gradient-text">Your Study Journey?</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-10 max-w-sm">
              Take the first step towards your future. Share your basic details
              and our expert advisor will review your profile and contact you
              within 24 hours to guide you further.
            </p>

            <p className="text-white/50 text-base leading-relaxed mb-10 max-w-sm">
              No pressure, no obligations - just honest guidance for your study
              abroad plans.
            </p>

            <p className="text-white/50 text-base leading-relaxed mb-10 max-w-sm">
              What you get:
            </p>

            {/* Trust signals */}
            <div className="space-y-4">
              {[
                {
                  icon: "✅",
                  text: "Completely Free Guidance - No hidden charges at any stage",
                },
                {
                  icon: "⚡",
                  text: "Fast Response - Get contacted within 24 hours",
                },
                {
                  icon: "🔒",
                  text: "100% Confidential - Your data stays private and secure",
                },
                {
                  icon: "🎓",
                  text: "Dedicated Advisor - Matched according to your study destination and goals",
                },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 text-white/60 text-sm"
                >
                  <span className="text-base">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div>
            <div className="glass rounded-3xl p-8 md:p-10">
              {status === "success" ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center mx-auto mb-4">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="w-8 h-8 text-green-400"
                    />
                  </div>
                  <h3 className="text-white font-black text-2xl mb-2">
                    You&apos;re All Set!
                  </h3>
                  <p className="text-white/50 text-sm">
                    We&apos;ll get back to you within 24 hours with a
                    personalized plan.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-[#f89601] text-sm font-medium hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/50 text-xs font-medium mb-1.5 uppercase tracking-wide">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={update("name")}
                        placeholder="Ali Ahmed"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-[#f89601]/50 focus:bg-white/8 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white/50 text-xs font-medium mb-1.5 uppercase tracking-wide">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={update("phone")}
                        placeholder="+92 300 0000000"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-[#f89601]/50 focus:bg-white/8 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/50 text-xs font-medium mb-1.5 uppercase tracking-wide">
                      Email
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="aliahmed@example.com"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-[#f89601]/50 focus:bg-white/8 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-white/50 text-xs font-medium mb-1.5 uppercase tracking-wide">
                      Preferred Country
                    </label>
                    <select
                      value={form.country}
                      onChange={update("country")}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#f89601]/50 focus:bg-white/8 transition-colors appearance-none"
                    >
                      <option value="" className="bg-[#0d1f2d] text-white/50">
                        Select destination
                      </option>
                      {countries.map((c) => (
                        <option
                          key={c.value}
                          value={c.value}
                          className="bg-[#0d1f2d]"
                        >
                          {c.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/50 text-xs font-medium mb-1.5 uppercase tracking-wide">
                      Message (optional)
                    </label>
                    <textarea
                      value={form.message}
                      onChange={update("message")}
                      placeholder="Tell us about your background and goals..."
                      rows={3}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-[#f89601]/50 focus:bg-white/8 transition-colors resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-400 text-xs">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary w-full py-4 rounded-xl text-base font-bold disabled:opacity-50"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {status === "loading" ? (
                        <>
                          <FontAwesomeIcon
                            icon={faSpinner}
                            className="animate-spin w-4 h-4"
                          />
                          Sending...
                        </>
                      ) : (
                        "Book Free Assessment →"
                      )}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
