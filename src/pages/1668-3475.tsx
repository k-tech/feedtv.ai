import { PreviewGate } from "../shared";
import React from "react";
const imgImgPreviewYourAdsMock = "/assets/1668-3475-imgImgPreviewYourAdsMock.png";
const imgFeedtvLogoOfficial = "/assets/1668-3475-imgFeedtvLogoOfficial.svg";
const imgMark = "/assets/1668-3475-imgMark.svg";
const imgWordmark = "/assets/1668-3475-imgWordmark.svg";
const imgSearchIcon = "/assets/1668-3475-imgSearchIcon.svg";

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

export default function Component07PreviewYourAds() {
  return (
    <div className="bg-white relative size-full" data-node-id="1668:3475" data-name="07 · Preview Your Ads">
      <div className="absolute content-stretch flex flex-col items-center left-0 pb-[44px] pt-[96px] px-[120px] right-0 top-[88px]" data-node-id="1668:3476" data-name="Hero">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[18px] items-center not-italic overflow-clip relative shrink-0 text-center w-[880px]" data-node-id="1668:3477" data-name="Copy">
          <h1 className="font-['Lato:Bold'] leading-[1.27] relative shrink-0 text-[#1d262f] text-[50px] tracking-[-1.4px] w-full" data-node-id="1668:3479">
            See Your Creative on the Big Screen
          </h1>
          <p className="font-['Lato:Light'] leading-[1.68] relative shrink-0 text-[#4c5864] text-[19px] w-full" data-node-id="1668:3480">
            Upload your home screen or use our generative AI tool to see exactly how it renders on a real OEM home screen — before a single impression is bought.
          </p>
        </div>
      </div>
      <PreviewGate />
      <div className="absolute content-stretch flex flex-col items-start left-0 pb-[70px] pt-[20px] px-[120px] top-[889px] w-[1440px]" data-node-id="1892:2473" data-name="Previewer">
        <div className="content-stretch cursor-pointer flex gap-[13px] items-start justify-center overflow-clip relative shrink-0 w-full" data-node-id="1892:2474" data-name="CTAs">
          <a className="bg-[#00b5ad] content-stretch flex items-center overflow-clip px-[30px] py-[15px] relative rounded-[999px] shrink-0" href="https://ctv-ad-previewer.feedmob.com/" data-node-id="1892:2475" target="_blank" data-name="Button · Open the CTV Ad Previewer  ↗">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[15.5px] text-left text-white whitespace-pre" data-node-id="1892:2476">{`Open the CTV Ad Previewer  ↗`}</p>
          </a>
          <a className="border-2 border-[#b2b7bd] border-solid content-stretch flex items-center overflow-clip px-[30px] py-[15px] relative rounded-[999px] shrink-0" data-node-id="1892:2477" data-name="Button · Talk to us about creative">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[#1d262f] text-[15.5px] text-left whitespace-nowrap" data-node-id="1892:2478">
              Talk to us about creative
            </p>
          </a>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-center left-0 px-[120px] py-[92px] right-0 top-[1032px]" data-node-id="1668:3489" style={{ backgroundImage: "linear-gradient(167.5470472061678deg, rgb(0, 181, 173) 14.644%, rgb(27, 155, 194) 85.356%)" }} data-name="Closing CTA">
        <div className="content-stretch flex flex-col gap-[32px] items-center overflow-clip relative shrink-0 w-[840px]" data-node-id="1668:3490" data-name="Copy">
          <p className="[word-break:break-word] font-['Lato:Bold'] leading-[1.27] min-w-full not-italic relative shrink-0 text-[42px] text-center text-white tracking-[-1.008px] w-[min-content]" data-node-id="1668:3491">
            Ready to See It Live?
          </p>
          <a className="bg-white content-stretch cursor-pointer flex items-center overflow-clip px-[30px] py-[15px] relative rounded-[999px] shrink-0" data-node-id="1668:3492" data-name="Button · Book a Meeting">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[#008682] text-[15.5px] text-left whitespace-nowrap" data-node-id="1668:3493">
              Book a Meeting
            </p>
          </a>
        </div>
      </div>
      <div className="absolute bg-[#1d262f] content-stretch flex flex-col gap-[44px] items-start left-0 overflow-clip pb-[40px] pt-[72px] px-[120px] right-0 top-[1334px]" data-node-id="1668:3494" data-name="Footer">
        <div className="content-stretch flex gap-[40px] items-start overflow-clip relative shrink-0 w-full" data-node-id="I1668:3494;296:23" data-name="Columns">
          <div className="content-stretch flex flex-col gap-[18px] items-start overflow-clip relative shrink-0 w-[380px]" data-node-id="I1668:3494;296:24" data-name="Brand">
            <a className="bg-[rgba(255,255,255,0.01)] content-stretch cursor-pointer flex gap-[10px] h-[30px] items-center relative shrink-0 w-[132px]" data-node-id="I1668:3494;296:25" data-name="Logo">
              <div className="h-[41.202px] relative shrink-0 w-[136.61px]" data-node-id="I1668:3494;4131:5114" data-name="feedtv logo · official">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFeedtvLogoOfficial} />
              </div>
            </a>
            <p className="[word-break:break-word] font-['Lato:Light'] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#8a97a1] text-[15px] w-[min-content]" data-node-id="I1668:3494;296:34">
              Premium CTV inventory, bought direct from the manufacturers. A FeedMob company.
            </p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1668:3494;296:35" data-name="Products">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1668:3494;296:36">
              PRODUCTS
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1668:3494;296:37" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3494;296:38">
              <p className="leading-[normal]">FeedTV Home</p>
            </a>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3494;296:40">
              <p className="leading-[normal]">FeedTV Stream</p>
            </a>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1668:3494;296:42" data-name="About">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1668:3494;296:43">
              ABOUT
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1668:3494;296:44" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3494;296:45">
              <p className="leading-[normal]">Our Team</p>
            </a>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1668:3494;296:47" data-name="Resources">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1668:3494;296:48">
              RESOURCES
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1668:3494;296:49" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3494;296:50">
              <p className="leading-[normal]">Blog</p>
            </a>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3494;296:52">
              <p className="leading-[normal]">Case Studies</p>
            </a>
            <p className="[word-break:break-word] font-['Lato:Regular'] leading-[normal] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3494;296:54">
              Preview Your Ads
            </p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1668:3494;296:56" data-name="Connect">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1668:3494;296:57">
              CONNECT
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1668:3494;296:58" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" href="https://www.linkedin.com/company/feedmob" data-node-id="I1668:3494;296:59" target="_blank">
              <p className="leading-[normal]">LinkedIn</p>
            </a>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3494;296:61">
              <p className="leading-[normal]">Contact</p>
            </a>
          </div>
        </div>
        <div className="[word-break:break-word] border-[#38424a] border-solid border-t content-stretch flex font-['Lato:Regular'] items-center justify-between leading-[normal] not-italic overflow-clip pt-[26px] relative shrink-0 text-[#8a97a1] text-[13px] w-full whitespace-nowrap" data-node-id="I1668:3494;296:63" data-name="Legal bar">
          <p className="relative shrink-0" data-node-id="I1668:3494;296:64">
            © 2026 FeedTV. A FeedMob company.
          </p>
          <div className="content-stretch flex gap-[22px] items-start overflow-clip relative shrink-0" data-node-id="I1668:3494;296:65" data-name="Legal links">
            <p className="relative shrink-0" data-node-id="I1668:3494;296:66">
              Terms
            </p>
            <p className="relative shrink-0" data-node-id="I1668:3494;296:67">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
      
      
      
    </div>
  );
}
