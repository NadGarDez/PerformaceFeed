

interface BasicUserInfo {
    id: string,
    imageUri: string;
    seen: boolean;
    username: string;
    name: string;
}


export interface source {
    type: 'image' | 'video',
    url: string,
    id: string,
}


interface Post {
    id: string,
    user: BasicUserInfo,
    data: {
        sources: source[]
        description: string,
        likes: number,
        comments: number,
        shares: number
        createdAt: string,

    }
}


export type videoStatus = 'active' | 'prepared' | 'unmounted'

export type { BasicUserInfo, Post };
