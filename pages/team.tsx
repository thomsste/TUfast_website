import { Card, Descriptions, Space } from "antd";
import { useTranslation } from "next-export-i18n";
import Link from "next/link";
import { IconLink, IconBrandGithub } from "@tabler/icons-react";
import styles from "../styles/Team.module.scss";

type MemberLink = {
  type: "github" | "other";
  title: string;
  url: string;
};

type Member = {
  name: string;
  status: string;
  image?: string;
  role: string;
  studies: string;
  occupancy_in_tufast: string;
  links: MemberLink[];
};

const LinkIcon: React.FC<{ icon: MemberLink["type"] }> = ({ icon }) => {
  switch (icon) {
    case "github":
      return <IconBrandGithub size={25} />;
    default:
      return <IconLink size={25} />;
  }
};

const Team = () => {
  const { t } = useTranslation();

  const padArray = (arr: JSX.Element[]) =>
    Array.from(
      { ...arr, length: Math.max(arr.length, 4) },
      (v) => v ?? <div />
    );

  // added lazy loading approach, added fallback image, since we get images from different kinds of sources
  const memberToCard = (member: Member) => {
    return (
      <Card
        key={member.name}
        className={styles.card}
        cover={
          member.image ? (
            <img
              src="/member-fallback.png"
              alt={member.name}
              className={styles.cardImg}
              ref={(img) => {
                if (img && member.image) {
                  const tempImg = new Image();
                  const timeoutId = setTimeout(() => {
                    tempImg.src = ""; // Stop loading
                  }, 3000);

                  tempImg.onload = () => {
                    clearTimeout(timeoutId);
                    if (img) {
                      img.src = member.image;
                    }
                  };

                  tempImg.onerror = () => {
                    clearTimeout(timeoutId);
                    // Keep fallback image
                  };

                  tempImg.src = member.image;
                }
              }}
            />
          ) : (
            <img
              src="/member-fallback.png"
              alt={member.name}
              className={styles.cardImg}
            />
          )
        }
        actions={member.links.map((link, i) => (
          <Link key={i} href={link.url} passHref>
            <a style={{ color: "#000b" }} title={link.title} target="_blank">
              <div className={styles.teamCardAction}>
                <LinkIcon icon={link.type} />
                {link.title}
              </div>
            </a>
          </Link>
        ))}
      >
        <Card.Meta
          title={
            <div
              style={{
                fontWeight: "bold",
                textAlign: "center",
                width: "100%",
                fontSize: 20,
              }}
            >
              {member.name}
              <span
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  width: "100%",
                  fontSize: 16,
                }}
                className={styles.teamCardMemberStatus}
              >
                {member.status}
              </span>
            </div>
          }
          description={
            <div>
              <span
                className={styles.teamCardRole}
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  width: "100%",
                  fontSize: 18,
                }}
              >
                {member.role}
              </span>
              <br />

              <span>{member.occupancy_in_tufast}</span>
              <br />
              <br />
              <span>{member.studies}</span>
            </div>
          }
        />
      </Card>
    );
  };

  return (
    <div>
      <Space
        direction="horizontal"
        align="center"
        wrap
        className={styles.members}
      >
        {padArray(t("team.members").map(memberToCard))}
      </Space>
    </div>
  );
};

export default Team;
