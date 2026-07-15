"use client";

import { useEffect, useState } from "react";

export function SiteLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const minimumTimer = window.setTimeout(() => setVisible(false), 900);
    const safetyTimer = window.setTimeout(() => setVisible(false), 1300);

    return () => {
      window.clearTimeout(minimumTimer);
      window.clearTimeout(safetyTimer);
    };
  }, []);

  return (
    <div className="site-loader" data-hidden={!visible} aria-hidden="true">
      <div className="site-loader__mark">
        <span>NA</span>
        <small>Hiring consultant</small>
        <i />
      </div>
    </div>
  );
}
