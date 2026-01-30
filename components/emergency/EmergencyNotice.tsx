"use client";

import "@/styles/emergency-notice.css";
import { useDevice } from "../../app/hook/useDevice";

type Props = {
  maintenancePC: boolean;
  maintenanceTablet: boolean;
  maintenanceMobile: boolean;
};

export default function EmergencyNotice({
  maintenancePC,
  maintenanceTablet,
  maintenanceMobile,
}: Props) {
  const device = useDevice();
  if (!device) return null;

  const shouldShow =
    (device === "pc" && maintenancePC) ||
    (device === "tablet" && maintenanceTablet) ||
    (device === "mobile" && maintenanceMobile);

  if (!shouldShow) return null;

  return (
    <div className="emergency-overlay">
      <aside className="emergency-notice">
        {device === "pc" && <p>現在、PC向けサイトを一時停止しています。</p>}
        {device === "tablet" && <p>現在、タブレット向け表示を一時停止しています。</p>}
        {device === "mobile" && <p>現在、スマートフォン向け表示を停止しています。</p>}
        <p style={{ opacity: 0.7 }}>復旧までしばらくお待ちください。</p>
      </aside>
    </div>
  );
}
