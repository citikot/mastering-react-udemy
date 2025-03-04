import { ChapterWrapper } from 'components';
import { useHistory } from 'hooks/useHistory';
import { Car } from './common/Car';
import { CircleColor, mapToCircle } from './common/Circle';
import classes from './common/common.module.css';
import { mapToLine } from './common/Line';
import { useMousePosition } from './common/useMousePosition';

export function UseHistoryExample() {
    const [clickPosition, clickHandler] = useMousePosition();
    const history = useHistory(clickPosition);

    return (
        <ChapterWrapper title="useHistory" subtitle="More custom hooks">
            <div className={classes.container} onClick={clickHandler}>
                {mapToLine(history)}
                {mapToCircle(history, CircleColor.GREEN)}
                <Car path={history} />
            </div>
        </ChapterWrapper>
    );
}
