import type { IconBaseProps } from "react-icons/lib";
import { Icon } from "../Icon";
import { LuMoonStar } from "react-icons/lu";

export function DarkThemeIcon({
  ...props
}: Readonly<React.PropsWithChildren<IconBaseProps>>) {
  return (
    <Icon {...props}>
      <LuMoonStar />
    </Icon>
  );
}
