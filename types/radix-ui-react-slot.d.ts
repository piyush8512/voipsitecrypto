declare module "@radix-ui/react-slot" {
  import * as React from "react";
  // Minimal declaration for Slot to satisfy TypeScript when the package types aren't found.
  export const Slot: React.ForwardRefExoticComponent<any>;
}
