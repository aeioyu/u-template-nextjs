import styled from "@emotion/styled";
import { Backdrop, Dialog, DialogContent, DialogProps, IconButton } from "@mui/material";
import React from "react";
import { zIndex } from "@/themes/theme";
import BackIcon from "@/assets/icons/chevron_left.svg";
import CloseIcon from "@/assets/icons/close.svg";

interface ModalProps extends DialogProps {
  onClose?: () => void;
  onBack?: () => void;
  open: boolean;
  backdrop?: boolean;
}

const StyledBackdrop = styled(Backdrop)`
  background-color: rgba(255, 255, 255, 0.5);
`;

const TransparentBackdrop = styled(Backdrop)`
  background-color: transparent;
`;

const StyleModal: React.FC<ModalProps> = ({ onClose, onBack, children, open = false, backdrop = false, ...rest }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen
      scroll="paper"
      sx={{ margin: "auto", padding: "16px", paddingBottom: "28px", zIndex: zIndex.modal, maxWidth: 700 }}
      PaperProps={{
        sx: {
          borderRadius: "24px",
          boxShadow: "none",
          transform: "translate3d(0,0,0)",
          background: "transparent",
          border: "2px solid #ffffff",
          height: "100%",
        },
      }}
      BackdropComponent={backdrop ? StyledBackdrop : TransparentBackdrop}
      {...rest}
    >
      {onBack && (
        <IconButton
          aria-label="close"
          onClick={onBack}
          sx={{
            position: "absolute",
            padding: "4px",
            left: "16px",
            top: "16px",
            color: "text.primary",
            zIndex: zIndex.modal + 1,
            background: "rgba(255, 255, 255, 0.4)",
            width: "33px",
            height: "33px",
            ":hover": {
              background: "rgba(255, 255, 255, 0.3)",
            },
          }}
        >
          <BackIcon style={{ position: "relative", left: -1 }} />
        </IconButton>
      )}
      {onClose && (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            padding: "4px",
            right: "12px",
            top: "19px",
            color: "text.primary",
            background: "rgba(255, 255, 255, 0.4)",
            zIndex: zIndex.modal + 1,
            width: "33px",
            height: "33px",
            ":hover": {
              background: "rgba(255, 255, 255, 0.3)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      )}
      <DialogContent sx={{ p: "0" }}>{children}</DialogContent>
    </Dialog>
  );
};

export default StyleModal;
