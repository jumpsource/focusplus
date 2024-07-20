import type { IconBaseProps } from "react-icons/lib";
import { Icon } from "../Icon";
import { LuCalendar } from "react-icons/lu";

export function CalendarIcon({
  ...props
}: Readonly<React.PropsWithChildren<IconBaseProps>>) {
  return (
    <Icon {...props}>
      <LuCalendar />
    </Icon>
  );
}
