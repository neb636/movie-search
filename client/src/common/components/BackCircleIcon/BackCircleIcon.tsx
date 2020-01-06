import './BackCircleIcon.css';
import React from 'react';
import classnames from 'classnames';

type Props = {
  backgroundColor?: string;
  arrowColor?: string;
  size?: number;
  className?: string;
  onClick?: (e?: React.MouseEvent<HTMLDivElement>) => any;
};

const BackCircleIcon = (props: Props) => {
  const { className, backgroundColor, onClick } = props;
  const size = props.size || 50;
  const classList = classnames('BackCircleIcon', className);
  const arrowColor = props.arrowColor || '#fff';

  const circleStyle = {
    backgroundColor,
    width: `${size}px`,
    height: `${size}px`
  };

  if (backgroundColor) {
    circleStyle.backgroundColor = backgroundColor;
  }

  const iconSize = size * 0.6;

  return (
    <div className={classList} style={circleStyle} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />

        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill={arrowColor} />
      </svg>
    </div>
  );
};

export default BackCircleIcon;
