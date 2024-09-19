import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, IconButton, CardActions } from "@mui/material";
import { useCurrentUser } from "../../../users/providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import CardDeleteDialog from "../card/CardDeleteDialog";
import useUsers from "../../../users/hooks/useUsers";
import useCards from "../../hooks/useCards";


export default function CardActionBar({
  userId,
  cardId,
  onDelete,
  handleEdit,
  handleLike,
  phone,
}) {
  const { user }  = useCurrentUser();
  const navigate = useNavigate();
  const { handlePhoneCard, handleDelete, } = useCards();
  const [isDialogOpen, setDialog] = useState(false);

  const handleDialog = (term) => {
    if (term === "open") return setDialog(true);
    setDialog(false);
  };

  const handleDeleteCard = () => {
    handleDialog();
    handleDelete(cardId);
  };

  

  return (
    <>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Box>
          {user?.isAdmin || user?._id == userId ? (
            <>
              <IconButton
                aria-label="delete card"
                onClick={() => handleDialog("open")}>
                <DeleteIcon />
              </IconButton>
          


              <IconButton onClick={() => navigate(`${ROUTES.EDIT_CARD}/${cardId}`)}>
                <ModeEditIcon />
                
              </IconButton>
            </>
          ) : null}
       </Box>
        <Box>
          <IconButton onClick={() => handlePhoneCard(phone) }>
            <CallIcon />
          </IconButton>
          {user &&  (
            <IconButton onClick={() => handleLike(cardId)}>
              <FavoriteIcon />
            </IconButton>)}
        </Box>
      </CardActions>

      <CardDeleteDialog
        isDialogOpen={isDialogOpen}
        onChangeDialog={handleDialog}
        onDelete={handleDeleteCard}
      />
    </>
  );
}
