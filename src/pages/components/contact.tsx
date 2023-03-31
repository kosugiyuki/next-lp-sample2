export default function Contact() {
  return (
    <>
      <section id="5">
        <h2 className="center">
          <span className="under">お問い合わせ</span>
        </h2>
        <div className="container">
          <div className="row">
            <div className="col span-6">
              <div className="contact-box">
                <p>
                  <img src="/images/tel.png" alt="電話" />
                </p>
                <p>012-345-6789</p>
              </div>
            </div>
            <div className="col span-6">
              <div className="contact-box">
                <p>
                  <img src="/images/mail.png" alt="Eメール" />
                </p>
                <p>simple@mail.com</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col span-12">
              <form method="post" action="">
                <table className="table full-width">
                  <tbody>
                    <tr>
                      <th>
                        <label htmlFor="name">お名前</label>
                      </th>
                      <td>
                        <input
                          className="full-width"
                          type="text"
                          name="お名前"
                          placeholder="名前を記入"
                          id="exampNameInput"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <label htmlFor="email">メールアドレス</label>
                      </th>
                      <td>
                        <input
                          className="full-width"
                          type="email"
                          name="Email"
                          placeholder="メールアドレスを記入"
                          id="exampleEmailInput"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <label htmlFor="tel">お電話番号</label>
                      </th>
                      <td>
                        <input
                          className="full-width"
                          type="tel"
                          name="お電話番号"
                          placeholder="お電話番号を記入"
                          id="exampleTellInput"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <label htmlFor="exampleMessage">お問い合わせ内容</label>
                      </th>
                      <td>
                        <textarea
                          className="full-width textarea"
                          name="お問い合わせ内容"
                          placeholder="用件をご記入ください …"
                          id="exampleMessage"
                        ></textarea>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="center">
                  <input className="button" type="submit" value="送 信" />
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
