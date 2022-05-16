import { FC } from "react";

import { AppBar, Toolbar, Typography, Link, Button } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

type NavigationBarProps = {};

export const NavigationBar: FC<NavigationBarProps> = () => {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Central Bank of Egypt
        </Typography>
        <nav>
          <Link
            variant="button"
            color="text.primary"
            sx={{ my: 1, mx: 1.5 }}
            component={RouterLink}
            to="/"
          >
            Last transactions
          </Link>
          <Link
            variant="button"
            color="text.primary"
            sx={{ my: 1, mx: 1.5 }}
            component={RouterLink}
            to="/customers"
          >
            View customers
          </Link>
        </nav>
        <Button
          component={RouterLink}
          to="/transfer"
          variant="outlined"
          sx={{ my: 1, mx: 1.5 }}
        >
          Make a transation
        </Button>
      </Toolbar>
    </AppBar>
  );
};
