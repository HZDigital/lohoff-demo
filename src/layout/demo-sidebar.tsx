import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { useUIStore } from "@/store/ui-store";

export function DemoSidebar() {
  const { currentDemoTab, setCurrentDemoTab } = useUIStore();

  const DEMO_SIDEBAR_ITEMS = [
    { id: "introduction", label: "Introduction", action: () => setCurrentDemoTab("introduction") },
    { id: "demo-views", label: "Demo Views", action: () => setCurrentDemoTab("demo-views") },
  ]


  return (
    <Sidebar variant="floating">
      <SidebarHeader>
        <div className="flex items-center justify-between">
          <img src="https://www.lohoff.com/acapsy/img/logo.png" alt="Lohoff Logo" className="h-4 w-auto" />
          <img src="https://i0.wp.com/hz.digital/wp-content/uploads/2024/02/hz-digital.png?fit=1429%2C330&ssl=1" alt="HZ Digital Logo" className="h-6 w-auto" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Demo Contents</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {DEMO_SIDEBAR_ITEMS.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton onClick={item.action} className={currentDemoTab === item.id ? "text-primary font-bold" : ""}>
                    {item.label}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}