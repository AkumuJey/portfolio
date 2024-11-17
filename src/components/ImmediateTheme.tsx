"use client";

import { ReactNode } from "react";

const ImmediateTheme = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return <>{children}</>;
};

export default ImmediateTheme;
