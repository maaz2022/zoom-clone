import { currentUser } from "@clerk/nextjs/server"
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY
const apiSecret = process.env.STREAM_API_KEY

export const tokenProvider = async () => {
    const user = await currentUser();

    if(!user) throw new Error('User not Logged in')
    if(!apiKey) throw new Error('Api key not provided')
    if(!apiSecret) throw new Error('Api secret not provided')
    const client = new StreamClient(apiKey, apiSecret)
    
    const exp = Math.
}