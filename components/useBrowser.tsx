// hooks/useBrowser.ts
import { useEffect, useState } from "react";
import { browserName } from "react-device-detect";

const browserList: Record<string, { name: string; url: string; icon: string }> =
  {
    firefox: {
      name: "Firefox",
      url: "https://addons.mozilla.org/de/firefox/addon/tufast/",
      icon: "/browser-icons/firefox.svg",
    },
    chrome: {
      name: "Chrome",
      url: "https://chrome.google.com/webstore/detail/tufast-tu-dresden/aheogihliekaafikeepfjngfegbnimbk",
      icon: "/browser-icons/chrome.svg",
    },
    edge: {
      name: "Edge",
      url: "https://chrome.google.com/webstore/detail/tufast-tu-dresden/aheogihliekaafikeepfjngfegbnimbk",
      icon: "/browser-icons/edge.svg",
    },
  };

export const useBrowser = () => {
  const [browser, setBrowser] = useState(browserList.chrome);

  useEffect(() => {
    const key = browserName.toLowerCase();
    if (["firefox", "chrome", "edge"].includes(key)) {
      setBrowser(browserList[key]);
    }
  }, []);

  return browser;
};
