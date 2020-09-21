import React from 'react';

const data = {
    jamie: {
        name: '조현민',
        description: '리액트를 공부하는 자바 개발자'
    },
    velopert: {
        name: '김민준',
        description: '내가 공부하고 있는 책의 저자'
    }
};

const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = data[username];
    if (!profile) {
        return <div>존재하지 않는 사용자입니다.</div>;
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>
                {profile.description}
            </p>
        </div>
    );
};

export default Profile;