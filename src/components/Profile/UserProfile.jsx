import React from 'react';
import PropTypes from 'prop-types';
import {
  Description,
  Name,
  ProfileCard,
  Qauntity,
  Stats,
} from './UserProfileStyled';

export default function Profile(props) {
  const { username, tag, location, avatar, stats } = props;
  return (
    <ProfileCard>
      <Description>
        <img src={avatar} alt={username} class="avatar" />
        <Name>{username}</Name>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </Description>

      <Stats>
        <li>
          <Qauntity>Followers</Qauntity>
          <Qauntity> {stats.followers}</Qauntity>
        </li>
        <li>
          <Qauntity>Views</Qauntity>
          <Qauntity> {stats.views}</Qauntity>
        </li>
        <li>
          <Qauntity>Likes</Qauntity>
          <Qauntity> {stats.likes}</Qauntity>
        </li>
      </Stats>
    </ProfileCard>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
