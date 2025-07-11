const ImpactAchievements = () => {
  return (
    <section className="bg-primary-light py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-secondary-dark mb-8 text-center">Our Impact & Achievements</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-primary-dark mb-2">10,000+</div>
            <p className="text-gray-700">Young climate advocates mobilized</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-primary-dark mb-2">15+</div>
            <p className="text-gray-700">Renewable energy projects piloted</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-primary-dark mb-2">5+</div>
            <p className="text-gray-700">Global forums represented</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-primary-dark mb-2">20+</div>
            <p className="text-gray-700">Partnerships established</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactAchievements;