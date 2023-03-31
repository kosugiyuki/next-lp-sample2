export default function Access() {
  return (
    <>
      <section id="4">
        <h2 className="center">
          <span className="under">アクセス</span>
        </h2>
        <div className="container">
          <div className="row">
            <div className="col span-12">
              {/* <!-- GoogleMap --> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27814443.96425483!2d120.28897720705172!3d31.679877148840735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34674e0fd77f192f%3A0xf54275d47c665244!2z5pel5pys!5e0!3m2!1sja!2sjp!4v1555153587836!5m2!1sja!2sjp"
                width="100%"
                height="450"
                // frameborder="0"
                // style="border:0"
                // allowfullscreen
              ></iframe>
              {/* <!-- /GoogleMap --> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
