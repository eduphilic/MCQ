import { IEntryCategory } from "../models/IEntryCategory";
import { createEntryPlaceholders } from "./createEntryPlaceholders";

const entries = createEntryPlaceholders();

const randomText = `Proident aliqua sunt sint ullamco aute laboris adipisicing mollit ex mollit exercitation. Elit amet consectetur aliquip nostrud velit ex nostrud ea exercitation mollit duis culpa amet laboris. Officia qui aute ipsum eu ipsum fugiat laborum. Ex quis quis quis laborum laborum qui aute elit consectetur commodo ipsum velit eiusmod cillum. Ut nulla aliqua esse voluptate sunt elit ut ad enim proident aute ullamco. Ullamco proident id labore fugiat. Id ut incididunt labore esse tempor labore veniam amet nostrud reprehenderit voluptate pariatur`.split(
  " ",
);
const randomWord = () =>
  randomText[Math.floor(Math.random() * randomText.length)];

const placeholder: IEntryCategory[] = [];

for (let i = 0; i < entries.length; i += 1) {
  const numCategories = Math.floor(Math.random() * 4) + 1;

  for (let j = 0; j < numCategories; j += 1) {
    placeholder.push({
      id: `${i + j}-${randomWord()}`,
      entryID: entries[i].id,
      title: { en: randomWord() },
    });
  }
}

export const createEntryCategoryPlaceholders = (): IEntryCategory[] => ({
  ...placeholder,
});
