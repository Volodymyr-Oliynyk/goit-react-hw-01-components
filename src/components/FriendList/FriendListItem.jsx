import React from 'react';
import PropTypes from 'prop-types';
import { Item, OnlineLabel, Avatar, Title } from './FrendlistStyle';

export default function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <Item key={id}>
      <OnlineLabel isOnline={isOnline}></OnlineLabel>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Title>{name}</Title>
    </Item>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
