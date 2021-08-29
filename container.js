class Container {
  /**
   * 
   * Hint, choose proper data type for storing product item
   */
  constructor(data) {
    this.storage = data; 
  }


  get(productId = null) {
    /**
     * Dont remove this setTimeout, assume there is an I/O delay to get the result of querying the storarage.
     * Offcourse you can modify the code, but the return value must be call inside setTimeout.
     */
    let storage = this.storage;
    var promise = new Promise(function(resolve, reject) {
      setTimeout(() => {
        const product = storage
        .find(product => product.productId === productId);
        resolve(product);
      }, 1000);
    });
    return promise;
  }

  put({ productId, qty }) {
    /**
     * Add new item if productId not already exist either way update qty
     */
     const i = this.storage.findIndex(data => data.productId === productId);
     console.log(i)
     let data = { productId, qty }
     if (i > -1) this.storage[i] = data
     else this.storage.push(data);
     return data
  }

  delete(productId) {
    this.storage = this.storage.filter(data => data.productId !== productId);
  }
}

module.exports = Container

