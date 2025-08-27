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
    desc: "Manages property marketing, viewings, and prospect engagement to maximize occupancy rates.",
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
    <section className={`container py-16 px-6 md:px-12 lg:px-20 my-10`}>
      {/* Heading */}
      <div className="text-center mb-12">

        <TextAnimate animation="blurInUp" by="character" as={'h2'} duration={0.8} className="text-3xl  md:text-4xl font-medium text-[#1B1B1B]">
          Talent Placement Roles We Fill
        </TextAnimate>

        <p className="mt-2 text-[#516371] text-lg">
          Hire for any key role without the hiring hassle
        </p>
      </div>

      {/* Grid with animations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  ">
        {roles.map((role, index) => (
          <div
            key={index}
           
            className={`min-h-[500px] hover:cursor-pointer flex flex-col justify-between rounded-2xl p-6 hover:shadow-lg transition ${role.className}`}
          >
            <h3 className="text-2xl font-medium font-ibm_plex text-[#2B2B2B] ">
              {role.title}
            </h3>
            <p className="mt-2 text-[#616161] text-base">{role.desc}</p>
            <p className="mt-2 text-[#454545] font-medium p-3 border-[1px] text-lg border-[#E7E7E7] rounded-md self-start">
              {role.tag}
            </p>
            <img src={role.image} alt={role.title} className="w-full mt-10" />
          </div>
        ))}
      </div>
    </section>
  );
}
