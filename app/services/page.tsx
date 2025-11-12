import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";

export default function page() {
  return (
    <section className="@container m-auto mt-40 flex max-w-[90%] flex-col items-center justify-center gap-10">
      <Card className="bg-card flex max-w-[500px] px-2 py-8 md:max-w-[900px] md:flex-row">
        <CardContent className="flex flex-col gap-5 md:max-w-[60%]">
          <div className="text-[50px]">🚢</div>
          <h1 className="text-foreground text-2xl font-semibold @[450]:text-3xl">
            Sea Freight Services
          </h1>
          <p className="text-sm @[450]:text-[16px]">
            Orrsman Group&apos;s ocean freight services provide cost-effective
            solutions for businesses looking to transport goods internationally.
            We handle both Full Container Load (FCL) and Less than Container
            Load (LCL) shipments.
          </p>
          <ul className="space-y-2 text-sm @[450]:text-[16px]">
            <li>✓ FCL (Full Container Load) services</li>
            <li>✓ LCL (Less than Container Load) consolidation</li>
            <li>✓ Door-to-door delivery options</li>
            <li>✓ Real-time cargo tracking</li>
            <li>✓ Competitive freight rates</li>
            <li>✓ Worldwide port coverage</li>
          </ul>
        </CardContent>
        <CardContent>
          <Card className="bg-muted w-[280px] p-5">
            <CardTitle>
              <h1 className="text-[17px]">Why Choose Our Sea Freight?</h1>
            </CardTitle>
            <div>
              <strong className="text-primary">Cost Effective</strong>
              <p className="text-sm">
                Most economical option for large volume shipments
              </p>
            </div>
            <div>
              <strong className="text-primary sm">Reliable Transit</strong>
              <p className="text-sm">
                Established shipping schedules with trusted carriers
              </p>
            </div>
            <div>
              <strong className="text-primary">Global Network</strong>
              <p className="text-sm">Access to major ports worldwide</p>
            </div>
          </Card>
        </CardContent>
      </Card>
      {/* AIR FREIGHT */}
      <Card className="bg-card flex max-w-[500px] px-2 py-8 md:max-w-[900px] md:flex-row">
        <CardContent className="flex flex-col gap-5 md:max-w-[60%]">
          <div className="text-[50px]">✈️</div>
          <h1 className="text-foreground text-2xl font-semibold @[450]:text-3xl">
            Air Freight Services
          </h1>
          <p className="text-sm @[450]:text-[16px]">
            Fast and reliable air cargo services for time-sensitive shipments.
            Orrsman Group&apos;s air freight solutions ensure your goods reach
            their destination quickly and safely.
          </p>
          <ul className="space-y-2 text-sm @[450]:text-[16px]">
            <li>✓ Express and standard air freight options</li>
            <li>✓ Temperature-controlled cargo handling</li>
            <li>✓ Dangerous goods certification</li>
            <li>✓ Airport-to-airport and door-to-door services</li>
            <li>✓ 24/7 cargo monitoring</li>
            <li>✓ Priority handling for urgent shipments</li>
          </ul>
        </CardContent>
        <CardContent>
          <Card className="bg-muted w-[280px] p-5">
            <CardTitle>
              <h1 className="text-[17px]">Why Choose Our Sea Freight?</h1>
            </CardTitle>
            <div>
              <strong className="text-primary">Speed</strong>
              <p className="text-sm">
                Fastest shipping method for urgent deliveries
              </p>
            </div>
            <div>
              <strong className="text-primary">Security</strong>
              <p className="text-sm">
                Enhanced security measures for valuable cargo
              </p>
            </div>
            <div>
              <strong className="text-primary">Flexibility</strong>
              <p className="text-sm">
                Multiple daily flights to major destinations
              </p>
            </div>
          </Card>
        </CardContent>
      </Card>

      {/* CUSTOMS CLEARANCE */}
      <Card className="bg-card flex max-w-[500px] px-2 py-8 md:max-w-[900px] md:flex-row">
        <CardContent className="flex flex-col gap-5 md:max-w-[60%]">
          <div className="text-[50px]">📋</div>
          <h1 className="text-foreground text-2xl font-semibold @[450]:text-3xl">
            Customs Clearance
          </h1>
          <p className="text-sm @[450]:text-[16px]">
            Navigate complex customs regulations with Orrsman Group&apos;s
            expert brokerage services. We handle all documentation and
            compliance requirements for smooth border crossings.
          </p>
          <ul className="space-y-2 text-sm @[450]:text-[16px]">
            <li>✓ Import and export documentation</li>
            <li>✓ Duty and tax calculations</li>
            <li>✓ Compliance consulting</li>
            <li>✓ Quarantine and inspection coordination</li>
            <li>✓ Electronic lodgement systems</li>
            <li>✓ Permit and licence applications</li>
          </ul>
        </CardContent>
        <CardContent>
          <Card className="bg-muted w-[280px] p-5">
            <CardTitle>
              <h1 className="text-[17px]">Why Choose Our Sea Freight?</h1>
            </CardTitle>
            <div>
              <strong className="text-primary">Compliance</strong>
              <p className="text-sm">
                Ensure all regulations are met correctly
              </p>
            </div>
            <div>
              <strong className="text-primary">Efficiency</strong>
              <p className="text-sm">Minimise delays and processing time</p>
            </div>
            <div>
              <strong className="text-primary">Cost Savings</strong>
              <p className="text-sm">Optimise duty and tax obligations</p>
            </div>
          </Card>
        </CardContent>
      </Card>

      {/* VEHICLE IMPORTS */}
      <Card className="bg-card flex max-w-[500px] px-2 py-8 md:max-w-[900px] md:flex-row">
        <CardContent className="flex flex-col gap-5 md:max-w-[60%]">
          <div className="text-[50px]">🚗</div>
          <h1 className="text-foreground text-2xl font-semibold @[450]:text-3xl">
            Vehicle Import Services
          </h1>
          <p className="text-sm @[450]:text-[16px]">
            Specialised vehicle importation services including compliance,
            registration, and delivery. Orrsman Group handles cars, motorcycles,
            and commercial vehicles with expertise.
          </p>
          <ul className="space-y-2 text-sm @[450]:text-[16px]">
            <li>✓ Vehicle compliance certification</li>
            <li>✓ SEVS applications</li>
            <li>✓ RAV processing</li>
            <li>✓ Quarantine inspection coordination</li>
            <li>✓ Registration assistance</li>
            <li>✓ Door-to-door vehicle delivery</li>
          </ul>
        </CardContent>
        <CardContent>
          <Card className="bg-muted w-[280px] p-5">
            <CardTitle>
              <h1 className="text-[17px]">Why Choose Our Sea Freight?</h1>
            </CardTitle>
            <div>
              <strong className="text-primary">Expertise</strong>
              <p className="text-sm">
                Deep knowledge of Australian vehicle regulations
              </p>
            </div>
            <div>
              <strong className="text-primary">End-to-End</strong>
              <p className="text-sm">
                Complete service from purchase to registration
              </p>
            </div>
            <div>
              <strong className="text-primary">Peace of Mind</strong>
              <p className="text-sm">Full compliance and legal certainty</p>
            </div>
          </Card>
        </CardContent>
      </Card>

      {/* FMCG LOGISTICS */}
      <Card className="bg-card flex max-w-[500px] px-2 py-8 md:max-w-[900px] md:flex-row">
        <CardContent className="flex flex-col gap-5 md:max-w-[60%]">
          <div className="text-[50px]">📦</div>
          <h1 className="text-foreground text-2xl font-semibold @[450]:text-3xl">
            FMCG Logistics
          </h1>
          <p className="text-sm @[450]:text-[16px]">
            Fast-moving consumer goods require specialised handling and
            distribution. Orrsman Group&apos;s FMCG logistics solutions ensure
            products reach retailers efficiently.
          </p>
          <ul className="space-y-2 text-sm @[450]:text-[16px]">
            <li>✓ Temperature-controlled storage</li>
            <li>✓ Inventory management systems</li>
            <li>✓ Cross-docking facilities</li>
            <li>✓ Last-mile delivery solutions</li>
            <li>✓ Retail distribution networks</li>
            <li>✓ Product labelling and packaging</li>
          </ul>
        </CardContent>
        <CardContent>
          <Card className="bg-muted w-[280px] p-5">
            <CardTitle>
              <h1 className="text-[17px]">Why Choose Our Sea Freight?</h1>
            </CardTitle>
            <div>
              <strong className="text-primary">Speed to Market</strong>
              <p className="text-sm">Rapid distribution to retail channels</p>
            </div>
            <div>
              <strong className="text-primary">Quality Control</strong>
              <p className="text-sm">
                Maintain product integrity throughout supply chain
              </p>
            </div>
            <div>
              <strong className="text-primary">Scalability</strong>
              <p className="text-sm">Flexible solutions for seasonal demands</p>
            </div>
          </Card>
        </CardContent>
      </Card>

      {/* MEAT EXPORT */}
      <Card className="bg-card flex max-w-[500px] px-2 py-8 md:max-w-[900px] md:flex-row">
        <CardContent className="flex flex-col gap-5 md:max-w-[60%]">
          <div className="text-[50px]">🥩</div>
          <h1 className="text-foreground text-2xl font-semibold @[450]:text-3xl">
            Meat Export & Trading
          </h1>
          <p className="text-sm @[450]:text-[16px]">
            Specialised meat export services with strict temperature control and
            compliance with international food safety standards. Orrsman Group
            ensures quality from farm to table.
          </p>
          <ul className="space-y-2 text-sm @[450]:text-[16px]">
            <li>✓ Cold chain management</li>
            <li>✓ HACCP compliance</li>
            <li>✓ Export certification</li>
            <li>✓ Halal and Kosher handling</li>
            <li>✓ Veterinary health certificates</li>
            <li>✓ Reefer container services</li>
          </ul>
        </CardContent>
        <CardContent>
          <Card className="bg-muted w-[280px] p-5">
            <CardTitle>
              <h1 className="text-[17px]">Why Choose Our Sea Freight?</h1>
            </CardTitle>
            <div>
              <strong className="text-primary">Quality Assurance</strong>
              <p className="text-sm">
                Maintained cold chain and safety compliance
              </p>
            </div>
            <div>
              <strong className="text-primary">Certification</strong>
              <p className="text-sm">
                Full export and health documentation provided
              </p>
            </div>
            <div>
              <strong className="text-primary">Global Reach</strong>
              <p className="text-sm">Shipping to major international markets</p>
            </div>
          </Card>
        </CardContent>
      </Card>
    </section>
  );
}
