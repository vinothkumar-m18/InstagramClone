import mongoose from "mongoose";
import connectDb from "./config/database.js";
import dotenv from 'dotenv';
import  Post  from './models/Post.js';
import { Story } from './models/Story.js';
import { Profile } from './models/Profile.js';
import { Following } from './models/Following.js';
import { Suggestion } from './models/Suggestion.js';

dotenv.config();
const seedDB = async () => {
    try {
        await connectDb();
        console.log('mongodb connected');

        await Post.deleteMany();
        await Story.deleteMany();
        await Profile.deleteMany();
        await Suggestion.deleteMany();
        await Following.deleteMany();

        await Post.insertMany([
            {
                user:'6906218e2fa133d9fab417f8',
                "media": "https://picsum.photos/id/1015/600/400",
                "caption": "Morning jog to clear the mind 🏃‍♂️🌅",
                "likes": 12,
                "comments": [
                    {
                        userId:'6906218e2fa133d9fab417f8',
                        text:'beautiful day ahead'
                    }
                ],
            },
            // {
            //     "userId": "sarah_lee",
            //     "userName": "Sarah Lee",
            //     "profilePic": "https://randomuser.me/api/portraits/women/2.jpg",
            //     "media": "https://picsum.photos/id/1027/600/400",
            //     "caption": "Loving this new book I'm reading 📚✨",
            //     "likes": 92,
            //     "comments": [
            //         {
            //             "id": 1,
            //             "userName": "emma",
            //             "text": "Which book is this?"
            //         }
            //     ],
            //     "timestamp": "2025-09-11T08:30:00Z"
            // },
            // {
            //     "userId": "travel_guy",
            //     "userName": "Travel Guy",
            //     "profilePic": "https://randomuser.me/api/portraits/men/3.jpg",
            //     "media": "https://picsum.photos/id/1003/600/400",
            //     "caption": "Exploring the streets of Rome 🇮🇹🍕",
            //     "likes": 230,
            //     "comments": [
            //         {
            //             "id": 1,
            //             "userName": "lisa",
            //             "text": "Rome is beautiful!"
            //         },
            //         {
            //             "id": 2,
            //             "userName": "alex",
            //             "text": "Take me with you next time!"
            //         }
            //     ],
            //     "timestamp": "2025-09-12T14:20:00Z"
            // },
            // {
            //     "userId": "emma_watson",
            //     "userName": "Emma Watson",
            //     "profilePic": "https://randomuser.me/api/portraits/women/5.jpg",
            //     "media": "https://picsum.photos/id/1025/600/400",
            //     "caption": "Sunday brunch vibes ☕🥐",
            //     "likes": 310,
            //     "comments": [
            //         {
            //             "id": 1,
            //             "userName": "john",
            //             "text": "Looks delicious!"
            //         }
            //     ],
            //     "timestamp": "2025-09-13T10:15:00Z"
            // },
            // {
            //     "userId": "mike_tyson",
            //     "userName": "Mike Tyson",
            //     "profilePic": "https://randomuser.me/api/portraits/men/6.jpg",
            //     "media": "https://picsum.photos/id/1021/600/400",
            //     "caption": "Workout grind never stops 💪🥊",
            //     "likes": 500,
            //     "comments": [
            //         {
            //             "id": 1,
            //             "userName": "alex",
            //             "text": "Beast mode 🔥"
            //         }
            //     ],
            //     "timestamp": "2025-09-14T16:45:00Z"
            // },
            // {
            //     "userId": "lisa_rose",
            //     "userName": "Lisa Rose",
            //     "profilePic": "https://randomuser.me/api/portraits/women/7.jpg",
            //     "media": "https://picsum.photos/id/1035/600/400",
            //     "caption": "Evening walk with the pup 🐶🌇",
            //     "likes": 178,
            //     "comments": [
            //         {
            //             "id": 1,
            //             "userName": "emma",
            //             "text": "So cute!!"
            //         }
            //     ],
            //     "timestamp": "2025-09-15T18:00:00Z"
            // },
            // {
            //     "userId": "alex_coder",
            //     "userName": "Alex Coder",
            //     "profilePic": "https://randomuser.me/api/portraits/men/8.jpg",
            //     "media": "https://picsum.photos/id/1045/600/400",
            //     "caption": "Late night coding session 💻☕",
            //     "likes": 145,
            //     "comments": [
            //         {
            //             "id": 1,
            //             "userName": "john",
            //             "text": "Keep grinding bro!"
            //         }
            //     ],
            //     "timestamp": "2025-09-15T23:30:00Z"
            // },
            // {
            //     "userId": "nina_patel",
            //     "userName": "Nina Patel",
            //     "profilePic": "https://randomuser.me/api/portraits/women/9.jpg",
            //     "media": "https://picsum.photos/id/1055/600/400",
            //     "caption": "Beach day 🌊🏖️",
            //     "likes": 400,
            //     "comments": [
            //         {
            //             "id": 1,
            //             "userName": "sarah",
            //             "text": "I miss the ocean!"
            //         }
            //     ],
            //     "timestamp": "2025-09-16T09:45:00Z"
            // },
            // {
            //     "userId": "david_kim",
            //     "userName": "David Kim",
            //     "profilePic": "https://randomuser.me/api/portraits/men/11.jpg",
            //     "media": "https://picsum.photos/id/1065/600/400",
            //     "caption": "Concert night 🎶🎤",
            //     "likes": 275,
            //     "comments": [
            //         {
            //             "id": 1,
            //             "userName": "emma",
            //             "text": "Who’s performing?"
            //         }
            //     ],
            //     "timestamp": "2025-09-16T20:10:00Z"
            // },
            // {
            //     "userId": "sophia_jones",
            //     "userName": "Sophia Jones",
            //     "profilePic": "https://randomuser.me/api/portraits/women/12.jpg",
            //     "media": "https://picsum.photos/id/1075/600/400",
            //     "caption": "Coffee + coding = perfect morning ☕💻",
            //     "likes": 320,
            //     "comments": [
            //         {
            //             "id": 1,
            //             "userName": "alex",
            //             "text": "Relatable 😅"
            //         }
            //     ],
            //     "timestamp": "2025-09-17T07:25:00Z"
            // }
        ]);
        await Profile.create({
            "id": 101,
            "userId": "vinoth_kumar",
            "userName": "Vinoth Kumar",
            "profilePic": "https://randomuser.me/api/portraits/men/10.jpg"
        });
        await Suggestion.insertMany([
            {
                "id": 201,
                "userId": "emma_watson",
                "profilePic": "https://randomuser.me/api/portraits/women/5.jpg"
            },
            {
                "id": 202,
                "userId": "mike_tyson",
                "profilePic": "https://randomuser.me/api/portraits/men/6.jpg"
            },
            {
                "id": 203,
                "userId": "lisa_rose",
                "profilePic": "https://randomuser.me/api/portraits/women/7.jpg"
            },
            {
                "id": 204,
                "userId": "alex_coder",
                "profilePic": "https://randomuser.me/api/portraits/men/8.jpg"
            }
        ]);
        await Story.insertMany([
            {
                "id": 1,
                "userId": "john_doe",
                "profilePic": "https://randomuser.me/api/portraits/men/1.jpg",
                "storyImage": "https://picsum.photos/id/1015/400/600"
            },
            {
                "id": 2,
                "userId": "sarah_lee",
                "profilePic": "https://randomuser.me/api/portraits/women/2.jpg",
                "storyImage": "https://picsum.photos/id/1027/400/600"
            },
            {
                "id": 3,
                "userId": "travel_guy",
                "profilePic": "https://randomuser.me/api/portraits/men/3.jpg",
                "storyImage": "https://picsum.photos/id/1003/400/600"
            },
            {
                "id": 4,
                "userId": "emma_watson",
                "profilePic": "https://randomuser.me/api/portraits/women/5.jpg",
                "storyImage": "https://picsum.photos/id/1025/400/600"
            },
            {
                "id": 5,
                "userId": "mike_tyson",
                "profilePic": "https://randomuser.me/api/portraits/men/6.jpg",
                "storyImage": "https://picsum.photos/id/1021/400/600"
            }
        ]);
        await Following.insertMany([]);
        console.log('data seeded');
        process.exit(0);
    } catch (error) {
        console.log('error seeding data ', error);
        process.exit(1);
    }
}
seedDB();