import * as React from 'react';
import Button from 'shell/Button';
import addButtonImage from './AddButtonImage.svg';

export const AddButton: React.FunctionComponent<{ onClick: () => void; className?: string }> = ({
    onClick,
    className,
}) => <Button onClick={onClick} className={className} image={addButtonImage} />;
