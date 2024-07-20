import { Icon } from "../Icon";
import { LuSun } from "react-icons/lu";
import type { IconBaseProps } from "react-icons/lib";

export function LightThemeIcon({
  ...props
}: Readonly<React.PropsWithChildren<IconBaseProps>>) {
  return (
    <Icon {...props}>
      <LuSun />
    </Icon>
  );
}
