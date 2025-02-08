// app/components/ThemeSwitcher.tsx
import { useTheme } from "next-themes";
import { VisuallyHidden, useSwitch } from "@heroui/react";
import Icon from "./Icon";

type Props = any;

const ThemeSwitch = (props: Props) => {
  const { theme, setTheme } = useTheme();
  const { Component, getBaseProps, getInputProps, getWrapperProps } =
    useSwitch(props);

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()} >
        <VisuallyHidden>
          <input {...getInputProps()} onChange={() => setTheme(theme === "light" ? "dark" : "light")} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={"btn-icon bg-grey-200 p-2"}
        >
          {theme === "light" ? <Icon name="Sun" /> : <Icon name="Moon" />}
        </div>
      </Component >
    </div >
  );
};

export default ThemeSwitch;