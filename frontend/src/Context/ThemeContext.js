/* 
import { createTheme } from '@mui/material/styles';
import { createContext,useState } from 'react';


export const ThemeContext = createContext();

export const lightTheme = createTheme({
  
    palette: {
      type: 'light',
      primary: {
        main: 'rgb(145,85,253)',
        light: '#cb6868',

        
      },
      secondary: {
        main: '#f50057',
      },
      background: {
        paper: '#ffffff',
        
      },
      typography: {
        fontFamily: "Inter, sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,Cantarell, Fira Sans, Droid Sans, Helvetica Neue",
        fontWeightLight: 400,
        fontWeightRegular: 600,
        fontWeightMedium: 600,
        fontWeightBold: 700,
      },
      
    },
    

});


const darkTheme = createTheme({
  palette: {
    mode: "dark",
    type: 'dark',
    primary: {
      main: '#ffffff',
      paper: 'rgb(49,45,75)',
    },
    secondary: {
      main: '#bcbcd4',
    },
    background: {
      default: 'rgb(49,45,75)',
      paper: 'rgb(40, 36, 61)',
    },
    text: {
      secondary: '#fafafa',
      disabled: '#ffebee',
      hint: 'rgba(249,243,243,0.5)',
    },
  },
  
  
});

export function ThemeProvider({children}) {
  const [theme, setTheme] = useState(localStorage.getItem('mode')==="light" ? {mode:lightTheme,key:"light"}:{mode:darkTheme,key:"dark"});
  const {mode,key} = theme
  function toggleTheme() {
    
    localStorage.setItem('mode',mode==="light"||localStorage.getItem('mode') === "light"? "dark" : "light")
    setTheme(key=== 'light' ? {mode:darkTheme,key:"dark"}: {mode:lightTheme,key:"light"});
  }
  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}


 */