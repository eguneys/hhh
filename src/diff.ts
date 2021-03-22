export type Diff<A> = {
  added: A,
  removed: A,
  still: A
}

export function array<A>(ls: Array<A>, ols: Array<A>): Diff<Array<A>> {
  let still = [],
  added = [],
  removed = [];

  for (let l of ls) {
    if (ols.find(_ => _ === l)) {
      still.push(l);
    } else {
      added.push(l);
    }
  }

  for (let l of ols) {
    if (!still.includes(l) &&
      !added.includes(l)) {
      removed.push(l);
    }
  }
  return {
    added,
    removed,
    still
  }
}
