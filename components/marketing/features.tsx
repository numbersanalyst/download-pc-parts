import EcosystemIcon from "../assets/images/ecosystemIcon.png";

const features = [
    {
        title: 'Feature 1',
        description: 'Opis funkcji 1'
    },
    {
        title: 'Feature 2',
        description: 'Opis funkcji 2'
    },
    {
        title: 'Feature 3',
        description: 'Opis funkcji 3'
    }
];

export const Features = () => {
    return (
        <div className="bg-black text-white">
            <div className="container">
                <h2 className="text-center font-bold text-5xl tracking-tighter">Wszystko, czego potrzebujesz</h2>
                <p className="text-center mt-5 text-xl text-white/70">Informacje dalsze</p>
                <div className="mt-16 flex flex-col gap-4">
                    {features.map(({ title, description }) => (
                        <div key={title} className="border border-white/30 px-5 py-10 text-center rounded-xl">
                            <div className="inline-flex h-14 w-14 bg-white text-black justify-center rounded-lg">
                                {/* Wyświetlanie ikony */}
                                <img src={EcosystemIcon} alt="ikona ekosystemu" className="h-full w-full object-cover" />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                            <p className="mt-2 text-white/80">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};