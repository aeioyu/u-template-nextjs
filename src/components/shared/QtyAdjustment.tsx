import { ButtonBase, ButtonBaseProps, Stack, styled, Typography } from "@mui/material";
import React, { useState } from "react";

interface QtyAdjustmentProps {
  qty: number;
  minQty?: number;
  maxQty?: number;
  onQtyChange?: (qty: number) => void;
  beforeChange?: (qty: number) => boolean;
}

const AddjustmentButton = styled(ButtonBase)<ButtonBaseProps>(({ theme }) => ({
  fontSize: "16px",
  padding: "0px 8px",
  background: "transparent",
  borderRadius: "99px",
  width: "40px",
  border: "1px solid #333333",
  lineHeight: "20px",
  paddingBottom: "2px",
  borderColor: theme.palette.primary.main,
  color: theme.palette.primary.main,
  ":disabled": {
    opacity: 0.3,
  },
}));

const QtyAdjustment = ({ qty, minQty = 1, maxQty = 99, onQtyChange, beforeChange }: QtyAdjustmentProps) => {
  const [counter, setCounter] = useState(qty);

  const handleIncrement = () => {
    const doChange = beforeChange?.(counter + 1) ?? true;
    if (doChange) {
      setCounter((prev) => {
        onQtyChange?.(prev + 1);
        return prev + 1;
      });
    }
  };

  const handleDecrement = () => {
    const doChange = beforeChange?.(counter - 1) ?? true;
    if (doChange) {
      setCounter((prev) => {
        onQtyChange?.(prev - 1);
        return prev - 1;
      });
    }
  };

  return (
    <Stack direction="row">
      <AddjustmentButton onClick={handleDecrement} disabled={counter <= minQty}>
        -
      </AddjustmentButton>
      <ButtonBase sx={{ width: "32px" }}>
        <Typography fontWeight="600">{counter}</Typography>
      </ButtonBase>
      <AddjustmentButton onClick={handleIncrement} disabled={counter >= maxQty}>
        +
      </AddjustmentButton>
    </Stack>
  );
};

export default QtyAdjustment;
