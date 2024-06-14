'use client';
import { useMyPresence, useOthers } from '@liveblocks/react';
import LiveCursors from './cursor/LiveCursors';
import { useCallback } from 'react';

const Live = () => {
    const others = useOthers();
    const [{ cursor }, updateMyPresence] = useMyPresence() as any;

    const handlePointerMove = useCallback((event: React.PointerEvent) => {
        event.preventDefault();

        const x =
            event.clientX - event.currentTarget.getBoundingClientRect().left;

        const y =
            event.clientY - event.currentTarget.getBoundingClientRect().top;

        updateMyPresence({ cursor: { x, y } });
    }, []);

    const handlePointerLeave = useCallback((event: React.PointerEvent) => {
        event.preventDefault();

        updateMyPresence({ cursor: null, message: null });
    }, []);

    const handlePointerDown = useCallback((event: React.PointerEvent) => {
        const x =
            event.clientX - event.currentTarget.getBoundingClientRect().left;

        const y =
            event.clientY - event.currentTarget.getBoundingClientRect().top;

        updateMyPresence({ cursor: { x, y } });
    }, []);

    return (
        <div
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            onPointerDown={handlePointerDown}
            className="w-full h-full bg-green-500 border-2 border-black"
        >
            <LiveCursors others={others} />
        </div>
    );
};

export default Live;
