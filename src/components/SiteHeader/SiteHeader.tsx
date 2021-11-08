import { AmplifySignOut } from '@aws-amplify/ui-react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../App';

function SiteHeader() {
  const { isSignedIn } = useContext(AuthContext);
  return (
    <div className="site-header">
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between">
          <h1 className="">GoodPlays</h1>

          {isSignedIn && (
            <div className="d-flex align-items-center justify-items-between">
              <Link className="app-link mx-4" to="/user-profile">
                My Profile
              </Link>
              <AmplifySignOut />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SiteHeader;
