import React, { SFC } from "react";
import styled from "styled";

import airforceSvg from "./svg/airforce.svg";
import armySvg from "./svg/army.svg";
import assamriflesSvg from "./svg/assamrifles.svg";
import bsfSvg from "./svg/bsf.svg";
import coastguardSvg from "./svg/coastguard.svg";
import crpfSvg from "./svg/crpf.svg";
import itbpSvg from "./svg/itbp.svg";
import mnsSvg from "./svg/mns.svg";
import navySvg from "./svg/navy.svg";
import officerSvg from "./svg/officer.svg";
import ssbSvg from "./svg/ssb.svg";

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

export const entryDict = new Map<Entry, string>([
  ["AirForce", airforceSvg],
  ["Army", armySvg],
  ["AssamRifles", assamriflesSvg],
  ["BSF", bsfSvg],
  ["CoastGuard", coastguardSvg],
  ["CRPF", crpfSvg],
  ["ITBP", itbpSvg],
  ["MNS", mnsSvg],
  ["Navy", navySvg],
  ["Officer", officerSvg],
  ["SSB", ssbSvg],
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
  const image = entryDict.get(entry)!;

  // return <Component className={className} />;
  return <StyledImg className={className} src={image} />;
};

const StyledImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;
