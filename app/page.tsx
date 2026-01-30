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
            <div className="grid grid-cols-1 gap-10 items-center lg:grid-cols-3 lg:gap-12">
              <div className="text-center lg:col-span-2 lg:text-left">
                <h1
                  id="hero-heading"
                  className="hero-headline text-4xl font-semibold tracking-tight text-patient-950 md:text-5xl lg:text-6xl"
                >
                  When you've tried everything, care should feel different.
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-patient-800 md:max-w-[42rem] md:text-xl md:leading-relaxed lg:max-w-none mx-auto lg:mx-0">
                  Obesity is a medical condition, not a character flaw. This is a
                  physician-led program designed to work with your biology - with
                  a thorough medical evaluation and steady follow-up support.
                  GLP-1 medications may be discussed when clinically appropriate.
                </p>
                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
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
                <p className="mt-6 max-w-[38rem] text-sm leading-relaxed text-patient-700 mx-auto lg:mx-0">
                  After checkout, you'll complete a detailed medical intake
                  (typically 20-45 minutes). If the physician determines you're
                  not clinically appropriate for the program, you can request a
                  refund within {REFUND_DAYS} days after completing intake.
                </p>
              </div>
              <div className="flex justify-center lg:col-span-1 lg:justify-end">
                <img
                  src="/overweight-model1.jpg"
                  alt=""
                  className="object-cover w-full max-w-md lg:max-w-none aspect-[4/3] lg:aspect-auto"
                />
              </div>
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
              className="mx-auto mt-10 max-w-prose list-disc space-y-4 pl-6 text-lg leading-relaxed text-patient-800"
              role="list"
            >
              <li>I keep losing and regaining the same weight.</li>
              <li>I'm exhausted from starting over.</li>
              <li>I want real medical support, not another generic plan.</li>
              <li>If medications are an option, I want them handled responsibly.</li>
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
                  className="border border-patient-200/60 bg-white p-6 shadow-sm"
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

        {/* 5) How it works - index-en layout with obesity text */}
        <section
          id="how-it-works"
          className="border-t border-patient-200/50 px-8 py-12 md:px-16 md:py-16"
          aria-labelledby="how-heading"
        >
          <div className="how-it-works-grid mx-auto max-w-6xl">
          <div className="how-it-works-content">
            <h2
              id="how-heading"
              className="mb-4 text-left text-2xl font-semibold tracking-tight text-patient-950 md:text-3xl"
            >
              How it works
            </h2>
            <hr className="how-it-works-hr" />
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-patient-950">
                  1. Start membership
                </h3>
                <p className="mt-1 text-base leading-relaxed text-patient-800">
                  Choose a plan and create your account in under 2 minutes.
                </p>
              </div>
              <hr className="how-it-works-hr" />
              <div>
                <h3 className="text-lg font-semibold text-patient-950">
                  2. Complete your medical intake after checkout
                </h3>
                <p className="mt-1 text-base leading-relaxed text-patient-800">
                  A structured, clinician-designed intake that captures what
                  matters for safe care.
                </p>
              </div>
              <hr className="how-it-works-hr" />
              <div>
                <h3 className="text-lg font-semibold text-patient-950">
                  3. Physician review
                </h3>
                <p className="mt-1 text-base leading-relaxed text-patient-800">
                  Your physician reviews your intake and determines what options
                  are clinically appropriate.
                </p>
              </div>
              <hr className="how-it-works-hr" />
              <div>
                <h3 className="text-lg font-semibold text-patient-950">
                  4. Your plan + ongoing follow-ups
                </h3>
                <p className="mt-1 text-base leading-relaxed text-patient-800">
                  You receive clear next steps and ongoing support. If you are
                  prescribed medication, it is based on medical judgment and
                  appropriateness.
                </p>
              </div>
            </div>
            <p className="mt-8">
              <Link
                href="/checkout"
                className="inline-flex items-center justify-center rounded-full border border-patient-900 bg-patient-900 px-6 py-3.5 text-base font-medium text-white no-underline transition hover:bg-patient-800 focus:outline-none focus:ring-2 focus:ring-patient-500 focus:ring-offset-2"
              >
                Start membership
              </Link>
            </p>
          </div>
          <div className="how-it-works-graphic">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 24H36' stroke='white' stroke-width='2'/%3E%3Cpath d='M24 12V36' stroke='white' stroke-width='2'/%3E%3C/svg%3E")`,
                backgroundSize: "48px 48px",
              }}
            />
            <img
              src="/overweight-model2.jpg"
              alt=""
              className="person-img absolute inset-0 h-full w-full"
            />
          </div>
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
              <div className="border border-patient-200/60 bg-white p-6">
                <h3 className="text-lg font-semibold text-patient-950">
                  Medical evaluation
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-patient-800" role="list">
                  <li>Physician-led review of your history and goals</li>
                  <li>Structured intake designed for safety</li>
                  <li>Clinical decision-making by a licensed clinician</li>
                </ul>
              </div>
              <div className="border border-patient-200/60 bg-white p-6">
                <h3 className="text-lg font-semibold text-patient-950">
                  Personalized program
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-patient-800" role="list">
                  <li>Plan tailored to your biology and preferences</li>
                  <li>Nutrition, habits, and monitoring support</li>
                  <li>Ongoing follow-ups and adjustments</li>
                </ul>
              </div>
              <div className="border border-patient-200/60 bg-white p-6">
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

        {/* 7) Pricing */}
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
              <article className="border border-patient-200/60 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-patient-950">
                  Core
                </h3>
                <p className="mt-2 text-2xl font-semibold text-patient-900">
                  {PRICE_CORE}
                  <span className="text-base font-normal text-patient-600">
                    /month
                  </span>
                </p>
                <ul className="mt-6 list-disc space-y-3 pl-6 text-base text-patient-800" role="list">
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
              <article className="border-2 border-patient-300 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-patient-950">
                  Plus
                </h3>
                <p className="mt-2 text-2xl font-semibold text-patient-900">
                  {PRICE_PLUS}
                  <span className="text-base font-normal text-patient-600">
                    /month
                  </span>
                </p>
                <ul className="mt-6 list-disc space-y-3 pl-6 text-base text-patient-800" role="list">
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
              <ul className="list-disc space-y-2 pl-6" role="list">
                <li>It keeps the evaluation consistent and safety-first.</li>
                <li>
                  It lets us deliver a thorough medical review without
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
                  className="border border-patient-200/60 bg-white p-6"
                >
                  <p className="text-base leading-relaxed text-patient-800">
                    &ldquo;{quote}&rdquo;
                  </p>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* 11) FAQ - index-en grid layout with obesity text */}
        <section
          id="faq"
          className="faq-section border-t border-patient-200/50 bg-patient-50/30 px-4 py-16 md:px-16 md:py-20"
          aria-labelledby="faq-heading"
        >
          <h2
            id="faq-heading"
            className="text-center text-2xl font-semibold tracking-tight text-patient-950 md:text-3xl"
          >
            FAQ
          </h2>
          <ul className="faq-items" role="list">
            <li>
              <h3>Will I get a GLP-1 if I join?</h3>
              <p>
                No. Joining starts the evaluation process. GLP-1s may be
                considered if clinically appropriate, based on your medical
                intake and physician judgment.
              </p>
            </li>
            <li>
              <h3>How long does the intake take?</h3>
              <p>
                Typically 20-45 minutes. It is intentionally thorough for
                safety screening and clinical decision-making.
              </p>
            </li>
            <li>
              <h3>Is this just coaching?</h3>
              <p>
                No. This is a physician-led clinical program. Coaching-style
                support may be part of your plan, but medical decisions are
                made by a licensed clinician.
              </p>
            </li>
            <li>
              <h3>Where is this available?</h3>
              <p>
                Currently available in {STATE_LIST}. Care is provided where
                permitted by law.
              </p>
            </li>
            <li>
              <h3>Can I cancel anytime?</h3>
              <p>
                Yes. Cancel from your account. Your membership remains active
                through the end of your billing period.
              </p>
            </li>
            <li>
              <h3>Is this insurance-covered?</h3>
              <p>{INSURANCE_POLICY}</p>
            </li>
          </ul>
        </section>

        {/* 12) CTA - Your weight shouldn't wait */}
        <section
          className="relative grid grid-cols-1 gap-0 overflow-hidden border-t border-patient-200/50 md:grid-cols-2"
          style={{
            background: "linear-gradient(135deg, #ffc3c3 0%, #c8e4f9 100%)",
          }}
          aria-labelledby="cta-heading"
        >
          <div className="flex flex-col justify-center gap-6 px-8 py-16 md:px-16 md:py-20 lg:px-20">
            <h2
              id="cta-heading"
              className="cta-headline text-center text-3xl font-semibold tracking-tight text-patient-950 md:text-left md:text-4xl lg:text-[3.5rem]"
            >
              Your weight shouldn&apos;t wait.
            </h2>
            <div className="flex justify-center md:justify-start">
              <Link
                href="/checkout"
                className="inline-flex items-center justify-center rounded-full border border-patient-900 bg-patient-900 px-8 py-4 text-base font-medium text-white no-underline transition hover:bg-patient-800 focus:outline-none focus:ring-2 focus:ring-patient-500 focus:ring-offset-2"
              >
                Start membership
              </Link>
            </div>
          </div>
          <div
            className="relative flex items-center justify-center"
            style={{ minHeight: "clamp(320px, 50vw, 560px)" }}
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 24H36' stroke='white' stroke-width='2'/%3E%3Cpath d='M24 12V36' stroke='white' stroke-width='2'/%3E%3C/svg%3E")`,
                backgroundSize: "48px 48px",
              }}
            />
            <img
              src="/img/app.png"
              alt="Sigma app on smartphone"
              className="relative block h-auto max-h-[560px] w-auto max-w-full object-contain"
            />
          </div>
        </section>

        {/* 13) Footer */}
        <footer
          className="border-t border-patient-200/50 bg-patient-950 px-4 py-12 text-white md:px-16 md:py-16"
          role="contentinfo"
        >
          <div className="mx-auto max-w-[90rem]">
            <div className="flex flex-col gap-8 pb-8 md:flex-row md:items-center md:justify-between">
              <Link href="/" className="block" aria-label="Sigma homepage">
                <img
                  src="/sigma-logo-assets/sigma-logo-full-w.png"
                  alt="Sigma"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
              <nav className="flex flex-wrap gap-6 text-sm" aria-label="Footer navigation">
                <Link href="/" className="text-white no-underline hover:opacity-80">
                  For Patients
                </Link>
                <Link href="/physicians.html" className="text-white no-underline hover:opacity-80">
                  For Physicians
                </Link>
              </nav>
            </div>
            <hr className="border-patient-800" />
            <div className="flex flex-col gap-6 pt-8 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-patient-300">
                Sigma is not for emergencies – call 911 in urgent cases.
              </p>
              <nav className="flex flex-wrap gap-6 text-sm text-patient-400" aria-label="Legal links">
                <Link href="/privacy" className="no-underline hover:text-white">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="no-underline hover:text-white">
                  Terms of Service
                </Link>
                <Link href="/refund" className="no-underline hover:text-white">
                  Refund Policy
                </Link>
                <Link href="/contact" className="no-underline hover:text-white">
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
