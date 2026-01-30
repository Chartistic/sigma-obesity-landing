import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sigma | Physician-Led Obesity Care for Men",
  description:
    "Obesity is a medical condition, not a character flaw. Physician-led program with thorough evaluation and ongoing support. GLP-1 medications may be discussed when clinically appropriate.",
  openGraph: {
    title: "Sigma | Physician-Led Obesity Care for Men",
    description:
      "Obesity is a medical condition. Physician-led program with thorough evaluation and ongoing support.",
    type: "website",
  },
  robots: "index, follow",
};

const REFUND_DAYS = "[X]";
const STATE_LIST = "[State list]";
const PRICE_CORE = "$[X]";
const PRICE_PLUS = "$[Y]";
const INSURANCE_POLICY = "[Insert your actual policy].";

export default function Home() {
  return (
    <div className="not-italic" style={{ fontStyle: "normal" }}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[1000] focus:bg-white focus:px-4 focus:py-2 focus:underline"
      >
        Skip to content
      </a>

      <header
        role="banner"
        className="sticky top-0 z-50 border-b border-patient-200/50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
      >
        <div className="mx-auto flex max-w-[90rem] items-center justify-between px-4 py-4 md:px-16">
          <Link href="/" className="block" aria-label="Sigma homepage">
            <img
              src="/sigma-logo-assets/sigma-logo-full.png"
              alt="Sigma"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
          <nav className="flex items-center gap-6 text-sm" aria-label="Main navigation">
            <Link
              href="/terms"
              className="text-patient-800 no-underline transition hover:text-patient-950"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-patient-800 no-underline transition hover:text-patient-950"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </header>

      <main id="main" className="min-h-screen">
        {/* 2) Hero */}
        <section
          className="relative overflow-hidden bg-gradient-to-br from-doctor-100 to-white px-4 py-16 md:px-16 md:py-24 lg:py-28"
          aria-labelledby="hero-heading"
        >
          <div className="mx-auto max-w-[90rem]">
            <div className="mx-auto max-w-prose text-center">
              <h1
                id="hero-heading"
                className="text-3xl font-semibold leading-[1.1] tracking-tight text-patient-950 md:text-4xl lg:text-5xl"
              >
                When you've tried everything, care should feel different.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-patient-800 md:max-w-[42rem] md:text-xl md:leading-relaxed">
                Obesity is a medical condition, not a character flaw. This is a
                physician-led program designed to work with your biology - with
                a thorough medical evaluation and steady follow-up support.
                GLP-1 medications may be discussed when clinically appropriate.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/checkout"
                  className="inline-flex w-full items-center justify-center rounded-full border border-patient-900 bg-patient-900 px-6 py-3.5 text-base font-medium text-white no-underline transition hover:bg-patient-800 focus:outline-none focus:ring-2 focus:ring-patient-500 focus:ring-offset-2 sm:w-auto"
                >
                  Start membership
                </Link>
                <a
                  href="#pricing"
                  className="inline-flex w-full items-center justify-center rounded-full border border-patient-900 bg-transparent px-6 py-3.5 text-base font-medium text-patient-900 no-underline transition hover:bg-patient-100 focus:outline-none focus:ring-2 focus:ring-patient-500 focus:ring-offset-2 sm:w-auto"
                >
                  See pricing + how it works
                </a>
              </div>
              <p className="mt-6 max-w-[38rem] text-sm leading-relaxed text-patient-700">
                After checkout, you'll complete a detailed medical intake
                (typically 20-45 minutes). If the physician determines you're
                not clinically appropriate for the program, you can request a
                refund within {REFUND_DAYS} days after completing intake.
              </p>
              <ul
                className="mt-10 flex flex-col gap-3 text-left text-sm text-patient-700 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6"
                role="list"
              >
                <li className="flex items-center gap-2">
                  <span className="text-patient-400" aria-hidden>
                    —
                  </span>
                  Led by Dr. Gauri Behari, U.S.-licensed physician (Phoenix, AZ)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-patient-400" aria-hidden>
                    —
                  </span>
                  Secure handling of your information
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-patient-400" aria-hidden>
                    —
                  </span>
                  Built for continuity, not one-off visits
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3) Does this sound familiar? */}
        <section
          className="border-t border-patient-200/50 px-4 py-16 md:px-16 md:py-20"
          aria-labelledby="familiar-heading"
        >
          <div className="mx-auto max-w-[90rem]">
            <h2
              id="familiar-heading"
              className="text-center text-2xl font-semibold tracking-tight text-patient-950 md:text-3xl"
            >
              Does this sound familiar?
            </h2>
            <ul
              className="mx-auto mt-10 max-w-prose space-y-4 text-lg leading-relaxed text-patient-800"
              role="list"
            >
              <li className="flex gap-3">
                <span className="text-patient-400" aria-hidden>
                  —
                </span>
                I keep losing and regaining the same weight.
              </li>
              <li className="flex gap-3">
                <span className="text-patient-400" aria-hidden>
                  —
                </span>
                I'm exhausted from starting over.
              </li>
              <li className="flex gap-3">
                <span className="text-patient-400" aria-hidden>
                  —
                </span>
                I want real medical support, not another generic plan.
              </li>
              <li className="flex gap-3">
                <span className="text-patient-400" aria-hidden>
                  —
                </span>
                If medications are an option, I want them handled responsibly.
              </li>
            </ul>
            <p className="mx-auto mt-10 max-w-prose text-lg leading-relaxed text-patient-800">
              If you've been stuck in the loop of hope, effort, and
              disappointment, the problem is not you. The problem is a system
              that treats obesity like a willpower issue instead of a chronic
              medical condition.
            </p>
          </div>
        </section>

        {/* 4) Differentiators */}
        <section
          className="border-t border-patient-200/50 bg-gradient-to-br from-patient-75/50 to-white px-4 py-16 md:px-16 md:py-20"
          aria-labelledby="different-heading"
        >
          <div className="mx-auto max-w-[90rem]">
            <h2
              id="different-heading"
              className="text-center text-2xl font-semibold tracking-tight text-patient-950 md:text-3xl"
            >
              Here's how this time is different.
            </h2>
            <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  num: "01",
                  title: "Physician-led evaluation",
                  text: "A licensed U.S. physician reviews your history, risks, and goals before recommending options.",
                },
                {
                  num: "02",
                  title: "We do not stop at the prescription",
                  text: "If medication is appropriate, it's just one part of the plan. Your program addresses the foundations that make results sustainable - nutrition, habits, monitoring, and follow-ups.",
                },
                {
                  num: "03",
                  title: "Comprehensive metabolic view",
                  text: "We look beyond the scale - sleep, stress, blood pressure, cholesterol, labs when needed, and the health factors that affect outcomes.",
                },
                {
                  num: "04",
                  title: "Built for continuity",
                  text: "Obesity care is not a single moment. It's a process. Membership is designed for ongoing support and adjustments over time.",
                },
                {
                  num: "05",
                  title: "Structured intake, designed for safety",
                  text: "The intake is detailed on purpose. It helps your clinician make safe, high-quality decisions and reduces the endless back-and-forth later.",
                },
              ].map((card) => (
                <article
                  key={card.num}
                  className="rounded-xl border border-patient-200/60 bg-white p-6 shadow-sm"
                >
                  <span
                    className="text-sm font-medium text-patient-500"
                    aria-hidden
                  >
                    {card.num}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-patient-950">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-patient-800">
                    {card.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5) How it works */}
        <section
          className="border-t border-patient-200/50 px-4 py-16 md:px-16 md:py-20"
          aria-labelledby="how-heading"
        >
          <div className="mx-auto max-w-[90rem]">
            <h2
              id="how-heading"
              className="text-center text-2xl font-semibold tracking-tight text-patient-950 md:text-3xl"
            >
              How it works
            </h2>
            <ol
              className="mx-auto mt-12 max-w-2xl space-y-10"
              role="list"
            >
              {[
                {
                  step: 1,
                  title: "Start membership",
                  text: "Choose a plan and create your account in under 2 minutes.",
                },
                {
                  step: 2,
                  title: "Complete your medical intake after checkout",
                  text: "A structured, clinician-designed intake that captures what matters for safe care.",
                },
                {
                  step: 3,
                  title: "Physician review",
                  text: "Your physician reviews your intake and determines what options are clinically appropriate.",
                },
                {
                  step: 4,
                  title: "Your plan + ongoing follow-ups",
                  text: "You receive clear next steps and ongoing support. If you are prescribed medication, it is based on medical judgment and appropriateness.",
                },
              ].map((item) => (
                <li key={item.step} className="flex gap-6">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-patient-200/70 text-sm font-semibold text-patient-900"
                    aria-hidden
                  >
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-patient-950">
                      Step {item.step} – {item.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-patient-800">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-12 text-center">
              <Link
                href="/checkout"
                className="inline-flex items-center justify-center rounded-full border border-patient-900 bg-patient-900 px-6 py-3.5 text-base font-medium text-white no-underline transition hover:bg-patient-800 focus:outline-none focus:ring-2 focus:ring-patient-500 focus:ring-offset-2"
              >
                Start membership
              </Link>
            </p>
          </div>
        </section>

        {/* 6) What membership includes */}
        <section
          className="border-t border-patient-200/50 bg-gradient-to-br from-patient-75/30 to-white px-4 py-16 md:px-16 md:py-20"
          aria-labelledby="includes-heading"
        >
          <div className="mx-auto max-w-[90rem]">
            <h2
              id="includes-heading"
              className="text-center text-2xl font-semibold tracking-tight text-patient-950 md:text-3xl"
            >
              What membership includes
            </h2>
            <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-3">
              <div className="rounded-xl border border-patient-200/60 bg-white p-6">
                <h3 className="text-lg font-semibold text-patient-950">
                  Medical evaluation
                </h3>
                <ul className="mt-4 space-y-2 text-base text-patient-800" role="list">
                  <li>Physician-led review of your history and goals</li>
                  <li>Structured intake designed for safety</li>
                  <li>Clinical decision-making by a licensed clinician</li>
                </ul>
              </div>
              <div className="rounded-xl border border-patient-200/60 bg-white p-6">
                <h3 className="text-lg font-semibold text-patient-950">
                  Personalized program
                </h3>
                <ul className="mt-4 space-y-2 text-base text-patient-800" role="list">
                  <li>Plan tailored to your biology and preferences</li>
                  <li>Nutrition, habits, and monitoring support</li>
                  <li>Ongoing follow-ups and adjustments</li>
                </ul>
              </div>
              <div className="rounded-xl border border-patient-200/60 bg-white p-6">
                <h3 className="text-lg font-semibold text-patient-950">
                  Medication options when appropriate
                </h3>
                <p className="mt-4 text-base leading-relaxed text-patient-800">
                  Medications may be considered when clinically appropriate
                  based on your intake and physician judgment.
                </p>
                <p className="mt-3 text-sm font-medium text-patient-700">
                  Medication is never guaranteed.
                </p>
              </div>
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-patient-600">
              Membership does not include the cost of medications or lab work
              unless explicitly stated.
            </p>
          </div>
        </section>

        {/* 7) Who it's for / not for */}
        <section
          className="border-t border-patient-200/50 px-4 py-16 md:px-16 md:py-20"
          aria-labelledby="who-heading"
        >
          <div className="mx-auto max-w-[90rem]">
            <h2
              id="who-heading"
              className="text-center text-2xl font-semibold tracking-tight text-patient-950 md:text-3xl"
            >
              Who it's for / not for
            </h2>
            <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-patient-200/60 bg-patient-50/50 p-6">
                <h3 className="text-lg font-semibold text-patient-950">
                  Who this is for
                </h3>
                <ul className="mt-4 space-y-2 text-base text-patient-800" role="list">
                  <li>Adults who want physician-led support for obesity or overweight</li>
                  <li>People who value a structured program with follow-ups</li>
                  <li>Those looking for responsible, evidence-based care</li>
                </ul>
              </div>
              <div className="rounded-xl border border-patient-200/60 bg-white p-6">
                <h3 className="text-lg font-semibold text-patient-950">
                  Who this is not for
                </h3>
                <ul className="mt-4 space-y-2 text-base text-patient-800" role="list">
                  <li>Emergencies or severe symptoms needing urgent care</li>
                  <li>Anyone seeking guaranteed prescriptions or guaranteed results</li>
                  <li>People unwilling to complete a medical intake (required for safe care)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 8) Pricing */}
        <section
          id="pricing"
          className="border-t border-patient-200/50 bg-gradient-to-br from-doctor-100/50 to-white px-4 py-16 md:px-16 md:py-20"
          aria-labelledby="pricing-heading"
        >
          <div className="mx-auto max-w-[90rem]">
            <h2
              id="pricing-heading"
              className="text-center text-2xl font-semibold tracking-tight text-patient-950 md:text-3xl"
            >
              Transparent membership pricing
            </h2>
            <div className="mx-auto mt-12 grid max-w-3xl gap-8 md:grid-cols-2">
              <article className="rounded-xl border border-patient-200/60 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-patient-950">
                  Core
                </h3>
                <p className="mt-2 text-2xl font-semibold text-patient-900">
                  {PRICE_CORE}
                  <span className="text-base font-normal text-patient-600">
                    /month
                  </span>
                </p>
                <ul className="mt-6 space-y-3 text-base text-patient-800" role="list">
                  <li>Physician evaluation</li>
                  <li>Personalized plan</li>
                  <li>Ongoing follow-ups</li>
                  <li>Progress tracking</li>
                </ul>
                <p className="mt-8">
                  <Link
                    href="/checkout?plan=core"
                    className="inline-flex w-full items-center justify-center rounded-full border border-patient-900 bg-patient-900 px-6 py-3.5 text-base font-medium text-white no-underline transition hover:bg-patient-800 focus:outline-none focus:ring-2 focus:ring-patient-500 focus:ring-offset-2"
                  >
                    Start Core
                  </Link>
                </p>
              </article>
              <article className="rounded-xl border-2 border-patient-300 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-patient-950">
                  Plus
                </h3>
                <p className="mt-2 text-2xl font-semibold text-patient-900">
                  {PRICE_PLUS}
                  <span className="text-base font-normal text-patient-600">
                    /month
                  </span>
                </p>
                <ul className="mt-6 space-y-3 text-base text-patient-800" role="list">
                  <li>Everything in Core, plus:</li>
                  <li>Priority scheduling windows (if applicable)</li>
                  <li>More frequent follow-ups</li>
                  <li>Enhanced progress reviews</li>
                </ul>
                <p className="mt-8">
                  <Link
                    href="/checkout?plan=plus"
                    className="inline-flex w-full items-center justify-center rounded-full border border-patient-900 bg-patient-900 px-6 py-3.5 text-base font-medium text-white no-underline transition hover:bg-patient-800 focus:outline-none focus:ring-2 focus:ring-patient-500 focus:ring-offset-2"
                  >
                    Start Plus
                  </Link>
                </p>
              </article>
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-patient-600">
              Membership covers the clinical program and support. Medications
              and labs are not included unless stated.
            </p>
          </div>
        </section>

        {/* 9) Refund policy */}
        <section
          className="border-t border-patient-200/50 px-4 py-16 md:px-16 md:py-20"
          aria-labelledby="refund-heading"
        >
          <div className="mx-auto max-w-[90rem]">
            <h2
              id="refund-heading"
              className="text-center text-2xl font-semibold tracking-tight text-patient-950 md:text-3xl"
            >
              Not clinically appropriate? You're covered.
            </h2>
            <div className="mx-auto mt-10 max-w-prose space-y-6 text-base leading-relaxed text-patient-800">
              <p>
                After joining, you'll complete a medical intake. If the
                physician determines you're not clinically appropriate for the
                program, you can request a refund within {REFUND_DAYS} days
                after completing the intake.
              </p>
              <p className="font-medium text-patient-900">
                Why we do it this way:
              </p>
              <ul className="space-y-2 pl-4" role="list">
                <li>— It keeps the evaluation consistent and safety-first.</li>
                <li>
                  — It lets us deliver a thorough medical review without
                  cutting corners.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 10) Testimonials */}
        <section
          className="border-t border-patient-200/50 bg-gradient-to-br from-patient-75/30 to-white px-4 py-16 md:px-16 md:py-20"
          aria-labelledby="testimonials-heading"
        >
          <div className="mx-auto max-w-[90rem]">
            <h2
              id="testimonials-heading"
              className="text-center text-2xl font-semibold tracking-tight text-patient-950 md:text-3xl"
            >
              What members say
            </h2>
            <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-3">
              {[
                "Clear, respectful, and realistic. I finally felt like someone had a plan.",
                "Not gimmicky. It felt like actual medical care, not a quick transaction.",
                "I liked that nothing was promised. It was thoughtful and structured.",
              ].map((quote, i) => (
                <blockquote
                  key={i}
                  className="rounded-xl border border-patient-200/60 bg-white p-6"
                >
                  <p className="text-base leading-relaxed text-patient-800">
                    &ldquo;{quote}&rdquo;
                  </p>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* 11) FAQ */}
        <section
          className="border-t border-patient-200/50 px-4 py-16 md:px-16 md:py-20"
          aria-labelledby="faq-heading"
        >
          <div className="mx-auto max-w-[90rem]">
            <h2
              id="faq-heading"
              className="text-center text-2xl font-semibold tracking-tight text-patient-950 md:text-3xl"
            >
              FAQ
            </h2>
            <div className="mx-auto mt-12 max-w-2xl space-y-4">
              <details className="group rounded-xl border border-patient-200/60 bg-white">
                <summary className="cursor-pointer list-none px-6 py-4 font-semibold text-patient-950 [&::-webkit-details-marker]:hidden">
                  Will I get a GLP-1 if I join?
                </summary>
                <p className="border-t border-patient-200/40 px-6 pb-4 pt-2 text-base leading-relaxed text-patient-800">
                  No. Joining starts the evaluation process. GLP-1s may be
                  considered if clinically appropriate, based on your medical
                  intake and physician judgment.
                </p>
              </details>
              <details className="group rounded-xl border border-patient-200/60 bg-white">
                <summary className="cursor-pointer list-none px-6 py-4 font-semibold text-patient-950 [&::-webkit-details-marker]:hidden">
                  How long does the intake take?
                </summary>
                <p className="border-t border-patient-200/40 px-6 pb-4 pt-2 text-base leading-relaxed text-patient-800">
                  Typically 20-45 minutes. It is intentionally thorough for
                  safety screening and clinical decision-making.
                </p>
              </details>
              <details className="group rounded-xl border border-patient-200/60 bg-white">
                <summary className="cursor-pointer list-none px-6 py-4 font-semibold text-patient-950 [&::-webkit-details-marker]:hidden">
                  Is this just coaching?
                </summary>
                <p className="border-t border-patient-200/40 px-6 pb-4 pt-2 text-base leading-relaxed text-patient-800">
                  No. This is a physician-led clinical program. Coaching-style
                  support may be part of your plan, but medical decisions are
                  made by a licensed clinician.
                </p>
              </details>
              <details className="group rounded-xl border border-patient-200/60 bg-white">
                <summary className="cursor-pointer list-none px-6 py-4 font-semibold text-patient-950 [&::-webkit-details-marker]:hidden">
                  Where is this available?
                </summary>
                <p className="border-t border-patient-200/40 px-6 pb-4 pt-2 text-base leading-relaxed text-patient-800">
                  Currently available in {STATE_LIST}. Care is provided where
                  permitted by law.
                </p>
              </details>
              <details className="group rounded-xl border border-patient-200/60 bg-white">
                <summary className="cursor-pointer list-none px-6 py-4 font-semibold text-patient-950 [&::-webkit-details-marker]:hidden">
                  Can I cancel anytime?
                </summary>
                <p className="border-t border-patient-200/40 px-6 pb-4 pt-2 text-base leading-relaxed text-patient-800">
                  Yes. Cancel from your account. Your membership remains active
                  through the end of your billing period.
                </p>
              </details>
              <details className="group rounded-xl border border-patient-200/60 bg-white">
                <summary className="cursor-pointer list-none px-6 py-4 font-semibold text-patient-950 [&::-webkit-details-marker]:hidden">
                  Is this insurance-covered?
                </summary>
                <p className="border-t border-patient-200/40 px-6 pb-4 pt-2 text-base leading-relaxed text-patient-800">
                  {INSURANCE_POLICY}
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* 12) Final CTA */}
        <section
          className="border-t border-patient-200/50 bg-gradient-to-br from-patient-200/40 via-patient-100/50 to-doctor-100/50 px-4 py-16 md:px-16 md:py-24"
          aria-labelledby="final-cta-heading"
        >
          <div className="mx-auto max-w-[90rem] text-center">
            <h2
              id="final-cta-heading"
              className="text-2xl font-semibold tracking-tight text-patient-950 md:text-3xl"
            >
              Start your physician-led obesity program today
            </h2>
            <p className="mx-auto mt-4 max-w-prose text-lg leading-relaxed text-patient-800">
              Structured evaluation, clear next steps, and ongoing follow-ups
              designed for sustainable progress.
            </p>
            <p className="mt-10">
              <Link
                href="/checkout"
                className="inline-flex items-center justify-center rounded-full border border-patient-900 bg-patient-900 px-8 py-4 text-base font-medium text-white no-underline transition hover:bg-patient-800 focus:outline-none focus:ring-2 focus:ring-patient-500 focus:ring-offset-2"
              >
                Start membership
              </Link>
            </p>
            <p className="mt-6 text-sm text-patient-700">
              Not for emergencies. Results vary. Treatment options depend on
              clinical evaluation.
            </p>
          </div>
        </section>

        {/* 13) Footer */}
        <footer
          className="border-t border-patient-200/50 bg-patient-950 px-4 py-12 text-white md:px-16 md:py-16"
          role="contentinfo"
        >
          <div className="mx-auto max-w-[90rem]">
            <nav
              className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm"
              aria-label="Footer navigation"
            >
              <Link
                href="/terms"
                className="text-patient-200 underline underline-offset-2 hover:text-white"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-patient-200 underline underline-offset-2 hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/refund"
                className="text-patient-200 underline underline-offset-2 hover:text-white"
              >
                Refund Policy
              </Link>
              <Link
                href="/contact"
                className="text-patient-200 underline underline-offset-2 hover:text-white"
              >
                Contact
              </Link>
              <Link
                href="/portal"
                className="text-patient-200 underline underline-offset-2 hover:text-white"
              >
                Patient Portal
              </Link>
            </nav>
            <div className="mt-8 text-center text-sm text-patient-300">
              <p>[Business address placeholder]</p>
              <p>Support: [support email placeholder]</p>
              <p>Hours: [hours placeholder]</p>
            </div>
            <p className="mt-8 text-center text-xs text-patient-400">
              This service does not provide emergency care.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
