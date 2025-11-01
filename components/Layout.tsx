import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Divider, Layout, Space } from "antd";
import { useTranslation, useSelectedLanguage } from "next-export-i18n";
import styles from "../styles/Layout.module.scss";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { SiMatrix } from "react-icons/si";
import { useEffect } from "react";
import ResponsiveMenu, { MenuItem } from "./ResponsiveMenu";

const { Header, Content, Footer } = Layout;

interface LayoutProps {
  siteKey?: string;
  site?: string;
}

const TUfastLayout: NextPage<LayoutProps> = ({ children, site, siteKey }) => {
  const { t } = useTranslation();

  const { lang } = useSelectedLanguage();

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const linksObj = [
    { text: "Github", href: "https://github.com/TUfast-TUD", icon: FaGithub },
    {
      text: "frage@tu-fast.de",
      href: "mailto:frage@tu-fast.de",
      icon: FaEnvelope,
    },
    { text: "Datenschutz", href: "/datenschutz", icon: () => <></> },
  ];

  const links = linksObj.map((link) => (
    <div className={styles.links} key={link.text}>
      <link.icon />
      {["#", "/"].includes(link.href.charAt(0)) ? (
        <Link href={link.href}>{link.text}</Link>
      ) : (
        <a href={link.href} target={"_blank"} rel="noreferrer">
          {link.text}
        </a>
      )}
    </div>
  ));

  const menuItems: MenuItem[] = [
    {
      key: "home",
      href: "/#home",
      text: "Home",
    },
    {
      key: "Funktionen",
      href: "/#features",
      text: t("nav.features"),
    },
    {
      key: "project",
      href: "/#project",
      text: t("nav.projectAndVision"),
    },
    // {
    //     key: 'project',
    //     href: '/project',
    //     text: t('nav.projectAndVision')
    // },
    {
      key: "team",
      href: "/#team",
      text: "Team",
    },
    {
      key: "jobs",
      href: "/#mitmachen",
      text: t("nav.jobs"),
    },
    // {
    //     key: 'blog',
    //     href: '/blog',
    //     text: 'Blog',
    // },
  ];

  return (
    <>
      <Head>
        <title>
          {site ? `${site} - ` : ""}TUfast - Das Produktivitäts-Tool für TU
          Dresden Studierende 🚀
        </title>
        <meta
          name="description"
          content="TUfast ist ein Browser-Addon, dass den Alltag von Studierenden an der TU Dresden erleichtert. Es kann unter anderem automaisch Logins vornehmen und Benachrichtigungen für neue E-Mail geben."
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="TUfast" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <Layout className={styles.layout}>
        <div className={styles.inner}>
          <Header className={styles.navbar}>
            <ResponsiveMenu menuItems={menuItems} siteKey={siteKey} />
          </Header>

          <Content className={styles.mainContainer}>{children}</Content>

          <Footer className={styles.footer}>
            <Space
              split={<Divider type="vertical" />}
              style={{ flexWrap: "wrap", justifyContent: "center" }}
            >
              {links}
            </Space>
          </Footer>
        </div>
      </Layout>
    </>
  );
};

export default TUfastLayout;
