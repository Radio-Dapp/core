import type {ButtonProps, CardProps} from "@heroui/react";

import React from "react";
import {ResponsiveContainer, PieChart, Pie, Tooltip, Cell} from "recharts";
import {
  Card,
  Select,
  SelectItem,
  cn,
} from "@heroui/react";

type ChartData = {
  name: string;
  [key: string]: string | number;
};

type CircleChartProps = {
  title: string;
  color: ButtonProps["color"];
  categories: string[];
  chartData: ChartData[];
};

const data: CircleChartProps[] = [
  {
    title: "Fund 1",
    categories: ["Search", "Direct", "Social", "Referral"],
    color: "primary",
    chartData: [
      {name: "Search", value: 400},
      {name: "Direct", value: 300},
      {name: "Social", value: 300},
      {name: "Referral", value: 200},
    ],
  },

  {
    title: "Fund 2",
    categories: ["Search", "Direct", "Social", "Referral"],
    color: "warning",
    chartData: [
      {name: "Search", value: 400},
      {name: "Direct", value: 300},
      {name: "Social", value: 300},
      {name: "Referral", value: 200},
    ],
  },

  {
    title: "Fund 3",
    categories: ["Search", "Direct", "Social", "Referral"],
    color: "danger",
    chartData: [
      {name: "Search", value: 400},
      {name: "Direct", value: 300},
      {name: "Social", value: 300},
      {name: "Referral", value: 200},
    ],
  },
];

export default function Metrics() {
  return (
    <dl className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((item, index) => (
        <CircleChartCard key={index} {...item} />
      ))}
    </dl>
  );
}

const formatTotal = (total: number) => {
  return total >= 1000 ? `${(total / 1000).toFixed(1)}K` : total;
};

const CircleChartCard = React.forwardRef<
  HTMLDivElement,
  Omit<CardProps, "children"> & CircleChartProps
>(({className, title, categories, color, chartData, ...props}, ref) => {
  return (
    <Card
      ref={ref}
      className={cn("min-h-[240px] border bg-grey-100", className)}
      {...props}
    >
      <div className="flex flex-col gap-y-2 p-4 pb-0">
        <div className="flex items-center justify-between gap-x-2">
          <dt>
            <h3 className="text-small font-medium text-grey-500">{title}</h3>
          </dt>
          <div className="flex items-center justify-end gap-x-2">
            <Select
              aria-label="Time Range"
              classNames={{
                trigger: "min-w-[100px] bg-grey-200 min-h-7 h-7",
                value: "text-tiny !text-grey-500",
                selectorIcon: "text-grey-500",
                popoverContent: "min-w-[120px] bg-grey-200",
              }}
              defaultSelectedKeys={["per-day"]}
              listboxProps={{
                itemClasses: {
                  title: "text-tiny",
                },
              }}
              placeholder="Per Day"
              size="sm"
            >
              <SelectItem key="per-day">Per Day</SelectItem>
              <SelectItem key="per-week">Per Week</SelectItem>
              <SelectItem key="per-month">Per Month</SelectItem>
            </Select>
          </div>
        </div>
      </div>
      <div className="flex h-full flex-wrap items-center justify-center gap-x-2 lg:flex-nowrap">
        <ResponsiveContainer
          className="[&_.recharts-surface]:outline-none"
          height={200}
          width="100%"
        >
          <PieChart accessibilityLayer margin={{top: 0, right: 0, left: 0, bottom: 0}}>
            <Tooltip
              content={({label, payload}) => (
                <div className="flex h-8 min-w-[120px] items-center gap-x-2 rounded-medium bg-background px-1 text-tiny shadow-small">
                  <span className="font-medium text-foreground">{label}</span>
                  {payload?.map((p, index) => {
                    const name = p.name;
                    const value = p.value;
                    const category = categories.find((c) => c.toLowerCase() === name) ?? name;

                    return (
                      <div key={`${index}-${name}`} className="flex w-full items-center gap-x-2">
                        <div
                          className="h-2 w-2 flex-none rounded-full"
                          style={{
                            backgroundColor: `hsl(var(--heroui-${color}-${(index + 1) * 200}))`,
                          }}
                        />
                        <div className="flex w-full items-center justify-between gap-x-2 pr-1 text-xs text-grey-700">
                          <span className="text-grey-500">{category}</span>
                          <span className="font-mono font-medium text-grey-700">
                            {formatTotal(value as number)}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
              cursor={false}
            />
            <Pie
              animationDuration={1000}
              animationEasing="ease"
              data={chartData}
              dataKey="value"
              innerRadius="68%"
              nameKey="name"
              paddingAngle={-20}
              strokeWidth={0}
            >
              {chartData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={`hsl(var(--heroui-${color}-${(index + 1) * 200}))`}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="flex w-full flex-col justify-center gap-4 p-4 text-tiny text-grey-500 lg:p-0">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  backgroundColor: `hsl(var(--heroui-${color}-${(index + 1) * 200}))`,
                }}
              />
              <span className="capitalize">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
});

CircleChartCard.displayName = "CircleChartCard";
