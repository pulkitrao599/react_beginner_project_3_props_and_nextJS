export default function Page() {
  async function submitForm(formData) {
    "use server";
    const formFields = {
      email: formData.get("email"),
      message: formData.get("message"),
    };
    console.log("formFields", formFields);
    console.log("TODO: Send these form field values to the backend");
    return formFields;
  }

  return (
    <main className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h1
        style={{ color: "black" }}
        className="text-2xl font-bold text-center mb-6"
      >
        Contact Us!
      </h1>
      <form className="space-y-4" action={submitForm}>
        <div>
          <label
            htmlFor="email"
            style={{ color: "black" }}
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            style={{ color: "black" }}
            className="border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            style={{ color: "black" }}
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            required
            name="message"
            rows="4"
            style={{ color: "black" }}
            className="border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          style={{ color: "black" }}
          className="text-white bg-blue-600 rounded-md"
        >
          Send message
        </button>
      </form>
    </main>
  );
}
