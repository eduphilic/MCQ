/**
 * Copyright (c) 2018-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import findPkg from "find-pkg";
import fs from "fs";
import globby from "globby";
import path from "path";

const findPkgs = (rootPath: string, globPatterns: string[]) => {
  if (!globPatterns) {
    return [];
  }
  const globOpts = {
    cwd: rootPath,
    strict: true,
    absolute: true,
  };
  return globPatterns
    .reduce(
      (pkgs, pattern) =>
        pkgs.concat(globby.sync(path.join(pattern, "package.json"), globOpts)),
      [] as string[],
    )
    .map(f => path.dirname(path.normalize(f)));
};

export const findMonorepo = (appDir: string) => {
  const monoPkgPath = findPkg.sync(path.resolve(appDir, ".."));
  const monoPkg = monoPkgPath && require(monoPkgPath);
  const workspaces = monoPkg && monoPkg.workspaces;
  const patterns = (workspaces && workspaces.packages) || workspaces;
  const isYarnWs = Boolean(patterns);
  const allPkgs = patterns && findPkgs(path.dirname(monoPkgPath), patterns);
  const isIncluded = (dir: string) => allPkgs && allPkgs.indexOf(dir) !== -1;
  const isAppIncluded = isIncluded(appDir);
  const pkgs = allPkgs
    ? allPkgs.filter(f => fs.realpathSync(f) !== appDir)
    : [];

  return {
    isAppIncluded,
    isYarnWs,
    pkgs,
  };
};
