import Hero from "../components/Hero/index";
import GlobalTravel from "../components/GlobalTravel/index";
import GtoNumbers from "../components/GtoNumbers/index";
import MembershipBenefits from "../components/MembershipBenefits/index";
import Coverage from "../components/Coverage";
import Services from "../components/Services/index";
import Assistant from "../components/Assistant";
import MobilePic from "../components/MobilePic/index";

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
