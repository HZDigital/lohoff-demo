import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import { Page } from "@/layout/page"
import { routes } from "@/content/routes"
import { SidebarProvider } from "@/components/ui/sidebar"

export function Manager() {
  return (
    <Router>
      <SidebarProvider>
        <Page>
          <Routes>
            {routes.map((route) =>
              <Route
                path={route.path}
                element={
                  <route.element />
                }
              />
            )}
          </Routes>
        </Page>
      </SidebarProvider>
    </Router>
  )
}