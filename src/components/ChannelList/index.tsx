import React from 'react';
import { Text } from 'react-native';

import { 
  ChannelContainer,
  LeftSide,
  Avatar,
  UserName,
  Info,
  Column,
  RightSide,
  WhiteCircle,
  List
} from './styles';

const ChannelList: React.FC = () => {
  const ChannelItem = () =>(
    <ChannelContainer>
      <LeftSide>
        <Avatar/>
        <Column>
          <UserName>Shawee</UserName>
          <Info>35 news videos</Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WhiteCircle/>
      </RightSide>
    </ChannelContainer>
  )
  return (
    <List>
      <ChannelItem/>
      <ChannelItem/>
      <ChannelItem/>
      <ChannelItem/>
      <ChannelItem/>
    </List>
  );
};

export default ChannelList;
