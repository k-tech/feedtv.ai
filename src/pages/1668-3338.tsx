import React from "react";
const imgArtwork = "/assets/1668-3338-imgArtwork.svg";
const imgHalo = "/assets/1668-3338-imgHalo.svg";
const imgHalo1 = "/assets/1668-3338-imgHalo1.svg";
const imgVector = "/assets/1668-3338-imgVector.svg";
const imgEllipse = "/assets/1668-3338-imgEllipse.svg";
const imgEllipse1 = "/assets/1668-3338-imgEllipse1.svg";
const imgEllipse2 = "/assets/1668-3338-imgEllipse2.svg";
const imgEllipse3 = "/assets/1668-3338-imgEllipse3.svg";
const imgHalo2 = "/assets/1668-3338-imgHalo2.svg";
const imgEllipse4 = "/assets/1668-3338-imgEllipse4.svg";
const imgEllipse5 = "/assets/1668-3338-imgEllipse5.svg";
const imgHalo3 = "/assets/1668-3338-imgHalo3.svg";
const imgHalo4 = "/assets/1668-3338-imgHalo4.svg";
const imgHalo5 = "/assets/1668-3338-imgHalo5.svg";
const imgHalo6 = "/assets/1668-3338-imgHalo6.svg";
const imgVector1 = "/assets/1668-3338-imgVector1.svg";
const imgVector2 = "/assets/1668-3338-imgVector2.svg";
const imgEllipse6 = "/assets/1668-3338-imgEllipse6.svg";
const imgEllipse7 = "/assets/1668-3338-imgEllipse7.svg";
const imgHalo7 = "/assets/1668-3338-imgHalo7.svg";
const imgHalo8 = "/assets/1668-3338-imgHalo8.svg";
const imgEllipse8 = "/assets/1668-3338-imgEllipse8.svg";
const imgEllipse9 = "/assets/1668-3338-imgEllipse9.svg";
const imgEllipse10 = "/assets/1668-3338-imgEllipse10.svg";
const imgEllipse11 = "/assets/1668-3338-imgEllipse11.svg";
const imgFeedtvLogoOfficial = "/assets/1668-3338-imgFeedtvLogoOfficial.svg";
const imgMark = "/assets/1668-3338-imgMark.svg";
const imgWordmark = "/assets/1668-3338-imgWordmark.svg";
const imgSearchIcon = "/assets/1668-3338-imgSearchIcon.svg";

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

export default function Component05Blog() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pt-[88px] relative size-full" data-node-id="1668:3338" data-name="05 · Blog">
      <div className="content-stretch flex flex-col items-start pb-[60px] pt-[96px] px-[120px] relative shrink-0 w-full" data-node-id="1668:3339" data-name="Hero">
        <div className="content-stretch flex gap-[48px] items-center overflow-clip relative shrink-0 w-full" data-node-id="1834:1913" data-name="Hero row">
          <div className="content-stretch flex flex-col gap-[18px] items-start overflow-clip relative shrink-0 w-[620px]" data-node-id="1668:3340" data-name="Copy">
            <h1 className="[word-break:break-word] font-['Lato:Bold'] leading-[1.27] min-w-full not-italic relative shrink-0 text-[#1d262f] text-[50px] tracking-[-1.4px] w-[min-content]" data-node-id="1668:3342">
              CTV Attribution Playbook: A Guide to Performance Campaign Success
            </h1>
            <p className="[word-break:break-word] font-['Lato:Light'] leading-[1.68] min-w-full not-italic relative shrink-0 text-[#4c5864] text-[19px] w-[min-content]" data-node-id="1668:3343">
              Why CTV attribution is a different problem, how to set it up before launch, and why incrementality is your ground truth.
            </p>
            <a className="bg-[#00b5ad] content-stretch cursor-pointer flex items-center overflow-clip px-[30px] py-[15px] relative rounded-[999px] shrink-0" data-node-id="1993:2292" data-name="Button · Read full article">
              <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[15.5px] text-left text-white whitespace-nowrap" data-node-id="1993:2293">
                Read full article
              </p>
            </a>
          </div>
          <div className="bg-[rgba(0,181,173,0.13)] flex-[1_0_0] h-[320px] min-w-px overflow-clip relative rounded-[18px]" data-node-id="1834:1914" data-name="Hero thumbnail · Attribution path">
            <div className="absolute h-[233.155px] left-0 top-[43.42px] w-[532px]" data-node-id="1995:2292" data-name="Artwork">
              <div className="absolute inset-[-32.14%_-24.7%_-34.52%_-11.48%]">
                <img alt="" className="block max-w-none size-full" src={imgArtwork} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[22px] items-start pb-[96px] pt-[20px] px-[120px] relative shrink-0 w-full" data-node-id="1920:3498" data-name="Articles">
        <div className="content-stretch cursor-pointer flex gap-[22px] items-start overflow-clip relative shrink-0 w-full" data-node-id="1920:3499" data-name="Row">
          <a className="bg-white border border-[#e5e7e9] border-solid content-stretch flex flex-[1_0_0] flex-col h-[432px] items-start min-w-px overflow-clip relative rounded-[24px]" data-node-id="1920:3500" data-name="Article · CTV Attribution Playbook: A Gu">
            <div className="bg-[rgba(0,181,173,0.13)] h-[168px] overflow-clip relative rounded-[18px] shrink-0 w-full" data-node-id="1920:3501" data-name="Thumbnail · Attribution path">
              <div className="absolute left-[268px] size-[210px] top-[-54px]" data-node-id="1920:3502" data-name="Halo">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHalo} />
              </div>
              <div className="absolute left-[-44px] size-[130px] top-[96px]" data-node-id="1920:3503" data-name="Halo">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHalo1} />
              </div>
              <div className="absolute h-0 left-[94.75px] top-[82.75px] w-[192px]" data-node-id="1920:3504" data-name="Vector">
                <div className="absolute inset-[-1.25px_-0.65%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector} />
                </div>
              </div>
              <div className="absolute left-[82px] size-[28px] top-[70px]" data-node-id="1920:3505" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
              </div>
              <div className="absolute left-[175px] size-[34px] top-[67px]" data-node-id="1920:3506" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} />
              </div>
              <div className="absolute left-[267px] size-[42px] top-[63px]" data-node-id="1920:3507" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse2} />
              </div>
              <div className="absolute left-[281px] size-[14px] top-[77px]" data-node-id="1920:3508" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse3} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-[28px] pt-[26px] px-[26px] relative shrink-0 w-full" data-node-id="1920:3509" data-name="Text">
              <div className="bg-[rgba(0,181,173,0.22)] content-stretch flex items-center overflow-clip px-[10px] py-[7px] relative rounded-[999px] shrink-0" data-node-id="2361:2485" data-name="Category chip">
                <p className="[word-break:break-word] font-['Lato:Bold'] h-full leading-[normal] not-italic relative shrink-0 text-[#1d262f] text-[10.5px] text-left tracking-[1.68px] w-[87px]">ATTRIBUTION</p>
              </div>
              <p className="[word-break:break-word] font-['Lato:Bold'] leading-[1.32] min-w-full not-italic relative shrink-0 text-[#1d262f] text-[19px] text-left tracking-[-0.266px] w-[min-content]" data-node-id="1920:3511">
                CTV Attribution Playbook: A Guide to Performance Campaign Success
              </p>
              <p className="[word-break:break-word] font-['Lato:Light'] leading-[1.62] min-w-full not-italic relative shrink-0 text-[#4c5864] text-[15px] text-left w-[min-content]" data-node-id="1920:3512">
                Why CTV attribution is a different problem, how to set it up before launch, and why incrementality is your ground truth.
              </p>
            </div>
          </a>
          <a className="bg-white border border-[#e5e7e9] border-solid content-stretch flex flex-[1_0_0] flex-col h-[432px] items-start min-w-px overflow-clip relative rounded-[24px]" data-node-id="1920:3514" data-name="Article · CTV Attribution That Works: Ho">
            <div className="bg-[rgba(0,181,173,0.13)] h-[168px] overflow-clip relative rounded-[18px] shrink-0 w-full" data-node-id="1920:3515" data-name="Thumbnail · Overlap">
              <div className="absolute left-[268px] size-[210px] top-[-54px]" data-node-id="1920:3516" data-name="Halo">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHalo} />
              </div>
              <div className="absolute left-[-44px] size-[130px] top-[96px]" data-node-id="1920:3517" data-name="Halo">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHalo2} />
              </div>
              <div className="absolute left-[110px] size-[92px] top-[38px]" data-node-id="1920:3518" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse4} />
              </div>
              <div className="absolute left-[182px] size-[92px] top-[38px]" data-node-id="1920:3519" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse5} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-[28px] pt-[26px] px-[26px] relative shrink-0 w-full" data-node-id="1920:3520" data-name="Text">
              <div className="bg-[rgba(0,181,173,0.22)] content-stretch flex items-center overflow-clip px-[10px] py-[7px] relative rounded-[999px] shrink-0" data-node-id="2361:2486" data-name="Category chip">
                <p className="[word-break:break-word] font-['Lato:Bold'] h-full leading-[normal] not-italic relative shrink-0 text-[#1d262f] text-[10.5px] text-left tracking-[1.68px] w-[87px]">ATTRIBUTION</p>
              </div>
              <p className="[word-break:break-word] font-['Lato:Bold'] leading-[1.32] min-w-full not-italic relative shrink-0 text-[#1d262f] text-[19px] text-left tracking-[-0.266px] w-[min-content]" data-node-id="1920:3522">
                CTV Attribution That Works: How to Capture the Conversions Last Click Misses
              </p>
              <p className="[word-break:break-word] font-['Lato:Light'] leading-[1.62] min-w-full not-italic relative shrink-0 text-[#4c5864] text-[15px] text-left w-[min-content]" data-node-id="1920:3523">
                Start with the match, not the metric — attribution windows, priority settings, and reporting CTV separately.
              </p>
            </div>
          </a>
          <a className="bg-white border border-[#e5e7e9] border-solid content-stretch flex flex-[1_0_0] flex-col h-[432px] items-start min-w-px overflow-clip relative rounded-[24px]" data-node-id="1920:3525" data-name="Article · The Last-Click Blind Spot: How">
            <div className="bg-[rgba(27,155,194,0.13)] h-[168px] overflow-clip relative rounded-[18px] shrink-0 w-full" data-node-id="1920:3526" data-name="Thumbnail · Blind spot">
              <div className="absolute left-[268px] size-[210px] top-[-54px]" data-node-id="1920:3527" data-name="Halo">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHalo3} />
              </div>
              <div className="absolute left-[-44px] size-[130px] top-[96px]" data-node-id="1920:3528" data-name="Halo">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHalo4} />
              </div>
              <div className="absolute bg-[#a06acd] h-[44px] left-[88px] rounded-[15px] top-[88px] w-[30px]" data-node-id="1920:3529" data-name="Rectangle" />
              <div className="absolute bg-[#1b9bc2] h-[60px] left-[132px] rounded-[15px] top-[72px] w-[30px]" data-node-id="1920:3530" data-name="Rectangle" />
              <div className="absolute bg-[#f7bd63] h-[50px] left-[176px] rounded-[15px] top-[82px] w-[30px]" data-node-id="1920:3531" data-name="Rectangle" />
              <div className="absolute border-[#00b5ad] border-[2.5px] border-dashed h-[94px] left-[220px] rounded-[15px] top-[38px] w-[30px]" data-node-id="1920:3532" data-name="Rectangle" />
              <div className="absolute bg-[#ee6969] h-[38px] left-[264px] rounded-[15px] top-[94px] w-[30px]" data-node-id="1920:3533" data-name="Rectangle" />
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-[28px] pt-[26px] px-[26px] relative shrink-0 w-full" data-node-id="1920:3534" data-name="Text">
              <div className="bg-[rgba(27,155,194,0.22)] content-stretch flex items-center overflow-clip px-[10px] py-[7px] relative rounded-[999px] shrink-0" data-node-id="2361:2487" data-name="Category chip">
                <p className="[word-break:break-word] font-['Lato:Bold'] h-full leading-[normal] not-italic relative shrink-0 text-[#1d262f] text-[10.5px] text-left tracking-[1.68px] w-[97px]">MEASUREMENT</p>
              </div>
              <p className="[word-break:break-word] font-['Lato:Bold'] leading-[1.32] min-w-full not-italic relative shrink-0 text-[#1d262f] text-[19px] text-left tracking-[-0.266px] w-[min-content]" data-node-id="1920:3536">
                The Last-Click Blind Spot: How CTV Drives Conversions Other Channels Take Credit For
              </p>
              <p className="[word-break:break-word] font-['Lato:Light'] leading-[1.62] min-w-full not-italic relative shrink-0 text-[#4c5864] text-[15px] text-left w-[min-content]" data-node-id="1920:3537">
                The waterfall works against CTV. What that looks like as a real result, and how to get out of the valley.
              </p>
            </div>
          </a>
        </div>
        <div className="content-stretch flex gap-[22px] items-start overflow-clip relative shrink-0 w-full" data-node-id="1920:3539" data-name="Row">
          <a className="bg-white border border-[#e5e7e9] border-solid content-stretch cursor-pointer flex flex-[1_0_0] flex-col h-[432px] items-start min-w-px overflow-clip relative rounded-[24px]" data-node-id="1920:3540" data-name="Article · The CTV Test Framework: A Prac">
            <div className="bg-[rgba(247,189,99,0.2)] h-[168px] overflow-clip relative rounded-[18px] shrink-0 w-full" data-node-id="1920:3541" data-name="Thumbnail · Incremental lift">
              <div className="absolute left-[268px] size-[210px] top-[-54px]" data-node-id="1920:3542" data-name="Halo">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHalo5} />
              </div>
              <div className="absolute left-[-44px] size-[130px] top-[96px]" data-node-id="1920:3543" data-name="Halo">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHalo6} />
              </div>
              <div className="absolute h-[12px] left-[72.75px] top-[104.75px] w-[224px]" data-node-id="1920:3544" data-name="Vector">
                <div className="absolute inset-[-10.42%_-0.56%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector1} />
                </div>
              </div>
              <div className="absolute h-[74.107px] left-[72.75px] top-[42.75px] w-[224px]" data-node-id="1920:3545" data-name="Vector">
                <div className="absolute inset-[-1.69%_-0.56%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector2} />
                </div>
              </div>
              <div className="absolute bg-[#00b5ad] h-[62px] left-[312px] rounded-[3.5px] top-[44px] w-[7px]" data-node-id="1920:3546" data-name="Rectangle" />
              <div className="absolute left-[291.5px] size-[13px] top-[37.5px]" data-node-id="1920:3547" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse6} />
              </div>
              <div className="absolute left-[293px] size-[10px] top-[101px]" data-node-id="1920:3548" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse7} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-[28px] pt-[26px] px-[26px] relative shrink-0 w-full" data-node-id="1920:3549" data-name="Text">
              <div className="bg-[rgba(247,189,99,0.42)] content-stretch flex items-center overflow-clip px-[10px] py-[7px] relative rounded-[999px] shrink-0" data-node-id="2361:2488" data-name="Category chip">
                <p className="[word-break:break-word] font-['Lato:Bold'] h-full leading-[normal] not-italic relative shrink-0 text-[#1d262f] text-[10.5px] text-left tracking-[1.68px] w-[54px]">TESTING</p>
              </div>
              <p className="[word-break:break-word] font-['Lato:Bold'] leading-[1.32] min-w-full not-italic relative shrink-0 text-[#1d262f] text-[19px] text-left tracking-[-0.266px] w-[min-content]" data-node-id="1920:3551">
                The CTV Test Framework: A Practical Guide to Measuring Incremental Lift
              </p>
              <p className="[word-break:break-word] font-['Lato:Light'] leading-[1.62] min-w-full not-italic relative shrink-0 text-[#4c5864] text-[15px] text-left w-[min-content]" data-node-id="1920:3552">
                Start with the right question, choose a methodology that fits your scale, and read the result honestly.
              </p>
            </div>
          </a>
          <a className="bg-white border border-[#e5e7e9] border-solid content-stretch cursor-pointer flex flex-[1_0_0] flex-col h-[432px] items-start min-w-px overflow-clip relative rounded-[24px]" data-node-id="1920:3554" data-name="Article · Creatives That Perform: CTV Cr">
            <div className="bg-[rgba(160,106,205,0.13)] h-[168px] overflow-clip relative rounded-[18px] shrink-0 w-full" data-node-id="1920:3555" data-name="Thumbnail · Creative">
              <div className="absolute left-[268px] size-[210px] top-[-54px]" data-node-id="1920:3556" data-name="Halo">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHalo7} />
              </div>
              <div className="absolute left-[-44px] size-[130px] top-[96px]" data-node-id="1920:3557" data-name="Halo">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHalo8} />
              </div>
              <div className="absolute bg-white border-[#e5e7e9] border-[2.5px] border-solid h-[108px] left-[72px] rounded-[18px] top-[30px] w-[190px]" data-node-id="1920:3558" data-name="Rectangle" />
              <div className="absolute left-[147px] size-[40px] top-[48px]" data-node-id="1920:3559" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse8} />
              </div>
              <div className="absolute left-[160px] size-[14px] top-[61px]" data-node-id="1920:3560" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse3} />
              </div>
              <div className="absolute bg-[#f7bd63] h-[14px] left-[131px] rounded-[999px] top-[104px] w-[72px]" data-node-id="1920:3561" data-name="Rectangle" />
              <div className="absolute bg-white border-[#e5e7e9] border-[2.5px] border-solid h-[88px] left-[286px] rounded-[16px] top-[40px] w-[32px]" data-node-id="1920:3562" data-name="Rectangle" />
              <div className="absolute left-[298.5px] size-[7px] top-[54.5px]" data-node-id="1920:3563" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse9} />
              </div>
              <div className="absolute left-[298.5px] size-[7px] top-[68.5px]" data-node-id="1920:3564" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse10} />
              </div>
              <div className="absolute left-[293.5px] size-[17px] top-[91.5px]" data-node-id="1920:3565" data-name="Ellipse">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse11} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-[28px] pt-[26px] px-[26px] relative shrink-0 w-full" data-node-id="1920:3566" data-name="Text">
              <div className="bg-[rgba(160,106,205,0.24)] content-stretch flex items-center overflow-clip px-[10px] py-[7px] relative rounded-[999px] shrink-0" data-node-id="2361:2489" data-name="Category chip">
                <p className="[word-break:break-word] font-['Lato:Bold'] h-full leading-[normal] not-italic relative shrink-0 text-[#1d262f] text-[10.5px] text-left tracking-[1.68px] w-[61px]">CREATIVE</p>
              </div>
              <p className="[word-break:break-word] font-['Lato:Bold'] leading-[1.32] min-w-full not-italic relative shrink-0 text-[#1d262f] text-[19px] text-left tracking-[-0.266px] w-[min-content]" data-node-id="1920:3568">
                Creatives That Perform: CTV Creative Best Practices
              </p>
              <p className="[word-break:break-word] font-['Lato:Light'] leading-[1.62] min-w-full not-italic relative shrink-0 text-[#4c5864] text-[15px] text-left w-[min-content]" data-node-id="1920:3569">
                Design the CTA for a remote, not a finger. Faces perform. Get the technical spec right the first time.
              </p>
            </div>
          </a>
          <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="1920:3571" data-name="Spacer" />
        </div>
        <p className="[word-break:break-word] font-['Lato:Light'] leading-[normal] not-italic relative shrink-0 text-[#a2a4a4] text-[12.5px] w-full" data-node-id="1920:3572">
          Explore practical insights from the FeedTV team.
        </p>
      </div>
      <div className="content-stretch flex flex-col items-center px-[120px] py-[92px] relative shrink-0 w-full" data-node-id="1668:3419" style={{ backgroundImage: "linear-gradient(167.5470472061678deg, rgb(0, 181, 173) 14.644%, rgb(27, 155, 194) 85.356%)" }} data-name="Closing CTA">
        <div className="content-stretch flex flex-col gap-[32px] items-center overflow-clip relative shrink-0 w-[840px]" data-node-id="1668:3420" data-name="Copy">
          <p className="[word-break:break-word] font-['Lato:Bold'] leading-[1.27] min-w-full not-italic relative shrink-0 text-[42px] text-center text-white tracking-[-1.008px] w-[min-content]" data-node-id="1668:3421">
            Want This Applied to Your Campaign?
          </p>
          <a className="bg-white content-stretch cursor-pointer flex items-center overflow-clip px-[30px] py-[15px] relative rounded-[999px] shrink-0" data-node-id="1668:3422" data-name="Button · Book a Meeting">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[#008682] text-[15.5px] text-left whitespace-nowrap" data-node-id="1668:3423">
              Book a Meeting
            </p>
          </a>
        </div>
      </div>
      <div className="bg-[#1d262f] content-stretch flex flex-col gap-[44px] items-start overflow-clip pb-[40px] pt-[72px] px-[120px] relative shrink-0 w-full" data-node-id="1668:3424" data-name="Footer">
        <div className="content-stretch flex gap-[40px] items-start overflow-clip relative shrink-0 w-full" data-node-id="I1668:3424;296:23" data-name="Columns">
          <div className="content-stretch flex flex-col gap-[18px] items-start overflow-clip relative shrink-0 w-[380px]" data-node-id="I1668:3424;296:24" data-name="Brand">
            <a className="bg-[rgba(255,255,255,0.01)] content-stretch cursor-pointer flex gap-[10px] h-[30px] items-center relative shrink-0 w-[132px]" data-node-id="I1668:3424;296:25" data-name="Logo">
              <div className="h-[41.202px] relative shrink-0 w-[136.61px]" data-node-id="I1668:3424;4131:5114" data-name="feedtv logo · official">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFeedtvLogoOfficial} />
              </div>
            </a>
            <p className="[word-break:break-word] font-['Lato:Light'] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#8a97a1] text-[15px] w-[min-content]" data-node-id="I1668:3424;296:34">
              Premium CTV inventory, bought direct from the manufacturers. A FeedMob company.
            </p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1668:3424;296:35" data-name="Products">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1668:3424;296:36">
              PRODUCTS
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1668:3424;296:37" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3424;296:38">
              <p className="leading-[normal]">FeedTV Home</p>
            </a>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3424;296:40">
              <p className="leading-[normal]">FeedTV Stream</p>
            </a>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1668:3424;296:42" data-name="About">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1668:3424;296:43">
              ABOUT
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1668:3424;296:44" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3424;296:45">
              <p className="leading-[normal]">Our Team</p>
            </a>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1668:3424;296:47" data-name="Resources">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1668:3424;296:48">
              RESOURCES
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1668:3424;296:49" data-name="Gap" />
            <p className="[word-break:break-word] font-['Lato:Regular'] leading-[normal] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3424;296:50">
              Blog
            </p>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3424;296:52">
              <p className="leading-[normal]">Case Studies</p>
            </a>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3424;296:54">
              <p className="leading-[normal]">Preview Your Ads</p>
            </a>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1668:3424;296:56" data-name="Connect">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1668:3424;296:57">
              CONNECT
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1668:3424;296:58" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" href="https://www.linkedin.com/company/feedmob" data-node-id="I1668:3424;296:59" target="_blank">
              <p className="leading-[normal]">LinkedIn</p>
            </a>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3424;296:61">
              <p className="leading-[normal]">Contact</p>
            </a>
          </div>
        </div>
        <div className="[word-break:break-word] border-[#38424a] border-solid border-t content-stretch flex font-['Lato:Regular'] items-center justify-between leading-[normal] not-italic overflow-clip pt-[26px] relative shrink-0 text-[#8a97a1] text-[13px] w-full whitespace-nowrap" data-node-id="I1668:3424;296:63" data-name="Legal bar">
          <p className="relative shrink-0" data-node-id="I1668:3424;296:64">
            © 2026 FeedTV. A FeedMob company.
          </p>
          <div className="content-stretch flex gap-[22px] items-start overflow-clip relative shrink-0" data-node-id="I1668:3424;296:65" data-name="Legal links">
            <p className="relative shrink-0" data-node-id="I1668:3424;296:66">
              Terms
            </p>
            <p className="relative shrink-0" data-node-id="I1668:3424;296:67">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
      
      
      
    </div>
  );
}
