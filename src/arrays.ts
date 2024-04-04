const names: string[] = [];
const namesOtherWay: Array<number> = [];

type ChatBot = {
    name: string;
    isActive: boolean;
};

const allChatBot: ChatBot[] = [];

const matrix: number[][] = [
    [255, 255, 255],
    [1, 1, 1],
];

names.push("spiderman");
namesOtherWay.push("2"); //error: number is not assignable to string

allChatBot.push({ name: "", isActive: true });
