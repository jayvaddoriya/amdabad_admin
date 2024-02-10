import { createContext, useContext, useState } from "react"

const SidebarContext = createContext()

const SidebarProvider = ({ children }) => {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ navMenuOpen, setNavMenuOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => {
  return useContext(SidebarContext);
}

export default SidebarProvider