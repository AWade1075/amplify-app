import { AmplifySignOut } from '@aws-amplify/ui-react';
import { Link } from 'react-router-dom';

interface SiteHeaderProps {
  isLoggedIn: boolean;
}
function SiteHeader({ isLoggedIn }: SiteHeaderProps) {
  return (
    <div className="site-header">
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between">
          <h1 className="">GoodPlays</h1>

          {isLoggedIn && (
            <div className="d-flex align-items-center justify-items-between">
              <AmplifySignOut />
              <Link className="header-link" to="/user-profile">
                My Profile
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SiteHeader;
