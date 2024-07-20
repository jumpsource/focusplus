import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

export function Header() {
  return (
    <nav
      className={cn(
        "flex items-end justify-between",
        "w-full gap-4 p-4",
        "fixed"
      )}
    >
      <div className="grow transparent h-8 hidden tablet:block" />
      <div
        className={cn(
          "flex items-center justify-center gap-4",
          "tablet:hidden"
        )}
      >
        <Avatar>
          <AvatarImage
            src="/images/focus-plus_logo.svg"
            alt="Focus plus Logo Avatar"
          />
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
          </div>
        </Avatar>
        <h1 className="text-md font-bold">Jump Source Focus+</h1>
      </div>
      <ThemeSwitcher />
    </nav>
  );
}
