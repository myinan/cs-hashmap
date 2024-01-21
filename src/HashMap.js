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
        bucket.removeAt(curIndex);
        return true;
      }
      cur = cur.next;
    }

    return false;
  }

  get length() {
    let length = 0;
    this.table.forEach((bucket) => {
      if (bucket) {
        let cur = bucket.head;
        while (cur) {
          length += 1;
          cur = cur.next;
        }
      }
    });
    return length;
  }

  clear() {
    this.table = [];
  }

  get keys() {
    const keys = [];
    this.table.forEach((bucket) => {
      if (bucket) {
        let cur = bucket.head;
        while (cur) {
          keys.push(cur.value.key);
          cur = cur.next;
        }
      }
    });
    return keys;
  }

  get values() {
    const values = [];
    this.table.forEach((bucket) => {
      if (bucket) {
        let cur = bucket.head;
        while (cur) {
          values.push(cur.value.value);
          cur = cur.next;
        }
      }
    });
    return values;
  }

  get entries() {
    const entries = [];
    this.table.forEach((bucket) => {
      if (bucket) {
        let cur = bucket.head;
        while (cur) {
          entries.push(cur.value);
          cur = cur.next;
        }
      }
    });
    return entries;
  }
}

const hashTable = new HashMap();

hashTable.set("first", 0);
hashTable.set("first", 1);
hashTable.set("second", 2);
hashTable.set("third", 3);
hashTable.set("fourth", 4);
hashTable.set("fifth", 5);

console.log(hashTable);
console.log(hashTable.length);
console.log(hashTable.keys);
console.log(hashTable.values);
console.log(hashTable.entries);
