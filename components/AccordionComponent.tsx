import React, { ReactNode } from 'react'
import {Accordion, AccordionItem, Avatar} from "@heroui/react";

export const AccordionComponent = ({children,label,itemKey,avatar,subtitle}:{children:ReactNode,label:string,itemKey:string,avatar:string,subtitle:string}) => {
  return (
    <Accordion selectionMode="multiple">
      <AccordionItem
        key={itemKey}
        aria-label={label}
        startContent={
          <Avatar
            isBordered
            color="primary"
            radius="lg"
            src={avatar}
          />
        }
        subtitle={subtitle}
        title={label}
      >
        {children}
      </AccordionItem>
    </Accordion>
  )
}


