import { DemoCharts } from "@/components/demo/demo-charts";
import { DemoTable } from "@/components/demo/demo-table"
import { useUIStore } from "@/store/ui-store";
import type { CsvRow } from "@/types/csv-row";
import { GitBranch, GitBranchPlus, Github, MousePointerClick, Play } from "lucide-react"
import { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function PlaygroundPage() {
  const { currentDemoTab } = useUIStore();
  const [data, setData] = useState<CsvRow[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>("all");

  useEffect(() => {
    fetch("/demo-data-lohoff.json")
      .then((response) => response.json())
      .then((jsonData: CsvRow[]) => {
        setData(jsonData);
      });
  }, []);

  // Get unique years from data
  const years = Array.from(new Set(data.map(row => row.Year))).sort();

  // Filter data by selected year
  const filteredData = selectedYear === "all" 
    ? data 
    : data.filter(row => row.Year === selectedYear);

  return (
    <div className="w-full h-full flex flex-col items-center justify-start px-10 gap-8 pt-16 pb-8">
      {/* Delete or Comment out this component reference */}
      {currentDemoTab === "introduction" && <DeleteMe />}
      {currentDemoTab === "demo-views" && (
        <div className="w-full flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Filter by Year:</span>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent className="bg-background">
                <SelectItem value="all">All Years</SelectItem>
                {years.map(year => (
                  <SelectItem key={year} value={year}>{year}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
            <DemoTable data={filteredData} />
            <DemoCharts data={filteredData} />
          </div>
        </div>
      )}
    </div>
  )
}

function DeleteMe() {
  return (
    <div className="w-full flex flex-col justify-start gap-4 text-sm">
      <div className="flex items-center gap-2"><Github size={16} />Check out the repository on github: <a href="https://github.com/HZDigital/lohoff-demo" className="text-primary font-bold hover:underline hover:text-primary-hover">Lohoff Demo Repository</a></div>
      <div className="flex items-center gap-2"><GitBranch size={16} />Click on <div className="px-3 py-1 bg-muted rounded-sm"><span className="font-mono">&gt; Use this template</span></div></div>
      <div className="flex items-center gap-2"><GitBranchPlus size={16} />Click on <div className="px-3 py-1 bg-muted rounded-sm"><span className="font-mono">&gt; Open in a codespace</span></div></div>
      <div className="flex items-center gap-2"><Play size={16} />Run <div className="px-3 py-1 bg-muted rounded-sm"><span className="font-mono">&gt; npm run dev</span></div> to start the development server and see your changes live</div>
      <div className="flex items-center gap-2"><MousePointerClick size={16} />Navigate to the <div className="px-3 py-1 bg-muted rounded-sm"><span className="font-mono">playground-page.tsx</span></div> and start editing</div>
    </div>
  )
}