import {
  useRouter,
  useRouterState,
} from "@tanstack/react-router";
import { useEffect, useRef, useState, type AnchorHTMLAttributes, type MouseEvent, type ReactNode } from "react";

type TransitionStage = "idle" | "entering" | "leaving";

const TRANSITION_EVENT = "portfolio-route-transition";
const ENTER_DURATION = 460;
const HOLD_DURATION = 300;
const TOTAL_DURATION = 1320;

export function PageTransition({ children }: { children: ReactNode }) {
  const [stage, setStage] = useState<TransitionStage>("idle");
  const [nextPageName, setNextPageName] = useState("Home");
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const onTransition = (event: Event) => {
      const pageName = (event as CustomEvent<{ pageName: string }>).detail?.pageName ?? "Page";

      timers.current.forEach((timer) => window.clearTimeout(timer));
      setNextPageName(pageName);
      setStage("entering");

      timers.current = [
        window.setTimeout(() => {
        setStage("leaving");
        }, ENTER_DURATION + HOLD_DURATION),
        window.setTimeout(() => {
          setStage("idle");
        }, TOTAL_DURATION),
      ];
    };

    window.addEventListener(TRANSITION_EVENT, onTransition);
    return () => {
      timers.current.forEach((timer) => window.clearTimeout(timer));
      window.removeEventListener(TRANSITION_EVENT, onTransition);
    };
  }, []);

  return (
    <>
      <div className={`route-curtain route-curtain-${stage}`} aria-hidden={stage === "idle"}>
        <div className="route-curtain-content">
          <span className="route-curtain-kicker">Preparing</span>
          <span className="route-curtain-title">"{nextPageName}"</span>
          <span className="route-curtain-line" />
        </div>
      </div>
      <div className="page-transition">{children}</div>
    </>
  );
}

type TransitionLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: string;
  activeOptions?: { exact?: boolean };
  activeProps?: { className?: string };
  inactiveProps?: { className?: string };
  children: ReactNode;
};

export function TransitionLink({
  activeOptions,
  activeProps,
  children,
  className = "",
  inactiveProps,
  onClick,
  target,
  to,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const isActive = activeOptions?.exact ? pathname === to : pathname === to || pathname.startsWith(`${to}/`);
  const stateClassName = isActive ? activeProps?.className : inactiveProps?.className;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey ||
      target === "_blank"
    ) {
      return;
    }

    if (to === pathname) {
      return;
    }

    event.preventDefault();
    window.dispatchEvent(
      new CustomEvent(TRANSITION_EVENT, {
        detail: { pageName: formatPageName(to) },
      }),
    );

    window.setTimeout(() => {
      router.navigate({ to });
    }, ENTER_DURATION);
  };

  return (
    <a {...props} href={to} target={target} onClick={handleClick} className={`${className} ${stateClassName ?? ""}`.trim()}>
      {children}
    </a>
  );
}

function formatPageName(pathname: string) {
  return pathname === "/" ? "Home" : pathname.replace("/", "").replace(/-/g, " ");
}
