import React from 'react';

const Profile = ({username, streamer, country, followers, id}) => {
    return(
        <div>
            <ul className="user-list">
                <li><p>Username: {username}</p></li>
                <li><p>Country: {country}</p></li>
                <li><p>Followers: {followers}</p></li>
                <li><p>Streamer: {streamer ? 'yes':'no'}</p></li>
                <li><p>ID: {id}</p></li>
            </ul>
        </div>

    );
}

export default Profile;