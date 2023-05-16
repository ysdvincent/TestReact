// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group7Icon(props: Group7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.923 10.923a5.462 5.462 0 100-10.923 5.462 5.462 0 000 10.923zm10.605 5.681a16.473 16.473 0 00-21.21 0 .886.886 0 00-.318.681v4.563c0 1.006.815 1.819 1.82 1.819h18.206a1.82 1.82 0 001.82-1.819v-4.206c0-.62-.116-.868-.318-1.038z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group7Icon;
/* prettier-ignore-end */
