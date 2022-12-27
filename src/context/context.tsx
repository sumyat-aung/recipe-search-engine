import React, { createContext, ReactNode } from "react";

import { Value } from "../type/Type";

export const context = createContext<Value | null>(null);

export const ContextProvider = (props: { children: ReactNode }) => {



  return (
    <context.Provider value={{ um: "fd" }}>{props.children}</context.Provider>
  );
};
