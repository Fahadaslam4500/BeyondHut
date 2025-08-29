// "use client"

// import { TextAnimate } from "@/components/magicui/text-animate"
// import { CheckCircle } from "lucide-react"

// const plans = [
//   {
//     title: "Part-Time & Temporary Cover",
//     range: "From £8 / hr",
//     years: "0–2 yrs",
//     idealFor: "Admin Assistants, Accounts & Bookkeepers",
//     features: [
//       "Handles routine admin work and data entry with precision",
//       "Works under guidance with strong attention to detail",
//       "Provides reliable foundation for daily operations",
//       "Eager to learn while delivering immediate value",
//       "Cost-effective solution for repetitive tasks",
//       "Proficient with basic CRMs and property software",
//     ],
//     button: "Get Started",
//     className: "bg-gradient-to-b from-[#C4EDFF60] to-[#C7BEFF60]",
//   },
//   {
//     title: "Mid-Level",
//     range: "£1,099 – £1,499",
//     years: "2–4 yrs",
//     idealFor: "Tenant Relations, Lettings Coordinators, Sales Progressors",
//     features: [
//       "Independently manages full processes with minimal oversight",
//       "Trained in core estate agency processes and compliance",
//       "Proactively resolves complex tenant and operational issues",
//       "Advanced proficiency in CRMs, portals, and document systems",
//       "Builds strong client relationships representing your brand",
//       "Implements efficiency improvements from experience",
//     ],
//     button: "Get Started",
//     className: "bg-[#EAF6F5]  lg:-mt-5",
//   },
//   {
//     title: "Senior",
//     range: "£1,499 – £1,999",
//     years: "4+ yrs",
//     idealFor: "Property Operations Managers, Portfolio Managers, Team Leaders",
//     features: [
//       "Leads multiple portfolios and manages team members",
//       "Deep expertise in compliance, reporting, and market trends",
//       "Trains junior staff while overseeing complex projects",
//       "Identifies growth opportunities and strategic improvements",
//       "Handles disputes, legal matters, and high-value transactions",
//       "Leverages industry network for business benefit",
//     ],
//     button: "Get Started",
//     className: "bg-[#EDECFA80] ",
//   },
//   {
//     title: "Create your own",
//     range: "Custom Team",
//     years: "",
//     idealFor: "Established agencies wanting complete operational freedom and maximum growth potential",
//     features: [
//       "Complete backend office solution with your personalized team structure",
//       "Mix and match resources across all experience levels to fit your needs",
//       "Dedicated team working exclusively for your business operations",
//       "Full operational support covering admin, lettings, sales, accounts, and management",
//       "Scale your team up or down based on business growth and seasonal demands",
//       "Focus on client relationships and business development while we handle the rest",
//     ],
//     button: "Book A Call",
//     className: "bg-gradient-to-r from-[#C4EDFF60] to-[#C7BEFF60]",
//   },
// ]

// export default function PricingCards() {
//   return (
//     <section className="container mx-auto px-12 py-12 max-2xl:min-h-[100vh] flex flex-col justify-center items-center">

//          <TextAnimate animation="blurInUp" by="word" as={'h1'} duration={0.8} className="my-14 text-center text-3xl font-dm_serif md:text-4xl font-bold text-[#1B1B1B]">
//                   Pricing That Doesn’t Make You Think Twice.
//               </TextAnimate>

//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//         {plans.map((plan, idx) => (
//           <div
//             key={idx}
//             className={`rounded-2xl shadow-lg p-6 ${plan.className} hover:shadow-2xl transition-transform hover:-translate-y-2 cursor-pointer flex flex-col`}
//           >
//             <div className="mb-4">
//               <h3 className="text-xl font-semibold font-ibm_plex">{plan.title}</h3>
//               {plan.years && (
//                   <p className="text-sm text-gray-500 mt-1">({plan.years})</p>
//                 )}
//                 <p className="my-3 font-bold text-roca text-3xl">{plan.range}</p>
//               <p className="text-sm text-gray-700 mt-2">
//                 Ideal for:<br/> <span className="font-semibold mt-2">{plan.idealFor}</span>
//               </p>
//             </div>

//             <ul className="flex-1 space-y-2 mb-6">
//               {plan.features.map((feature, i) => (
//                 <li
//                   key={i}
//                   className="flex items-start gap-2 text-sm text-gray-600 hover:text-roca transition-colors"
//                 >
//                   <CheckCircle size={16} className="text-roca flex-shrink-0 mt-0.5" />
//                   <span>{feature}</span>
//                 </li>
//               ))}
//             </ul>

//             <button className="mt-auto bg-roca text-black bg-white rounded-full font-medium py-2 hover:bg-opacity-70 transition hover:bg-black hover:text-white">
//               {plan.button}
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }





















"use client"

import React from "react"
import { CheckCircle } from "lucide-react"
import Link from "next/link";

const plans = [
  {
    title: "Part-Time & Temporary Cover",
    range: "From £8 / hr",
    years: "",
    idealFor: "Large scale companies, or for custom services",
    time: "Minimum 10 hours per week",
    features: [
      "Immediate coverage for staff on paternal/maternal leave or FTD",
      "Seamless handover with minimal disruption to daily operations",
      "Temporary support during peak seasons or project-based work",
      "Perfect for smaller agencies needing part-time operational support",
      "Maintains continuity in client relationships and ongoing transactions",
    ],
    button: "Book A Call",
    className: "bg-gradient-to-b from-[#C4EDFF60] to-[#C7BEFF60]",
  },
  {
    title: "Associate",
    range: "£799 – £1,099",
    years: "0-2 yrs",
    idealFor: "Admin, data, listings",
    features: [
      "Handles routine admin work and data entry with precision",
      "Set-up and integration into your systems in just 8 days",
      "Ongoing quality checks and performance feedback",
      "Replacement hire if you’re not fully satisfied",
      "Support for tools, and CRMs",
    ],
    button: "Get Started",
    className: "bg-[#D5E4E980] ",
  },
  {
    title: "Mid-Level",
    range: "£1,099 – £1,499",
    years: "2-4 yrs",
    idealFor: "Tenancy handing, ops",
    features: [
      "Two-month UK-specific real estate training",
      "Set-up and integration into your systems in just 8 days",
      "Ongoing quality checks and performance feedback",
      "Replacement hire if you’re not fully satisfied",
      "Support for tools, and CRMs",
    ],
    button: "Get Started",
    className: "bg-[#EAF6F5] ",
  },
  {
    title: "Senior",
    range: "£1,499 – £1,999",
    years: "4+ yrs",
    idealFor: "Portfolio management, compliance",
    features: [
      "Two-month UK-specific real estate training",
      "Set-up and integration into your systems in just 8 days",
      "Ongoing quality checks and performance feedback",
      "Replacement hire if you’re not fully satisfied",
      "Support for tools, and CRMs",
    ],
    button: "Get Started",
    className: "bg-[#EDECFA80] mt-4",
  },
  {
    title: "Create your own",
    range: "Custom Package",
    years: "",
    idealFor: "Large scale companies, or for custom services",
    features: [
      "Ongoing quality checks and performance feedback",
      "Replacement hire if you're not fully satisfied",
      "Support for tools, and CRM’s",
      "Two-month UK-specific real estate training",
      "Set-up and integration into your systems in just 8 days",
    ],
    button: "Book A Call",
    className: "bg-[#E1F3F8]",
  },
]

export default function PricingCards() {
  const standardPlans = plans.slice(0, plans.length - 1);
  const customPlan = plans[plans.length - 1];

  return (
    <section className="container mx-auto px-4 py-12 max-2xl:min-h-[100vh] flex flex-col justify-center items-center">
      <h1 className="my-14 text-center text-3xl font-dm_serif md:text-4xl font-normal text-[#1B1B1B]">
        Pricing That Doesn’t Make You Think Twice.
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {standardPlans.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-2xl shadow-lg p-6 ${plan.className} hover:shadow-2xl transition-transform hover:-translate-y-2 cursor-pointer flex flex-col`}
          >
            <div className="mb-4">
              <h3 className="text-xl font-medium font-ibm_plex">{plan.title}</h3>
              {plan.years && (
                <p className="text-sm text-gray-500 mt-1">({plan.years})</p>
              )}
              <h4 className="my-3 font-bold text-3xl  tracking-wider">{plan.range}</h4>
              <p className="text-sm text-[#5B616E]-500 mt-1">{plan.time && plan.time}</p>
              <p className="text-sm text-[#5B616E] mt-2">
                Ideal for:<br /> <span className="font-semibold mt-2">{plan.idealFor}</span>
              </p>
            </div>

            <ul className="flex-1 space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-gray-600 hover:text-roca transition-colors"
                >
                  <CheckCircle size={16} className="text-roca flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link href={'/get-started'} className="mt-auto bg-white rounded-full font-medium py-2 hover:bg-opacity-70 transition hover:bg-black hover:text-white text-center">
              <button className="text-center">
                {plan.button}
              </button>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 w-full max-w-5xl rounded-2xl shadow-lg p-6 bg-[#E1F3F8] hover:shadow-2xl transition-transform hover:-translate-y-2 cursor-pointer flex flex-col">

        <div className="flex-1 space-y-1 mb-6 grid  grid-cols-1 md:grid-cols-7 ">


          <div className="md:w-full  md:mb-0 md:col-span-3">
            <h3 className="text-xl font-ibm_plex">{customPlan.title}</h3>
            <p className="my-3 font-bold text-3xl font-dm_serif tracking-wider">{customPlan.range}</p>
            <p className="text-sm text-gray-700 mt-3 mb-6">
              Ideal for: <br /> <span className="font-semibold my-2">{customPlan.idealFor}</span>
            </p>
          </div>

          <ul className="flex-1 space-y-1 mb-6 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:col-span-4">
            {customPlan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-4 text-sm text-gray-600 hover:text-roca transition-colors">
                <CheckCircle size={16} className=" flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link href={'/get-started'}>
          <button className="mt-auto md:w-full bg-white rounded-full font-medium py-2 px-6 hover:bg-opacity-70 transition hover:bg-black hover:text-white">
            {customPlan.button}
          </button>
        </Link>
      </div>
    </section>
  )
}











