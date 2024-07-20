import { LoginForm } from "@/components/client/Forms/LoginForm";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  return (
    <section className={cn("flex", "tablet:flex-row-reverse")}>
      <main className="grow flex items-center justify-center min-h-dvh">
        <LoginForm />
      </main>
      <section
        className={cn(
          "flex items-center justify-center grow",
          "min-h-dvh",
          "bg-black",
          "hidden",
          "tablet:flex"
        )}
      >
        <div className={cn("flex items-center justify-center", "p-8 size-48")}>
          <img src={"/images/focus-plus_logo.svg"} alt="Focus Plus Logo" />
        </div>
      </section>
    </section>
  );
}
