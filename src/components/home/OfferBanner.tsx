import { Link } from "react-router-dom";


function OfferBanner() {
  return (
    <section className="py-16">


      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        "
      >


        <div
          className="
          bg-blue-600
          rounded-2xl
          px-8
          py-12
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-6
          "
        >


          {/* Left Content */}

          <div
            className="
            text-white
            "
          >

            <p
              className="
              text-sm
              uppercase
              tracking-wider
              opacity-90
              "
            >
              Limited Time Offer
            </p>


            <h2
              className="
              text-3xl
              md:text-5xl
              font-bold
              mt-3
              "
            >
              Get 50% Off
              <br />
              On Your First Order
            </h2>


            <p
              className="
              mt-4
              text-blue-100
              "
            >
              Don't miss amazing deals on our
              latest products.
            </p>


          </div>




          {/* Button */}

          <div>


            <Link
              to="/products"
              className="
              inline-block
              bg-white
              text-blue-600
              font-semibold
              px-8
              py-3
              rounded-lg
              hover:bg-gray-100
              transition
              "
            >
              Shop Now
            </Link>


          </div>



        </div>


      </div>


    </section>
  );
}


export default OfferBanner;