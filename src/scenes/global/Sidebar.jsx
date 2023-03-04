/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import {
  //DarkModeOutlined,
  HomeOutlined,
  PeopleOutline,
  ContactsOutlined,
  ReceiptOutlined,
  PersonOutline,
  CalendarTodayOutlined,
  HelpOutlined,
  BarChartOutlined,
  PieChartOutlineOutlined,
  MenuOutlined,
  MapOutlined,
  TimelineOutlined,
} from "@mui/icons-material";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
      style={{ color: colors.grey[100] }}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important ",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMIN
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* USER */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  width="100px"
                  height="100px"
                  src={"/img/profile.jpg"}
                  alt="Profile"
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{
                    m: "10px 0 0 0",
                  }}
                >
                  Taijul Islam
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Frontend Developer
                </Typography>
              </Box>
            </Box>
          )}
          {/* Menu Items */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              selected={selected}
              title="Dashboard"
              to="/"
              icon={<HomeOutlined />}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              selected={selected}
              title="Manage Team"
              to="/team"
              icon={<PeopleOutline />}
              setSelected={setSelected}
            />
            <Item
              selected={selected}
              title="Contact Information"
              to="/contacts"
              icon={<ContactsOutlined />}
              setSelected={setSelected}
            />
            <Item
              selected={selected}
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlined />}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              selected={selected}
              title="Profile Form"
              to="/form"
              icon={<PersonOutline />}
              setSelected={setSelected}
            />
            <Item
              selected={selected}
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlined />}
              setSelected={setSelected}
            />
            <Item
              selected={selected}
              title="FAQ"
              to="/faq"
              icon={<HelpOutlined />}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              selected={selected}
              title="Bar chart"
              to="/bar"
              icon={<BarChartOutlined />}
              setSelected={setSelected}
            />
            <Item
              selected={selected}
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlined />}
              setSelected={setSelected}
            />
            <Item
              selected={selected}
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlined />}
              setSelected={setSelected}
            />
            <Item
              selected={selected}
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlined />}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
