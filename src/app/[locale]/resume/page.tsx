import { Chip } from "@nextui-org/react";
import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { ExternalLinkIcon } from "lucide-react";

export default async function Home() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-center">Resume</h1>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <SectionTitle>Experience</SectionTitle>
          <div className="flex flex-col items-center gap-8">
            <div className="w-full flex flex-col">
              <h3>Founding Engineer</h3>
              <h5 className="font-bold text-secondary">doormath.ca</h5>
              <span className="text-sm text-primary/50">
                April 2023 - February 2024
              </span>
              <ul className="mx-5 my-2 text-sm list-disc">
                <li>
                  Directed the technological vision for{" "}
                  <Link href="www.doormath.ca" target="_blank" className="">
                    doormath.ca{" "}
                    <ExternalLinkIcon size={12} className="inline" />
                  </Link>
                  , a Canadian AI home valuation platform
                </li>
                <li>
                  Created a customer-centric, responsive web platform with
                  features like precise address search, interactive map with
                  location score, accurate property details with photo carousel
                  and crowdsourced data collection
                </li>
                <li>
                  Created a marketing module allowing our brokers and agencies
                  to advertise on specific sectors using in-house adtech and
                  sector bidding
                </li>
                <li>
                  Ensured adequate security level by adding a robust
                  authentication and permission based on Supabase and Postgres
                </li>
              </ul>
              <div className="flex gap-5 justify-center">
                <Chip color="secondary" variant="flat">
                  TypeScript
                </Chip>
                <Chip color="secondary" variant="flat">
                  Postgres
                </Chip>
                <Chip color="secondary" variant="flat">
                  NextJS
                </Chip>
                <Chip color="secondary" variant="flat">
                  Tailwind
                </Chip>
                <Chip color="secondary" variant="flat">
                  Supabase
                </Chip>
              </div>
            </div>
            <div className="w-full flex flex-col">
              <h3>Senior Full Stack Engineer</h3>
              <h5 className="font-bold text-secondary">Fastaf Technologies</h5>
              <span className="text-sm text-primary/50">
                June 2020 - December 2023
              </span>
              <ul className="mx-5 my-2 text-sm list-disc">
                <li>
                  Built end-to-end e-commerce features : live order tracking,
                  customer loyalty programs, discount & promotions, tax
                  handling, notifications and Apple Pay support
                </li>
                <li>
                  Integrated e-commerce backend services with many third parties
                  such as TaxJar, Stripe, Klaviyo, OnFleet, DataDog, Shopify and
                  Magic
                </li>
                <li>
                  Led crypto initiatives around web3 authentification,
                  fiat/cryptocurrency on and off ramps, NFT-gatekeeped products
                  & discounts and USDC checkout
                </li>
              </ul>
              <div className="flex gap-5 justify-center">
                <Chip color="secondary" variant="flat">
                  TypeScript
                </Chip>
                <Chip color="secondary" variant="flat">
                  JavaScript
                </Chip>
                <Chip color="secondary" variant="flat">
                  Postgres
                </Chip>
                <Chip color="secondary" variant="flat">
                  Rails
                </Chip>
                <Chip color="secondary" variant="flat">
                  React Native
                </Chip>
              </div>
            </div>

            <div className="w-full flex flex-col">
              <h3>Senior Cloud/Backend Engineer</h3>
              <h5 className="font-bold text-secondary">Ticketmaster</h5>
              <span className="text-sm text-primary/50">
                April 2018 - May 2020
              </span>
              <ul className="mx-5 my-2 text-sm list-disc">
                <li>
                  Contributed to several Java and Go micro-services to manage
                  sale and access to large scale Live Nation events like NFL
                  games and Madonna concerts
                </li>
                <li>
                  Built the automated cloud deployment workflows (CI/CD) and
                  declarative infrastructure recipes for highly available web
                  services on AWS, including database disaster recovery
                </li>
                <li>
                  Created a low-level micro-service to generate Apple and Google
                  compatible NFC tokens, enabling offline event access
                </li>
                <li>
                  Led the overhaul of the Event Scanner application to allow
                  usage of dependency injection and Android MVVM architecture
                  primitives
                </li>
              </ul>
              <div className="flex gap-5 justify-center">
                <Chip color="secondary" variant="flat">
                  Go
                </Chip>
                <Chip color="secondary" variant="flat">
                  Java
                </Chip>
                <Chip color="secondary" variant="flat">
                  MySql
                </Chip>
                <Chip color="secondary" variant="flat">
                  AWS
                </Chip>
                <Chip color="secondary" variant="flat">
                  Android
                </Chip>
                <Chip color="secondary" variant="flat">
                  Terraform
                </Chip>
              </div>
            </div>

            <div className="w-full flex flex-col">
              <h3>Senior Full Stack Engineer</h3>
              <h5 className="font-bold text-secondary">Asurion</h5>
              <span className="text-sm text-primary/50">
                October 2017 - March 2018
              </span>
              <ul className="mx-5 my-2 text-sm list-disc">
                <li>Maintained claim management micro-services in Scala</li>
                <li>
                  Developed a session management utility and maintained serveral
                  React components
                </li>
              </ul>
              <div className="flex gap-5 justify-center">
                <Chip color="secondary" variant="flat">
                  Typescript
                </Chip>
                <Chip color="secondary" variant="flat">
                  Scala
                </Chip>
                <Chip color="secondary" variant="flat">
                  React
                </Chip>
              </div>
            </div>

            <div className="w-full flex flex-col">
              <h3>Senior Full Stack Engineer</h3>
              <h5 className="font-bold text-secondary">Balihoo</h5>
              <span className="text-sm text-primary/50">
                October 2014 - May 2016
              </span>
              <ul className="mx-5 my-2 text-sm list-disc">
                <li>
                  Developed a cloud-based workflow processing solutions using
                  Amazon Web Services
                </li>
                <li>
                  Integrater with 3rd-party APIs such as Google AdWords and
                  Microsoft Dynamics
                </li>
                <li>
                  Designed a data warehouse schema on AWS Redshift that
                  connected with several data streams and provide localized
                  search insights
                </li>
              </ul>
              <div className="flex gap-5 justify-center">
                <Chip color="secondary" variant="flat">
                  Scala
                </Chip>
                <Chip color="secondary" variant="flat">
                  JavaScript
                </Chip>
                <Chip color="secondary" variant="flat">
                  CoffeeScript
                </Chip>
              </div>
            </div>

            <div className="w-full flex flex-col">
              <h3>Backend Engineer</h3>
              <h5 className="font-bold text-secondary">Ticketmaster</h5>
              <span className="text-sm text-primary/50">
                June 2011 - May 2014
              </span>
              <ul className="mx-5 my-2 text-sm list-disc">
                <li>
                  Collaborated on mission critical production readiness issues:
                  logs, monitoring, alerting, robustness, resiliency of our
                  systems for large on sale events.
                </li>
                <li>
                  Worked on ensuring high resistance to stress on our backend
                  services using Gatling
                </li>
                <li>
                  Provided tools and services for upscaled developer experience
                  using Docker
                </li>
              </ul>
              <div className="flex gap-5 justify-center">
                <Chip color="secondary" variant="flat">
                  Java
                </Chip>
                <Chip color="secondary" variant="flat">
                  Docker
                </Chip>
                <Chip color="secondary" variant="flat">
                  MySql
                </Chip>
              </div>
            </div>

            <div className="w-full flex flex-col">
              <h3>Full Stack Engineer</h3>
              <h5 className="font-bold text-secondary">Université Laval</h5>
              <span className="text-sm text-primary/50">
                September 2008 - May 2011
              </span>
              <ul className="mx-5 my-2 text-sm list-disc">
                <li>
                  Developed e-learning platform features such as assignment
                  deposit box, a large scale questionnaire module and automated
                  PDF syllabus generation.
                </li>
                <li>
                  Created reusable JSF components in Java and JavaScript,
                  ensuring cross-browser compatibilities.
                </li>
                <li>
                  Provided proof-of-concepts and solutions to integrate portal
                  elements to allow flexible configuration by members of the
                  teaching staff.
                </li>
              </ul>
              <div className="flex gap-5 justify-center">
                <Chip color="secondary" variant="flat">
                  Java
                </Chip>
                <Chip color="secondary" variant="flat">
                  Oracle
                </Chip>
                <Chip color="secondary" variant="flat">
                  JavaScript
                </Chip>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <SectionTitle>Education</SectionTitle>
          <div className="flex flex-col items-center">
            <section className="w-full flex flex-col">
              <h3>Bachelor of Engineering (B.Eng.) - Information Technology</h3>
              <h5 className="font-bold text-secondary">
                École de technologie supérieure
              </h5>
              <span className="text-sm text-primary/50">September 2008</span>
              <ul className="mx-5 my-2 text-sm list-disc">
                <li>
                  <b className="font-bold">Laboratory Assistant</b>: E-commerce
                  & transactional application development
                </li>
                <li>
                  <b className="font-bold">NSERC Research Award</b>: Image-based
                  search with Oracle DB
                </li>
              </ul>
            </section>
          </div>
          <div className="flex flex-col items-center">
            <section className="w-full flex flex-col">
              <h3>Associate Degree - Computer Science</h3>
              <h5 className="font-bold text-secondary">
                CÉGEP de La Pocatière
              </h5>
              <span className="text-sm text-primary/50">May 2004</span>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
