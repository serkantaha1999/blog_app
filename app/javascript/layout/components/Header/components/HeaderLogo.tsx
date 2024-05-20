import React, {FC} from 'react';
import {RouterLink} from "../../../../shared/components/Link/Link";
import {ROUTES} from "../../../../app/router/router-config";

const HeaderLogo: FC = () => {
  return (
      <RouterLink url={ROUTES.layout}>
          <img
              src=""
              alt="Header-Logo"
          />
      </RouterLink>
  );
};

export default HeaderLogo;
