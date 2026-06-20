"use client";

import { BarChart, DonutChart } from "@tremor/react";

const usd = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

export interface CashFlowPoint {
  month: string;
  Income: number;
  Spending: number;
}

export function CashFlowChart({ data }: { data: CashFlowPoint[] }) {
  return (
    <BarChart
      data={data}
      index="month"
      categories={["Income", "Spending"]}
      colors={["emerald", "rose"]}
      valueFormatter={usd}
      yAxisWidth={64}
      className="h-64"
      showLegend
    />
  );
}

export interface CategorySlice {
  name: string;
  value: number;
}

export function CategoryDonut({ data }: { data: CategorySlice[] }) {
  return (
    <DonutChart
      data={data}
      index="name"
      category="value"
      valueFormatter={usd}
      colors={[
        "blue",
        "cyan",
        "indigo",
        "violet",
        "amber",
        "emerald",
        "rose",
        "slate",
      ]}
      className="h-64"
      showAnimation={false}
    />
  );
}
