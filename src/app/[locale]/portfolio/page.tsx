import { Button } from "@nextui-org/react";
import { ExternalLinkIcon, EyeIcon } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-col gap-5 mt-8 mx-4 sm:mx-0">
      <h1>Contractual Work</h1>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <h2>Service Offering</h2>
          <hr />
          <div className="flex flex-wrap gap-4">
            <div className="rounded-3xl bg-slate-700/5 p-4 w-full sm:w-80">
              <h3>Mobile Application Development</h3>
              <ul className="list-disc m-3">
                <li>
                  Convert your nocode or UX designs into a fully-functional
                  React Native/Expo application.
                </li>
                <li>Deploy your application to the Google/Apple store.</li>
                <li>Manage compliancy and security updates</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-slate-700/5 p-4 w-full sm:w-80">
              <h3>Web Application Development</h3>
              <ul className="list-disc m-3">
                <li>
                  Create a highly performant web application using React and
                  Next.js latest app router
                </li>
                <li>
                  Deploy on-prem or in an optimized, low-cost cloud environment
                </li>
                <li>Optimize existing application for performance</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-slate-700/5 p-4 w-full sm:w-80">
              <h3>API</h3>
              <ul className="list-disc m-3">
                <li>Expose a GraphQL or Rest API from Postgres</li>
                <li>Create event-driven data pipelines</li>
                <li>Create cloud functions</li>
                <li>Document your endpoints through swagger or gitdocs</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-slate-700/5 p-4 w-full sm:w-80">
              <h3>Infrastructure</h3>
              <ul className="list-disc m-3">
                <li>Implement a CI/CD strategy</li>
                <li>
                  Create a robust and secure cloud architecture for front-facing
                  applications
                </li>
                <li>Create repeatable infrastructure-as-code</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-slate-700/5 p-4 w-full sm:w-80">
              <h3>Bitcoin</h3>
              <ul className="list-disc m-3">
                <li>
                  Implement a bitcoin savings strategy (individual or
                  enterprise)
                </li>
                <li>Accept bitcoin payments online or in-store (retail)</li>
                <li>
                  Mentoring: discover why Bitcoin is the best Store of Value,
                  Unit of Account and{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2>Featured Work</h2>
          <hr />
          <div className="flex flex-wrap gap-4">
            <div className="rounded-3xl bg-slate-700/5 p-4 w-full sm:w-80">
              <div>
                <h4>ventilo.ca</h4>
                <h5>client: CRIUCPQ</h5>
              </div>
              <ul className="list-disc m-3">
                <li>
                  Created a web version of the mobile application with a
                  complete UX redesign
                </li>
                <li>Handled hosting, DNS, analytics and deployment</li>
              </ul>
              <Button
                size="sm"
                variant="solid"
                href="https://www.ventilo.ca"
                target="_blank"
                endContent={<ExternalLinkIcon size="12" />}
              >
                Check it out!
              </Button>
            </div>
            <div className="rounded-3xl bg-slate-700/5 p-4 w-full sm:w-80">
              <div>
                <h4>Oxyg'App mobile app</h4>
                <h5>client: CRIUCPQ</h5>
              </div>
              <ul className="list-disc m-3">
                <li>
                  Created an hybrid React Native/Expo mobile application to
                  allow clinicians to measure accurately Oxygen corrections
                  based on skin pigmentation and oximeters
                </li>
                <li>Managed store presence, deployment and compliance</li>
              </ul>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="solid"
                  href="https://play.google.com/store/apps/details?id=com.iucpq.oxygapp&hl=en_US"
                  target="_blank"
                  endContent={<ExternalLinkIcon size="12" />}
                >
                  Google Store
                </Button>
                <Button
                  size="sm"
                  variant="solid"
                  href="https://apps.apple.com/us/app/oxygapp/id1668892646"
                  target="_blank"
                  endContent={<ExternalLinkIcon size="12" />}
                >
                  Apple Store
                </Button>
              </div>
            </div>
            <div className="rounded-3xl bg-slate-700/5 p-4 w-full sm:w-80">
              <div>
                <h4>VentilO mobile app</h4>
                <h5>client: CRIUCPQ</h5>
              </div>
              <ul className="list-disc m-3">
                <li>
                  Migrated existing native apps to single hybrid app and save on
                  maintenance cost
                </li>
                <li>Changed the recommendations algorithm</li>
                <li>Managed store presence, deployment and compliance</li>
              </ul>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="solid"
                  href="https://play.google.com/store/apps/details?id=com.iucpq.ventillo&hl=en_US"
                  target="_blank"
                  endContent={<ExternalLinkIcon size="12" />}
                >
                  Google Store
                </Button>
                <Button
                  size="sm"
                  variant="solid"
                  href="https://apps.apple.com/us/app/ventilo/id1478758927"
                  target="_blank"
                  endContent={<ExternalLinkIcon size="12" />}
                >
                  Apple Store
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
