import { useEffect } from "react";
import { useRecoilSnapshot } from "recoil";

export function DebugObserver() {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true }) as any) {
      console.log("atoms were modified:", node.key, snapshot.getLoadable(node));
    }
  }, [snapshot]);

  return null;
}
