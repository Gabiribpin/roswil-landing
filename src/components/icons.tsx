import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { title?: string };

function baseProps({ title, ...props }: IconProps) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": title ? undefined : true,
    role: title ? ("img" as const) : undefined,
    ...props,
  };
}

export function IconNeedle(props: IconProps) {
  const { title } = props;
  return (
    <svg {...baseProps(props)}>
      {title ? <title>{title}</title> : null}
      <path d="M8 3l8 18" />
      <path d="M14 3l-2 4" />
      <circle cx="7.5" cy="3.5" r="1.2" />
    </svg>
  );
}

export function IconOverlock(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      {props.title ? <title>{props.title}</title> : null}
      <path d="M4 8c2 2 4 2 6 0s4-2 6 0 4 2 6 0" />
      <path d="M4 12c2 2 4 2 6 0s4-2 6 0 4 2 6 0" />
      <path d="M4 16c2 2 4 2 6 0s4-2 6 0 4 2 6 0" />
    </svg>
  );
}

export function IconHem(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      {props.title ? <title>{props.title}</title> : null}
      <path d="M5 5h14v14H5z" />
      <path d="M5 15h14" />
      <path d="M8 15v4M12 15v4M16 15v4" />
    </svg>
  );
}

export function IconRepair(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      {props.title ? <title>{props.title}</title> : null}
      <path d="M14.7 6.3a4 4 0 0 0-5.6 5.6L4 17l3 3 5.1-5.1a4 4 0 0 0 5.6-5.6z" />
      <path d="M12 8l2 2" />
    </svg>
  );
}

export function IconOrder(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      {props.title ? <title>{props.title}</title> : null}
      <path d="M8 7h8M8 12h8M8 17h5" />
      <rect x="4" y="3" width="16" height="18" rx="2" />
    </svg>
  );
}

export function IconPartners(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      {props.title ? <title>{props.title}</title> : null}
      <circle cx="9" cy="8" r="2.5" />
      <circle cx="16" cy="9" r="2" />
      <path d="M4.5 18c.8-2.4 2.6-3.5 4.5-3.5s3.7 1.1 4.5 3.5" />
      <path d="M13 18c.5-1.6 1.6-2.4 3-2.4 1.2 0 2.2.6 2.8 1.8" />
    </svg>
  );
}

export function IconWhatsApp(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={props.title ? undefined : true}
      role={props.title ? "img" : undefined}
      {...props}
    >
      {props.title ? <title>{props.title}</title> : null}
      <path d="M20.5 3.5A10.9 10.9 0 0 0 12.1 1C6.2 1 1.4 5.8 1.4 11.7c0 2 .5 3.9 1.5 5.6L1 23l5.9-1.8a10.7 10.7 0 0 0 5.2 1.3h.1c5.9 0 10.7-4.8 10.7-10.7 0-2.9-1.1-5.5-3.4-7.3zm-8.4 16.5h-.1a8.9 8.9 0 0 1-4.5-1.2l-.3-.2-3.5 1 1-3.4-.2-.3a8.9 8.9 0 0 1-1.4-4.7c0-4.9 4-8.9 9-8.9 2.4 0 4.6.9 6.3 2.6a8.8 8.8 0 0 1 2.6 6.3c0 4.9-4 8.8-9 8.8zm5.1-6.6c-.3-.1-1.6-.8-1.9-.9-.3-.1-.5-.2-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-1.6-.8-2.7-1.5-3.7-3.3-.3-.5.3-.4.8-1.4.1-.2 0-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.1.7 2.8.6.4-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.1-1.3-.1-.1-.3-.2-.6-.3z" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      {props.title ? <title>{props.title}</title> : null}
      <path d="M5 12.5l4.2 4.2L19 7" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      {props.title ? <title>{props.title}</title> : null}
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      {props.title ? <title>{props.title}</title> : null}
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export const serviceIcons = {
  needle: IconNeedle,
  overlock: IconOverlock,
  hem: IconHem,
  repair: IconRepair,
  order: IconOrder,
  partners: IconPartners,
} as const;
