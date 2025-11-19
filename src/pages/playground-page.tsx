import { DemoCharts } from "@/components/demo/demo-charts";
import { DemoTable } from "@/components/demo/demo-table"
import { useUIStore } from "@/store/ui-store";
import type { CsvRow } from "@/types/csv-row";
import { DownloadCloud, GitBranch, GitBranchPlus, Github, MousePointerClick, PackageOpen, Play } from "lucide-react"
import { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function PlaygroundPage() {
  const { currentDemoTab } = useUIStore();
  const [data, setData] = useState<CsvRow[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>("all");

  useEffect(() => {
    fetch("/demo-data-lohoff.csv")
      .then((response) => response.text())
      .then((text) => {
        const lines = text.trim().split("\n");
        const headers = lines[0].split(";").map((h) => h.replace(/"/g, ""));

        const rows = lines.slice(1).map((line) => {
          const values = line.split(";").map((v) => v.replace(/"/g, ""));
          const row: Record<string, string> = {};
          headers.forEach((header, index) => {
            row[header] = values[index];
          });
          return row as unknown as CsvRow;
        });

        setData(rows);
      });
  }, []);

  // Get unique years from data
  const years = Array.from(new Set(data.map(row => row.Year))).sort();

  // Filter data by selected year
  const filteredData = selectedYear === "all" 
    ? data 
    : data.filter(row => row.Year === selectedYear);

  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-8 pl-40 pr-10 lg:px-[10%] pt-16 pb-8">
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
      <div className="flex items-center gap-2"><DownloadCloud size={16} />Get the repository from github. <div className="px-3 py-1 bg-muted rounded-sm"><span className="font-mono">&gt; gh repo clone HZDigital/lohoff-demo</span></div></div>
      <div className="flex items-center gap-2"><GitBranch size={16} />Go to the staging branch. <div className="px-3 py-1 bg-muted rounded-sm"><span className="font-mono">&gt; git checkout staging</span></div></div>
      <div className="flex items-center gap-2"><GitBranchPlus size={16} />Create a new branch. <div className="px-3 py-1 bg-muted rounded-sm"><span className="font-mono">&gt; git checkout -b your-branch-name</span></div></div>
      <div className="flex items-center gap-2"><PackageOpen size={16} />Install the dependecies with <div className="px-3 py-1 bg-muted rounded-sm"><span className="font-mono">&gt; npm install</span></div> using the terminal</div>
      <div className="flex items-center gap-2"><Play size={16} />Run <div className="px-3 py-1 bg-muted rounded-sm"><span className="font-mono">&gt; npm run dev</span></div> to start the development server and see your changes live</div>
      <div className="flex items-center gap-2"><MousePointerClick size={16} />Navigate to the <div className="px-3 py-1 bg-muted rounded-sm"><span className="font-mono">playground-page.tsx</span></div> and start editing</div>
    </div>
  )
}