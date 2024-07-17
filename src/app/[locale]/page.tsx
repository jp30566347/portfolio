import { SectionTitle } from "@/components/SectionTitle";

export default async function Home() {
  return (
    <div className="flex flex-col sm:flex-row gap-12 items-center sm:items-start">
      <img
        src="jp.png"
        className="rounded-xl shadow-xl border-primary object-fit w-[200px] h-[200px] sm:mt-8"
      />
      <section className="flex flex-col gap-5">
        <h1 className="text-center">Jean-Philippe Melanson</h1>

        <SectionTitle>Software Engineer</SectionTitle>

        <div className="flex flex-col items-center gap-5">
          <p>
            Passionate developer with over{" "}
            <b className="text-secondary">15 years</b> of professional
            experience in various industries and project sizes. Technically
            skilled in various areas of <u>full stack software development</u>,
            including <u>mobile applications</u> development and <u>APIs</u>.
          </p>
          <p>
            I prefer to work closer to customers at the intersection of Product,
            UX and Engineering. My current interests are fintech, cryptography,
            web3, bitcoin, nostr and other empowering technologies for the
            plebs.
          </p>
          <p>
            I have worked with multiple tech stacks and libraries over my career
            and typically adapt quickly. My actual go-to front-end stack is{" "}
            <b className="text-secondary">NextJS</b> /{" "}
            <b className="text-secondary">React</b> /{" "}
            <b className="text-secondary">React&nbsp;Native</b> /{" "}
            <b className="text-secondary">TypeScript</b> and on the backend I
            typically pick <b className="text-secondary">Postgres</b> as the
            do-it-all workhorse. I also do like{" "}
            <b className="text-secondary">Rails</b> for its incredible
            resilience to time, <b className="text-secondary">Go</b> for its
            simplicity and will eventually end up learning{" "}
            <b className="text-secondary">Rust</b> because it's a prophecy for
            any strongly type language advocate.
          </p>
        </div>
      </section>
    </div>
  );
}
