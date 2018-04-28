import LocalizedStrings, { LocalizedStringsMethods } from "react-localization";
import { strings as stringsSettings } from "./strings";

type StringEntries = typeof stringsSettings["en"];

interface Strings extends StringEntries, LocalizedStringsMethods {}

const strings: Strings = new LocalizedStrings<StringEntries>(
  stringsSettings as any,
);

export default strings;
