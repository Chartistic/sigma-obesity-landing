"use client";

import { useState } from "react";
import Link from "next/link";

const CHOICES = [
  "GLP-1 medication support",
  "Compare options",
  "I have insurance",
  "Clinician recommendation",
] as const;

export default function GLP1SupportPage() {
  const [step, setStep] = useState<"choices" | "form">("choices");

  return (
    <div className="not-italic" style={{ fontStyle: "normal" }}>
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Full-screen background (add large-screen-model.jpg to public/) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/large-screen-model.jpg)",
          backgroundColor: "#e6f2fc",
        }}
      />
      {/* Sigma gradient overlay (teal/cyan -> blush/pink) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(200, 228, 249, 0.35) 0%, rgba(255, 195, 195, 0.35) 100%)",
        }}
      />

      {/* Minimal header */}
      <header className="absolute left-0 top-0 z-20 flex w-full items-center justify-between px-4 py-5 md:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-patient-950"
        >
          Sigma
        </Link>
        <span
          className="rounded-full bg-white/80 px-2.5 py-1 text-xs font-medium text-patient-700 backdrop-blur-sm"
          aria-hidden
        >
          1/3
        </span>
      </header>

      {/* Centered floating card - near bottom on mobile, centered on desktop */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-end px-4 pb-12 pt-24 md:justify-center md:pb-16 md:pt-0">
        <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl shadow-patient-200/30 md:p-8">
          {step === "choices" ? (
            <>
              <h1 className="text-2xl font-semibold tracking-tight text-patient-950 md:text-3xl">
                What are you looking for today?
              </h1>
              <div className="mt-6 flex flex-col gap-3">
                {CHOICES.map((label) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setStep("form")}
                    className="w-full rounded-full border border-patient-200 bg-white px-6 py-4 text-base font-medium text-patient-900 transition hover:border-patient-300 hover:bg-patient-50 focus:outline-none focus:ring-2 focus:ring-patient-400 focus:ring-offset-2"
                  >
                    {label}
                  </button>
                ))}
              </div>
              <p className="mt-6 text-center text-xs text-patient-600">
                Takes 2 minutes. Prescriptions only after clinician review.
              </p>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => setStep("choices")}
                className="mb-4 text-sm font-medium text-patient-600 underline underline-offset-2 hover:text-patient-800"
              >
                Back
              </button>
              <h2 className="text-xl font-semibold tracking-tight text-patient-950 md:text-2xl">
                A few details
              </h2>
              <form className="mt-6 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="state" className="mb-1 block text-sm font-medium text-patient-800">
                    State
                  </label>
                  <input
                    id="state"
                    type="text"
                    placeholder="e.g. Arizona"
                    className="w-full rounded-lg border border-patient-200 px-4 py-3 text-base text-patient-950 placeholder:text-patient-400 focus:border-patient-400 focus:outline-none focus:ring-1 focus:ring-patient-400"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="height" className="mb-1 block text-sm font-medium text-patient-800">
                      Height
                    </label>
                    <input
                      id="height"
                      type="text"
                      placeholder="e.g. 5'10&quot;"
                      className="w-full rounded-lg border border-patient-200 px-4 py-3 text-base text-patient-950 placeholder:text-patient-400 focus:border-patient-400 focus:outline-none focus:ring-1 focus:ring-patient-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="weight" className="mb-1 block text-sm font-medium text-patient-800">
                      Weight
                    </label>
                    <input
                      id="weight"
                      type="text"
                      placeholder="e.g. 180 lbs"
                      className="w-full rounded-lg border border-patient-200 px-4 py-3 text-base text-patient-950 placeholder:text-patient-400 focus:border-patient-400 focus:outline-none focus:ring-1 focus:ring-patient-400"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-patient-800">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-patient-200 px-4 py-3 text-base text-patient-950 placeholder:text-patient-400 focus:border-patient-400 focus:outline-none focus:ring-1 focus:ring-patient-400"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 w-full rounded-full border border-patient-900 bg-patient-900 px-6 py-4 text-base font-medium text-white transition hover:bg-patient-800 focus:outline-none focus:ring-2 focus:ring-patient-500 focus:ring-offset-2"
                >
                  Continue
                </button>
              </form>
            </>
          )}
        </div>
      </main>
    </div>
    </div>
  );
}
