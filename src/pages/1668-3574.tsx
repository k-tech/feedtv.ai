import React from "react";
const imgConfirmationMark = "/assets/1668-3574-imgConfirmationMark.svg";
const imgFeedtvLogoOfficial = "/assets/1668-3574-imgFeedtvLogoOfficial.svg";
const imgMark = "/assets/1668-3574-imgMark.svg";
const imgWordmark = "/assets/1668-3574-imgWordmark.svg";
const imgSearchIcon = "/assets/1668-3574-imgSearchIcon.svg";

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

type Reveal10ThanksThankYouProps = {
  className?: string;
  state?: "End" | "Start";
};

function Reveal10ThanksThankYou({ className, state = "End" }: Reveal10ThanksThankYouProps) {
  const isStart = state === "Start";
  return (
    <div className={className || `content-stretch flex flex-col items-center px-[120px] py-[150px] relative w-[1440px] ${isStart ? "bg-[rgba(255,255,255,0.01)]" : ""}`} id={isStart ? "node-1871_4744" : "node-1871_4743"}>
      <div className={`content-stretch flex flex-col gap-[20px] items-center overflow-clip relative shrink-0 w-[720px] ${isStart ? "" : ""}`} id={isStart ? "node-1871_4733" : "node-1871_4722"} data-name="Copy">
        <div className="relative shrink-0 size-[72px]" id={isStart ? "node-1893_2459" : "node-1893_2457"} data-name="Confirmation mark">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgConfirmationMark} />
        </div>
        <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[#00b5ad] text-[12px] tracking-[1.92px] whitespace-nowrap" id={isStart ? "node-1871_4735" : "node-1871_4724"}>
          MESSAGE RECEIVED
        </p>
        <p className="[word-break:break-word] font-['Lato:Bold'] leading-[1.27] min-w-full not-italic relative shrink-0 text-[#1d262f] text-[42px] text-center tracking-[-1.008px] w-[min-content]" id={isStart ? "node-1871_4736" : "node-1871_4725"}>
          Thanks — we’ll be in touch shortly.
        </p>
        <div className="[word-break:break-word] font-['Lato:Light'] leading-[0] min-w-full not-italic relative shrink-0 text-[#4c5864] text-[18px] text-center w-[min-content] whitespace-pre-wrap" id={isStart ? "node-1871_4737" : "node-1871_4726"}>
          <p className="leading-[1.68] mb-0">{`Someone from the team will reply within one business day. `}</p>
          <p className="leading-[1.68]">In the meantime, have a look at how we measure CTV.</p>
        </div>
        <div className="content-stretch cursor-pointer flex gap-[13px] items-start overflow-clip relative shrink-0" id={isStart ? "node-1871_4738" : "node-1871_4727"} data-name="CTAs">
          <a className="bg-[#00b5ad] content-stretch flex items-center overflow-clip px-[30px] py-[15px] relative rounded-[999px] shrink-0" id={isStart ? "node-1871_4739" : "node-1871_4728"} data-name="Button · Read the blog">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[15.5px] text-left text-white whitespace-nowrap" id={isStart ? "node-1871_4740" : "node-1871_4729"}>
              Read the blog
            </p>
          </a>
          <a className="bg-[rgba(255,255,255,0.01)] border-2 border-[#b2b7bd] border-solid content-stretch flex items-center overflow-clip px-[30px] py-[15px] relative rounded-[999px] shrink-0" id={isStart ? "node-1871_4741" : "node-1871_4730"} data-name="Button · Back to home">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[#1d262f] text-[15.5px] text-left whitespace-nowrap" id={isStart ? "node-1871_4742" : "node-1871_4731"}>
              Back to home
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Component10ThankYou() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pt-[88px] relative size-full" data-node-id="1668:3574" data-name="10 · Thank You">
      <Reveal10ThanksThankYou className="bg-[rgba(255,255,255,0.01)] content-stretch flex flex-col items-center px-[120px] py-[150px] relative shrink-0 w-full" state="End" />
      <div className="bg-[#1d262f] content-stretch flex flex-col gap-[44px] items-start overflow-clip pb-[40px] pt-[72px] px-[120px] relative shrink-0 w-full" data-node-id="1668:3586" data-name="Footer">
        <div className="content-stretch flex gap-[40px] items-start overflow-clip relative shrink-0 w-full" data-node-id="I1668:3586;296:23" data-name="Columns">
          <div className="content-stretch flex flex-col gap-[18px] items-start overflow-clip relative shrink-0 w-[380px]" data-node-id="I1668:3586;296:24" data-name="Brand">
            <a className="bg-[rgba(255,255,255,0.01)] content-stretch cursor-pointer flex gap-[10px] h-[30px] items-center relative shrink-0 w-[132px]" data-node-id="I1668:3586;296:25" data-name="Logo">
              <div className="h-[41.202px] relative shrink-0 w-[136.61px]" data-node-id="I1668:3586;4131:5114" data-name="feedtv logo · official">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFeedtvLogoOfficial} />
              </div>
            </a>
            <p className="[word-break:break-word] font-['Lato:Light'] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#8a97a1] text-[15px] w-[min-content]" data-node-id="I1668:3586;296:34">
              Premium CTV inventory, bought direct from the manufacturers. A FeedMob company.
            </p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1668:3586;296:35" data-name="Products">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1668:3586;296:36">
              PRODUCTS
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1668:3586;296:37" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3586;296:38">
              <p className="leading-[normal]">FeedTV Home</p>
            </a>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3586;296:40">
              <p className="leading-[normal]">FeedTV Stream</p>
            </a>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1668:3586;296:42" data-name="About">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1668:3586;296:43">
              ABOUT
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1668:3586;296:44" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3586;296:45">
              <p className="leading-[normal]">Our Team</p>
            </a>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1668:3586;296:47" data-name="Resources">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1668:3586;296:48">
              RESOURCES
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1668:3586;296:49" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3586;296:50">
              <p className="leading-[normal]">Blog</p>
            </a>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3586;296:52">
              <p className="leading-[normal]">Case Studies</p>
            </a>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3586;296:54">
              <p className="leading-[normal]">Preview Your Ads</p>
            </a>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1668:3586;296:56" data-name="Connect">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1668:3586;296:57">
              CONNECT
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1668:3586;296:58" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" href="https://www.linkedin.com/company/feedmob" data-node-id="I1668:3586;296:59" target="_blank">
              <p className="leading-[normal]">LinkedIn</p>
            </a>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3586;296:61">
              <p className="leading-[normal]">Contact</p>
            </a>
          </div>
        </div>
        <div className="[word-break:break-word] border-[#38424a] border-solid border-t content-stretch flex font-['Lato:Regular'] items-center justify-between leading-[normal] not-italic overflow-clip pt-[26px] relative shrink-0 text-[#8a97a1] text-[13px] w-full whitespace-nowrap" data-node-id="I1668:3586;296:63" data-name="Legal bar">
          <p className="relative shrink-0" data-node-id="I1668:3586;296:64">
            © 2026 FeedTV. A FeedMob company.
          </p>
          <div className="content-stretch flex gap-[22px] items-start overflow-clip relative shrink-0" data-node-id="I1668:3586;296:65" data-name="Legal links">
            <p className="relative shrink-0" data-node-id="I1668:3586;296:66">
              Terms
            </p>
            <p className="relative shrink-0" data-node-id="I1668:3586;296:67">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
      
      
      
    </div>
  );
}
