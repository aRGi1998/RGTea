import React, { useState, useRef } from 'react';
import { Leaf, Phone, Mail, ShoppingCart, Package, ArrowRight, CheckCircle, Grid, Award, Users, Coffee, MapPin, Heart, Shield, Truck } from 'lucide-react';

// Import your logo - make sure the path matches your actual file location
import Logo from './assets/images/logo.png';

export default function RGTeaWebsite() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        product: '',
        quantity: '',
        message: ''
    });

    const [activeCategory, setActiveCategory] = useState('retail');
    const [showModal, setShowModal] = useState(false);

    const enquiryFormRef = useRef(null);

    const retailProducts = [
        {
            id: 1,
            weight: '1kg',
            price: 400,
            image: '🍃',
            popular: true
        },
        {
            id: 2,
            weight: '1/2 kg',
            price: 200,
            image: '🍃'
        },
        {
            id: 3,
            weight: '250gm',
            price: 150,
            image: '🍃'
        }
    ];


    const teaGrades = [
        {
            grade: "SRB",
            name: "Super Red Broken",
            size: "Medium",
            strength: "Strong",
            color: "Reddish",
            usage: "Hotels, Restaurants, Shops",
            description: "Perfect for commercial use with robust flavor",
            priceRange: "₹380-450/kg",
            bestFor: "Bulk brewing"
        },
        {
            grade: "SRS",
            name: "Super Red Small",
            size: "Small",
            strength: "Very Strong",
            color: "Dark",
            usage: "Milk Tea, Street Vendors",
            description: "Intense flavor ideal for milk-based preparations",
            priceRange: "₹400-480/kg",
            bestFor: "Milk tea"
        },
        {
            grade: "BP",
            name: "Broken Pekoe",
            size: "Medium-Large",
            strength: "Medium",
            color: "Light",
            usage: "Home Use, Premium Cafes",
            description: "Well-balanced for everyday consumption",
            priceRange: "₹350-420/kg",
            bestFor: "Home use"
        },
        {
            grade: "BOP",
            name: "Broken Orange Pekoe",
            size: "Medium",
            strength: "Balanced",
            color: "Amber",
            usage: "Premium Blends, Export Quality",
            description: "Highest quality with complex flavor profile",
            priceRange: "₹450-550/kg",
            bestFor: "Premium blends"
        },
        {
            grade: "Dust/PD",
            name: "Powder Dust",
            size: "Very Fine",
            strength: "Very Strong",
            color: "Dark",
            usage: "Chai Stalls, Instant Mix",
            description: "Maximum extraction for strong, quick brewing",
            priceRange: "₹320-380/kg",
            bestFor: "Commercial chai"
        },
        {
            grade: "CD",
            name: "Churamani Dust",
            size: "Very Fine",
            strength: "Very Strong",
            color: "Reddish Brown",
            usage: "Roadside Tea Stalls, Bulk Use",
            description: "Extremely strong dust tea for maximum color and taste",
            priceRange: "₹300-360/kg",
            bestFor: "Fast brewing"
        }
    ];

    const features = [
        { icon: <Award className="w-8 h-8" />, title: 'Premium Quality', description: 'Every batch of tea powder crafted with uncompromised quality' },
        { icon: <Users className="w-8 h-8" />, title: 'Bulk & Retail', description: 'Serving both wholesale and individual customers' },
        { icon: <Coffee className="w-8 h-8" />, title: 'Expert Blending', description: 'Years of experience in perfect tea blends' },
        { icon: <Grid className="w-8 h-8" />, title: 'Multiple Sizes', description: 'From powder to large broken leaves' }
    ];

    const organicFeatures = [
        {
            icon: <MapPin className="w-8 h-8" />,
            title: "Wayanad Origin",
            description: "Directly sourced from Wayanad's pristine mountains"
        },
        {
            icon: <Leaf className="w-8 h-8" />,
            title: "100% Natural",
            description: "Pure tea powder without any additives or chemicals"
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Handpicked Quality",
            description: "Carefully selected leaves for superior flavor"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Global Supply",
            description: "Supplying worldwide - bulk and small orders"
        }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const message = `
*${activeCategory === 'retail' ? 'New Order' : 'New Wholesale Enquiry'}*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Product/Grade:* ${formData.product}
*Quantity:* ${formData.quantity}
*Delivery Address & Message:* ${formData.message}

*Category:* ${activeCategory === 'retail' ? 'Retail Order' : 'Wholesale/Bulk Order'}
        `.trim();

        const whatsappLink = `https://wa.me/919497846653?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
        setShowModal(true);
    };

    const scrollToEnquiryForm = (productInfo, category = 'retail') => {
        setActiveCategory(category);

        if (productInfo) {
            setFormData(prev => ({
                ...prev,
                product: typeof productInfo === 'string' ? productInfo : `${productInfo.grade} - ${productInfo.name}`
            }));
        }

        if (enquiryFormRef.current) {
            enquiryFormRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            enquiryFormRef.current.style.transition = 'all 0.3s ease';
            enquiryFormRef.current.style.boxShadow = '0 0 0 3px rgba(34, 197, 94, 0.3)';

            setTimeout(() => {
                if (enquiryFormRef.current) {
                    enquiryFormRef.current.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                }
            }, 1500);
        }
    };

    return (
        <div className="min-h-screen bg-white font-['Inter']">
            <style>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }
                @keyframes fade-in-down {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes bounce-in {
                    0% { transform: scale(0.3); opacity: 0; }
                    50% { transform: scale(1.05); }
                    70% { transform: scale(0.9); }
                    100% { transform: scale(1); opacity: 1; }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                .animate-fade-in-down {
                    animation: fade-in-down 0.6s ease-out;
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.6s ease-out;
                }
                .animate-fade-in {
                    animation: fade-in 0.8s ease-out;
                }
                .animation-delay-200 {
                    animation-delay: 0.2s;
                    animation-fill-mode: backwards;
                }
                .animate-bounce-in {
                    animation: bounce-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                }
            `}</style>

            {/* Success Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4 backdrop-blur-sm">
                    <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 transform animate-bounce-in">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                                <CheckCircle className="w-12 h-12 text-green-600" />
                            </div>
                            <h3 className="text-3xl font-bold text-green-800 mb-4">Thank You!</h3>
                            <p className="text-lg text-green-700 mb-6">
                                Your enquiry has been sent via WhatsApp. The RGTea team will contact you soon with complete pricing details.
                            </p>
                            <button
                                onClick={() => setShowModal(false)}
                                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Header */}
            <header className="bg-white/95 backdrop-blur-xl border-b border-green-100/50 sticky top-0 z-50 shadow-lg">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img
                                src={Logo}
                                alt="RGTea Logo"
                                className="h-16 w-auto object-contain hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        <nav className="hidden md:flex items-center gap-8">
                            <a href="#products" className="text-green-800 hover:text-green-600 font-semibold transition-all duration-200 hover:scale-105 relative group">
                                Products
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
                            </a>
                            <a href="#grades" className="text-green-800 hover:text-green-600 font-semibold transition-all duration-200 hover:scale-105 relative group">
                                Tea Grades
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
                            </a>
                            <a href="#about" className="text-green-800 hover:text-green-600 font-semibold transition-all duration-200 hover:scale-105 relative group">
                                Our Story
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
                            </a>
                            <a
                                href="#enquiry"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToEnquiryForm();
                                }}
                                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Get Quote
                            </a>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50"></div>
                    <div className="absolute top-20 -left-20 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                    <div className="absolute top-40 -right-20 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-20 left-40 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-green-200 mb-8 animate-fade-in-down">
                            <Leaf className="w-5 h-5 text-green-600" />
                            <span className="text-green-800 font-semibold">Premium Tea Powder</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight animate-fade-in-up">
                            <span className="bg-gradient-to-r from-green-900 via-emerald-600 to-teal-700 bg-clip-text text-transparent drop-shadow-sm">
                                From Mountains
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-emerald-700 via-green-600 to-teal-600 bg-clip-text text-transparent drop-shadow-sm">
                                To Your Cup
                            </span>
                        </h1>

                        <p className="text-2xl text-green-800 mb-12 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in">
                            Directly sourced from the misty mountains of Wayanad. Premium tea powder
                            supplied worldwide - from bulk commercial orders to small retail packages.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-200">
                            <button
                                onClick={() => scrollToEnquiryForm()}
                                className="group bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 flex items-center justify-center gap-3 relative overflow-hidden"
                            >
                                <span className="relative z-10">Order Now</span>
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
                                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </button>
                            <a
                                href="#about"
                                className="group border-3 border-green-600 bg-white/50 backdrop-blur-sm text-green-700 hover:bg-green-600 hover:text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2"
                            >
                                Discover Our Story
                            </a>
                        </div>

                        <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-green-100 hover:scale-105 transition-transform duration-300">
                                <div className="text-4xl font-black text-green-700 mb-2">100%</div>
                                <div className="text-sm text-green-600 font-medium">Natural</div>
                            </div>
                            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-green-100 hover:scale-105 transition-transform duration-300">
                                <div className="text-4xl font-black text-green-700 mb-2">50+</div>
                                <div className="text-sm text-green-600 font-medium">Countries</div>
                            </div>
                            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-green-100 hover:scale-105 transition-transform duration-300">
                                <div className="text-4xl font-black text-green-700 mb-2">5★</div>
                                <div className="text-sm text-green-600 font-medium">Quality</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Business Story */}
            <section id="about" className="py-32 bg-gradient-to-b from-white via-emerald-50/30 to-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 px-5 py-2 rounded-full">
                                    <MapPin className="w-4 h-4 text-green-700" />
                                    <span className="text-green-800 font-semibold text-sm">Wayanad, Kerala</span>
                                </div>

                                <h2 className="text-5xl md:text-6xl font-black text-green-900 leading-tight">
                                    Direct From Mountains
                                    <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> To Your Cup</span>
                                </h2>

                                <div className="space-y-6 text-green-800 text-lg leading-relaxed">
                                    <p className="text-xl font-light">
                                        We are proud suppliers of premium tea powder directly sourced from the lush mountains
                                        of Wayanad. Our journey begins in the heart of Kerala's beautiful highlands, where
                                        the perfect climate and rich soil create tea with exceptional aroma and flavor.
                                    </p>
                                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border-l-4 border-green-600">
                                        <p className="font-semibold text-green-900 mb-2">Bulk or Small - We Cater to All!</p>
                                        <p className="text-green-700">
                                            Whether you're a large commercial buyer needing tons of tea powder or an individual
                                            looking for a small pack for home use, we've got you covered.
                                        </p>
                                    </div>
                                    <p className="font-light">
                                        From local markets to international exports, we take pride in sharing the soul of
                                        Wayanad mountains with tea lovers across the globe. Every batch is carefully processed
                                        to maintain the natural goodness and distinctive character that makes our tea special.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                {organicFeatures.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="group bg-white rounded-3xl p-8 text-center border-2 border-green-100 hover:border-green-300 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 relative overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="relative z-10">
                                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                                {feature.icon}
                                            </div>
                                            <h3 className="font-bold text-green-900 text-lg mb-3">{feature.title}</h3>
                                            <p className="text-green-600 text-sm leading-relaxed">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Why Choose RGTea</h2>
                        <p className="text-xl text-green-100 max-w-2xl mx-auto">Excellence in every aspect of our service</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl text-center"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10">
                                    <div className="w-20 h-20 bg-gradient-to-br from-white to-green-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-green-700 shadow-xl group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                                    <p className="text-green-100 leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Retail Products Section */}
            <section id="products" className="py-28 bg-gradient-to-b from-white to-emerald-50/50 relative overflow-hidden">
                <div className="absolute top-20 right-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 px-5 py-2 rounded-full mb-6">
                            <Package className="w-4 h-4 text-green-700" />
                            <span className="text-green-800 font-semibold text-sm">For Home & Small Business</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black text-green-900 mb-6">
                            Retail Products
                        </h2>
                        <p className="text-xl text-green-700 max-w-2xl mx-auto font-light">
                            Perfect for home use and small businesses. All prices exclude courier charges.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                        {retailProducts.map(product => (
                            <div
                                key={product.id}
                                className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 border-2 border-green-100 hover:border-green-300"
                            >
                                {product.popular && (
                                    <div className="absolute top-6 right-6 bg-gradient-to-r from-green-600 to-emerald-500 text-white px-4 py-2 rounded-full text-xs font-bold z-10 shadow-lg">
                                        ⭐ MOST POPULAR
                                    </div>
                                )}

                                <div className="relative bg-gradient-to-br from-green-600 via-emerald-500 to-teal-600 h-56 flex items-center justify-center overflow-hidden">
                                    <div className="text-9xl opacity-90 group-hover:scale-110 transition-transform duration-500">{product.image}</div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>

                                <div className="p-8">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center">
                                            <Package className="w-6 h-6 text-green-700" />
                                        </div>
                                        <h3 className="text-3xl font-black text-green-900">{product.weight}</h3>
                                    </div>

                                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 mb-6 border-2 border-green-200">
                                        <div className="text-center">
                                            <div className="flex items-baseline justify-center gap-1 mb-2">
                                                <span className="text-2xl text-green-600">₹</span>
                                                <span className="text-5xl font-black text-green-700">{product.price}</span>
                                            </div>
                                            <p className="text-green-600 text-sm font-medium">+ Courier charges apply</p>
                                        </div>
                                        <div className="flex items-center gap-2 mt-4 justify-center">
                                            <CheckCircle className="w-4 h-4 text-green-600" />
                                            <span className="text-xs text-green-700 font-medium">Free shipping above ₹1000</span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => scrollToEnquiryForm(product.weight, 'retail')}
                                        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                    >
                                        <ShoppingCart className="w-5 h-5" />
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="max-w-3xl mx-auto mt-16 bg-white rounded-3xl p-8 border-2 border-green-200 shadow-xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                                <Truck className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-green-900">Delivery Information</h3>
                        </div>
                        <div className="text-green-700 space-y-3 text-lg">
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span>Courier charges calculated based on weight and destination</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span>Free shipping on all orders above ₹1000</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span>Typically delivered within 3-5 business days</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span>Worldwide shipping available</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Professional Tea Grades Section */}
            <section id="grades" className="py-28 bg-white relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 px-5 py-2 rounded-full mb-6">
                            <Award className="w-4 h-4 text-green-700" />
                            <span className="text-green-800 font-semibold text-sm">Professional Grade Tea</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black text-green-900 mb-6">
                            Professional Tea Grades
                        </h2>
                        <p className="text-xl text-green-700 max-w-3xl mx-auto font-light">
                            Industry-standard tea powder grades for wholesale and commercial use worldwide.
                            All prices exclude courier charges.
                        </p>
                    </div>

                    {/* Grades Table */}
                    <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-green-200 mb-16">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 text-white">
                                        <th className="py-5 px-6 text-left font-bold text-lg">Grade</th>
                                        <th className="py-5 px-6 text-left font-bold text-lg">Name</th>
                                        <th className="py-5 px-6 text-left font-bold text-lg">Size</th>
                                        <th className="py-5 px-6 text-left font-bold text-lg">Strength</th>
                                        <th className="py-5 px-6 text-left font-bold text-lg">Price Range</th>
                                        <th className="py-5 px-6 text-left font-bold text-lg">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-green-100">
                                    {teaGrades.map((grade, index) => (
                                        <tr
                                            key={grade.grade}
                                            className="hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-200"
                                        >
                                            <td className="py-5 px-6">
                                                <span className="inline-flex items-center justify-center w-16 h-10 bg-gradient-to-br from-green-600 to-emerald-600 text-white font-bold rounded-lg shadow-lg">
                                                    {grade.grade}
                                                </span>
                                            </td>
                                            <td className="py-5 px-6">
                                                <div>
                                                    <div className="font-bold text-green-900 text-lg">{grade.name}</div>
                                                    <div className="text-sm text-green-600 font-medium">{grade.usage}</div>
                                                </div>
                                            </td>
                                            <td className="py-5 px-6 text-green-700 font-semibold">{grade.size}</td>
                                            <td className="py-5 px-6">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-md ${grade.strength.includes('Very Strong') ? 'bg-red-100 text-red-800' :
                                                    grade.strength.includes('Strong') ? 'bg-orange-100 text-orange-800' :
                                                        'bg-green-100 text-green-800'
                                                    }`}>
                                                    {grade.strength}
                                                </span>
                                            </td>
                                            <td className="py-5 px-6 font-bold text-green-800 text-lg">{grade.priceRange}</td>
                                            <td className="py-5 px-6">
                                                <button
                                                    onClick={() => scrollToEnquiryForm(grade, 'wholesale')}
                                                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                                >
                                                    Get Quote
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Wholesale Shipping Info */}
                    <div className="max-w-3xl mx-auto mb-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-2 border-green-200 shadow-xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                                <Truck className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-green-900">Global Wholesale Supply</h3>
                        </div>
                        <div className="text-green-700 space-y-3 text-lg">
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span>Bulk orders for commercial buyers worldwide</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span>Courier charges calculated based on quantity and destination</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span>Free shipping on orders above ₹5000</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span>Export quality packaging available</span>
                            </div>
                        </div>
                    </div>

                    {/* Detailed Grade Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {teaGrades.map((grade) => (
                            <div
                                key={grade.grade}
                                className="group bg-gradient-to-br from-white to-green-50 rounded-3xl p-8 border-2 border-green-200 hover:border-green-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg">
                                            {grade.grade}
                                        </div>
                                        <div>
                                            <h3 className="font-black text-green-900 text-xl">{grade.name}</h3>
                                            <p className="text-green-600 text-sm font-semibold">{grade.priceRange}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 mb-6">
                                        <div className="flex justify-between items-center bg-white/70 p-3 rounded-xl">
                                            <span className="text-green-700 font-bold">Strength:</span>
                                            <span className="text-green-900 font-semibold">{grade.strength}</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-white/70 p-3 rounded-xl">
                                            <span className="text-green-700 font-bold">Best For:</span>
                                            <span className="text-green-900 font-semibold">{grade.bestFor}</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-white/70 p-3 rounded-xl">
                                            <span className="text-green-700 font-bold">Size:</span>
                                            <span className="text-green-900 font-semibold">{grade.size}</span>
                                        </div>
                                    </div>

                                    <p className="text-green-700 text-sm mb-6 leading-relaxed">{grade.description}</p>

                                    <button
                                        onClick={() => scrollToEnquiryForm(grade, 'wholesale')}
                                        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                                    >
                                        <Mail className="w-4 h-4" />
                                        Get Wholesale Quote
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enquiry Form */}
            <section id="enquiry" ref={enquiryFormRef} className="py-28 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

                <div className="container mx-auto px-4 max-w-4xl relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2 rounded-full mb-6 shadow-lg">
                            <Mail className="w-4 h-4 text-green-700" />
                            <span className="text-green-800 font-semibold text-sm">Get Started Today</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black text-green-900 mb-6">
                            {activeCategory === 'retail' ? 'Place Your Order' : 'Wholesale Enquiry'}
                        </h2>
                        <p className="text-xl text-green-700 font-light max-w-2xl mx-auto">
                            {activeCategory === 'retail'
                                ? 'Complete your order details below - we will provide final pricing including courier charges'
                                : 'Get competitive pricing for bulk orders worldwide - courier charges calculated based on quantity and location'
                            }
                        </p>
                        {formData.product && (
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 px-5 py-2 rounded-full text-sm font-bold mt-6 shadow-lg">
                                <Package className="w-4 h-4 text-green-700" />
                                Selected: {formData.product}
                            </div>
                        )}
                    </div>

                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-green-200 transition-all duration-500">
                        <div className="p-10 lg:p-12">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-green-900 font-bold mb-3 text-lg">Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-5 py-4 border-2 border-green-200 rounded-xl focus:border-green-500 focus:outline-none focus:ring-4 focus:ring-green-100 transition-all duration-200 text-lg"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-green-900 font-bold mb-3 text-lg">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-5 py-4 border-2 border-green-200 rounded-xl focus:border-green-500 focus:outline-none focus:ring-4 focus:ring-green-100 transition-all duration-200 text-lg"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-green-900 font-bold mb-3 text-lg">Phone *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-5 py-4 border-2 border-green-200 rounded-xl focus:border-green-500 focus:outline-none focus:ring-4 focus:ring-green-100 transition-all duration-200 text-lg"
                                        placeholder="Your phone number"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-green-900 font-bold mb-3 text-lg">
                                            {activeCategory === 'retail' ? 'Product *' : 'Tea Grade *'}
                                        </label>
                                        {activeCategory === 'retail' ? (
                                            <select
                                                name="product"
                                                value={formData.product}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-5 py-4 border-2 border-green-200 rounded-xl focus:border-green-500 focus:outline-none focus:ring-4 focus:ring-green-100 transition-all duration-200 text-lg"
                                            >
                                                <option value="">Select a product</option>
                                                <option value="1kg">1kg - ₹400 + courier charges</option>
                                                <option value="1/2 kg">1/2 kg - ₹200 + courier charges</option>
                                                <option value="250gm">250gm - ₹150 + courier charges</option>
                                            </select>
                                        ) : (
                                            <select
                                                name="product"
                                                value={formData.product}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-5 py-4 border-2 border-green-200 rounded-xl focus:border-green-500 focus:outline-none focus:ring-4 focus:ring-green-100 transition-all duration-200 text-lg"
                                            >
                                                <option value="">Select a tea grade</option>
                                                {teaGrades.map(grade => (
                                                    <option key={grade.grade} value={`${grade.grade} - ${grade.name}`}>
                                                        {grade.grade} - {grade.name} ({grade.priceRange} + courier charges)
                                                    </option>
                                                ))}
                                            </select>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-green-900 font-bold mb-3 text-lg">Quantity *</label>
                                        <input
                                            type="number"
                                            name="quantity"
                                            value={formData.quantity}
                                            onChange={handleInputChange}
                                            required
                                            min="1"
                                            className="w-full px-5 py-4 border-2 border-green-200 rounded-xl focus:border-green-500 focus:outline-none focus:ring-4 focus:ring-green-100 transition-all duration-200 text-lg"
                                            placeholder={activeCategory === 'retail' ? "Number of packs" : "Weight in kg"}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-green-900 font-bold mb-3 text-lg">Delivery Address & Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="5"
                                        className="w-full px-5 py-4 border-2 border-green-200 rounded-xl focus:border-green-500 focus:outline-none focus:ring-4 focus:ring-green-100 transition-all duration-200 resize-none text-lg"
                                        placeholder="Please provide your complete delivery address for courier charge calculation and any special requirements..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 text-white font-black py-5 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 text-lg"
                                >
                                    {activeCategory === 'retail' ? 'Get Complete Pricing' : 'Get Worldwide Quote'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-28 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl font-black mb-6">Get In Touch</h2>
                        <p className="text-2xl text-green-100 max-w-2xl mx-auto font-light">
                            Direct suppliers from Wayanad to the world. Contact us for bulk orders and business partnerships worldwide.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
                                <div className="space-y-6">
                                    <a href="tel:+919497846653" className="flex items-center gap-5 hover:text-green-200 transition-all duration-300 group p-5 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20">
                                        <div className="bg-gradient-to-br from-green-600 to-emerald-600 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-xl">
                                            <Phone className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <p className="text-green-200 text-sm font-medium">Phone</p>
                                            <p className="text-2xl font-bold">+91 9497846653</p>
                                        </div>
                                    </a>

                                    <a href="mailto:rgtea2025@gmail.com" className="flex items-center gap-5 hover:text-green-200 transition-all duration-300 group p-5 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20">
                                        <div className="bg-gradient-to-br from-green-600 to-emerald-600 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-xl">
                                            <Mail className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <p className="text-green-200 text-sm font-medium">Email</p>
                                            <p className="text-2xl font-bold">rgtea2025@gmail.com</p>
                                        </div>
                                    </a>

                                    <div className="flex items-center gap-5 p-5 bg-white/10 backdrop-blur-sm rounded-2xl">
                                        <div className="bg-gradient-to-br from-green-600 to-emerald-600 p-4 rounded-xl shadow-xl">
                                            <MapPin className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <p className="text-green-200 text-sm font-medium">Origin</p>
                                            <p className="text-2xl font-bold">Wayanad, Kerala</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border-2 border-white/20 shadow-2xl">
                                <h4 className="text-3xl font-bold mb-6">Why Choose RGTea?</h4>
                                <div className="space-y-4 text-green-100 text-lg">
                                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300">
                                        <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                                        <span className="font-medium">Direct from Wayanad Mountains</span>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300">
                                        <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                                        <span className="font-medium">Bulk & Small Orders Welcome</span>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300">
                                        <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                                        <span className="font-medium">Worldwide Shipping</span>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300">
                                        <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                                        <span className="font-medium">Competitive Pricing</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gradient-to-b from-green-950 to-black text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <p className="text-green-300 text-lg mb-4">© 2025 RGTea. All rights reserved.</p>
                        <p className="text-green-400 text-xl font-bold">SIP THE SOUL OF THE MOUNTAINS</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}