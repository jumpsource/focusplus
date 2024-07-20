import type { IconBaseProps } from "react-icons/lib";
import { Icon } from "../Icon";
import { FaGoogle } from "react-icons/fa";

export function GoogleIcon({
  ...props
}: Readonly<React.PropsWithChildren<IconBaseProps>>) {
  return (
    <Icon {...props}>
      <FaGoogle />
    </Icon>
  );
}
