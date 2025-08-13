// "use client";

// import { usePathname } from "next/navigation";
// import { ClerkProvider } from "@clerk/nextjs";

// export default function ConditionalClerkProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();

//   if (pathname.startsWith("/admin-dashboard")) {
//     return <ClerkProvider>{children}</ClerkProvider>;
//   }

//   return <>{children}</>;
// }
