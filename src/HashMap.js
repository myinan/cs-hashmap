import LinkedList from "@myinan/linked-list/linkedList";

export default class HashMap {
  constructor() {
    this.table = [];
    this.tableLength = 16;
  }

  static #hash(string) {
    let hashCode = 0;

    const primeNumber = 31;
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
}

const hashTable = new HashMap();
hashTable.set("testKey", 5);
hashTable.set("testKey", 6);
hashTable.set("anotherTestt", "tested");
hashTable.set("anotherTest", "1233");
console.log(hashTable);

console.log(hashTable.get("testKey"));
