import {Route, useNavigate, Routes} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function ProtectedRoute({ element: Element, admin, ...rest }) {
  let navigate = useNavigate();
  const { loggedIn, user } = useAuth();
  return (
    <Routes>
      <Route
        {...rest}
        render={(props) => {
          if (admin && user.role !== 'admin') {
            debugger;
            console.log(user);
            return navigate('/', { replace: true });
          }

          if (loggedIn) {
            return <Element {...props} />;
          }
          return navigate('/', { replace: true });
        }}
      />
    </Routes>
  );
}

export default ProtectedRoute


