export {}; 

type Follower = number | string;
type Isim = "React Lessons" | "Diger";

interface Channel {
  name: Isim;
  follower?: Follower;
}

let channel: Channel = {
  name: "React Lessons",
  follower: 234,
};

//type Sum = (x: number, y: number) =>number;
interface Sum {
  (x: number, y: number): number;
}

const sum: Sum = (x, y) => x + y;
const result = sum(2, 6);

//####################//

const channels: Channel[] = [
  { name: "React Lessons", follower: 1590 },
  { name: "Diger", follower: 1590 },
];
