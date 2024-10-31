import { createTheme, ThemeProvider } from '@mui/material/styles';
//import { lime, purple } from '@mui/material/colors';
import { ThemeOptions } from '@mui/material/styles/createTheme';

interface CustomPaletteOptions extends ThemeOptions  {
    custom?: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
  }

// Crie um tema personalizado
const theme = createTheme({
  palette: {
    primary: {
      main: '#F579B8',
      // Você pode incluir light, dark e contrastText se necessário
      light: '#F6D9E4', 
      dark: '#F579B8',
      contrastText: '#FFFFFF',
    },
    secondary: {
        main: '#000000',  
        contrastText: '#FFFFFF'
    },
    custom: {
        main: '#FFFFFF',
        light: '#000000',
        dark: '#000000',
        contrastText:'#000000' ,
      },
  
  },
}as CustomPaletteOptions);


// Exporte o tema e o provedor do tema
export { theme, ThemeProvider };