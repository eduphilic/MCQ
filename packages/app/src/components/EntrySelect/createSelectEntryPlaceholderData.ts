import { Entry } from "components/EntryLogo";
import { EntrySelectProps } from ".";

export const createSelectEntryPlaceholderData = () => {
  const options: Entry[] = [
    "AirForce",
    "Army",
    "AssamRifles",
    "BSF",
    "CoastGuard",
    "CRPF",
    "ITBP",
    "Navy",
    "MNS",
    "Officer",
    "SSB",
  ];

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
