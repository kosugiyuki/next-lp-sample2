export default function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col span-12 header">
              <h1>
                <a href="">LOGO</a>
              </h1>
              <div className="header-box">
                <a href="">
                  <span className="contact-button">お問い合わせ</span>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col span-12">
              <nav>
                <div id="open"></div>
                <div id="close"></div>
                <div id="navi">
                  <ul>
                    <li>
                      <a href="index.html">ホーム</a>
                    </li>
                    <li>
                      <a href="#1">商品について</a>
                    </li>
                    <li>
                      <a href="#2">お客様の声</a>
                    </li>
                    <li>
                      <a href="#3">申し込みの流れ</a>
                    </li>
                    <li>
                      <a href="#4">アクセス</a>
                    </li>
                    <li>
                      <a href="#5">お問い合わせ</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
