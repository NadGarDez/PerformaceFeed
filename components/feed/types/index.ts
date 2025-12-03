interface PostsFeedItem {
    id: string;
    imageUri: string;
    username: string;
    description: string;
    likesCount: number;
    commentsCount: number;
    visualizationsCount: number;
    sharesCount: number;
    postedAt: string;
}

export type { PostsFeedItem };
