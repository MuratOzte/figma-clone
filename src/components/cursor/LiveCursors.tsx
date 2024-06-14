import { LiveCursorProps } from '@/types/type';
import Cursor from './Cursor';
import { COLORS } from '@/constants';

const LiveCursors: React.FC<LiveCursorProps> = ({ others }) => {
    return (
        <>
            {others.map(({ connectionId, presence }) => {
                if (presence == null || !presence?.cursor) {
                    return null;
                }
                return (
                    <Cursor
                        key={connectionId}
                        color={COLORS[Number(connectionId) % COLORS.length]}
                        x={presence.cursor.x}
                        y={presence.cursor.y}
                        message={presence.message}
                    />
                );
                // MESSAGE
            })}
        </>
    );
};

export default LiveCursors;