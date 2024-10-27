import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from 'next/link';
import Image from 'next/image';

// Assuming you have these icons in your project
import { Home, Users, BarChart2, Award, Info } from 'lucide-react';

// Dynamic tech pattern component
const TechPattern = () => (
  <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
);

export default function Home() {
  const [activePage, setActivePage] = useState('home');

  const menuItems = [
    { name: 'Dashboard', icon: Home },
    { name: 'Communities', icon: Users },
    { name: 'Achievements', icon: Award },
    { name: 'About Us', icon: Info },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <TechPattern />
      
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Itech Community</h1>
        <Image
          src="/zetech-logo.png" // Make sure to add the Zetech University logo to your public folder
          alt="Zetech University Logo"
          width={100}
          height={50}
        />
      </header>

      {/* Main content */}
      <main className="container mx-auto mt-8 p-4">
        {/* Menu */}
        <nav className="mb-8">
          <ul className="flex space-x-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Button
                  variant={activePage === item.name.toLowerCase() ? "default" : "outline"}
                  onClick={() => setActivePage(item.name.toLowerCase())}
                  className="flex items-center space-x-2"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Dashboard placeholder */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Welcome to Itech Community</h2>
          <p className="text-gray-600 mb-4">
            Explore our vibrant tech community, track your achievements, and stay updated with our latest events and projects.
          </p>
          <Link href="/communities">
            <Button>Explore Communities</Button>
          </Link>
        </Card>
      </main>
    </div>
  );
}

// Note: You'll need to create separate pages for each community and link them properly.
// For example, pages/communities/index.js for the list of communities,
// and pages/communities/[id].js for individual community pages.

// Example of a community page structure (create this in pages/communities/[id].js):
/*
export default function CommunityPage({ community }) {
  return (
    <div>
      <h1>{community.name}</h1>
      <section>
        <h2>Paraphernalia</h2>
        <ul>{community.paraphernalia.map(item => <li key={item}>{item}</li>)}</ul>
      </section>
      <section>
        <h2>Achievements</h2>
        <ul>{community.achievements.map(achievement => <li key={achievement}>{achievement}</li>)}</ul>
      </section>
      <section>
        <h2>Leaders</h2>
        <ul>{community.leaders.map(leader => <li key={leader}>{leader}</li>)}</ul>
      </section>
      <section>
        <h2>Aims and Goals</h2>
        <p>{community.aims}</p>
        <p>{community.goals}</p>
      </section>
      <section>
        <h2>Future Projections</h2>
        <p>{community.futureProjections}</p>
      </section>
    </div>
  );
}

export async function getStaticPaths() {
  // Fetch all community IDs and return them as paths
}

export async function getStaticProps({ params }) {
  // Fetch the specific community data based on the ID (params.id)
}
