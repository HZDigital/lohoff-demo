import { useState } from "react";
import { ChartColumn, ChartLine } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import type { CsvRow } from "@/types/csv-row";

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-1))",
  },
  profit: {
    label: "Profit",
    color: "hsl(var(--chart-2))",
  },
  orders: {
    label: "Orders",
    color: "hsl(var(--chart-3))",
  },
};

export function DemoCharts({ data }: { data: CsvRow[] }) {
  const [chartType, setChartType] = useState<"column" | "line">("column");

  // Transform data for the charts
  const chartData = data.map((row) => ({
    quarter: `${row.Quarter} ${row.Year}`,
    revenue: parseFloat(row.Revenue),
    profit: parseFloat(row.Profit),
    orders: parseInt(row.Orders),
  }));

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <div className="font-bold text-sm">Revenue & Profit</div>
        <ToggleGroup type="single" value={chartType} onValueChange={(value: string) => setChartType(value as "column" | "line")}>
          <ToggleGroupItem value="column">
            <ChartColumn />
          </ToggleGroupItem>
          <ToggleGroupItem value="line">
            <ChartLine />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="mt-4">
        {chartType === "column" ? (
          <ChartContainer config={chartConfig} className="min-h-[400px] w-full">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="quarter" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="revenue" fill="var(--primary)" radius={4} />
              <Bar dataKey="profit" fill="var(--secondary)" radius={4} />
            </BarChart>
          </ChartContainer>
        ) : (
          <ChartContainer config={chartConfig} className="min-h-[400px] w-full">
            <LineChart data={chartData} accessibilityLayer>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="quarter" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="var(--primary)"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="profit"
                stroke="var(--secondary)"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ChartContainer>
        )}
      </div>
    </div>
  );
}