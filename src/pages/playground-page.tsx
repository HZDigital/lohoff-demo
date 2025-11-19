import { DownloadCloud, GitBranch, GitBranchPlus, Github, MousePointerClick, PackageOpen, Play } from "lucide-react"

export function PlaygroundPage() {

  return (
    <div className="w-full h-full">
      {/* Delete or Comment out this component reference */}
      <DeleteMe />
    </div>
  )
}

function DeleteMe() {
  return (
    <div className="w-full h-full flex flex-col p-[10%] justify-start gap-4 text-lg">
      <div className="flex items-center gap-2"><Github size={32} />Check out the repository on github: <a href="https://github.com/HZDigital/lohoff-demo" className="text-primary font-bold hover:underline hover:text-primary-hover">Lohoff Demo Repository</a></div>
      <div className="flex items-center gap-2"><DownloadCloud size={32} />Get the repository from github. <div className="px-3 py-1 bg-muted rounded-sm"><span className="font-mono">&gt; gh repo clone HZDigital/lohoff-demo</span></div></div>
      <div className="flex items-center gap-2"><GitBranch size={32} />Go to the staging branch. <div className="px-3 py-1 bg-muted rounded-sm"><span className="font-mono">&gt; git checkout staging</span></div></div>
      <div className="flex items-center gap-2"><GitBranchPlus size={32} />Create a new branch. <div className="px-3 py-1 bg-muted rounded-sm"><span className="font-mono">&gt; git checkout -b your-branch-name</span></div></div>
      <div className="flex items-center gap-2"><PackageOpen size={32} />Install the dependecies with <div className="px-3 py-1 bg-muted rounded-sm"><span className="font-mono">&gt; npm install</span></div> using the terminal</div>
      <div className="flex items-center gap-2"><Play size={32} />Run <div className="px-3 py-1 bg-muted rounded-sm"><span className="font-mono">&gt; npm run dev</span></div> to start the development server and see your changes live</div>
      <div className="flex items-center gap-2"><MousePointerClick size={32} />Navigate to the <div className="px-3 py-1 bg-muted rounded-sm"><span className="font-mono">playground-page.tsx</span></div> and start editing</div>
    </div>
  )
}