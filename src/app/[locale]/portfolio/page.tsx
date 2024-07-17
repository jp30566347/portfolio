import { SectionTitle } from "@/components/SectionTitle";

export default async function Home() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-center">Freelance</h1>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <SectionTitle>Services</SectionTitle>
          <div className="flex flex-col items-center gap-8">
            <div className="w-full flex flex-col">
              These are things I can do for you
              <ul className="mx-5 my-2 text-sm list-disc">
                <li>
                  Mobile Application Development: Convert your nocode or UX
                  designs to a fully-functional React Native/Expo application.
                </li>
                <li>
                  Mobile Application Release Management: Deploy your application
                  to the Google/Apple store and manage compliancy and security
                  updates.
                </li>
                <li>
                  Web Application Development: Create a highly performant web
                  application using React and NextJS latest app router. Deploy
                  on your premise or in an optimized, low-cost and secure cloud
                  environment.
                </li>
                <li>
                  APIs: Build easy-to-use REST or GraphQL APIs to be consumed by
                  your applications or third-parties. TypeScript, Go, Rails or
                  Supabase.
                </li>
                <li>
                  CI/CD: Automate deployment and validation of your software and
                  QA process. GitHub or GitLab.
                </li>
                <li>Cloud: Create tailored cloud solutions on AWS/Heroku.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <SectionTitle>Featured Projects</SectionTitle>
          <div className="flex flex-col items-center gap-8">
            <div className="w-full flex flex-col">
              <h3>CRIUCPQ</h3>
              <h5 className="font-bold text-secondary">ventilo.ca</h5>
              <span className="text-sm text-primary/50">June 2024</span>
              <ul className="mx-5 my-2 text-sm list-disc">
                <li>
                  Created a web version of the mobile application with a
                  complete redesigned user experience
                </li>
                <li>Hosting, domain and analytics</li>
              </ul>
            </div>

            <div className="w-full flex flex-col">
              <h3>CRIUCPQ</h3>
              <h5 className="font-bold text-secondary">Oxyg'App Mobile App</h5>
              <span className="text-sm text-primary/50">June 2023</span>
              <ul className="mx-5 my-2 text-sm list-disc">
                <li>
                  A hybrid mobile application to allow clinicians to measure
                  accurately Oxygen corrections based on skin pigmentation and
                  oximeters
                </li>
                <li>Store presence and deployments</li>
              </ul>
            </div>

            <div className="w-full flex flex-col">
              <h3>CRIUCPQ</h3>
              <h5 className="font-bold text-secondary">Ventilo Mobile App</h5>
              <span className="text-sm text-primary/50">June 2022</span>
              <ul className="mx-5 my-2 text-sm list-disc">
                <li>Migrating existing native apps to a single hybrid app</li>
                <li>Change the recommendations algorithm</li>
                <li>Provided store presence and deployments</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
