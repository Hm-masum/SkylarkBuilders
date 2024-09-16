const Accordion = () => {
  return (
    <div className="my-4 lg:my-12 space-y-5">
      <h1 className="text-4xl font-semibold text-center">Clients Question</h1>
      <p className="lg:w-[55%] text-center mx-auto opacity-80">Explore the answers to all your questions with our client Q&A. Clear, concise, and comprehensive – your inquiries, our expertise. </p>
      <div className="md:flex items-center border-2 p-4 rounded-lg gap-6">
        <div>
          <img className="rounded-2xl lg:h-[400px]"
            src="https://i.ibb.co/pLXW9ZH/pexels-pixabay-356079.jpg"
          />
        </div>
        <div className="join join-vertical">
          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              How long does the home buying process take?
            </div>
            <div className="collapse-content">
              <p>It varies but typically 30-60 days from offer to closing.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              What documents need for application?
            </div>
            <div className="collapse-content">
              <p>Typically, you will need ID, income verification, and financial statements.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Agent advantages.
            </div>
            <div className="collapse-content">
              <p> Expertise, negotiation skills, access to listings, paperwork assistance.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4"/>
            <div className="collapse-title text-xl font-medium">
              Service.
            </div>
            <div className="collapse-content">
              <p>We ensure that, you will be receive best service.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Booking.
            </div>
            <div className="collapse-content">
              <p>Secure your spot effortlessly by using our user-friendly booking system.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Pricing.
            </div>
            <div className="collapse-content">
              <p>Eye-catching discount and affordable price.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
