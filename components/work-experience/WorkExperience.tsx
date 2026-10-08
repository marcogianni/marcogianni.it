/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import Selector from "@/components/work-experience/Selector";
import Experience from "@/components/work-experience/Experience";
import { Reveal, useMotionSafeTransition } from "@/components/Motion";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { duration, ease } from "@/lib/motion";

const experiences = [
  {
    id: "joivy",
    label: "Joivy",
    title: "Frontend Developer",
    period: "July 2024 - present",
    tools: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Styled Components",
      "Gatsby.js",
    ],
    content: <div className="mt-6 leading-8">Coming soon...</div>,
  },
  {
    id: "over-the-reality",
    label: "Over the Reality",
    title: "Lead Frontend & Smart Contract Engineer",
    period: "April 2021 - present",
    tools: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Styled Components",
      "MUI",
      "Solidity",
      "Hardhat",
    ],
    content: (
      <ul className="mt-6 list-disc pl-4 leading-8">
        <li>
          Led development of the company's website, marketplace and smart
          contracts.
        </li>
        <li>Contributed to bug solving and new features development.</li>
        <li>Proficiently implemented internationalization (i18n).</li>
        <li>
          Did analysis on the structure and features of the project so we could
          refactor and improve the UX.
        </li>
        <li>Collaborated with back-end developers to improve usability.</li>
      </ul>
    ),
  },
  {
    id: "archeido",
    label: "Archeido",
    title: "Frontend Engineer & UI/UX Designer",
    period: "May 2019 - March 2021",
    tools: [
      "React",
      "Gatsby.js",
      "Styled Components",
      "Redux",
      "Redux Saga",
      "Ant Design",
      "Kotlin",
      "Sketch",
    ],
    content: (
      <ul className="mt-6 list-disc pl-4 leading-8">
        <li>
          Designed, developed and mantained a Financial Management Frontend for
          an investment brokerage firm. Application built with React.js, Redux
          and Redux-saga to allow collaborators to manage client’s investment
          assets.
        </li>
        <li>
          Developed an Android Application written in Kotlin, that allows
          companies to manage their employees.
        </li>
        <li>Designed an E-commerce mobile app using Sketch.</li>
      </ul>
    ),
  },
  {
    id: "ideo",
    label: "Ideo",
    title: "Wordpress Developer",
    period: "April 2021 - present",
    tools: ["Wordpress", "Anime.js", "GSAP"],
    content: (
      <ul className="mt-6 list-disc pl-4 leading-8">
        <li>
          Developed several pixel-perfect ecommerce web sites using the
          Wordpress CMS.This role allowed me to learn how to use SCSS so that I
          could make websites identical to the graphics provided. I have also
          been able to use GreenSock GSAP to create smooth animations.
        </li>
      </ul>
    ),
  },
  {
    id: "playground",
    label: "< Playground / >",
    title: "Playground",
    period: "Forever",
    tools: [
      "React",
      "Next.js App Router",
      "Next.js Server Actions",
      "Tailwind CSS",
      "Supabase",
      "Node.js",
    ],
    content: (
      <>
        <ul className="mt-6 list-disc pl-4 leading-8">
          <li>This is my research, development work place.</li>
          <li>
            I discover, study new technologies and apply them in personal
            projects before using them in professional projects.
          </li>
        </ul>
        <Button variant="secondary" className="mt-6 gap-2" asChild>
          <a
            href="https://github.com/marcogianni"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubLogoIcon className="h-[1rem] w-[1rem]" />
            GitHub
          </a>
        </Button>
      </>
    ),
  },
];

export default function WorkExperience() {
  const [selected, setSelected] = useState("over-the-reality");
  const current = experiences.find(({ id }) => id === selected);

  const enter = useMotionSafeTransition({
    duration: duration.fast,
    ease: ease.out,
  });
  const exit = useMotionSafeTransition({
    duration: duration.exit,
    ease: ease.out,
  });

  return (
    <section className="pt-24 sm:pt-40">
      <SectionHeading eyebrow="Career" title="Work Experience" />
      <Reveal
        distance={24}
        className="sm:grid grid-cols-12 gap-10 sm:gap-16 lg:gap-24"
      >
        <div className="col-span-12 sm:col-span-4 flex flex-col gap-2 sm:gap-3">
          {experiences.map(({ id, label }) => (
            <Selector
              key={id}
              id={id}
              title={label}
              selected={selected}
              handleSelect={setSelected}
            />
          ))}
        </div>
        <div
          id="experience-panel"
          className="relative col-span-12 sm:col-span-8 mt-8 sm:mt-0"
        >
          {/* popLayout crossfades old and new panels instead of waiting for the
              exit to finish, keeping tab switches snappy. */}
          <AnimatePresence mode="popLayout" initial={false}>
            {current && (
              <motion.div
                key={current.id}
                className="w-full"
                initial={{
                  opacity: 0,
                  transform: "translateY(8px)",
                  filter: "blur(4px)",
                }}
                animate={{
                  opacity: 1,
                  transform: "translateY(0px)",
                  filter: "blur(0px)",
                  transition: enter,
                  transitionEnd: { filter: "none" },
                }}
                exit={{
                  opacity: 0,
                  transform: "translateY(-4px)",
                  filter: "blur(4px)",
                  transition: exit,
                }}
              >
                <Experience
                  title={current.title}
                  period={current.period}
                  tools={current.tools}
                >
                  {current.content}
                </Experience>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Reveal>
    </section>
  );
}
