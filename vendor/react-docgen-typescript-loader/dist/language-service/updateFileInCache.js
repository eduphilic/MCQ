"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
/**
 * Either add file to the overall files cache or update it in the cache when the file contents have changed
 * Also add the file to the modified files
 */
function updateFileInCache(filePath, contents, instance) {
    var fileWatcherEventKind;
    // Update file contents
    var file = instance.files.get(filePath);
    if (file === undefined) {
        file = instance.otherFiles.get(filePath);
        if (file !== undefined) {
            instance.otherFiles.delete(filePath);
            instance.files.set(filePath, file);
        }
        else {
            if (instance.watchHost) {
                fileWatcherEventKind = instance.compiler.FileWatcherEventKind.Created;
            }
            file = { version: 0 };
            instance.files.set(filePath, file);
        }
        instance.changedFilesList = true;
    }
    if (instance.watchHost && contents === undefined) {
        fileWatcherEventKind = instance.compiler.FileWatcherEventKind.Deleted;
    }
    if (file.text !== contents) {
        file.version += 1;
        file.text = contents;
        instance.version += 1;
        if (instance.watchHost && fileWatcherEventKind === undefined) {
            fileWatcherEventKind = instance.compiler.FileWatcherEventKind.Changed;
        }
    }
    if (instance.watchHost && fileWatcherEventKind !== undefined) {
        instance.hasUnaccountedModifiedFiles = true;
        instance.watchHost.invokeFileWatcher(filePath, fileWatcherEventKind);
        instance.watchHost.invokeDirectoryWatcher(path_1.default.dirname(filePath), filePath);
    }
    // push this file to modified files hash.
    if (instance.modifiedFiles === null || instance.modifiedFiles === undefined) {
        instance.modifiedFiles = new Map();
    }
    instance.modifiedFiles.set(filePath, file);
    return file.version;
}
exports.updateFileInCache = updateFileInCache;
