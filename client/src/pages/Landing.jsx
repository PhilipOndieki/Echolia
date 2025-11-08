// src/pages/Landing.jsx - Beautiful landing page with scroll-triggered auth prompt
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, Users, Zap, Shield, Smartphone, Check } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();
  const [showAuthPrompt, setShowAuthPrompt] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show auth prompt after scrolling 60% of viewport
      if (scrollPosition > windowHeight * 0.6) {
        setShowAuthPrompt(true);
      }

      // Add shadow to navbar when scrolled
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Real-Time Messaging',
      description: 'Instant message delivery with typing indicators and read receipts'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Group Chats',
      description: 'Create rooms and channels for team collaboration'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure & Private',
      description: 'End-to-end encryption for your conversations'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile First',
      description: 'Seamless experience across all your devices'
    }
  ];

  const benefits = [
    'Unlimited messages and file sharing',
    'Voice messages and media support',
    'Message reactions and replies',
    'Search through chat history',
    'Browser notifications',
    'Multi-device sync'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MessageCircle className="w-8 h-8 text-black" />
            <span className="text-2xl font-bold text-black">Echolia</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/login')}
              className="px-6 py-2 text-black hover:text-gray-600 font-medium transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate('/register')}
              className="px-6 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-black mb-6 leading-tight">
            Where Voices<br />Resonate
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            A modern, real-time chat application designed for seamless communication
          </p>
          <button
            onClick={() => navigate('/register')}
            className="px-8 py-4 bg-black text-white rounded-full text-lg font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg"
          >
            Start Chatting Now
          </button>
        </div>

        {/* Phone Mockup */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="relative">
            {/* Phone Frame */}
            <div className="mx-auto w-full max-w-sm md:max-w-md bg-black rounded-[3rem] p-3 shadow-2xl">
              <div className="bg-white rounded-[2.5rem] overflow-hidden">
                {/* Status Bar */}
                <div className="bg-black h-8 rounded-t-[2.5rem] flex items-center justify-between px-6 text-white text-xs">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-3 border border-white rounded-sm"></div>
                    <div className="w-1 h-3 bg-white rounded-sm"></div>
                  </div>
                </div>

                {/* Chat Interface Preview */}
                <div className="bg-white">
                  {/* Header */}
                  <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-semibold text-black">General Chat</p>
                      <p className="text-xs text-gray-500">24 members online</p>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="p-4 space-y-3" style={{ height: '400px' }}>
                    {/* Received Message */}
                    <div className="flex gap-2">
                      <div className="w-7 h-7 bg-gray-200 rounded-full flex-shrink-0"></div>
                      <div className="bg-gray-100 rounded-3xl rounded-bl-lg px-4 py-2 max-w-[70%]">
                        <p className="text-sm text-black">Hey! Welcome to Echolia 👋</p>
                        <p className="text-xs text-gray-500 mt-1">10:30</p>
                      </div>
                    </div>

                    {/* Sent Message */}
                    <div className="flex justify-end">
                      <div className="bg-black rounded-3xl rounded-br-lg px-4 py-2 max-w-[70%]">
                        <p className="text-sm text-white">Thanks! Loving it already 🎵</p>
                        <p className="text-xs text-gray-300 mt-1">10:31</p>
                      </div>
                    </div>

                    {/* Received Message with Image */}
                    <div className="flex gap-2">
                      <div className="w-7 h-7 bg-gray-200 rounded-full flex-shrink-0"></div>
                      <div className="bg-gray-100 rounded-3xl rounded-bl-lg p-2 max-w-[70%]">
                        <div className="w-40 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl mb-2"></div>
                        <p className="text-xs text-gray-500">10:32</p>
                      </div>
                    </div>

                    {/* Typing Indicator */}
                    <div className="flex gap-2">
                      <div className="w-7 h-7 bg-gray-200 rounded-full flex-shrink-0"></div>
                      <div className="bg-gray-100 rounded-3xl rounded-bl-lg px-4 py-3 flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Input Area */}
                  <div className="px-4 py-3 border-t border-gray-100">
                    <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center gap-2">
                      <span className="text-gray-400 text-sm flex-1">Message</span>
                      <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">↑</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="hidden md:block absolute -left-20 top-20 bg-white rounded-2xl shadow-lg p-4 animate-float">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Online</span>
              </div>
            </div>
            <div className="hidden md:block absolute -right-20 top-40 bg-white rounded-2xl shadow-lg p-4 animate-float-delayed">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-black" />
                <span className="text-sm text-gray-600">Real-time</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">
            Everything you need
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Built for modern communication
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Echolia combines the best of messaging with a beautiful, minimalist design
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-black to-gray-800 rounded-3xl flex items-center justify-center">
                <MessageCircle className="w-32 h-32 text-white opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of users already chatting on Echolia
          </p>
          <button
            onClick={() => navigate('/register')}
            className="px-8 py-4 bg-white text-black rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Create Free Account
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-6 h-6 text-black" />
              <span className="text-xl font-bold text-black">Echolia</span>
            </div>
            <p className="text-gray-600 text-sm">
              © 2025 Echolia. Where Voices Resonate.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll-Triggered Auth Prompt */}
      {showAuthPrompt && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-slide-up">
          <div className="bg-black text-white rounded-full shadow-2xl px-6 py-4 flex items-center gap-4">
            <p className="font-medium">Ready to start chatting?</p>
            <button
              onClick={() => navigate('/register')}
              className="px-6 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Sign Up Free
            </button>
            <button
              onClick={() => navigate('/login')}
              className="px-6 py-2 text-white hover:text-gray-300 font-medium transition-colors"
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;