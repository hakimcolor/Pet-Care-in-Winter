import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { updateProfile } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.displayName || '');
      setPhotoURL(user.photoURL || '');
    }
  }, [user]);

  const handleUpdateProfile = async () => {
    if (!name || !photoURL) {
      toast.error('Name and Image URL cannot be empty!');
      return;
    }

    try {
      await updateProfile(user, { displayName: name, photoURL: photoURL });
      toast.success('Profile updated successfully!');
      setEditing(false);
    } catch (error) {
      console.error(error);
      toast.error('Failed to update profile.');
    }
  };

  if (!user) {
    return (
      <div className="text-center mt-10 text-gray-700">
        Please login to access your profile.
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md flex flex-col items-center border border-gray-200">
    
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-400 mb-6">
          <img
            src={photoURL || 'https://i.ibb.co/2Z3p8wN/default-user.png'}
            alt={user.displayName}
            className="w-full h-full object-cover"
          />
        </div>

     
        <div className="w-full text-center mb-6 space-y-3">
          {editing ? (
            <>
              <div>
                <label className="block text-gray-500 mb-1 font-medium">
                  Username:
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="border border-gray-300 rounded-lg p-2 w-full text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-gray-500 mb-1 font-medium">
                  Image URL:
                </label>
                <input
                  type="text"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  placeholder="Enter image URL"
                  className="border border-gray-300 rounded-lg p-2 w-full text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </>
          ) : (
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-800">
                <span className="text-gray-500 font-medium">Username: </span>
                {user.displayName}
              </h2>
              <p className="text-gray-600">
                <span className="text-gray-500 font-medium">Email: </span>
                {user.email}
              </p>
            </div>
          )}
        </div>

     
        {editing ? (
          <div className="flex gap-4">
            <button
              onClick={handleUpdateProfile}
              className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition font-semibold"
            >
              Save
            </button>
            <button
              onClick={() => {
                setEditing(false);
                setName(user.displayName);
                setPhotoURL(user.photoURL);
              }}
              className="bg-gray-300 px-5 py-2 rounded-lg hover:bg-gray-400 transition font-semibold"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition font-semibold"
          >
            Edit Profile
          </button>
        )}
      </div>

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default MyProfile;
