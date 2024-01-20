import LinkedList from "@myinan/linked-list/linkedList";

export default class HashMap {
  constructor() {
    this.table = [];
    this.tableLength = 16;
  }

  static hash(string) {
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

    const index = HashMap.hash(key) % this.tableLength;
    if (this.table[index]) {
      this.table[index].append(obj);
    } else if (!this.table[index]) {
      this.table[index] = new LinkedList(obj);
    }
  }

  get(key) {
    const index = HashMap.hash(key) % this.tableLength;
    return this.table[index];
  }
}

const hashTable = new HashMap();
hashTable.set("testKey", 5);
hashTable.set("testKey", 6);
console.log(hashTable);

console.log(HashMap.hash("testKey") % 16);

console.log(hashTable.get("testKey"));
console.log(hashTable.get("testKey").size);
