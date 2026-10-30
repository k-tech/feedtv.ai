import React from "react";
const imgImgOemReach = "/assets/1668-2932-imgImgOemReach.png";
const imgIcon = "/assets/1668-2932-imgIcon.svg";
const imgIcon1 = "/assets/1668-2932-imgIcon1.svg";
const imgIcon2 = "/assets/1668-2932-imgIcon2.svg";
const imgIcon3 = "/assets/1668-2932-imgIcon3.svg";
const imgIcon4 = "/assets/1668-2932-imgIcon4.svg";
const imgIcon5 = "/assets/1668-2932-imgIcon5.svg";
const imgIcon6 = "/assets/1668-2932-imgIcon6.svg";
const imgIcon7 = "/assets/1668-2932-imgIcon7.svg";
const imgIcon8 = "/assets/1668-2932-imgIcon8.svg";
const imgIcon9 = "/assets/1668-2932-imgIcon9.svg";
const imgIcon10 = "/assets/1668-2932-imgIcon10.svg";
const imgIcon11 = "/assets/1668-2932-imgIcon11.svg";
const imgGlyphConnectedTvSymmetric = "/assets/1668-2932-imgGlyphConnectedTvSymmetric.svg";
const imgGlyphConnectedTvSymmetric1 = "/assets/1668-2932-imgGlyphConnectedTvSymmetric1.svg";
const imgImgFeedtvHomeHero = "/assets/1668-2932-imgImgFeedtvHomeHero.png";
const imgScreenRecording1 = "/assets/1668-2932-imgScreenRecording1.png";
const imgImage15 = "/assets/1668-2932-imgImage15.png";
const img1LgCarouselPsd11 = "/assets/1668-2932-img1LgCarouselPsd11.png";
const imgVizioMinuteMaidHomeScreen1 = "/assets/1668-2932-imgVizioMinuteMaidHomeScreen1.png";
const imgOemRokuTclTubi = "/assets/1668-2932-imgOemRokuTclTubi.png";
const imgSamsung = "/assets/1668-2932-imgSamsung.svg";
const imgLg = "/assets/1668-2932-imgLg.svg";
const imgVizio = "/assets/1668-2932-imgVizio.svg";
const imgTcl = "/assets/1668-2932-imgTcl.svg";
const imgFeedtvLogoOfficial = "/assets/1668-2932-imgFeedtvLogoOfficial.svg";
const imgMark = "/assets/1668-2932-imgMark.svg";
const imgWordmark = "/assets/1668-2932-imgWordmark.svg";
const imgSearchIcon = "/assets/1668-2932-imgSearchIcon.svg";

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

type Reveal02OemReachProps = {
  className?: string;
  state?: "End" | "Start";
};

function Reveal02OemReach({ className, state = "End" }: Reveal02OemReachProps) {
  const isStart = state === "Start";
  return (
    <div className={className || `h-[545px] overflow-clip relative w-[1440px] ${isStart ? "bg-[rgba(255,255,255,0.01)]" : ""}`} id={isStart ? "node-1871_2361" : "node-1871_2360"}>
      <div className={`[word-break:break-word] absolute content-stretch flex flex-col gap-[18px] items-start left-[134px] not-italic overflow-clip top-[123px] w-[514px] ${isStart ? "" : ""}`} id={isStart ? "node-1871_2351" : "node-1871_2340"} data-name="Copy">
        <p className="font-['Lato:Regular'] leading-[1.58] relative shrink-0 text-[#424242] text-[24px] w-[489px]" id={isStart ? "node-1871_2352" : "node-1871_2341"}>
          Across our OEM partnerships, FeedTV Home reaches
        </p>
        <p className="bg-clip-text font-['Lato:Bold'] leading-none min-w-full relative shrink-0 text-[140px] text-[transparent] tracking-[-4.2px] w-[min-content]" id={isStart ? "node-1871_2353" : "node-1871_2342"} style={{ backgroundImage: "linear-gradient(103.852188110948deg, rgb(1, 180, 172) 10.804%, rgb(27, 155, 194) 62.852%)" }}>
          70%
        </p>
        <p className="font-['Lato:Regular'] leading-[1.58] relative shrink-0 text-[#424242] text-[24px] w-[489px]" id={isStart ? "node-1871_2354" : "node-1871_2343"}>
          of U.S. households — roughly 115M homes — with placements that are seen first, not scrolled past.
        </p>
      </div>
      <p className={`[word-break:break-word] absolute font-["Lato:Bold"] leading-[normal] left-[134px] not-italic text-[#424242] text-[20px] top-[71px] tracking-[3.2px] whitespace-nowrap ${isStart ? "" : ""}`} id={isStart ? "node-1871_2355" : "node-1871_2344"}>
        REACH THAT ADDS UP
      </p>
      <div className="absolute contents left-[808px] top-[61px]" id={isStart ? "node-1871_2356" : "node-1871_2345"}>
        <div className="absolute contents left-[808px] top-[61px]" id={isStart ? "node-1871_2357" : "node-1871_2346"}>
          <div className={`absolute h-[293px] left-[808px] rounded-tl-[53px] top-[61px] w-[373px] ${isStart ? "" : ""}`} id={isStart ? "node-1871_2358" : "node-1871_2347"} style={{ backgroundImage: "linear-gradient(-44.2803093242961deg, rgb(0, 134, 130) 19.191%, rgb(0, 181, 173) 101.81%)" }} />
        </div>
        {state === "End" && (
          <div className="absolute h-[347px] left-[840px] rounded-[43px] top-[95px] w-[461px]" data-node-id="1871:2348" data-name="img/oem-reach">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[43px]">
              <img alt="" className="absolute h-full left-[-13.94%] max-w-none top-0 w-[133.74%]" src={imgImgOemReach} />
            </div>
          </div>
        )}
        {isStart && (
          <div className="absolute h-[347px] left-[840px] rounded-[43px] top-[95px] w-[461px]" data-node-id="1871:2359" data-name="image 19">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[43px]">
              <img alt="" className="absolute h-full left-[-13.94%] max-w-none top-0 w-[133.74%]" src={imgImgOemReach} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

type HoverLift04CtvNativeMeasurementProps = {
  className?: string;
  state?: "Default" | "Hover";
};

function HoverLift04CtvNativeMeasurement({ className, state = "Default" }: HoverLift04CtvNativeMeasurementProps) {
  const isHover = state === "Hover";
  return (
    <div className={className || "h-[304.5px] relative w-[328.65px]"} id={isHover ? "node-1850_2010" : "node-1850_2009"}>
      <div className={`absolute bg-white border-[#e5e7e9] border-solid content-stretch flex flex-col items-start overflow-clip ${isHover ? "border-[1.05px] gap-[12.6px] h-[304.5px] left-0 px-[31.5px] py-[33.6px] rounded-[25.2px] shadow-[0px_12px_32px_0px_rgba(28,38,46,0.14)] top-0 w-[328.65px]" : "border gap-[12px] h-[290px] left-[7.82px] px-[30px] py-[32px] rounded-[24px] top-[7.25px] w-[313px]"}`} id={isHover ? "node-1850_1997" : "node-1668_3026"} data-name="Card">
        <div className={`content-stretch flex items-center relative shrink-0 w-full ${isHover ? "gap-[12.6px]" : "gap-[12px]"}`} id={isHover ? "node-1850_1998" : "node-1668_3027"} data-name="Card head">
          <div className={`bg-[rgba(0,181,173,0.09)] relative shrink-0 ${isHover ? "rounded-[14.7px] size-[46.2px]" : "rounded-[14px] size-[44px]"}`} id={isHover ? "node-1850_1999" : "node-1668_3028"} data-name="Medallion">
            <div className={`absolute ${isHover ? "left-[10.5px] size-[25.2px] top-[10.5px]" : "left-[10px] size-[24px] top-[10px]"}`} id={isHover ? "node-1850_2000" : "node-1668_3029"} data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={isHover ? imgIcon1 : imgIcon} />
            </div>
          </div>
          <div className={`relative shrink-0 ${isHover ? "size-[1.05px]" : "size-px"}`} id={isHover ? "node-1850_2005" : "node-1668_3034"} data-name="spacer" />
          <div className={`[word-break:break-word] flex flex-[1_0_0] flex-col font-["Lato:Bold"] h-full justify-center leading-[0] min-w-px not-italic relative text-[#00b5ad] ${isHover ? "text-[15.75px] tracking-[0.945px]" : "text-[15px] tracking-[0.9px]"}`}>
            <p className="leading-[normal]">04</p>
          </div>
        </div>
        <p className={`[word-break:break-word] font-["Lato:Bold"] leading-[1.3] not-italic relative shrink-0 text-[#1d262f] w-full ${isHover ? "text-[21px] tracking-[-0.315px]" : "text-[20px] tracking-[-0.3px]"}`} id={isHover ? "node-1850_2007" : "node-1668_3036"}>
          CTV-native measurement
        </p>
        <p className={`[word-break:break-word] font-["Lato:Light"] leading-[1.65] not-italic relative shrink-0 text-[#4c5864] w-full ${isHover ? "text-[16.275px]" : "text-[15.5px]"}`} id={isHover ? "node-1850_2008" : "node-1668_3037"}>
          Attribution built for impression-led CTV, not a repurposed mobile click path — with incrementality testing available on any campaign.
        </p>
      </div>
    </div>
  );
}

type HoverLift03CompleteTransparencyProps = {
  className?: string;
  state?: "Default" | "Hover";
};

function HoverLift03CompleteTransparency({ className, state = "Default" }: HoverLift03CompleteTransparencyProps) {
  const isHover = state === "Hover";
  return (
    <div className={className || "h-[304.5px] relative w-[328.65px]"} id={isHover ? "node-1850_1982" : "node-1850_1981"}>
      <div className={`absolute bg-white border-[#e5e7e9] border-solid content-stretch flex flex-col items-start overflow-clip ${isHover ? "border-[1.05px] gap-[12.6px] h-[304.5px] left-0 px-[31.5px] py-[33.6px] rounded-[25.2px] shadow-[0px_12px_32px_0px_rgba(28,38,46,0.14)] top-0 w-[328.65px]" : "border gap-[12px] h-[290px] left-[7.82px] px-[30px] py-[32px] rounded-[24px] top-[7.25px] w-[313px]"}`} id={isHover ? "node-1850_1971" : "node-1668_3016"} data-name="Card">
        <div className={`content-stretch flex items-center relative shrink-0 w-full ${isHover ? "gap-[12.6px]" : "gap-[12px]"}`} id={isHover ? "node-1850_1972" : "node-1668_3017"} data-name="Card head">
          <div className={`bg-[rgba(0,181,173,0.09)] relative shrink-0 ${isHover ? "rounded-[14.7px] size-[46.2px]" : "rounded-[14px] size-[44px]"}`} id={isHover ? "node-1850_1973" : "node-1668_3018"} data-name="Medallion">
            <div className={`absolute ${isHover ? "left-[10.5px] size-[25.2px] top-[10.5px]" : "left-[10px] size-[24px] top-[10px]"}`} id={isHover ? "node-1850_1974" : "node-1668_3019"} data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={isHover ? imgIcon3 : imgIcon2} />
            </div>
          </div>
          <div className={`relative shrink-0 ${isHover ? "size-[1.05px]" : "size-px"}`} id={isHover ? "node-1850_1977" : "node-1668_3022"} data-name="spacer" />
          <div className={`[word-break:break-word] flex flex-[1_0_0] flex-col font-["Lato:Bold"] h-full justify-center leading-[0] min-w-px not-italic relative text-[#00b5ad] ${isHover ? "text-[15.75px] tracking-[0.945px]" : "text-[15px] tracking-[0.9px]"}`}>
            <p className="leading-[normal]">03</p>
          </div>
        </div>
        <p className={`[word-break:break-word] font-["Lato:Bold"] leading-[1.3] not-italic relative shrink-0 text-[#1d262f] w-full ${isHover ? "text-[21px] tracking-[-0.315px]" : "text-[20px] tracking-[-0.3px]"}`} id={isHover ? "node-1850_1979" : "node-1668_3024"}>
          Complete transparency
        </p>
        <p className={`[word-break:break-word] font-["Lato:Light"] leading-[1.65] not-italic relative shrink-0 text-[#4c5864] w-full ${isHover ? "text-[16.275px]" : "text-[15.5px]"}`} id={isHover ? "node-1850_1980" : "node-1668_3025"}>
          You know exactly what you bought, on which screen, at what rate. No black box, no supply-path guessing.
        </p>
      </div>
    </div>
  );
}

type HoverLift02FirstLookAlwaysProps = {
  className?: string;
  state?: "Default" | "Hover";
};

function HoverLift02FirstLookAlways({ className, state = "Default" }: HoverLift02FirstLookAlwaysProps) {
  const isHover = state === "Hover";
  return (
    <div className={className || "h-[304.5px] relative w-[328.65px]"} id={isHover ? "node-1850_1955" : "node-1850_1954"}>
      <div className={`absolute bg-white border-[#e5e7e9] border-solid content-stretch flex flex-col items-start overflow-clip ${isHover ? "border-[1.05px] gap-[12.6px] h-[304.5px] left-0 px-[31.5px] py-[33.6px] rounded-[25.2px] shadow-[0px_12px_32px_0px_rgba(28,38,46,0.14)] top-0 w-[328.65px]" : "border gap-[12px] h-[290px] left-[7.82px] px-[30px] py-[32px] rounded-[24px] top-[7.25px] w-[313px]"}`} id={isHover ? "node-1850_1943" : "node-1668_3005"} data-name="Card">
        <div className={`content-stretch flex items-center relative shrink-0 w-full ${isHover ? "gap-[12.6px]" : "gap-[12px]"}`} id={isHover ? "node-1850_1944" : "node-1668_3006"} data-name="Card head">
          <div className={`bg-[rgba(0,181,173,0.09)] relative shrink-0 ${isHover ? "rounded-[14.7px] size-[46.2px]" : "rounded-[14px] size-[44px]"}`} id={isHover ? "node-1850_1945" : "node-1668_3007"} data-name="Medallion">
            <div className={`absolute ${isHover ? "left-[10.5px] size-[25.2px] top-[10.5px]" : "left-[10px] size-[24px] top-[10px]"}`} id={isHover ? "node-1850_1946" : "node-1668_3008"} data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={isHover ? imgIcon5 : imgIcon4} />
            </div>
          </div>
          <div className={`relative shrink-0 ${isHover ? "size-[1.05px]" : "size-px"}`} id={isHover ? "node-1850_1950" : "node-1668_3012"} data-name="spacer" />
          <div className={`[word-break:break-word] flex flex-[1_0_0] flex-col font-["Lato:Bold"] h-full justify-center leading-[0] min-w-px not-italic relative text-[#00b5ad] ${isHover ? "text-[15.75px] tracking-[0.945px]" : "text-[15px] tracking-[0.9px]"}`}>
            <p className="leading-[normal]">02</p>
          </div>
        </div>
        <p className={`[word-break:break-word] font-["Lato:Bold"] leading-[1.3] not-italic relative shrink-0 text-[#1d262f] w-full ${isHover ? "text-[21px] tracking-[-0.315px]" : "text-[20px] tracking-[-0.3px]"}`} id={isHover ? "node-1850_1952" : "node-1668_3014"}>
          First look, always
        </p>
        <p className={`[word-break:break-word] font-["Lato:Light"] leading-[1.65] not-italic relative shrink-0 text-[#4c5864] w-full ${isHover ? "text-[16.275px]" : "text-[15.5px]"}`} id={isHover ? "node-1850_1953" : "node-1668_3015"}>
          Those relationships convert into direct deals at bulk CPMs, giving us priority on every impression before it’s ever exposed to the open auction.
        </p>
      </div>
    </div>
  );
}

type HoverLift01DirectRelationshipsProps = {
  className?: string;
  state?: "Default" | "Hover";
};

function HoverLift01DirectRelationships({ className, state = "Default" }: HoverLift01DirectRelationshipsProps) {
  const isHover = state === "Hover";
  return (
    <div className={className || "h-[304.5px] relative w-[328.65px]"} id={isHover ? "node-1850_1927" : "node-1850_1926"}>
      <div className={`absolute bg-white border-[#e5e7e9] border-solid content-stretch flex flex-col items-start overflow-clip ${isHover ? "border-[1.05px] gap-[12.6px] h-[304.5px] left-0 px-[31.5px] py-[33.6px] rounded-[25.2px] shadow-[0px_12px_32px_0px_rgba(28,38,46,0.14)] top-0 w-[328.65px]" : "border gap-[12px] h-[290px] left-[7.82px] px-[30px] py-[32px] rounded-[24px] top-[7.25px] w-[313px]"}`} id={isHover ? "node-1850_1915" : "node-1668_2994"} data-name="Card">
        <div className={`content-stretch flex items-center relative shrink-0 w-full ${isHover ? "gap-[12.6px]" : "gap-[12px]"}`} id={isHover ? "node-1850_1916" : "node-1668_2995"} data-name="Card head">
          <div className={`bg-[rgba(0,181,173,0.09)] relative shrink-0 ${isHover ? "rounded-[14.7px] size-[46.2px]" : "rounded-[14px] size-[44px]"}`} id={isHover ? "node-1850_1917" : "node-1668_2996"} data-name="Medallion">
            <div className={`absolute ${isHover ? "left-[10.5px] size-[25.2px] top-[10.5px]" : "left-[10px] size-[24px] top-[10px]"}`} id={isHover ? "node-1850_1918" : "node-1668_2997"} data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={isHover ? imgIcon7 : imgIcon6} />
            </div>
          </div>
          <div className={`relative shrink-0 ${isHover ? "size-[1.05px]" : "size-px"}`} id={isHover ? "node-1850_1922" : "node-1668_3001"} data-name="spacer" />
          <div className={`[word-break:break-word] flex flex-[1_0_0] flex-col font-["Lato:Bold"] h-full justify-center leading-[0] min-w-px not-italic relative text-[#00b5ad] ${isHover ? "text-[15.75px] tracking-[0.945px]" : "text-[15px] tracking-[0.9px]"}`}>
            <p className="leading-[normal]">01</p>
          </div>
        </div>
        <p className={`[word-break:break-word] font-["Lato:Bold"] leading-[1.3] not-italic relative shrink-0 text-[#1d262f] w-full ${isHover ? "text-[21px] tracking-[-0.315px]" : "text-[20px] tracking-[-0.3px]"}`} id={isHover ? "node-1850_1924" : "node-1668_3003"}>
          Direct relationships
        </p>
        <p className={`[word-break:break-word] font-["Lato:Light"] leading-[1.65] not-italic relative shrink-0 text-[#4c5864] w-full ${isHover ? "text-[16.275px]" : "text-[15.5px]"}`} id={isHover ? "node-1850_1925" : "node-1668_3004"}>
          Samsung, LG, Vizio, TCL, Tubi, Roku. Contracts, rates, and placements negotiated by us — including home screen and native units with no programmatic path at all.
        </p>
      </div>
    </div>
  );
}

type Reveal02OemHowFeedTvWorksProps = {
  className?: string;
  state?: "End" | "Start";
};

function Reveal02OemHowFeedTvWorks({ className, state = "End" }: Reveal02OemHowFeedTvWorksProps) {
  const isStart = state === "Start";
  return (
    <div className={className || `h-[568px] relative w-[1440px] ${isStart ? "bg-[rgba(255,255,255,0.01)]" : ""}`} id={isStart ? "node-1871_2103" : "node-1871_2102"}>
      <div className={`-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 overflow-clip top-[100px] w-[588px] ${isStart ? "" : ""}`} id={isStart ? "node-1871_2095" : "node-1871_2087"} data-name="Head">
        <p className="[word-break:break-word] font-['Lato:Bold'] leading-[1.27] not-italic relative shrink-0 text-[#1d262f] text-[40px] text-center tracking-[-0.96px] w-full" id={isStart ? "node-1871_2096" : "node-1871_2088"}>
          Four Things That Make It Work
        </p>
      </div>
      <div className={`-translate-x-1/2 absolute h-[326px] left-1/2 overflow-clip top-[178px] w-[1320px] ${isStart ? "" : ""}`} id={isStart ? "node-1871_2097" : "node-1871_2089"} data-name="Row">
        <HoverLift01DirectRelationships className="absolute h-[304.5px] left-[-7.82px] top-[-7.25px] w-[328.65px]" />
        <HoverLift02FirstLookAlways className="absolute h-[304.5px] left-[327.17px] top-[-7.25px] w-[328.65px]" />
        <HoverLift03CompleteTransparency className="absolute h-[304.5px] left-[662.17px] top-[-7.25px] w-[328.65px]" />
        <HoverLift04CtvNativeMeasurement className="absolute h-[304.5px] left-[997.17px] top-[-7.25px] w-[328.65px]" />
      </div>
    </div>
  );
}

type HoverLift03OpenMarketplaceRemnantProps = {
  className?: string;
  state?: "Default" | "Hover";
};

function HoverLift03OpenMarketplaceRemnant({ className, state = "Default" }: HoverLift03OpenMarketplaceRemnantProps) {
  const isHover = state === "Hover";
  return (
    <div className={className || "h-[238px] relative w-[385px]"} id={isHover ? "node-1852_2020" : "node-1852_2019"}>
      <div className={`absolute bg-white border-[#e5e7e9] border-solid overflow-clip ${isHover ? "border-[1.05px] h-[249.9px] left-[-9.63px] rounded-[25.2px] shadow-[0px_12px_32px_0px_rgba(28,38,46,0.14)] top-[-5.95px] w-[404.25px]" : "border h-[238px] left-0 rounded-[24px] top-0 w-[385px]"}`} id={isHover ? "node-1852_2005" : "node-1668_2971"} data-name="Card">
        <div className={`absolute bg-[rgba(238,105,105,0.09)] ${isHover ? "left-[223.65px] rounded-[45.102px] size-[141.75px] top-[54.6px]" : "left-[213px] rounded-[42.955px] size-[135px] top-[52px]"}`} id={isHover ? "node-1852_2006" : "node-1668_2973"} data-name="Medallion">
          <div className={`absolute ${isHover ? "left-[32.22px] size-[77.318px] top-[32.22px]" : "left-[30.68px] size-[73.636px] top-[30.68px]"}`} id={isHover ? "node-1852_2007" : "node-1668_2974"} data-name="icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={isHover ? imgIcon9 : imgIcon8} />
          </div>
        </div>
        <p className={`[word-break:break-word] absolute font-["Lato:Bold"] leading-[1.3] not-italic text-[#1d262f] ${isHover ? "left-[31.5px] text-[21px] top-[46.2px] tracking-[-0.315px] w-[174.3px]" : "left-[30px] text-[20px] top-[44px] tracking-[-0.3px] w-[166px]"}`} id={isHover ? "node-1852_2017" : "node-1668_2986"}>
          No remnant ads (open marketplace)
        </p>
        <p className={`[word-break:break-word] absolute font-["Lato:Light"] leading-[1.65] not-italic text-[#4c5864] ${isHover ? "left-[31.5px] text-[16.275px] top-[134.4px] w-[158.55px]" : "left-[30px] text-[15.5px] top-[128px] w-[151px]"}`} id={isHover ? "node-1852_2018" : "node-1668_2987"}>
          Where everyone else is buying. FeedTV does not bid here.
        </p>
      </div>
    </div>
  );
}

type HoverLift02PrivateMarketplaceProps = {
  className?: string;
  state?: "Default" | "Hover";
};

function HoverLift02PrivateMarketplace({ className, state = "Default" }: HoverLift02PrivateMarketplaceProps) {
  const isHover = state === "Hover";
  return (
    <div className={className || "h-[238px] relative w-[385px]"} id={isHover ? "node-1852_1993" : "node-1852_1992"}>
      <div className={`absolute bg-white border-[#e5e7e9] border-solid overflow-clip ${isHover ? "border-[1.05px] h-[249.9px] left-[-9.63px] rounded-[25.2px] shadow-[0px_12px_32px_0px_rgba(28,38,46,0.14)] top-[-5.95px] w-[404.25px]" : "border h-[238px] left-0 rounded-[24px] top-0 w-[385px]"}`} id={isHover ? "node-1852_1985" : "node-1668_2961"} data-name="Card">
        <div className={`absolute bg-[rgba(0,181,173,0.09)] ${isHover ? "left-[223.65px] rounded-[45.102px] size-[141.75px] top-[54.6px]" : "left-[213px] rounded-[42.955px] size-[135px] top-[52px]"}`} id={isHover ? "node-1852_1986" : "node-1668_2963"} data-name="Medallion">
          <div className={`absolute ${isHover ? "left-[32.22px] size-[77.318px] top-[32.22px]" : "left-[30.68px] size-[73.636px] top-[30.68px]"}`} id={isHover ? "node-1852_1987" : "node-1668_2964"} data-name="icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={isHover ? imgIcon11 : imgIcon10} />
          </div>
        </div>
        <p className={`[word-break:break-word] absolute font-["Lato:Bold"] leading-[1.3] not-italic text-[#1d262f] ${isHover ? "left-[31.5px] text-[21px] top-[46.2px] tracking-[-0.315px] w-[158.55px]" : "left-[30px] text-[20px] top-[44px] tracking-[-0.3px] w-[151px]"}`} id={isHover ? "node-1852_1990" : "node-1668_2969"}>
          Private marketplace
        </p>
        <p className={`[word-break:break-word] absolute font-["Lato:Light"] leading-[1.65] not-italic text-[#4c5864] ${isHover ? "left-[31.5px] text-[16.275px] top-[120.75px] w-[158.55px]" : "left-[30px] text-[15.5px] top-[115px] w-[151px]"}`} id={isHover ? "node-1852_1991" : "node-1668_2970"}>
          First right of refusal on everything direct OEMs don’t fill.
        </p>
      </div>
    </div>
  );
}

type HoverLift01DirectDealsProgrammaticGuaranteedProps = {
  className?: string;
  state?: "Default" | "Hover";
};

function HoverLift01DirectDealsProgrammaticGuaranteed({ className, state = "Default" }: HoverLift01DirectDealsProgrammaticGuaranteedProps) {
  const isHover = state === "Hover";
  return (
    <div className={className || "h-[238px] relative w-[385px]"} id={isHover ? "node-1852_1970" : "node-1852_1969"}>
      <div className={`absolute bg-white border-[#e5e7e9] border-solid overflow-clip ${isHover ? "border-[1.05px] h-[249.9px] left-[-9.63px] rounded-[25.2px] shadow-[0px_12px_32px_0px_rgba(28,38,46,0.14)] top-[-5.95px] w-[404.25px]" : "border h-[238px] left-0 rounded-[24px] top-0 w-[385px]"}`} id={isHover ? "node-1852_1959" : "node-1668_2948"} data-name="Card">
        <div className={`-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,181,173,0.09)] ${isHover ? "left-[calc(50%+93.45px)] rounded-[45.102px] size-[141.75px] top-[calc(50%+1.58px)]" : "left-[calc(50%+89px)] rounded-[42.955px] size-[135px] top-[calc(50%+1.5px)]"}`} id={isHover ? "node-1852_1960" : "node-1668_2950"} data-name="Medallion">
          <div className={`absolute ${isHover ? "left-[32.22px] size-[77.318px] top-[32.22px]" : "left-[30.68px] size-[73.636px] top-[30.68px]"}`} id={isHover ? "node-1852_1961" : "node-1668_2951"} data-name="icon">
            <div className={`absolute left-0 top-0 ${isHover ? "size-[77.318px]" : "size-[73.636px]"}`} id={isHover ? "node-2417_7580" : "node-2417_7574"} data-name="glyph · connected-tv (symmetric)">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={isHover ? imgGlyphConnectedTvSymmetric1 : imgGlyphConnectedTvSymmetric} />
            </div>
          </div>
        </div>
        <div className={`[word-break:break-word] absolute font-["Lato:Bold"] leading-[0] not-italic text-[#1d262f] ${isHover ? "left-[31.5px] text-[21px] top-[47.25px] tracking-[-0.315px] w-[116.55px]" : "left-[30px] text-[20px] top-[45px] tracking-[-0.3px] w-[111px]"}`} id={isHover ? "node-1852_1967" : "node-1668_2959"}>
          <p className="leading-[1.3] mb-0">Direct deals</p>
          <p className="leading-[1.3]">guaranteed</p>
        </div>
        <p className={`[word-break:break-word] absolute font-["Lato:Light"] leading-[1.65] not-italic text-[#4c5864] ${isHover ? "left-[31.5px] text-[16.275px] top-[121.8px] w-[158.55px]" : "left-[30px] text-[15.5px] top-[116px] w-[151px]"}`} id={isHover ? "node-1852_1968" : "node-1668_2960"}>
          Straight with the OEM at rate card, home screen and native.
        </p>
      </div>
    </div>
  );
}

type Reveal02OemSupplyPathProps = {
  className?: string;
  state?: "End" | "Start";
};

function Reveal02OemSupplyPath({ className, state = "End" }: Reveal02OemSupplyPathProps) {
  const isStart = state === "Start";
  return (
    <div className={className || "content-stretch flex flex-col gap-[32px] items-start px-[120px] py-[100px] relative w-[1440px]"} id={isStart ? "node-1871_2012" : "node-1871_2011"} style={{ backgroundImage: "linear-gradient(152.45670780173327deg, rgb(0, 181, 173) 14.644%, rgb(27, 155, 194) 85.356%)" }}>
      <div className={`[word-break:break-word] content-stretch flex flex-col gap-[14px] items-start not-italic overflow-clip relative shrink-0 text-white w-full ${isStart ? "" : ""}`} id={isStart ? "node-1871_2002" : "node-1871_1992"} data-name="Head">
        <p className="font-['Lato:Bold'] leading-[1.27] relative shrink-0 text-[40px] tracking-[-0.96px] w-full" id={isStart ? "node-1871_2003" : "node-1871_1993"}>
          Why Direct OEM Inventory Matters
        </p>
        <p className="font-['Lato:Regular'] leading-[1.7] relative shrink-0 text-[17px] w-full" id={isStart ? "node-1871_2004" : "node-1871_1994"}>
          OEMs (original equipment manufacturers) are the brands that make smart TVs, like Samsung, LG, and Vizio — and they decide who gets premium position. FeedTV Home gives you direct access to major OEMs and their hero unit placements. With FeedTV Home you get:
        </p>
      </div>
      <div className={`content-stretch flex gap-[22px] items-start relative shrink-0 w-full ${isStart ? "" : ""}`} id={isStart ? "node-1871_2005" : "node-1871_1995"} data-name="Tiers">
        <HoverLift01DirectDealsProgrammaticGuaranteed className="h-[238px] relative shrink-0 w-[385px]" />
        <HoverLift02PrivateMarketplace className="h-[238px] relative shrink-0 w-[385px]" />
        <HoverLift03OpenMarketplaceRemnant className="h-[238px] relative shrink-0 w-[385px]" />
      </div>
      <div className={`bg-white border border-[#e5e7e9] border-solid content-stretch flex flex-col items-start overflow-clip px-[38px] py-[32px] relative rounded-[24px] shrink-0 w-full ${isStart ? "" : ""}`} id={isStart ? "node-1871_2009" : "node-1871_1999"} data-name="25x band">
        <p className="[word-break:break-word] font-['Lato:Regular'] leading-[1.68] not-italic relative shrink-0 text-[#1d262f] text-[18px] w-full" id={isStart ? "node-1871_2010" : "node-1871_2000"}>
          The gap between a first-look impression and one bought out of the long tail runs high. Same viewer, same creative, same app — the only variable is where in line you bought it. FeedTV buys first, every time.
        </p>
      </div>
    </div>
  );
}

export default function Component02FeedTvHome() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pt-[88px] relative size-full" data-node-id="1668:2932" data-name="02 · FeedTV Home">
      <div className="h-[574px] relative shrink-0 w-full" data-node-id="1668:2933" data-name="Hero">
        <div className="absolute h-[402px] left-[120px] overflow-clip top-[88px] w-[1200px]" data-node-id="1668:2934" data-name="Row">
          <div className="absolute h-[402px] left-0 overflow-clip top-0 w-[556px]" data-node-id="1668:2935" data-name="Copy">
            <p className="[word-break:break-word] absolute font-['Lato:Bold'] leading-[normal] left-0 not-italic text-[#00b5ad] text-[12px] top-0 tracking-[1.92px] whitespace-nowrap" data-node-id="1668:2936">
              FEEDTV HOME
            </p>
            <h1 className="[word-break:break-word] absolute font-['Lato:Bold'] leading-[1.27] left-0 not-italic text-[#1d262f] text-[50px] top-[34px] tracking-[-1.4px] w-[556px]" data-node-id="1668:2937">
              Get Your Ads on the Biggest Screen in Every Home in America
            </h1>
            <p className="[word-break:break-word] absolute font-['Lato:Light'] leading-[1.68] left-0 not-italic text-[#4c5864] text-[18px] top-[213px] w-[556px]" data-node-id="1668:2938">
              FeedTV Home gives you direct relationships with the OEMs that make the screen. No exchanges, no waterfall, no guessing what you bought — home-screen placements negotiated straight with Samsung, LG, Vizio and TCL all under one media plan.
            </p>
            <a className="absolute bg-[#00b5ad] block cursor-pointer h-[49px] left-0 overflow-clip rounded-[999px] top-[353px] w-[206px]" data-node-id="1668:2939" data-name="Button · See a Live Placement">
              <p className="[word-break:break-word] absolute font-['Lato:Bold'] leading-[normal] left-[30px] not-italic text-[15.5px] text-left text-white top-[15px] whitespace-nowrap" data-node-id="1668:2940">
                See a Live Placement
              </p>
            </a>
          </div>
        </div>
        <div className="absolute h-[262px] left-[729px] rounded-tl-[76px] top-[51px] w-[379px]" data-node-id="1668:2941" style={{ backgroundImage: "linear-gradient(145.3441709509324deg, rgb(0, 134, 130) 14.644%, rgb(0, 181, 173) 85.356%)" }} />
        <div className="absolute h-[410px] left-[766px] rounded-[37px] top-[88px] w-[614px]" data-node-id="1668:2942" data-name="img/feedtv-home-hero">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[37px] size-full" src={imgImgFeedtvHomeHero} />
        </div>
      </div>
      <Reveal02OemSupplyPath className="content-stretch flex flex-col gap-[32px] items-start px-[120px] py-[100px] relative shrink-0 w-full" state="End" />
      <Reveal02OemHowFeedTvWorks className="bg-[rgba(255,255,255,0.01)] h-[568px] relative shrink-0 w-full" state="End" />
      <div className="bg-[#fafbfb] content-stretch flex flex-col gap-[32px] items-start px-[120px] py-[100px] relative shrink-0 w-full" data-node-id="1871:2310" data-name="OEM Partners">
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="I1871:2310;1871:2255" data-name="Head">
          <p className="[word-break:break-word] font-['Lato:Bold'] leading-[1.27] not-italic relative shrink-0 text-[#1d262f] text-[40px] tracking-[-0.96px] w-full" data-node-id="I1871:2310;1871:2256">
            The Screens We Buy Direct
          </p>
        </div>
        <div className="content-stretch flex gap-[22px] items-start overflow-clip relative shrink-0 w-full" data-node-id="I1871:2310;1871:2257" data-name="Row">
          <div className="bg-white border border-[#e5e7e9] border-solid content-stretch flex flex-col gap-[18px] h-[524px] items-start overflow-clip p-[32px] relative rounded-[24px] shrink-0 w-[589px]" data-node-id="I1871:2310;1871:2258" data-name="OEM · Samsung">
            <div className="bg-[#f3f6f7] h-[295px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-node-id="I1871:2310;1871:2259" data-name="Image · 16:9 (placeholder)">
              <div className="absolute h-[295px] left-0 top-0 w-[523px]" data-node-id="I1871:2310;1871:2260" data-name="screen-recording 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenRecording1} />
              </div>
            </div>
            <div className="content-stretch flex h-[48px] items-center overflow-clip relative shrink-0 w-full" data-node-id="I1871:2310;2433:2493" data-name="Logo">
              <div className="h-[20.426px] relative shrink-0 w-[134.133px]" data-node-id="I1871:2310;1871:2261" data-name="Samsung">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSamsung} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Lato:Light'] leading-[1.65] not-italic relative shrink-0 text-[#4c5864] text-[15.5px] w-full" data-node-id="I1871:2310;1871:2262">
              The #1 global TV provider. Samsung Immersive Masthead (Hero) delivers 2.5x more active attention than linear TV; users open the Samsung home screen 5+ times a day, and your ad is the first thing they see, every time.
            </p>
          </div>
          <div className="bg-white border border-[#e5e7e9] border-solid content-stretch flex flex-col gap-[18px] h-[524px] items-start overflow-clip p-[32px] relative rounded-[24px] shrink-0 w-[589px]" data-node-id="I1871:2310;1871:2263" data-name="OEM · LG">
            <div className="h-[295px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-node-id="I1871:2310;1871:2264" data-name="Image · 16:9 (placeholder)">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[295px] left-1/2 top-1/2 w-[523px]" data-node-id="I1871:2310;1871:2265" data-name="image 15">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage15} />
              </div>
              <div className="absolute h-[295px] right-0 top-0 w-[523px]" data-node-id="I1871:2310;1871:2266" data-name="1_LG carousel PSD_1 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-full left-[0.08%] max-w-none top-0 w-[99.83%]" src={img1LgCarouselPsd11} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex h-[48px] items-center overflow-clip relative shrink-0 w-full" data-node-id="I1871:2310;2433:2494" data-name="Logo">
              <div className="h-[34px] relative shrink-0 w-[79px]" data-node-id="I1871:2310;1871:2267" data-name="LG">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLg} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Lato:Light'] leading-[1.65] not-italic relative shrink-0 text-[#4c5864] text-[15.5px] w-full" data-node-id="I1871:2310;1871:2268">
              Exclusive access to LG Smart TV inventory, powered by LG’s proprietary ACR technology for precise targeting. 97% of LG viewers start every session on the home screen carousel.
            </p>
          </div>
        </div>
        <div className="content-stretch flex gap-[22px] items-start overflow-clip relative shrink-0 w-full" data-node-id="I1871:2310;1871:2269" data-name="Row">
          <div className="bg-white border border-[#e5e7e9] border-solid content-stretch flex flex-col gap-[18px] h-[524px] items-start overflow-clip p-[32px] relative rounded-[24px] shrink-0 w-[589px]" data-node-id="I1871:2310;1871:2270" data-name="OEM · Vizio">
            <div className="bg-[#f3f6f7] h-[295px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-node-id="I1871:2310;1871:2271" data-name="Image · 16:9 (placeholder)">
              <div className="-translate-y-1/2 absolute h-[295px] left-0 top-1/2 w-[523px]" data-node-id="I1871:2310;1871:2272" data-name="VIZIO_MinuteMaid_HomeScreen 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVizioMinuteMaidHomeScreen1} />
              </div>
            </div>
            <div className="content-stretch flex h-[48px] items-center overflow-clip relative shrink-0 w-full" data-node-id="I1871:2310;2433:2495" data-name="Logo">
              <div className="h-[24.852px] relative shrink-0 w-[110.247px]" data-node-id="I1871:2310;1871:2273" data-name="Vizio">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVizio} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Lato:Light'] leading-[1.65] not-italic relative shrink-0 text-[#4c5864] text-[15.5px] w-full" data-node-id="I1871:2310;1871:2274">
              SmartCast Hero 1 is the first placement visible the moment a Vizio TV powers on — +35% more attention than linear TV.
            </p>
          </div>
          <div className="bg-white border border-[#e5e7e9] border-solid content-stretch flex flex-col gap-[18px] h-[524px] items-start overflow-clip p-[32px] relative rounded-[24px] shrink-0 w-[589px]" data-node-id="I1871:2310;1871:2275" data-name="OEM · TCL, Tubi, Roku">
            <div className="bg-[#f3f6f7] h-[295px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-node-id="I1871:2310;1871:2276" data-name="Image · 16:9 (placeholder)">
              <div className="-translate-y-1/2 absolute h-[295px] left-0 top-1/2 w-[523px]" data-node-id="I1871:2310;1871:2277" data-name="Slide17_FeedMob-x-Roku-CTV_web 1" />
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[295px] left-1/2 top-1/2 w-[523px]" data-node-id="I1871:2310;1871:2278" data-name="oem-roku-tcl-tubi">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgOemRokuTclTubi} />
              </div>
            </div>
            <div className="content-stretch flex h-[48px] items-center overflow-clip relative shrink-0 w-full" data-node-id="I1871:2310;2433:2496" data-name="Logo">
              <div className="h-[40.451px] relative shrink-0 w-[67.732px]" data-node-id="I1871:2310;1871:2279" data-name="TCL">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTcl} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Lato:Light'] leading-[1.65] not-italic relative shrink-0 text-[#4c5864] text-[15.5px] w-full" data-node-id="I1871:2310;1871:2280">{`One of the world's largest smart TV manufacturers with direct access to home screen and FAST-channel inventory — powered by their own ACR data.`}</p>
          </div>
        </div>
      </div>
      <Reveal02OemReach className="bg-[rgba(255,255,255,0.01)] h-[545px] overflow-clip relative shrink-0 w-full" state="End" />
      <div className="content-stretch flex flex-col h-[240px] items-center justify-center px-[120px] py-[56px] relative shrink-0 w-full" data-node-id="1668:3131" style={{ backgroundImage: "linear-gradient(170.53767779197437deg, rgb(0, 181, 173) 14.644%, rgb(27, 155, 194) 85.356%)" }} data-name="Closing CTA">
        <div className="content-stretch flex flex-col gap-[32px] items-center overflow-clip relative shrink-0 w-[820px]" data-node-id="1668:3132" data-name="Copy">
          <p className="[word-break:break-word] font-['Lato:Bold'] leading-[1.27] min-w-full not-italic relative shrink-0 text-[42px] text-center text-white tracking-[-1.008px] w-[min-content]" data-node-id="1668:3133">
            Own the Screen That Gets Seen First.
          </p>
          <a className="bg-white content-stretch cursor-pointer flex items-center overflow-clip px-[30px] py-[15px] relative rounded-[999px] shrink-0" data-node-id="1668:3134" data-name="Button · Get In Touch">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[#008682] text-[15.5px] text-left whitespace-nowrap" data-node-id="1668:3135">
              Get In Touch
            </p>
          </a>
        </div>
      </div>
      <div className="bg-[#1d262f] content-stretch flex flex-col gap-[44px] items-start overflow-clip pb-[40px] pt-[72px] px-[120px] relative shrink-0 w-full" data-node-id="1668:3136" data-name="Footer">
        <div className="content-stretch flex gap-[40px] items-start overflow-clip relative shrink-0 w-full" data-node-id="I1668:3136;296:23" data-name="Columns">
          <div className="content-stretch flex flex-col gap-[18px] items-start overflow-clip relative shrink-0 w-[380px]" data-node-id="I1668:3136;296:24" data-name="Brand">
            <a className="bg-[rgba(255,255,255,0.01)] content-stretch cursor-pointer flex gap-[10px] h-[30px] items-center relative shrink-0 w-[132px]" data-node-id="I1668:3136;296:25" data-name="Logo">
              <div className="h-[41.202px] relative shrink-0 w-[136.61px]" data-node-id="I1668:3136;4131:5114" data-name="feedtv logo · official">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFeedtvLogoOfficial} />
              </div>
            </a>
            <p className="[word-break:break-word] font-['Lato:Light'] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#8a97a1] text-[15px] w-[min-content]" data-node-id="I1668:3136;296:34">
              Premium CTV inventory, bought direct from the manufacturers. A FeedMob company.
            </p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1668:3136;296:35" data-name="Products">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1668:3136;296:36">
              PRODUCTS
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1668:3136;296:37" data-name="Gap" />
            <p className="[word-break:break-word] font-['Lato:Regular'] leading-[normal] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3136;296:38">
              FeedTV Home
            </p>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3136;296:40">
              <p className="leading-[normal]">FeedTV Stream</p>
            </a>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1668:3136;296:42" data-name="About">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1668:3136;296:43">
              ABOUT
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1668:3136;296:44" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3136;296:45">
              <p className="leading-[normal]">Our Team</p>
            </a>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1668:3136;296:47" data-name="Resources">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1668:3136;296:48">
              RESOURCES
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1668:3136;296:49" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3136;296:50">
              <p className="leading-[normal]">Blog</p>
            </a>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3136;296:52">
              <p className="leading-[normal]">Case Studies</p>
            </a>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3136;296:54">
              <p className="leading-[normal]">Preview Your Ads</p>
            </a>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1668:3136;296:56" data-name="Connect">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1668:3136;296:57">
              CONNECT
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1668:3136;296:58" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" href="https://www.linkedin.com/company/feedmob" data-node-id="I1668:3136;296:59" target="_blank">
              <p className="leading-[normal]">LinkedIn</p>
            </a>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3136;296:61">
              <p className="leading-[normal]">Contact</p>
            </a>
          </div>
        </div>
        <div className="[word-break:break-word] border-[#38424a] border-solid border-t content-stretch flex font-['Lato:Regular'] items-center justify-between leading-[normal] not-italic overflow-clip pt-[26px] relative shrink-0 text-[#8a97a1] text-[13px] w-full whitespace-nowrap" data-node-id="I1668:3136;296:63" data-name="Legal bar">
          <p className="relative shrink-0" data-node-id="I1668:3136;296:64">
            © 2026 FeedTV. A FeedMob company.
          </p>
          <div className="content-stretch flex gap-[22px] items-start overflow-clip relative shrink-0" data-node-id="I1668:3136;296:65" data-name="Legal links">
            <p className="relative shrink-0" data-node-id="I1668:3136;296:66">
              Terms
            </p>
            <p className="relative shrink-0" data-node-id="I1668:3136;296:67">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
      
      
      
    </div>
  );
}
