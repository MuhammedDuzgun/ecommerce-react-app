import {
  Avatar,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  AddShoppingCart,
  FavoriteBorder,
  Storefront,
} from "@mui/icons-material";

const Navbar = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <div>
      <Box>
        <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b">
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2">
              {!isLarge &&
                <IconButton>
                  <MenuIcon></MenuIcon>
                </IconButton>
              }
              <h1 className="logo cursor-pointer text-lg md:text-2x1 text-primary-color">
                Pazaryeri
              </h1>
            </div>
            <ul className="flex items-center font-medium text-gray-800">
              {["Men", "Women", "Home & Furniture", "Electronics"].map(
                (item) => (
                  <li
                    className="mainCategory hover:text-primary-color
                  hover:border-b-2 h-[70px] px-4 border-primary-color
                   flex items-center"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="flex gap-1 lg:gap-6 items-center">
            <IconButton>
              <SearchIcon />
            </IconButton>
            {true ? (
              <Button className="flex items-center gap-2">
                <Avatar
                  sx={{ width: 29, height: 29 }}
                  src="https://www.svgrepo.com/show/446523/avatar.svg/"
                />
                <h1 className="font-semibold hidden lg:block">Muhammed</h1>
                Pazaryeri
              </Button>
            ) : (
              <Button variant="contained">Login</Button>
            )}
            <IconButton>
              <FavoriteBorder sx={{ fontSize: 29 }} />
            </IconButton>
            <IconButton>
              <AddShoppingCart
                className="text-gray-700"
                sx={{ fontSize: 29 }}
              />
            </IconButton>
            {isLarge && (
              <Button startIcon={<Storefront />} variant="outlined">
                Become a Seller
              </Button>
            )}
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Navbar;
