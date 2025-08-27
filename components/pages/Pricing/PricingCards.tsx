"use client"

import { TextAnimate } from "@/components/magicui/text-animate"
import { CheckCircle } from "lucide-react"

const plans = [
  {
    title: "Associate",
    range: "£799 – £1,099",
    years: "0–3 yrs",
    idealFor: "Admin, data, listings",
    features: [
      "Two-month UK-specific real estate training",
      "We’ll set up databases with your systems",
      "360° fit into your systems",
      "Ongoing quality checks and performance feedback",
      "Replacement first year if not fully satisfied",
      "Support for tools, add-ons, CRMs",
    ],
    button: "Get Started",
    className: "bg-[#D5E4E980]",
  },
  {
    title: "Mid-Level",
    range: "£1,099 – £1,499",
    years: "3–4 yrs",
    idealFor: "Tenancy handling, ops",
    features: [
      "Two-month UK-specific real estate training",
      "We’ll set up databases with your systems",
      "360° fit into your systems",
      "Ongoing quality checks and performance feedback",
      "Replacement first year if not fully satisfied",
      "Support for tools, add-ons, CRMs",
    ],
    button: "Get Started",
    className: "bg-[#EAF6F5]  lg:-mt-5",
  },
  {
    title: "Senior",
    range: "£1,499 – £1,999",
    years: "4+ yrs",
    idealFor: "Portfolio management, compliance",
    features: [
      "Two-month UK-specific real estate training",
      "We’ll set up databases with your systems",
      "360° fit into your systems",
      "Ongoing quality checks and performance feedback",
      "Replacement first year if not fully satisfied",
      "Support for tools, add-ons, CRMs",
    ],
    button: "Get Started",
    className: "bg-[#EDECFA80] ",
  },
  {
    title: "Create your own",
    range: "Custom Package",
    years: "",
    idealFor: "Large scale companies, or for custom services",
    features: [
      "Two-month UK-specific real estate training",
      "We’ll set up databases with your systems",
      "360° fit into your systems",
      "Ongoing quality checks and performance feedback",
      "Replacement first year if not fully satisfied",
      "Support for tools, add-ons, CRMs",
    ],
    button: "Book A Call",
    className: "bg-gradient-to-r from-[#C4EDFF60] to-[#C7BEFF60]",
  },
]

export default function PricingCards() {
  return (
    <section className="container mx-auto px-12 py-12 max-2xl:min-h-[100vh] flex flex-col justify-center items-center">
     
         <TextAnimate animation="blurInUp" by="word" as={'h1'} duration={0.8} className="my-14 text-center text-3xl font-dm_serif md:text-4xl font-bold text-[#1B1B1B]">
                  Pricing That Doesn’t Make You Think Twice.
              </TextAnimate>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-2xl shadow-lg p-6 ${plan.className} hover:shadow-2xl transition-transform hover:-translate-y-2 cursor-pointer flex flex-col`}
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold font-ibm_plex">{plan.title}</h3>
              {plan.years && (
                  <p className="text-sm text-gray-500 mt-1">({plan.years})</p>
                )}
                <p className="my-3 font-bold text-roca text-3xl">{plan.range}</p>
              <p className="text-sm text-gray-700 mt-2">
                Ideal for:<br/> <span className="font-semibold mt-2">{plan.idealFor}</span>
              </p>
            </div>

            <ul className="flex-1 space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-gray-600 hover:text-roca transition-colors"
                >
                  <CheckCircle size={16} className="text-roca flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className="mt-auto bg-roca text-black bg-white rounded-full font-medium py-2 hover:bg-opacity-70 transition hover:bg-black hover:text-white">
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
