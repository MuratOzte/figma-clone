'use client';
import Live from '@/components/Live';
import Navbar from '@/components/Navbar';
import LeftSideBar from '@/components/sidebar/LeftSideBar';
import RightSideBar from '@/components/sidebar/RightSideBar';
import {
    handleCanvasMouseDown,
    handleResize,
    initializeFabric,
} from '@/lib/canvas';
import { fabric } from 'fabric';
import { useEffect, useRef } from 'react';

export default function Page() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const fabricRef = useRef<fabric.Canvas | null>(null);
    const isDrawing = useRef<boolean>(false);
    const shapeRef = useRef<fabric.Object | null>(null);
    const selectedShapeRef = useRef<string | null>('rectangle');

    useEffect(() => {
        const canvas = initializeFabric({ canvasRef, fabricRef });

        canvas.on('mouse:down', (options) => {
            handleCanvasMouseDown({
                options,
                isDrawing,
                canvas,
                shapeRef,
                selectedShapeRef,
            });
        });

        window.addEventListener('resize', () => {
            handleResize({ fabricRef });
        });
    }, []);

    return (
        <main className="h-screen overflow-hidden">
            <Navbar />
            <section className="flex h-full flex-row">
                <LeftSideBar />
                <Live canvasRef={canvasRef} />
                <RightSideBar />
            </section>
        </main>
    );
}
