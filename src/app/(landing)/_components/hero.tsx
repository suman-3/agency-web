"use client";
import { buttonVariants } from "@/components/ui/button";
import { BorderBeam } from "@/components/uianimation/border-beam";
import BoxReveal from "@/components/uianimation/box-reveal-animation";
import { Icons } from "@/components/uianimation/curve-icon";
import ButtonAnimatedGradient from "@/components/uianimation/gradient-button";
import { FadeText } from "@/components/uianimation/text-animation";
import { cn } from "@/lib/utils";
import { GeistMono } from "geist/font/mono";
import Link from "next/link";
import { motion } from "framer-motion";

async function Hero() {
  // const user = await currentUser();

  return (
    <div className="container relative z-[2] flex flex-col items-center overflow-hidden border-x border-t bg-background px-6 pt-12 text-center md:pt-20">
      <BorderBeam size={500} duration={10} delay={6} />
      {/* <FadeText
        className="mb-6 text-4xl font-semibold md:text-6xl bg-gradient-to-b from-black to-gray-700/80 dark:from-white dark:to-slate-400 inline-block text-transparent bg-clip-text tracking-tight "
        direction="down"
        framerProps={{
          show: { transition: { delay: 0.6 } },
        }}
        text="Providing The Best Services & IT"
      /> */}

      <h1 className="mb-5 lg:mb-10 text-4xl font-semibold md:text-6xl bg-gradient-to-b from-black to-gray-700/80 dark:from-white dark:to-slate-400 inline-block text-transparent bg-clip-text tracking-tight  ">
        Providing The Best{" "}
        <span className="relative px-2 bg-gradient-to-b from-black to-gray-700/80 dark:from-white dark:to-slate-400 inline-block text-transparent bg-clip-text tracking-tight">
          Services & IT
          <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-10 text-black dark:text-white" />
        </span>
      </h1>

      <BoxReveal boxColor={"transparent"} duration={0.5}>
        <p
          className={cn(
            GeistMono.variable,
            "font-mono mb-6 h-fit p-2 text-muted-foreground md:max-w-[80%] md:text-xl"
          )}
        >
          We believe in providing
          <b className="font-medium text-foreground">
            {" "}
            Best career opportunities! Excel your growth towards{" "}
          </b>
          future through our virtual internship program today.
        </p>
      </BoxReveal>
      <div className="inline-flex items-center gap-3 z-10">
        <Link href={"/"}>
          <motion.p
            whileHover={{ scale: 1.1 }}
            className={cn(
              buttonVariants({ size: "lg", className: "rounded-full" })
            )}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Get Started
          </motion.p>
        </Link>

        {/* <a
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
        </a> */}
        {/* <ButtonAnimatedGradient/> */}
      </div>
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
