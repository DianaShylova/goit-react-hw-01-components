import propTypes from "prop-types";
import css from "./FriendListItem.module.css";

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <>
            <li className={css.item}>
                <span className={isOnline ? css.online : css.offline}>{isOnline}</span>
                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={css.name}>{name}</p>

            </li>
        </>
    );
};

FriendListItem.propTypes = {
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool.isRequired,
};
