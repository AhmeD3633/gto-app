import ProfileSideBar from "@/components/ProfileSideBar";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section style={{ display: "flex" }}>
      <ProfileSideBar />
      <div style={{ flex: 1 }}>{children}</div>
    </section>
  );
}
