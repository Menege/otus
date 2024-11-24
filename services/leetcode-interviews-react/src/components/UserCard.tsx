import React from 'react';
import { User } from '../types/user';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => (
  <div>
    <h3>{user.name}</h3>
    <p>Rating: {user.rating}</p>
    <p>Role: {user.role}</p>
  </div>
);

export default UserCard;
