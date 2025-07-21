import { useState, useEffect } from 'react';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const sliderImages = [
        "https://img.hotstar.com/image/upload/v1737554969/web-assets/prod/images/rebrand/logo.png",
        "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
        "https://picsum.photos/id/103/2592/1936",
        "https://picsum.photos/id/104/3840/2160"
    ];

    const products = [
        { id: 1, title: "The Mandalorian", genre: "Sci-Fi", rating: "4.8", image: "https://picsum.photos/seed/picsum/200/300" },
        { id: 2, title: "Loki", genre: "Superhero", rating: "4.7", image: "https://picsum.photos/200/300?grayscale" },
        { id: 3, title: "WandaVision", genre: "Drama", rating: "4.9", image: "https://picsum.photos/200/300/?blur" },
        { id: 4, title: "The Falcon", genre: "Action", rating: "4.6", image: "https://picsum.photos/200/300.jpg" },
        { id: 5, title: "Hawkeye", genre: "Action", rating: "4.5", image: "https://picsum.photos/id/0/5000/3333" },
        { id: 6, title: "Moon Knight", genre: "Superhero", rating: "4.4", image: "https://picsum.photos/id/0/5000/3333" }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [sliderImages.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
    };

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Hero Section with Image Slider */}
            <section className="relative" style={{ height: '500px' }}>
                <div className="relative h-full">
                    {sliderImages.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${
                                index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                        </div>
                    ))}
                    
                    {/* Slider Controls */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                    >
                        ←
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                    >
                        →
                    </button>

                    {/* Slide Indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {sliderImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full ${
                                    index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                                }`}
                            ></button>
                        ))}
                    </div>

                    {/* Hero Content */}
                    <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                        <div>
                            <h1 className="text-5xl font-bold mb-4">Welcome to Hotstar GPT</h1>
                            <p className="text-xl mb-6">Your AI-powered entertainment companion</p>
                            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                                Start Watching
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Shows Section */}
            <section className="py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Shows</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <div key={product.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-white mb-2">{product.title}</h3>
                                    <p className="text-gray-400 mb-2">{product.genre}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-yellow-400">★ {product.rating}</span>
                                        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors">
                                            Watch Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-12 px-4 bg-gray-800">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Browse Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['Action', 'Drama', 'Comedy', 'Sci-Fi', 'Horror', 'Romance', 'Documentary', 'Kids'].map((category) => (
                            <div key={category} className="bg-gray-700 rounded-lg p-6 text-center hover:bg-gray-600 transition-colors cursor-pointer">
                                <h3 className="text-white font-semibold">{category}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;