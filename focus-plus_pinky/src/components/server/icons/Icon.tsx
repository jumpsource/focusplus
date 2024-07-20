import React from "react";
import type { IconBaseProps } from "react-icons/lib";

export function Icon({
  children,
  ...rest
}: React.PropsWithChildren<IconBaseProps>) {
  return React.cloneElement(children as React.ReactElement, { ...rest });
}
