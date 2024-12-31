import Hero from "../components/Hero/index";
import GlobalTravel from "../components/GlobalTravel/page";
import GtoNumbers from "../components/GtoNumbers/page";
import MembershipBenefits from "../components/MembershipBenefits/page";
import Coverage from "../components/Coverage/page";
import Services from "../components/Services/page";
import Assistant from "../components/Assistant/page";
import MobilePic from "../components/MobilePic/page";
export default function Page() {
  return (
    <div className="App">
      <Hero />
      <GlobalTravel />
      <GtoNumbers />
      <MembershipBenefits />
      <Coverage />
      <Services />
      <Assistant />
      <MobilePic />
    </div>
  );
}
