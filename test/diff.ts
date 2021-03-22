import { qed, it } from 'tiqed';
import * as diff from '../src/diff';

export default function attributes() {


  it('diffs arrays', () => {
    qed('1,2,3 1', diff.array([1,2,3], [1, 5]),
        {
      added: [2,3],
      removed: [5],
      still: [1]
    });
  });
  
}
