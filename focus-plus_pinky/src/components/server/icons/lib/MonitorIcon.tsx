import type { IconBaseProps } from "react-icons/lib";
import { Icon } from "../Icon";
import { LuMonitor } from "react-icons/lu";

export function MonitorIcon({
  ...props
}: Readonly<React.PropsWithChildren<IconBaseProps>>) {
  return (
    <Icon {...props}>
      <LuMonitor />
    </Icon>
  );
}
