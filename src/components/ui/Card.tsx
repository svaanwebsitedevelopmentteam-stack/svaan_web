import React, { forwardRef } from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
    variant?: "default" | "surface" | "interactive";
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className = "", hoverEffect = false, variant = "default", children, ...props }, ref) => {
        const variantStyles = {
            default: "bg-[var(--t-bg-card)] border border-[var(--t-border)]",
            surface: "bg-[var(--t-bg-surface)] border border-[var(--t-border)]",
            interactive: "bg-[var(--t-bg-card)] border border-[var(--t-border)] cursor-pointer",
        };

        const hoverStyles =
            hoverEffect || variant === "interactive"
                ? "hover:border-[var(--t-accent)] hover:shadow-md transition-all duration-300"
                : "";

        return (
            <div
                ref={ref}
                className={`rounded-[var(--t-radius-card)] shadow-sm ${variantStyles[variant]} ${hoverStyles} ${className}`.trim()}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = "Card";

export const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className = "", children, ...props }, ref) => (
        <div ref={ref} className={`p-6 pb-3 ${className}`.trim()} {...props}>
            {children}
        </div>
    )
);

CardHeader.displayName = "CardHeader";

export const CardTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className = "", children, ...props }, ref) => (
        <h3
            ref={ref}
            className={`font-display text-xl font-bold tracking-tight text-[var(--t-text)] ${className}`.trim()}
            {...props}
        >
            {children}
        </h3>
    )
);

CardTitle.displayName = "CardTitle";

export const CardDescription = forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className = "", children, ...props }, ref) => (
    <p
        ref={ref}
        className={`text-sm text-[var(--t-text-muted)] leading-relaxed mt-1.5 ${className}`.trim()}
        {...props}
    >
        {children}
    </p>
));

CardDescription.displayName = "CardDescription";

export const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className = "", children, ...props }, ref) => (
        <div ref={ref} className={`p-6 pt-3 ${className}`.trim()} {...props}>
            {children}
        </div>
    )
);

CardContent.displayName = "CardContent";

export const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className = "", children, ...props }, ref) => (
        <div
            ref={ref}
            className={`p-6 pt-0 flex items-center justify-between gap-4 ${className}`.trim()}
            {...props}
        >
            {children}
        </div>
    )
);

CardFooter.displayName = "CardFooter";
