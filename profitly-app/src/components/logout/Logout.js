import { Button } from "@chakra-ui/button";
import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useSavedSessionState } from "../../redux/hooks/useSavedSessionState";

export default function Logout() {
  const { loggedIn, setLoggedIn } = useSavedSessionState();
  const { logout } = useAuth();

  const handleLogout = () => {
    setLoggedIn("false");
  };
  return (
    <div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}
