function Newsletter() {
  return (
    <section className="py-16">


      <div className="max-w-7xl mx-auto px-6">


        <div
          className="
          bg-gray-900
          rounded-2xl
          px-6
          py-12
          md:px-12
          text-center
          "
        >


          {/* Heading */}

          <h2
            className="
            text-3xl
            md:text-4xl
            font-bold
            text-white
            "
          >
            Subscribe To Our Newsletter
          </h2>



          <p
            className="
            mt-4
            text-gray-300
            "
          >
            Get latest products, offers and
            exclusive discounts directly in your inbox.
          </p>




          {/* Form */}

          <form
            className="
            mt-8
            flex
            flex-col
            sm:flex-row
            justify-center
            gap-4
            "
          >


            <input
              type="email"
              placeholder="Enter your email"
              className="
              w-full
              sm:w-0
              py-3
              rounded-lg
              outline-none
              text-gray-900
              "
            />



            <button
              type="submit"
              className="
              bg-blue-600
              text-white
              px-8
              py-3
              rounded-lg
              hover:bg-blue-700
              transition
              "
            >
              Subscribe
            </button>


          </form>



        </div>


      </div>


    </section>
  );
}


export default Newsletter;