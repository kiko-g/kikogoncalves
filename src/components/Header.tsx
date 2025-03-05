"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

import { clamp } from "@/lib/utilities"
import { navigation } from "@/lib/utils"

import { Container } from "@/components/Container"
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerHeader,
  DrawerTrigger,
  DrawerDescription,
} from "@/components/ui/drawer"

import { SunIcon, MoonIcon, MenuIcon } from "lucide-react"

function MobileNavigation() {
  return (
    <Drawer>
      <DrawerTrigger className="group pointer-events-auto flex items-center justify-center rounded-full bg-white/90 p-[7px] px-3 py-2.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition hover:bg-orange-400/5 hover:ring-orange-900/10 dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20 md:hidden">
        <MenuIcon className="size-4" />
      </DrawerTrigger>

      <DrawerContent className="px-1 pb-4 pt-2">
        <DrawerHeader className="sr-only">
          <DrawerTitle className="sr-only">Navigation</DrawerTitle>
          <DrawerDescription className="sr-only">Drawer menu to navigate through the site</DrawerDescription>
        </DrawerHeader>

        <ul className="mt-4 flex min-h-[200px] flex-col gap-2">
          {navigation.map((item, itemIdx) => {
            const isActive = usePathname() === item.href
            return (
              <li key={`nav-${itemIdx}`}>
                <Link
                  title={item.name}
                  href={item.href}
                  className={cn(
                    isActive
                      ? "bg-zinc-100 font-medium text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
                      : "text-zinc-500 dark:text-zinc-400",
                    "mx-3 flex cursor-pointer items-center justify-start gap-2 rounded-md border-0 px-3 py-2.5 leading-none transition ease-in-out",
                  )}
                >
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </DrawerContent>
    </Drawer>
  )
}

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  let isActive = usePathname() === href

  return (
    <li>
      <Link
        href={href}
        className={cn(
          "relative block rounded-md px-3.5 py-1.5 transition",
          isActive
            ? "bg-gradient-to-br from-blue-500/10 to-blue-500/[15%] text-zinc-800 dark:from-blue-500/20 dark:to-blue-500/30 dark:text-white"
            : "text-zinc-700 hover:bg-zinc-100/70 dark:text-zinc-400 dark:hover:bg-zinc-800/70",
        )}
      >
        {children}
      </Link>
    </li>
  )
}

function DesktopNavigation(props: React.ComponentPropsWithoutRef<"nav">) {
  return (
    <nav {...props}>
      <ul className="flex gap-2 rounded-lg bg-white/50 px-2 py-1.5 text-sm font-medium text-zinc-800 shadow-zinc-800/5 backdrop-blur-xl dark:bg-zinc-900/50 dark:text-zinc-200">
        {navigation.map((item) => (
          <NavItem href={item.href} key={item.href}>
            {item.name}
          </NavItem>
        ))}
      </ul>
    </nav>
  )
}

function ThemeToggle() {
  let { resolvedTheme, setTheme } = useTheme()
  let otherTheme = resolvedTheme === "dark" ? "light" : "dark"
  let [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${otherTheme} theme` : "Toggle theme"}
      className="group rounded-full bg-white/90 px-3 py-2.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition hover:bg-orange-400/5 hover:ring-orange-900/10 dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={() => setTheme(otherTheme)}
    >
      <SunIcon
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="size-5 fill-orange-500 stroke-orange-500 transition group-hover:fill-orange-500 group-hover:stroke-orange-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-orange-500 [@media(prefers-color-scheme:dark)]:stroke-orange-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-orange-600 [@media(prefers-color-scheme:dark)]:group-hover:stroke-orange-600"
      />
      <MoonIcon
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="hidden size-5 fill-zinc-300 stroke-zinc-300 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-zinc-400/20 [@media_not_(prefers-color-scheme:dark)]:stroke-zinc-500"
      />
    </button>
  )
}

function AvatarContainer({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        className,
        "h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10",
      )}
      {...props}
    />
  )
}

function Avatar({
  large = false,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof Link>, "href"> & {
  large?: boolean
}) {
  return (
    <Link href="/" aria-label="Home" className={cn(className, "pointer-events-auto")} {...props}>
      <Image
        src="/profile.svg"
        alt="Description"
        width={large ? 640 : 360}
        height={large ? 640 : 360}
        className={cn("rounded-full bg-zinc-100 object-cover dark:bg-zinc-800", large ? "h-16 w-16" : "h-9 w-9")}
        priority
      />
    </Link>
  )
}

export function Header() {
  const useBackdropBlur = false
  let isHomePage = usePathname() === "/"

  let headerRef = useRef<React.ElementRef<"div">>(null)
  let avatarRef = useRef<React.ElementRef<"div">>(null)
  let isInitial = useRef(true)

  useEffect(() => {
    let downDelay = avatarRef.current?.offsetTop ?? 0
    let upDelay = 64

    function setProperty(property: string, value: string) {
      document.documentElement.style.setProperty(property, value)
    }

    function removeProperty(property: string) {
      document.documentElement.style.removeProperty(property)
    }

    function updateHeaderStyles() {
      if (!headerRef.current) {
        return
      }

      let { top, height } = headerRef.current.getBoundingClientRect()
      let scrollY = clamp(window.scrollY, 0, document.body.scrollHeight - window.innerHeight)

      if (isInitial.current) {
        setProperty("--header-position", "sticky")
      }

      setProperty("--content-offset", `${downDelay}px`)

      if (isInitial.current || scrollY < downDelay) {
        setProperty("--header-height", `${downDelay + height}px`)
        setProperty("--header-mb", `${-downDelay}px`)
      } else if (top + height < -upDelay) {
        let offset = Math.max(height, scrollY - upDelay)
        setProperty("--header-height", `${offset}px`)
        setProperty("--header-mb", `${height - offset}px`)
      } else if (top === 0) {
        setProperty("--header-height", `${scrollY + height}px`)
        setProperty("--header-mb", `${-scrollY}px`)
      }

      if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
        setProperty("--header-inner-position", "fixed")
        removeProperty("--header-top")
        removeProperty("--avatar-top")
      } else {
        removeProperty("--header-inner-position")
        setProperty("--header-top", "0px")
        setProperty("--avatar-top", "0px")
      }
    }

    function updateAvatarStyles() {
      if (!isHomePage) {
        return
      }

      let fromScale = 1
      let toScale = 36 / 64
      let fromX = 0
      let toX = 2 / 16

      let scrollY = downDelay - window.scrollY

      let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale
      scale = clamp(scale, fromScale, toScale)

      let x = (scrollY * (fromX - toX)) / downDelay + toX
      x = clamp(x, fromX, toX)

      setProperty("--avatar-image-transform", `translate3d(${x}rem, 0, 0) scale(${scale})`)

      let borderScale = 1 / (toScale / scale)
      let borderX = (-toX + x) * borderScale
      let borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`

      setProperty("--avatar-border-transform", borderTransform)
      setProperty("--avatar-border-opacity", scale === toScale ? "1" : "0")
    }

    function updateStyles() {
      updateHeaderStyles()
      updateAvatarStyles()
      isInitial.current = false
    }

    updateStyles()
    window.addEventListener("scroll", updateStyles, { passive: true })
    window.addEventListener("resize", updateStyles)

    return () => {
      window.removeEventListener("scroll", updateStyles)
      window.removeEventListener("resize", updateStyles)
    }
  }, [isHomePage])

  return (
    <>
      <header
        className="pointer-events-none relative z-50 flex flex-none flex-col"
        style={{
          height: "var(--header-height)",
          marginBottom: "var(--header-mb)",
        }}
      >
        {isHomePage && (
          <>
            <div ref={avatarRef} className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]" />
            <Container
              className="top-0 order-last -mb-3 pt-3"
              style={{
                position: "var(--header-position)" as React.CSSProperties["position"],
              }}
            >
              <div
                className="top-[var(--avatar-top,theme(spacing.3))] w-full"
                style={{
                  position: "var(--header-inner-position)" as React.CSSProperties["position"],
                }}
              >
                <div className="relative">
                  <AvatarContainer
                    className="absolute left-0 top-3 origin-left transition-opacity"
                    style={{
                      opacity: "var(--avatar-border-opacity, 0)",
                      transform: "var(--avatar-border-transform)",
                    }}
                  />
                  <Avatar
                    large
                    className="block h-16 w-16 origin-left"
                    style={{ transform: "var(--avatar-image-transform)" }}
                  />
                </div>
              </div>
            </Container>
          </>
        )}
        <div
          ref={headerRef}
          className={useBackdropBlur ? "top-0 z-50 h-[5.5rem] pb-6 pt-6 backdrop-blur" : "top-0 z-10 h-16 pt-6"}
          style={{
            position: "var(--header-position)" as React.CSSProperties["position"],
          }}
        >
          <Container
            className="top-[var(--header-top,theme(spacing.6))] w-full"
            style={{
              position: "var(--header-inner-position)" as React.CSSProperties["position"],
            }}
          >
            <div className="relative flex gap-4">
              <div className="flex flex-1">
                {!isHomePage && (
                  <AvatarContainer>
                    <Avatar />
                  </AvatarContainer>
                )}
              </div>
              <div className="flex flex-1 justify-end md:justify-center">
                <MobileNavigation />
                <DesktopNavigation className="pointer-events-auto hidden md:block" />
              </div>
              <div className="flex justify-end md:flex-1">
                <div className="pointer-events-auto">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
      {isHomePage && <div className="flex-none" style={{ height: "var(--content-offset)" }} />}
    </>
  )
}
