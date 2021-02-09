// import usersDb from "./usersDb.json"
import fs from 'fs/promises';

export type Color =
  | 'blue'
  | 'red'
  | 'yellow'
  | 'green'
  | 'purple'
  | 'orange'
  | 'brown'
  | 'silver';

type RawUser = {
  pinnedColors: Color[];
  longestStreak: number;
};

type RawUserCollection = {
  [username: string]: RawUser;
};

type UserName = {
  name: string;
};

export type User = RawUser & UserName;

type BasicEditUserPayload = {};
interface PinnedColorsEditUserPayload extends BasicEditUserPayload {
  pinnedColors: Color[];
}
interface LongestStreakEditUserPayload extends BasicEditUserPayload {
  longestStreak: number;
}

type EditUserPayload =
  | PinnedColorsEditUserPayload
  | LongestStreakEditUserPayload
  | (PinnedColorsEditUserPayload & LongestStreakEditUserPayload);

// | { pinnedColors: Color[] }
// | { longestStreak: number }
// | RawUser;

async function loadUsers(): Promise<RawUserCollection> {
  return JSON.parse(
    (await fs.readFile('./usersDb.json')).toString()
  ) as RawUserCollection;
}

async function saveUsers(users: RawUserCollection) {
  const stringifiedUsers = JSON.stringify(users);
  await fs.writeFile('./usersDb.json', stringifiedUsers);
}

async function destroyUsers() {
  await fs.writeFile('./usersDb.json', '{}');
}

export async function getUser(username: string): Promise<User | null> {
  const users = await loadUsers();
  const user = users[username];
  if (user === undefined) return null;
  return {
    name: username,
    ...user,
  };
}

export async function createUser(username: string): Promise<User | Error> {
  const users = await loadUsers();
  if (users[username] === undefined) {
    users[username] = {
      pinnedColors: [],
      longestStreak: 0,
    };
    await saveUsers(users);
    return {
      name: username,
      ...users[username],
    };
  } else {
    throw new Error(`User with name ${username} already exists`);
  }
}

export async function editUser(
  username: string,
  payload: EditUserPayload
): Promise<User | Error> {
  const user = await getUser(username);
  if (!user) throw new Error(`User with name ${username} does not exist`);
  if ('pinnedColors' in payload) user.pinnedColors = payload.pinnedColors;
  if ('longestStreak' in payload) user.longestStreak = payload.longestStreak;

  throw new Error('TODO: Finish this function');
}

async function testbed() {
  try {
    await destroyUsers();
    console.log(await createUser('finn'));
    // console.log(await createUser('collin'));
    console.log(await getUser('finn'));
    // console.log(await getUser('collin'));
    await destroyUsers();
  } catch (err) {
    console.error('Something went wrong');
    console.error(err);
  }
}
testbed();

// export async function deleteUser(userName: string) {}
