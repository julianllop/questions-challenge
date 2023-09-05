import React from "react";
import style from "./profile.module.css";
import happy from "../../img/happy.png";
import trophyIcon from "../../img/trophy.png";
import coinIcon from "../../img/coin.png";

const Profile = ({ profile }) => {
    return (
        <div className={style.profile}>
            <section className={style.nameAndPhoto}>
                <div className={style.nameCont}>
                    <h1 className={style.name}>Hi, {profile.name}</h1>
                    <h3 className={style.invitation}>
                        Let's make this day productive
                    </h3>
                </div>
                <div className={style.photoContainer}>
                     <img
                        src={happy}
                        alt="profile_photo"
                        className={style.profilePic}
                    />
                </div>
            </section>

            <section className={style.rankAndPoints}>
                <div className={style.rank}>
                    <img src={trophyIcon} alt="trophy" className={style.icon} />
                    <div className={style.justify}>
                        <h3>Ranking</h3>
                        <h2>{profile.ranking}</h2>
                    </div>
                </div>
                <div className={style.points}>
                    <img src={coinIcon} alt="coin" />
                    <div className={style.justify}>
                        <h3>Points</h3>
                        <h2>{profile.points}</h2>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;
