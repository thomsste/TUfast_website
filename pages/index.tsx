import type { NextPage } from "next";
import Link from "next/link";
import { browserName } from "react-device-detect";
import { useTranslation } from "next-export-i18n";
import { useEffect, useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.scss";
import Markdown from "../components/Markdown";
import {
  IconLock,
  IconList,
  IconNavigation,
  IconArrowBigUpLine,
  IconShield,
  IconFreeRights,
} from "@tabler/icons-react";
import Team from "../pages/team";
import Jobs from "../pages/jobs";

const Home: NextPage = () => {
  const { t } = useTranslation();

  const browserList: Record<
    string,
    { name: string; url: string; icon: string }
  > = {
    firefox: {
      name: "Firefox",
      url: "https://addons.mozilla.org/de/firefox/addon/tufast/",
      icon: "/browser-icons/firefox.svg",
    },
    chrome: {
      name: "Chrome",
      url: "https://chrome.google.com/webstore/detail/tufast-tu-dresden/aheogihliekaafikeepfjngfegbnimbk",
      icon: "/browser-icons/chrome.svg",
    },
    edge: {
      name: "Edge",
      url: "https://chrome.google.com/webstore/detail/tufast-tu-dresden/aheogihliekaafikeepfjngfegbnimbk",
      icon: "/browser-icons/edge.svg",
    },
  };

  const [browser, setBrowser] = useState(browserList.chrome);

  useEffect(() => {
    if (["edge", "firefox"].includes(browserName.toLowerCase()))
      setBrowser(browserList[browserName.toLowerCase()]);
  }, []);

  const fsr = [
    {
      name: "FSR Elektrotechnik",
      url: "https://fsret.de/",
      logo: "/fsr-icons/fsr_et.png",
    },
    {
      name: "FSR Geowissenschaften",
      url: "https://tu-dresden.de/bu/umwelt/geo/fsr",
      logo: "/fsr-icons/fsr_geo.png",
    },
    {
      name: "FSR Mathe",
      url: "https://myfsr.de/",
      logo: "/fsr-icons/fsr_mathe.png",
    },
    {
      name: "FSR Medizin",
      url: "https://www.medforum-dresden.de/",
      logo: "/fsr-icons/fsr_medi.png",
    },
    {
      name: "FSR Maschinenwesen",
      url: "https://tu-dresden.de/ing/maschinenwesen/fsr",
      logo: "/fsr-icons/fsr_mw.png",
    },
    {
      name: "FSR Psychologie",
      url: "https://tu-dresden.de/mn/psychologie/fsrpsy",
      logo: "/fsr-icons/fsr_psy.png",
    },
    {
      name: "FSR Wirtschaftswissenschaften",
      url: "https://fsrwiwi.de/",
      logo: "/fsr-icons/fsr_wiwi.png",
    },
  ];

  const SupporterLogos = () => (
    <>
      <div className={styles.supporterLogos}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.stifterverband.org/digitalchangemaker-accelerator"
          title="Stifterverband"
          style={{ height: 86 }}
        >
          <img src="/sv.svg" alt="Stifterverband" />
        </a>
      </div>
      <div className={styles.supporterLogos}>
        {fsr.map((val, i) => (
          <a
            target="_blank"
            rel="noreferrer"
            href={val.url}
            title={val.name}
            key={i}
          >
            <img src={val.logo} alt={val.name} />
          </a>
        ))}
      </div>
    </>
  );

  return (
    <Layout>
      <div className={styles.mainWrapper}>
        <div id="home">
          <div className={styles.hero}>
            <div className={styles.heroTextWrapper}>
              <h1 className={styles.heroTitle}>
                {t("index.mainHeadingTUfast")}
              </h1>
              <br />
              <p className={styles.heroSubText}>
                {t("index.subHeading")} <br />
                {t("index.heroShorts")}
              </p>
            </div>
            <a href={browser.url} target={"_blank"} rel="noreferrer">
              <div className={styles.heroButton}>
                <span className={styles.heroButtonText}>
                  {t("index.installPrompt")}{" "}
                  <img
                    src={browser.icon}
                    alt=""
                    loading="lazy"
                    className={styles.browserIcon}
                  />{" "}
                  {browser.name} {t("index.installPromptBehind")}
                </span>
              </div>
            </a>{" "}
            <Markdown
              className={styles.availableFor}
              content={t("index.availableFor", {
                firefox: browserList.firefox.url,
                chrome: browserList.chrome.url,
              })}
            />
          </div>
        </div>
        <div>
          <h2 className={styles.sectionTitle} id="features">
            {t("index.featureSectionTitle")} 🚀
          </h2>
          <div className={styles.features}>
            <div className={styles.featuresCard}>
              <IconLock size="40px" color="#0055ff" />
              <h3 className={styles.featuresCardTitle}>
                {t("index.featureLoginTitle")}
              </h3>
              <span className={styles.featuresCardText}>
                {t("index.featureLoginText")}
              </span>
            </div>{" "}
            <div className={styles.featuresCard}>
              <IconNavigation size="40px" color="#0055ff" />
              <h3 className={styles.featuresCardTitle}>
                {t("index.featureNavTitle")}
              </h3>
              <span className={styles.featuresCardText}>
                {t("index.featureNavText")}
              </span>
            </div>{" "}
            <div className={styles.featuresCard}>
              {" "}
              <IconList size="40px" color="#0055ff" />
              <h3 className={styles.featuresCardTitle}>
                {t("index.featureOpalTitle")}
              </h3>
              <span className={styles.featuresCardText}>
                {t("index.featureOpalText")}
              </span>
            </div>{" "}
            <div className={styles.featuresCard}>
              <IconArrowBigUpLine size="40px" color="#0055ff" />
              <h3 className={styles.featuresCardTitle}>
                {t("index.featureImproveTitle")}
              </h3>
              <span className={styles.featuresCardText}>
                {t("index.featureImproveText")}
              </span>
            </div>
          </div>
        </div>
        <div>
          <h2 className={styles.sectionTitle}>
            {t("index.safetySectionTitle")} 🔒
          </h2>
          <div className={styles.infosgrid}>
            <div className={styles.infoCard}>
              {" "}
              <div className={styles.infoCardIconWrapper}>
                <IconShield size="96px" stroke="1.5" color="#0055ff" />
              </div>
              <div className={styles.infoCardTextWrapper}>
                <h3 className={styles.featuresCardTitle}>
                  {t("index.safetyDataTitle")}
                </h3>
                <span className={styles.featuresCardText}>
                  {t("index.safetyDataText")}
                </span>
              </div>
            </div>{" "}
            <div className={styles.infoCard}>
              {" "}
              <div className={styles.infoCardIconWrapper}>
                <IconFreeRights size="96px" stroke="1.5" color="#0055ff" />
              </div>
              <div className={styles.infoCardTextWrapper}>
                <h3 className={styles.featuresCardTitle}>
                  {t("index.safetyMoneyTitle")}
                </h3>
                <span className={styles.featuresCardText}>
                  {t("index.safetyMoneyText")}
                </span>
                <span className={styles.featuresCardTextHelper}></span>
              </div>{" "}
            </div>
          </div>
        </div>
        <div id="project">
          <h2 className={styles.sectionTitle}>
            {t("index.aboutSectionTitle")} 🤯
          </h2>
          <div style={{ marginTop: 16 }}>
            {(t("index.aboutText") as Array<string>).map((section, i) => (
              <Markdown key={i} content={section} />
            ))}
          </div>
        </div>
        <div className={styles.ctaBanner}>
          <img src="/tufast_logo.svg" alt="Logo" height="64px" />
          <a href={browser.url} target={"_blank"} rel="noreferrer">
            <div className={styles.heroButton}>
              <span className={styles.heroButtonText}>
                {t("index.installPrompt")}{" "}
                <img
                  src={browser.icon}
                  alt=""
                  loading="lazy"
                  className={styles.browserIcon}
                />{" "}
                {browser.name} {t("index.installPromptBehind")}
              </span>
            </div>
          </a>{" "}
          <Markdown
            className={styles.availableFor}
            content={t("index.availableFor", {
              firefox: browserList.firefox.url,
              chrome: browserList.chrome.url,
            })}
          />
        </div>
        <div id="team">
          <h2 className={styles.sectionTitle} id="features">
            {t("index.teamSectionTitle")} ⚙️
          </h2>
          <br />
          <Team />
          <br />
        </div>
        <div id="mitmachen">
          <h2 className={styles.sectionTitle}>
            {t("index.participateSectionTitle")} 🖍️
          </h2>
          <br />
          <Jobs />
        </div>{" "}
      </div>
      <br />
      <br />
      {(t("projectAndVision.content") as Array<string>).map((section, i) => (
        <Markdown
          key={i}
          content={section}
          components={{
            // a little hack to insert the SupporterLogos component by replacing <hr/> (*** in markdown)
            hr: SupporterLogos,
          }}
        />
      ))}
    </Layout>
  );
};

export default Home;
