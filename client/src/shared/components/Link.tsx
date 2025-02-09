import { NavLink } from "react-router";
import type { Children } from "../types/utils.d.ts";

interface ILinkProps {
  to: string;
  children: Children;
  className?: string;
  target?: string;
}

export default function (props: ILinkProps) {
  return (
    <NavLink
      to={props.to}
      className={props.className}
      target={props.target}
    >
      {props.children}
    </NavLink>
  );
}