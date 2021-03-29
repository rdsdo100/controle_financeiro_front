import React from 'react';
import {NavTabs , UL} from "./styles";

const Tab: React.FC = ({children}) => (
    <NavTabs>
        <UL>
            {children}
        </UL>
          </NavTabs>
)

export default Tab

