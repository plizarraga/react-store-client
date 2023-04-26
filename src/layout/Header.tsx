import { AppBar, Switch, Toolbar, Typography } from '@mui/material';

interface Props {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const Header: React.FC<Props> = ({ toggleDarkMode, darkMode }) => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">RE-STORE</Typography>
        <Switch onChange={toggleDarkMode} checked={darkMode} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
