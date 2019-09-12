import React from 'react';
import './HeaderBar.css';
import theme from '../../../../config/theme';
import Avatar from '../Avatar/Avatar';

interface Props {
  title: string;
  avatarUrl?: string;
}

/**
 * Provides structure to group title and avatar.
 */
const HeaderBar: React.FC<Props> = props => {
  return (
    <div className="HeaderBar" style={{ backgroundColor: theme.accentColor }}>
      <h1 className="title">{props.title}</h1>
      <Avatar imageUrl={props.avatarUrl} />
    </div>
  );
};

export default React.memo(HeaderBar);
