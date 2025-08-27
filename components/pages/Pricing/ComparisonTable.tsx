import { TextAnimate } from "@/components/magicui/text-animate";

export default function ComparisonTable() {
  return (
    <div className="w-full bg-white mt-10 py-12 px-6 md:px-16 container">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-10">
      
        <TextAnimate animation="blurInUp" by="character" as={'h2'} duration={0.8} className="my-6 text-3xl font-dm_serif md:text-4xl font-bold text-[#1B1B1B]">
                         Hiring Shouldn’t Be A Full-Time Job
                      </TextAnimate>
        
        
        <p className="text-gray-600 mt-2 text-base md:text-lg">
          Compare us to hiring locally and suddenly, it’s a no-brainer.
        </p>
      </div>

      {/* Table wrapper with horizontal scroll */}
      <div className="overflow-x-auto -mx-6 md:mx-0">
        <div className="min-w-[800px] md:min-w-0"> 
          <table className="w-full border-collapse text-sm md:text-base text-gray-700">
            <thead>
              <tr>
                <th className="w-1/4 text-left font-semibold p-4"></th>
                <th className="w-1/4 text-center font-semibold bg-white text-primarylight text-xl p-4">
                  Beyond Hut
                </th>
                <th className="w-1/4 text-center font-medium p-4 text-[#5B616E] text-lg">
                  Cheap admin virtual assistants
                </th>
                <th className="w-1/4 text-center font-medium p-4 text-[#5B616E] text-lg">
                  In-house Solutions
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  label: "Cost",
                  beyond: "Starting from 799 € / month",
                  cheap: "Hourly, multiplied by each role",
                  inhouse:
                    "Salary + benefits, management, equipment and training costs",
                },
                {
                  label: "Time Savings",
                  beyond:
                    "Up to 60 hours saved per month with streamlined processes",
                  cheap: "Varies, often less time saved due to inefficiency",
                  inhouse:
                    "Time savings depend on in-house systems and processes",
                },
                {
                  label: "Skill & Expertise",
                  beyond:
                    "Highly skilled. Specialised in property law that serve estate agents & property management companies.",
                  cheap: "Varies widely, often only basic admin tasks",
                  inhouse: "Skilled but requires time to train and onboard",
                },
                {
                  label: "Performance Management",
                  beyond: "Internal management and quality assurance processes",
                  cheap: "Minimal",
                  inhouse: "None",
                },
                {
                  label: "Starting Date",
                  beyond: "7 days",
                  cheap: "Few weeks",
                  inhouse: "1-3 Months (Hiring Process)",
                },
                {
                  label: "Onboarding",
                  beyond: "Seamless onboarding & ongoing training",
                  cheap: "Minimal to no onboarding or support",
                  inhouse: "Requires extensive internal resources",
                },
                {
                  label: "Back-up Support",
                  beyond: "Consistent support with a back up team",
                  cheap: "Only if you have multiple assistants",
                  inhouse: "Only if you have multiple assistants",
                },
                {
                  label: "Cultural & Language Fit",
                  beyond: "Culturally aligned, fluent in English",
                  cheap: "Language and cultural barriers common",
                  inhouse:
                    "Fully aligned with company culture and language",
                },
                {
                  label: "Customization & Personalization",
                  beyond:
                    "Tailored to your business needs, ongoing adjustments",
                  cheap: "Basic tasks, minimal customization",
                  inhouse:
                    "High level of customization but time-consuming",
                },
                {
                  label: "Technology & Tools",
                  beyond: "Proficient with the latest tools, including AI",
                  cheap: "Basic knowledge, often limited to common tools",
                  inhouse:
                    "Requires company-provided tools and training",
                },
                {
                  label: "Confidentiality & Security",
                  beyond: "Strong confidentiality protocols, GDPR compliant",
                  cheap: "Varies, potential security risks",
                  inhouse: "High security but depends on internal policies",
                },
                {
                  label: "Flexibility & Scalability",
                  beyond: "Easily scalable as your business grows",
                  cheap: "Limited by individual VA capacity",
                  inhouse:
                    "Scalable but requires significant investment",
                },
              ].map((row, idx) => (
                <tr key={idx} className="border-t border-gray-200 font-ibm_plex">
                  <td className="font-semibold bg-white p-4">{row.label}</td>
                  <td className="bg-[#EBF9FD] text-[#2C6ECB] p-4">
                    {row.beyond}
                  </td>
                  <td className="bg-white p-4">{row.cheap}</td>
                  <td className="bg-white p-4">{row.inhouse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
