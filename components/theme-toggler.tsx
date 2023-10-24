"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"


type Theme = "light" | "dark" | "system"
export function ModeToggle() {
  const { setTheme } = useTheme();
  const [mode, setMode] = React.useState<Theme>("light");
  React.useEffect(() => {
    setTheme("light");
  }, []);

  const clickHandler = () => {
    if(mode == "light") {
        setMode("dark");
        setTheme("dark");
        console.log(mode);
    } else {
        setMode("light");
        setTheme("light");
        console.log(mode);
    }
  }

  return (
    
        <button  onClick={clickHandler} className="fixed bottom-5 p-3 border-2 border-black dark:border-white rounded-full right-5">
            {(mode == "light") ? 
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
        :

          <Moon className="h-[1.2rem] w-[1.2rem]  transition-all dark:rotate-0 " />
        }
          
          <span className="sr-only">Toggle theme</span>
        </button>
     
  )
}
