import { IconButton, IconButtonProps, styled } from "@mui/material";
import React from "react";

interface StyleIconButtonProps extends IconButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
}

const StyledCircleButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  background: theme.palette.primary.main,
  boxShadow: "0 6px 11px rgba(0, 0, 0, 0.15)",
  border: "2px solid #ffffff",
  "&:hover": {
    background: theme.palette.primary.main,
  },
  "&:focus": {
    background: theme.palette.primary.main,
  },
  "&:visited": {
    background: theme.palette.primary.main,
  },
  "&:active": {
    background: theme.palette.primary.dark,
  },
}));

const CircleButton = ({ children, onClick, ...rest }: StyleIconButtonProps) => {
  return (
    <StyledCircleButton onClick={onClick} {...rest}>
      {children}
    </StyledCircleButton>
  );
};

export default CircleButton;
