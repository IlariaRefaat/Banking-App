import { FC } from "react";

import { AppBar, Toolbar, Typography, Link, Button } from "@mui/material";

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
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Last transactions
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            View customers
          </Link>
        </nav>
        <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
          Make a transation
        </Button>
      </Toolbar>
    </AppBar>
  );
};
