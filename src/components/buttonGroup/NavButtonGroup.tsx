import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import './ButtonGroup.css';
import { NavLink } from 'react-router-dom';

export default function NavButtonGroup() {
    return (
        <div className='nav-group-container'>
            <ButtonGroup
                className="custom-background"
                variant="contained"
                aria-label="outlined button group"
                size="medium" // Mudado para tamanho médio
            >
                <NavLink to="home" className="custom-link">
                    <Button className="custom-button">HOME</Button>
                </NavLink>
                <NavLink to="sobre" className="custom-link">
                    <Button className="custom-button">SOBRE</Button>
                </NavLink>
                <NavLink to="servicos" className="custom-link">
                    <Button className="custom-button">SERVIÇOS</Button>
                </NavLink>
                <NavLink to="duvidas" className="custom-link">
                    <Button className="custom-button" sx={{border: 'none'}}>DÚVIDAS</Button>
                </NavLink>
                <NavLink to="contato" className="custom-link">
                    <Button className="custom-button">CONTATO</Button>
                </NavLink>
            </ButtonGroup>
        </div>
    );
}
