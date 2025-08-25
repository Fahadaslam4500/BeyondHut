"use client";
import { TextAnimate } from "@/components/magicui/text-animate";

const roles = [
  {
    title: "Admin Assistants",
    desc: "CRM management, listing updates, email handling, data organization ",
    className: "bg-[#EBF9FD9E]",
    tag: "Focus on deals, not paperwork",
    image: "/assets/redesign/role1.png",
  },
  {
    title: "Tenant Relations Specialists",
    desc: "Inquiry handling, viewing coordination, maintenance requests, communication logs",
    className: "bg-[#F5F5F5]",
    tag: "Keep tenants happy and retained",
    image: "/assets/redesign/role2.png",
  },
  {
    title: "Property Operations Managers",
    desc: "Lease renewals, compliance certificates, inspection scheduling, maintenance coordination",
    className: "bg-[#EBF9FD9E]",
    tag: "Stay compliant and stress-free",
    image: "/assets/redesign/role3.png",
  },
  {
    title: "Lettings Coordinators",
    desc: "Lease renewals, compliance certificates, inspection scheduling, maintenance coordination",
    className: "bg-[#F5F5F5]",
    tag: "Keep your lettings pipeline flowing",
    image: "/assets/redesign/role4.png",
  },
  {
    title: "Accountants & Book Keepers",
    desc: "Invoice processing, rent collection, financial reporting, expense tracking",
    className: "bg-[#EBF9FD9E]",
    tag: "Keep your finances organized and profitable",
    image: "/assets/redesign/role5.png",
  },
  {
    title: "Sales Coordinators",
    desc: "Lead qualification, offer management, completion tracking, post-sale follow-up",
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

        <TextAnimate animation="blurInUp" by="character" as={'h2'} duration={0.8} className="text-3xl font-roca md:text-4xl font-bold text-[#1B1B1B]">
          Talent Placement Roles We Fill
        </TextAnimate>

        <p className="mt-2 text-gray-600 text-lg font-dm_sans">
          Hire for any key role without the hiring hassle
        </p>
      </div>

      {/* Grid with animations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 font-dm_sans ">
        {roles.map((role, index) => (
          <div
            key={index}
           
            className={`min-h-[500px] hover:cursor-pointer flex flex-col justify-between rounded-2xl p-6 hover:shadow-lg transition ${role.className}`}
          >
            <h3 className="text-2xl font-semibold text-[#2B2B2B] ">
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
