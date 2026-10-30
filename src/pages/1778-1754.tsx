import React from "react";
const imgImgCaseStudyArticleBanner = "/assets/1778-1754-imgImgCaseStudyArticleBanner.png";
const imgFeedtvLogoOfficial = "/assets/1778-1754-imgFeedtvLogoOfficial.svg";
const imgMark = "/assets/1778-1754-imgMark.svg";
const imgWordmark = "/assets/1778-1754-imgWordmark.svg";
const imgSearchIcon = "/assets/1778-1754-imgSearchIcon.svg";

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

type Reveal06ACaseArticleBodyProps = {
  className?: string;
  state?: "End" | "Start";
};

function Reveal06ACaseArticleBody({ className, state = "End" }: Reveal06ACaseArticleBodyProps) {
  const isStart = state === "Start";
  return (
    <div className={className || `content-stretch flex flex-col items-center overflow-clip px-[120px] py-[80px] relative w-[1440px] ${isStart ? "bg-[rgba(255,255,255,0.01)]" : ""}`} id={isStart ? "node-1871_4503" : "node-1871_4502"}>
      <div className={`content-stretch flex flex-col gap-[26px] items-start overflow-clip relative shrink-0 w-[760px] ${isStart ? "" : ""}`} id={isStart ? "node-1871_4488" : "node-1871_4473"} data-name="Column">
        <p className="[word-break:break-word] font-['Lato:Bold'] leading-[1.3] not-italic relative shrink-0 text-[#1d262f] text-[26px] w-full" id={isStart ? "node-1871_4489" : "node-1871_4474"}>
          Overview
        </p>
        <p className="[word-break:break-word] font-['Lato:Regular'] leading-[1.75] not-italic relative shrink-0 text-[#444] text-[17.5px] w-full" id={isStart ? "node-1871_4490" : "node-1871_4475"}>
          The client — a leading fintech app — wanted to know whether Samsung CTV was driving genuinely incremental growth, or simply taking credit for conversions that would have happened anyway. Internally they set a 5–10% incrementality benchmark as the threshold for success, and engaged FeedMob to measure causal lift rather than relying on exposure metrics alone.
        </p>
        <p className="[word-break:break-word] font-['Lato:Bold'] leading-[1.3] not-italic relative shrink-0 text-[#1d262f] text-[26px] w-full" id={isStart ? "node-1871_4491" : "node-1871_4476"}>
          Approach
        </p>
        <p className="[word-break:break-word] font-['Lato:Regular'] leading-[1.75] not-italic relative shrink-0 text-[#444] text-[17.5px] w-full" id={isStart ? "node-1871_4492" : "node-1871_4477"}>
          FeedMob ran a PSA methodology: a test-versus-control experiment on Samsung CTV in which one audience received the client’s ad while a matched control group saw an unrelated public service announcement. User-level holdouts were layered in to strengthen confidence in the result.
        </p>
        <div className="[word-break:break-word] bg-[#f0fafa] content-stretch flex flex-col font-['Lato:Regular'] gap-[12px] items-start leading-[1.65] not-italic overflow-clip px-[28px] py-[24px] relative rounded-[12px] shrink-0 text-[#4c5864] text-[16px] w-full whitespace-pre-wrap" id={isStart ? "node-1871_4493" : "node-1871_4478"} data-name="Method">
          <p className="relative shrink-0 w-full" id={isStart ? "node-1871_4494" : "node-1871_4479"}>{`—   Test vs. control on Samsung CTV, with an unrelated PSA served to the control group`}</p>
          <p className="relative shrink-0 w-full" id={isStart ? "node-1871_4495" : "node-1871_4480"}>{`—   User-level holdouts layered on top of the audience split`}</p>
          <p className="relative shrink-0 w-full" id={isStart ? "node-1871_4496" : "node-1871_4481"}>{`—   In-app conversions tracked through AppsFlyer; web conversions through FeedMob’s impression pixel`}</p>
          <p className="relative shrink-0 w-full" id={isStart ? "node-1871_4497" : "node-1871_4482"}>{`—   Methodology independently validated by the client’s own data science team`}</p>
        </div>
        <p className="[word-break:break-word] font-['Lato:Bold'] leading-[1.3] not-italic relative shrink-0 text-[#1d262f] text-[26px] w-full" id={isStart ? "node-1871_4498" : "node-1871_4483"}>
          Results
        </p>
        <p className="[word-break:break-word] font-['Lato:Regular'] leading-[1.75] not-italic relative shrink-0 text-[#444] text-[17.5px] w-full" id={isStart ? "node-1871_4499" : "node-1871_4484"}>
          The test returned a 110% lift in enrollments — more than ten times the client’s original 5–10% goal. Results reached statistical significance ahead of schedule, validating that CTV could drive measurable, incremental growth rather than absorbing credit for organic conversions.
        </p>
        <div className="border-[#00b5ad] border-l-3 border-solid content-stretch flex flex-col items-start overflow-clip pl-[28px] py-[6px] relative shrink-0 w-full" id={isStart ? "node-1871_4500" : "node-1871_4485"} data-name="Pull quote">
          <p className="[word-break:break-word] font-['Lato:Italic'] italic leading-[1.5] relative shrink-0 text-[#1d262f] text-[21px] w-full" id={isStart ? "node-1871_4501" : "node-1871_4486"}>
            Statistical significance was reached ahead of schedule — the lift was not a rounding error on top of organic.
          </p>
        </div>
      </div>
    </div>
  );
}

type Reveal06ACaseResultsStripProps = {
  className?: string;
  state?: "End" | "Start";
};

function Reveal06ACaseResultsStrip({ className, state = "End" }: Reveal06ACaseResultsStripProps) {
  const isStart = state === "Start";
  return (
    <div className={className || "bg-[#f5f6f7] content-stretch flex flex-col items-center overflow-clip px-[120px] py-[48px] relative w-[1440px]"} id={isStart ? "node-1871_4459" : "node-1871_4458"}>
      <div className={`[word-break:break-word] content-stretch flex items-center not-italic overflow-clip relative shrink-0 text-center w-full ${isStart ? "" : ""}`} id={isStart ? "node-1871_4448" : "node-1871_4437"} data-name="Stats">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-center min-w-px overflow-clip relative" id={isStart ? "node-1871_4449" : "node-1871_4438"} data-name="Stat · 110%">
          <p className="font-['Lato:Bold'] leading-[1.15] relative shrink-0 text-[#008682] text-[46px] w-full" id={isStart ? "node-1871_4450" : "node-1871_4439"}>
            110%
          </p>
          <p className="font-['Lato:Regular'] leading-[1.5] relative shrink-0 text-[#4c5864] text-[15px] w-full" id={isStart ? "node-1871_4451" : "node-1871_4440"}>
            lift in enrollments
          </p>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-center min-w-px overflow-clip relative" id={isStart ? "node-1871_4452" : "node-1871_4441"} data-name="Stat · 10×">
          <p className="font-['Lato:Bold'] leading-[1.15] relative shrink-0 text-[#008682] text-[46px] w-full" id={isStart ? "node-1871_4453" : "node-1871_4442"}>
            10×
          </p>
          <p className="font-['Lato:Regular'] leading-[1.5] relative shrink-0 text-[#4c5864] text-[15px] w-full" id={isStart ? "node-1871_4454" : "node-1871_4443"}>
            the client’s original goal
          </p>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-center min-w-px overflow-clip relative" id={isStart ? "node-1871_4455" : "node-1871_4444"} data-name="Stat · 5–10%">
          <p className="font-['Lato:Bold'] leading-[1.15] relative shrink-0 text-[#008682] text-[46px] w-full" id={isStart ? "node-1871_4456" : "node-1871_4445"}>
            5–10%
          </p>
          <p className="font-['Lato:Regular'] leading-[1.5] relative shrink-0 text-[#4c5864] text-[15px] w-full" id={isStart ? "node-1871_4457" : "node-1871_4446"}>
            benchmark set for success
          </p>
        </div>
      </div>
    </div>
  );
}

type Reveal06ACaseArticleImageProps = {
  className?: string;
  state?: "End" | "Start";
};

function Reveal06ACaseArticleImage({ className, state = "End" }: Reveal06ACaseArticleImageProps) {
  const isStart = state === "Start";
  return (
    <div className={className || `content-stretch flex flex-col items-center overflow-clip pb-[56px] px-[120px] relative w-[1440px] ${isStart ? "bg-[rgba(255,255,255,0.01)]" : ""}`} id={isStart ? "node-1871_4432" : "node-1871_4431"}>
      {state === "End" && (
        <div className="h-[420px] relative rounded-[14px] shrink-0 w-full" data-node-id="1871:4428" data-name="img/case-study-article-banner">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[14px]">
            <div className="absolute bg-[#f0fafa] inset-0 rounded-[14px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[14px]">
              <img alt="" className="absolute h-[189.06%] left-[-17.6%] max-w-none top-[0.07%] w-[117.58%]" src={imgImgCaseStudyArticleBanner} />
            </div>
          </div>
        </div>
      )}
      {isStart && (
        <div className="h-[420px] relative rounded-[14px] shrink-0 w-full" data-node-id="1871:4430" data-name="SLOT · Case study hero image">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[14px]">
            <div className="absolute bg-[#f0fafa] inset-0 rounded-[14px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[14px]">
              <img alt="" className="absolute h-[189.06%] left-[-17.6%] max-w-none top-[0.07%] w-[117.58%]" src={imgImgCaseStudyArticleBanner} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Component06ACaseStudyDetailSample() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pt-[88px] relative size-full" data-node-id="1778:1754" data-name="06a · Case Study (detail sample)">
      <div className="content-stretch flex flex-col items-center overflow-clip px-[120px] py-[72px] relative shrink-0 w-full" data-node-id="1778:1781" data-name="Article header">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[18px] items-start not-italic overflow-clip relative shrink-0 w-[760px]" data-node-id="1778:1782" data-name="Column">
          <a className="block cursor-pointer font-['Lato:Regular'] leading-[0] relative shrink-0 text-[#4c5864] text-[15px] w-full" data-node-id="1778:1783">
            <p className="leading-[1.5] whitespace-pre-wrap">{`←  Back to case studies`}</p>
          </a>
          <p className="font-['Lato:Bold'] leading-[1.4] relative shrink-0 text-[#00b5ad] text-[12px] tracking-[1.68px] w-full whitespace-pre-wrap" data-node-id="1778:1784">{`CASE STUDY  ·  FINTECH`}</p>
          <h1 className="font-['Lato:Bold'] leading-[1.18] relative shrink-0 text-[#1d262f] text-[44px] w-full" data-node-id="1778:1785">
            Beyond the Benchmark: Delivering CTV Incrementality for a Leading Fintech App
          </h1>
          <p className="font-['Lato:Regular'] leading-[1.65] relative shrink-0 text-[#4c5864] text-[19px] w-full" data-node-id="1778:1786">
            The client set a 5–10% incrementality benchmark. A PSA test-versus-control experiment on Samsung CTV returned a 110% lift in enrollments — and reached statistical significance ahead of schedule.
          </p>
          <p className="font-['Lato:Regular'] leading-[1.5] relative shrink-0 text-[#a2a4a4] text-[14px] w-full whitespace-pre-wrap" data-node-id="1778:1787">{`Vhince Brimon  ·  28 July 2026  ·  9 min read`}</p>
        </div>
      </div>
      <Reveal06ACaseArticleImage className="bg-[rgba(255,255,255,0.01)] content-stretch flex flex-col items-center overflow-clip pb-[56px] px-[120px] relative shrink-0 w-full" state="End" />
      <Reveal06ACaseResultsStrip className="bg-[#f5f6f7] content-stretch flex flex-col items-center overflow-clip px-[120px] py-[48px] relative shrink-0 w-full" state="End" />
      <Reveal06ACaseArticleBody className="bg-[rgba(255,255,255,0.01)] content-stretch flex flex-col items-center overflow-clip px-[120px] py-[80px] relative shrink-0 w-full" state="End" />
      <div className="content-stretch flex flex-col items-center overflow-clip px-[120px] py-[92px] relative shrink-0 w-full" data-node-id="1778:1817" style={{ backgroundImage: "linear-gradient(167.8128874109096deg, rgb(0, 181, 173) 14.644%, rgb(27, 155, 194) 85.356%)" }} data-name="Closing CTA">
        <div className="content-stretch flex flex-col gap-[32px] items-center overflow-clip relative shrink-0 w-[840px]" data-node-id="1778:1818" data-name="Copy">
          <p className="[word-break:break-word] font-['Lato:Bold'] leading-[1.12] min-w-full not-italic relative shrink-0 text-[42px] text-center text-white w-[min-content]" data-node-id="1778:1819">
            Ready to Protect Your CTV Investment?
          </p>
          <div className="bg-white content-stretch flex items-start overflow-clip px-[30px] py-[15px] relative rounded-[999px] shrink-0" data-node-id="1778:1820" data-name="Button · Contact Us">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[#008682] text-[15px] whitespace-nowrap" data-node-id="1778:1821">
              Contact Us
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#1d262f] content-stretch flex flex-col gap-[44px] items-start overflow-clip pb-[40px] pt-[72px] px-[120px] relative shrink-0 w-full" data-node-id="1778:1822" data-name="Footer">
        <div className="content-stretch flex gap-[40px] items-start overflow-clip relative shrink-0 w-full" data-node-id="I1778:1822;296:23" data-name="Columns">
          <div className="content-stretch flex flex-col gap-[18px] items-start overflow-clip relative shrink-0 w-[380px]" data-node-id="I1778:1822;296:24" data-name="Brand">
            <a className="bg-[rgba(255,255,255,0.01)] content-stretch cursor-pointer flex gap-[10px] h-[30px] items-center relative shrink-0 w-[132px]" data-node-id="I1778:1822;296:25" data-name="Logo">
              <div className="h-[41.202px] relative shrink-0 w-[136.61px]" data-node-id="I1778:1822;4131:5114" data-name="feedtv logo · official">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFeedtvLogoOfficial} />
              </div>
            </a>
            <p className="[word-break:break-word] font-['Lato:Light'] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#8a97a1] text-[15px] w-[min-content]" data-node-id="I1778:1822;296:34">
              Premium CTV inventory, bought direct from the manufacturers. A FeedMob company.
            </p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1778:1822;296:35" data-name="Products">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1778:1822;296:36">
              PRODUCTS
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1778:1822;296:37" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1778:1822;296:38">
              <p className="leading-[normal]">FeedTV Home</p>
            </a>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1778:1822;296:40">
              <p className="leading-[normal]">FeedTV Stream</p>
            </a>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1778:1822;296:42" data-name="About">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1778:1822;296:43">
              ABOUT
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1778:1822;296:44" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1778:1822;296:45">
              <p className="leading-[normal]">Our Team</p>
            </a>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1778:1822;296:47" data-name="Resources">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1778:1822;296:48">
              RESOURCES
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1778:1822;296:49" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1778:1822;296:50">
              <p className="leading-[normal]">Blog</p>
            </a>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1778:1822;296:52">
              <p className="leading-[normal]">Case Studies</p>
            </a>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1778:1822;296:54">
              <p className="leading-[normal]">Preview Your Ads</p>
            </a>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1778:1822;296:56" data-name="Connect">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1778:1822;296:57">
              CONNECT
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1778:1822;296:58" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" href="https://www.linkedin.com/company/feedmob" data-node-id="I1778:1822;296:59" target="_blank">
              <p className="leading-[normal]">LinkedIn</p>
            </a>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1778:1822;296:61">
              <p className="leading-[normal]">Contact</p>
            </a>
          </div>
        </div>
        <div className="[word-break:break-word] border-[#38424a] border-solid border-t content-stretch flex font-['Lato:Regular'] items-center justify-between leading-[normal] not-italic overflow-clip pt-[26px] relative shrink-0 text-[#8a97a1] text-[13px] w-full whitespace-nowrap" data-node-id="I1778:1822;296:63" data-name="Legal bar">
          <p className="relative shrink-0" data-node-id="I1778:1822;296:64">
            © 2026 FeedTV. A FeedMob company.
          </p>
          <div className="content-stretch flex gap-[22px] items-start overflow-clip relative shrink-0" data-node-id="I1778:1822;296:65" data-name="Legal links">
            <p className="relative shrink-0" data-node-id="I1778:1822;296:66">
              Terms
            </p>
            <p className="relative shrink-0" data-node-id="I1778:1822;296:67">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
      
      
      
    </div>
  );
}
