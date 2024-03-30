import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    projectTitle: '',
    goalsAndObjectives: '',
    timeline: '',
    budget: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendInquiryEmail = async () => {
    try {
      toast.info('Sending email...');
      const response = await fetch('/api/sendInquiryEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        projectTitle: '',
        goalsAndObjectives: '',
        timeline: '',
        budget: '',
      });
      toast.success(data.message);
    } catch (error) {
      toast.error('Error sending email');
    }
  };

  const sendAcknowledgementEmail = async () => {
    try {
      const response = await fetch('/api/sendAcknowledgementEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log('Acknowledgement email sent:', response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sendInquiryEmail();
    await sendAcknowledgementEmail();
  };

  return (
    <>
      <ToastContainer />
      <div
        className="grid sm:grid-cols-3 grid-cols-1 px-10 py-20 bg-gray-50 gap-10"
        id="inquiry"
      >
        <div className="col-span-1">
          <hr className="border-4 border-gray-900 w-40 my-4" />
          <h1 className="text-3xl font-bold">
            send your <br /> inquiry.
          </h1>
        </div>
        <div className="col-span-2">
          <form
            className="flex flex-col gap-6 sm:w-3/4"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-sm font-bold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-black py-4 px-6 bg-transparent text-sm placeholder:text-sm"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm font-bold ">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-black py-4 px-6 bg-transparent text-sm placeholder:text-sm"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="phoneNumber" className="text-sm font-bold">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="border border-black py-4 px-6 bg-transparent text-sm placeholder:text-sm"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="projectTitle" className="text-sm font-bold">
                What is the nature of your project?
              </label>
              <input
                type="text"
                id="projectTitle"
                name="projectTitle"
                value={formData.projectTitle}
                onChange={handleChange}
                required
                className="border border-black py-4 px-6 bg-transparent text-sm placeholder:text-sm"
                placeholder='e.g. "E-commerce website development" or "Logo design"'
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="goalsAndObjectives" className="text-sm font-bold">
                What are your goals and objectives?
              </label>
              <textarea
                id="goalsAndObjectives"
                name="goalsAndObjectives"
                value={formData.goalsAndObjectives}
                onChange={handleChange}
                required
                className="border border-black py-4 px-6 bg-transparent text-sm placeholder:text-sm"
                rows={4}
                placeholder='e.g. "Integrate payment gateway" or "UI/UX improvements"'
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="timeline" className="text-sm font-bold">
                What is your timeline?
              </label>
              <input
                type="text"
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                required
                className="border border-black py-4 px-6 bg-transparent text-sm placeholder:text-sm"
                placeholder='e.g. "3 months" or "ASAP"'
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="budget" className="text-sm font-bold">
                What is your budget? (in USD)
              </label>
              <input
                type="number"
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="border border-black py-4 px-6 bg-transparent text-sm placeholder:text-sm"
              />
            </div>

            <button
              role="button"
              aria-label="submit"
              aria-labelledby="submit"
              type="submit"
              className="bg-black hover:bg-white text-white hover:text-black font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
