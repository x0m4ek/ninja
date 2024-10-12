"use client";
import React, { useState, useRef } from "react";
import Logo from "../svgs/Logo";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import ArrowDown from "../svgs/ArrowDown";
import Stars from "../svgs/Stars";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { projects } from "../projectsBlock/ProjectsBlock";
import ProjectBlock from "../projectBlock/ProjectBlock";
import Localization from "../localization/Localization";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      setIsOpen(false);
    }, 200); // 200ms delay to allow time to move to dropdown
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    setIsOpen(true);
  };
  
  return (
    <>
  

      <div className={styles.navbar_wrapper}>
      <div className="conteiner">
        <div className={styles.content}>

 
        <div className={styles.logo_wrapper}>
          <Logo />
        </div>
        <div className={styles.menu_wrapper}>
          <ul>
            <li>
              <Link href={"/"}>Головне про нас</Link>
            </li>
            <Dropdown
              isOpen={isOpen}
              classNames={{
                base: "flex-row ",
                content: "bg-custom p-[32px] z-[999999999] pb-[16px] mt-[22px]",
              }}
            >
              <DropdownTrigger  className="aria-expanded:opacity-100" >
                <li>
                  <Link
                    href={"/"}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className={`${isOpen ? styles.active : ''}`}
                  >
                    Приклади рішень <ArrowDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} ${isOpen ? 'active_svg' : ""}`} />
                  </Link>
                </li>
              </DropdownTrigger>

              <DropdownMenu
                variant="flat"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleMouseLeave}
                classNames={{
                  list: "colums-c-2 block colums-c-gap-16  max-w-[980px]",
                  base: "p-[0px]",
                }}
              >
                {projects.map((project, index) => (
                  <DropdownItem key={index} className={`flex items-center no-hover p-0 px-0 grow w-auto mb-[16px]`}
                  >
                    <ProjectBlock
                      icon={project.icon}
                      title={project.title}
                      desc={project.desc}
                      url={project.url}
                    />
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <li>
              <Link href={"#"}>
                <Stars />
                Whitelabel
              </Link>
            </li>
          </ul>
        </div>
       <Localization />
      </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;