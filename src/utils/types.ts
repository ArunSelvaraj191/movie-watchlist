import { lazy } from "react";
import type { ReactElement } from "react";

export interface MovieListType {
  [key: string]: unknown;
}

export type LoadableType = <T = any>(
  Component: ReturnType<typeof lazy>
) => (props: T) => ReactElement<T>;
