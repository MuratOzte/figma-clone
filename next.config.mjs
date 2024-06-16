/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'liveblocks.io',
            },
            {
                protocol: 'https',
                hostname: 'img.freepik.com',
            },
            // Ek başka host adları ekleyebilirsiniz
            // {
            //     protocol: 'https',
            //     hostname: 'anotherhost.com',
            // },
        ],
    },
};

export default nextConfig;
