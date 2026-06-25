import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

const SECTIONS = [
  {
    title: "Dev Tools",
    href: "/docs/dev/terminal",
    description: "Terminal, Express, Flutter, React Native, and more.",
  },
  {
    title: "VPS",
    href: "/docs/vps/setup",
    description: "Server setup, deployments, GitHub Actions, cron jobs.",
  },
  {
    title: "Software Essentials",
    href: "/docs/software",
    description: "Tools and apps worth keeping installed.",
  },
  {
    title: "Android ROMs",
    href: "/docs/android-roms",
    description: "Flashing and managing custom ROMs.",
  },
  {
    title: "Arduino",
    href: "/docs/arduino",
    description: "Hardware notes and quick references.",
  },
  {
    title: "YouTube",
    href: "/docs/youtube-dl",
    description: "Downloading and managing video.",
  },
];

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="Personal developer notes and cheatsheets">
      <header className={styles.heroBanner}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs">
              Browse Docs
            </Link>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            {SECTIONS.map(({ title, href, description }) => (
              <Link key={href} to={href} className={styles.card}>
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
