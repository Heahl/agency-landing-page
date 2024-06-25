import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [transformHover, setTransformHover] = useState(false);
  const [standOutHover, setStandOutHover] = useState(false);
  const [facebookHover, setFacebookHover] = useState(false);
  const [instagramHover, setInstagramHover] = useState(false);
  const [twitterHover, setTwitterHover] = useState(false);
  const [pinterestHover, setPinterestHover] = useState(false);

  return (
    <>
      <Head>
        <title>sunnyside - Landing Page</title>
        <meta name="description" content="sunnyside-landing-page" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <main className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden bg-white">
        {/* Menu Bar */}
        <div className="fixed top-0 z-20 flex h-20 w-screen items-center justify-between bg-slate-400/50 px-8 backdrop-blur-md backdrop-filter md:h-28">
          {/* Logo */}
          <Image
            className="h-[50%] w-auto"
            src="/images/logo.svg"
            alt="Sunnyside Logo"
            width={100}
            height={100}
          />
          {/* Links */}
          <div className="hidden gap-8 font-barlow text-2xl text-white md:flex md:items-center">
            {/* About */}
            <div>
              <a href="#about">Start</a>
            </div>
            {/* Services */}
            <div>
              <a href="#services">Services</a>
            </div>
            {/* Projects */}
            <div>
              <a href="#projects">Testimonials</a>
            </div>
            {/* Contact */}
            <button className="rounded-full bg-yellow px-8 py-4 font-fraunces font-semibold uppercase">
              CONTACT
            </button>
          </div>
          {/* Mobile Menu Icon */}
          <div
            className="flex hover:cursor-pointer md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Image
              className="h-7 w-auto"
              src="/images/icon-hamburger.svg"
              alt="Hamburger Icon"
              width={100}
              height={100}
            />
          </div>
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <>
              <div className="absolute bottom-0 right-8 h-10 w-10 translate-y-14 triangle" />
              <div className="absolute bottom-0 left-8 right-8 flex h-[380px] translate-y-[430px] flex-col items-center justify-evenly gap-4 bg-white text-xl">
                {/* About */}
                <a href="#about">Start</a>
                {/* Services */}
                <a href="#services">Services</a>
                {/* Projects */}
                <a href="#projects">Testimonials</a>
                {/* Contact */}
                <button className="rounded-full bg-yellow px-8 py-4 font-fraunces font-semibold uppercase">
                  CONTACT
                </button>
              </div>
            </>
          )}
        </div>
        {/* Hero */}
        <div
          className="relative flex h-[60vh] w-screen flex-col items-center justify-center gap-8 px-10 font-fraunces md:h-screen"
          id="about"
        >
          <Image
            src={"/images/mobile/image-header.jpg"}
            width={100}
            height={100}
            alt="Hero Image"
            className="absolute block h-full w-full object-cover md:hidden"
          />
          <Image
            src={"/images/desktop/image-header.jpg"}
            width={100}
            height={100}
            alt="Hero Image"
            className="right-0 top-0 hidden h-full w-full object-cover md:absolute md:block"
          />
          <h1 className="z-10 mt-12 text-center text-6xl font-extrabold uppercase leading-tight tracking-widest text-white">
            we are creatives
          </h1>
          <Image
            src={"/images/icon-arrow-down.svg"}
            width={100}
            height={100}
            alt="Down Arrow"
            className="z-10 h-40 w-12 translate-y-4"
          />
        </div>
        {/* Services */}
        <div className="flex flex-col" id="services">
          {/* Egg + Transform */}
          <div className="flex h-[95vh] w-full flex-col md:h-[70vh] md:flex-row-reverse">
            <Image
              src={"/images/mobile/image-transform.jpg"}
              height={100}
              width={100}
              alt="Transform"
              className="block h-[45%] w-full md:hidden"
            />
            <Image
              src={"/images/desktop/image-transform.jpg"}
              height={100}
              width={100}
              alt="Transform"
              className="hidden h-full w-1/2 md:block"
            />
            <div className="flex h-[55%] flex-col items-center justify-center gap-8 px-8 text-very-dark-desaturated-blue md:h-full md:w-1/2 md:items-start md:gap-16 md:px-28">
              <h2 className="px-4 text-center font-fraunces text-5xl font-extrabold leading-snug md:px-0 md:text-start md:text-6xl">
                Transform your brand
              </h2>
              <p className="text-center font-barlow text-2xl leading-normal  text-dark-grayish-blue md:text-start">
                We are a full-service creative agency specializing in helping
                brands grow fast. Engage your clients through compelling visuals
                that do most of the marketing for you.
              </p>
              <div
                className="relative flex flex-col items-center md:translate-x-2"
                onMouseEnter={() => setTransformHover(true)}
                onMouseLeave={() => setTransformHover(false)}
              >
                <button className="z-10 font-fraunces text-xl font-bold">
                  LEARN MORE
                </button>
                {transformHover ? (
                  <div className="absolute bottom-0 h-3 w-40 rounded-full bg-yellow" />
                ) : (
                  <div className="absolute bottom-0 h-3 w-40 rounded-full bg-yellow/40" />
                )}
              </div>
            </div>
          </div>
          {/* Cup + Stand out */}
          <div className="flex h-[95vh] w-full flex-col md:h-[70vh] md:flex-row">
            <Image
              src={"/images/mobile/image-stand-out.jpg"}
              height={100}
              width={100}
              alt="Transform"
              className="block h-[45%] w-full md:hidden"
            />
            <Image
              src={"/images/desktop/image-stand-out.jpg"}
              height={100}
              width={100}
              alt="Transform"
              className="hidden h-full w-1/2 md:block"
            />
            <div className="flex h-[55%] flex-col items-center justify-center gap-8 px-8 text-very-dark-desaturated-blue md:h-full md:w-1/2 md:items-start md:gap-16 md:px-28">
              <h2 className="px-4 text-center font-fraunces text-5xl font-extrabold leading-snug md:px-0 md:text-start">
                Stand out to the right audience
              </h2>
              <p className="text-center font-barlow text-2xl leading-normal text-dark-grayish-blue md:text-start">
                Using a collaborative formula of designers, researchers,
                photographers, videographers, and copywriters, we'll build and
                extend your brand in digital places.
              </p>
              <div
                className="relative flex translate-x-2 flex-col items-center"
                onMouseEnter={() => setStandOutHover(true)}
                onMouseLeave={() => setStandOutHover(false)}
              >
                <button className="z-10 font-fraunces text-xl font-bold">
                  LEARN MORE
                </button>
                {standOutHover ? (
                  <div className="absolute bottom-0 h-3 w-40 rounded-full bg-soft-red" />
                ) : (
                  <div className="absolute bottom-0 h-3 w-40 rounded-full bg-soft-red/40" />
                )}
              </div>
            </div>
          </div>
          {/* Double */}
          <div className="flex w-full flex-col md:flex-row">
            {/* Graphic Design */}
            <div className="relative h-[85vh] w-full">
              <Image
                src={"/images/mobile/image-graphic-design.jpg"}
                width={100}
                height={100}
                alt="Graphic Design"
                className="absolute h-full w-full object-cover md:hidden"
              />
              <Image
                src={"/images/desktop/image-graphic-design.jpg"}
                width={100}
                height={100}
                alt="Graphic Design"
                className="hidden h-full w-full object-cover md:absolute md:block"
              />
              <div className="absolute bottom-8 z-10 flex h-2/5 w-full flex-col items-center justify-center gap-8 px-8 md:px-36">
                <h2 className="text-center font-fraunces text-4xl font-extrabold text-graphic-design-text">
                  Graphic Design
                </h2>
                <p className="text-center font-barlow text-2xl leading-relaxed text-graphic-design-text">
                  Great design makes you memorable. We deliver artwork that
                  underscores your brand message and captures potential clients'
                  attention.
                </p>
              </div>
            </div>
            {/* Photography */}
            <div className="relative h-[85vh] w-full">
              <Image
                src={"/images/mobile/image-photography.jpg"}
                width={100}
                height={100}
                alt="Graphic Design"
                className="absolute h-full w-full object-cover md:hidden"
              />
              <Image
                src={"/images/desktop/image-photography.jpg"}
                width={100}
                height={100}
                alt="Graphic Design"
                className="hidden h-full w-full object-cover md:absolute md:block"
              />
              <div className="absolute bottom-8 z-10 flex h-2/5 w-full flex-col items-center justify-center gap-8 px-8 md:px-36">
                <h2 className="text-center font-fraunces text-4xl font-extrabold text-photography-text">
                  Photography
                </h2>
                <p className="text-center font-barlow text-2xl leading-relaxed text-photography-text">
                  Increase your credibility by getting the most stunning,
                  high-quality photos that improve your business image.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials */}
        <div
          className="flex h-[175vh] w-full flex-col items-center justify-center gap-20 px-8 md:h-[100vh]"
          id="projects"
        >
          {/* Header */}
          <h1 className="mt-28 text-center font-fraunces text-2xl font-bold uppercase tracking-widest text-grayish-blue">
            Client Testimonials
          </h1>
          {/* Testimonials Grid */}
          <div className="mb-28 grid grid-cols-1 grid-rows-3 gap-16 md:grid-cols-3 md:grid-rows-1">
            {/* Testimonial Emily */}
            <div className="flex h-full w-full flex-col items-center justify-center gap-12">
              <Image
                src={"/images/image-emily.jpg"}
                width={100}
                height={100}
                alt="Emily"
                className="rounded-full"
              />
              <p className="text-center font-barlow text-2xl leading-relaxed text-dark-grayish-blue">
                We put our trust in Sunnyside and they delivered, making sure
                our needs were met and deadlines were always hit.
              </p>
              <div className="flex flex-col items-center justify-center gap-4">
                <h2 className="text-center font-fraunces text-2xl font-bold text-very-dark-desaturated-blue">
                  Emily R.
                </h2>
                <h3 className="text-center font-barlow text-xl font-bold text-grayish-blue">
                  Marketing Director
                </h3>
              </div>
            </div>
            {/* Testimonial Thomas */}
            <div className="flex h-full w-full flex-col items-center justify-center gap-12">
              <Image
                src={"/images/image-thomas.jpg"}
                width={100}
                height={100}
                alt="Thomas"
                className="rounded-full"
              />
              <p className="text-center font-barlow text-2xl leading-relaxed text-dark-grayish-blue">
                Sunnyside's enthusiasm coupled with their keen interest in our
                brand's success made it a satisfying and enjoyable experience.
              </p>
              <div className="flex flex-col items-center justify-center gap-4">
                <h2 className="text-center font-fraunces text-2xl font-bold text-very-dark-desaturated-blue">
                  Thomas S.
                </h2>
                <h3 className="text-center font-barlow text-xl font-bold text-grayish-blue">
                  Chief Operating Officer
                </h3>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="flex h-full w-full flex-col items-center justify-center gap-12">
              <Image
                src={"/images/image-jennie.jpg"}
                width={100}
                height={100}
                alt="Jennie"
                className="rounded-full"
              />
              <p className="text-center font-barlow text-2xl leading-relaxed text-dark-grayish-blue">
                Incredible end result! Our sales increased over 400% when we
                worked with Sunnyside. Highly recommended!
              </p>
              <div className="flex flex-col items-center justify-center gap-4">
                <h2 className="text-center font-fraunces text-2xl font-bold text-very-dark-desaturated-blue">
                  Jennie F.
                </h2>
                <h3 className="text-center font-barlow text-xl font-bold text-grayish-blue">
                  Business Owner
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* Image Gallery */}
        <div className="grid h-[50vh] w-full grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1">
          {/* Gallery 1 */}
          <Image
            src={"/images/mobile/image-gallery-milkbottles.jpg"}
            width={100}
            height={100}
            alt="Milkbottles"
            className="block h-full w-full object-cover md:hidden"
          />
          <Image
            src={"/images/desktop/image-gallery-milkbottles.jpg"}
            width={100}
            height={100}
            alt="Milkbottles"
            className="hidden h-full w-full object-cover md:block"
          />
          {/* Gallery 2 */}
          <Image
            src={"/images/mobile/image-gallery-orange.jpg"}
            width={100}
            height={100}
            alt="Orange"
            className="block h-full w-full object-cover md:hidden"
          />
          <Image
            src={"/images/desktop/image-gallery-orange.jpg"}
            width={100}
            height={100}
            alt="Orange"
            className="hidden h-full w-full object-cover md:block"
          />
          {/* Gallery 3 */}
          <Image
            src={"/images/mobile/image-gallery-cone.jpg"}
            width={100}
            height={100}
            alt="Cone"
            className="block h-full w-full object-cover md:hidden"
          />
          <Image
            src={"/images/desktop/image-gallery-cone.jpg"}
            width={100}
            height={100}
            alt="Cone"
            className="hidden h-full w-full object-cover md:block"
          />
          {/* Gallery 4 */}
          <Image
            src={"/images/mobile/image-gallery-sugar-cubes.jpg"}
            width={100}
            height={100}
            alt="Sugar Cubes"
            className="block h-full w-full object-cover md:hidden"
          />
          <Image
            src={"/images/desktop/image-gallery-sugarcubes.jpg"}
            width={100}
            height={100}
            alt="Sugar Cubes"
            className="hidden h-full w-full object-cover md:block"
          />
        </div>
        {/* Footer */}
        <div className="flex h-[50vh] w-full flex-col items-center justify-evenly bg-footer/40">
          {/* Logo */}
          <Image
            src={"/images/logo-footer.svg"}
            width={100}
            height={100}
            alt="Logo"
            className="h-12 w-auto"
          />
          {/* Links */}
          <div className="flex w-full justify-evenly text-xl text-footer md:px-60">
            {/* About */}
            <a href="#about" className="hover:text-white">
              Start
            </a>
            {/* Services */}
            <a href="#services" className="hover:text-white">
              Services
            </a>
            {/* Projects */}
            <a href="#projects" className="hover:text-white">
              Testimonials
            </a>
          </div>
          {/* Socials */}
          <div className="flex w-full justify-center gap-10">
            {/* Facebook */}
            <div
              className="h-full w-auto hover:cursor-pointer"
              onMouseEnter={() => setFacebookHover(true)}
              onMouseLeave={() => setFacebookHover(false)}
            >
              {facebookHover ? (
                <Image
                  src={"/images/icon-facebook-hover.svg"}
                  width={24}
                  height={24}
                  alt="Facebook Icon"
                  className="h-6 w-auto"
                />
              ) : (
                <Image
                  src={"/images/icon-facebook.svg"}
                  width={24}
                  height={24}
                  alt="Facebook Icon"
                  className="h-6 w-auto"
                />
              )}
            </div>
            {/* Instagram */}
            <div
              className="h-full w-auto hover:cursor-pointer"
              onMouseEnter={() => setInstagramHover(true)}
              onMouseLeave={() => setInstagramHover(false)}
            >
              {instagramHover ? (
                <Image
                  src={"/images/icon-instagram-hover.svg"}
                  width={24}
                  height={24}
                  alt="Instagram Icon"
                  className="h-6 w-auto"
                />
              ) : (
                <Image
                  src={"/images/icon-instagram.svg"}
                  width={24}
                  height={24}
                  alt="Instagram Icon"
                  className="h-6 w-auto"
                />
              )}
            </div>
            {/* Twitter */}
            <div
              className="h-full w-auto hover:cursor-pointer"
              onMouseEnter={() => setTwitterHover(true)}
              onMouseLeave={() => setTwitterHover(false)}
            >
              {twitterHover ? (
                <Image
                  src={"/images/icon-twitter-hover.svg"}
                  width={24}
                  height={24}
                  alt="Twitter Icon"
                  className="h-6 w-auto"
                />
              ) : (
                <Image
                  src={"/images/icon-twitter.svg"}
                  width={24}
                  height={24}
                  alt="Twitter Icon"
                  className="h-6 w-auto"
                />
              )}
            </div>
            {/* Pinterest */}
            <div
              className="h-full w-auto hover:cursor-pointer"
              onMouseEnter={() => setPinterestHover(true)}
              onMouseLeave={() => setPinterestHover(false)}
            >
              {pinterestHover ? (
                <Image
                  src={"/images/icon-pinterest-hover.svg"}
                  width={24}
                  height={24}
                  alt="Pinterest Icon"
                  className="h-6 w-auto"
                />
              ) : (
                <Image
                  src={"/images/icon-pinterest.svg"}
                  width={24}
                  height={24}
                  alt="Pinterest Icon"
                  className="h-6 w-auto"
                />
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
