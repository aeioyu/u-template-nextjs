import { Box, Button, Dialog, DialogActions, DialogContent, IconButton, Stack, Typography } from "@mui/material";
import React, { createContext, ReactElement, useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";

interface DialogContextActions {
  showDialog: (options?: NotificationOptions) => void;
}

const DialogContext = createContext({} as DialogContextActions);

interface DialogContextProviderProps {
  children: React.ReactNode;
}

type DialogState = {
  open: boolean;
  options?: NotificationOptions;
};

type NotificationOptions = {
  title?: string;
  message?: string;
  onAccept?: () => void;
  onCancle?: () => void;
  acceptText?: string | ReactElement;
  cancleText?: string | ReactElement;
};

const DialogProvider: React.FC<DialogContextProviderProps> = ({ children }) => {
  const [dialogState, setDialogState] = React.useState<DialogState>({ open: false });

  const showDialog = (options?: NotificationOptions) => {
    setDialogState({
      open: true,
      options: options,
    });
  };

  const handleClose = () => {
    setDialogState({
      ...dialogState,
      open: false,
    });
  };

  const handleOnAccept = () => {
    dialogState.options?.onAccept?.();
    handleClose();
  };
  const handleOnCancle = () => {
    dialogState.options?.onCancle?.();
    handleClose();
  };

  return (
    <DialogContext.Provider value={{ showDialog }}>
      <Dialog
        open={dialogState.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: { borderRadius: "16px", background: "linear-gradient(180deg, #E4F5F2 0%, #B1D2E4 100%)" },
        }}
      >
        <Box id="alert-dialog-title" sx={{ pt: "24px", px: "16px" }}>
          <Typography variant="h4" fontWeight="600">
            {dialogState.options?.title}
          </Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "text.primary",
            }}
          >
            <CloseIcon style={{ fontSize: "32px" }} />
          </IconButton>
        </Box>
        <DialogContent sx={{ pb: "16px", px: "16px" }}>
          <Typography fontWeight="500">{dialogState.options?.message}</Typography>
        </DialogContent>
        <DialogActions sx={{ px: "16px", pb: "12px", pt: 0 }}>
          <Stack direction="row" spacing={4} sx={{ width: "100%" }}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              fullWidth
              sx={{ borderRadius: 999, flex: 1 }}
              onClick={handleOnCancle}
            >
              {dialogState.options?.cancleText ?? "Cancel"}
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              fullWidth
              sx={{ borderRadius: 999, flex: 1 }}
              onClick={handleOnAccept}
            >
              {dialogState.options?.acceptText ?? "Accept"}
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
      {children}
    </DialogContext.Provider>
  );
};

const useDialog = (): DialogContextActions => {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error("useDialog must be used within an NotificationProvider");
  }

  return context;
};

export { DialogProvider, useDialog };
