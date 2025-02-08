import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import { truncateString } from "../lib/utils";

export default function BreadcrumbComponent({ items }: {
  items: { label: string, href: string }[]
}) {
  return (
    <Breadcrumbs>
      {items && items.map((item, index) => (
        <BreadcrumbItem key={index} href={item.href}>{truncateString(item.label, 10)}</BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
}