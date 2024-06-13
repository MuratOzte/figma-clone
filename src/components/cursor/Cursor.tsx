interface CursorProps {
    x: number;
    y: number;
    color: string;
    message: string;
}

const Cursor: React.FC<CursorProps> = ({ x, y, color, message }) => {
    return <div>Cursor</div>;
};

export default Cursor;
