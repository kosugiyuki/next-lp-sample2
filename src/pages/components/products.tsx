export default function Products() {
  return (
    <>
      <section id="1" className="gray-back">
        <h2 className="center">
          <span className="under">商品について</span>
        </h2>
        <div className="container center">
          <div className="row">
            <div className="col span-4">
              <img src="/images/product.jpg" alt="ここに商品" />
              <h3>ここに商品が入ります</h3>
              <p>ここに説明文が入ります</p>
            </div>
            <div className="col span-4">
              <img src="/images/product.jpg" alt="ここに商品" />
              <h3>ここに商品が入ります</h3>
              <p>ここに説明文が入ります</p>
            </div>
            <div className="col span-4">
              <img src="/images/product.jpg" alt="ここに商品" />
              <h3>ここに商品が入ります</h3>
              <p>ここに説明文が入ります</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
