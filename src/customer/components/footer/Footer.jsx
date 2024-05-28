import { Button, Grid, Typography, Link } from "@mui/material";
import React from "react";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 4 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            className="pt-0 md:pt-0 lg:pt-0 pb-1"
            variant="h6"
            sx={{ fontSize: "1rem" }}
          >
            ONLINE SHOPPING
          </Typography>

          <div className="flex flex-col">
            <Button
              variant="h6"
              sx={{ p: "0", marginBottom: "2px", fontSize: "0.8rem" }}
            >
              Men
            </Button>
            <Button
              variant="h6"
              sx={{ p: "0", marginBottom: "2px", fontSize: "0.8rem" }}
            >
              Women
            </Button>
            <Button
              variant="h6"
              sx={{ p: "0", marginBottom: "2px", fontSize: "0.8rem" }}
            >
              Kids
            </Button>
            <Button
              variant="h6"
              sx={{ p: "0", marginBottom: "2px", fontSize: "0.8rem" }}
            >
              Gift Cards
            </Button>
            <Button
              variant="h6"
              sx={{ p: "0", marginBottom: "2px", fontSize: "0.8rem" }}
            >
              Insiders
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography
            className="pt-3 md:pt-0 lg:pt-0 pb-1"
            variant="h6"
            sx={{ fontSize: "1rem" }}
          >
            USEFUL LINKS
          </Typography>

          <div className="flex flex-col">
            <Button
              variant="h6"
              sx={{ p: "0", marginBottom: "2px", fontSize: "0.8rem" }}
            >
              Blog
            </Button>
            <Button
              variant="h6"
              sx={{ p: "0", marginBottom: "2px", fontSize: "0.8rem" }}
            >
              Career
            </Button>
            <Button
              variant="h6"
              sx={{ p: "0", marginBottom: "2px", fontSize: "0.8rem" }}
            >
              Press
            </Button>
            <Button
              variant="h6"
              sx={{ p: "0", marginBottom: "2px", fontSize: "0.8rem" }}
            >
              Partners
            </Button>
            <Button
              variant="h6"
              sx={{ p: "0", marginBottom: "2px", fontSize: "0.8rem" }}
            >
              Support
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography
            className="pt-3 md:pt-4 lg:pt-0 pb-1"
            variant="h6"
            sx={{ fontSize: "1rem" }}
          >
            SOLUTIONS
          </Typography>

          <div className="flex flex-col">
            <Button
              variant="h6"
              sx={{ p: "0", marginBottom: "2px", fontSize: "0.8rem" }}
            >
              Marketing
            </Button>
            <Button
              variant="h6"
              sx={{ p: "0", marginBottom: "2px", fontSize: "0.8rem" }}
            >
              Analytics
            </Button>
            <Button
              variant="h6"
              sx={{ p: "0", marginBottom: "2px", fontSize: "0.8rem" }}
            >
              Insights
            </Button>
            <Button
              variant="h6"
              sx={{ p: "0", marginBottom: "2px", fontSize: "0.8rem" }}
            >
              Commerce
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography
            className="pt-3 md:pt-4 lg:pt-0 pb-1"
            variant="h6"
            sx={{ fontSize: "1rem" }}
          >
            LEGAL
          </Typography>

          <div className="flex flex-col">
            <Button
              variant="h6"
              sx={{ p: "0", marginBottom: "2px", fontSize: "0.8rem" }}
            >
              Claim
            </Button>
            <Button
              variant="h6"
              sx={{ p: "0", marginBottom: "2px", fontSize: "0.8rem" }}
            >
              Privacy
            </Button>
            <Button
              variant="h6"
              sx={{ p: "0", marginBottom: "2px", fontSize: "0.8rem" }}
            >
              Terms
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sx={{ pt: 5 }}>
          <Typography variant="body2" component="p" align="center">
            &copy; {currentYear} My Company. All rights reserved.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made with love for you.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            The icons were made by Freepik from{' '}
            <Link
              href="http://www.flaticon.com/"
              color="inherit"
              underline="always"
            >
              www.flaticon.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
