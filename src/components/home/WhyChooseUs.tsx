const features = [
  {
    id: 1,
    title: "Fast Delivery",
    description:
      "We deliver your products quickly and safely to your doorstep.",
    icon: "🚚",
  },

  {
    id: 2,
    title: "Secure Payment",
    description:
      "Your payment information is protected with secure technology.",
    icon: "🔒",
  },

  {
    id: 3,
    title: "Quality Products",
    description:
      "We provide high-quality products from trusted brands.",
    icon: "⭐",
  },

  {
    id: 4,
    title: "Customer Support",
    description:
      "Our support team is always ready to help you.",
    icon: "💬",
  },
];


function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}

        <div className="text-center mb-10">

          <h2
            className="
            text-3xl
            font-bold
            text-gray-900
            "
          >
            Why Choose Us?
          </h2>


          <p
            className="
            mt-3
            text-gray-600
            "
          >
            We provide the best shopping experience
          </p>

        </div>




        {/* Feature Cards */}

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
          "
        >


          {features.map((feature) => (

            <div
              key={feature.id}
              className="
              bg-white
              p-6
              rounded-xl
              shadow
              text-center
              hover:shadow-lg
              transition
              "
            >


              {/* Icon */}

              <div
                className="
                text-5xl
                mb-4
                "
              >
                {feature.icon}
              </div>




              {/* Title */}

              <h3
                className="
                text-xl
                font-semibold
                text-gray-800
                "
              >
                {feature.title}
              </h3>



              {/* Description */}

              <p
                className="
                mt-3
                text-gray-600
                "
              >
                {feature.description}
              </p>


            </div>

          ))}


        </div>


      </div>


    </section>
  );
}


export default WhyChooseUs;