import Hero from "../components/Hero/page";
import GlobalTravel from "../components/GlobalTravel/page";
import GtoNumbers from "../components/GtoNumbers/page";
import MembershipBenefits from "../components/MembershipBenefits/page";
export default function Page() {
  return (
    <div className="App">
      <Hero />
      <GlobalTravel />
      <GtoNumbers />
      <MembershipBenefits />
    </div>
  );
}
