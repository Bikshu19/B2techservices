import { useState } from "react";
import { Mail, Phone, MapPin, Send, Shield, CheckCircle } from "lucide-react";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    otp: "",
    message: "",
  });
  const [otpSent, setOtpSent] = useState(false);
  const [verified, setVerified] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const sendOtp = async () => {
    if (!form.email) return alert("Enter email first");
    const res = await fetch("http://localhost:5000/api/contact/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: form.email }),
    });
    const data = await res.json();
    setStatus(data.message);
    if (data.success) setOtpSent(true);
  };

  const verifyOtp = async () => {
    const res = await fetch("http://localhost:5000/api/contact/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: form.email, otp: form.otp }),
    });
    const data = await res.json();
    setStatus(data.message);
    if (data.success) setVerified(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!verified) return alert("Please verify email first");
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setStatus(data.message);
    if (data.success) setForm({ name: "", email: "", otp: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Banner */}
      <div className="relative h-[60vh] bg-gradient-to-r from-[#0a1f44] via-[#0a1f44] to-[#00809D] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#00809D] rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Get In Touch
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We're here to help and answer any questions you might have
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 -mt-20 relative z-20">
        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-[#00809D] to-[#0a1f44] rounded-xl flex items-center justify-center mb-4">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-bold text-xl text-[#0a1f44] mb-2">Phone</h3>
            <p className="text-gray-600 text-lg">+91 98765 43210</p>
            <p className="text-sm text-gray-500 mt-2">Mon-Fri 9AM-6PM IST</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-[#00809D] to-[#0a1f44] rounded-xl flex items-center justify-center mb-4">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-bold text-xl text-[#0a1f44] mb-2">Location</h3>
            <p className="text-gray-600 text-lg">Hyderabad, India</p>
            <p className="text-sm text-gray-500 mt-2">Visit our office</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-[#00809D] to-[#0a1f44] rounded-xl flex items-center justify-center mb-4">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-bold text-xl text-[#0a1f44] mb-2">
              Social Media
            </h3>
            <p className="text-gray-600">LinkedIn • Twitter • Instagram</p>
            <p className="text-sm text-gray-500 mt-2">Follow us for updates</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-[#0a1f44] mb-4">
                Send Us a Message
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Have a question or feedback? Fill out the form and we'll get
                back to you as soon as possible. Your email will be verified for
                security.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0a1f44] to-[#00809D] p-8 rounded-2xl text-white">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Secure Verification
                  </h3>
                  <p className="text-blue-100">
                    We use OTP verification to ensure the security of your
                    communication and protect your information.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Quick Response</h3>
                  <p className="text-blue-100">
                    Our team typically responds within 24 hours during business
                    days.
                  </p>
                </div>
              </div>
            </div>

            {/* Images Showcase */}
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl overflow-hidden shadow-lg aspect-square">
                <img
                  src="/AboutImg/office.jpg"
                  alt="office"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg aspect-square">
                <img
                  src="/AboutImg/team2.jpg"
                  alt="teamwork"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg aspect-square">
                <img
                  src="/AboutImg/tech.jpg"
                  alt="technology"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-[#0a1f44] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#00809D] focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0a1f44] mb-2">
                  Email Address
                </label>
                <div className="flex gap-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className="flex-1 p-4 border-2 border-gray-200 rounded-xl focus:border-[#00809D] focus:outline-none transition-colors"
                    required
                  />
                  <button
                    type="button"
                    onClick={sendOtp}
                    className="px-6 bg-[#00809D] hover:bg-[#006b84] text-white rounded-xl font-semibold transition-colors whitespace-nowrap shadow-lg"
                  >
                    Send OTP
                  </button>
                </div>
              </div>

              {otpSent && !verified && (
                <div className="animate-fadeIn">
                  <label className="block text-sm font-semibold text-[#0a1f44] mb-2">
                    Verification Code
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      name="otp"
                      placeholder="Enter 6-digit OTP"
                      value={form.otp}
                      onChange={handleChange}
                      className="flex-1 p-4 border-2 border-gray-200 rounded-xl focus:border-[#00809D] focus:outline-none transition-colors"
                      required
                    />
                    <button
                      type="button"
                      onClick={verifyOtp}
                      className="px-6 bg-[#00809D] hover:bg-[#006b84] text-white rounded-xl font-semibold transition-colors shadow-lg"
                    >
                      Verify
                    </button>
                  </div>
                </div>
              )}

              {verified && (
                <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-xl">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">
                    Email verified successfully!
                  </span>
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-[#0a1f44] mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us how we can help you..."
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#00809D] focus:outline-none transition-colors resize-none"
                  required
                  disabled={!verified}
                />
              </div>

              <button
                type="submit"
                disabled={!verified}
                className={`w-full py-4 rounded-xl text-white font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  verified
                    ? "bg-[#00809D] hover:bg-[#006b84] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>

              {status && (
                <div
                  className={`mt-4 p-4 rounded-xl text-center font-semibold ${
                    status.toLowerCase().includes("success")
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-blue-50 text-blue-700 border border-blue-200"
                  }`}
                >
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
