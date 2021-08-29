const Container = require('./container');
/**
 * Unit test goes below
 * We Use Jest https://jestjs.io/ to help us for the test runner
 */

describe('Test class container', () => {
  test('testing Class Container import', () => {
    const c = new Container([
      { productId: '01', qty: 1 }
    ]);
    console.log(c);
    expect(c).toBeTruthy;
  });

  /**
   * test container.get()
   * test if we have instant of Container which contain item of {productId: '01', 1}
   * when we call get, assert it returning equal {productId: '01', 1}
   */

  test("Get storage", async () => {
    let productId = '01'
    const c = new Container([
      { productId: productId, qty: 1 }
    ])
    expect.assertions(1);
    let product = await c.get(productId)
    expect(product).toEqual({ productId: productId, qty: 1 })
  })

  /**
  * test container.put()
  * test if we put item of {productId: '01', 1}
  * assert it returning equal to {productId: '01', 1}
  */
  test("Put storage", () => {
    let productId = '03'
    const c = new Container([
      { productId: productId, qty: 1 }
    ])
    productId = '05'
    const putData = {productId, qty: 5}
    const put = c.put(putData)
    console.log(c)
    expect(put).toEqual(putData)
  })

  /**
  * test container.delete()
  */

  test("Delete storage", async () => {
    let productId = '03'
    const c = new Container([
      { productId: productId, qty: 1 }
    ])

    c.delete(productId)

    expect.assertions(1);
    let product = await c.get(productId)
    expect(product).toEqual(undefined)
  })
});
