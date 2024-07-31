import { Chip } from "@nextui-org/react";
import Head from "next/head";
import Script from "next/script";

export default async function Home() {
  return (
    <div className="mt-8 flex flex-col sm:flex-row gap-12 items-center sm:items-start">
      <div className="flex flex-col gap-5 px-4 sm:px-0">
        <h1>About Me</h1>
        <p>
          With over <u>15 years</u> of hands-on experience in diverse industries
          and project scales, I am a passionate software engineer dedicated to
          crafting exceptional digital solutions. My expertise spans the full
          stack of software development, with a particular focus on mobile
          application development, API and Cloud solutions.
        </p>
        <p>
          I'm a husband, dad of 3 with a love of hockey, fishing and biking.
        </p>
        <p>
          I thrive at the crossroads of Product, UX, and Engineering, always
          striving to work closely with customers to deliver impactful results.
          I like to work in a collaborative and iterative mindset.
        </p>
        <p>
          Throughout my career, I've embraced a variety of tech stacks and
          libraries, adapting swiftly to new environments. My current go-to
          front-end stack includes{" "}
          <Chip size="sm" color="secondary" variant="flat">
            Next.js
          </Chip>
          ,{" "}
          <Chip size="sm" color="secondary" variant="flat">
            React
          </Chip>
          ,{" "}
          <Chip size="sm" color="secondary" variant="flat">
            React Native
          </Chip>
          ,{" "}
          <Chip size="sm" color="secondary" variant="flat">
            TypeScript
          </Chip>
          .
        </p>
        <p>
          On the backend, I often rely on the robustness of{" "}
          <Chip size="sm" color="secondary" variant="flat">
            Postgres
          </Chip>{" "}
          through various languages like{" "}
          <Chip size="sm" color="secondary" variant="flat">
            TypeScript
          </Chip>
          ,{" "}
          <Chip size="sm" color="secondary" variant="flat">
            Rails
          </Chip>{" "}
          or{" "}
          <Chip size="sm" color="secondary" variant="flat">
            Go
          </Chip>
          . I also have a strong interest in learning{" "}
          <Chip size="sm" color="secondary" variant="flat">
            Rust
          </Chip>
          .
        </p>
        <p>
          My linux background also enable me to be efficient on
          platform/infrastructure work (architecture, deployment, quality
          assurance, security & production readiness)
        </p>
        <p>
          My current passions lie in the realms of{" "}
          <Chip size="sm" color="secondary" variant="flat">
            real estate
          </Chip>
          ,{" "}
          <Chip size="sm" color="secondary" variant="flat">
            finance
          </Chip>
          ,{" "}
          <Chip size="sm" color="secondary" variant="flat">
            bitcoin
          </Chip>
          ,{" "}
          <Chip size="sm" color="secondary" variant="flat">
            nostr
          </Chip>{" "}
          and other technologies that empower everyday people.
        </p>
      </div>
    </div>
  );
}
