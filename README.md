# HashMap (Deployed to `gh-pages`)
## `.src/HashMap.js`
## Deployment address: [`myinan.github.io/cs-hashmap/`](https://myinan.github.io/cs-hashmap/ "https://myinan.github.io/cs-hashmap/")
### A hash table module created with Vanilla Javascript.

+ `set` takes two arguments, the first is a key and the second is a value that is assigned to this key. If a key already exists, then the old value is overwritten.

+ `get` takes one argument as a key and returns the value that is assigned to this key. If key is not found, return null.

+ `has` takes a key as an argument and returns true or false based on whether or not the key is in the hash map.

+ `remove` takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false.

+ `length` returns the number of stored keys in the hash map.

+ `clear` removes all entries in the hash map.

+ `keys` returns an array containing all the keys inside the hash map.

+ `values` returns an array containing all the values.

+ `entries` returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]