

interface BasicUserInfo {
    id: string,
    imageUri: string;
    seen: boolean;
    username: string;
    name: string;
}


interface source {
    type: 'image' | 'video',
    url: string
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

export type { BasicUserInfo, Post };
