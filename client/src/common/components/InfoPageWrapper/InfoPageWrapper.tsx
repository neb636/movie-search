import React, { ReactNode } from 'react';
import classnames from 'classnames';
import BackCircleIcon from '@common/components/BackCircleIcon/BackCircleIcon';
import ImageWithFallback from '@common/components/ImageWithFallback/ImageWithFallback';
import { useHistory } from 'react-router-dom';
import './InfoPageWrapper.css';

type Props = {
  heroImageSrc?: string;
  title: string;
  topRightSection: ReactNode | Element[];
  children?: ReactNode | Element[];
  className?: string;
};

const InfoPageWrapper = (props: Props) => {
  const { heroImageSrc, title, topRightSection, children, className } = props;
  const classList = classnames('InfoPageWrapper', className);
  const history = useHistory();

  return (
    <div className={classList}>
      <BackCircleIcon className="InfoPageWrapper__back-button" onClick={() => history.goBack()} />

      <div className="InfoPageWrapper__top-section">
        <ImageWithFallback className="InfoPageWrapper__track-image" src={heroImageSrc} fallbackText={title} alt="Fallback Image" />

        <div className="InfoPageWrapper__top-right-section">
          <h2 className="InfoPageWrapper__title">{title}</h2>

          <div className="InfoPageWrapper__top-right-section-body">{topRightSection}</div>
        </div>
      </div>

      {!!children && <div className="InfoPageWrapper__bottom-section">{children}</div>}
    </div>
  );
};

export default InfoPageWrapper;
