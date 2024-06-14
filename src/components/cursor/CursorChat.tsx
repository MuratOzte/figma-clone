import CursorSVG from '@/assets/CursorSVG';
import { CursorMode } from '@/types/type';

interface CursorChatProps {
    cursor: { x: number; y: number };
    cursorState: { mode: CursorMode };
    setCursorState: React.Dispatch<React.SetStateAction<{ mode: CursorMode }>>;
    updateMyPresence: (presence: any) => void;
}

const CursorChat: React.FC<CursorChatProps> = ({
    cursor,
    cursorState,
    setCursorState,
    updateMyPresence,
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateMyPresence({ message: e.target.value });
        setCursorState({ mode: CursorMode.Chat });
    };
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setCursorState({
                mode: CursorMode.Hidden,
                previousMessage: cursorState.message,
                message: '',
            });
        }
        if (e.key === 'Escape') {
            setCursorState({
                mode: CursorMode.Hidden,
                previousMessage: null,
                message: '',
            });
        }
    };

    return (
        <div
            className="absolute top-3 left-0"
            style={{ transform: `translate(${cursor.x}px, ${cursor.y}px)` }}
        >
            {cursorState.mode === CursorMode.Chat && (
                <>
                    <CursorSVG color="#000" />

                    <div className="absolute left-2 top-5 bg-blue-500 px-4 py-2 text-sm leading-relaxed text-white rounded-[20px]">
                        {cursorState.previousMessage && (
                            <div>
                                <div>{cursorState.previousMessage}</div>
                            </div>
                        )}
                        <input
                            type="text"
                            className="z-10 w-60 border-none bg-transparent text-white outline-none"
                            autoFocus
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            placeholder={
                                cursorState.previousMessage
                                    ? ''
                                    : 'Type a message'
                            }
                            value={cursorState.message}
                            maxLength={50}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default CursorChat;
