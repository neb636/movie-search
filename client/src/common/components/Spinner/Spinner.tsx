import * as React from 'react';
import classnames from 'classnames';
import './Spinner.css';

type Props = {
    className?: string;
};

const Spinner = (props: Props) => {
    const { className } = props;
    const classList = classnames('Spinner', className);

    return <div className={classList} />;
};

export default Spinner;
