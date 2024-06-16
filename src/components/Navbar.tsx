'use client';

import Image from 'next/image';
import { memo } from 'react';

import { ActiveElement, NavbarProps } from '@/types/type';
import ActiveUsers from './avatar/ActiveUsers';
import Logo from '@/assets/logo.svg';

const Navbar = ({
    activeElement,
    imageInputRef,
    handleImageUpload,
    handleActiveElement,
}: NavbarProps) => {
    const isActive = (value: string | Array<ActiveElement>) =>
        (activeElement && activeElement.value === value) ||
        (Array.isArray(value) &&
            value.some((val) => val?.value === activeElement?.value));

    return (
        <nav className="w-full flex justify-between ml-10">
            <Image src={Logo} alt="FigPro Logo" width={30} height={20} />

            <ActiveUsers />
        </nav>
    );
};

export default memo(
    Navbar,
    (prevProps, nextProps) =>
        prevProps.activeElement === nextProps.activeElement
);
