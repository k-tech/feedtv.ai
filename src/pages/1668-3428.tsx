import React from "react";
const imgImgCaseStudiesHero = "/assets/1668-3428-imgImgCaseStudiesHero.png";
const imgImgCaseFintech = "/assets/1668-3428-imgImgCaseFintech.png";
const imgImgCaseCtvConsumer = "/assets/1668-3428-imgImgCaseCtvConsumer.png";
const imgFeedtvLogoOfficial = "/assets/1668-3428-imgFeedtvLogoOfficial.svg";
const imgMark = "/assets/1668-3428-imgMark.svg";
const imgWordmark = "/assets/1668-3428-imgWordmark.svg";
const imgSearchIcon = "/assets/1668-3428-imgSearchIcon.svg";

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

export default function Component06CaseStudies() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pt-[88px] relative size-full" data-node-id="1668:3428" data-name="06 · Case Studies">
      <div className="content-stretch flex flex-col items-start pb-[60px] pt-[96px] px-[120px] relative shrink-0 w-full" data-node-id="1668:3429" data-name="Hero">
        <div className="content-stretch flex gap-[48px] items-center overflow-clip relative shrink-0 w-full" data-node-id="2006:2305" data-name="Hero row">
          <div className="content-stretch flex flex-col gap-[18px] items-start overflow-clip relative shrink-0 w-[620px]" data-node-id="1668:3430" data-name="Copy">
            <h1 className="[word-break:break-word] font-['Lato:Bold'] h-[240px] leading-[1.27] min-w-full not-italic relative shrink-0 text-[#1d262f] text-[50px] tracking-[-1.4px] w-[min-content]" data-node-id="1668:3432">
              Beyond the Benchmark: Delivering CTV Incrementality for a Leading Fintech App
            </h1>
            <p className="[word-break:break-word] font-['Lato:Light'] leading-[1.68] min-w-full not-italic relative shrink-0 text-[#4c5864] text-[19px] w-[min-content]" data-node-id="1668:3433">
              The client set a 5–10% incrementality benchmark. A PSA test-versus-control experiment on Samsung CTV returned a 110% lift in enrollments — and reached statistical significance ahead of schedule.
            </p>
            <a className="bg-[#00b5ad] content-stretch cursor-pointer flex items-center overflow-clip px-[30px] py-[15px] relative rounded-[999px] shrink-0" data-node-id="2006:2308" data-name="Button · Read the case study">
              <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[15.5px] text-left text-white whitespace-nowrap" data-node-id="2006:2309">
                Read the case study
              </p>
            </a>
          </div>
          <div className="bg-white flex-[1_0_0] h-[320px] min-w-px overflow-clip relative rounded-[18px]" data-node-id="2006:2306" data-name="Hero image">
            <div className="absolute h-[320px] left-[-17.7px] top-0 w-[567.407px]" data-node-id="2006:2307" data-name="img/case-studies-hero">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgCaseStudiesHero} />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pb-[96px] pt-[20px] px-[120px] relative shrink-0 w-full" data-node-id="1873:2526" data-name="Case study grid">
        <div className="content-stretch cursor-pointer flex gap-[22px] items-start overflow-clip relative shrink-0 w-full" data-node-id="1873:2527" data-name="Row">
          <a className="bg-white border border-[#e5e7e9] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[24px]" data-node-id="1873:2528" data-name="Case · Beyond the Benchmark: Deli">
            <div className="bg-[#fbfcfc] h-[180px] overflow-clip relative rounded-[18px] shrink-0 w-full" data-node-id="1873:2529" data-name="SLOT · Case study visual">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Lato:Bold'] leading-[normal] left-[191.67px] not-italic text-[#a2a4a4] text-[9px] text-center top-[-40px] tracking-[1.44px] whitespace-nowrap" data-node-id="1873:2530">
                PLACEHOLDER
              </p>
              <p className="[word-break:break-word] absolute font-['Lato:Light'] leading-[1.5] left-[22px] not-italic right-[22px] text-[#4c5864] text-[12.5px] text-center top-[-22px]" data-node-id="1873:2531">
                Client-safe hero image or anonymized result chart
              </p>
              <div className="absolute h-[216px] left-0 top-[-3px] w-[383px]" data-node-id="1873:2532" data-name="image 23">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgCaseStudiesHero} />
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic overflow-clip pb-[28px] pt-[26px] px-[26px] relative shrink-0 text-left w-full" data-node-id="1873:2533" data-name="Text">
              <p className="font-['Lato:Bold'] leading-[normal] relative shrink-0 text-[#008682] text-[10.5px] tracking-[1.68px] w-full" data-node-id="1873:2534">
                FINTECH
              </p>
              <p className="font-['Lato:Bold'] leading-[1.32] relative shrink-0 text-[#1d262f] text-[19px] tracking-[-0.266px] w-full" data-node-id="1873:2535">
                Beyond the Benchmark: Delivering CTV Incrementality for a Leading Fintech App
              </p>
              <p className="font-['Lato:Light'] leading-[1.6] relative shrink-0 text-[#a2a4a4] text-[13.5px] w-full" data-node-id="1873:2536">
                Opens the FeedTV case study page
              </p>
            </div>
          </a>
          <a className="bg-white border border-[#e5e7e9] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[24px]" data-node-id="1873:2538" data-name="Case · Accelerating Fintech Growt">
            <div className="bg-[#fbfcfc] h-[180px] overflow-clip relative rounded-[18px] shrink-0 w-full" data-node-id="1873:2539" data-name="SLOT · Case study visual">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Lato:Bold'] leading-[normal] left-[191.67px] not-italic text-[#a2a4a4] text-[9px] text-center top-[-60.5px] tracking-[1.44px] whitespace-nowrap" data-node-id="1873:2540">
                PLACEHOLDER
              </p>
              <p className="[word-break:break-word] absolute font-['Lato:Light'] leading-[1.5] left-[22px] not-italic right-[22px] text-[#4c5864] text-[12.5px] text-center top-[-42.5px]" data-node-id="1873:2541">
                Client-safe hero image or anonymized result chart
              </p>
              <div className="absolute h-[257px] left-[-0.33px] top-[-21.5px] w-[384px]" data-node-id="1873:2542" data-name="img/case-fintech">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[84.29%] left-[-0.24%] max-w-none top-[7.75%] w-[100.24%]" src={imgImgCaseFintech} />
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic overflow-clip pb-[28px] pt-[26px] px-[26px] relative shrink-0 text-left w-full" data-node-id="1873:2543" data-name="Text">
              <p className="font-['Lato:Bold'] leading-[normal] relative shrink-0 text-[#008682] text-[10.5px] tracking-[1.68px] w-full" data-node-id="1873:2544">
                FINTECH
              </p>
              <p className="font-['Lato:Bold'] leading-[1.32] relative shrink-0 text-[#1d262f] text-[19px] tracking-[-0.266px] w-full" data-node-id="1873:2545">
                Accelerating Fintech Growth with High-Impact CTV
              </p>
              <p className="font-['Lato:Light'] leading-[1.6] relative shrink-0 text-[#a2a4a4] text-[13.5px] w-full" data-node-id="1873:2546">
                Opens the live case study on feedmob.com
              </p>
            </div>
          </a>
          <a className="bg-white border border-[#e5e7e9] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[24px]" data-node-id="1873:2548" data-name="Case · CTV Growth for a Leading C">
            <div className="bg-[#fbfcfc] content-stretch flex flex-col gap-[7px] h-[180px] items-center justify-center overflow-clip px-[22px] py-[18px] relative rounded-[18px] shrink-0 w-full" data-node-id="1873:2549" data-name="SLOT · Case study visual">
              <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[#a2a4a4] text-[9px] text-center tracking-[1.44px] whitespace-nowrap" data-node-id="1873:2550">
                PLACEHOLDER
              </p>
              <p className="[word-break:break-word] font-['Lato:Light'] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#4c5864] text-[12.5px] text-center w-[min-content]" data-node-id="1873:2551">
                Client-safe hero image or anonymized result chart
              </p>
              <div className="h-[256px] relative shrink-0 w-[383px]" data-node-id="1873:2552" data-name="img/case-ctv-consumer">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgCaseCtvConsumer} />
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic overflow-clip pb-[28px] pt-[26px] px-[26px] relative shrink-0 text-left w-full" data-node-id="1873:2553" data-name="Text">
              <p className="font-['Lato:Bold'] leading-[normal] relative shrink-0 text-[#008682] text-[10.5px] tracking-[1.68px] w-full" data-node-id="1873:2554">
                CRYPTO
              </p>
              <p className="font-['Lato:Bold'] leading-[1.32] relative shrink-0 text-[#1d262f] text-[19px] tracking-[-0.266px] w-full" data-node-id="1873:2555">
                CTV Growth for a Leading Cryptocurrency Platform
              </p>
              <p className="font-['Lato:Light'] leading-[1.6] relative shrink-0 text-[#a2a4a4] text-[13.5px] w-full" data-node-id="1873:2556">
                Opens the live case study on feedmob.com
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-center px-[120px] py-[92px] relative shrink-0 w-full" data-node-id="1668:3466" style={{ backgroundImage: "linear-gradient(167.5470472061678deg, rgb(0, 181, 173) 14.644%, rgb(27, 155, 194) 85.356%)" }} data-name="Closing CTA">
        <div className="content-stretch flex flex-col gap-[32px] items-center overflow-clip relative shrink-0 w-[840px]" data-node-id="1668:3467" data-name="Copy">
          <p className="[word-break:break-word] font-['Lato:Bold'] leading-[1.27] min-w-full not-italic relative shrink-0 text-[42px] text-center text-white tracking-[-1.008px] w-[min-content]" data-node-id="1668:3468">
            Let’s Talk About Your Numbers.
          </p>
          <a className="bg-white content-stretch cursor-pointer flex items-center overflow-clip px-[30px] py-[15px] relative rounded-[999px] shrink-0" data-node-id="1668:3469" data-name="Button · Book a Meeting">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[#008682] text-[15.5px] text-left whitespace-nowrap" data-node-id="1668:3470">
              Book a Meeting
            </p>
          </a>
        </div>
      </div>
      <div className="bg-[#1d262f] content-stretch flex flex-col gap-[44px] items-start overflow-clip pb-[40px] pt-[72px] px-[120px] relative shrink-0 w-full" data-node-id="1668:3471" data-name="Footer">
        <div className="content-stretch flex gap-[40px] items-start overflow-clip relative shrink-0 w-full" data-node-id="I1668:3471;296:23" data-name="Columns">
          <div className="content-stretch flex flex-col gap-[18px] items-start overflow-clip relative shrink-0 w-[380px]" data-node-id="I1668:3471;296:24" data-name="Brand">
            <a className="bg-[rgba(255,255,255,0.01)] content-stretch cursor-pointer flex gap-[10px] h-[30px] items-center relative shrink-0 w-[132px]" data-node-id="I1668:3471;296:25" data-name="Logo">
              <div className="h-[41.202px] relative shrink-0 w-[136.61px]" data-node-id="I1668:3471;4131:5114" data-name="feedtv logo · official">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFeedtvLogoOfficial} />
              </div>
            </a>
            <p className="[word-break:break-word] font-['Lato:Light'] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#8a97a1] text-[15px] w-[min-content]" data-node-id="I1668:3471;296:34">
              Premium CTV inventory, bought direct from the manufacturers. A FeedMob company.
            </p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1668:3471;296:35" data-name="Products">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1668:3471;296:36">
              PRODUCTS
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1668:3471;296:37" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3471;296:38">
              <p className="leading-[normal]">FeedTV Home</p>
            </a>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3471;296:40">
              <p className="leading-[normal]">FeedTV Stream</p>
            </a>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1668:3471;296:42" data-name="About">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1668:3471;296:43">
              ABOUT
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1668:3471;296:44" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3471;296:45">
              <p className="leading-[normal]">Our Team</p>
            </a>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1668:3471;296:47" data-name="Resources">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1668:3471;296:48">
              RESOURCES
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1668:3471;296:49" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3471;296:50">
              <p className="leading-[normal]">Blog</p>
            </a>
            <p className="[word-break:break-word] font-['Lato:Regular'] leading-[normal] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3471;296:52">
              Case Studies
            </p>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3471;296:54">
              <p className="leading-[normal]">Preview Your Ads</p>
            </a>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1668:3471;296:56" data-name="Connect">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1668:3471;296:57">
              CONNECT
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1668:3471;296:58" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" href="https://www.linkedin.com/company/feedmob" data-node-id="I1668:3471;296:59" target="_blank">
              <p className="leading-[normal]">LinkedIn</p>
            </a>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3471;296:61">
              <p className="leading-[normal]">Contact</p>
            </a>
          </div>
        </div>
        <div className="[word-break:break-word] border-[#38424a] border-solid border-t content-stretch flex font-['Lato:Regular'] items-center justify-between leading-[normal] not-italic overflow-clip pt-[26px] relative shrink-0 text-[#8a97a1] text-[13px] w-full whitespace-nowrap" data-node-id="I1668:3471;296:63" data-name="Legal bar">
          <p className="relative shrink-0" data-node-id="I1668:3471;296:64">
            © 2026 FeedTV. A FeedMob company.
          </p>
          <div className="content-stretch flex gap-[22px] items-start overflow-clip relative shrink-0" data-node-id="I1668:3471;296:65" data-name="Legal links">
            <p className="relative shrink-0" data-node-id="I1668:3471;296:66">
              Terms
            </p>
            <p className="relative shrink-0" data-node-id="I1668:3471;296:67">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
      
      
      
    </div>
  );
}
