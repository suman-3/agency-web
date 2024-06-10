import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

async function Hero() {
    // const user = await currentUser();
  
    return (
      <div className="container relative z-[2] flex flex-col items-center overflow-hidden border-x border-t bg-background px-6 pt-12 text-center md:pt-20">
        <h1 className="mb-6 text-4xl font-semibold md:text-5xl">
          Connect With Dev.
        </h1>
        <p className="mb-6 h-fit p-2 text-muted-foreground md:max-w-[80%] md:text-xl">
        
        Lorem ipsum dolor sit amet.
          <b className="font-medium text-foreground">
            Lorem ipsum dolor sit amet.
          </b>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quis.
        </p>
        {/* <div className="inline-flex items-center gap-3">
          <Link
            href={!user ? "/auth/register" : "/feed"}
            className={cn(
              buttonVariants({ size: "lg", className: "rounded-full" })
            )}
          >
            Get Started
          </Link>
          {!user ? (
            <a
              href="/auth/login"
              className={cn(
                buttonVariants({
                  size: "lg",
                  variant: "outline",
                  className: "rounded-full bg-background",
                })
              )}
            >
              Log In
            </a>
          ) : null}
        </div> */}
        <div
          className="mb-[-150px] mt-16 size-[300px] rounded-full bg-background md:mb-[-250px] md:size-[500px]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 0%, transparent 40%, hsl(var(--primary)))",
          }}
        />
        <div
          className="absolute inset-0 z-[-1] duration-1000 animate-in fade-in"
          style={{
            backgroundImage: [
              "radial-gradient(ellipse at top, transparent 60%, hsl(var(--primary) / 0.2))",
              "linear-gradient(to bottom, transparent 30%, hsl(var(--primary) / 0.2))",
              "linear-gradient(to bottom, hsl(var(--background)) 40%, transparent)",
              "repeating-linear-gradient(45deg, transparent,transparent 60px, hsl(var(--primary)) 61px, transparent 62px)",
            ].join(", "),
          }}
        />
      </div>
    );
  }

  export default Hero;