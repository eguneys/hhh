export function qed(msg: string, a: any, b: any) {
  if (a !== b) {
    cry(`${msg} got ${a}`);
  }
}

export function deep(o: object, o2: object) {
  for (let key in o) {
    if (o[key] !== o2[key]) {
      return false;
    }
  }
  for (let key in o2) {
    if (o2[key] !== o[key]) {
      return false;
    }
  }
  return true;
}

export function cry(msg: string, a?: string) {
  console.log(`❌ ${msg} ` + (a ? a : ''));
}

export function na(msg: string, a: any, b?: any) {
  if (!b) {
    if (!a) {
      cry(msg);
    }
  } else if (typeof a === 'object' && typeof b === 'object') {
    if (!deep(a, b)) {
      cry(msg, a);
    }
  } else if (a !== b) {
    cry(msg, a);
  }
}

export function jss(a: any): void {
  console.log(JSON.stringify(a));
}

export function log(msg: string): void {
  console.log(msg);
}
