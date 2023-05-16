// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group3Icon(props: Group3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M2 1v2.5m2.5 0H2m.01 0A5.734 5.734 0 016.75 1 5.75 5.75 0 111 6.75"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Group3Icon;
/* prettier-ignore-end */
