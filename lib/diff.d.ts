export declare type Diff<A> = {
    added: A;
    removed: A;
    still: A;
};
export declare function array<A>(ls: Array<A>, ols: Array<A>): Diff<Array<A>>;
