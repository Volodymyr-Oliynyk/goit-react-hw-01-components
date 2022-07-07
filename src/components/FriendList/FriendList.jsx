import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { FriendContainer } from './FrendlistStyle';

export default function FriendList({ friends }) {
  return (
    <FriendContainer>
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </FriendContainer>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
