class NameRepository {
    private names = ["Ana", "Carlos", "João"];
  
    getIterator(): Iterator<string> {
      let index = 0;
      const names = this.names;
  
      return {
        next(): IteratorResult<string> {
          return index < names.length
            ? { done: false, value: names[index++] }
            : { done: true, value: undefined };
        }
      };
    }
}
  
const repo = new NameRepository();
const iterator = repo.getIterator();

let result = iterator.next();

console.log('============== Iterator Pattern ==============');

while (!result.done) {
    console.log(result.value);
    result = iterator.next();
}

console.log('==============================================');
  