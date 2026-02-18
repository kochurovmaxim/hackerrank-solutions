import { useMemo } from "react";
import { useForm } from "../../hooks/useForm";

export function ContactFormPage() {
  const initialValues = useMemo(
    () => ({
      name: "",
      email: "",
      message: "",
    }),
    [],
  );

  const { formData, submittedData, error, handleChange, handleSubmit } =
    useForm(initialValues);

  return (
    <>
      <div>
        <h1 className="text-center mb-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
          Contact Form
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            name="name"
            className="w-full px-3 py-2 mb-6 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            data-testid="name-input"
          />
          <input
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            name="email"
            className="w-full px-3 py-2 mb-6 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            data-testid="email-input"
          />
          <textarea
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            name="message"
            className="w-full px-3 py-2 mb-6 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            data-testid="message-input"
          />
          <button
            type="submit"
            data-testid="submit-button"
            className="w-full bg-violet-600 hover:bg-violet-500 py-2 px-3 rounded-sm cursor-pointer text-white font-bold"
          >
            Submit
          </button>
        </form>
        {error && (
          <p data-testid="error-message" className="error">
            {error}
          </p>
        )}
        {submittedData && (
          <div
            data-testid="submitted-data"
            className="bg-gray-200 rounded-lg p-4 mt-4"
          >
            <h2 className="mb-3 text-2xl font-semibold text-gray-200 dark:text-gray-700">
              Submitted Information
            </h2>
            <p>
              <strong>Name:</strong> {submittedData.name}
            </p>
            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p>
              <strong>Message:</strong> {submittedData.message}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
