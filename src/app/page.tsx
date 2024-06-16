import Live from '@/components/Live';
import Navbar from '@/components/Navbar';

export default function Page() {
    return (
        <main className="w-full h-screen overflow-hidden">
            <Navbar  />
            <Live />
        </main>
    );
}
