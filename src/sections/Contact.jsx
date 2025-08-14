// src/pages/Contact.jsx
import { useGSAP } from "@gsap/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import gsap from "gsap";
import { socials } from "../constants";

const Contact = () => {
  const text = `Got a question about my cloud or DevOps experience?
Let’s discuss how I can help your team across platforms, automation, and infrastructure!`;

  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.2,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section id="contact" className="flex flex-col justify-between min-h-screen bg-black">
      <div>
        <AnimatedHeaderSection
          subTitle={"You dream it, I code it"}
          title={"Contact"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />

        <div className="flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10">
          <div className="flex flex-col w-full gap-10">

            {/* Email */}
            <div className="social-link">
              <h2>E-mail</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">
                <a href="mailto:Baodevops21@gmail.com" className="hover:text-white/80">
                  baodevops21@gmail.com
                </a>
              </p>
            </div>

            {/* Phone */}
            <div className="social-link">
              <h2>Phone</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl lowercase md:text-2xl lg:text-3xl">
                <a href="tel:+19377018752" className="hover:text-white/80">
                  937-701-8752
                </a>
              </p>
            </div>

            {/* Social Media */}
            <div className="social-link">
              <h2>Social Media</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <div className="flex flex-wrap gap-4">
                {Array.isArray(socials) &&
                  socials.map((social, index) => {
                    const Icon = social.Icon; // Component from constants
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-xs leading-loose tracking-widest uppercase md:text-sm hover:text-white/80 transition-colors duration-200"
                      >
                        <Icon size={30} className="text-white" />
                        {social.name}
                      </a>
                    );
                  })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

