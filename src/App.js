import logo from './logo.svg';
import './App.css';
import BUTTON from './Components/BUTTON';
import GRID from './Components/GRID';
import { Container } from '@mui/material';

function App() {
  return (
    <>
    <Container maxWidth="sm">
        <GRID />
        <BUTTON />
        <BUTTON />
        <BUTTON />
    </Container>
    </>
  );
}

export default App;
