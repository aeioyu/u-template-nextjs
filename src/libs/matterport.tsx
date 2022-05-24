import { configs } from "@/configs/configs";
import { ShowcaseEmbedWindow } from "matterport";

export const initMatterport = async (iframe: HTMLIFrameElement) => {
  const embeddingWindow = window as ShowcaseEmbedWindow;
  const mpSdk = await embeddingWindow.MP_SDK.connect(iframe, configs.matterport.key, "");
  return mpSdk;
};
