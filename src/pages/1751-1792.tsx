import { Testimonial } from "../shared";
import React from "react";
const imgGroup = "/assets/1751-1792-imgGroup.svg";
const imgGroup1 = "/assets/1751-1792-imgGroup1.svg";
const imgGroup2 = "/assets/1751-1792-imgGroup2.svg";
const imgGroup3 = "/assets/1751-1792-imgGroup3.svg";
const imgNOkkL8Tif = "/assets/1751-1792-imgNOkkL8Tif.svg";
const imgGroup4 = "/assets/1751-1792-imgGroup4.svg";
const imgGroup5 = "/assets/1751-1792-imgGroup5.svg";
const imgGroup6 = "/assets/1751-1792-imgGroup6.svg";
const imgGroup7 = "/assets/1751-1792-imgGroup7.svg";
const imgGroup8 = "/assets/1751-1792-imgGroup8.svg";
const imgGroup9 = "/assets/1751-1792-imgGroup9.svg";
const imgGroup10 = "/assets/1751-1792-imgGroup10.svg";
const imgGroup11 = "/assets/1751-1792-imgGroup11.svg";
const imgNOkkL8Tif1 = "/assets/1751-1792-imgNOkkL8Tif1.svg";
const imgGroup12 = "/assets/1751-1792-imgGroup12.svg";
const imgMark = "/assets/1751-1792-imgMark.svg";
const imgImgHomeSupplyPath = "/assets/1751-1792-imgImgHomeSupplyPath.png";
const imgImgHomeSupplyPath1 = "/assets/1751-1792-imgImgHomeSupplyPath1.png";
const imgImgHomeLivingRoom = "/assets/1751-1792-imgImgHomeLivingRoom.png";
const imgImgTestimonial01Logo = "/assets/1751-1792-imgImgTestimonial01Logo.png";
const imgImgTestimonial01Avatar = "/assets/1751-1792-imgImgTestimonial01Avatar.png";
const imgImgTestimonial02Logo = "/assets/1751-1792-imgImgTestimonial02Logo.png";
const imgImgTestimonial02Avatar = "/assets/1751-1792-imgImgTestimonial02Avatar.png";
const imgImgTestimonial03Logo = "/assets/1751-1792-imgImgTestimonial03Logo.png";
const imgImgTestimonial03Avatar = "/assets/1751-1792-imgImgTestimonial03Avatar.png";
const imgDots = "/assets/1751-1792-imgDots.svg";
const imgDots1 = "/assets/1751-1792-imgDots1.svg";
const imgDots2 = "/assets/1751-1792-imgDots2.svg";
const imgChime = "/assets/1751-1792-imgChime.svg";
const imgRealtor = "/assets/1751-1792-imgRealtor.svg";
const imgBinance = "/assets/1751-1792-imgBinance.svg";
const imgUpside = "/assets/1751-1792-imgUpside.svg";
const imgCapOne = "/assets/1751-1792-imgCapOne.svg";
const imgChime1 = "/assets/1751-1792-imgChime1.svg";
const imgRealtor1 = "/assets/1751-1792-imgRealtor1.svg";
const imgBinance1 = "/assets/1751-1792-imgBinance1.svg";
const imgUpside1 = "/assets/1751-1792-imgUpside1.svg";
const imgCapOne1 = "/assets/1751-1792-imgCapOne1.svg";
const imgImage1HeroFullBleedUnderNav = "/assets/1751-1792-imgImage1HeroFullBleedUnderNav.png";
const imgHomeProductFeedtv = "/assets/1751-1792-imgHomeProductFeedtv.png";
const imgHomeProductFeedtvStream = "/assets/1751-1792-imgHomeProductFeedtvStream.png";
const imgImgHomeClosingCtaBg = "/assets/1751-1792-imgImgHomeClosingCtaBg.png";
const imgGlyph = "/assets/1751-1792-imgGlyph.svg";
const imgFeedtvLogoOfficial = "/assets/1751-1792-imgFeedtvLogoOfficial.svg";
const imgMark1 = "/assets/1751-1792-imgMark1.svg";
const imgWordmark = "/assets/1751-1792-imgWordmark.svg";
const imgSearchIcon = "/assets/1751-1792-imgSearchIcon.svg";

type NavButtonBookAMeetingProps = {
  className?: string;
  state?: "Default" | "Hover";
};

function NavButtonBookAMeeting({ className, state = "Default" }: NavButtonBookAMeetingProps) {
  const isHover = state === "Hover";
  return (
    <a className={className || `content-stretch flex h-[44px] items-center justify-center relative rounded-[999px] w-[158px] ${isHover ? "bg-[#008682]" : "bg-[#00b5ad]"}`} id={isHover ? "node-1668_3632" : "node-1668_3630"}>
      <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[15px] text-left text-white whitespace-nowrap" id={isHover ? "node-1668_3633" : "node-1668_3631"}>
        Book a Meeting
      </p>
    </a>
  );
}

type NavLinkContactProps = {
  className?: string;
  state?: "Default" | "Hover";
};

function NavLinkContact({ className, state = "Default" }: NavLinkContactProps) {
  const isHover = state === "Hover";
  return (
    <a className={className || "bg-[rgba(255,255,255,0)] block h-[22px] relative w-[56px]"} id={isHover ? "node-1668_3627" : "node-1668_3625"}>
      <div className={`-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-["Lato:Regular"] h-[22px] justify-center leading-[0] left-0 not-italic text-[16px] text-left top-[11px] w-[56px] ${isHover ? "text-[#00b5ad]" : "text-[#4c5864]"}`} id={isHover ? "node-1668_3628" : "node-1668_3626"}>
        <p className="leading-[22px]">Contact</p>
      </div>
    </a>
  );
}

type NavLinkOurTeamProps = {
  className?: string;
  state?: "Default" | "Hover";
};

function NavLinkOurTeam({ className, state = "Default" }: NavLinkOurTeamProps) {
  const isHover = state === "Hover";
  return (
    <a className={className || "bg-[rgba(255,255,255,0)] block h-[22px] relative w-[68px]"} id={isHover ? "node-1668_3622" : "node-1668_3620"}>
      <div className={`-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-["Lato:Regular"] h-[22px] justify-center leading-[0] left-0 not-italic text-[16px] text-left top-[11px] w-[68px] ${isHover ? "text-[#00b5ad]" : "text-[#4c5864]"}`} id={isHover ? "node-1668_3623" : "node-1668_3621"}>
        <p className="leading-[22px]">Our Team</p>
      </div>
    </a>
  );
}

type RevealPartnersProps = {
  className?: string;
  step?: boolean;
};

function RevealPartners({ className, step = true }: RevealPartnersProps) {
  const isStep = step;
  return (
    <div className={className || "content-stretch flex flex-col gap-[63px] h-[638px] items-start pb-[60px] pt-[100px] px-[120px] relative w-[1440px]"} id={isStep ? "node-1744_2579" : "node-1744_1061"} style={{ backgroundImage: "linear-gradient(156.1039965571611deg, rgb(0, 181, 173) 14.644%, rgb(27, 155, 194) 85.356%)" }}>
      <div className="bg-white border border-[#e5e7e9] border-solid content-stretch flex flex-col gap-[26px] items-center px-[48px] py-[40px] relative rounded-[24px] shrink-0 w-full" id={isStep ? "node-1744_2443" : "node-1744_925"} data-name="Band · CTV partners">
        <p className="[word-break:break-word] bg-clip-text font-['Lato:Bold'] leading-[1.2] not-italic relative shrink-0 text-[23px] text-[transparent] text-center tracking-[-0.46px] whitespace-nowrap" id={isStep ? "node-1744_2444" : "node-1744_926"} style={{ backgroundImage: "linear-gradient(170.90972307917767deg, rgb(0, 181, 173) 14.644%, rgb(27, 155, 194) 85.356%)" }}>
          Our CTV Partners
        </p>
        <div className="content-stretch flex h-[56px] items-center relative shrink-0 w-full" id={isStep ? "node-1744_2445" : "node-1744_927"} data-name="Row · CTV partners">
          <div className={`content-stretch flex flex-[1_0_0] h-full items-center justify-center min-w-px relative ${isStep ? "" : ""}`} id={isStep ? "node-1744_2446" : "node-1744_928"} data-name="Cell · CTV 01">
            <div className={`grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 ${isStep ? "" : ""}`} id={isStep ? "node-1744_2447" : "node-1744_929"} data-name="bR2ynq.tif">
              <div className="col-1 h-[20.52px] ml-0 mt-0 relative row-1 w-[134.748px]" id={isStep ? "node-1744_2448" : "node-1744_930"} data-name="Group">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
              </div>
            </div>
          </div>
          <div className={`content-stretch flex flex-[1_0_0] h-full items-center justify-center min-w-px relative ${isStep ? "" : ""}`} id={isStep ? "node-1744_2458" : "node-1744_940"} data-name="Cell · CTV 02">
            <div className={`grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 ${isStep ? "" : ""}`} id={isStep ? "node-1744_2459" : "node-1744_941"} data-name="sAvvK2.tif">
              <div className="col-1 h-[36px] ml-0 mt-0 relative row-1 w-[74.588px]" id={isStep ? "node-1744_2460" : "node-1744_942"} data-name="Group">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
              </div>
            </div>
          </div>
          <div className={`content-stretch flex flex-[1_0_0] h-full items-center justify-center min-w-px relative ${isStep ? "" : ""}`} id={isStep ? "node-1744_2465" : "node-1744_947"} data-name="Cell · CTV 03">
            <div className={`grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 ${isStep ? "" : ""}`} id={isStep ? "node-1744_2466" : "node-1744_948"} data-name="Group">
              <div className="col-1 h-[23.996px] ml-0 mt-0 relative row-1 w-[65.885px]" id={isStep ? "node-1744_2467" : "node-1744_949"} data-name="Group">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup2} />
              </div>
              <div className="col-1 h-[23.769px] ml-[70.77px] mt-0 relative row-1 w-[35.681px]" id={isStep ? "node-1744_2472" : "node-1744_954"} data-name="Group">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup3} />
              </div>
            </div>
          </div>
          <div className={`content-stretch flex h-[56.102px] items-center justify-center relative shrink-0 w-[184px] ${isStep ? "" : ""}`} id={isStep ? "node-1744_2491" : "node-1744_973"} data-name="Cell · CTV 06">
            <div className="h-[44.208px] relative shrink-0 w-[74.312px]" id={isStep ? "node-1744_2492" : "node-1744_974"} data-name="nOkkL8.tif">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={isStep ? imgNOkkL8Tif1 : imgNOkkL8Tif} />
            </div>
          </div>
          <div className={`content-stretch flex flex-[1_0_0] h-full items-center justify-center min-w-px relative ${isStep ? "" : ""}`} id={isStep ? "node-1744_2484" : "node-1744_966"} data-name="Cell · CTV 05">
            <div className={`grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 ${isStep ? "" : ""}`} id={isStep ? "node-1744_2485" : "node-1744_967"} data-name="cJhxwX.tif">
              <div className="col-1 h-[31.826px] ml-0 mt-0 relative row-1 w-[102.353px]" id={isStep ? "node-1744_2486" : "node-1744_968"} data-name="Group">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup4} />
              </div>
            </div>
          </div>
          <div className={`content-stretch flex flex-[1_0_0] h-full items-center justify-center min-w-px relative ${isStep ? "" : ""}`} id={isStep ? "node-1744_2475" : "node-1744_957"} data-name="Cell · CTV 04">
            <div className="h-[29.7px] relative shrink-0 w-[102.693px]" id={isStep ? "node-1744_2476" : "node-1744_958"} data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={isStep ? imgGroup12 : imgGroup5} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border border-[#e5e7e9] border-solid content-stretch flex flex-col gap-[26px] items-center px-[48px] py-[40px] relative rounded-[24px] shrink-0 w-full" id={isStep ? "node-1744_2494" : "node-1744_976"} data-name="Band · MMPs">
        <p className="[word-break:break-word] bg-clip-text font-['Lato:Bold'] leading-[1.2] not-italic relative shrink-0 text-[23px] text-[transparent] text-center tracking-[-0.46px] whitespace-nowrap" id={isStep ? "node-1744_2495" : "node-1744_977"} style={{ backgroundImage: "linear-gradient(176.38340721431967deg, rgb(0, 181, 173) 14.644%, rgb(27, 155, 194) 85.356%)" }}>
          Expert CTV onboarding with all major MMPs.
        </p>
        <div className="content-stretch flex h-[56px] items-center relative shrink-0 w-full" id={isStep ? "node-1744_2496" : "node-1744_978"} data-name="Row · MMPs">
          <div className={`content-stretch flex flex-[1_0_0] h-full items-center justify-center min-w-px relative ${isStep ? "" : ""}`} id={isStep ? "node-1744_2497" : "node-1744_979"} data-name="Cell · MMP 01">
            <div className={`grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 ${isStep ? "" : ""}`} id={isStep ? "node-1744_2498" : "node-1744_980"} data-name="8Ci7NO.tif">
              <div className="col-1 h-[42.493px] ml-0 mt-0 relative row-1 w-[144.561px]" id={isStep ? "node-1744_2499" : "node-1744_981"} data-name="Group">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup6} />
              </div>
            </div>
          </div>
          <div className={`content-stretch flex flex-[1_0_0] h-full items-center justify-center min-w-px relative ${isStep ? "" : ""}`} id={isStep ? "node-1744_2516" : "node-1744_998"} data-name="Cell · MMP 02">
            <div className={`grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 ${isStep ? "" : ""}`} id={isStep ? "node-1744_2517" : "node-1744_999"} data-name="SWlTvs">
              <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" id={isStep ? "node-1744_2518" : "node-1744_1000"} data-name="Group">
                <div className="col-1 h-[31.573px] ml-[38.14px] mt-[0.08px] relative row-1 w-[123.001px]" id={isStep ? "node-1744_2519" : "node-1744_1001"} data-name="Group">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup7} />
                </div>
                <div className="col-1 h-[31.528px] ml-0 mt-0 relative row-1 w-[31.154px]" id={isStep ? "node-1744_2531" : "node-1744_1013"} data-name="Group">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup8} />
                </div>
              </div>
            </div>
          </div>
          <div className={`content-stretch flex flex-[1_0_0] h-full items-center justify-center min-w-px relative ${isStep ? "" : ""}`} id={isStep ? "node-1744_2538" : "node-1744_1020"} data-name="Cell · MMP 03">
            <div className={`grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 ${isStep ? "" : ""}`} id={isStep ? "node-1744_2539" : "node-1744_1021"} data-name="HDGdjl.tif">
              <div className="col-1 h-[22px] ml-0 mt-0 relative row-1 w-[180.427px]" id={isStep ? "node-1744_2540" : "node-1744_1022"} data-name="Group">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup9} />
              </div>
            </div>
          </div>
          <div className={`content-stretch flex flex-[1_0_0] h-full items-center justify-center min-w-px relative ${isStep ? "" : ""}`} id={isStep ? "node-1744_2551" : "node-1744_1033"} data-name="Cell · MMP 04">
            <div className={`grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 ${isStep ? "" : ""}`} id={isStep ? "node-1744_2552" : "node-1744_1034"} data-name="P1haSx.tif">
              <div className="col-1 h-[28.972px] ml-0 mt-0 relative row-1 w-[127.087px]" id={isStep ? "node-1744_2553" : "node-1744_1035"} data-name="Group">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup10} />
              </div>
            </div>
          </div>
          <div className={`content-stretch flex flex-[1_0_0] h-full items-center justify-center min-w-px relative ${isStep ? "" : ""}`} id={isStep ? "node-1744_2563" : "node-1744_1045"} data-name="Cell · MMP 05">
            <div className={`grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 ${isStep ? "" : ""}`} id={isStep ? "node-1744_2564" : "node-1744_1046"} data-name="8SH2r3.tif">
              <div className="col-1 h-[24.999px] ml-0 mt-0 relative row-1 w-[144.257px]" id={isStep ? "node-1744_2565" : "node-1744_1047"} data-name="Group">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup11} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type RevealChallengeVsFeedTvProps = {
  className?: string;
  state?: "End" | "Start";
};

function RevealChallengeVsFeedTv({ className, state = "End" }: RevealChallengeVsFeedTvProps) {
  const isStart = state === "Start";
  return (
    <div className={className || "h-[759px] relative w-[1344px]"} id={isStart ? "node-1731_1022" : "node-1731_1021"}>
      <p className={`[word-break:break-word] absolute font-["Lato:Bold"] leading-[1.27] left-[calc(50%-366px)] not-italic text-[#1d262f] text-[40px] top-[150px] tracking-[-0.96px] w-[733px] ${isStart ? "" : ""}`} id={isStart ? "node-1731_964" : "node-1731_906"}>
        What’s Broken, and What We Do About It
      </p>
      <div className="absolute bg-white border border-[#e5e7e9] border-solid content-stretch flex flex-col items-start left-[120px] overflow-clip right-[120px] rounded-[24px] top-[232px]" id={isStart ? "node-1731_965" : "node-1731_907"} data-name="Ledger · today vs FeedTV">
        <div className="absolute bg-[#f2fbfb] bottom-[-1px] right-[-1px] top-[-1px] w-[504px]" id={isStart ? "node-1731_966" : "node-1731_908"} data-name="Column tint · FeedTV" />
        <div className="content-stretch flex items-start relative shrink-0 w-[1200px]" id={isStart ? "node-1731_967" : "node-1731_909"} data-name="Header">
          <div className="content-stretch flex h-[44px] items-start pl-[32px] pr-[24px] py-[22px] relative shrink-0 w-[216px]" id={isStart ? "node-1731_968" : "node-1731_910"} data-name="Frame" />
          <div className="content-stretch flex items-start pl-[26px] pr-[24px] py-[22px] relative shrink-0 w-[480px]" id={isStart ? "node-1731_969" : "node-1731_911"} data-name="Frame">
            <p className={`[word-break:break-word] flex-[1_0_0] font-["Lato:Bold"] leading-[normal] min-w-px not-italic relative text-[#a2a4a4] text-[10.5px] tracking-[1.68px] ${isStart ? "" : ""}`} id={isStart ? "node-1731_970" : "node-1731_912"}>
              THE CHANNEL TODAY
            </p>
          </div>
          <div className="content-stretch flex items-start pl-[50px] pr-[32px] py-[22px] relative shrink-0 w-[504px]" id={isStart ? "node-1731_971" : "node-1731_913"} data-name="Frame">
            <p className={`[word-break:break-word] flex-[1_0_0] font-["Lato:Bold"] leading-[normal] min-w-px not-italic relative text-[#008682] text-[10.5px] tracking-[1.68px] ${isStart ? "" : ""}`} id={isStart ? "node-1731_972" : "node-1731_914"}>
              WITH FEEDTV
            </p>
          </div>
        </div>
        <div className="bg-[#e5e7e9] h-px relative shrink-0 w-full" id={isStart ? "node-1731_973" : "node-1731_915"} data-name="Divider" />
        <div className="content-stretch flex items-start relative shrink-0 w-[1200px]" id={isStart ? "node-1731_974" : "node-1731_916"} data-name="Row · Transparency">
          <div className="content-stretch flex items-start pl-[32px] pr-[24px] py-[26px] relative shrink-0 w-[216px]" id={isStart ? "node-1731_975" : "node-1731_917"} data-name="Frame">
            <p className={`[word-break:break-word] flex-[1_0_0] font-["Lato:Bold"] leading-[1.5] min-w-px not-italic relative text-[#1d262f] text-[15px] ${isStart ? "" : ""}`} id={isStart ? "node-1731_976" : "node-1731_918"}>
              Transparency
            </p>
          </div>
          <div className="content-stretch flex gap-[12px] items-start pr-[24px] py-[26px] relative shrink-0 w-[480px]" id={isStart ? "node-1731_977" : "node-1731_919"} data-name="Frame">
            <div className="h-[26px] relative shrink-0 w-[14px]" id={isStart ? "node-1731_978" : "node-1731_920"} data-name="mark">
              <div className="absolute bg-[#b2b7bd] h-[2px] left-px rounded-[1px] top-[12px] w-[12px]" id={isStart ? "node-1731_979" : "node-1731_921"} data-name="Rectangle" />
            </div>
            <p className={`[word-break:break-word] flex-[1_0_0] font-["Lato:Light"] leading-[1.6] min-w-px not-italic relative text-[#4c5864] text-[16.5px] ${isStart ? "" : ""}`} id={isStart ? "node-1731_980" : "node-1731_922"}>
              The open CTV market is a black box with high fraud rates.
            </p>
          </div>
          <div className="content-stretch flex gap-[12px] items-start pl-[24px] pr-[32px] py-[26px] relative shrink-0 w-[504px]" id={isStart ? "node-1731_981" : "node-1731_923"} data-name="Frame">
            <div className="h-[26px] relative shrink-0 w-[14px]" id={isStart ? "node-1731_982" : "node-1731_924"} data-name="mark">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMark} />
            </div>
            <p className={`[word-break:break-word] flex-[1_0_0] font-["Lato:Regular"] leading-[1.6] min-w-px not-italic relative text-[#1d262f] text-[16.5px] ${isStart ? "" : ""}`} id={isStart ? "node-1731_984" : "node-1731_926"}>
              Direct OEM placements you can see and control.
            </p>
          </div>
        </div>
        <div className="bg-[#e5e7e9] h-px relative shrink-0 w-full" id={isStart ? "node-1731_985" : "node-1731_927"} data-name="Divider" />
        <div className="content-stretch flex items-start relative shrink-0 w-[1200px]" id={isStart ? "node-1731_986" : "node-1731_928"} data-name="Row · Measurement">
          <div className="content-stretch flex items-start pl-[32px] pr-[24px] py-[26px] relative shrink-0 w-[216px]" id={isStart ? "node-1731_987" : "node-1731_929"} data-name="Frame">
            <p className={`[word-break:break-word] flex-[1_0_0] font-["Lato:Bold"] leading-[1.5] min-w-px not-italic relative text-[#1d262f] text-[15px] ${isStart ? "" : ""}`} id={isStart ? "node-1731_988" : "node-1731_930"}>
              Measurement
            </p>
          </div>
          <div className="content-stretch flex gap-[12px] items-start pr-[24px] py-[26px] relative shrink-0 w-[480px]" id={isStart ? "node-1731_989" : "node-1731_931"} data-name="Frame">
            <div className="h-[26px] relative shrink-0 w-[14px]" id={isStart ? "node-1731_990" : "node-1731_932"} data-name="mark">
              <div className="absolute bg-[#b2b7bd] h-[2px] left-px rounded-[1px] top-[12px] w-[12px]" id={isStart ? "node-1731_991" : "node-1731_933"} data-name="Rectangle" />
            </div>
            <p className={`[word-break:break-word] flex-[1_0_0] font-["Lato:Light"] leading-[1.6] min-w-px not-italic relative text-[#4c5864] text-[16.5px] ${isStart ? "" : ""}`} id={isStart ? "node-1731_992" : "node-1731_934"}>
              No shared standard for CTV reporting.
            </p>
          </div>
          <div className="content-stretch flex gap-[12px] items-start pl-[24px] pr-[32px] py-[26px] relative shrink-0 w-[504px]" id={isStart ? "node-1731_993" : "node-1731_935"} data-name="Frame">
            <div className="h-[26px] relative shrink-0 w-[14px]" id={isStart ? "node-1731_994" : "node-1731_936"} data-name="mark">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMark} />
            </div>
            <p className={`[word-break:break-word] flex-[1_0_0] font-["Lato:Regular"] leading-[1.6] min-w-px not-italic relative text-[#1d262f] text-[16.5px] ${isStart ? "" : ""}`} id={isStart ? "node-1731_996" : "node-1731_938"}>
              Unified reporting and measurement, built from OEM-level data.
            </p>
          </div>
        </div>
        <div className="bg-[#e5e7e9] h-px relative shrink-0 w-full" id={isStart ? "node-1731_997" : "node-1731_939"} data-name="Divider" />
        <div className="content-stretch flex items-start relative shrink-0 w-[1200px]" id={isStart ? "node-1731_998" : "node-1731_940"} data-name="Row · Attribution">
          <div className="content-stretch flex items-start pl-[32px] pr-[24px] py-[26px] relative shrink-0 w-[216px]" id={isStart ? "node-1731_999" : "node-1731_941"} data-name="Frame">
            <p className={`[word-break:break-word] flex-[1_0_0] font-["Lato:Bold"] leading-[1.5] min-w-px not-italic relative text-[#1d262f] text-[15px] ${isStart ? "" : ""}`} id={isStart ? "node-1731_1000" : "node-1731_942"}>
              Attribution
            </p>
          </div>
          <div className="content-stretch flex gap-[12px] items-start pr-[24px] py-[26px] relative shrink-0 w-[480px]" id={isStart ? "node-1731_1001" : "node-1731_943"} data-name="Frame">
            <div className="h-[26px] relative shrink-0 w-[14px]" id={isStart ? "node-1731_1002" : "node-1731_944"} data-name="mark">
              <div className="absolute bg-[#b2b7bd] h-[2px] left-px rounded-[1px] top-[12px] w-[12px]" id={isStart ? "node-1731_1003" : "node-1731_945"} data-name="Rectangle" />
            </div>
            <p className={`[word-break:break-word] flex-[1_0_0] font-["Lato:Light"] leading-[1.6] min-w-px not-italic relative text-[#4c5864] text-[16.5px] ${isStart ? "" : ""}`} id={isStart ? "node-1731_1004" : "node-1731_946"}>
              Last-touch undercredits CTV — search and social absorb the credit.
            </p>
          </div>
          <div className="content-stretch flex gap-[12px] items-start pl-[24px] pr-[32px] py-[26px] relative shrink-0 w-[504px]" id={isStart ? "node-1731_1005" : "node-1731_947"} data-name="Frame">
            <div className="h-[26px] relative shrink-0 w-[14px]" id={isStart ? "node-1731_1006" : "node-1731_948"} data-name="mark">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMark} />
            </div>
            <p className={`[word-break:break-word] flex-[1_0_0] font-["Lato:Regular"] leading-[1.6] min-w-px not-italic relative text-[#1d262f] text-[16.5px] ${isStart ? "" : ""}`} id={isStart ? "node-1731_1008" : "node-1731_950"}>
              Attribution expertise; installs, in-app events and KPIs that matter, tied across your media mix.
            </p>
          </div>
        </div>
        <div className="bg-[#e5e7e9] h-px relative shrink-0 w-full" id={isStart ? "node-1731_1009" : "node-1731_951"} data-name="Divider" />
        <div className="content-stretch flex items-start relative shrink-0 w-[1200px]" id={isStart ? "node-1731_1010" : "node-1731_952"} data-name="Row · Intent">
          <div className="content-stretch flex items-start pl-[32px] pr-[24px] py-[26px] relative shrink-0 w-[216px]" id={isStart ? "node-1731_1011" : "node-1731_953"} data-name="Frame">
            <p className={`[word-break:break-word] flex-[1_0_0] font-["Lato:Bold"] leading-[1.5] min-w-px not-italic relative text-[#1d262f] text-[15px] ${isStart ? "" : ""}`} id={isStart ? "node-1731_1012" : "node-1731_954"}>
              Intent
            </p>
          </div>
          <div className="content-stretch flex gap-[12px] items-start pr-[24px] py-[26px] relative shrink-0 w-[480px]" id={isStart ? "node-1731_1013" : "node-1731_955"} data-name="Frame">
            <div className="h-[26px] relative shrink-0 w-[14px]" id={isStart ? "node-1731_1014" : "node-1731_956"} data-name="mark">
              <div className="absolute bg-[#b2b7bd] h-[2px] left-px rounded-[1px] top-[12px] w-[12px]" id={isStart ? "node-1731_1015" : "node-1731_957"} data-name="Rectangle" />
            </div>
            <p className={`[word-break:break-word] flex-[1_0_0] font-["Lato:Light"] leading-[1.6] min-w-px not-italic relative text-[#4c5864] text-[16.5px] ${isStart ? "" : ""}`} id={isStart ? "node-1731_1016" : "node-1731_958"}>
              CTV is bought for awareness, not outcomes.
            </p>
          </div>
          <div className="content-stretch flex gap-[12px] items-start pl-[24px] pr-[32px] py-[26px] relative shrink-0 w-[504px]" id={isStart ? "node-1731_1017" : "node-1731_959"} data-name="Frame">
            <div className="h-[26px] relative shrink-0 w-[14px]" id={isStart ? "node-1731_1018" : "node-1731_960"} data-name="mark">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMark} />
            </div>
            <p className={`[word-break:break-word] flex-[1_0_0] font-["Lato:Regular"] leading-[1.6] min-w-px not-italic relative text-[#1d262f] text-[16.5px] ${isStart ? "" : ""}`} id={isStart ? "node-1731_1020" : "node-1731_962"}>
              Bought for results — optimized to your KPIs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

type RevealSupplyPathOptimizationProps = {
  className?: string;
  state?: "End" | "Start";
};

function RevealSupplyPathOptimization({ className, state = "End" }: RevealSupplyPathOptimizationProps) {
  const isStart = state === "Start";
  return (
    <div className={className || "bg-[#fafbfb] h-[601px] relative w-[1344px]"} id={isStart ? "node-1731_894" : "node-1731_893"}>
      <div className="absolute content-stretch flex h-[392px] items-center left-[116px] overflow-clip right-[737px] top-[120.43px]" id={isStart ? "node-1731_886" : "node-1731_878"} data-name="Row">
        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px not-italic overflow-clip relative" id={isStart ? "node-1731_887" : "node-1731_879"} data-name="Copy">
          <p className={`font-["Lato:Bold"] leading-[1.27] relative shrink-0 text-[#1d262f] text-[40px] tracking-[-0.96px] w-full ${isStart ? "" : ""}`} id={isStart ? "node-1731_888" : "node-1731_880"}>
            True Efficiency, On the Screen That Gets Seen First
          </p>
          <p className={`font-["Lato:Light"] leading-[0] relative shrink-0 text-[#4c5864] text-[17px] w-full ${isStart ? "" : ""}`} id={isStart ? "node-1731_889" : "node-1731_881"}>
            <span className="leading-[1.72]">{`Every CTV impression clears in priority order — and where you buy in that order decides both price and quality. FeedTV goes direct with the OEMs themselves — Samsung, LG, Vizio, TCL, and more — `}</span>
            <span className="font-['Lato:Medium_Italic'] italic leading-[1.72]">delivering true supply path optimization for some of the biggest partners in CTV.</span>
          </p>
          <p className={`font-["Lato:Light"] leading-[1.72] relative shrink-0 text-[#4c5864] text-[17px] w-full ${isStart ? "" : ""}`} id={isStart ? "node-1731_890" : "node-1731_882"}>
            That means first look at premium placements not accessible in the open market, full visibility into what you’re paying for, and pricing that reflects real supply-path efficiency.
          </p>
        </div>
      </div>
      <div className="absolute h-[262px] left-[817px] rounded-tl-[76px] top-[100.43px] w-[379px]" id={isStart ? "node-1731_891" : "node-1731_883"} style={{ backgroundImage: "linear-gradient(145.3441709509324deg, rgb(0, 134, 130) 14.644%, rgb(0, 181, 173) 85.356%)" }} />
      {state === "End" && (
        <div className="absolute h-[408px] left-[850px] rounded-[40px] top-[141.43px] w-[449px]" data-node-id="1731:884" data-name="img/home-supply-path">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[40px]">
            <div className="absolute inset-0 overflow-hidden rounded-[40px]">
              <img alt="" className="absolute h-full left-[-36.23%] max-w-none top-0 w-[136.23%]" src={imgImgHomeSupplyPath} />
            </div>
            <div className="absolute inset-0 overflow-hidden rounded-[40px]">
              <img alt="" className="absolute h-full left-[-41.34%] max-w-none top-0 w-[141.4%]" src={imgImgHomeSupplyPath1} />
            </div>
          </div>
        </div>
      )}
      {isStart && (
        <div className="absolute h-[408px] left-[850px] rounded-[40px] top-[141.43px] w-[449px]" data-node-id="1731:892" data-name="ChatGPT Image Sep 22, 2026, 07_09_06 PM 1">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[40px]">
            <div className="absolute inset-0 overflow-hidden rounded-[40px]">
              <img alt="" className="absolute h-full left-[-36.23%] max-w-none top-0 w-[136.23%]" src={imgImgHomeSupplyPath} />
            </div>
            <div className="absolute inset-0 overflow-hidden rounded-[40px]">
              <img alt="" className="absolute h-full left-[-41.34%] max-w-none top-0 w-[141.4%]" src={imgImgHomeSupplyPath1} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

type RevealLivingRoomProps = {
  className?: string;
  state?: "End" | "Start";
};

function RevealLivingRoom({ className, state = "End" }: RevealLivingRoomProps) {
  const isStart = state === "Start";
  return (
    <div className={className || "h-[677px] relative w-[1344px]"} id={isStart ? "node-1731_868" : "node-1731_867"} style={{ backgroundImage: "linear-gradient(153.2646795484895deg, rgb(0, 181, 173) 14.644%, rgb(27, 155, 194) 85.356%)" }}>
      <div className="[word-break:break-word] absolute contents left-[782px] not-italic text-[#fafbfb] top-[142px]" id={isStart ? "node-1731_862" : "node-1731_856"} data-name="Copy">
        <p className={`absolute font-["Lato:Bold"] leading-[1.27] left-[782px] text-[40px] top-[142px] tracking-[-0.96px] w-[585px] ${isStart ? "" : ""}`} id={isStart ? "node-1731_863" : "node-1731_857"}>
          The Living Room Is Now a Performance Channel
        </p>
        <p className={`absolute font-["Lato:Regular"] leading-[0] left-[782px] text-[17px] top-[252px] w-[585px] ${isStart ? "" : ""}`} id={isStart ? "node-1731_864" : "node-1731_858"}>
          <span className="leading-[1.72]">{`Streaming has passed cable and broadcast. The majority of U.S. TV time now happens on a connected screen, and ad dollars are following — `}</span>
          <span className="font-['Lato:ExtraBold'] leading-[1.72]">CTV spend is projected to hit $52B by 2029</span>
          <span className="font-['Lato:Black'] leading-[1.72]">.</span>
          <span className="leading-[1.72]">{` The screen is bigger. The attention is real and the price is still catching up to the value. The problem is, most of the industry still buys it like a banner ad.`}</span>
        </p>
        <p className={`absolute font-["Lato:Regular"] leading-[1.72] left-[782px] text-[17px] top-[417px] w-[585px] ${isStart ? "" : ""}`} id={isStart ? "node-1731_865" : "node-1731_859"}>
          FeedTV turns the living room into a performance channel — driving installs, in-app events, and ROAS on the biggest screen in the home, the way you already measure mobile.
        </p>
      </div>
      {state === "End" && (
        <div className="absolute h-[679px] left-0 top-0 w-[743px]" data-node-id="1731:860" data-name="img/home-living-room">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[123.25%] left-[-11.53%] max-w-none top-[-11.63%] w-[200.28%]" src={imgImgHomeLivingRoom} />
          </div>
        </div>
      )}
      {isStart && (
        <div className="absolute h-[679px] left-0 top-0 w-[743px]" data-node-id="1731:866" data-name="image 17">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[123.25%] left-[-11.53%] max-w-none top-[-11.63%] w-[200.28%]" src={imgImgHomeLivingRoom} />
          </div>
        </div>
      )}
    </div>
  );
}

type TestimonialProps = {
  className?: string;
  state?: "1" | "2" | "3";
};


type RevealClientLogosProps = {
  className?: string;
  step?: boolean;
};

function RevealClientLogos({ className, step = true }: RevealClientLogosProps) {
  const isStep = step;
  return (
    <div className={className || "content-stretch flex gap-[98px] items-center px-[38px] py-[15px] relative w-[1120px]"} id={isStep ? "node-1733_943" : "node-1733_936"}>
      <div className="absolute bg-[rgba(255,255,255,0.01)] h-[330px] left-0 right-0 top-[-30px]" id={isStep ? "node-1863_1989" : "node-1863_1988"} data-name="Hover band" />
      <div className="h-[32.853px] relative shrink-0 w-[116px]" id={isStep ? "node-1733_938" : "node-1733_931"} data-name="Chime">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={isStep ? imgChime1 : imgChime} />
      </div>
      <div className="h-[34.211px] relative shrink-0 w-[191px]" id={isStep ? "node-2008_2306" : "node-2008_2305"} data-name="Realtor">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={isStep ? imgRealtor1 : imgRealtor} />
      </div>
      <div className="h-[37.558px] relative shrink-0 w-[187.96px]" id={isStep ? "node-1733_940" : "node-1733_933"} data-name="Binance">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={isStep ? imgBinance1 : imgBinance} />
      </div>
      <div className="h-[29.804px] relative shrink-0 w-[129px]" id={isStep ? "node-1944_2308" : "node-1944_2307"} data-name="Upside">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={isStep ? imgUpside1 : imgUpside} />
      </div>
      <div className="h-[59.93px] relative shrink-0 w-[105.804px]" id={isStep ? "node-1733_942" : "node-1733_935"} data-name="Cap One">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={isStep ? imgCapOne1 : imgCapOne} />
      </div>
    </div>
  );
}

export default function Component01HomepageV2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pt-[88px] relative size-full" data-node-id="1751:1792" data-name="01 · Homepage v2">
      <div className="h-[719px] relative shrink-0 w-full" data-node-id="I1751:1792;1751:1090" data-name="Hero">
        <div className="absolute h-[807px] left-[-110px] overflow-clip top-[-88px] w-[1661px]" data-node-id="I1751:1792;1829:3263" data-name="Slot">
          <div className="absolute bottom-[-12px] h-[855px] left-[95px] w-[1472px]" data-node-id="I1751:1792;1829:3263;1829:3269" data-name="image 1 · hero (full bleed under nav)">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[99.97%] left-[-1.24%] max-w-none top-[0.11%] w-full" src={imgImage1HeroFullBleedUnderNav} />
            </div>
          </div>
        </div>
        <div className="absolute h-[340px] left-[120px] overflow-clip top-[88px] w-[540px]" data-node-id="I1751:1792;1751:1092" data-name="Hero row">
          <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-0 overflow-clip top-0 w-[540px]" data-node-id="I1751:1792;1751:1093" data-name="Copy">
            <h1 className="[word-break:break-word] font-['Lato:Bold'] leading-[0] min-w-full not-italic relative shrink-0 text-[#1d262f] text-[58px] tracking-[-1.624px] w-[min-content]" data-node-id="I1751:1792;1751:1094">
              <span className="block leading-[1.27] mb-0">Premium Ads</span>
              <span className="block leading-[1.27]">You Can Actually See</span>
            </h1>
            <p className="[word-break:break-word] font-['Lato:Regular'] leading-[1.65] not-italic relative shrink-0 text-[#4c5864] text-[19px] w-[528px]" data-node-id="I1751:1792;1751:1095">
              FeedTV is the CTV platform built for incremental user growth on the biggest screen in the home—delivering exclusive placements, high-visibility ads, and measurable results.
            </p>
            <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="I1751:1792;1751:1096" data-name="CTAs">
              <a className="bg-[#00b5ad] content-stretch cursor-pointer flex items-center overflow-clip px-[30px] py-[15px] relative rounded-[999px] shrink-0" data-node-id="I1751:1792;1751:1097" data-name="Button · Book a Meeting">
                <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[15.5px] text-left text-white whitespace-nowrap" data-node-id="I1751:1792;1751:1098">
                  Get Your Media Plan
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f2f2] content-stretch flex flex-col gap-[30px] h-[526px] items-start pb-[66px] pt-[28px] px-[120px] relative shrink-0 w-full" data-node-id="I1751:1792;1751:1099" data-name="Trusted by">
        <p className="[word-break:break-word] font-['Lato:ExtraBold'] leading-[normal] min-w-full not-italic relative shrink-0 text-[#a2a4a4] text-[16px] text-center tracking-[2.56px] w-[min-content]" data-node-id="I1751:1792;1751:1100">
          TRUSTED BY THE WORLD’S TOP APPS
        </p>
        <RevealClientLogos className="content-stretch flex gap-[98px] items-center px-[38px] py-[15px] relative shrink-0 w-full" />
        <Testimonial className="bg-white border border-[#e5e7e9] border-solid content-stretch flex flex-col gap-[18px] h-[234px] items-center justify-center pb-[30px] pt-[38px] px-[48px] relative rounded-[24px] shrink-0 w-[1200px]" />
      </div>
      <RevealLivingRoom className="h-[677px] relative shrink-0 w-full" state="End" />
      <RevealSupplyPathOptimization className="bg-[#fafbfb] h-[601px] relative shrink-0 w-full" state="End" />
      <RevealChallengeVsFeedTv className="h-[759px] relative shrink-0 w-full" state="End" />
      <div className="content-stretch flex flex-col gap-[36px] items-start px-[120px] py-[100px] relative shrink-0 w-full" data-node-id="I1751:1792;1751:1106" data-name="Two Ways to Buy">
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="I1751:1792;1751:1106;1746:1061" data-name="Head">
          <p className="[word-break:break-word] font-['Lato:Bold'] leading-[1.27] not-italic relative shrink-0 text-[#1d262f] text-[40px] tracking-[-0.96px] w-full" data-node-id="I1751:1792;1751:1106;1746:1062">
            One Platform. Two Routes In.
          </p>
        </div>
        <div className="content-stretch flex gap-[22px] items-start overflow-clip relative shrink-0 w-full" data-node-id="I1751:1792;1751:1106;1746:1063" data-name="Product cards">
          <div className="bg-white border border-[#e5e7e9] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px overflow-clip px-[38px] py-[40px] relative rounded-[28px]" data-node-id="I1751:1792;1751:1106;1746:1064" data-name="Card · FeedTV">
            <div className="bg-[#f3f6f7] h-[265px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-node-id="I1751:1792;1751:1106;1746:1065" data-name="Image · 16:9 (placeholder)">
              <div className="absolute left-[237.5px] size-[36px] top-[-114px]" data-node-id="I1751:1792;1751:1106;1746:1066" data-name="glyph">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyph} />
              </div>
              <p className="[word-break:break-word] absolute font-['Lato:Bold'] leading-[normal] left-[218.5px] not-italic text-[#a2a4a4] text-[11px] top-[-68px] tracking-[1.54px] whitespace-nowrap" data-node-id="I1751:1792;1751:1106;1746:1070">
                16:9 IMAGE
              </p>
              <div className="absolute h-[483px] left-[-174px] top-[-28px] w-[859px]" data-node-id="I1751:1792;1751:1106;1746:1071" data-name="home-product-feedtv">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHomeProductFeedtv} />
              </div>
            </div>
            <div className="bg-[#e6f7f6] content-stretch flex items-start overflow-clip px-[15px] py-[6px] relative rounded-[999px] shrink-0" data-node-id="I1751:1792;1751:1106;1746:1072" data-name="Pill">
              <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[#008682] text-[11.5px] tracking-[1.38px] whitespace-nowrap" data-node-id="I1751:1792;1751:1106;1746:1073">
                FEEDTV HOME
              </p>
            </div>
            <p className="[word-break:break-word] font-['Lato:Light'] leading-[1.68] min-w-full not-italic relative shrink-0 text-[#4c5864] text-[16.5px] w-[min-content]" data-node-id="I1751:1792;1751:1106;1746:1074">
              Direct, exclusive OEM inventory. Samsung, LG, Vizio, TCL, Tubi, Roku — home screen and native placements negotiated straight with the manufacturer, with no programmatic path.
            </p>
            <a className="border-2 border-[#b2b7bd] border-solid content-stretch cursor-pointer flex items-center overflow-clip px-[30px] py-[15px] relative rounded-[999px] shrink-0" data-node-id="I1751:1792;1751:1106;1746:1075" data-name="Button · Explore FeedTV  →">
              <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[#1d262f] text-[15.5px] text-left whitespace-pre" data-node-id="I1751:1792;1751:1106;1746:1076">{`Explore FeedTV Home  →`}</p>
            </a>
          </div>
          <div className="bg-white border border-[#e5e7e9] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px overflow-clip px-[38px] py-[40px] relative rounded-[28px]" data-node-id="I1751:1792;1751:1106;1746:1077" data-name="Card · FeedTV Stream">
            <div className="bg-[#f3f6f7] h-[265px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-node-id="I1751:1792;1751:1106;1746:1078" data-name="Image · 16:9 (placeholder)">
              <div className="absolute left-[237.5px] size-[36px] top-[-38.5px]" data-node-id="I1751:1792;1751:1106;1746:1079" data-name="glyph">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlyph} />
              </div>
              <div className="absolute h-[265px] left-0 top-0 w-[471px]" data-node-id="I1751:1792;1751:1106;1746:1083" data-name="home-product-feedtv-stream">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHomeProductFeedtvStream} />
              </div>
              <p className="[word-break:break-word] absolute font-['Lato:Bold'] leading-[normal] left-[218.5px] not-italic text-[#a2a4a4] text-[11px] top-[314.5px] tracking-[1.54px] whitespace-nowrap" data-node-id="I1751:1792;1751:1106;1746:1084">
                16:9 IMAGE
              </p>
            </div>
            <div className="bg-[#e6f7f6] content-stretch flex items-start overflow-clip px-[15px] py-[6px] relative rounded-[999px] shrink-0" data-node-id="I1751:1792;1751:1106;1746:1085" data-name="Pill">
              <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[#008682] text-[11.5px] tracking-[1.38px] whitespace-nowrap" data-node-id="I1751:1792;1751:1106;1746:1086">
                FEEDTV STREAM
              </p>
            </div>
            <p className="[word-break:break-word] font-['Lato:Light'] leading-[1.68] min-w-full not-italic relative shrink-0 text-[#4c5864] text-[16.5px] w-[min-content]" data-node-id="I1751:1792;1751:1106;1746:1087">
              Our AI-powered programmatic DSP for connected TV. A proprietary bidder, built for outcomes, that gets you first look at premium supply, priced and optimized in real time.
            </p>
            <a className="border-2 border-[#b2b7bd] border-solid content-stretch cursor-pointer flex items-center overflow-clip px-[30px] py-[15px] relative rounded-[999px] shrink-0" data-node-id="I1751:1792;1751:1106;1746:1088" data-name="Button · Explore FeedTV Stream  →">
              <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[#1d262f] text-[15.5px] text-left whitespace-pre" data-node-id="I1751:1792;1751:1106;1746:1089">{`Explore FeedTV Stream  →`}</p>
            </a>
          </div>
        </div>
      </div>
      <RevealPartners className="content-stretch flex flex-col gap-[63px] h-[638px] items-start pb-[60px] pt-[100px] px-[120px] relative shrink-0 w-full" />
      <div className="h-[498px] relative shrink-0 w-full" data-node-id="I1751:1792;1751:1108" style={{ backgroundImage: "linear-gradient(160.92290868019228deg, rgb(0, 181, 173) 14.644%, rgb(27, 155, 194) 85.356%)" }} data-name="Closing CTA">
        <div className="absolute h-[498px] left-0 top-0 w-[1440px]" data-node-id="I1751:1792;1751:1109" data-name="img/home-closing-cta-bg">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[178.46%] left-0 max-w-none top-[-31.3%] w-[109.72%]" src={imgImgHomeClosingCtaBg} />
          </div>
        </div>
        <div className="absolute h-[413px] left-[73px] overflow-clip top-[42px] w-[880px]" data-node-id="I1751:1792;1751:1110" data-name="Copy">
          <p className="[word-break:break-word] absolute font-['Lato:Bold'] leading-[1.27] left-0 not-italic text-[42px] text-white top-[10px] tracking-[-1.008px] w-[526px]" data-node-id="I1751:1792;1751:1111">
            Big Screen Reach. Performance-Grade Results.
          </p>
          <p className="[word-break:break-word] absolute font-['Lato:Regular'] leading-[0] left-0 not-italic text-[#e2f7f6] text-[17.5px] top-[122px] w-[541px]" data-node-id="I1751:1792;1751:1112">
            <span className="leading-[1.7]">{`We’re proud to partner with the most elite performance marketers in the business. And we’ll be honest — we turn down more business than we take on. `}</span>
            <span className="font-['Lato:Bold'] leading-[1.7]">We’d rather do exceptional work for a handful of the best brands than be everywhere for everyone.</span>
          </p>
          <div className="[word-break:break-word] absolute font-['Lato:Bold_Italic'] italic leading-[0] left-0 text-[17.5px] text-white top-[277px] w-[612px] whitespace-pre-wrap" data-node-id="I1751:1792;1751:1113">
            <p className="leading-[1.7] mb-0">{`If you’re here, you’re already thinking about CTV the right way. `}</p>
            <p className="leading-[1.7]">Let’s put your brand on the screen that gets seen first.</p>
          </div>
          <div className="absolute bg-white h-[49px] left-0 overflow-clip rounded-[999px] top-[357px] w-[147px]" data-node-id="I1751:1792;1751:1114" data-name="Button · Get In Touch">
            <p className="[word-break:break-word] absolute font-['Lato:Bold'] leading-[normal] left-[30px] not-italic text-[#008682] text-[15.5px] top-[15px] whitespace-nowrap" data-node-id="I1751:1792;1751:1115">
              Get In Touch
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#1d262f] content-stretch flex flex-col gap-[44px] items-start overflow-clip pb-[40px] pt-[72px] px-[120px] relative shrink-0 w-full" data-node-id="I1751:1792;1751:1116" data-name="Footer">
        <div className="content-stretch flex gap-[40px] items-start overflow-clip relative shrink-0 w-full" data-node-id="I1751:1792;1751:1116;296:23" data-name="Columns">
          <div className="content-stretch flex flex-col gap-[18px] items-start overflow-clip relative shrink-0 w-[380px]" data-node-id="I1751:1792;1751:1116;296:24" data-name="Brand">
            <div className="bg-[rgba(255,255,255,0.01)] content-stretch flex gap-[10px] h-[30px] items-center relative shrink-0 w-[132px]" data-node-id="I1751:1792;1751:1116;296:25" data-name="Logo">
              <div className="h-[41.202px] relative shrink-0 w-[136.61px]" data-node-id="I1751:1792;1751:1116;4131:5114" data-name="feedtv logo · official">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFeedtvLogoOfficial} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Lato:Light'] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#8a97a1] text-[15px] w-[min-content]" data-node-id="I1751:1792;1751:1116;296:34">
              Premium CTV inventory, bought direct from the manufacturers. A FeedMob company.
            </p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1751:1792;1751:1116;296:35" data-name="Products">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1751:1792;1751:1116;296:36">
              PRODUCTS
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1751:1792;1751:1116;296:37" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1751:1792;1751:1116;296:38">
              <p className="leading-[normal]">FeedTV Home</p>
            </a>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1751:1792;1751:1116;296:40">
              <p className="leading-[normal]">FeedTV Stream</p>
            </a>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1751:1792;1751:1116;296:42" data-name="About">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1751:1792;1751:1116;296:43">
              ABOUT
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1751:1792;1751:1116;296:44" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1751:1792;1751:1116;296:45">
              <p className="leading-[normal]">Our Team</p>
            </a>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1751:1792;1751:1116;296:47" data-name="Resources">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1751:1792;1751:1116;296:48">
              RESOURCES
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1751:1792;1751:1116;296:49" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1751:1792;1751:1116;296:50">
              <p className="leading-[normal]">Blog</p>
            </a>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1751:1792;1751:1116;296:52">
              <p className="leading-[normal]">Case Studies</p>
            </a>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1751:1792;1751:1116;296:54">
              <p className="leading-[normal]">Preview Your Ads</p>
            </a>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1751:1792;1751:1116;296:56" data-name="Connect">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1751:1792;1751:1116;296:57">
              CONNECT
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1751:1792;1751:1116;296:58" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" href="https://linkedin.com/company/feedmob" data-node-id="I1751:1792;1751:1116;296:59" target="_blank">
              <p className="leading-[normal]">LinkedIn</p>
            </a>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1751:1792;1751:1116;296:61">
              <p className="leading-[normal]">Contact</p>
            </a>
          </div>
        </div>
        <div className="[word-break:break-word] border-[#38424a] border-solid border-t content-stretch flex font-['Lato:Regular'] items-center justify-between leading-[normal] not-italic overflow-clip pt-[26px] relative shrink-0 text-[#8a97a1] text-[13px] w-full whitespace-nowrap" data-node-id="I1751:1792;1751:1116;296:63" data-name="Legal bar">
          <p className="relative shrink-0" data-node-id="I1751:1792;1751:1116;296:64">
            © 2026 FeedTV. A FeedMob company.
          </p>
          <div className="content-stretch flex gap-[22px] items-start overflow-clip relative shrink-0" data-node-id="I1751:1792;1751:1116;296:65" data-name="Legal links">
            <p className="relative shrink-0" data-node-id="I1751:1792;1751:1116;296:66">
              Terms
            </p>
            <p className="relative shrink-0" data-node-id="I1751:1792;1751:1116;296:67">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
      
      
      
      
    </div>
  );
}
