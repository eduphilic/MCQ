import { entryImages } from "common/structures/entryImages";
import { EntrySelectProps } from ".";

export const createSelectEntryPlaceholderData = () => {
  const options = Object.keys(entryImages) as (keyof typeof entryImages)[];

  const entries: EntrySelectProps["entries"] = options.map(o => ({
    icon: o,
    label: o,
  }));

  const props: EntrySelectProps = {
    entries,
    maxSelectedCount: 3,
    minSelectedCount: 1,
    onSelectionChange: () => {
      //
    },
  };

  return props;
};
