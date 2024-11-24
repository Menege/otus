import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserById, updateUserRating } from '../api/usersApi';
import { User } from '../types/user';

const UserProfile: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [newRating, setNewRating] = useState<number>(0);

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        const data = await getUserById(id);
        setUser(data);
        setNewRating(data.rating);
      };
      fetchUser();
    }
  }, [id]);

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewRating(Number(e.target.value));
  };

  const handleUpdateRating = async () => {
    if (id) {
      const updatedUser = await updateUserRating(id, newRating);
      setUser(updatedUser);
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>{user.name}'s Profile</h1>
      <p>Role: {user.role}</p>
      <p>Current Rating: {user.rating}</p>

      <h2>Update Rating</h2>
      <input type="number" value={newRating} onChange={handleRatingChange} />
      <button onClick={handleUpdateRating}>Update Rating</button>
    </div>
  );
};

export default UserProfile;
