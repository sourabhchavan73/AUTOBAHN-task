import React from 'react';
import { connect } from 'react-redux';
import { useStyles } from './cardStyle';

const PostCard = (props) => {
  const { title, content, postId, setPostID, handleDrawerOpen } = props;
  const classes = useStyles();

  const handleEditPost = (postId) => {
    setPostID(postId);
    handleDrawerOpen();
  };

  return (
    <div className={classes.cardStyle}>
      <div className={classes.cardHead}>
        {title.length > 20 ? (
          <div className={classes.cardTitle}>{`${title.slice(0, 20)}...`}</div>
        ) : (
          <div className={classes.cardTitle}>{title}</div>
        )}
      </div>
      <div className={classes.cardBody}>
        {content.length > 75 ? (
          <p className={classes.paraStyle}>{`${content.slice(0, 75)}...`}</p>
        ) : (
          <p className={classes.paraStyle}>{content}</p>
        )}
      </div>
      <div className={classes.cardFooter}>
        <small
          onClick={() => handleEditPost(postId)}
          className={classes.cardFooterText}
        >
          Edit Post
        </small>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPostID: (id) => dispatch({ type: 'SET_POST_ID', payload: id }),
    handleDrawerOpen: () => dispatch({ type: 'DRAWER_OPEN' }),
  };
};

export default connect(null, mapDispatchToProps)(PostCard);
