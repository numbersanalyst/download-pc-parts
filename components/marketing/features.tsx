const features = [
    {
        title: 'Feature 1',
        description: 'Description of feature 1'
    },
    {
        title: 'Feature 2',
        description: 'Description of feature 2'
    },
    {
        title: 'Feature 3',
        description: 'Description of feature 3'
    }
];

export const Features = () => {
    return (
        <div className="bg-black text-white">
            <div className="container">
                <h2>Everything you need</h2>
                <p>Informacje dalsze</p>
                <div className="features-list">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-item">
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};