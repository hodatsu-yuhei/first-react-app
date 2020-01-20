import React from "react";

const MainSection = () => (
  <section>
    <h2>Welcome Tempslie official site</h2>
  </section>
);

const IntroductionSection = () => (
  <section>
    <h3>about section</h3>
    <div>
      <img src="images/studio2.jpg" />
    </div>
    <div>
      "時と心と人を紡ぐ"tempslie(タンリエ)はフランス語で「時を紡ぐ、時をつなぐ」という意味です。
      <br />
      皆様の大切で貴重な「時間」が、心身共に心地よく流れるように
    </div>
    <div>
      <img id="instructor" src="images/maki.jpg" />
    </div>
  </section>
);

const Main = () => (
  <main>
    <section></section>
    <MainSection />
    <IntroductionSection />
    <section>section2</section>
    <section>section3</section>
  </main>
);

export default Main;
