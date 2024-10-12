'use client'
import React, { useState } from 'react';
import styles from "./Localization.module.scss";
import UkFlag from "@/app/images/uk.png";
import BrFlag from "@/app/images/br.png";
import RusFlag from "@/app/images/rus.png";
import Image from 'next/image';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';


const Localization = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);




  

  return (
    <>
                <Dropdown
              isOpen={isOpen}
              classNames={{
                base: "flex-row ",
                content: "bg-custom p-[32px] z-[999999999] relative border-custom-bottom min-w-0",
              }}
              onOpenChange={(state) => setIsOpen(state)}
            >


              
              <DropdownTrigger  className="aria-expanded:opacity-100" >  
    <div className={styles.localization}>
          <p> Українська</p>
          <Image src={UkFlag} width={64} height={64} alt="Flag localization" />
        </div>
        </DropdownTrigger>
        <DropdownMenu
                variant="flat"
                classNames={{
                  list: "flex  gap-[32px]",
                  base: "p-[0px]",
                }}
              >
               
                  <DropdownItem className={`flex items-center no-hover p-0 px-0 grow w-auto `}
                  >
                    <div className={`${styles.lang_option} ${styles.selected}`}>
                        <p>Українська</p>
                        <Image src={UkFlag} width={64} height={64} alt="Flag localization" />
                    </div>
                  </DropdownItem>
                  <DropdownItem className={`flex items-center no-hover p-0 px-0 grow w-auto `}
                  >
                    <div className={styles.lang_option}>
                        <p>Англійська</p>
                        <Image src={BrFlag} width={64} height={64} alt="Flag localization" />
                    </div>
                  </DropdownItem>
                  <DropdownItem className={`flex items-center no-hover p-0 px-0 grow w-auto `}
                  >
                    <div className={styles.lang_option}>
                        <p>російська</p>
                        <Image src={RusFlag} width={64} height={64} alt="Flag localization" />
                    </div>
                  </DropdownItem>

                  </DropdownMenu>
        </Dropdown>
    </>
  )
}

export default Localization