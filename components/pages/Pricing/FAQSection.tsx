"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FAQSection() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-2xl md:text-4xl font-roca font-semibold mb-2">
        Mini <span className="text-sky-500">FAQ</span>
      </h2>
      <p className="text-[#516371] mb-10 text-lg">Questions We Hear Often</p>

      {/* 12-col grid at md+: row1 = 8/4, row2 = 4/8 */}
      <div className="grid gap-6 md:grid-cols-12">
        {/* Row 1 – Left (8/12) */}
        <Card className="text-left md:col-span-8 md:col-start-1 md:row-start-1 h-full transition hover:-translate-y-1 hover:shadow-lg min-h-[170px] flex justify-start items-center">
          <CardContent className="p-6">
            <h3 className="font-medium text-lg mb-2">Do I need to commit long-term?</h3>
            <p className="text-gray-600 text-sm">
              No. Our services are month-to-month after an initial trial period, so you can start risk-free.
            </p>
          </CardContent>
        </Card>

        {/* Row 1 – Right (4/12) */}
        <Card className="text-left md:col-span-4 md:col-start-9 md:row-start-1 h-full bg-[#EBF9FD80] transition hover:-translate-y-1 hover:shadow-lg min-h-[170px] flex justify-start items-center">
          <CardContent className="p-6">
            <h3 className="font-medium text-lg mb-2">Can I switch plans later?</h3>
            <p className="text-gray-600 text-sm">Absolutely, flexible scaling is built in.</p>
          </CardContent>
        </Card>

        {/* Row 2 – Left (4/12) */}
        <Card className="text-left md:col-span-4 md:col-start-1 md:row-start-2 h-full min-h-[170px] flex justify-start items-center bg-[#EBF9FD80] transition hover:-translate-y-1 hover:shadow-lg">
          <CardContent className="p-6">
            <h3 className="font-medium text-lg mb-2">What if the hire isn’t working out?</h3>
            <p className="text-gray-600 text-sm">
              We’ll replace them, fast and free; because you shouldn’t pay for underperformance.
            </p>
          </CardContent>
        </Card>

        {/* Row 2 – Right (8/12) */}
        <Card className="text-left md:col-span-8 md:col-start-5 md:row-start-2 h-full transition hover:-translate-y-1 hover:shadow-lg min-h-[170px] flex justify-start items-center">
          <CardContent className="p-6">
            <h3 className="font-medium text-lg mb-2">
              Are your hires trained in real estate compliance and UK portals?
            </h3>
            <p className="text-gray-600 text-sm">
              Yes: they’ve mastered ASTs, EICRs, EPCs, CRMs, and lead platforms before day one.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* CTA */}
      <p className="text-[#516371] text-lg mt-10">Still have questions? Get connected to our support team.</p>
      <Button className="mt-4 rounded-full px-6 bg-primary">Contact us</Button>
    </section>
  );
}
