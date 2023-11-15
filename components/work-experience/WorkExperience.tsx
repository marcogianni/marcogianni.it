/* eslint-disable react/no-unescaped-entities */
"use client";

import { MotionInView } from "@/components/Motion";
import { AnimatePresence, motion } from "framer-motion";
import Selector from "@/components/work-experience/Selector";
import { useState } from "react";
import Experience from "@/components/work-experience/Experience";

export default function WorkExperience() {
  const [selected, setSelected] = useState("over-the-reality");

  const handleSelect = (newSelected: string) => {
    setSelected(newSelected);
  };

  return (
    <div className="grid grid-cols-12 gap-24 mt-40">
      <div className="col-span-12 mb-0">
        <MotionInView
          initial="hidden"
          transition={{ duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="font-medium text-4xl text-center mx-auto w-6/12"
        >
          Work Experience
        </MotionInView>
      </div>
      <div className="col-span-4 flex flex-col gap-4">
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
      </div>
      <div className="col-span-8 relative">
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
              "GSAP",
              "MUI",
              "Solidity",
              "Hardhat",
            ]}
          >
            <ul className="mt-6 list-disc pl-4 leading-8">
              <li>
                Led development of the company's website, marketplace and smart
                contracts.
              </li>
              <li>Contributed to bug solving and new features development.</li>
              <li>Proficiently implemented internationalization (i18n).</li>
              <li>
                Did analysis on the structure and features of the project so we
                could refactor and improve the UX.
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
            period="April 2021 - present"
            tools={[
              "React",
              "Next.js",
              "Tailwind CSS",
              "Styled Components",
              "GSAP",
              "MUI",
              "Solidity",
              "Hardhat",
            ]}
          >
            <ul className="mt-6 list-disc pl-4 leading-8">
              <li>
                Collaborated with back-end developers to improve usability.
              </li>
              <li>
                Did analysis on the structure and features of the project so we
                could refactor and improve the UX.
              </li>
              <li>
                Led development of the company's website, marketplace and smart
                contracts.
              </li>
            </ul>
          </Experience>
        </AnimatePresence>
      </div>
    </div>
  );
}
