import CursorSVG from '@/assets/CursorSVG';

interface CursorProps {
    x: number;
    y: number;
    color: string;
    message: string;
}

const Cursor: React.FC<CursorProps> = ({ x, y, color, message }) => {
    return (
        <div
            className="pointer-events-none absolute top-0 left-0"
            style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
        >
            <CursorSVG color={color} key={'color' + color} />
            {message && (
                <div
                    className="absolute px-4 py-2 rounded-3xl left-2 top-5"
                    style={{ backgroundColor: color }}
                >
                    <p className="text-white whitespace-nowrap text-sm leading-relaxed">
                        {message}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Cursor;
