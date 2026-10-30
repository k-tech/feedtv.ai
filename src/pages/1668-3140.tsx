import React from "react";
const imgIcon = "/assets/1668-3140-imgIcon.svg";
const imgIcon1 = "/assets/1668-3140-imgIcon1.svg";
const imgIcon2 = "/assets/1668-3140-imgIcon2.svg";
const imgIcon3 = "/assets/1668-3140-imgIcon3.svg";
const imgIcon4 = "/assets/1668-3140-imgIcon4.svg";
const imgIcon5 = "/assets/1668-3140-imgIcon5.svg";
const imgIcon6 = "/assets/1668-3140-imgIcon6.svg";
const imgIcon7 = "/assets/1668-3140-imgIcon7.svg";
const imgIcon8 = "/assets/1668-3140-imgIcon8.svg";
const imgIcon9 = "/assets/1668-3140-imgIcon9.svg";
const imgMark = "/assets/1668-3140-imgMark.svg";
const imgKey = "/assets/1668-3140-imgKey.svg";
const imgKey1 = "/assets/1668-3140-imgKey1.svg";
const imgArea = "/assets/1668-3140-imgArea.svg";
const imgSeriesB = "/assets/1668-3140-imgSeriesB.svg";
const imgSeriesA = "/assets/1668-3140-imgSeriesA.svg";
const imgFeedtvLogoOfficial = "/assets/1668-3140-imgFeedtvLogoOfficial.svg";
const imgMark1 = "/assets/1668-3140-imgMark1.svg";
const imgWordmark = "/assets/1668-3140-imgWordmark.svg";
const imgSearchIcon = "/assets/1668-3140-imgSearchIcon.svg";

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

type HoverLift05CleanSupplyAlwaysProps = {
  className?: string;
  state?: "Default" | "Hover";
};

function HoverLift05CleanSupplyAlways({ className, state = "Default" }: HoverLift05CleanSupplyAlwaysProps) {
  const isHover = state === "Hover";
  return (
    <div className={className || "h-[214px] relative w-[589px]"} id={isHover ? "node-1925_4410" : "node-1925_4409"}>
      <div className={`absolute bg-white border-[#e5e7e9] border-solid content-stretch flex flex-col items-start overflow-clip ${isHover ? "border-[1.05px] gap-[14.7px] h-[224.7px] left-[-14.73px] px-[31.5px] py-[33.6px] rounded-[25.2px] shadow-[0px_12px_32px_0px_rgba(28,38,46,0.14)] top-[-5.35px] w-[618.45px]" : "border gap-[14px] h-[214px] left-0 px-[30px] py-[32px] rounded-[24px] top-0 w-[589px]"}`} id={isHover ? "node-1930_2353" : "node-1925_3521"} data-name="Card">
        <div className={`content-stretch flex items-center relative shrink-0 w-full ${isHover ? "gap-[12.6px]" : "gap-[12px]"}`} id={isHover ? "node-1930_2354" : "node-1925_3522"} data-name="Card head">
          <div className={`bg-[rgba(0,181,173,0.09)] relative shrink-0 ${isHover ? "rounded-[14.7px] size-[46.2px]" : "rounded-[14px] size-[44px]"}`} id={isHover ? "node-1930_2355" : "node-1925_3523"} data-name="Medallion">
            <div className={`absolute ${isHover ? "left-[10.5px] size-[25.2px] top-[10.5px]" : "left-[10px] size-[24px] top-[10px]"}`} id={isHover ? "node-1930_2356" : "node-1925_3524"} data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={isHover ? imgIcon1 : imgIcon} />
            </div>
          </div>
          <div className={`flex-[1_0_0] min-w-px relative ${isHover ? "h-[1.05px]" : "h-px"}`} id={isHover ? "node-1930_2359" : "node-1925_3527"} data-name="spacer" />
          <div className={`[word-break:break-word] flex flex-col font-["Lato:Bold"] h-full justify-center leading-[0] not-italic relative shrink-0 text-[#00b5ad] ${isHover ? "text-[15.75px] tracking-[0.945px] w-[585.9px]" : "text-[15px] tracking-[0.9px] w-[558px]"}`}>
            <p className="leading-[normal]">05</p>
          </div>
        </div>
        <p className={`[word-break:break-word] font-["Lato:Bold"] not-italic relative shrink-0 text-[#1d262f] w-full ${isHover ? "leading-[27.3px] text-[21px] tracking-[-0.21px]" : "leading-[26px] text-[20px] tracking-[-0.2px]"}`} id={isHover ? "node-1930_2361" : "node-1925_3529"}>
          Clean supply, always
        </p>
        <p className={`[word-break:break-word] font-["Lato:Light"] not-italic relative shrink-0 text-[#4c5864] w-full ${isHover ? "leading-[26.25px] text-[16.275px]" : "leading-[25px] text-[15.5px]"}`} id={isHover ? "node-1930_2362" : "node-1925_3530"}>
          Authorized-seller-only inventory, with fraud and SSAI screening on every impression before it’s ever bid on.
        </p>
      </div>
    </div>
  );
}

type HoverLift04CrossScreenAttributionProps = {
  className?: string;
  state?: "Default" | "Hover";
};

function HoverLift04CrossScreenAttribution({ className, state = "Default" }: HoverLift04CrossScreenAttributionProps) {
  const isHover = state === "Hover";
  return (
    <div className={className || "h-[214px] relative w-[589px]"} id={isHover ? "node-1925_4383" : "node-1925_4382"}>
      <div className={`absolute bg-white border-[#e5e7e9] border-solid content-stretch flex flex-col items-start overflow-clip ${isHover ? "border-[1.05px] gap-[14.7px] h-[224.7px] left-[-14.73px] px-[31.5px] py-[33.6px] rounded-[25.2px] shadow-[0px_12px_32px_0px_rgba(28,38,46,0.14)] top-[-5.35px] w-[618.45px]" : "border gap-[14px] h-[214px] left-0 px-[30px] py-[32px] rounded-[24px] top-0 w-[589px]"}`} id={isHover ? "node-1930_2342" : "node-1925_3510"} data-name="Card">
        <div className={`content-stretch flex items-center relative shrink-0 w-full ${isHover ? "gap-[12.6px]" : "gap-[12px]"}`} id={isHover ? "node-1930_2343" : "node-1925_3511"} data-name="Card head">
          <div className={`bg-[rgba(0,181,173,0.09)] relative shrink-0 ${isHover ? "rounded-[14.7px] size-[46.2px]" : "rounded-[14px] size-[44px]"}`} id={isHover ? "node-1930_2344" : "node-1925_3512"} data-name="Medallion">
            <div className={`absolute ${isHover ? "left-[10.5px] size-[25.2px] top-[10.5px]" : "left-[10px] size-[24px] top-[10px]"}`} id={isHover ? "node-1930_2345" : "node-1925_3513"} data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={isHover ? imgIcon3 : imgIcon2} />
            </div>
          </div>
          <div className={`flex-[1_0_0] min-w-px relative ${isHover ? "h-[1.05px]" : "h-px"}`} id={isHover ? "node-1930_2349" : "node-1925_3517"} data-name="spacer" />
          <div className={`[word-break:break-word] flex flex-col font-["Lato:Bold"] h-full justify-center leading-[0] not-italic relative shrink-0 text-[#00b5ad] ${isHover ? "text-[15.75px] tracking-[0.945px] w-[553.35px]" : "text-[15px] tracking-[0.9px] w-[527px]"}`}>
            <p className="leading-[normal]">04</p>
          </div>
        </div>
        <p className={`[word-break:break-word] font-["Lato:Bold"] not-italic relative shrink-0 text-[#1d262f] w-full ${isHover ? "leading-[27.3px] text-[21px] tracking-[-0.21px]" : "leading-[26px] text-[20px] tracking-[-0.2px]"}`} id={isHover ? "node-1930_2351" : "node-1925_3519"}>
          Cross-screen attribution
        </p>
        <p className={`[word-break:break-word] font-["Lato:Light"] not-italic relative shrink-0 text-[#4c5864] w-full ${isHover ? "leading-[26.25px] text-[16.275px]" : "leading-[25px] text-[15.5px]"}`} id={isHover ? "node-1930_2352" : "node-1925_3520"}>
          Every CTV exposure is tied back to the mobile conversion it drove, so the credit lands where it’s earned — no more losing the channel to last-touch.
        </p>
      </div>
    </div>
  );
}

type HoverLift03OutcomeBasedBuyingProps = {
  className?: string;
  state?: "Default" | "Hover";
};

function HoverLift03OutcomeBasedBuying({ className, state = "Default" }: HoverLift03OutcomeBasedBuyingProps) {
  const isHover = state === "Hover";
  return (
    <div className={className || "h-[264px] relative w-[385.333px]"} id={isHover ? "node-1925_4355" : "node-1925_4354"}>
      <div className={`absolute bg-white border-[#e5e7e9] border-solid content-stretch flex flex-col items-start overflow-clip ${isHover ? "border-[1.05px] gap-[14.7px] h-[277.2px] left-[-9.63px] px-[31.5px] py-[33.6px] rounded-[25.2px] shadow-[0px_12px_32px_0px_rgba(28,38,46,0.14)] top-[-6.6px] w-[404.6px]" : "border gap-[14px] h-[264px] left-0 px-[30px] py-[32px] rounded-[24px] top-0 w-[385.333px]"}`} id={isHover ? "node-1930_2331" : "node-1925_3498"} data-name="Card">
        <div className={`content-stretch flex items-center relative shrink-0 w-full ${isHover ? "gap-[12.6px]" : "gap-[12px]"}`} id={isHover ? "node-1930_2332" : "node-1925_3499"} data-name="Card head">
          <div className={`bg-[rgba(0,181,173,0.09)] relative shrink-0 ${isHover ? "rounded-[14.7px] size-[46.2px]" : "rounded-[14px] size-[44px]"}`} id={isHover ? "node-1930_2333" : "node-1925_3500"} data-name="Medallion">
            <div className={`absolute ${isHover ? "left-[10.5px] size-[25.2px] top-[10.5px]" : "left-[10px] size-[24px] top-[10px]"}`} id={isHover ? "node-1930_2334" : "node-1925_3501"} data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={isHover ? imgIcon5 : imgIcon4} />
            </div>
          </div>
          <div className={`flex-[1_0_0] min-w-px relative ${isHover ? "h-[1.05px]" : "h-px"}`} id={isHover ? "node-1930_2338" : "node-1925_3505"} data-name="spacer" />
          <div className={`[word-break:break-word] flex flex-col font-["Lato:Bold"] h-full justify-center leading-[0] not-italic relative shrink-0 text-[#00b5ad] ${isHover ? "text-[15.75px] tracking-[0.945px] w-[553.35px]" : "text-[15px] tracking-[0.9px] w-[527px]"}`}>
            <p className="leading-[normal]">03</p>
          </div>
        </div>
        <p className={`[word-break:break-word] font-["Lato:Bold"] not-italic relative shrink-0 text-[#1d262f] w-full ${isHover ? "leading-[27.3px] text-[21px] tracking-[-0.21px]" : "leading-[26px] text-[20px] tracking-[-0.2px]"}`} id={isHover ? "node-1930_2340" : "node-1925_3507"}>
          Outcome-based buying
        </p>
        <p className={`[word-break:break-word] font-["Lato:Light"] not-italic relative shrink-0 text-[#4c5864] w-full ${isHover ? "leading-[26.25px] text-[16.275px]" : "leading-[25px] text-[15.5px]"}`} id={isHover ? "node-1930_2341" : "node-1925_3508"}>
          We buy to installs, in-app events, and incremental reach — priced against results, not raw impressions.
        </p>
      </div>
    </div>
  );
}

type HoverLift02MachineLearningNotGuessworkProps = {
  className?: string;
  state?: "Default" | "Hover";
};

function HoverLift02MachineLearningNotGuesswork({ className, state = "Default" }: HoverLift02MachineLearningNotGuessworkProps) {
  const isHover = state === "Hover";
  return (
    <div className={className || "h-[264px] relative w-[385.333px]"} id={isHover ? "node-1925_4326" : "node-1925_4325"}>
      <div className={`absolute bg-white border-[#e5e7e9] border-solid content-stretch flex flex-col items-start overflow-clip ${isHover ? "border-[1.05px] gap-[14.7px] h-[277.2px] left-[-9.63px] px-[31.5px] py-[33.6px] rounded-[25.2px] shadow-[0px_12px_32px_0px_rgba(28,38,46,0.14)] top-[-6.6px] w-[404.6px]" : "border gap-[14px] h-[264px] left-0 px-[30px] py-[32px] rounded-[24px] top-0 w-[385.333px]"}`} id={isHover ? "node-1930_2319" : "node-1925_3486"} data-name="Card">
        <div className={`content-stretch flex items-center relative shrink-0 w-full ${isHover ? "gap-[12.6px]" : "gap-[12px]"}`} id={isHover ? "node-1930_2320" : "node-1925_3487"} data-name="Card head">
          <div className={`bg-[rgba(0,181,173,0.09)] relative shrink-0 ${isHover ? "rounded-[14.7px] size-[46.2px]" : "rounded-[14px] size-[44px]"}`} id={isHover ? "node-1930_2321" : "node-1925_3488"} data-name="Medallion">
            <div className={`absolute ${isHover ? "left-[10.5px] size-[25.2px] top-[10.5px]" : "left-[10px] size-[24px] top-[10px]"}`} id={isHover ? "node-1930_2322" : "node-1925_3489"} data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={isHover ? imgIcon7 : imgIcon6} />
            </div>
          </div>
          <div className={`flex-[1_0_0] min-w-px relative ${isHover ? "h-[1.05px]" : "h-px"}`} id={isHover ? "node-1930_2327" : "node-1925_3494"} data-name="spacer" />
          <div className={`[word-break:break-word] flex flex-col font-["Lato:Bold"] h-full justify-center leading-[0] not-italic relative shrink-0 text-[#00b5ad] ${isHover ? "text-[15.75px] tracking-[0.945px] w-[553.35px]" : "text-[15px] tracking-[0.9px] w-[527px]"}`}>
            <p className="leading-[normal]">02</p>
          </div>
        </div>
        <p className={`[word-break:break-word] font-["Lato:Bold"] not-italic relative shrink-0 text-[#1d262f] w-full ${isHover ? "leading-[27.3px] text-[21px] tracking-[-0.21px]" : "leading-[26px] text-[20px] tracking-[-0.2px]"}`} id={isHover ? "node-1930_2329" : "node-1925_3496"}>
          Machine learning, not guesswork
        </p>
        <p className={`[word-break:break-word] font-["Lato:Light"] not-italic relative shrink-0 text-[#4c5864] w-full ${isHover ? "leading-[26.25px] text-[16.275px]" : "leading-[25px] text-[15.5px]"}`} id={isHover ? "node-1930_2330" : "node-1925_3497"}>
          Our models are trained continuously against live performance data to find which signals actually move the needle — down to granular targeting most platforms never surface.
        </p>
      </div>
    </div>
  );
}

type HoverLift01RealTimeBidDecisionsProps = {
  className?: string;
  state?: "Default" | "Hover";
};

function HoverLift01RealTimeBidDecisions({ className, state = "Default" }: HoverLift01RealTimeBidDecisionsProps) {
  const isHover = state === "Hover";
  return (
    <div className={className || "h-[264px] relative w-[385.333px]"} id={isHover ? "node-1925_4296" : "node-1925_4295"}>
      <div className={`absolute bg-white border-[#e5e7e9] border-solid content-stretch flex flex-col items-start overflow-clip ${isHover ? "border-[1.05px] gap-[14.7px] h-[277.2px] left-[-9.63px] px-[31.5px] py-[33.6px] rounded-[25.2px] shadow-[0px_12px_32px_0px_rgba(28,38,46,0.14)] top-[-6.6px] w-[404.6px]" : "border gap-[14px] h-[264px] left-0 px-[30px] py-[32px] rounded-[24px] top-0 w-[385.333px]"}`} id={isHover ? "node-1930_2307" : "node-1925_3474"} data-name="Card">
        <div className={`content-stretch flex items-center relative shrink-0 w-full ${isHover ? "gap-[12.6px]" : "gap-[12px]"}`} id={isHover ? "node-1930_2308" : "node-1925_3475"} data-name="Card head">
          <div className={`bg-[rgba(0,181,173,0.09)] relative shrink-0 ${isHover ? "rounded-[14.7px] size-[46.2px]" : "rounded-[14px] size-[44px]"}`} id={isHover ? "node-1930_2309" : "node-1925_3476"} data-name="Medallion">
            <div className={`absolute ${isHover ? "left-[10.5px] size-[25.2px] top-[10.5px]" : "left-[10px] size-[24px] top-[10px]"}`} id={isHover ? "node-1930_2310" : "node-1925_3477"} data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={isHover ? imgIcon9 : imgIcon8} />
            </div>
          </div>
          <div className={`flex-[1_0_0] min-w-px relative ${isHover ? "h-[1.05px]" : "h-px"}`} id={isHover ? "node-1930_2315" : "node-1925_3482"} data-name="spacer" />
          <div className={`[word-break:break-word] flex flex-col font-["Lato:Bold"] h-full justify-center leading-[0] not-italic relative shrink-0 text-[#00b5ad] ${isHover ? "text-[15.75px] tracking-[0.945px] w-[553.35px]" : "text-[15px] tracking-[0.9px] w-[527px]"}`}>
            <p className="leading-[normal]">01</p>
          </div>
        </div>
        <p className={`[word-break:break-word] font-["Lato:Bold"] not-italic relative shrink-0 text-[#1d262f] w-full ${isHover ? "leading-[27.3px] text-[21px] tracking-[-0.21px]" : "leading-[26px] text-[20px] tracking-[-0.2px]"}`} id={isHover ? "node-1930_2317" : "node-1925_3484"}>
          Real-time bid decisions
        </p>
        <p className={`[word-break:break-word] font-["Lato:Light"] not-italic relative shrink-0 text-[#4c5864] w-full ${isHover ? "leading-[26.25px] text-[16.275px]" : "leading-[25px] text-[15.5px]"}`} id={isHover ? "node-1930_2318" : "node-1925_3485"}>
          Every bid request — device, location, app, and 200+ signals — is scored by our models. We only bid where the data says it’s worth it, and only at the price that makes sense.
        </p>
      </div>
    </div>
  );
}

type Reveal03DspNotAnExchangeProps = {
  className?: string;
  state?: "End" | "Start";
};

function Reveal03DspNotAnExchange({ className, state = "End" }: Reveal03DspNotAnExchangeProps) {
  const isStart = state === "Start";
  return (
    <div className={className || "h-[357px] relative w-[1440px]"} id={isStart ? "node-1871_2383" : "node-1871_2382"} style={{ backgroundImage: "linear-gradient(166.07615615152093deg, rgb(0, 181, 173) 14.644%, rgb(27, 155, 194) 85.356%)" }}>
      <div className={`-translate-x-1/2 [word-break:break-word] absolute h-[157px] left-1/2 not-italic overflow-clip text-center text-white top-[100px] w-[940px] ${isStart ? "" : ""}`} id={isStart ? "node-1871_2379" : "node-1871_2375"} data-name="Copy">
        <p className="absolute font-['Lato:Bold'] leading-[1.27] left-0 right-0 text-[40px] top-0 tracking-[-0.96px]" id={isStart ? "node-1871_2380" : "node-1871_2376"}>
          An AI-Powered Platform Built for CTV Performance
        </p>
        <p className="absolute font-['Lato:Regular'] leading-[1.72] left-0 right-0 text-[18px] top-[64px]" id={isStart ? "node-1871_2381" : "node-1871_2377"}>
          FeedTV Stream uses a custom, in-house bidder built right into our programmatic infrastructure. It analyzes every bid request in milliseconds to decide exactly when to bid and at what price. Unlock FeedTV’s exclusive, private supply for a fully programmatic, AI-driven algorithm operating with over 200 real-time parameters.
        </p>
      </div>
    </div>
  );
}

export default function Component03FeedTvStream() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pt-[88px] relative size-full" data-node-id="1668:3140" data-name="03 · FeedTV Stream">
      <div className="content-stretch flex flex-col items-start pb-[84px] pt-[88px] px-[120px] relative shrink-0 w-full" data-node-id="1668:3141" data-name="Hero">
        <div className="content-stretch flex gap-[56px] items-center overflow-clip relative shrink-0 w-full" data-node-id="1668:3142" data-name="Row">
          <div className="content-stretch flex flex-col gap-[20px] h-[407px] items-start overflow-clip relative shrink-0 w-[556px]" data-node-id="1668:3143" data-name="Copy">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[#00b5ad] text-[12px] tracking-[1.92px] whitespace-nowrap" data-node-id="1668:3144">
              FEEDTV STREAM
            </p>
            <h1 className="[word-break:break-word] font-['Lato:Bold'] leading-[0] min-w-full not-italic relative shrink-0 text-[#1d262f] text-[48px] tracking-[-1.344px] w-[min-content] whitespace-pre-wrap" data-node-id="1668:3145">
              <span className="block leading-[1.27] mb-0">{`The AI-Powered DSP Built for CTV `}</span>
              <span className="block leading-[1.27]">User Acquisition</span>
            </h1>
            <p className="[word-break:break-word] font-['Lato:Light'] leading-[1.68] min-w-full not-italic relative shrink-0 text-[#4c5864] text-[18px] w-[min-content]" data-node-id="1668:3146">
              Our own machine-learning algorithm makes a bid decision on every impression in real time — optimizing toward the install, event, or ROAS target you already hold your mobile channels to.
            </p>
            <a className="bg-[#00b5ad] content-stretch cursor-pointer flex items-center overflow-clip px-[30px] py-[15px] relative rounded-[999px] shrink-0" data-node-id="1668:3147" data-name="Button · Get In Touch">
              <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[15.5px] text-left text-white whitespace-nowrap" data-node-id="1668:3148">
                Get In Touch
              </p>
            </a>
          </div>
          <div className="content-stretch flex flex-col h-[352px] items-center justify-center overflow-clip px-[32px] py-[30px] relative rounded-[24px] shrink-0 w-[520px]" data-node-id="1668:3149" style={{ backgroundImage: "linear-gradient(145.90502204523446deg, rgb(0, 181, 173) 14.644%, rgb(27, 155, 194) 85.356%)" }} data-name="Product UI mock">
            <div className="bg-white content-stretch flex flex-[1_0_0] items-start min-h-px overflow-clip relative rounded-[16px] shadow-[0px_12px_28px_0px_rgba(5,33,41,0.2)] w-full" data-node-id="1668:3150" data-name="Panel">
              <div className="bg-[#f7f8f9] content-stretch flex flex-col gap-[14px] h-full items-center px-[14px] py-[16px] relative shrink-0 w-[44px]" data-node-id="1668:3151" data-name="Icon rail">
                <div className="bg-[#00b5ad] relative rounded-[5px] shrink-0 size-[16px]" data-node-id="1668:3152" data-name="glyph" />
                <div className="bg-[rgba(178,183,189,0.45)] relative rounded-[5px] shrink-0 size-[16px]" data-node-id="1668:3153" data-name="glyph" />
                <div className="bg-[rgba(178,183,189,0.45)] relative rounded-[5px] shrink-0 size-[16px]" data-node-id="1668:3154" data-name="glyph" />
                <div className="bg-[rgba(178,183,189,0.45)] relative rounded-[5px] shrink-0 size-[16px]" data-node-id="1668:3155" data-name="glyph" />
                <div className="bg-[rgba(178,183,189,0.45)] relative rounded-[5px] shrink-0 size-[16px]" data-node-id="1668:3156" data-name="glyph" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" data-node-id="1668:3157" data-name="Main">
                <div className="content-stretch flex gap-[10px] items-center px-[18px] py-[14px] relative shrink-0 w-full" data-node-id="1668:3158" data-name="Top bar">
                  <div className="relative shrink-0 size-[16px]" data-node-id="1668:3159" data-name="mark">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMark} />
                  </div>
                  <div className="bg-[rgba(178,183,189,0.55)] h-[7px] relative rounded-[3.5px] shrink-0 w-[78px]" data-node-id="1668:3160" data-name="label" />
                  <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="1668:3161" data-name="spacer" />
                  <div className="bg-[rgba(178,183,189,0.3)] h-[18px] relative rounded-[999px] shrink-0 w-[48px]" data-node-id="1668:3162" data-name="pill" />
                  <div className="bg-[rgba(0,181,173,0.16)] h-[18px] relative rounded-[999px] shrink-0 w-[34px]" data-node-id="1668:3163" data-name="pill · active" />
                </div>
                <div className="bg-[#e5e7e9] h-px relative shrink-0 w-full" data-node-id="1668:3164" data-name="Divider" />
                <div className="content-stretch flex flex-col gap-[12px] items-start pb-[10px] pt-[16px] px-[18px] relative shrink-0 w-full" data-node-id="1668:3165" data-name="Chart">
                  <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-node-id="1668:3166" data-name="Legend">
                    <div className="h-[6px] relative shrink-0 w-[50px]" data-node-id="1668:3167" data-name="key">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgKey} />
                    </div>
                    <div className="h-[6px] relative shrink-0 w-[42px]" data-node-id="1668:3170" data-name="key">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgKey1} />
                    </div>
                  </div>
                  <div className="h-[104px] relative shrink-0 w-full" data-node-id="1668:3173" data-name="Plot">
                    <div className="absolute inset-[0_0_22px_0]" data-node-id="1668:3174" data-name="Area">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArea} />
                    </div>
                    <div className="absolute inset-[0_0_72px_0]" data-node-id="1668:3175" data-name="Series B">
                      <div className="absolute inset-[-3.13%_-0.27%]">
                        <img alt="" className="block max-w-none size-full" src={imgSeriesB} />
                      </div>
                    </div>
                    <div className="absolute inset-[0_0_52px_0]" data-node-id="1668:3176" data-name="Series A">
                      <div className="absolute inset-[-1.92%_-0.27%]">
                        <img alt="" className="block max-w-none size-full" src={imgSeriesA} />
                      </div>
                    </div>
                    <div className="absolute bg-[#e5e7e9] bottom-0 h-px left-0 right-0" data-node-id="1668:3177" data-name="Baseline" />
                  </div>
                </div>
                <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="1668:3178" data-name="spacer" />
                <div className="content-stretch flex flex-col gap-[13px] items-start pb-[16px] px-[18px] relative shrink-0 w-full" data-node-id="1668:3179" data-name="Rows">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="1668:3180" data-name="row">
                    <div className="bg-[rgba(178,183,189,0.55)] h-[6px] relative rounded-[3px] shrink-0 w-[70px]" data-node-id="1668:3181" data-name="label" />
                    <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="1668:3182" data-name="spacer" />
                    <div className="bg-[#e5e7e9] h-[6px] overflow-clip relative rounded-[3px] shrink-0 w-[130px]" data-node-id="1668:3183" data-name="track">
                      <div className="absolute bg-[#00b5ad] h-[6px] left-0 rounded-[3px] top-0 w-[94px]" data-node-id="1668:3184" data-name="value" />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="1668:3185" data-name="row">
                    <div className="bg-[rgba(178,183,189,0.55)] h-[6px] relative rounded-[3px] shrink-0 w-[92px]" data-node-id="1668:3186" data-name="label" />
                    <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="1668:3187" data-name="spacer" />
                    <div className="bg-[#e5e7e9] h-[6px] overflow-clip relative rounded-[3px] shrink-0 w-[130px]" data-node-id="1668:3188" data-name="track">
                      <div className="absolute bg-[rgba(178,183,189,0.55)] h-[6px] left-0 rounded-[3px] top-0 w-[70px]" data-node-id="1668:3189" data-name="value" />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="1668:3190" data-name="row">
                    <div className="bg-[rgba(178,183,189,0.55)] h-[6px] relative rounded-[3px] shrink-0 w-[64px]" data-node-id="1668:3191" data-name="label" />
                    <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="1668:3192" data-name="spacer" />
                    <div className="bg-[#e5e7e9] h-[6px] overflow-clip relative rounded-[3px] shrink-0 w-[130px]" data-node-id="1668:3193" data-name="track">
                      <div className="absolute bg-[#00b5ad] h-[6px] left-0 rounded-[3px] top-0 w-[53px]" data-node-id="1668:3194" data-name="value" />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="1668:3195" data-name="row">
                    <div className="bg-[rgba(178,183,189,0.55)] h-[6px] relative rounded-[3px] shrink-0 w-[80px]" data-node-id="1668:3196" data-name="label" />
                    <div className="flex-[1_0_0] h-px min-w-px relative" data-node-id="1668:3197" data-name="spacer" />
                    <div className="bg-[#e5e7e9] h-[6px] overflow-clip relative rounded-[3px] shrink-0 w-[130px]" data-node-id="1668:3198" data-name="track">
                      <div className="absolute bg-[rgba(178,183,189,0.55)] h-[6px] left-0 rounded-[3px] top-0 w-[36px]" data-node-id="1668:3199" data-name="value" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Reveal03DspNotAnExchange className="h-[357px] relative shrink-0 w-full" state="End" />
      <div className="content-stretch flex flex-col gap-[22px] items-start px-[120px] py-[100px] relative shrink-0 w-full" data-node-id="1925:3470" data-name="How FeedTV Stream Works">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1925:3471" data-name="Head">
          <p className="[word-break:break-word] font-['Lato:Bold'] leading-[1.27] not-italic relative shrink-0 text-[#1d262f] text-[40px] tracking-[-0.96px] w-full" data-node-id="1925:3472">
            Five Things the Bidder Does
          </p>
        </div>
        <div className="content-stretch flex gap-[22px] items-start relative shrink-0 w-full" data-node-id="1925:3473" data-name="Row">
          <HoverLift01RealTimeBidDecisions className="flex-[1_0_0] h-[264px] min-w-px relative" />
          <HoverLift02MachineLearningNotGuesswork className="flex-[1_0_0] h-[264px] min-w-px relative" />
          <HoverLift03OutcomeBasedBuying className="flex-[1_0_0] h-[264px] min-w-px relative" />
        </div>
        <div className="content-stretch flex gap-[22px] items-start relative shrink-0 w-full" data-node-id="1925:3509" data-name="Row">
          <HoverLift04CrossScreenAttribution className="flex-[1_0_0] h-[214px] min-w-px relative" />
          <HoverLift05CleanSupplyAlways className="flex-[1_0_0] h-[214px] min-w-px relative" />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-center px-[120px] py-[92px] relative shrink-0 w-full" data-node-id="1668:3265" style={{ backgroundImage: "linear-gradient(165.5525722197323deg, rgb(0, 181, 173) 14.644%, rgb(27, 155, 194) 85.356%)" }} data-name="Closing CTA">
        <div className="content-stretch flex flex-col gap-[32px] items-center overflow-clip relative shrink-0 w-[840px]" data-node-id="1668:3266" data-name="Copy">
          <div className="[word-break:break-word] font-['Lato:Bold'] leading-[0] min-w-full not-italic relative shrink-0 text-[42px] text-center text-white tracking-[-1.008px] w-[min-content] whitespace-pre-wrap" data-node-id="1668:3267">
            <p className="leading-[1.27] mb-0">{`Programmatic Access. AI-Powered. `}</p>
            <p className="leading-[1.27]">Built for Performance.</p>
          </div>
          <a className="bg-white content-stretch cursor-pointer flex items-center overflow-clip px-[30px] py-[15px] relative rounded-[999px] shrink-0" data-node-id="1668:3268" data-name="Button · Book a Meeting">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[#008682] text-[15.5px] text-left whitespace-nowrap" data-node-id="1668:3269">
              Book a Meeting
            </p>
          </a>
        </div>
      </div>
      <div className="bg-[#1d262f] content-stretch flex flex-col gap-[44px] items-start overflow-clip pb-[40px] pt-[72px] px-[120px] relative shrink-0 w-full" data-node-id="1668:3270" data-name="Footer">
        <div className="content-stretch flex gap-[40px] items-start overflow-clip relative shrink-0 w-full" data-node-id="I1668:3270;296:23" data-name="Columns">
          <div className="content-stretch flex flex-col gap-[18px] items-start overflow-clip relative shrink-0 w-[380px]" data-node-id="I1668:3270;296:24" data-name="Brand">
            <a className="bg-[rgba(255,255,255,0.01)] content-stretch cursor-pointer flex gap-[10px] h-[30px] items-center relative shrink-0 w-[132px]" data-node-id="I1668:3270;296:25" data-name="Logo">
              <div className="h-[41.202px] relative shrink-0 w-[136.61px]" data-node-id="I1668:3270;4131:5114" data-name="feedtv logo · official">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFeedtvLogoOfficial} />
              </div>
            </a>
            <p className="[word-break:break-word] font-['Lato:Light'] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#8a97a1] text-[15px] w-[min-content]" data-node-id="I1668:3270;296:34">
              Premium CTV inventory, bought direct from the manufacturers. A FeedMob company.
            </p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1668:3270;296:35" data-name="Products">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1668:3270;296:36">
              PRODUCTS
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1668:3270;296:37" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3270;296:38">
              <p className="leading-[normal]">FeedTV Home</p>
            </a>
            <p className="[word-break:break-word] font-['Lato:Regular'] leading-[normal] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3270;296:40">
              FeedTV Stream
            </p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1668:3270;296:42" data-name="About">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1668:3270;296:43">
              ABOUT
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1668:3270;296:44" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3270;296:45">
              <p className="leading-[normal]">Our Team</p>
            </a>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1668:3270;296:47" data-name="Resources">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1668:3270;296:48">
              RESOURCES
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1668:3270;296:49" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3270;296:50">
              <p className="leading-[normal]">Blog</p>
            </a>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3270;296:52">
              <p className="leading-[normal]">Case Studies</p>
            </a>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3270;296:54">
              <p className="leading-[normal]">Preview Your Ads</p>
            </a>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1668:3270;296:56" data-name="Connect">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1668:3270;296:57">
              CONNECT
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1668:3270;296:58" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" href="https://www.linkedin.com/company/feedmob" data-node-id="I1668:3270;296:59" target="_blank">
              <p className="leading-[normal]">LinkedIn</p>
            </a>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3270;296:61">
              <p className="leading-[normal]">Contact</p>
            </a>
          </div>
        </div>
        <div className="[word-break:break-word] border-[#38424a] border-solid border-t content-stretch flex font-['Lato:Regular'] items-center justify-between leading-[normal] not-italic overflow-clip pt-[26px] relative shrink-0 text-[#8a97a1] text-[13px] w-full whitespace-nowrap" data-node-id="I1668:3270;296:63" data-name="Legal bar">
          <p className="relative shrink-0" data-node-id="I1668:3270;296:64">
            © 2026 FeedTV. A FeedMob company.
          </p>
          <div className="content-stretch flex gap-[22px] items-start overflow-clip relative shrink-0" data-node-id="I1668:3270;296:65" data-name="Legal links">
            <p className="relative shrink-0" data-node-id="I1668:3270;296:66">
              Terms
            </p>
            <p className="relative shrink-0" data-node-id="I1668:3270;296:67">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
      
      
      
    </div>
  );
}
