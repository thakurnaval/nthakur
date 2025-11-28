import React from 'react';
import { Camera, MapPin } from 'lucide-react';
import Section from '../components/Section';

const Gallery: React.FC = () => {
  const images = [
    { id: 101, title: 'Keynote at DevOps World', location: 'San Francisco' },
    { id: 102, title: 'Workshop Session', location: 'London' },
    { id: 103, title: 'Team Brainstorming', location: 'Bangalore' },
    { id: 104, title: 'Panel Discussion', location: 'Singapore' },
    { id: 105, title: 'Cloud Summit', location: 'New York' },
    { id: 106, title: 'Mentoring Session', location: 'Remote' },
    { id: 107, title: 'Hackathon Judge', location: 'Berlin' },
    { id: 108, title: 'Community Meetup', location: 'Mumbai' },
  ];

  return (
    <>
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl text-slate-100 max-w-2xl">
            Moments from conferences, workshops, and community events around the globe.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl shadow-lg bg-slate-100 dark:bg-slate-800 aspect-[4/3]">
              <img
                src={`https://picsum.photos/seed/${img.id}/800/600`}
                srcSet={`https://picsum.photos/seed/${img.id}/400/300 400w, https://picsum.photos/seed/${img.id}/800/600 800w`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                width="800"
                height="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg mb-1 flex items-center">
                    <Camera size={16} className="mr-2 text-secondary" />
                    {img.title}
                  </h3>
                  <p className="text-slate-300 text-sm flex items-center">
                    <MapPin size={14} className="mr-1" />
                    {img.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Gallery;