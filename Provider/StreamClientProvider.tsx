import { useUser } from '@clerk/nextjs';
import {
    name,
  StreamVideo,
  StreamVideoClient,
,
} from '@stream-io/video-react-sdk';
import { ReactNode, useEffect, useState } from 'react';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;


const StreamVideoProvider = ({children}:{children: ReactNode}) => {
    const [videoClient, setVideoClient] = useState<StreamVideoClient>();
    const {user, isLoaded} = useUser();

    useEffect(() => {
        if(!isLoaded || !user) return;
        if(!apiKey) throw new Error('Api Key is Missing');

        const client = new StreamVideoClient({
            apiKey,
            user :{ 
                id: user?.id,
                name: user?.username || user?.id,
                image: user?.imageUrl,
            },
            tokenProvider: process.env.STREAM_SECRET_KEY,
    })
    }[user, isLoaded]);
  return (
    <StreamVideo client={videoClient}>

    </StreamVideo>
  );
};
export default StreamVideoProvider