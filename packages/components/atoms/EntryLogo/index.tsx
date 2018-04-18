import React, { ComponentClass, SFC } from "react";

import { ReactComponent as AirForceSvg } from "./svg/airforce.svg";
import { ReactComponent as ArmySvg } from "./svg/army.svg";
import { ReactComponent as AssamRiflesSvg } from "./svg/assamrifles.svg";
import { ReactComponent as BsfSvg } from "./svg/bsf.svg";
import { ReactComponent as CoastGuardSvg } from "./svg/coastguard.svg";
import { ReactComponent as CrpfSvg } from "./svg/crpf.svg";
import { ReactComponent as ItbpSvg } from "./svg/itbp.svg";
import { ReactComponent as MnsSvg } from "./svg/mns.svg";
import { ReactComponent as NavySvg } from "./svg/navy.svg";
import { ReactComponent as OfficerSvg } from "./svg/officer.svg";
import { ReactComponent as SsbSvg } from "./svg/ssb.svg";

export type Entry =
  | "AirForce"
  | "Army"
  | "AssamRifles"
  | "BSF"
  | "CoastGuard"
  | "CRPF"
  | "ITBP"
  | "MNS"
  | "Navy"
  | "Officer"
  | "SSB";

export const entryDict = new Map<Entry, ComponentClass<any>>([
  ["AirForce", AirForceSvg],
  ["Army", ArmySvg],
  ["AssamRifles", AssamRiflesSvg],
  ["BSF", BsfSvg],
  ["CoastGuard", CoastGuardSvg],
  ["CRPF", CrpfSvg],
  ["ITBP", ItbpSvg],
  ["MNS", MnsSvg],
  ["Navy", NavySvg],
  ["Officer", OfficerSvg],
  ["SSB", SsbSvg],
]);

export interface EntryLogoProps {
  className?: string;

  /**
   * One of:
   * ```
   * "AirForce"
   * "Army"
   * "AssamRifles"
   * "BSF"
   * "CoastGuard"
   * "CRPF"
   * "ITBP"
   * "MNS"
   * "Navy"
   * "Officer"
   * "SSB"
   * ```
   */
  entry: Entry;
}

/**
 * Provides svg images for the different branches of the military (entry).
 */
export const EntryLogo: SFC<EntryLogoProps> = props => {
  const { className, entry } = props;
  const Component = entryDict.get(entry)!;

  return <Component className={className} />;
};
