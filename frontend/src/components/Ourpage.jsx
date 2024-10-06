import React from "react";
import image from "../assets/PizzeriaLogo.png";
function Ourpage() {
  return (
    <>
      <main className="container row mx-5 ">
        <header className="header h1 text-center">Our Story</header>

        <section className="container-fluid row p-2 ">
          <article className="">
            We believe in good. We launched Fresh Pan Pizza Best Excuse Awards
            on our Facebook fan page. Fans were given situations where they had
            to come up with wacky and fun excuses. The person with the best
            excuse won the Best Excuse Badge and won Pizza's vouchers. Their
            enthusiastic reponse proved that Pizza's Fresh Pan Pizza is the
            Tasities Pan Pizza. Ever! Ever since we launched the Tastiest Pan
            Pizza ever, people have not been able to resist the soffest,
            cheesiest, crunshiest, butteriest Domino's Fresh Pan Pizza. They
            have been leaving in stage in the middle of a performance and even
            finding excuses to be disqualified in a football match. We launched
            Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans
            were given situations where they had to come up with wacky and fun
            excuses. The person with the best excuse won the Best Excuse Badge
            and won Pizza's vouchers. Their enthusiastic reponse proved that
            Pizza's Fresh Pan Pizza is the Tasities Pan Pizza. Ever!
          </article>
        </section>

        <section className="container-fluid row my-3">
          <article className="col-6">
            <img
              src="https://www.eatthis.com/wp-content/uploads/sites/4/2020/02/pizza-toppings.jpg?quality=82&strip=all"
              alt=""
              width="450px"
            />
          </article>
          <section className="col-6 text-align-center ">
            <header className="header h1  mt-5">Ingredients</header>
            <article className="">
              We're ruthless about goodness. We have no qualms about tearning up
              a day-old lettuce leaf (straight from farm), or steaming
              baby(carrot).Cut Cut. Chop. Chop. Steam. Steam. Stir. Stir. While
              they're still young and fresh - that's our motto. It makes the
              kitchen a better place.
            </article>
          </section>
        </section>

        <section className=" row container-fluid my-3 ">
          <section className="col-6">
            <header className="header h1 mt-5"> Our Chefs</header>
            <article>
              They make sauces sing and salads dance. They create magic with
              skill,knowledge, passion and stirring spoons (among other things)
              They make goodness so good. It doesn't know what to do with
              itself. We do though. We send it to you.
            </article>
          </section>
          <section className="col-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLrFTgu2TuzzN2p8i75i2P7Xe3X6PsIVh2ZGZYPKpfLeJocIOVeoMEJiVQBoBv_4nw10c&usqp=CAU"
              alt=""
              width="500px"
            />
          </section>
        </section>

        <section className="container-fluid row my-3">
          <article className="col-3">
            <img src={image} alt="" />
          </article>
          <section className="col-9">
            <article className="h1 text-center my-5 ">
              45-Minute Delivery
            </article>
          </section>
        </section>
      </main>
    </>
  );
}

export default Ourpage;
