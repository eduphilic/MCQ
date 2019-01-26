/* tslint:disable */
export abstract class IMutation {
    abstract _empty(): boolean | Promise<boolean>;
}

export abstract class IQuery {
    abstract _empty(): boolean | Promise<boolean>;
}
