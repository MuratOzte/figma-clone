'use client'
import { useOthers } from '@liveblocks/react';
import LiveCursors from './cursor/LiveCursors';

const Live = () => {
    const others = useOthers();
    return (
        <div>
            <LiveCursors others={others} />
        </div>
    );
};

export default Live;
