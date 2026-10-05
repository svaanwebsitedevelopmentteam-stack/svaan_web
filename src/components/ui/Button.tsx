"use client";

import React, { forwardRef } from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonBaseProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
}

export type ButtonAsButton = ButtonBaseProps &
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
        href?: undefined;
    };

export type ButtonAsLink = ButtonBaseProps & {
    href: string;
    target?: string;
    rel?: string;
    download?: string | boolean;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps | "href">;

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
    primary:
        "bg-[var(--t-btn-bg)] text-[var(--t-btn-text)] hover:bg-[var(--t-btn-hover)] shadow-sm active:scale-[0.98]",
    secondary:
        "bg-[var(--t-btn-secondary-bg)] text-[var(--t-btn-secondary-text)] border border-[var(--t-btn-secondary-border)] hover:bg-[var(--t-btn-secondary-hover)] active:scale-[0.98]",
    outline:
        "bg-transparent text-[var(--t-text)] border border-[var(--t-border)] hover:border-[var(--t-accent)] hover:text-[var(--t-accent)] hover:bg-[var(--t-bg-surface)] active:scale-[0.98]",
    ghost:
        "bg-transparent text-[var(--t-text)] hover:bg-[var(--t-bg-surface)] hover:text-[var(--t-accent)] active:scale-[0.98]",
};

const sizeStyles: Record<ButtonSize, string> = {
    sm: "h-9 px-3 text-xs font-medium rounded-[var(--t-radius-md)] gap-1.5",
    md: "h-11 px-5 text-sm font-semibold rounded-[var(--t-radius-md)] gap-2",
    lg: "h-12 md:h-13 px-7 text-base font-semibold rounded-[var(--t-radius-md)] gap-2.5",
    icon: "w-10 h-10 p-0 flex items-center justify-center rounded-[var(--t-radius-md)]",
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    (props, ref) => {
        const {
            variant = "primary",
            size = "md",
            isLoading = false,
            leftIcon,
            rightIcon,
            children,
            className = "",
            ...rest
        } = props;

        const baseStyles =
            "inline-flex items-center justify-center font-sans transition-all duration-200 select-none whitespace-nowrap cursor-pointer " +
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--t-bg)] " +
            "disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none ";

        const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();

        const content = (
            <>
                {isLoading ? (
                    <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                ) : (
                    leftIcon
                )}
                {children}
                {!isLoading && rightIcon}
            </>
        );

        if ("href" in props && props.href) {
            const { href, target, rel, download, onClick, ...anchorRest } = props;
            return (
                <Link
                    href={href}
                    ref={ref as React.Ref<HTMLAnchorElement>}
                    className={combinedClassName}
                    target={target}
                    rel={rel}
                    download={download}
                    onClick={onClick}
                    aria-busy={isLoading ? "true" : undefined}
                    {...anchorRest}
                >
                    {content}
                </Link>
            );
        }

        const { disabled, ...buttonRest } = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;

        return (
            <button
                ref={ref as React.Ref<HTMLButtonElement>}
                className={combinedClassName}
                disabled={disabled || isLoading}
                aria-busy={isLoading ? "true" : undefined}
                {...buttonRest}
            >
                {content}
            </button>
        );
    }
);

Button.displayName = "Button";
