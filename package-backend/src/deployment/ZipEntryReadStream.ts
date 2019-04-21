import { Readable } from "stream";
import { IZipEntry } from "adm-zip";

export class ZipEntryReadStream extends Readable {
  private buffer: Buffer;
  private offset = 0;

  constructor(zipEntry: IZipEntry) {
    super();

    this.buffer = zipEntry.getData();
  }

  _read(size: number) {
    const chunk = this.buffer.slice(this.offset, this.offset + size);
    const drained = this.push(chunk);
    this.offset += size;
    if (this.offset >= this.buffer.length) {
      this.push(null);
      return;
    }
    if (drained) this._read(size);
  }
}
