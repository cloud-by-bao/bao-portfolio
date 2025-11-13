import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const text = `Cloud & DevOps engineer focused on automation, scalable infrastructure, and CI/CD excellence.`;

// Updated About paragraph (taken from your GitHub-style summary)
const aboutText = `I'm a passionate Cloud & DevOps Engineer with a strong focus on automating cloud infrastructure and optimizing CI/CD pipelines. I thrive at the intersection of development and operations, helping teams build scalable, secure, and reliable systems across cloud platforms.

🌩️ Core Expertise:
• Cloud: AWS (EC2, S3, IAM, VPC, Lambda, ECS, EKS), Azure, GCP  
• IaC: Terraform, Ansible  
• CI/CD: Jenkins, GitHub Actions, GitLab CI, SonarQube, Nexus, JFrog Artifactory  
• Containers: Docker, Kubernetes  
• Monitoring: Prometheus, Grafana  
• Scripting: Bash, Python, YAML

🎯 I currently work at PCCW Global, managing AWS resources and supporting CI/CD pipelines for large-scale deployments. My mission is to continually improve automation, reliability, and efficiency across multi-cloud environments.

💡 Outside of work, I’m always learning — building labs, exploring serverless architectures, and diving deeper into cloud security and infrastructure automation.
`;

const About = () => {
  const imgRef = useRef(null);

  useGSAP(() => {
    // Page scroll scaling effect
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
      },
      ease: "power1.inOut",
    });

    // Reveal image animation
    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });

    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });

  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Code with purpose, built to scale"}
        title={"About Me"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />

      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="images/man.jpg"
          alt="profile"
          className="w-md rounded-3xl"
        />

        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;

