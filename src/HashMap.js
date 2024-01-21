import LinkedList from "@myinan/linked-list/linkedList";

export default class HashMap {
  constructor() {
    this.table = [];
    this.tableLength = 64;
  }

  static #hash(string) {
    let hashCode = 0;

    const primeNumber = 51;
    for (let i = 0; i < string.length; i += 1) {
      hashCode = primeNumber * hashCode + string.charCodeAt(i);
    }

    return hashCode;
  }

  set(key, value) {
    const obj = {
      key,
      value,
    };

    const index = HashMap.#hash(key) % this.tableLength;
    if (this.table[index]) {
      if (!HashMap.#replaceKey(this.table[index], obj)) {
        this.table[index].append(obj);
      }
    } else if (!this.table[index]) {
      this.table[index] = new LinkedList();
      this.table[index].append(obj);
    }
  }

  static #replaceKey(list, obj) {
    let cur = list.head;
    while (cur) {
      if (cur.value.key === obj.key) {
        cur.value.value = obj.value;
        return true;
      }
      cur = cur.next;
    }
    return false;
  }

  get(key) {
    const index = HashMap.#hash(key) % this.tableLength;
    let cur = this.table[index].head;

    while (cur) {
      if (cur.value.key) {
        return cur.value.value;
      }
      cur = cur.next;
    }
    return null;
  }

  has(key) {
    const index = HashMap.#hash(key) % this.tableLength;
    let cur = this.table[index]?.head;
    while (cur) {
      if (cur.value.key === key) {
        return true;
      }
      cur = cur.next;
    }
    return false;
  }

  remove(key) {
    const index = HashMap.#hash(key) % this.tableLength;
    const bucket = this.table[index];
    let cur = bucket.head;

    while (cur) {
      if (cur.value.key === key) {
        const curIndex = bucket.indexOf(cur.value);
        console.log(curIndex);
        console.log(bucket.removeAt(curIndex));
        console.log(bucket);
        return true;
      }
      cur = cur.next;
    }

    return false;
  }
}
