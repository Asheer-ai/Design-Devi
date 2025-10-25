import React from 'react';
import { Palette, Layout, Type, Sparkles, Eye, Layers } from 'lucide-react';

const WelcomeScreen = ({ onSuggestionClick }) => {
    const suggestions = [
        {
            icon: <Palette className='w-5 h-5' />,
            text: "What are the best color combinations for a healthcare app?",
            category: "Color Theory"
        },
        {
            icon: <Layout className='w-5 h-5' />,
            text: "How do I create an effective landing page layout?",
            category: "UI/UX Design"
        },
        {
            icon: <Type className='w-5 h-5' />,
            text: "What fonts pair well with Helvetica?",
            category: "Typography"
        },
        {
            icon: <Eye className='w-5 h-5' />,
            text: "How can I improve accessibility in my designs?",
            category: "Accessibility"
        },
        {
            icon: <Layers className='w-5 h-5' />,
            text: "What's the difference between a design system and a component library?",
            category: "Design Systems"
        },
        {
            icon: <Sparkles className='w-5 h-5' />,
            text: "What are current design trends for 2025?",
            category: "Trends"
        }
    ];

    return (
        <div className='flex-1  p-5 flex items-center justify-center'>
            <div className='max-w-4xl w-full space-y-8 animate-fadeIn'>
                {/* Welcome Message */}
                <div className='text-center space-y-4'>
                    <div className='flex justify-center mb-6'>
                        <div className='relative'>
                            <img 
                                src="/devi_img.jpg" 
                                alt="Design Devi" 
                                className='w-24 h-24 rounded-full border-4 border-purple-400 shadow-2xl shadow-purple-500/50 object-cover'
                            />
                            <div className='absolute -top-2 -right-2 w-8 h-8 bg-linear-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse'>
                                <Sparkles className='w-4 h-4 text-white' />
                            </div>
                        </div>
                    </div>
                    
                    <h1 className='text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-400 to-purple-400'>
                        Welcome, Creative Soul
                    </h1>
                    
                    <p className='text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed'>
                        I am <span className='font-semibold text-purple-400'>Design Devi</span>, 
                        the mystical guardian of design wisdom. Ask me about UI/UX, branding, 
                        color theory, typography, and the sacred arts of visual creation.
                    </p>
                </div>

                {/* Capabilities */}
                <div className='bg-linear-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-6 border border-purple-500/30'>
                    <h2 className='text-xl font-semibold mb-4 flex items-center gap-2'>
                        <Sparkles className='w-5 h-5 text-yellow-400' />
                        My Divine Domains
                    </h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
                        {[
                            'UI/UX Design',
                            'Color Theory',
                            'Typography',
                            'Branding',
                            'Design Systems',
                            'Accessibility'
                        ].map((domain) => (
                            <div 
                                key={domain}
                                className='bg-gray-800/50 rounded-lg p-3 text-center text-sm border border-purple-500/20 hover:border-purple-500/50 transition-colors'
                            >
                                {domain}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Suggested Questions */}
                <div>
                    <h2 className='text-xl font-semibold mb-4 text-center'>
                        ✨ Begin Your Journey
                    </h2>
                    <div className='grid md:grid-cols-2 gap-4'>
                        {suggestions.map((suggestion, index) => (
                            <button
                                key={index}
                                onClick={() => onSuggestionClick(suggestion.text)}
                                className='bg-linear-to-br from-gray-800 to-gray-900 hover:from-purple-800/50 hover:to-pink-800/50 p-4 rounded-xl text-left transition-all border border-gray-700 hover:border-purple-500/50 group'
                            >
                                <div className='flex items-start gap-3'>
                                    <div className='p-2 bg-purple-600/20 rounded-lg group-hover:bg-purple-600/40 transition-colors'>
                                        {suggestion.icon}
                                    </div>
                                    <div className='flex-1'>
                                        <p className='text-xs text-purple-400 mb-1'>{suggestion.category}</p>
                                        <p className='text-sm leading-relaxed'>{suggestion.text}</p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Footer Note */}
                <p className='text-center text-sm text-gray-500 italic'>
                    "In every pixel lies a story, in every color a feeling, and in every design, the touch of the divine."
                </p>
            </div>
        </div>
    );
};

export default WelcomeScreen;