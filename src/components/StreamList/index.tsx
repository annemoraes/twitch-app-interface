import React from 'react';
import { Text } from 'react-native';
import streamThumbnail from '../../images/stream_thumbnail.jpg';

import { 
  StreamContainer,
  StreamThumbnail,
  StreamColumn,
  StreamRow,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,
  List
} from './styles';

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail}/>

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar/>
            <StreamUsername numberOfLines={1}>MZK</StreamUsername>
          </StreamHeader>
          <StreamDescription numberOfLines={1}>
              Interface Twitch React Native
          </StreamDescription>
          <StreamCategory numberOfLines={1}>
              Tecnologia
          </StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>
          <TagView>
            <TagText>web developer</TagText>
          </TagView>
        </TagRow>  
      </StreamColumn>
    </StreamContainer>
  )
  return (
    <List>
      <StreamItem/>
      <StreamItem/>
      <StreamItem/>
      <StreamItem/>
    </List>
  );
};

export default StreamList;
