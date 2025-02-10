import styles from "./profile-layout.module.css";
import ProfileSideBar from "@/components/ProfileSideBar";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={styles["profile-layout"]}>
      <ProfileSideBar />
      <div style={{ flex: 1 }}>{children}</div>
    </section>
  );
}
