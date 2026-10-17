import React from "react";

export const LogoIcon = ({ className = "h-8 w-8", variant = "auto" }) => {
  if (variant === "dark") {
    return (
      <div className={`relative shrink-0 flex items-center justify-center ${className}`}>
        <img
          src="/scholar-x-dark.png"
          alt="Scholar-X"
          className="h-full w-full object-contain rounded-lg shadow-sm select-none"
        />
      </div>
    );
  }
  if (variant === "light") {
    return (
      <div className={`relative shrink-0 flex items-center justify-center ${className}`}>
        <img
          src="/scholar-x-light.png"
          alt="Scholar-X"
          className="h-full w-full object-contain rounded-lg border border-slate-200/80 shadow-2xs select-none"
        />
      </div>
    );
  }
  return (
    <div className={`relative shrink-0 flex items-center justify-center ${className}`}>
      <img
        src="/scholar-x-light.png"
        alt="Scholar-X"
        className="h-full w-full object-contain rounded-lg border border-slate-200/80 shadow-2xs block dark:hidden select-none"
      />
      <img
        src="/scholar-x-dark.png"
        alt="Scholar-X"
        className="h-full w-full object-contain rounded-lg shadow-sm hidden dark:block select-none"
      />
    </div>
  );
};

const Logo = ({ showSubtitle = true, iconOnly = false, variant = "auto", className = "" }) => {
  if (iconOnly) return <LogoIcon className={className || "h-8 w-8"} variant={variant} />;
  return (
    <div className={"flex items-center gap-3 " + className}>
      <LogoIcon variant={variant} />
      <div className="min-w-0 leading-tight">
        <div className="text-sm font-bold tracking-[-0.02em] text-slate-950 dark:text-white">Scholar-X</div>
        {showSubtitle && <div className="mt-0.5 text-[11px] font-medium text-slate-500 dark:text-slate-400">Chat with your documents</div>}
      </div>
    </div>
  );
};
export default Logo;
