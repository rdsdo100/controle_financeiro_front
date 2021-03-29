import React from 'react';
import {Content, LabelTabs, LI, RdTabs,TabBody} from "./styles";
import {NavTabs, UL} from "../Tab/styles";

interface ITab {
    IdNameTab: string
    text?: string
    defaultCheckedTab?: boolean
}


const Tabs: React.FC<ITab> = ({children ,
                                     defaultCheckedTab ,
                                     text,
                                     IdNameTab}) => (

    <LI key={IdNameTab}>
        <TabBody>
            <RdTabs type='radio' name='tabs' id={IdNameTab}  defaultChecked={  defaultCheckedTab ? true : false  } />
            <LabelTabs  htmlFor={IdNameTab}>{text}</LabelTabs>
            <Content>
                {children}
            </Content>
        </TabBody>
    </LI>

);

export default Tabs

