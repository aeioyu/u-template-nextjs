import { configs } from "@/configs/configs";
import { Box } from "@mui/material";
import React, { ReactElement, useState } from "react";

interface DeepARContextValue {
  init: (option?: initOptions) => void;
  deepAR: any;
  closeAR: () => void;
  openARInstant: () => void;
}

type initOptions = {
  onInitialize?: (sdk: any) => void;
  onVideoStarted?: (deepArInitialed: any) => void;
};

const DeepARContext = React.createContext<DeepARContextValue>({} as DeepARContextValue);

const DeepARProvider: React.FC = ({ children }) => {
  const [deepAR, setDeepAR] = useState<any>();

  const init = async (option?: initOptions) => {
    const canvas = document.getElementById("deepar-canvas") as HTMLCanvasElement;
    const canvasHeight = canvas?.clientHeight;
    const canvasWidth = canvas?.clientWidth;

    const deepArInitialed = (window as any).DeepAR({
      licenseKey: configs.deep_ar.key,
      canvasWidth: canvasWidth,
      canvasHeight: canvasHeight,
      canvas: canvas,
      numberOfFaces: 1,
      libPath: "/deepar/libs",
      segmentationInfoZip: "segmentation.zip",
      onInitialize: function () {
        // deepArInitialed.startVideo(true);
        // deepArInitialed.setFps(30);
        option?.onInitialize?.(deepArInitialed);
      },
      onVideoStarted: function () {
        // deepArInitialed.switchEffect(0, "glasses", product.model);
        option?.onVideoStarted?.(deepArInitialed);
      },
      onError: function (error: unknown) {
        console.error(error);
      },
    });

    deepArInitialed.downloadFaceTrackingModel("/deepar/libs/models-68-extreme.bin");
    // deepArInitialed.setFaceDetectionSensitivity(2);

    setDeepAR(deepArInitialed);
  };

  const closeAR = () => {
    // if (deepAR) {
    //   deepAR?.stopVideo();
    //   const source = document.getElementById("deepar-canvas");
    //   const desc = document.getElementById("deepar-canvas-root");
    //   if (source && desc) {
    //     desc.appendChild(source);
    //   }
    // } else {
    //   console.warn("DeepAR not initialized");
    // }
  };

  const openARInstant = () => {
    // if (deepAR) {
    //   const source = document.getElementById("deepar-canvas");
    //   const desc = document.getElementById("deepar-canvas-pdp");
    //   if (source && desc) {
    //     setTimeout(() => {
    //       const canvasHeight = desc?.clientHeight;
    //       let canvasWidth = desc?.clientWidth;
    //       if (canvasWidth > canvasHeight) {
    //         canvasWidth = Math.floor(canvasHeight * 0.66);
    //       }
    //       desc.appendChild(source);
    //       deepAR.setCanvasSize(canvasWidth, canvasHeight);
    //       deepAR.startVideo(true);
    //     }, 1000);
    //   }
    // } else {
    //   console.warn("DeepAR not initialized");
    // }
  };

  return <DeepARContext.Provider value={{ init, deepAR, closeAR, openARInstant }}>{children}</DeepARContext.Provider>;
};

const useDeepAR = () => {
  const context = React.useContext(DeepARContext);
  if (context === undefined) {
    throw new Error("useDeepAR must be used within a DeepARProvider");
  }
  return context;
};

export { DeepARProvider, useDeepAR };

export default DeepARProvider;
