"use client";
import type { IconBaseProps } from "react-icons/lib";
import { Icon } from "../Icon";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

interface ToggleIcon extends React.PropsWithChildren<IconBaseProps> {
  isActive: boolean;
}

export function ToggleEyeIcon({ isActive, ...props }: Readonly<ToggleIcon>) {
  return <Icon {...props}>{isActive ? <LuEye /> : <LuEyeOff />}</Icon>;
}
