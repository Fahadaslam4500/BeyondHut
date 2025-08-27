"use client";
import { TextAnimate } from "@/components/magicui/text-animate";

const roles = [
  {
    title: "Admin Assistant",
    desc: "Handles email management, data organization, and administrative tasks to keep your business running efficiently.",
    className: "bg-[#EBF9FD9E]",
    tag: "Focus on deals, not paperwork",
    image: "/assets/redesign/role1.png",
  },
  {
    title: "Tenant Relations Specialist",
    desc: "Manages tenant communications, agreements, reference checks, and renewals while maintaining positive relationships.",
    className: "bg-[#F5F5F5]",
    tag: "Keep tenants happy and retained",
    image: "/assets/redesign/role2.png",
  },
  {
    title: "Property Operations Administrator",
    desc: "Oversees lease renewals, compliance certificates, inspections, and maintenance for optimal property performance.",
    className: "bg-[#EBF9FD9E]",
    tag: "Stay compliant and stress-free",
    image: "/assets/redesign/role3.png",
  },
  {
    title: "Lettings Coordinator",
    desc: "Manages property marketing, publishing listings, viewings, and prospect engagement to maximize occupancy rates.",
    className: "bg-[#F5F5F5]",
    tag: "Keep your lettings pipeline flowing",
    image: "/assets/redesign/role4.png",
  },
  {
    title: "Accountant & Bookkeeper",
    desc: "Handles invoice processing, rent collection, financial reporting, and expense tracking",
    className: "bg-[#EBF9FD9E]",
    tag: "Keep your finances organized and profitable",
    image: "/assets/redesign/role5.png",
  },
  {
    title: "Sales Progressors/ Transaction Coordinators",
    desc: "Manages contracts, escrow coordination & documentation, liaising with solicitors, lenders, and surveyors.",
    className: "bg-[#F5F5F5]",
    tag: "Turn more prospects into closed deals",
    image: "/assets/redesign/role6.png",
  },
];

export default function RolesSection() {
  return (
    <section className={`container md:py-16 py-6 px-6 md:px-12 lg:px-20 md:my-10`}>
      {/* Heading */}
      <div className="text-center mb-12">

        <TextAnimate animation="blurInUp" once={true} by="word" as={'h2'} duration={0.8} className="text-3xl  md:text-4xl font-medium text-[#1B1B1B]">
          Talent Placement Roles We Fill
        </TextAnimate>

        <p className="mt-2 text-[#516371] text-lg">
          Hire for any key role without the hiring hassle
        </p>
      </div>

      {/* Grid with animations */}
      <div className="grid grid-cols-2  lg:grid-cols-3 gap-5 perspective-1000">
        {roles.map((role, index) => (
          <div
            key={index}
           
            className={`md:min-h-[400px] lg:min-h-[500px] hover:cursor-pointer flex flex-col justify-between rounded-2xl p-3 md:p-6  hover:shadow-lg transition hover:scale-[1.03] hover:-translate-y-1 hover:rotate-x-6 hover:rotate-y-6 ${role.className}`}
          >
            <h3 className="text-base sm:text-lg md:text-2xl font-medium font-ibm_plex text-[#2B2B2B] ">
              {role.title}
            </h3>
            <p className="mt-1 md:mt-2 text-[#616161] text-sm md:text-base">{role.desc}</p>
            <p className="md:mt-2 text-[#454545] font-medium md:p-3 p-1 my-2 border-[1px] text-sm md:text-lg border-[#E7E7E7] rounded-md self-start">
              {role.tag}
            </p>
            <img src={role.image} alt={role.title} className="w-full md:mt-10 mt-2" />
          </div>
        ))}
      </div>
    </section>
  );
}
