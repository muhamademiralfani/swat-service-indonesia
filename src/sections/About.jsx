import React from 'react';

const About = () => {
  const values = [
    { icon: 'fa-heart', title: 'Moralitas' },
    { icon: 'fa-user-tie', title: 'Profesional' },
    { icon: 'fa-handshake', title: 'Trust' },
    { icon: 'fa-shield-check', title: 'Integritas' },
    { icon: 'fa-bolt', title: 'Kapabilitas' }
  ];

  return (
    <>
      {/* Core Values Section */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {values.map((val, idx) => (
              <div key={idx} className={`p-4 group ${idx === 4 ? 'col-span-2 md:col-span-1' : ''}`}>
                <div className="w-16 h-16 mx-auto bg-blue-50 text-swat-blue rounded-full flex items-center justify-center text-2xl mb-4 group-hover:bg-swat-red group-hover:text-white transition duration-300">
                  <i className={`fa-solid ${val.icon}`}></i>
                </div>
                <h3 className="font-bold text-swat-blue">{val.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section id="tentang" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-swat-red font-bold tracking-wider uppercase text-sm mb-2">Profil Perusahaan</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-swat-blue">Mengenal PT. SSI Lebih Dekat</h3>
            <div className="w-24 h-1 bg-swat-red mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h4 className="text-2xl font-bold text-swat-blue mb-4">Pendahuluan</h4>
              <p className="text-gray-600 mb-4 leading-relaxed text-justify">
                Berdiri pada tahun 2023, PT. Swat Service Indonesia berada dibawah arahan direksi, tenaga, serta pelatih profesional dengan <strong>pengalaman lebih dari 10 tahun</strong> khususnya dibidang pelayanan keamanan, kebersihan, dan pengelolaan parkir.
              </p>
              <p className="text-gray-600 leading-relaxed text-justify">
                Kami mengembangkan solusi strategis yang fleksibel untuk memenuhi kebutuhan user, dikombinasikan dengan perencanaan yang dipadukan dengan tenaga profesional.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-swat-red hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-50 text-swat-red rounded-full flex items-center justify-center text-xl mr-4">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                  <h4 className="text-xl font-bold text-swat-blue">Visi Kami</h4>
                </div>
                <p className="text-gray-600">Menjadi perusahaan pelayanan terbaik serta memiliki standart internasional dan terpercaya.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-swat-blue hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-50 text-swat-blue rounded-full flex items-center justify-center text-xl mr-4">
                    <i className="fa-solid fa-bullseye"></i>
                  </div>
                  <h4 className="text-xl font-bold text-swat-blue">Misi Kami</h4>
                </div>
                <p className="text-gray-600">Menciptakan suatu standart pelayanan melalui peningkatan kualitas dan memberikan rasa aman dan nyaman.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;