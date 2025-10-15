"use client";
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import "./Label.css"; // import your CSS file

const Label = React.forwardRef(({ className = "", ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={`label ${className}`}
    {...props}
  />
));

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };