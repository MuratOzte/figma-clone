import React from 'react';
import styles from './Avatar.module.css';
import Image from 'next/image';

const IMAGE_SIZE = 48;

export function Avatar({
    name,
    otherStyles,
}: {
    name: string;
    otherStyles?: string;
}) {
    return (
        <div className={styles.avatar + ' ' + otherStyles} data-tooltip={name}>
            <Image
                alt={name}
                src={`https://liveblocks.io/avatars/avatar-${Math.floor(
                    Math.random() * 30
                )}.png`}
                fill
                className={styles.avatar_picture}
            />
        </div>
    );
}
