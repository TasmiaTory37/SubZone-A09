import React, { useEffect } from 'react';


const FAQ = () => {
   useEffect(() => {
      document.title = "SubZone - FAQ"; 
    }, []);
  return (
    <div>
      <div id="faqs" className="join join-vertical px-4 py-10 mx-auto">
        <h1 className=' text-center text-3xl font-bold my-5'>Frequently Asked Questions</h1>

        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What services does SubZone provide?
          </div>
          <div className="collapse-content">
            <p>
              SubZone offers discounted subscriptions to popular platforms like Netflix, Amazon Prime, ChatGPT Plus, YouTube Premium, Spotify, Canva Pro, Hoichoi, Chorki, and Zee5. We simplify access and help you save.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium">
            Is this legal and safe to use?
          </div>
          <div className="collapse-content">
            <p>
              Yes. SubZone follows fair usage policies and distributes subscriptions through shared plans or authorized multi-user options. We ensure security and transparency at every step.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium">
            How do I get access after payment?
          </div>
          <div className="collapse-content">
            <p>
              Once your payment is confirmed, you’ll receive login credentials or invite links via email or WhatsApp within 1–12 hours depending on the service.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium">
            Can I cancel or upgrade my subscription?
          </div>
          <div className="collapse-content">
            <p>
              Yes, you can contact our support team to upgrade, downgrade, or cancel your subscription anytime before your renewal date.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
