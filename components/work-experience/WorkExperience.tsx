/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import Selector from "@/components/work-experience/Selector";
import Experience from "@/components/work-experience/Experience";

import { MotionInView } from "@/components/Motion";
import { Button } from "@/components/ui/button";

export default function WorkExperience() {
  const [selected, setSelected] = useState("over-the-reality");

  const handleSelect = (newSelected: string) => {
    setSelected(newSelected);
  };

  return (
    <>
      <div className="grid grid-cols-12  gap-10 sm:gap-24 mt-40">
        <div className="col-span-12 mb-0">
          <MotionInView
            initial="hidden"
            transition={{ duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="font-medium text-4xl text-center mx-auto w-full sm:w-6/12"
          >
            Work Experience
          </MotionInView>
        </div>
        <div className="col-span-12 sm:col-span-4 flex flex-col gap-4">
          <Selector
            handleSelect={handleSelect}
            id="over-the-reality"
            selected={selected}
            title="Over the Reality"
          />
          <Selector
            handleSelect={handleSelect}
            id="archeido"
            selected={selected}
            title="Archeido"
          />
          <Selector
            handleSelect={handleSelect}
            id="ideo"
            selected={selected}
            title="Ideo"
          />
          <Selector
            handleSelect={handleSelect}
            id="playground"
            selected={selected}
            title="< Playground / >"
          />
        </div>
        <div className="col-span-12 sm:col-span-8 relative">
          <AnimatePresence>
            <Experience
              id="over-the-reality"
              selected={selected === "over-the-reality"}
              title="Lead Frontend & Smart Contract Engineer"
              period="April 2021 - present"
              tools={[
                "React",
                "Next.js",
                "Tailwind CSS",
                "Styled Components",
                "MUI",
                "Solidity",
                "Hardhat",
              ]}
            >
              <ul className="mt-6 list-disc pl-4 leading-8">
                <li>
                  Led development of the company's website, marketplace and
                  smart contracts.
                </li>
                <li>
                  Contributed to bug solving and new features development.
                </li>
                <li>Proficiently implemented internationalization (i18n).</li>
                <li>
                  Did analysis on the structure and features of the project so
                  we could refactor and improve the UX.
                </li>
                <li>
                  Collaborated with back-end developers to improve usability.
                </li>
              </ul>
            </Experience>

            <Experience
              id="archeido"
              selected={selected === "archeido"}
              title="Frontend Engineer & UI/UX Designer"
              period="May 2019 - March 2021"
              tools={[
                "React",
                "Gatsby.js",
                "Styled Components",
                "Redux",
                "Redux Saga",
                "Ant Design",
                "Kotlin",
                "Sketch",
              ]}
            >
              <ul className="mt-6 list-disc pl-4 leading-8">
                <li>
                  Designed, developed and mantained a Financial Management
                  Frontend for an investment brokerage firm. Application built
                  with React.js, Redux and Redux-saga to allow collaborators to
                  manage client’s investment assets.
                </li>
                <li>
                  Developed an Android Application written in Kotlin, that
                  allows companies to manage their employees.
                </li>
                <li>Designed an E-commerce mobile app using Sketch.</li>
              </ul>
            </Experience>

            <Experience
              id="ideo"
              selected={selected === "ideo"}
              title="Wordpress Developer"
              period="April 2021 - present"
              tools={["Wordpress", "Anime.js", "GSAP"]}
            >
              <ul className="mt-6 list-disc pl-4 leading-8">
                <li>
                  Developed several pixel-perfect ecommerce web sites using the
                  Wordpress CMS.This role allowed me to learn how to use SCSS so
                  that I could make websites identical to the graphics provided.
                  I have also been able to use GreenSock GSAP to create smooth
                  animations.
                </li>
              </ul>
            </Experience>
            <Experience
              id="playground"
              selected={selected === "playground"}
              title="Playground"
              period="Forever"
              tools={[
                "React",
                "Next.js App Router",
                "Net.js Server Actions",
                "Tailwind CSS",
                "Supabase",
                "Node.js",
              ]}
            >
              <ul className="mt-6 list-disc pl-4 leading-8">
                <li>This is my research, development work place.</li>
                <li>
                  I discover, study new technologies and apply them in personal
                  projects before using them in professional projects.
                </li>
              </ul>
              <a
                href="https://github.com/marcogianni"
                target="_blank"
                className="flex"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" className="mt-6 flex gap-2">
                  <GitHubLogoIcon className=" h-[1rem] w-[1rem]" />
                  GitHub
                </Button>
              </a>
            </Experience>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
