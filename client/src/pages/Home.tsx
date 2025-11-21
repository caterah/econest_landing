import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Leaf, Zap, Smartphone, DollarSign, Wind, Mail } from "lucide-react";
import { APP_TITLE } from "@/const";
import { useState } from "react";
import { toast } from "sonner";

  const [firstName, setFirstName] = useState("");
  const [apartmentType, setApartmentType] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleWaitlistSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !firstName) {
      toast.error("Please fill in all required fields");
      return;
    }

    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubscribed(true);
      toast.success("You're on the waiting list! Check your email for updates.");
      setEmail("");
      setFirstName("");
      setApartmentType("");
      
      // Reset form after 3 seconds
      setTimeout(() => setSubscribed(false), 3000);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-green-600" />
            <span className="text-xl font-bold text-gray-900">EcoNest</span>
          </div>
          <Button 
            onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
            variant="default"
            className="bg-green-600 hover:bg-green-700"
          >
            Join Waitlist
          </Button>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 py-16 sm:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-8 left-20 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              {/* Left Column - Text */}
              <div className="flex flex-col justify-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Compost Without the <span className="text-green-600">Compromise</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                  EcoNest brings the benefits of composting to your apartment. Reduce waste, save money, and grow your garden—all from your kitchen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold"
                    onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Join the Waiting List
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-gray-300 text-gray-900 hover:bg-gray-50"
                  >
                    Learn More
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-6">
                  ✓ Early-bird pricing (30% off) • ✓ Limited spots available • ✓ Launch Q2 2025
                </p>
              </div>

              {/* Right Column - Image */}
              <div className="flex justify-center lg:justify-end">
                <img 
                  src="/econest_hero.png" 
                  alt="EcoNest Smart Composting System" 
                  className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-16 sm:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Why Choose EcoNest?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Designed for modern apartment living, EcoNest combines cutting-edge technology with environmental responsibility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Wind className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Completely Odor-Free</h3>
                <p className="text-gray-600">
                  Advanced biochar filtration and sealed design eliminate odors entirely. Your neighbors will never know you're composting.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compost in 2-3 Weeks</h3>
                <p className="text-gray-600">
                  Controlled microbial decomposition accelerates the process. Traditional composting takes months; EcoNest takes weeks.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">App-Guided Simplicity</h3>
                <p className="text-gray-600">
                  The EcoNest app sends reminders, tracks progress, and provides tips. No guesswork required—just follow the guidance.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Save Up to 80% on Compost</h3>
                <p className="text-gray-600">
                  Stop buying expensive compost. EcoNest produces nutrient-rich compost for just $0.50/kg versus $3-5/kg at stores.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fits Anywhere</h3>
                <p className="text-gray-600">
                  Compact design fits under your kitchen sink or in a closet. Just 12 inches tall and 8 inches wide—smaller than a toaster.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">100% Biodegradable</h3>
                <p className="text-gray-600">
                  Made from recycled plastics and biodegradable components. When it reaches end-of-life, it composts itself.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                  Perfect for Urban Living
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700"><strong>No outdoor space required</strong> — Works indoors in any apartment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700"><strong>Minimal maintenance</strong> — Just 5 minutes per week</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700"><strong>Renter-friendly</strong> — No permanent installation needed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700"><strong>Reduce waste by 30%</strong> — Divert organic waste from landfills</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="space-y-6">
                  <div>
                    <p className="text-4xl font-bold text-green-600 mb-2">30%</p>
                    <p className="text-gray-600">Reduction in household waste</p>
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-4xl font-bold text-green-600 mb-2">2-3 weeks</p>
                    <p className="text-gray-600">Time to get ready-to-use compost</p>
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-4xl font-bold text-green-600 mb-2">80%</p>
                    <p className="text-gray-600">Savings on compost costs annually</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist CTA Section */}
        <section id="waitlist" className="py-16 sm:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Ready to Transform Your Waste Into Wealth?
                </h2>
                <p className="text-lg text-gray-600">
                  Join thousands of eco-conscious apartment dwellers who are already on the waiting list. Get early-bird pricing (30% off) and exclusive launch updates.
                </p>
              </div>

              {subscribed ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-900 mb-2">Welcome to EcoNest!</h3>
                  <p className="text-green-700">
                    Check your email for a confirmation and exclusive early-bird pricing details. We'll keep you updated on our launch.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleWaitlistSignup} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="John"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="apartment" className="block text-sm font-medium text-gray-700 mb-2">
                        Apartment Type (Optional)
                      </label>
                      <select
                        id="apartment"
                        value={apartmentType}
                        onChange={(e) => setApartmentType(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="">Select...</option>
                        <option value="studio">Studio</option>
                        <option value="1bed">1 Bedroom</option>
                        <option value="2bed">2 Bedrooms</option>
                        <option value="3plus">3+ Bedrooms</option>
                      </select>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="updates"
                        defaultChecked
                        className="w-4 h-4 text-green-600 rounded"
                      />
                      <label htmlFor="updates" className="text-sm text-gray-600">
                        I want to receive updates about EcoNest
                      </label>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
                  >
                    {loading ? "Joining..." : "Secure My Spot on the Waiting List"}
                  </Button>
                  <p className="text-xs text-gray-500 text-center mt-4">
                    We'll send you early-bird pricing and exclusive launch updates. No spam, unsubscribe anytime.
                  </p>
                </form>
              )}

              <div className="mt-12 text-center">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  <Mail className="w-5 h-5 inline-block mr-2 text-green-600" />
                  Join 5,000+ people waiting for EcoNest
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <details className="bg-white rounded-lg border border-gray-200 p-6 cursor-pointer group">
                <summary className="flex items-center justify-between font-semibold text-gray-900">
                  How does EcoNest work?
                  <span className="text-green-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-4">
                  EcoNest uses a combination of biochar filtration, controlled microbial decomposition, and smart sensors to break down kitchen waste into nutrient-rich compost in just 2-3 weeks. Simply add your food scraps, and the app guides you through the process.
                </p>
              </details>

              <details className="bg-white rounded-lg border border-gray-200 p-6 cursor-pointer group">
                <summary className="flex items-center justify-between font-semibold text-gray-900">
                  Is it really odor-free?
                  <span className="text-green-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-4">
                  Yes! EcoNest's sealed design and advanced biochar filtration system completely eliminate odors. It's designed to sit in your kitchen without any unpleasant smells.
                </p>
              </details>

              <details className="bg-white rounded-lg border border-gray-200 p-6 cursor-pointer group">
                <summary className="flex items-center justify-between font-semibold text-gray-900">
                  What can I compost in EcoNest?
                  <span className="text-green-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-4">
                  You can compost most kitchen scraps: fruit and vegetable peels, coffee grounds, tea bags, eggshells, and more. The app provides a complete list of what's safe to add.
                </p>
              </details>

              <details className="bg-white rounded-lg border border-gray-200 p-6 cursor-pointer group">
                <summary className="flex items-center justify-between font-semibold text-gray-900">
                  When will EcoNest launch?
                  <span className="text-green-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-4">
                  We're launching in Q2 2025. Early waitlist members will receive 30% off the regular price and exclusive access to pre-order.
                </p>
              </details>

              <details className="bg-white rounded-lg border border-gray-200 p-6 cursor-pointer group">
                <summary className="flex items-center justify-between font-semibold text-gray-900">
                  How much does it cost?
                  <span className="text-green-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-4">
                  Pricing details will be announced soon. Waitlist members will get early-bird pricing at 30% off. Join now to secure your discount!
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-5 h-5 text-green-500" />
                <span className="font-bold text-white">EcoNest</span>
              </div>
              <p className="text-sm text-gray-400">Smart composting for modern apartments.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-500 transition">How It Works</a></li>
                <li><a href="#" className="hover:text-green-500 transition">Features</a></li>
                <li><a href="#" className="hover:text-green-500 transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-500 transition">About Us</a></li>
                <li><a href="#" className="hover:text-green-500 transition">Contact</a></li>
                <li><a href="#" className="hover:text-green-500 transition">Sustainability</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-500 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-green-500 transition">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© 2025 EcoNest. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-500 transition">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
