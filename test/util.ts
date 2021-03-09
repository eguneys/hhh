interface Test {
  msg: string,
  fn: () => void,
  err? : string
}

function testThrowed(t: Test) {
  console.log(`💀 ${t.msg} ${t.err}`);
}

function testBegin(t: Test) {
  console.log(`${t.msg}`);
}

let stset: Test[] = [];

export function run() {
  let errs = [];

  stset.forEach(_ => {
    try {
      testBegin(_);
      _.fn();
    } catch (e) {
      _.err = e;
    }
  });

  stset
    .filter(_ => !!_.err)
    .forEach(testThrowed);
}

export function it(msg: string, fn: () => void): void {
  let test: Test = {
    msg,
    fn
  }

  stset.push(test);
}
