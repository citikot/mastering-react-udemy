import { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import { generateRandomColor } from '../../utils/generateRandomColor';
import classes from './ColoredBlock.module.css';

export type ColoredBlockProps = {
    children?: ReactNode;
    style?: CSSProperties;
    onClick?: MouseEventHandler;
};

export function ColoredBlock({ children, style, onClick }: ColoredBlockProps) {
    const composedStyle: CSSProperties = {
        backgroundColor: generateRandomColor(),
        ...style,
    };

    return (
        <div
            data-testid="colored-block"
            className={classes.coloredBlock}
            style={composedStyle}
            onClick={onClick}
        >
            {children}
        </div>
    );
}
