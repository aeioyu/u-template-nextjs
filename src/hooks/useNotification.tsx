import { Alert, AlertProps, Slide, Snackbar, SnackbarProps, styled } from "@mui/material";
import React, { createContext, ReactElement, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

interface NotificationContextActions {
  showNotification: (message: string | ReactElement, options?: NotificationOptions) => void;
}

const NotificationContext = createContext({} as NotificationContextActions);

interface NotificationContextProviderProps {
  children: React.ReactNode;
}

const StyledSnackbar = styled(Snackbar)<SnackbarProps>(() => ({
  left: "16px !important",
  right: "16px !important",
  zIndex: 999,
  transform: "none !important",
  "&.MuiSnackbar-anchorOriginTopCenter": {
    top: "16px",
  },
}));

const StyledAlert = styled(Alert)<AlertProps>(({ theme }) => ({
  background: theme.palette.success.light,
  width: "100%",
  maxWidth: 668,
  borderRadius: "19px",
  border: "2px solid #04D8BB",
  whiteSpace: "nowrap",
  margin: "0 auto",
  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.25)",
  "& .MuiAlert-message": {
    alignSelf: "center",
  },
}));

type SnackbarState = {
  open: boolean;
  message?: string | ReactElement;
  options?: NotificationOptions;
};

type NotificationOptions = {
  action?: ReactElement;
  key?: string;
};

const NotificationProvider: React.FC<NotificationContextProviderProps> = ({ children }) => {
  const [snackbarState, setSnackbarState] = React.useState<SnackbarState>({ open: false });

  const showNotification = (message: string | ReactElement, options?: NotificationOptions) => {
    setSnackbarState({
      open: true,
      message: message,
      options: options,
    });
  };

  const handleClose = () => {
    setSnackbarState({
      ...snackbarState,
      open: false,
    });
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      <StyledSnackbar
        key={snackbarState.options?.key ?? uuidv4()}
        open={snackbarState.open}
        autoHideDuration={14000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={handleClose}
        TransitionComponent={(props) => <Slide {...props} direction="down" />}
      >
        <StyledAlert icon={false} action={snackbarState?.options?.action} onClose={handleClose} onClick={handleClose}>
          {snackbarState?.message}
        </StyledAlert>
      </StyledSnackbar>
      {children}
    </NotificationContext.Provider>
  );
};

const useNotification = (): NotificationContextActions => {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error("useNotification must be used within an NotificationProvider");
  }

  return context;
};

export { NotificationProvider, useNotification };
