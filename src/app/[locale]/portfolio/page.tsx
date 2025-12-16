import { Button } from "@nextui-org/react";
import { ExternalLinkIcon, EyeIcon } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-col gap-5 mt-8 mx-4 sm:mx-0">
      <h1>Contractual Work</h1>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <h2>Featured</h2>
          <hr />
          <div className="flex flex-wrap gap-4">
            <div className="rounded-3xl bg-slate-700/5 p-4 w-full sm:w-80">
              <div>
                <h4>ventilo.ca</h4>
                <h5>client: CRIUCPQ</h5>
              </div>
              <ul className="list-disc m-3">
                <li>
                  Ported the mobile app <mark>brand new web version</mark>
                </li>
                <li>
                  Redesigned <mark>user experience</mark> from the ground up
                </li>
                <li>
                  Provided turnkey <mark>infrastructure</mark> with fast{" "}
                  <mark>content delivery, hosting & analytics</mark>
                </li>
              </ul>
              <div className="flex justify-center">
                <Link
                  href="https://www.ventilo.ca"
                  target="_blank"
                  className="w-48 bg-bitcoin-gray text-white px-8 py-3 flex gap-2 items-center justify-center rounded-lg"
                >
                  <div>Visit website</div>
                  <ExternalLinkIcon />
                </Link>
              </div>
            </div>
            <div className="rounded-3xl bg-slate-700/5 p-4 w-full sm:w-80">
              <div>
                <h4>Oxyg&apos;App mobile app</h4>
                <h5>client: CRIUCPQ</h5>
              </div>
              <ul className="list-disc m-3">
                <li>
                  Created a new{" "}
                  <mark>React Native/Expo mobile application</mark>
                </li>
                <li>
                  Implemented features around{" "}
                  <mark>oximeters settings optimizations</mark> for education
                  purposes
                </li>
                <li>
                  Managed <mark>store presence</mark>: handled deployment,
                  compliance, analytics, etc.
                </li>
              </ul>
              <div className="flex gap-2 items-center justify-center">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.iucpq.oxygapp&hl=en_US"
                  target="_blank"
                >
                  <img
                    src="playstore.png"
                    alt="Get it on Google Play"
                    className="h-10"
                  />
                </Link>
                <Link
                  href="https://apps.apple.com/us/app/oxygapp/id1668892646"
                  target="_blank"
                >
                  <img
                    src="appstore.png"
                    alt="download on the App Store"
                    className="h-10"
                  />
                </Link>
              </div>
            </div>
            <div className="rounded-3xl bg-slate-700/5 p-4 w-full sm:w-80">
              <div>
                <h4>VentilO mobile app</h4>
                <h5>client: CRIUCPQ</h5>
              </div>

              <ul className="list-disc m-3">
                <li>
                  Migrated native apps to <mark>React Native</mark> to provide
                  substantial <mark>maintenance cost reduction</mark>
                </li>
                <li>
                  Changed the main
                  <mark>recommandations algorithm</mark> according to customer
                  specifications
                </li>
                <li>
                  Managed <mark>store presence</mark>: handled deployment,
                  compliance, analytics, etc.
                </li>
              </ul>
              <div className="flex gap-2 items-center justify-center">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.iucpq.ventillo&hl=en_US"
                  target="_blank"
                >
                  <img
                    src="playstore.png"
                    alt="Get it on Google Play"
                    className="h-10"
                  />
                </Link>
                <Link
                  href="https://apps.apple.com/us/app/ventilo/id1478758927"
                  target="_blank"
                >
                  <img
                    src="appstore.png"
                    alt="download on the App Store"
                    className="h-10"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2>Services</h2>
          <hr />
          <div className="flex flex-wrap gap-4">
            <div className="rounded-3xl bg-slate-700/5 p-4 w-full sm:w-80">
              <h3>Mobile Application Development</h3>
              <div className="flex flex-col">
                <ul className="list-disc m-3">
                  <li>
                    Convert your <mark>nocode or UX designs</mark> into a
                    fully-functional
                    <mark>React Native/Expo hybrid application</mark>.
                  </li>
                  <li>
                    Deploy your application to the{" "}
                    <mark>Google/Apple store</mark>.
                  </li>
                  <li>
                    Manage <mark>compliancy and security updates</mark>
                  </li>
                </ul>
                <img src="react-native.jpg" className="object-contain h-32" />
              </div>
            </div>
            <div className="rounded-3xl bg-slate-700/5 p-4 w-full sm:w-80">
              <h3>Web Application Development</h3>
              <ul className="list-disc m-3">
                <li>
                  Create a <mark>highly performant web application</mark> using
                  React and Next.js
                </li>
                <li>
                  Deploy to <mark>optimized low-cost cloud environment</mark>
                </li>
                <li>
                  Optimize existing application <mark>performance</mark>
                </li>
              </ul>
              <div className="flex items-center justify-center gap-3">
                <img src="nextjs.svg" className="object-contain h-24" /> +{" "}
                <img src="react.svg" className="object-contain h-24" />
              </div>
            </div>
            <div className="rounded-3xl bg-slate-700/5 p-4 w-full sm:w-80">
              <h3>API</h3>
              <ul className="list-disc m-3">
                <li>
                  Expose a <mark>GraphQL or Rest API</mark> from Postgres
                </li>
                <li>
                  Create <mark>event-driven</mark> data pipelines
                </li>
                <li>
                  Create <mark>cloud</mark> functions
                </li>
                <li>
                  Cerate <mark>living documentation</mark> for your endpoints
                  using swagger or gitdocs
                </li>
              </ul>
              <div className="flex items-center justify-center gap-3">
                <img src="pg.png" className="object-contain h-24" /> +{" "}
                <img src="supabase.svg" className="object-contain h-24" />
              </div>
            </div>
            <div className="rounded-3xl bg-slate-700/5 p-4 w-full sm:w-80">
              <h3>Infrastructure</h3>
              <ul className="list-disc m-3">
                <li>
                  Implement a <mark>CI/CD strategy</mark>
                </li>
                <li>
                  Create a robust and secure <mark>cloud architecture</mark> for
                  front-facing applications
                </li>
                <li>
                  Create repeatable <mark>infrastructure-as-code</mark>
                </li>
              </ul>

              <div className="flex flex-col">
                <img src="aws-arch.png" className="object-contain h-32" />
              </div>
            </div>
            <div className="rounded-3xl bg-slate-700/5 p-4 w-full sm:w-80">
              <h3>Bitcoin</h3>
              <ul className="list-disc m-3">
                <li>
                  Implement a <mark>bitcoin savings</mark> strategy (individual
                  or enterprise)
                </li>
                <li>
                  Accept bitcoin <mark>online or in-store payments</mark>
                </li>
                <li>
                  <mark>Mentoring</mark>: discover how Bitcoin can help retain
                  your wealth across time and space
                </li>
              </ul>
              <div className="flex flex-col">
                <img
                  src="bitcoin-btc-logo.svg"
                  className="object-contain h-24"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
