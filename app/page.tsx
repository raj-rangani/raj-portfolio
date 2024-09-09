import Image from "next/image";
import Link from "next/link";
import PatidarsButton from "./components/PatidarsButton";
import InternetButton from "./components/InternetButton";
import GithubButton from "./components/GithubButton";

export default function Home() {
  return (
    <div className="2xl:max-w-screen-2xl xl:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm max-w-full mx-auto px-8">
      <section
        id="hero-section"
        className="h-screen flex flex-col justify-between py-8 md:py-0 md:pt-10"
      >
        {/* Header section */}
        <div className="flex flex-wrap sm:gap-x-12 gap-y-4 justify-between items-center uppercase font-metropolis-medium leading-4 md:leading-5 tracking-widest text-xs md:text-base">
          <div className="flex flex-col">
            <span>Raj</span>
            <span>Rangani</span>
          </div>
          <div className="flex flex-col items-end xl:items-start">
            <span>Node JS Backend Developer</span>
            <span>React.js Developer</span>
          </div>
          <div className="flex flex-col">
            <span>Available For</span>
            <span>Full Stack / Backend Role</span>
          </div>
          <div className="flex flex-col">
            <Link
              href={"#contact-section"}
              className="uppercase border border-white px-2.5 py-1 rounded-full font-metropolis-medium text-xs md:text-base tracking-normal"
            >
              Contact
            </Link>
          </div>
        </div>
        {/* Description section with role */}
        <div className="flex-[2] flex flex-col">
          <div className="flex-1 uppercase font-metropolis-medium leading-normal md:leading-5 text-lg md:text-base tracking-widest flex flex-col lg:flex-row justify-center xl:justify-between items-start lg:items-end gap-8">
            <div className="max-w-xl text-start p-1 md:p-0">
              <text>
                Originating From Gujarat. I am Skilled in developing RESTful
                APIs and optimizing database performance. Seeking to contribute
                MY technical expertise to innovative projects at your company.
              </text>
            </div>
            <div className="p-1 md:p-0">
              <text>Scroll to Explore</text>
            </div>
          </div>
          <div className="uppercase font-metropolis-bold text-[3rem] xs:text-[3.25rem] sm:text-[4.5rem] md:text-[4.75rem] lg:text-[4.75rem] xl:text-[8.25rem] 2xl:text-[10rem] leading-[3rem] xs:leading-[3.25rem] sm:leading-[4.5rem] md:leading-tight tracking-tight">
            Node Developer
          </div>
        </div>
        {/* Dots in Background */}
        <div className="absolute self-end inset-0 inline-flex h-screen w-[80%] flex-row justify-end items-center -z-10">
          <div className="shape-one"></div>
        </div>
      </section>
      <section id="about-section" className="py-5">
        <h1 className="uppercase font-metropolis-semibold text-lg xl:text-2xl mt-4">
          ... /About Me ...
        </h1>
        <div className="flex flex-col-reverse xl:flex-row justify-between mt-8 xl:mt-12 gap-8">
          {/* About content section */}
          <div className="flex flex-col justify-between gap-6">
            <div className="uppercase font-metropolis-medium text-lg xl:text-2xl flex flex-col">
              <text>
                Hello! Lovely People, i am a{" "}
                <span className="font-metropolis-bold bg-gradient-to-r from-[#00E3BA] to-[#00B9F3] bg-clip-text text-transparent">
                  node js backend developer
                </span>
                .
              </text>
              <text>More than 2 years of experience.</text>
            </div>
            <div className="max-w-2xl flex flex-col gap-6">
              <div className="p-5 xl:p-6 border border-[#303030] rounded-3xl xl:rounded-[30px] font-metropolis-medium flex flex-col gap-2">
                <text className="uppercase text-base xl:text-xl text-[#9D9D9D]">
                  Back-end
                </text>
                <div className="flex flex-wrap gap-y-0 gap-x-2 xl:gap-x-3 w-fit text-sm xl:text-base">
                  <span>Node</span>
                  <span>/</span>
                  <span>Nest</span>
                  <span>/</span>
                  <span>Express</span>
                  <span>/</span>
                  <span>PostgreSQL</span>
                  <span>/</span>
                  <span>Prisma ORM</span>
                  <span>/</span>
                  <span>Spice DB</span>
                  <span>/</span>
                  <span>Neo4j DB</span>
                  <span>/</span>
                  <span>Cypher Query Language</span>
                  <span>/</span>
                  <span>Jest</span>
                </div>
              </div>
              <div className="flex flex-col xl:flex-row gap-8">
                <div className="flex-1 p-5 xl:p-6 border border-[#303030] rounded-3xl xl:rounded-[30px] font-metropolis-medium flex flex-col gap-2">
                  <text className="uppercase text-base xl:text-xl text-[#9D9D9D]">
                    Front-end
                  </text>
                  <div className="flex flex-wrap gap-y-0 gap-x-2 xl:gap-x-3 w-fit text-sm xl:text-base">
                    <span>React</span>
                    <span>/</span>
                    <span>Tailwind CSS</span>
                    <span>/</span>
                    <span>Typescript</span>
                    <span>/</span>
                    <span>Chakra UI</span>
                    <span>/</span>
                    <span>Next.JS</span>
                  </div>
                </div>
                <div className="flex-1 flex justify-center items-center">
                  <GithubButton link="https://github.com/raj-rangani" />
                </div>
              </div>
            </div>
            <div className="uppercase font-metropolis-medium text-sm xl:text-lg hidden xl:block">
              <text>
                Some of the technologies or tools that i&apos;d worked with
              </text>
            </div>
          </div>
          {/* About image section */}
          <Image src={"/images/me.png"} alt="me" width={380} height={470} />
        </div>
      </section>
      <section id="work-section" className="py-10">
        <h1 className="uppercase font-metropolis-semibold text-lg xl:text-2xl mt-4">
          ... /Work ...
        </h1>
        <div className="mt-12">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <div className="uppercase flex flex-col font-metropolis-semibold gap-0.5 text-base">
                <text>
                  <span className="font-metropolis-bold bg-gradient-to-r from-[#00E3BA] to-[#00B9F3] bg-clip-text text-transparent text-xl">
                    Full Stack Developer
                  </span>{" "}
                  <span className="font-metropolis-medium text-sm">
                    [Internship]
                  </span>
                </text>
                <text>Harshit Kunal LLP</text>
              </div>
              <div className="uppercase flex flex-col items-start lg:items-end font-metropolis-semibold gap-0.5 text-base">
                <text className="text-xl">JAN 2022 - APR 2022</text>
                <text>4 Months</text>
              </div>
            </div>
            <div className="flex gap-1 lg:hidden">
              <div className="h-3 w-3 border rounded-full border-gray-600"></div>
              <div className="h-3 w-3 border rounded-full border-gray-600"></div>
              <div className="h-3 w-3 border rounded-full border-gray-600"></div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <div className="uppercase flex flex-col font-metropolis-semibold gap-0.5 text-base">
                <text>
                  <span className="font-metropolis-bold bg-gradient-to-r from-[#00E3BA] to-[#00B9F3] bg-clip-text text-transparent text-xl">
                    Senior Backend Developer
                  </span>
                </text>
                <text>Bhagwad Krupa Softech</text>
              </div>
              <div className="uppercase flex flex-col items-start lg:items-end font-metropolis-semibold gap-0.5 text-base">
                <text className="text-xl">MAY 2022 - PRESENT</text>
                <text>2 Years and 4 Months</text>
              </div>
            </div>
            <div className="flex gap-1 lg:hidden">
              <div className="h-3 w-3 border rounded-full border-gray-600"></div>
              <div className="h-3 w-3 border rounded-full border-gray-600"></div>
              <div className="h-3 w-3 border rounded-full border-gray-600"></div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <div className="uppercase flex flex-col font-metropolis-semibold gap-0.5 text-base">
                <text className="flex flex-col lg:flex-row items-baseline lg:gap-1">
                  <span className="font-metropolis-bold bg-gradient-to-r from-[#00E3BA] to-[#00B9F3] bg-clip-text text-transparent text-xl">
                    Software Developer
                  </span>{" "}
                  <span className="font-metropolis-medium text-sm">
                    [Mid Senior Level - Part Time]
                  </span>
                </text>
                <text>Purpose Digital Real Estate GmBH</text>
              </div>
              <div className="uppercase flex flex-col items-start lg:items-end font-metropolis-semibold gap-0.5 text-base">
                <text className="text-xl">MAR 2024 - JUL 2024</text>
                <text>5 Months</text>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="project-section" className="py-10">
        <h1 className="uppercase font-metropolis-semibold text-lg xl:text-2xl mt-4">
          ... /Projects ...
        </h1>
        <div className="flex flex-col gap-16 md:gap-32">
          {/* Project The Patidars */}
          <div className="mt-12">
            <text className="md:hidden">
              <span className="font-metropolis-bold uppercase bg-gradient-to-r from-[#00E3BA] to-[#00B9F3] bg-clip-text text-transparent text-3xl">
                The Patidars
              </span>
            </text>
            <div className="flex flex-col-reverse lg:flex-row gap-4 mt-6 justify-between">
              <div className="flex-1 max-w-lg">
                <text className="hidden md:block">
                  <span className="font-metropolis-bold uppercase bg-gradient-to-r from-[#00E3BA] to-[#00B9F3] bg-clip-text text-transparent text-3xl">
                    The Patidars
                  </span>
                </text>
                <div className="mt-6 flex flex-col justify-between h-full gap-6">
                  <div className="uppercase font-metropolis-medium text-xs lg:text-base flex flex-wrap gap-x-3 gap-y-2">
                    <div className="px-4 py-2 border border-[#303030] w-fit rounded-full">
                      <text>Neo4j DB</text>
                    </div>
                    <div className="px-4 py-2 border border-[#303030] w-fit rounded-full">
                      <text>Express.JS</text>
                    </div>
                    <div className="px-4 py-2 border border-[#303030] w-fit rounded-full">
                      <text>Zod</text>
                    </div>
                    <div className="px-4 py-2 border border-[#303030] w-fit rounded-full">
                      <text>One signal</text>
                    </div>
                    <div className="px-4 py-2 border border-[#303030] w-fit rounded-full">
                      <text>Slack API</text>
                    </div>
                    <div className="px-4 py-2 border border-[#303030] w-fit rounded-full">
                      <text>CQL</text>
                    </div>
                  </div>
                  <div className="">
                    <h3 className="uppercase font-metropolis-semibold text-base lg:text-lg mb-0.5">
                      The Patidars - Social Media App
                    </h3>
                    <div className="font-metropolis-light text-sm lg:text-lg flex flex-col gap-3">
                      <p>
                        In this project we build a community led social media
                        application for The Patidars community across regions.
                      </p>
                      <p>
                        Design logic for creating Personalised Business Feed
                        based on users location preferences and occupation
                        preferences & native village.
                      </p>
                      <p>
                        Design Database Schema for the entire application like
                        user, business, matrimony, profile, location and more.
                      </p>
                    </div>
                  </div>
                  <PatidarsButton link="https://thepatidars.com/" />
                </div>
              </div>
              <div className="flex-[2] flex flex-wrap justify-end gap-3 md:gap-6 max-w-2xl">
                <Image
                  src={"/images/the-patidars-one.png"}
                  alt="project patidars image one"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[70%] max-w-lg"
                />
                <Image
                  src={"/images/the-patidars-two.png"}
                  alt="project patidars image one"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[25%] max-w-52"
                />
                <div className="flex w-[25%] gap-3 justify-center items-start pt-4">
                  <Image
                    src={"/icons/app-store-white.svg"}
                    alt="project patidars image one"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-[35%]"
                  />
                  <Image
                    src={"/icons/play-store-white.svg"}
                    alt="project patidars image one"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-[35%]"
                  />
                </div>
                <Image
                  src={"/images/the-patidars-logo.png"}
                  alt="project patidars image one"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[25%] max-w-52"
                />
                <Image
                  src={"/images/the-patidars-three.png"}
                  alt="project patidars image one"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[40%] max-w-lg"
                />
              </div>
            </div>
          </div>
          {/* Project Movie DB */}
          <div className="">
            <text className="md:hidden">
              <span className="font-metropolis-bold uppercase bg-gradient-to-r from-[#00E3BA] to-[#00B9F3] bg-clip-text text-transparent text-3xl">
                Movie DB
              </span>
            </text>
            <div className="flex flex-col lg:flex-row gap-4 mt-6 justify-between">
              <div className="flex-[2] flex flex-wrap justify-start gap-3 md:gap-6 max-w-2xl">
                <Image
                  src={"/images/movie-db-one.png"}
                  alt="project patidars image one"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[26%] max-w-52"
                />
                <Image
                  src={"/images/movie-db-two.png"}
                  alt="project patidars image one"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[70%] max-w-lg"
                />
                <Image
                  src={"/images/movie-db-three.png"}
                  alt="project patidars image one"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[60%] md:w-[40%] max-w-lg"
                />
                <Image
                  src={"/images/movie-db-logo.png"}
                  alt="project patidars image one"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[35%] md:w-[25%] max-w-lg"
                />
              </div>
              <div className="flex-1 max-w-lg">
                <text className="hidden md:block">
                  <span className="font-metropolis-bold uppercase bg-gradient-to-r from-[#00E3BA] to-[#00B9F3] bg-clip-text text-transparent text-3xl">
                    Movie DB
                  </span>
                </text>
                <div className="mt-6 flex flex-col h-full gap-9">
                  <div className="uppercase font-metropolis-medium text-xs lg:text-base flex flex-wrap gap-x-3 gap-y-2">
                    <div className="px-4 py-2 border border-[#303030] w-fit rounded-full">
                      <text>React</text>
                    </div>
                    <div className="px-4 py-2 border border-[#303030] w-fit rounded-full">
                      <text>Typescript</text>
                    </div>
                    <div className="px-4 py-2 border border-[#303030] w-fit rounded-full">
                      <text>Movie DB API</text>
                    </div>
                    <div className="px-4 py-2 border border-[#303030] w-fit rounded-full">
                      <text>Chakra CSS</text>
                    </div>
                    <div className="px-4 py-2 border border-[#303030] w-fit rounded-full">
                      <text>Vite</text>
                    </div>
                  </div>
                  <div className="">
                    <h3 className="uppercase font-metropolis-semibold text-base lg:text-lg mb-0.5">
                      Movie DB - User Interface
                    </h3>
                    <div className="font-metropolis-light text-sm lg:text-lg flex flex-col gap-3">
                      <p>
                        Developed a Movie DB website that shows the details of
                        the movie, casts, genre and much more using React
                        (include typescript)
                      </p>
                      <p>
                        In this project i have used chakra css for designing UI
                        Components.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <GithubButton link="https://github.com/raj-rangani/movies-db/" />
                    <InternetButton link="https://movie-database-s90.netlify.app/" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="contact-section"
        className="h-screen py-8 lg:py-10 mt-20 flex flex-col justify-between items-center"
      >
        <div className="uppercase font-metropolis-medium text-sm lg:text-base leading-4 flex flex-col lg:flex-row gap-12 justify-between w-full">
          <div className="flex flex-col justify-between gap-3">
            <div className="flex flex-col">
              <text className="max-w-xl">
                ARE YOU INTERESTED IN COLLABORATING OR HIRE ME TO ELEVATE YOUR
                COMPANY IN THE DIGITAL ERA?
              </text>
              <text>LET&apos;S GET TO WORK.</text>
            </div>
            <Link href={"mailto:iamrajrangani@gmail.com"} target="_blank">
              <div className="border-b border-white w-fit">
                <text>iamrajrangani@gmail.com</text>
              </div>
            </Link>
          </div>
          <div className="flex gap-20 lg:gap-24">
            <div className="flex flex-col gap-2.5">
              <h2>Navigation</h2>
              <div className="flex flex-col gap-1">
                <Link href={"#about-section"}>About Me</Link>
                <Link href={"#work-section"}>Work</Link>
                <Link href={"#project-section"}>Projects</Link>
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <h2>Socials</h2>
              <div className="flex flex-col gap-1">
                <Link
                  target="_blank"
                  href={"https://linkedin.com/in/raj-rangani"}
                >
                  Linked In
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.instagram.com/rajjrangani"}
                >
                  Instagram
                </Link>
                <Link
                  target="_blank"
                  href={"https://api.whatsapp.com/send?phone=917874408892"}
                >
                  Whatsapp
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 justify-center items-center w-full">
          <div className="flex flex-wrap gap-x-10 gap-y-4 justify-center items-center w-full">
            <Image
              src={"/icons/node-mark.svg"}
              alt="arrow-up-right"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[25%] max-w-40"
            />
            <Image
              src={"/icons/next-mark.svg"}
              alt="arrow-up-right"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[25%] max-w-40"
            />
            <Image
              src={"/icons/express-mark.svg"}
              alt="arrow-up-right"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[25%] max-w-40"
            />
            <Image
              src={"/icons/neo4j-mark.svg"}
              alt="arrow-up-right"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[25%] max-w-40"
            />
            <Image
              src={"/icons/prisma-mark.svg"}
              alt="arrow-up-right"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[25%] max-w-40"
            />
          </div>
          <div className="flex gap-4 lg:gap-9 justify-center items-center">
            <Image
              src={"/icons/one-signal-mark.svg"}
              alt="arrow-up-right"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[15%] max-w-14"
            />
            <Image
              src={"/icons/react-mark.svg"}
              alt="arrow-up-right"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[15%] max-w-14"
            />
            <Image
              src={"/icons/spicedb-mark.svg"}
              alt="arrow-up-right"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[15%] max-w-14"
            />
            <Image
              src={"/icons/nest-mark.svg"}
              alt="arrow-up-right"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[15%] max-w-14"
            />
          </div>
        </div>
        <div className="flex flex-col gap-10 uppercase w-full items-center">
          <div className="font-metropolis-medium text-xs lg:text-base flex justify-between w-full tracking-wider leading-3">
            <div className="flex flex-col gap-3 lg:gap-0 flex-1">
              <text className="flex-1">Deployed on Vercel</text>
              <text className="flex-1">Developed in Next.JS</text>
            </div>
            <div className="font-metropolis-semibold text-4xl leading-3 flex flex-1 justify-center items-center">
              <div className="rotate-360 -scale-x-100">
                <text>R</text>
              </div>
              <text>R</text>
            </div>
            <div className="flex flex-col gap-3 lg:gap-0 flex-1">
              <Link href={"#hero-section"} className="flex-1 text-end">
                Back To Top
              </Link>
              <text className="flex-1 text-end">Gujarat, india (+5:30)</text>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
