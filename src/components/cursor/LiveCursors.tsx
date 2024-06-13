import { LiveCursorProps } from '@/types/type';
import Cursor from './cursor';
import { COLORS } from '@/constants';

const LiveCursors: React.FC<LiveCursorProps> = ({ others }) => {
    return (
        <>
            {others.map(({ connectionId, presence }) => {
                if (!presence) return null;
                <Cursor
                    key={connectionId}
                    color={COLORS[Number(connectionId) % COLORS.length]}
                    x={presence.cursor.x}
                    y={presence.cursor.y}
                    message={presence.message}
                />;
            })}
        </>
    );
};

export default LiveCursors;
