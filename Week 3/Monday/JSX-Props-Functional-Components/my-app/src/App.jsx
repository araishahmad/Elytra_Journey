import './App.css';
import React from 'react';
import avatarImg from './avatar.png'
import Badge from '@mui/material/Badge';
import Verification from '@mui/icons-material/Verified';

// Creating a button
function MyButton() {
    return (
        <button>Click me!</button>
    );
}

export default function MyApp() {
    return (
        <div>
            <MyCard />
            <MyAvatar />
            <MyPriceTag />
        </div>
    );
}

// Creating a card
const user = {
    name: 'Araish Ahmad',
    roll_No: 33,
    semester: '6th Semster',
    batch: 'FA23-BCS',
    avatar: avatarImg,
    avatar_size: 90
};

function MyCard() {
    return (
        <section className="cards-container">
            <div className="cards">
                <h1 className="hero-name" style={{display: "flex", alignItems: "center"}}>{user.name}
                    <Verification sx={{ color: '#1DA1F2', fontSize: 20 }} />
                </h1>
                <h2 className="hero-info">{user.roll_No}</h2>
                <h2 className="hero-info">{user.semester}</h2>
                <h2 className="hero-info">{user.batch}</h2>
                <MyButton />
            </div>
        </section>
    );
}

function MyAvatar (){
    return (
        <img 
        className="avatar"
        src={user.avatar}
        alt={'Profile photo of ' + user.name}
        style={{
            width: user.avatar_size,
            height: user.avatar_size
        }}
        />
    );
}

function MyPriceTag (){
    return (
        <div className="price-tag">
            <h1>Price: $82</h1>
            <p>Use a coupon for 10% discount</p>
        </div>
    );
}