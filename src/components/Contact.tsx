const Contact = () => (
  <section id="contact" className="min-h-screen px-6 py-16 bg-gray-900">
    <h2 className="text-3xl font-bold mb-6">Contact</h2>
    <form className="space-y-4 max-w-md">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-3 rounded bg-gray-800 text-white"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-3 rounded bg-gray-800 text-white"
      />
      <textarea
        placeholder="Your Message"
        className="w-full p-3 rounded bg-gray-800 text-white h-32"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white"
      >
        Send Message
      </button>
    </form>
  </section>
);

export default Contact;
