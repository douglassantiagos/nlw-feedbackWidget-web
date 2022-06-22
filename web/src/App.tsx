import { Sun, Moon } from 'phosphor-react'
import { Widget } from './components/Widget'
import { useTheme } from './hooks/useTheme'

export function App() {
  const { theme, setTheme } = useTheme();

  console.log("test:" + theme)

  return (
    <>
      { theme === "light" ? (
        <button
          type='button'
          className="absolute top-5 right-5 cursor-pointer flex items-center b"
          onClick={() => setTheme("dark")}
        >
          <p className="text-zinc-100 font-bold pr-1">DarkMode</p>
          <Moon
            weight='fill' 
            size={24} color={'white'}
          />
        </button>
      ) : (
        <button
          type='button'
          className="absolute top-5 right-5 cursor-pointer flex items-center b"
          onClick={() => setTheme("light")}
        >
          <p className="text-yellow-500 font-bold pr-1">LightMode</p>
          <Sun
            weight='fill'
            size={24}
            color={'orange'} 
          />
        </button>
      )}  
          
      <Widget />    
    </>
  )
}

export default App
