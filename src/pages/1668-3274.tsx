import React from "react";
const imgImgTeamHeadshotAndrewTan = "/assets/1668-3274-imgImgTeamHeadshotAndrewTan.png";
const imgImgTeamHeadshotSarahHawley = "/assets/1668-3274-imgImgTeamHeadshotSarahHawley.png";
const imgImgTeamHeadshotKenLu = "/assets/1668-3274-imgImgTeamHeadshotKenLu.png";
const imgImgTeamWhoWeAre = "/assets/1668-3274-imgImgTeamWhoWeAre.png";
const imgImgTeamHero = "/assets/1668-3274-imgImgTeamHero.png";
const imgFeedtvLogoOfficial = "/assets/1668-3274-imgFeedtvLogoOfficial.svg";
const imgMark = "/assets/1668-3274-imgMark.svg";
const imgWordmark = "/assets/1668-3274-imgWordmark.svg";
const imgSearchIcon = "/assets/1668-3274-imgSearchIcon.svg";

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
    <div className={className || "bg-[rgba(255,255,255,0)] h-[22px] relative w-[68px]"} id={isHover ? "node-1668_3622" : "node-1668_3620"}>
      <div className={`-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-["Lato:Regular"] h-[22px] justify-center leading-[0] left-0 not-italic text-[16px] top-[11px] w-[68px] ${isHover ? "text-[#00b5ad]" : "text-[#4c5864]"}`} id={isHover ? "node-1668_3623" : "node-1668_3621"}>
        <p className="leading-[22px]">Our Team</p>
      </div>
    </div>
  );
}

type Reveal04TeamLeadershipProps = {
  className?: string;
  state?: "End" | "Start";
};

function Reveal04TeamLeadership({ className, state = "End" }: Reveal04TeamLeadershipProps) {
  const isEnd = state === "End";
  const isStart = state === "Start";
  return (
    <div className={className || `content-stretch flex flex-col gap-[32px] h-[880px] items-start pb-[100px] pt-[65px] px-[120px] relative w-[1440px] ${isStart ? "bg-[rgba(255,255,255,0.01)]" : ""}`} id={isStart ? "node-1871_2675" : "node-1871_2674"}>
      <div className={`content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full ${isStart ? "" : ""}`} id={isStart ? "node-1871_2656" : "node-1871_2637"} data-name="Head">
        <p className="[word-break:break-word] font-['Lato:Bold'] leading-[1.27] not-italic relative shrink-0 text-[#00b5ad] text-[38px] text-center w-full" id={isStart ? "node-1871_2657" : "node-1871_2638"}>
          Our Founding Team
        </p>
      </div>
      <div className={`content-stretch flex gap-[22px] items-start overflow-clip relative shrink-0 w-full ${isStart ? "" : ""}`} id={isStart ? "node-1871_2658" : "node-1871_2639"} data-name="People">
        <div className={`bg-white border border-[#e5e7e9] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-w-px overflow-clip p-[32px] relative rounded-[24px] ${isStart ? "h-[625px]" : "h-[481px]"}`} id={isStart ? "node-1871_2659" : "node-1871_2640"} data-name="Person · CEO / Co-Founder">
          {isEnd && (
            <>
              <div className="relative shrink-0 size-[132px]" data-node-id="1871:2641" data-name="img/team-headshot-andrew-tan">
                <img alt="" className="absolute block inset-0 max-w-none size-full" height="132" src={imgImgTeamHeadshotAndrewTan} width="132" />
              </div>
              <p className="[word-break:break-word] font-['Lato:Bold'] leading-[1.28] min-w-full not-italic relative shrink-0 text-[#1d262f] text-[21px] text-center tracking-[-0.315px] w-[min-content]" data-node-id="1871:2642">
                Andrew Tan
              </p>
              <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] min-w-full not-italic relative shrink-0 text-[#008682] text-[12px] text-center tracking-[1.68px] w-[min-content]" data-node-id="1871:2643">
                CEO
              </p>
              <p className="[word-break:break-word] font-['Lato:Regular'] leading-[1.65] min-w-full not-italic relative shrink-0 text-[#a2a4a4] text-[15.5px] text-center w-[min-content]" data-node-id="1871:2644">
                Andrew has been in digital media for over a decade. He is a mobile ad tech pioneer, and started his career as one of the first salespeople in the industry’s programmatic demand side. Although he has a reputable career in sales, Andrew also has a technical foundation in engineering and coding. He is a serial entrepreneur, and enjoys problem solving through innovation; FeedTV is his second successful start-up. In his free time, Andrew loves exploring cities on any two-wheeler and, in fact, can be seen standing on a balancing board while working.
              </p>
            </>
          )}
          {isStart && (
            <>
              <div className="relative shrink-0 size-[132px]" data-node-id="1871:2660" data-name="Headshot slot">
                <img alt="" className="absolute block inset-0 max-w-none size-full" height="132" src={imgImgTeamHeadshotAndrewTan} width="132" />
              </div>
              <p className="[word-break:break-word] font-['Lato:Bold'] leading-[1.28] min-w-full not-italic relative shrink-0 text-[#1d262f] text-[21px] text-center tracking-[-0.315px] w-[min-content]" data-node-id="1871:2661">
                Andrew Tan
              </p>
              <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] min-w-full not-italic relative shrink-0 text-[#008682] text-[12px] text-center tracking-[1.68px] w-[min-content]" data-node-id="1871:2662">
                CEO
              </p>
              <p className="[word-break:break-word] font-['Lato:Regular'] leading-[1.65] min-w-full not-italic relative shrink-0 text-[#a2a4a4] text-[15.5px] text-center w-[min-content]" data-node-id="1871:2663">
                Andrew has been in digital media for over a decade. He is a mobile ad tech pioneer, and started his career as one of the first salespeople in the industry’s programmatic demand side. Although he has a reputable career in sales, Andrew also has a technical foundation in engineering and coding. He is a serial entrepreneur, and enjoys problem solving through innovation; FeedTV is his second successful start-up. In his free time, Andrew loves exploring cities on any two-wheeler and, in fact, can be seen standing on a balancing board while working.
              </p>
            </>
          )}
        </div>
        <div className={`bg-white border border-[#e5e7e9] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-w-px overflow-clip p-[32px] relative rounded-[24px] ${isStart ? "h-[625px]" : "h-[481px]"}`} id={isStart ? "node-1871_2664" : "node-1871_2645"} data-name="Person · Co-Founder">
          {isEnd && (
            <>
              <div className="relative shrink-0 size-[132px]" data-node-id="1871:2646" data-name="img/team-headshot-sarah-hawley">
                <img alt="" className="absolute block inset-0 max-w-none size-full" height="132" src={imgImgTeamHeadshotSarahHawley} width="132" />
              </div>
              <p className="[word-break:break-word] font-['Lato:Bold'] leading-[1.28] min-w-full not-italic relative shrink-0 text-[#1d262f] text-[21px] text-center tracking-[-0.315px] w-[min-content]" data-node-id="1871:2647">
                Sarah Hawley
              </p>
              <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] min-w-full not-italic relative shrink-0 text-[#008682] text-[12px] text-center tracking-[1.68px] w-[min-content]" data-node-id="1871:2648">
                COO
              </p>
              <p className="[word-break:break-word] font-['Lato:Regular'] leading-[1.65] min-w-full not-italic relative shrink-0 text-[#a2a4a4] text-[15.5px] text-center w-[min-content]" data-node-id="1871:2649">
                Sarah started her career in mobile performance during its infancy, working for the industry’s first demand-side platform. Her clients were predominantly made up of top-grossing mobile gaming apps. Sarah ultimately became a multi-vertical and network expert, closing over $2 million a month in revenue. Her reputation has led to partnerships with leading brands and has made her one of the youngest C-level executives in mobile. She’s a proud #womenintech member, and loves traveling, playing music and hanging with her dog Zoey.
              </p>
            </>
          )}
          {isStart && (
            <>
              <div className="relative shrink-0 size-[132px]" data-node-id="1871:2665" data-name="Headshot slot">
                <img alt="" className="absolute block inset-0 max-w-none size-full" height="132" src={imgImgTeamHeadshotSarahHawley} width="132" />
              </div>
              <p className="[word-break:break-word] font-['Lato:Bold'] leading-[1.28] min-w-full not-italic relative shrink-0 text-[#1d262f] text-[21px] text-center tracking-[-0.315px] w-[min-content]" data-node-id="1871:2666">
                Sarah Hawley
              </p>
              <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] min-w-full not-italic relative shrink-0 text-[#008682] text-[12px] text-center tracking-[1.68px] w-[min-content]" data-node-id="1871:2667">
                COO
              </p>
              <p className="[word-break:break-word] font-['Lato:Regular'] leading-[1.65] min-w-full not-italic relative shrink-0 text-[#a2a4a4] text-[15.5px] text-center w-[min-content]" data-node-id="1871:2668">
                Sarah started her career in mobile performance during its infancy, working for the industry’s first demand-side platform. Her clients were predominantly made up of top-grossing mobile gaming apps. Sarah ultimately became a multi-vertical and network expert, closing over $2 million a month in revenue. Her reputation has led to partnerships with leading brands and has made her one of the youngest C-level executives in mobile. She’s a proud #womenintech member, and loves traveling, playing music and hanging with her dog Zoey.
              </p>
            </>
          )}
        </div>
        <div className={`bg-white border border-[#e5e7e9] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-w-px overflow-clip p-[32px] relative rounded-[24px] ${isStart ? "h-[625px]" : "h-[481px]"}`} id={isStart ? "node-1871_2669" : "node-1871_2650"} data-name="Person · CTO">
          {isEnd && (
            <>
              <div className="relative shrink-0 size-[132px]" data-node-id="1871:2651" data-name="img/team-headshot-ken-lu">
                <img alt="" className="absolute block inset-0 max-w-none size-full" height="132" src={imgImgTeamHeadshotKenLu} width="132" />
              </div>
              <p className="[word-break:break-word] font-['Lato:Bold'] leading-[1.28] min-w-full not-italic relative shrink-0 text-[#1d262f] text-[21px] text-center tracking-[-0.315px] w-[min-content]" data-node-id="1871:2652">
                Ken Lu
              </p>
              <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] min-w-full not-italic relative shrink-0 text-[#008682] text-[12px] text-center tracking-[1.68px] w-[min-content]" data-node-id="1871:2653">
                CTO
              </p>
              <p className="[word-break:break-word] font-['Lato:Regular'] leading-[1.65] min-w-full not-italic relative shrink-0 text-[#a2a4a4] text-[15.5px] text-center w-[min-content]" data-node-id="1871:2654">
                Ken has been coding since middle school and has been a professional engineer for over a decade. In his earlier career, Ken won numerous hackathons, eventually co-creating his own while in his 20s. He has led development teams for multiple start-ups and enterprise-level companies such as Bloomberg and Citigroup. Ken is a lifelong student who constantly seeks new skills and knowledge. He is a proud immigrant, avid book reader and can be found meditating in his spare time.
              </p>
            </>
          )}
          {isStart && (
            <>
              <div className="relative shrink-0 size-[132px]" data-node-id="1871:2670" data-name="Headshot slot">
                <img alt="" className="absolute block inset-0 max-w-none size-full" height="132" src={imgImgTeamHeadshotKenLu} width="132" />
              </div>
              <p className="[word-break:break-word] font-['Lato:Bold'] leading-[1.28] min-w-full not-italic relative shrink-0 text-[#1d262f] text-[21px] text-center tracking-[-0.315px] w-[min-content]" data-node-id="1871:2671">
                Ken Lu
              </p>
              <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] min-w-full not-italic relative shrink-0 text-[#008682] text-[12px] text-center tracking-[1.68px] w-[min-content]" data-node-id="1871:2672">
                CTO
              </p>
              <p className="[word-break:break-word] font-['Lato:Regular'] leading-[1.65] min-w-full not-italic relative shrink-0 text-[#a2a4a4] text-[15.5px] text-center w-[min-content]" data-node-id="1871:2673">
                Ken has been coding since middle school and has been a professional engineer for over a decade. In his earlier career, Ken won numerous hackathons, eventually co-creating his own while in his 20s. He has led development teams for multiple start-ups and enterprise-level companies such as Bloomberg and Citigroup. Ken is a lifelong student who constantly seeks new skills and knowledge. He is a proud immigrant, avid book reader and can be found meditating in his spare time.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

type Reveal04TeamHowWeWorkProps = {
  className?: string;
  state?: "End" | "Start";
};

function Reveal04TeamHowWeWork({ className, state = "End" }: Reveal04TeamHowWeWorkProps) {
  const isStart = state === "Start";
  return (
    <div className={className || "h-[482px] relative w-[1440px]"} id={isStart ? "node-1871_2629" : "node-1871_2628"} style={{ backgroundImage: "linear-gradient(161.49346131906498deg, rgb(0, 181, 173) 14.644%, rgb(27, 155, 194) 85.356%)" }}>
      <div className={`-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[28px] items-center left-1/2 not-italic overflow-clip text-[#fafbfb] text-center top-[100px] w-[793px] ${isStart ? "" : ""}`} id={isStart ? "node-1871_2624" : "node-1871_2619"} data-name="Copy">
        <p className="font-['Lato:Bold'] leading-[1.27] relative shrink-0 text-[40px] tracking-[-0.96px] w-full" id={isStart ? "node-1871_2625" : "node-1871_2620"}>
          A Small Number of the Best, On Purpose
        </p>
        <p className="font-['Lato:Regular'] leading-[1.72] relative shrink-0 text-[17.5px] w-full" id={isStart ? "node-1871_2626" : "node-1871_2621"}>
          We partner with a small number of the best marketers in the business — on purpose. We turn down more business than we take on, because we’d rather do exceptional work for a handful of brands than average work for everyone. If you work with us, you get direct access to the team building your campaign, not a rotating account desk.
        </p>
        <p className="font-['Lato:SemiBold'] leading-[1.72] relative shrink-0 text-[17.5px] w-full" id={isStart ? "node-1871_2627" : "node-1871_2622"}>
          We hold ourselves to the same standard our clients hold their mobile channels to: real KPIs, real attribution, real accountability for the results.
        </p>
      </div>
    </div>
  );
}

type Reveal04TeamWhoWeAreProps = {
  className?: string;
  state?: "End" | "Start";
};

function Reveal04TeamWhoWeAre({ className, state = "End" }: Reveal04TeamWhoWeAreProps) {
  const isStart = state === "Start";
  return (
    <div className={className || "bg-[#fafbfb] content-stretch flex flex-col items-start px-[120px] py-[100px] relative w-[1440px]"} id={isStart ? "node-1871_2607" : "node-1871_2606"}>
      <div className={`h-[496px] overflow-clip relative shrink-0 w-full ${isStart ? "" : ""}`} id={isStart ? "node-1871_2598" : "node-1871_2589"} data-name="Row">
        <div className="[word-break:break-word] absolute h-[390px] left-0 not-italic overflow-clip top-[22px] w-[528px]" id={isStart ? "node-1871_2599" : "node-1871_2590"} data-name="Copy">
          <p className="absolute font-['Lato:Bold'] leading-[1.27] left-0 text-[#1d262f] text-[40px] top-0 tracking-[-0.96px] whitespace-nowrap" id={isStart ? "node-1871_2600" : "node-1871_2591"}>
            Obsessed With One Question
          </p>
          <p className="absolute font-['Lato:Light'] leading-[1.72] left-0 text-[#4c5864] text-[17px] top-[64px] w-[528px]" id={isStart ? "node-1871_2601" : "node-1871_2592"}>
            FeedTV started as a performance marketing team that got obsessed with one question: why is the biggest, most attention-grabbing screen in someone’s home still bought like an afterthought?
          </p>
          <p className="absolute font-['Lato:Light'] leading-[1.72] left-0 text-[#4c5864] text-[17px] top-[169px] w-[528px]" id={isStart ? "node-1871_2602" : "node-1871_2593"}>{`We've spent years building direct relationships with the OEMs who own that screen — Samsung, LG, Vizio, TCL, and more. On top of that, we've built an AI-powered platform to buy that inventory the way performance marketers actually think.`}</p>
          <p className="absolute font-['Lato:Regular'] leading-[1.72] left-0 text-[#1d262f] text-[17px] top-[303px] w-[528px]" id={isStart ? "node-1871_2603" : "node-1871_2594"}>{`Most importantly, our platform is built and run by people who've spent over a decade on the mobile growth side — and know exactly what CTV needs to work like performance media.`}</p>
        </div>
        <div className="absolute h-[262px] left-[600px] rounded-tl-[76px] top-[22px] w-[379px]" id={isStart ? "node-1871_2604" : "node-1871_2595"} style={{ backgroundImage: "linear-gradient(145.3441709509324deg, rgb(0, 134, 130) 14.644%, rgb(0, 181, 173) 85.356%)" }} />
        {state === "End" && (
          <div className="absolute h-[370.667px] left-[644px] rounded-[30.989px] top-[68px] w-[556px]" data-node-id="1871:2596" data-name="img/team-who-we-are">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30.989px] size-full" src={imgImgTeamWhoWeAre} />
          </div>
        )}
        {isStart && (
          <div className="absolute h-[370.667px] left-[644px] rounded-[30.989px] top-[68px] w-[556px]" data-node-id="1871:2605" data-name="image 5">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30.989px] size-full" src={imgImgTeamWhoWeAre} />
          </div>
        )}
      </div>
    </div>
  );
}

export default function Component04OurTeam() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pt-[88px] relative size-full" data-node-id="1668:3274" data-name="04 · Our Team">
      <div className="h-[650px] relative shrink-0 w-full" data-node-id="1668:3275" data-name="Hero">
        <div className="-translate-y-1/2 absolute h-[649px] left-0 top-[calc(50%+0.5px)] w-[1440px]" data-node-id="1668:3276" data-name="img/team-hero">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgTeamHero} />
        </div>
        <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[20px] items-start left-[120px] not-italic overflow-clip top-[104px] w-[592px]" data-node-id="1668:3277" data-name="Copy">
          <h1 className="font-['Lato:Bold'] leading-[1.27] relative shrink-0 text-[#1d262f] text-[52px] tracking-[-1.456px] w-full" data-node-id="1668:3278">
            Building the Platform That Runs the Biggest Screen in the House
          </h1>
          <p className="font-['Lato:Regular'] leading-[1.68] relative shrink-0 text-[#4c5864] text-[19px] w-full" data-node-id="1668:3279">
            We’ve spent over a decade in mobile performance. Now we’re putting that experience — and a serious amount of machine learning — behind the fastest-growing screen in advertising.
          </p>
        </div>
      </div>
      <Reveal04TeamWhoWeAre className="bg-[#fafbfb] content-stretch flex flex-col items-start px-[120px] py-[100px] relative shrink-0 w-full" state="End" />
      <Reveal04TeamHowWeWork className="h-[482px] relative shrink-0 w-full" state="End" />
      <Reveal04TeamLeadership className="bg-[rgba(255,255,255,0.01)] content-stretch flex flex-col gap-[32px] h-[880px] items-start pb-[100px] pt-[65px] px-[120px] relative shrink-0 w-full" state="End" />
      <div className="content-stretch flex flex-col items-center px-[120px] py-[92px] relative shrink-0 w-full" data-node-id="1668:3329" style={{ backgroundImage: "linear-gradient(165.5525722197323deg, rgb(0, 181, 173) 14.644%, rgb(27, 155, 194) 85.356%)" }} data-name="Closing CTA">
        <div className="content-stretch flex flex-col gap-[32px] items-center overflow-clip relative shrink-0 w-[840px]" data-node-id="1668:3330" data-name="Copy">
          <p className="[word-break:break-word] font-['Lato:Bold'] leading-[1.27] min-w-full not-italic relative shrink-0 text-[42px] text-center text-white tracking-[-1.008px] w-[min-content]" data-node-id="1668:3331">
            Want to Build the Future of CTV Performance With Us?
          </p>
          <a className="bg-white content-stretch cursor-pointer flex items-center overflow-clip px-[30px] py-[15px] relative rounded-[999px] shrink-0" data-node-id="1668:3332" data-name="Button · Get In Touch">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[#008682] text-[15.5px] text-left whitespace-nowrap" data-node-id="1668:3333">
              View our careers page
            </p>
          </a>
        </div>
      </div>
      <div className="bg-[#1d262f] content-stretch flex flex-col gap-[44px] items-start overflow-clip pb-[40px] pt-[72px] px-[120px] relative shrink-0 w-full" data-node-id="1668:3334" data-name="Footer">
        <div className="content-stretch flex gap-[40px] items-start overflow-clip relative shrink-0 w-full" data-node-id="I1668:3334;296:23" data-name="Columns">
          <div className="content-stretch flex flex-col gap-[18px] items-start overflow-clip relative shrink-0 w-[380px]" data-node-id="I1668:3334;296:24" data-name="Brand">
            <a className="bg-[rgba(255,255,255,0.01)] content-stretch cursor-pointer flex gap-[10px] h-[30px] items-center relative shrink-0 w-[132px]" data-node-id="I1668:3334;296:25" data-name="Logo">
              <div className="h-[41.202px] relative shrink-0 w-[136.61px]" data-node-id="I1668:3334;4131:5114" data-name="feedtv logo · official">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFeedtvLogoOfficial} />
              </div>
            </a>
            <p className="[word-break:break-word] font-['Lato:Light'] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#8a97a1] text-[15px] w-[min-content]" data-node-id="I1668:3334;296:34">
              Premium CTV inventory, bought direct from the manufacturers. A FeedMob company.
            </p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1668:3334;296:35" data-name="Products">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1668:3334;296:36">
              PRODUCTS
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1668:3334;296:37" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3334;296:38">
              <p className="leading-[normal]">FeedTV Home</p>
            </a>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3334;296:40">
              <p className="leading-[normal]">FeedTV Stream</p>
            </a>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1668:3334;296:42" data-name="About">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1668:3334;296:43">
              ABOUT
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1668:3334;296:44" data-name="Gap" />
            <p className="[word-break:break-word] font-['Lato:Regular'] leading-[normal] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3334;296:45">
              Our Team
            </p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1668:3334;296:47" data-name="Resources">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1668:3334;296:48">
              RESOURCES
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1668:3334;296:49" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3334;296:50">
              <p className="leading-[normal]">Blog</p>
            </a>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3334;296:52">
              <p className="leading-[normal]">Case Studies</p>
            </a>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3334;296:54">
              <p className="leading-[normal]">Preview Your Ads</p>
            </a>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-w-px overflow-clip relative" data-node-id="I1668:3334;296:56" data-name="Connect">
            <p className="[word-break:break-word] font-['Lato:Bold'] leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[1.68px] whitespace-nowrap" data-node-id="I1668:3334;296:57">
              CONNECT
            </p>
            <div className="h-[4px] relative shrink-0 w-px" data-node-id="I1668:3334;296:58" data-name="Gap" />
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" href="https://www.linkedin.com/company/feedmob" data-node-id="I1668:3334;296:59" target="_blank">
              <p className="leading-[normal]">LinkedIn</p>
            </a>
            <a className="[word-break:break-word] block cursor-pointer font-['Lato:Regular'] leading-[0] not-italic relative shrink-0 text-[#8a97a1] text-[15px] whitespace-nowrap" data-node-id="I1668:3334;296:61">
              <p className="leading-[normal]">Contact</p>
            </a>
          </div>
        </div>
        <div className="[word-break:break-word] border-[#38424a] border-solid border-t content-stretch flex font-['Lato:Regular'] items-center justify-between leading-[normal] not-italic overflow-clip pt-[26px] relative shrink-0 text-[#8a97a1] text-[13px] w-full whitespace-nowrap" data-node-id="I1668:3334;296:63" data-name="Legal bar">
          <p className="relative shrink-0" data-node-id="I1668:3334;296:64">
            © 2026 FeedTV. A FeedMob company.
          </p>
          <div className="content-stretch flex gap-[22px] items-start overflow-clip relative shrink-0" data-node-id="I1668:3334;296:65" data-name="Legal links">
            <p className="relative shrink-0" data-node-id="I1668:3334;296:66">
              Terms
            </p>
            <p className="relative shrink-0" data-node-id="I1668:3334;296:67">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
      
      
      
    </div>
  );
}
