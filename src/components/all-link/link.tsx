import React, { useMemo } from "react";

import { Connection } from './link.styled'

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export const Link = (props: LinkProps) => {
  const isExternal = useMemo(() => props.href?.startsWith('http'), [props.href]);

  const linkProps: any = {}

  if (isExternal) {
    linkProps.target = '_blank'
    linkProps.rel = 'noopener noreferrer'
  }

  return (
    <Connection reloadDocument={isExternal} to={props.href} {...linkProps}>
      {props.children}
    </Connection>
  );
};