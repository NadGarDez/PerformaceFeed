import { BasicUserInfo, Post } from "@/types";


const userStaticData: BasicUserInfo[] = [
    {
        id: 'user_1',
        imageUri: 'https://cdn.pixabay.com/photo/2017/02/08/16/45/man-2049447_1280.jpg',
        seen: false,
        username: '@michaelj',
        name: 'Michael Johnson'
    },
    {
        id: 'user_2',
        imageUri: 'https://cdn.pixabay.com/photo/2021/03/08/02/38/man-6077947_1280.jpg',
        seen: true,
        username: '@johnd',
        name: 'John Davis'
    },
    {
        id: 'user_3',
        imageUri: 'https://cdn.pixabay.com/photo/2019/08/01/05/59/girl-4376755_1280.jpg',
        seen: false,
        username: '@emmas',
        name: 'Emma Smith'
    },
    {
        id: 'user_4',
        imageUri: 'https://cdn.pixabay.com/photo/2023/07/30/09/12/red-hair-girl-8158373_1280.jpg',
        seen: true,
        username: '@alicew',
        name: 'Alice Williams'
    },
    {
        id: 'user_5',
        imageUri: 'https://cdn.pixabay.com/photo/2018/04/19/08/21/girl-3332555_1280.jpg',
        seen: false,
        username: '@sophiab',
        name: 'Sophia Brown'
    },
    {
        id: 'user_6',
        imageUri: 'https://cdn.pixabay.com/photo/2017/02/08/16/45/man-2049447_1280.jpg',
        seen: true,
        username: '@liamm',
        name: 'Liam Miller'
    },
    {
        id: 'user_7',
        imageUri: 'https://cdn.pixabay.com/photo/2021/03/08/02/38/man-6077947_1280.jpg',
        seen: false,
        username: '@noahw',
        name: 'Noah Wilson'
    },
    {
        id: 'user_8',
        imageUri: 'https://cdn.pixabay.com/photo/2019/08/01/05/59/girl-4376755_1280.jpg',
        seen: true,
        username: '@oliviab',
        name: 'Olivia Brown'
    },
    {
        id: 'user_9',
        imageUri: 'https://cdn.pixabay.com/photo/2023/07/30/09/12/red-hair-girl-8158373_1280.jpg',
        seen: false,
        username: '@avat',
        name: 'Ava Taylor'
    },
    {
        id: 'user_10',
        imageUri: 'https://cdn.pixabay.com/photo/2018/04/19/08/21/girl-3332555_1280.jpg',
        seen: true,
        username: '@miaa',
        name: 'Mia Anderson'
    },
    {
        id: 'user_11',
        imageUri: 'https://cdn.pixabay.com/photo/2017/02/08/16/45/man-2049447_1280.jpg',
        seen: false,
        username: '@lucast',
        name: 'Lucas Thomas'
    },
    {
        id: 'user_12',
        imageUri: 'https://cdn.pixabay.com/photo/2021/03/08/02/38/man-6077947_1280.jpg',
        seen: true,
        username: '@ethanj',
        name: 'Ethan Jones'
    },
    {
        id: 'user_13',
        imageUri: 'https://cdn.pixabay.com/photo/2019/08/01/05/59/girl-4376755_1280.jpg',
        seen: false,
        username: '@isabellam',
        name: 'Isabella Martinez'
    },
    {
        id: 'user_14',
        imageUri: 'https://cdn.pixabay.com/photo/2015/01/28/23/24/woman-615421_1280.jpg',
        seen: true,
        username: '@charlotteh',
        name: 'Charlotte Harris'
    },
    {
        id: 'user_15',
        imageUri: 'https://cdn.pixabay.com/photo/2016/03/26/22/41/woman-1281650_1280.jpg',
        seen: false,
        username: '@ameliae',
        name: 'Amelia Evans'
    },
    {
        id: 'user_16',
        imageUri: 'https://cdn.pixabay.com/photo/2020/08/29/08/31/woman-5526483_1280.jpg',
        seen: true,
        username: '@harperc',
        name: 'Harper Clark'
    },
];


const initialPost: Post[] = [
    {
        id: "post_1",
        user: {
            id: 'user_15',
            imageUri: 'https://cdn.pixabay.com/photo/2016/03/26/22/41/woman-1281650_1280.jpg',
            seen: false,
            username: '@ameliae',
            name: 'Amelia Evans'
        },
        data: {
            sources: [
                { id: 'source_1_0', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
                { id: 'source_1_1', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
                { id: 'source_1_2', type: 'video', url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4' }
            ],
            description: "Mira esta increíble colección de clips sobre \"Tears of Steel\" y otros temas emocionantes. ¡Desliza para ver más! 🎬 Este es el post número 1 de nuestra serie.",
            likes: 6479,
            comments: 135,
            shares: 61,
            createdAt: "2025-12-04T10:15:00Z",
        }
    },
    {
        id: "post_2",
        user: {
            id: 'user_1',
            imageUri: 'https://cdn.pixabay.com/photo/2017/02/08/16/45/man-2049447_1280.jpg',
            seen: false,
            username: '@michaelj',
            name: 'Michael Johnson'
        },
        data: {
            sources: [
                { id: 'source_2_0', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
                { id: 'source_2_1', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4' }
            ],
            description: "Mira esta increíble colección de clips sobre \"Big Buck Bunny\" y otros temas emocionantes. ¡Desliza para ver más! 🎬 Este es el post número 2 de nuestra serie.",
            likes: 1234,
            comments: 48,
            shares: 12,
            createdAt: "2025-12-04T09:55:00Z",
        }
    },
    {
        id: "post_3",
        user: {
            id: 'user_14',
            imageUri: 'https://cdn.pixabay.com/photo/2015/01/28/23/24/woman-615421_1280.jpg',
            seen: true,
            username: '@charlotteh',
            name: 'Charlotte Harris'
        },
        data: {
            sources: [
                { id: 'source_3_0', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4' },
                { id: 'source_3_1', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4' },
                { id: 'source_3_2', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4' }
            ],
            description: "Mira esta increíble colección de clips sobre \"For Bigger Meltdowns\" y otros temas emocionantes. ¡Desliza para ver más! 🎬 Este es el post número 3 de nuestra serie.",
            likes: 10255,
            comments: 298,
            shares: 45,
            createdAt: "2025-12-04T09:40:00Z",
        }
    },
    {
        id: "post_4",
        user: {
            id: 'user_5',
            imageUri: 'https://cdn.pixabay.com/photo/2018/04/19/08/21/girl-3332555_1280.jpg',
            seen: false,
            username: '@sophiab',
            name: 'Sophia Brown'
        },
        data: {
            sources: [
                { id: 'source_4_0', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4' },
                { id: 'source_4_1', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4' }
            ],
            description: "Mira esta increíble colección de clips sobre \"For Bigger Blazes\" y otros temas emocionantes. ¡Desliza para ver más! 🎬 Este es el post número 4 de nuestra serie.",
            likes: 4501,
            comments: 17,
            shares: 99,
            createdAt: "2025-12-04T09:25:00Z",
        }
    },
    {
        id: "post_5",
        user: {
            id: 'user_7',
            imageUri: 'https://cdn.pixabay.com/photo/2021/03/08/02/38/man-6077947_1280.jpg',
            seen: false,
            username: '@noahw',
            name: 'Noah Wilson'
        },
        data: {
            sources: [
                { id: 'source_5_0', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
                { id: 'source_5_1', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' }
            ],
            description: "Mira esta increíble colección de clips sobre \"Subaru Outback On Street And Dirt\" y otros temas emocionantes. ¡Desliza para ver más! 🎬 Este es el post número 5 de nuestra serie.",
            likes: 7890,
            comments: 412,
            shares: 28,
            createdAt: "2025-12-04T09:10:00Z",
        }
    },
    {
        id: "post_6",
        user: {
            id: 'user_13',
            imageUri: 'https://cdn.pixabay.com/photo/2019/08/01/05/59/girl-4376755_1280.jpg',
            seen: false,
            username: '@isabellam',
            name: 'Isabella Martinez'
        },
        data: {
            sources: [
                { id: 'source_6_0', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
                { id: 'source_6_1', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4' }
            ],
            description: "Mira esta increíble colección de clips sobre \"We Are Going On Bullrun\" y otros temas emocionantes. ¡Desliza para ver más! 🎬 Este es el post número 6 de nuestra serie.",
            likes: 3105,
            comments: 98,
            shares: 7,
            createdAt: "2025-12-04T08:55:00Z",
        }
    },
    {
        id: "post_7",
        user: {
            id: 'user_4',
            imageUri: 'https://cdn.pixabay.com/photo/2023/07/30/09/12/red-hair-girl-8158373_1280.jpg',
            seen: true,
            username: '@alicew',
            name: 'Alice Williams'
        },
        data: {
            sources: [
                { id: 'source_7_0', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
                { id: 'source_7_1', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4' }
            ],
            description: "Mira esta increíble colección de clips sobre \"What care can you get for a grand?\" y otros temas emocionantes. ¡Desliza para ver más! 🎬 Este es el post número 7 de nuestra serie.",
            likes: 14890,
            comments: 312,
            shares: 88,
            createdAt: "2025-12-04T08:40:00Z",
        }
    },
    {
        id: "post_8",
        user: {
            id: 'user_10',
            imageUri: 'https://cdn.pixabay.com/photo/2018/04/19/08/21/girl-3332555_1280.jpg',
            seen: true,
            username: '@miaa',
            name: 'Mia Anderson'
        },
        data: {
            sources: [
                { id: 'source_8_0', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
                { id: 'source_8_1', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' }
            ],
            description: "Mira esta increíble colección de clips sobre \"Elephant Dream\" y otros temas emocionantes. ¡Desliza para ver más! 🎬 Este es el post número 8 de nuestra serie.",
            likes: 987,
            comments: 10,
            shares: 5,
            createdAt: "2025-12-04T08:25:00Z",
        }
    },
    {
        id: "post_9",
        user: {
            id: 'user_2',
            imageUri: 'https://cdn.pixabay.com/photo/2021/03/08/02/38/man-6077947_1280.jpg',
            seen: true,
            username: '@johnd',
            name: 'John Davis'
        },
        data: {
            sources: [
                { id: 'source_9_0', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
                { id: 'source_9_1', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4' },
                { id: 'source_9_2', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4' }
            ],
            description: "Mira esta increíble colección de clips sobre \"Volkswagen GTI Review\" y otros temas emocionantes. ¡Desliza para ver más! 🎬 Este es el post número 9 de nuestra serie.",
            likes: 8122,
            comments: 450,
            shares: 72,
            createdAt: "2025-12-04T08:10:00Z",
        }
    },
    {
        id: "post_10",
        user: {
            id: 'user_8',
            imageUri: 'https://cdn.pixabay.com/photo/2019/08/01/05/59/girl-4376755_1280.jpg',
            seen: true,
            username: '@oliviab',
            name: 'Olivia Brown'
        },
        data: {
            sources: [
                { id: 'source_10_0', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4' },
                { id: 'source_10_1', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4' }
            ],
            description: "Mira esta increíble colección de clips sobre \"For Bigger Fun\" y otros temas emocionantes. ¡Desliza para ver más! 🎬 Este es el post número 10 de nuestra serie.",
            likes: 670,
            comments: 12,
            shares: 8,
            createdAt: "2025-12-04T07:55:00Z",
        }
    },
];
function generateAdditionalPosts(basePosts: Post[], targetCount: number): Post[] { // funcion de utilidad generada por ia
    const allPosts = [...basePosts];
    const baseLength = basePosts.length;

    for (let i = baseLength; i < targetCount; i++) {
        const basePostIndex = i % baseLength; 
        const basePost = basePosts[basePostIndex];
        const newPostNumber = i + 1;

        const newPost = JSON.parse(JSON.stringify(basePost)) as Post;

        newPost.id = `post_${newPostNumber}`;

        newPost.data.sources = newPost.data.sources.map((source, idx) => ({
            ...source,
            id: `source_${newPostNumber}_${idx}`,
        }));
        
        newPost.data.description = newPost.data.description.replace(
            `post número ${basePostIndex + 1}`, 
            `post número ${newPostNumber}`
        );

        const baseDate = new Date(basePost.data.createdAt);
        baseDate.setHours(baseDate.getHours() + (newPostNumber - baseLength));
        newPost.data.createdAt = baseDate.toISOString();

        allPosts.push(newPost);
    }

    return allPosts;
}

const staticPosts: Post[] = generateAdditionalPosts(initialPost, 200);
export { staticPosts, userStaticData };

