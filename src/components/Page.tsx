import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SignupForm from "./SignupForm";

const Page = () => {
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    const tl = gsap.timeline();
    setAnimTimeline(tl, ref1, ref1);
    setAnimTimeline(tl, ref2, ref2);
    setAnimTimeline(tl, ref3, ref3);
  }, []);

  function setAnimTimeline(tl: any, ref: any, trigger: any) {
    tl.fromTo(
      ref.current,
      {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power2.out",
      },

      {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: trigger.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }

  return (
    <>
      <section className="h-[100vh]">
        <div className="flex items-center justify-center h-full w-full flex-col">
          <img
            src="/static/images/logo-dark.svg"
            className="mx-auto"
            width={250}
            alt="The Paths logo"
          />
          <h1 className="text-center text-6xl font-extrabold xl:mt-16 mt-8 leading-0 xl:leading-[85px] flex flex-col justify-center font-tiltwarp mb-4 sm:mb-0">
            Wander no longer.
          </h1>
          <h2 className="text-center mb-8 text:lg xl:text-xl">
            A career-centric portfolio-based social networking app for a new
            era.
          </h2>
          <div className="!flex !flex-col !items-center">
            <a href="#join">
              <button
                type="button"
                className="bg-black text-white px-16 py-4 rounded-md"
              >
                Join the waitlist
              </button>
            </a>
            <a
              href="mailto:rob@paths.network?subject=I want to invest in Paths!"
              className="mt-2 text-center block text-gray-500 underline"
            >
              Invest in Paths
            </a>
          </div>
        </div>
      </section>

      <section className="h-[50vh] w-[75%] mx-auto flex items-center font text-xl">
        <div className="mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Not another job board.
          </h2>
        </div>
      </section>

      <section className="font-poppins">
        <div className="xl:w-[90%] md:w-[80%] sm:mx-auto xl:mx-0 xl:grid xl:grid-cols-9 grid-rows-3 relative z-10 flex flex-col items-center justify-center">
          <div
            className="col-start-3 row-start-1 col-span-6 row-span-1 sm:mx-auto xl:mx-0"
            ref={ref1}
          >
            <div className="lg:grid lg:grid-cols-3 sm:mx-auto bg-white shadow-xl rounded-l-xl relative w-full sm:flex-col lg:flex-row">
              <div className="md:col-span-2 p-14 w-full">
                <h4 className="text-3xl font-bold">More than just a CV.</h4>
                <br />
                <p>
                  Put your portfolio(s) in the spotlight and get hired for your
                  skills, not your background.
                </p>
                <br />
                With paths you showcase your skills and projects, not just your
                education and experience, allowing you to stand out from the
                crowd and put your best foot forwards.
              </div>
              <img
                src="/static/images/baggage.png"
                alt="Showcase your talent."
                width={400}
                className={
                  "absolute lg:-right-32 sm:right-20 -bottom-14 w-[60%] sm:w-1/2"
                }
              />
              <div className="col-start-3 bg-gradient-to-br from-[#2942C9] to-[#AF3577] p-14 rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none" />
            </div>
          </div>
          <div
            className="col-start-2 row-start-2 col-span-6 row-span-1 mt-10"
            ref={ref2}
          >
            <div className="lg:grid lg:grid-cols-3 sm:mx-auto bg-white shadow-xl rounded-l-xl relative w-full sm:flex-col lg:flex-row">
              <div className="col-span-2 p-14">
                <h4 className="text-3xl font-bold">No degree? No problem.</h4>
                <br />
                <p>
                  Lifelong learner or career changer who's been building and
                  developing their skills but no paper to show for it? Paths is
                  for you.
                  <br />
                  <br />
                  Didn't finish that four month project but learnt a ton and
                  made some cool stuff? Show, don't tell.
                </p>
                <br />
                Your whole journey is important not just the end result.
              </div>
              <img
                src="static/images/astronaut.png"
                alt="Showcase your talent."
                width={400}
                className={
                  "absolute xl:-right-32 sm:-right-8 -bottom-20 lg:-bottom-14 w-[40%] lg:w-1/2"
                }
              />
              <div className="col-start-3 bg-gradient-to-br from-[#2942C9] to-[#AF3577] p-14 rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none" />
            </div>
          </div>
          <div
            className="col-start-3 row-start-3 col-span-6 row-span-1 mt-12"
            ref={ref3}
          >
            <div className="lg:grid lg:grid-cols-3 sm:mx-auto bg-white shadow-xl rounded-l-xl relative w-full sm:flex-col lg:flex-row">
              <div className="col-span-2 p-14">
                <h4 className="font-bold text-3xl">Make it matter.</h4>
                <br />
                <p>
                  Paths does away with AI screening and algorithmic gatekeepers.
                </p>
                <br />
                <p>
                  Connect directly with prospects and employers that interest
                  you, or feel comfortable using recruiters to cover the extra
                  bandwidth knowing that they truly have the information they
                  need to make the right choices.
                </p>
                <br />
              </div>
              <img
                src="/static/images/dc.png"
                alt="Showcase your talent."
                width={400}
                className={
                  "absolute xl:-right-32 right-4 sm:-right-8 -bottom-14 w-[50%] sm:w-[45%] lg:w-[40%]"
                }
              />
              <div className="col-start-3 bg-gradient-to-br from-[#2942C9] to-[#AF3577] p-14 rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none" />
            </div>
          </div>
        </div>
      </section>

      <section className="xl:h-[100vh]:mb-24 bg-white w-full mx-auto mt-16 sm:mt-0 mb-24">
        <div className="overflow-hidden mx-auto sm:pt-48">
          <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-8 mb-10 sm:mb-0 sm:gap-y-20 lg:grid-cols-2">
              <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4 flex justify-center">
                <div className="max-w-2xl lg:mx-0 lg:max-w-lg my-auto">
                  <h2 className="text-base font-semibold leading-7 text-indigo-600 sm:text-center lg:text-left">
                    Modern
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    From legacy to leading edge.
                  </p>
                  <div className="mt-6 lg:text-sm text-lg leading-8 text-gray-600 xl:text-lg">
                    Paths brings the recruitment and job-seeking process into
                    the 21st century.
                    <br />
                    <br />
                    Nowadays the lines between normal and unconventional are
                    blurred. People obtain their education, skills, and
                    knowledge through many different means but the hiring
                    process doesn't reflect this at all.
                    <br />
                    <br />
                    We claim to be a meritocracy but we don't act like one.
                    <br />
                    We say we want the best person for the job but we don't give
                    everyone a fair chance to prove themselves. <br />
                    We say papers and degrees don't matter but we still base our
                    decisions on these antiquated "qualifications".
                    <br />
                    <br />
                    It's time to change the game.
                  </div>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none" />
                </div>
              </div>
              <div className="sm:px-6 lg:px-0 sm:flex sm:justify-center">
                <div className="flex mx-auto max-w-2xl sm:mx-0 sm:max-w-none gap-7 justify-center">
                  <img
                    src={"/static/images/iPhones (1).svg"}
                    alt="Product screenshot"
                    width={300}
                    className="max-w-none drop-shadow-md w-[35%] md:w-[40%] lg:w-[50%] xl:w-[50%]"
                  />
                  <img
                    src="/static/images/iPhones (2).svg"
                    alt="Product screenshot"
                    width={300}
                    className="max-w-none drop-shadow-md w-[35%] md:w-[40%] lg:w-[50%] xl:w-[50%]"
                  />
                </div>
                <div
                  className="pointer-events-none absolute inset-0 sm:rounded-3xl"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="xl:h-[100vh] bg-white w-full mx-auto">
        <div className="overflow-hidden mx-auto">
          <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2">
              <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4 flex justify-center">
                <div className="max-w-2xl lg:mx-0 lg:max-w-lg my-auto">
                  <h2 className="text-base font-semibold leading-7 text-indigo-600">
                    Impact
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    For the greater good.
                  </p>
                  <div className="mt-6 lg:text-sm text-lg leading-8 text-gray-600 xl:text-lg xl:w-full">
                    Young people are struggling to find work. The world is
                    changing and the job market is changing with it. We need to
                    change too.
                    <br />
                    <br />
                    In-demand skills rapidly change and we have access to vast
                    amounts of knowledge at our fingertips allowing us to learn
                    what we please, as we please. <br />
                    <br /> Whimsical change is the new normal and nobody should
                    be excluded from the economy and unable to find financial
                    freedom because of it.
                    <br />
                    <br />
                    Paths looks to address these issues with heavy social impact
                    at its core. We want to help people find work, build careers
                    that they love and are passionate about and ultimately live
                    the life they want.
                  </div>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none" />
                </div>
              </div>
              <div className="sm:px-6 lg:px-0">
                <div className="flex mx-auto max-w-2xl sm:mx-0 sm:max-w-none gap-7 pb-12">
                  <img
                    src="/static/images/iPhones (3).svg"
                    alt="Product screenshot"
                    width={300}
                    className="max-w-none drop-shadow-xl mx-auto w-[35%] md:w-[40%] lg:w-[50%] xl:w-[50%]"
                  />
                </div>
                <div
                  className="pointer-events-none absolute inset-0 sm:rounded-3xl"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="xl:h-[100vh] bg-white w-full mx-auto mt-24">
        <div className="overflow-hidden mx-auto">
          <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2">
              <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4 flex justify-center">
                <div className="max-w-2xl lg:mx-0 lg:max-w-lg my-auto">
                  <h2 className="text-base font-semibold leading-7 text-indigo-600">
                    Flexible
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
                    A hat for every head.
                  </p>
                  <div className="mt-6 lg:text-sm text-lg leading-8 text-gray-600 xl:text-lg xl:w-full">
                    Paths is for everyone. Whether you're self-taught, have 3
                    degrees from an ivy league school, are looking for a
                    full-time job, a side hustle, or a gig - Paths has you
                    covered.
                    <br />
                    <br />
                    We're building a platform that allows you to find the
                    opportunities that are right for you, when they're right for
                    you.
                    <br />
                    <br />
                    We're all about flexibility and freedom. We want to give you
                    the tools to build the career you want, not the one you're
                    told you should have. Forge your own path.
                  </div>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none" />
                </div>
              </div>
              <div className="sm:px-6 lg:px-0 flex items-center justify-center">
                <div className="flex mx-auto max-w-2xl sm:mx-0 sm:max-w-none gap-7 justify-center">
                  <img
                    src="/static/images/iPhones (4).svg"
                    alt="Product screenshot"
                    width={300}
                    className="max-w-none drop-shadow-md w-[35%] md:w-[40%] lg:w-[50%] xl:w-[50%]"
                  />
                  <img
                    src="/static/images/iPhones (5).svg"
                    alt="Product screenshot"
                    width={300}
                    className="max-w-none drop-shadow-md w-[35%] md:w-[40%] lg:w-[50%] xl:w-[50%]"
                  />
                </div>
                <div
                  className="pointer-events-none absolute inset-0 sm:rounded-3xl"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="join">
        <div className="mt-32 w-[90%] sm:w-[80%] lg:w-[50%] mx-auto">
          <SignupForm />
        </div>
      </section>
    </>
  );
};

export default Page;
