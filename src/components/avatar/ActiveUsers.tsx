import React, { useMemo } from 'react';
import { Avatar } from './Avatar';
import { RoomProvider, useOthers, useSelf } from '@liveblocks/react';
import { useRouter } from 'next/router';
import styles from './index.module.css';
import { generateRandomName } from '@/lib/utils';

const ActiveUsers = () => {
    const users = useOthers();
    const currentUser = useSelf();
    const hasMoreUsers = users.length > 3;

    console.log(currentUser);

    return (
        <main className="flex justify-between ml-32 mr-20">
            <div className="flex pl-3">
                {currentUser && (
                    <div className="relative ml-8 first:ml-0">
                        <Avatar
                            name="You"
                            otherStyles="border-[3px] border-primary-green"
                        />
                    </div>
                )}
                {users.slice(0, 3).map(({ connectionId, info }) => {
                    return (
                        <Avatar
                            key={connectionId}
                            name={generateRandomName()}
                            otherStyles="ml-3"
                        />
                    );
                })}

                {hasMoreUsers && (
                    <div className={styles.more}>+{users.length - 3}</div>
                )}
            </div>
        </main>
    );
};

export default ActiveUsers;
