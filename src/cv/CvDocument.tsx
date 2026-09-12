import path from "node:path";
import {
  Document,
  Font,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import type { CvData } from "./data";

// The same three families the site loads through next/font, as static TTFs.
const font = (file: string) =>
  path.join(process.cwd(), "src/assets/fonts", file);

Font.register({
  family: "Source Sans 3",
  fonts: [
    { src: font("SourceSans3-Regular.ttf"), fontWeight: 400 },
    { src: font("SourceSans3-SemiBold.ttf"), fontWeight: 600 },
  ],
});
Font.register({
  family: "Bricolage Grotesque",
  fonts: [{ src: font("BricolageGrotesque-SemiBold.ttf"), fontWeight: 600 }],
});
Font.register({
  family: "IBM Plex Mono",
  fonts: [{ src: font("IBMPlexMono-Regular.ttf"), fontWeight: 400 }],
});
// No hyphenation: a CV reads better ragged than broken mid-word.
Font.registerHyphenationCallback((word) => [word]);

// Light palette from globals.css. Paper is always paper on paper.
const c = {
  paper: "#f3f5f2",
  sheet: "#ffffff",
  ink: "#1c2530",
  inkSoft: "#3d4856",
  mute: "#5c6875",
  pen: "#2f5bea",
  hl: "#ffe45c",
  grid: "#c4cac3",
};

const s = StyleSheet.create({
  page: {
    fontFamily: "Source Sans 3",
    fontSize: 8.6,
    lineHeight: 1.3,
    color: c.inkSoft,
    backgroundColor: c.sheet,
    paddingBottom: 30,
  },
  header: {
    backgroundColor: c.ink,
    paddingHorizontal: 32,
    paddingVertical: 18,
  },
  name: {
    fontFamily: "Bricolage Grotesque",
    fontWeight: 600,
    fontSize: 22,
    color: c.paper,
    lineHeight: 1.1,
  },
  jobTitle: {
    fontFamily: "IBM Plex Mono",
    fontSize: 8,
    color: c.hl,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    marginTop: 4,
  },
  availability: {
    fontFamily: "IBM Plex Mono",
    fontSize: 7,
    color: c.paper,
    opacity: 0.7,
    marginTop: 3,
  },
  columns: { flexDirection: "row", flexGrow: 1 },
  sidebar: {
    width: 158,
    backgroundColor: c.paper,
    borderRightWidth: 1.5,
    borderRightColor: c.ink,
    paddingHorizontal: 14,
    paddingVertical: 16,
    gap: 14,
  },
  main: {
    flex: 1,
    paddingHorizontal: 22,
    paddingVertical: 14,
    gap: 10,
  },
  sectionTitle: {
    fontFamily: "IBM Plex Mono",
    fontSize: 7,
    color: c.ink,
    textTransform: "uppercase",
    letterSpacing: 1.4,
    borderBottomWidth: 1.5,
    borderBottomColor: c.ink,
    paddingBottom: 3,
    marginBottom: 6,
  },
  label: {
    fontFamily: "IBM Plex Mono",
    fontSize: 6.5,
    color: c.mute,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 1,
  },
  link: { color: c.pen, textDecoration: "none" },
  row: { flexDirection: "row", gap: 5 },
  dash: { color: c.pen, width: 7 },
  strong: { fontWeight: 600, color: c.ink },
  chip: {
    fontFamily: "IBM Plex Mono",
    fontSize: 7,
    color: c.ink,
    borderWidth: 0.8,
    borderColor: c.ink,
    borderRadius: 2,
    paddingHorizontal: 4,
    paddingVertical: 1.5,
    marginRight: 4,
    marginBottom: 4,
  },
  job: { marginBottom: 6 },
  jobTitleText: {
    fontFamily: "Bricolage Grotesque",
    fontWeight: 600,
    fontSize: 10,
    color: c.ink,
  },
  company: { fontWeight: 600, color: c.pen, fontSize: 9 },
  location: { color: c.mute, fontWeight: 400 },
  period: {
    fontFamily: "IBM Plex Mono",
    fontSize: 7,
    color: c.mute,
    marginTop: 1,
    marginBottom: 2,
  },
  footer: {
    position: "absolute",
    bottom: 12,
    left: 32,
    right: 22,
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: "IBM Plex Mono",
    fontSize: 7,
    color: c.mute,
  },
});

function Section({
  title,
  children,
  wrap = true,
}: {
  title: string;
  children: React.ReactNode;
  wrap?: boolean;
}) {
  return (
    <View wrap={wrap}>
      <Text style={s.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <View style={[s.row, { marginBottom: 1.5 }]}>
      <Text style={s.dash}>—</Text>
      <Text style={{ flex: 1 }}>{children}</Text>
    </View>
  );
}

/** Returns the element itself (not a component) so renderToBuffer sees a Document. */
export function cvDocument(cv: CvData) {
  return (
    <Document
      title={`${cv.name} — ${cv.jobTitle}`}
      author={cv.name}
      language={cv.locale}
    >
      <Page size="LETTER" style={s.page}>
        <View style={s.header}>
          <Text style={s.name}>{cv.name}</Text>
          <Text style={s.jobTitle}>{cv.jobTitle}</Text>
          <Text style={s.availability}>{cv.availability}</Text>
        </View>

        <View style={s.columns}>
          <View style={s.sidebar}>
            <Section title={cv.contact.title}>
              <View style={{ gap: 5 }}>
                {cv.contact.rows.map((r) => (
                  <View key={r.label}>
                    <Text style={s.label}>{r.label}</Text>
                    {r.href ? (
                      <Link src={r.href} style={s.link}>
                        {r.value}
                      </Link>
                    ) : (
                      <Text>{r.value}</Text>
                    )}
                  </View>
                ))}
              </View>
            </Section>

            <Section title={cv.skills.title}>
              <View style={{ gap: 5 }}>
                {cv.skills.groups.map((g) => (
                  <View key={g.label}>
                    <Text style={s.label}>{g.label}</Text>
                    <Text>{g.value}</Text>
                  </View>
                ))}
              </View>
            </Section>

            <Section title={cv.languages.title}>
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {cv.languages.items.map((l) => (
                  <Text key={l} style={s.chip}>
                    {l}
                  </Text>
                ))}
              </View>
            </Section>

            <Section title={cv.side.title}>
              <View style={{ gap: 5 }}>
                {cv.side.items.map((p) => (
                  <Text key={p.lead}>
                    <Link src={p.href} style={[s.link, s.strong]}>
                      {p.lead}
                    </Link>{" "}
                    {p.detail}
                  </Text>
                ))}
              </View>
            </Section>
          </View>

          <View style={s.main}>
            <Section title={cv.overview.title} wrap={false}>
              <Text>{cv.overview.text}</Text>
            </Section>

            <Section title={cv.outcomes.title} wrap={false}>
              {cv.outcomes.items.map((o) => (
                <Bullet key={o.lead}>
                  <Text style={s.strong}>{o.lead}</Text> {o.detail}
                </Bullet>
              ))}
            </Section>

            <Section title={cv.experience.title}>
              {cv.experience.jobs.map((j) => (
                <View key={j.key} style={s.job} wrap={false}>
                  <Text style={s.jobTitleText}>{j.title}</Text>
                  <Text style={s.company}>
                    {j.company}
                    <Text style={s.location}> · {j.location}</Text>
                  </Text>
                  <Text style={s.period}>{j.period}</Text>
                  {j.bullets.map((b) => (
                    <Bullet key={b}>{b}</Bullet>
                  ))}
                </View>
              ))}
            </Section>

            <Section title={cv.education.title} wrap={false}>
              <View style={s.job}>
                <Text style={s.jobTitleText}>{cv.education.degree}</Text>
                <Text style={s.company}>{cv.education.school}</Text>
                <Text style={s.period}>{cv.education.period}</Text>
                {cv.education.bullets.map((b) => (
                  <Bullet key={b}>{b}</Bullet>
                ))}
              </View>
            </Section>
          </View>
        </View>

        {/* No page numbers: react-pdf's render props lose their text once
            the document is relaid out inside the Next build. */}
        <View style={s.footer} fixed>
          <Text>{cv.name}</Text>
          <Text>jp305.dev</Text>
        </View>
      </Page>
    </Document>
  );
}
