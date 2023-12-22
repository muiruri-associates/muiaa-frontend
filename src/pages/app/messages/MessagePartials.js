import PropTypes from "prop-types";
import parse from "html-react-parser";
import { UserAvatar } from "../../../components/Component";
import { findUpper } from "../../../utils/Utils";
import React from "react";

export const ReplyItem = ({ item }) => {
  const { theme, name, date, replyMarkup, note, replyId, time } = item;

  return (
    <div className="nk-reply-item" key={replyId}>
      <div className="nk-reply-header">
        <div className="user-card">
          <UserAvatar size="sm" theme={theme} text={findUpper(name)} />
          <div className="user-name">{name}</div>
        </div>
        <div className="date-time">{date}</div>
      </div>
      <div className="nk-reply-body">
        <div className={`nk-reply-entry entry ${note ? "note" : ""}`}>
          {replyMarkup.map((replyMessage, idx) => {
            return <p key={idx}>{replyMessage}</p>;
          })}
        </div>
        <div className="nk-reply-from">
          {note ? "Private note" : "Replied"} by <span>{name}</span> at {time}
        </div>
      </div>
    </div>
  );
};

ReplyItem.propTypes = {
  item: PropTypes.shape({
    date: PropTypes.any,
    name: PropTypes.any,
    note: PropTypes.any,
    replyId: PropTypes.any,
    replyMarkup: PropTypes.shape({
      map: PropTypes.func,
    }),
    theme: PropTypes.any,
    time: PropTypes.any,
  }),
};

export const MetaItem = ({ item }) => {
  return <div className="nk-reply-meta">{parse(item)}</div>;
};

MetaItem.propTypes = {
  item: PropTypes.any,
};
