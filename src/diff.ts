export type Diff<A> = {
  added: A,
  removed: A,
  still: A
}

function refEqual<A>(a: A, b: A): boolean {
  return a === b;
}

export function array<A>(ls: Array<A>,
                         ols: Array<A>,
                         isEqual: (_: A, __: A) => boolean = refEqual): Diff<Array<A>> {
  let still = [],
  added = [],
  removed = [];

  for (let l of ls) {
    if (ols.find(_ => isEqual(_, l))) {
      still.push(l);
    } else {
      added.push(l);
    }
  }

  for (let l of ols) {
    if (!still.find(_ => isEqual(l, _)) &&
      !added.find(_ => isEqual(l, _))) {
      removed.push(l);
    }
  }
  return {
    added,
    removed,
    still
  }
}
