import React from "react";
import { PlaybookBody } from '../shared';
const imgArtwork = "/assets/1668-3533-imgArtwork.svg";
const imgArtwork1 = "/assets/1668-3533-imgArtwork1.svg";
const imgArtwork2 = "/assets/1668-3533-imgArtwork2.svg";
const imgFeedtvLogoOfficial = "/assets/1668-3533-imgFeedtvLogoOfficial.svg";
const imgMark = "/assets/1668-3533-imgMark.svg";
const imgWordmark = "/assets/1668-3533-imgWordmark.svg";
const imgSearchIcon = "/assets/1668-3533-imgSearchIcon.svg";

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

type Reveal09ArticleArticleBodyProps = {
  className?: string;
  state?: "End" | "Start";
};

function Reveal09ArticleArticleBody({ className, state = "End" }: Reveal09ArticleArticleBodyProps) {
  const isStart = state === "Start";
  return (
    <div className={className || `content-stretch flex flex-col items-center pb-[90px] px-[120px] relative w-[1440px] ${isStart ? "bg-[rgba(255,255,255,0.01)]" : ""}`} id={isStart ? "node-1871_4699" : "node-1871_4698"}>
      <div className={`content-stretch flex flex-col gap-[26px] items-start overflow-clip relative shrink-0 w-[760px] ${isStart ? "" : ""}`} id={isStart ? "node-1871_4679" : "node-1871_4659"} data-name="Column">
        <p className="[word-break:break-word] font-['Lato:Regular'] leading-[1.75] not-italic relative shrink-0 text-[#1d262f] text-[19px] w-full" id={isStart ? "node-1871_4680" : "node-1871_4660"}>
          Connected TV is the fastest-growing line item in most performance budgets, and it’s also the one most marketers trust the least — not because it doesn’t work, but because it’s measured with tools built for a different channel.
        </p>
        <p className="[word-break:break-word] font-['Lato:Bold'] leading-[1.27] not-italic relative shrink-0 text-[#1d262f] text-[26px] tracking-[-0.468px] w-full" id={isStart ? "node-1871_4681" : "node-1871_4661"}>
          Why CTV attribution is a different problem
        </p>
        <p className="[word-break:break-word] font-['Lato:Light'] leading-[1.8] not-italic relative shrink-0 text-[#4c5864] text-[17.5px] w-full" id={isStart ? "node-1871_4682" : "node-1871_4662"}>
          Search and social attribution is click-based: a user taps an ad, an MMP logs a click ID, and when that same device converts, the click gets the credit. CTV doesn’t have a click. A living-room ad plays on a shared household screen, and the signal your MMP has to work with is household IP and user agent proximity — probabilistic, not deterministic.
        </p>
        <div className="bg-[#f0fafa] h-[420px] overflow-clip relative rounded-[18px] shrink-0 w-full" id={isStart ? "node-1871_4683" : "node-1871_4663"} data-name="Image · In-article image">
          <div className="absolute h-[333.078px] left-0 top-[43.46px] w-[760px]" id={isStart ? "node-1998_2342" : "node-1998_2329"} data-name="Artwork">
            <div className="absolute inset-[-32.14%_-24.7%_-34.52%_-11.48%]">
              <img alt="" className="block max-w-none size-full" src={imgArtwork} />
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Lato:Bold'] leading-[1.27] not-italic relative shrink-0 text-[#1d262f] text-[26px] tracking-[-0.468px] w-full" id={isStart ? "node-1871_4687" : "node-1871_4667"}>
          Setting up attribution correctly, before you launch
        </p>
        <p className="[word-break:break-word] font-['Lato:Light'] leading-[1.8] not-italic relative shrink-0 text-[#4c5864] text-[17.5px] w-full" id={isStart ? "node-1871_4688" : "node-1871_4668"}>
          Confirm your MMP passes both IP and user agent on every impression. Set an attribution window that reflects real household behavior — 24 to 72 hours is a reasonable starting point, validated against your own conversion curve. Check IPv4/IPv6 support before you scale spend, and use a dedicated CTV link rather than your mobile click URL.
        </p>
        <p className="[word-break:break-word] font-['Lato:Bold'] leading-[1.27] not-italic relative shrink-0 text-[#1d262f] text-[26px] tracking-[-0.468px] w-full" id={isStart ? "node-1871_4689" : "node-1871_4669"}>
          Incrementality is your ground truth
        </p>
        <p className="[word-break:break-word] font-['Lato:Light'] leading-[1.8] not-italic relative shrink-0 text-[#4c5864] text-[17.5px] w-full" id={isStart ? "node-1871_4690" : "node-1871_4670"}>
          Attribution tells you what a platform credited. Incrementality tells you what actually happened. Running a structured test — holdout groups, geo splits, or PSA-based controls — alongside your attribution data is the only way to know whether CTV is truly driving conversions.
        </p>
        <div className="bg-[#f0fafa] h-[420px] overflow-clip relative rounded-[18px] shrink-0 w-full" id={isStart ? "node-1871_4691" : "node-1871_4671"} data-name="Image · In-article image">
          <div className="absolute h-[333.078px] left-0 top-[43.46px] w-[760px]" id={isStart ? "node-1998_2347" : "node-1998_2334"} data-name="Artwork">
            <div className="absolute inset-[-32.14%_-24.7%_-34.52%_-11.48%]">
              <img alt="" className="block max-w-none size-full" src={imgArtwork1} />
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Lato:Bold'] leading-[1.27] not-italic relative shrink-0 text-[#1d262f] text-[26px] tracking-[-0.468px] w-full" id={isStart ? "node-1871_4695" : "node-1871_4675"}>
          A practical checklist
        </p>
        <p className="[word-break:break-word] font-['Lato:Light'] leading-[1.8] not-italic relative shrink-0 text-[#4c5864] text-[17.5px] w-full" id={isStart ? "node-1871_4696" : "node-1871_4676"}>
          MMP passes IP and user agent on every CTV impression. Attribution window validated against real conversion timing. IPv4/IPv6 support confirmed. Dedicated CTV tracking link. Attribution priority reviewed. An incrementality test scheduled within the first 60–90 days.
        </p>
        <p className="[word-break:break-word] font-['Lato:Light'] leading-[1.6] not-italic relative shrink-0 text-[#a2a4a4] text-[13px] w-full" id={isStart ? "node-1871_4697" : "node-1871_4677"}>
          Explore more practical attribution insights from the FeedTV team in our blog.
        </p>
      </div>
    </div>
  );
}

type Reveal09ArticleArticleImageProps = {
  className?: string;
  state?: "End" | "Start";
};

function Reveal09ArticleArticleImage({ className, state = "End" }: Reveal09ArticleArticleImageProps) {
  const isStart = state === "Start";
  return (
    <div className={className || `content-stretch flex flex-col items-start pb-[44px] px-[120px] relative w-[1440px] ${isStart ? "bg-[rgba(255,255,255,0.01)]" : ""}`} id={isStart ? "node-1871_4652" : "node-1871_4651"}>
      <div className={`bg-[#f0fafa] h-[380px] overflow-clip relative rounded-[24px] shrink-0 w-full ${isStart ? "" : ""}`} id={isStart ? "node-1871_4648" : "node-1871_4644"} data-name="Image · Article hero image">
        <div className="absolute h-[380px] left-[166.47px] top-0 w-[867.064px]" id={isStart ? "node-1998_2321" : "node-1998_2313"} data-name="Artwork">
          <div className="absolute inset-[-32.14%_-24.7%_-34.52%_-11.48%]">
            <img alt="" className="block max-w-none size-full" src={imgArtwork2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Component09ArticleTemplate() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pt-[88px] relative size-full" data-node-id="1668:3533" data-name="09 · Article (template)">
      <div className="content-stretch flex flex-col items-center pb-[34px] pt-[88px] px-[120px] relative shrink-0 w-full" data-node-id="1668:3534" data-name="Article header">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[18px] items-start not-italic overflow-clip relative shrink-0 w-[760px]" data-node-id="1668:3535" data-name="Header">
          <a className="block cursor-pointer font-['Lato:Bold'] leading-[0] relative shrink-0 text-[#008682] text-[14px] whitespace-nowrap" data-node-id="1668:3536">
            <p className="leading-[normal] whitespace-pre">{`←  Back to blog`}</p>
          </a>
          <p className="font-['Lato:Bold'] leading-[normal] relative shrink-0 text-[#00b5ad] text-[12px] tracking-[1.92px] whitespace-nowrap" data-node-id="1668:3537">
            ATTRIBUTION
          </p>
          <h1 className="font-['Lato:Bold'] leading-[1.27] relative shrink-0 text-[#1d262f] text-[46px] tracking-[-1.196px] w-[684px]" data-node-id="1668:3538">
            CTV Attribution Playbook: A Guide to Performance Campaign Success
          </h1>
          <p className="font-['Lato:Light'] leading-[1.68] min-w-full relative shrink-0 text-[#4c5864] text-[19px] w-[min-content]" data-node-id="1668:3539">
            How to set up CTV attribution, measure it honestly, and prove performance — a practical playbook for brands buying Connected TV.
          </p>
          <p className="font-['Lato:Bold'] leading-[normal] min-w-full relative shrink-0 text-[#a2a4a4] text-[12.5px] tracking-[1px] w-[min-content] whitespace-pre-wrap" data-node-id="1668:3540">{`8 min read  ·  FeedTV editorial`}</p>
        </div>
      </div>
      <Reveal09ArticleArticleImage className="bg-[rgba(255,255,255,0.01)] content-stretch flex flex-col items-start pb-[44px] px-[120px] relative shrink-0 w-full" state="End" />
      <PlaybookBody />
      <div className="content-stretch flex flex-col items-center px-[120px] py-[92px] relative shrink-0 w-full" data-node-id="1668:3565" style={{ backgroundImage: "linear-gradient(167.5470472061678deg, rgb(0, 181, 173) 14.644%, rgb(27, 155, 194) 85.356%)" }} data-name="Closing CTA">
        <div className="content-stretch flex flex-col gap-[32px] items-center overflow-clip relative shrink-0 w-[840px]" data-node-id="1668:3566" data-name="Copy">
          <p className="[word-break:break-word] font-['Lato:Bold'] leading-[1.27] min-w-full not-italic relative shrink-0 text-[42px] text-center text-white tracking-[-1.008px] w-[min-content]" data-node-id="1668:3567">
            Want This Applied to Your Campaign?
          </p>
          <a className="bg-white content-stretch cursor-pointer flex items-center overflow-clip px-[30px] py-[15px] relative rounded-[999px] shrink-0" data-node-id="1668:3568" data-name="Button · Book a Meeting">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[#008682] text-[15.5px] text-left whitespace-nowrap" data-node-id="1668:3569">
              Book a Meeting
            </p>
          </a>
        </div>
      </div>
      <div className="bg-[#1d262f] content-stretch flex flex-col gap-[44px] items-start overflow-clip pb-[40px] pt-[72px] px-[120px] relative shrink-0 w-full" data-node-id="1668:3570" data-name="Footer">
        <div className="content-stretch flex gap-[40px] items-start overflow-clip relative shrink-0 w-full" data-node-id="I1668:3570;296:23" data-name="Columns">
          <div className="content-stretch flex flex-col gap-[18px] items-start overflow-clip relative shrink-0 w-[380px]" data-node-id="I1668:3570;296:24" data-name="Brand">
            <a className="bg-[rgba(255,255,255,0.01)] content-stretch cursor-pointer flex gap-[10px] h-[30px] items-center relative shrink-0 w-[132px]" data-node-id="I1668:3570;296:25" data-name="Logo">
              <div className="h-[41.202px] relative shrink-0 w-[136.61px]" data-node-id="I1668:3570;4131:5114" data-name="feedtv logo · official">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFeedtvLogoOfficial} />
              </div>
            </a>
            <p className="[word-break:break-word] font-['Lato:Light'] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#8a97a1] text-[15px] w-[min-content]" data-node-id="I1668:3570;296:34">
              Premium CTV inventory, bought direct from the manufacturers. A FeedMob company.
            </p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1668:3570;296:35" data-name="Products">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1668:3570;296:36">
              PRODUCTS
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1668:3570;296:37" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3570;296:38">
              <p className="leading-[normal]">FeedTV Home</p>
            </a>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3570;296:40">
              <p className="leading-[normal]">FeedTV Stream</p>
            </a>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1668:3570;296:42" data-name="About">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1668:3570;296:43">
              ABOUT
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1668:3570;296:44" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3570;296:45">
              <p className="leading-[normal]">Our Team</p>
            </a>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1668:3570;296:47" data-name="Resources">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1668:3570;296:48">
              RESOURCES
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1668:3570;296:49" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3570;296:50">
              <p className="leading-[normal]">Blog</p>
            </a>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3570;296:52">
              <p className="leading-[normal]">Case Studies</p>
            </a>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3570;296:54">
              <p className="leading-[normal]">Preview Your Ads</p>
            </a>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1668:3570;296:56" data-name="Connect">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1668:3570;296:57">
              CONNECT
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1668:3570;296:58" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" href="https://www.linkedin.com/company/feedmob" data-node-id="I1668:3570;296:59" target="_blank">
              <p className="leading-[normal]">LinkedIn</p>
            </a>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3570;296:61">
              <p className="leading-[normal]">Contact</p>
            </a>
          </div>
        </div>
        <div className="[word-break:break-word] border-[#38424a] border-solid border-t content-stretch flex font-['Lato:Regular'] items-center justify-between leading-[normal] not-italic overflow-clip pt-[26px] relative shrink-0 text-[#8a97a1] text-[13px] w-full whitespace-nowrap" data-node-id="I1668:3570;296:63" data-name="Legal bar">
          <p className="relative shrink-0" data-node-id="I1668:3570;296:64">
            © 2026 FeedTV. A FeedMob company.
          </p>
          <div className="content-stretch flex gap-[22px] items-start overflow-clip relative shrink-0" data-node-id="I1668:3570;296:65" data-name="Legal links">
            <p className="relative shrink-0" data-node-id="I1668:3570;296:66">
              Terms
            </p>
            <p className="relative shrink-0" data-node-id="I1668:3570;296:67">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
      
      
      
    </div>
  );
}
