const messages = [
    {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date("December 17, 1995 03:24:00"),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 2,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        createdAt: new Date("December 17, 1995 07:24:00"),
        user: {
            _id: 1,
            name: 'Mike',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 3,
        text: 'Hello developer',
        createdAt: new Date("December 17, 2000 03:24:00"),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 4,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        createdAt: new Date("December 17, 2005 12:34:40"),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 5,
        text: 'Lorem ipsum dolor sit amet,',
        createdAt: new Date("December 17, 2005 12:34:45"),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 6,
        text: 'consectetur adipiscing elit. ',
        createdAt: new Date("December 17, 2005 12:34:49"),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 7,
        text: 'Hello developer',
        createdAt: new Date("December 17, 2005 12:35:40"),
        user: {
            _id: 1,
            name: 'Mike',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 8,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        createdAt: new Date("December 18, 2005 12:34:07"),
        user: {
            _id: 1,
            name: 'Mike',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 9,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        createdAt: new Date("December 18, 2005 12:34:40"),
        user: {
            _id: 1,
            name: 'Mike',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 10,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        createdAt: new Date("October 15, 2019 19:34:40"),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 11,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'Mike',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
];

export const getMessages = () => messages;

