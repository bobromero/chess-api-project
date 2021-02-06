import React from 'react';

const Profile = ({username, streamer, followers, type}) => {
    return(
        <div>
            <ul className="user-list">
                <li><p>Username: {type} {username}</p></li>
                <li><p>Followers: {followers}</p></li>
                <li><p>Streamer: {streamer ? 'yes':'no'}</p></li>
            </ul>
        </div>

    );
}

export default Profile;