import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import LogoutIcon from '@mui/icons-material/Logout';
import useUsers from "../../../users/hooks/useUsers";
import { Box } from "@mui/material";


export default function Logged() {
  const { handleLogout } = useUsers();
  return (
    <Box sx={{ display: "inline-flex", alignItems: "center" }}>
      <Tooltip title="Open settings">
        <IconButton sx={{ p: 0, marginLeft: 2 }}>
          <Avatar alt="avatar" src="/images/avatar.png" />
        </IconButton>
      </Tooltip>
      <IconButton onClick={handleLogout}>
        <LogoutIcon />
      </IconButton>
    </Box>
  );
}