import { motion } from "framer-motion";
import { personalInterests } from "../data/content";
import { Book, Globe, Gamepad2, Camera } from "lucide-react";

const iconMap = {
    reading: Book,
    travel: Globe,
    gaming: Gamepad2,
    photography: Camera,
    music: Gamepad2, // Fallback
    other: Globe, // Fallback
};

export function Personal() {
    return (
        <section id="personal" className="py-20 bg-white dark:bg-[#0A0E1A] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-gray-900 dark:text-white">
                        Beyond the <span className="text-cyan-500">Code</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl font-light">
                        When I'm not building products, I'm exploring new worlds—both real and fictional.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {personalInterests.map((interest, index) => {
                        const Icon = iconMap[interest.category];
                        return (
                            <motion.div
                                key={interest.id}
                                initial={{ opacity: 1, y: 0 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`group relative overflow-hidden rounded-2xl aspect-square ${index === 0 || index === 3 ? "md:col-span-2 md:row-span-1" : ""
                                    }`}
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src={interest.image}
                                        alt={interest.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 p-6 w-full">
                                    <div className="flex items-center gap-2 mb-2 text-cyan-400">
                                        <Icon className="w-5 h-5" />
                                        <span className="text-sm font-bold uppercase tracking-wider font-accent">
                                            {interest.category}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2 font-display">
                                        {interest.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm line-clamp-2 group-hover:line-clamp-none transition-all">
                                        {interest.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
