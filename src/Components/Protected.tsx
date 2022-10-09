import { useEffect } from "react";

import { checkLogin } from "../api/index";

const Protected: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    checkLogin().catch((err) => {
      if (err) {
        window.location.href = "/login";
      }
    });
  }, []);

  return <>{children}</>;
};

export default Protected;
