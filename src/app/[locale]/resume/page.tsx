// import { Chip } from "@nextui-org/react";

export default async function Home() {
  return (
    <div className="flex flex-col print:mt-0 print:border-b-0 sm:mt-3 sm:border sm:border-bitcoin-gray">
      <div className="w-full px-4 py-6 bg-bitcoin-gray text-white flex flex-col gap-4">
        <h1>Jean-Philippe Melanson</h1>
        <h2>Software Engineer</h2>
      </div>
      <div className="flex flex-wrap-reverse pl-1">
        <div className="flex flex-col flex-1 gap-4 sm:mr-4 mt-4 px-4 sm:px-0 print:pl-4">
          <div className="flex flex-col gap-4">
            <div>
              <h3>Overview</h3>
              <hr />
            </div>
            <div className="flex">
              <div>
                Accomplished software engineer with 15 years of experience in
                building robust mobile and web applications. Proven expertise in
                Next.js, React, React Native, TypeScript, and Postgres,
                complemented by extensive backend and cloud development
                experience. Skilled in architecting large-scale applications and
                dedicated to agile principles, with comprehensive knowledge of
                the full software development lifecycle. Seeking a leadership or
                senior engineering role to leverage technical expertise and
                drive impactful projects.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <h3>Work Experience</h3>
              <hr />
            </div>
            <div className="flex">
              <div className="w-24">
                <h5>2023-04 - Current</h5>
              </div>
              <div className="flex flex-col flex-1">
                <h4>Technical Cofounder</h4>
                <h5>doormath.ca (Remote)</h5>
                <ul className="m-3 list-disc">
                  <li>
                    Created the technical foundation of a customer-facing real
                    estate platform that provided instant home valuation and
                    sector insights with Next.js/React/TypeScript and
                    Supabase/Postgres
                  </li>
                  <li>
                    Collaborated with CEO on product vision definition and
                    coordinated contractors to incorporate UX and ML elements
                  </li>
                  <li>
                    Implemented several critical features like appraisal
                    process, broker subscriptions, broker management, property
                    listing, sector auctions, advertisements,
                    analytics/tracking, real estate transactions, emails,
                    customer retention, etc
                  </li>
                  <li>
                    Worked on several non-functional features such as
                    authentification, automated QA, continuous deployment,
                    CDN/DNS integration, image optimizations, etc
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <div className="w-24">
                <h5>2020-05 - 2023-01</h5>
              </div>
              <div className="flex flex-col flex-1">
                <h4>Senior Software Engineer</h4>
                <h5>FastAF Technologies Inc. (Remote)</h5>
                <ul className="m-3 list-disc">
                  <li>
                    Led end-to-end e-commerce features development such as cart,
                    checkout, loyalty, discounts, inventory and recommendations
                    in Rails and React Native/TypeScript
                  </li>
                  <li>
                    Oversaw and implemented various web3 product initiatives
                    around accepting cryptocurrency payments, NFT discounts,
                    on/off ramp and wallet integration on the Solana blockchain
                  </li>
                  <li>
                    Provided leadership on DevOps and QA processes in order to
                    optimize support requests
                  </li>
                  <li>
                    Engineering subject matter expert and primary
                    point-of-contact for product management and executives
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex break-before-page">
              <div className="w-24">
                <h5>2018-04 - 2020-05</h5>
              </div>
              <div className="flex flex-col flex-1">
                <h4>Senior Cloud Engineer - Consultant</h4>
                <h5>Ticketmaster (Québec City, QC)</h5>
                <ul className="m-3 list-disc">
                  <li>
                    Implemented core ticketing micro-services using Java and Go
                    on AWS
                  </li>
                  <li>
                    Collaborated with cross-functional teams to develop and
                    implement cloud-based solutions, streamlining business
                    processes
                  </li>
                  <li>
                    Managed disaster recovery planning for critical applications
                    hosted in cloud environment, minimizing potential data loss
                    or service outages during unforeseen events
                  </li>
                  <li>
                    Contributed to development of cloud governance policies that
                    provided clear guidelines around infrastructure usage,
                    security controls, cost management, and maintenance
                    responsibilities
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <div className="w-24">
                <h5>2017-10 - 2018-03</h5>
              </div>
              <div className="flex flex-col flex-1">
                <h4>Senior Full Stack Engineer - Consultant</h4>
                <h5>Asurion (Remote)</h5>
                <ul className="m-3 list-disc">
                  <li>
                    Developed user-friendly interfaces using HTML, CSS,
                    JavaScript, React and other front-end technologies for
                    seamless user experience
                  </li>
                  <li>
                    Conducted thorough testing of applications to identify and
                    resolve bugs prior to deployment
                  </li>
                  <li>Maintenance on backend APIs (Scala)</li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <div className="w-24">
                <h5>2016-10 - 2017-10</h5>
              </div>
              <div className="flex flex-col flex-1">
                <h4>Senior Full Stack Engineer - Consultant</h4>
                <h5>Ticketmaster (Québec City, QC)</h5>
                <ul className="m-3 list-disc">
                  <li>
                    Developed user-friendly interfaces using HTML, CSS,
                    JavaScript and React to manage redeemable event codes
                  </li>
                  <li>
                    Provided leadership on frontend technical architecture with
                    React and Redux and on backend architecture with services on
                    Java and Spring
                  </li>
                  <li>
                    Involved with Agile project management ceremonies like
                    project planning, daily updates, grooming sessions, etc
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <div className="w-24">
                <h5>2014-07 - 2016-05</h5>
              </div>
              <div className="flex flex-col flex-1">
                <h4>Senior Software Engineer</h4>
                <h5>Balihoo (Boise, ID)</h5>
                <ul className="m-3 list-disc">
                  <li>
                    Implemented features to automate campaigns across multiple
                    channels and locations using Scala on Amazon Simple Workflow
                    Service
                  </li>
                  <li>
                    Developed web frontend application to create and monitor
                    marketing campaigns efficiently using Javascript, AWS and
                    Scala
                  </li>
                  <li>
                    Automated multiple data processing operations using
                    CoffeeScript, Node.js and Amazon Redshift
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex break-before-page">
              <div className="w-24">
                <h5>2011-06 - 2014-06</h5>
              </div>
              <div className="flex flex-col flex-1">
                <h4>Senior Engineer</h4>
                <h5>Ticketmaster (Québec City, QC)</h5>
                <ul className="m-3 list-disc">
                  <li>
                    Led cross-functional team platform efforts by implementing
                    low level Java library functions for ticket on-sale
                    operations
                  </li>
                  <li>
                    Implemented various production readiness initiatives around
                    monitoring, observability, logging, automated release
                    management
                  </li>
                  <li>
                    Created developer toolkit IDE for rapid onboarding of new
                    resources
                  </li>
                  <li>
                    Created local testing environment infrastructure with Docker
                    and linux scripting
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <div className="w-24">
                <h5>2008-05 - 2011-05</h5>
              </div>
              <div className="flex flex-col flex-1">
                <h4>Full Stack Software Engineer</h4>
                <h5>Université Laval (Québec City, QC)</h5>
                <ul className="m-3 list-disc">
                  <li>
                    Collaborated on full stack development of e-learning
                    platform with Java, JSF and Oracle
                  </li>
                  <li>
                    Developed multiple frontend JavaScript components, ensuring
                    cross browser compatibilities
                  </li>
                  <li>
                    Created a quiz module from the ground up that leveraged
                    Hibernate and object-oriented programming
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <h3>Education</h3>
                <hr />
              </div>
              <div className="flex">
                <div className="w-24">
                  <h5>2004-09 - 2008-09</h5>
                </div>
                <div className="flex flex-col items-center">
                  <section className="w-full flex flex-col">
                    <h4>
                      Bachelor of Engineering (B.Eng.) - Information Technology
                    </h4>
                    <h5>École de technologie supérieure</h5>
                    <ul className="mx-5 my-2 text-sm list-disc">
                      <li>
                        Laboratory Assistant: E-commerce & transactional
                        application development
                      </li>
                      <li>
                        NSERC Research Award: Image-based search with Oracle DB
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-8 sm:px-4 py-4 flex flex-col sm:w-64 print:w-56 gap-4 bg-slate-700/5">
          <div>
            <div>
              <h3>Contact</h3>
              <hr />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <div>
                <h4>Address</h4>
                <a>{`Lévis, QC, Canada, G6Z 3C8`}</a>
              </div>
              <div>
                <h4>Phone</h4>
                <a href="tel:+14189035365">{`418-903-5365`}</a>
              </div>
              <div>
                <h4>E-mail</h4>
                <a href="mailto:jp305@pm.me">{`jp305@pm.me`}</a>
              </div>
              <div>
                <h4>LinkedIn</h4>
                <a href="https://www.linkedin.com/in/jp305">{`linkedin.com/in/jp305`}</a>
              </div>
              <div>
                <h4>GitHub</h4>
                <a href="https://www.github.com/jp30566347">{`github.com/jp30566347`}</a>
              </div>
              <div>
                <h4>Website</h4>
                <a href="https://www.jpmelanson.info/portfolio">{`jp305.dev`}</a>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h3>Skills</h3>
              <hr />
            </div>
            <div className="flex flex-wrap gap-1 m-1 mt-4">
              <span className="px-2 py-1 text-xs bg-gray-200 rounded">Javascript</span>
              <span className="px-2 py-1 text-xs bg-gray-200 rounded">Typescript</span>
              <span className="px-2 py-1 text-xs bg-gray-200 rounded">React</span>
              <span className="px-2 py-1 text-xs bg-gray-200 rounded">Next.js</span>
              <span className="px-2 py-1 text-xs bg-gray-200 rounded">React Native</span>
              <span className="px-2 py-1 text-xs bg-gray-200 rounded">Postgres</span>
              <span className="px-2 py-1 text-xs bg-gray-200 rounded">AWS</span>
              <span className="px-2 py-1 text-xs bg-gray-200 rounded">GitHub</span>
              <span className="px-2 py-1 text-xs bg-gray-200 rounded">System Design</span>
              <span className="px-2 py-1 text-xs bg-gray-200 rounded">Code Architecture</span>
            </div>
          </div>
          <div>
            <div>
              <h3>Languages</h3>
              <hr />
            </div>
            <div className="flex flex-wrap gap-1 m-1 mt-4">
              <span className="px-2 py-1 text-xs bg-gray-200 rounded">French (native)</span>
              <span className="px-2 py-1 text-xs bg-gray-200 rounded">English</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
