import * as React from 'react';
import earthImage from './Earth.svg';
import Button from '../Button/Button';

const MenuButton: React.FunctionComponent<{ onClick: () => void; className: string }> = ({ onClick, className }) => (
    <Button onClick={onClick} className={className} image={earthImage} />
);

export { MenuButton as default };
