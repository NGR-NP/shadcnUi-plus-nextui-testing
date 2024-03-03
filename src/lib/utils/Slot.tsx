import React, { ReactNode, forwardRef } from "react";

type SlotProps = {
  children: ReactNode;
} & React.HTMLAttributes<HTMLElement>;

const Slot = forwardRef<HTMLElement, SlotProps>(
  ({ children, ...props }, ref) => {
    if (React.Children.count(children) > 1) {
      throw new Error("Only one child allowed");
    }
    if (React.isValidElement(children)) {
      return React.cloneElement(children, { ...props });
    }
    return null;
  },
);

export default Slot;
