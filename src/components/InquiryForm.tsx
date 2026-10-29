import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const emptyForm = {
  name: '',
  email: '',
  phoneNumber: '',
  projectTitle: '',
  goalsAndObjectives: '',
  timeline: '',
  budget: '',
};

export default function InquiryForm() {
  const [formData, setFormData] = useState(emptyForm);
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Returns whether the inquiry reached us, so we only thank people (and clear
  // their answers) when it actually did.
  const sendInquiryEmail = async () => {
    try {
      const response = await fetch('/api/sendInquiryEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error(`Inquiry failed with ${response.status}`);
      }
      const data = await response.json();
      toast.success(data.message);
      return true;
    } catch (error) {
      console.error('Error:', error);
      toast.error(
        'Sorry, your inquiry could not be sent. Please email us at info@webcafe.africa.'
      );
      return false;
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
      if (!response.ok) {
        console.error('Acknowledgement email failed:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    if (await sendInquiryEmail()) {
      await sendAcknowledgementEmail();
      setFormData(emptyForm);
    }
    setSending(false);
  };

  return (
    <>
      <ToastContainer />
      <section id="inquiry" className="scroll-mt-24 px-6 pb-24">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-12 rounded-[36px] bg-lime p-[clamp(28px,6vw,72px)] text-move">
          <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-5">
            <h2 className="font-display text-[clamp(44px,6vw,80px)] font-extrabold leading-[0.95] tracking-[-0.035em]">
              Got something
              <br />
              to build?
            </h2>
            <p className="max-w-md text-lg leading-relaxed">
              Tell us about it and we’ll come back with a plan, a timeline and a
              quote.
            </p>
            <p className="font-semibold">
              <a href="mailto:info@webcafe.africa" className="underline">
                info@webcafe.africa
              </a>
              <br />
              <a href="tel:+254768372439" className="underline">
                +254 768 372 439
              </a>
            </p>
          </div>
          <form
            className="flex min-w-0 flex-[2_1_420px] flex-col gap-5"
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
                className="field"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="field"
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
                className="field"
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
                className="field"
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
                className="field"
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
                className="field"
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
                className="field"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="btn-primary self-start disabled:cursor-wait disabled:opacity-70"
            >
              {sending ? 'Sending…' : 'Send inquiry'}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
