import { useEffect, useState } from "react";

import { checkLogin } from "../api/index";

const Protected: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    checkLogin()
      .then(() => setLoading(false))
      .catch((err) => {
        if (err) {
          window.location.href = "/login";
        }
      });
  }, []);

  return <>{!loading && children}</>;
};

export default Protected;
