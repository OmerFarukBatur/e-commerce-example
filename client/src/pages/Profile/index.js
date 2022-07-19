import { Button } from '@chakra-ui/react';
import React from 'react';
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const handleLogout = async () => {
        logout(() => {
          navigate('/', { replace: true });
        });
    };

  return (
    <div>
      <h2>Profile</h2>
      <code>{JSON.stringify(user)}</code>
      <br/><br/>
      <Button colorScheme="pink" variant="solid" onClick={handleLogout}>
        Logout
        </Button>
    </div>
  )
}

export default Profile
