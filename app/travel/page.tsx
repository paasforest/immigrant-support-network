import TravelCard from '@/components/TravelCard';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plane, Hotel, Briefcase } from 'lucide-react';

export const metadata = {
  title: 'Travel Deals | Immigrant Support Network',
  description: 'Exclusive travel deals for flights, hotels, and tour packages. Find the best prices for your journey abroad.',
};

export default function TravelPage() {
  const flights = [
    {
      title: 'Johannesburg to London',
      type: 'Flight',
      price: 'from R12,500',
      description: 'Direct flights with major airlines. Multiple departure times available. Book now for best rates.',
      affiliateLink: 'https://www.skyscanner.net',
      imageUrl: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Cape Town to Toronto',
      type: 'Flight',
      price: 'from R15,800',
      description: 'Connect to Canada via major hubs. Find the best connections and prices for your route.',
      affiliateLink: 'https://www.skyscanner.net',
      imageUrl: 'https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Durban to Sydney',
      type: 'Flight',
      price: 'from R18,900',
      description: 'Fly to Australia with competitive rates. Multiple airline options and flexible dates.',
      affiliateLink: 'https://www.skyscanner.net',
      imageUrl: 'https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const hotels = [
    {
      title: 'London Central Hotels',
      type: 'Hotel',
      price: 'from £80/night',
      description: 'Central London accommodation with easy access to transport. Perfect for business or leisure.',
      affiliateLink: 'https://www.booking.com',
      imageUrl: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Toronto Downtown Suites',
      type: 'Hotel',
      price: 'from CAD 120/night',
      description: 'Modern suites in the heart of Toronto. Ideal for new arrivals and extended stays.',
      affiliateLink: 'https://www.booking.com',
      imageUrl: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Melbourne City Hotels',
      type: 'Hotel',
      price: 'from AUD 140/night',
      description: 'Quality accommodation near Melbourne CBD. Great for job seekers and professionals.',
      affiliateLink: 'https://www.booking.com',
      imageUrl: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const tours = [
    {
      title: 'UK Relocation Package',
      type: 'Package',
      price: 'from £1,200',
      description: 'Complete relocation package including airport pickup, temporary accommodation, and city orientation tour.',
      affiliateLink: 'https://www.viator.com',
      imageUrl: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Canada Welcome Tour',
      type: 'Package',
      price: 'from CAD 1,500',
      description: 'Comprehensive welcome package with housing assistance, banking setup, and local area tours.',
      affiliateLink: 'https://www.viator.com',
      imageUrl: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Australia Starter Package',
      type: 'Package',
      price: 'from AUD 1,800',
      description: 'Essential services for new arrivals including SIM card, transport card, and guided city tour.',
      affiliateLink: 'https://www.viator.com',
      imageUrl: 'https://images.pexels.com/photos/995765/pexels-photo-995765.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Travel Deals</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Exclusive deals on flights, accommodation, and relocation packages
          </p>
        </div>
      </header>

      <main className="flex-grow bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="flights" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="flights" className="flex items-center gap-2">
                <Plane className="h-4 w-4" />
                Flights
              </TabsTrigger>
              <TabsTrigger value="hotels" className="flex items-center gap-2">
                <Hotel className="h-4 w-4" />
                Hotels
              </TabsTrigger>
              <TabsTrigger value="packages" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                Packages
              </TabsTrigger>
            </TabsList>

            <TabsContent value="flights">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Flight Deals</h2>
                <p className="text-slate-600">
                  Compare and book flights to your destination country
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {flights.map((flight, index) => (
                  <TravelCard key={index} {...flight} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="hotels">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Hotel Deals</h2>
                <p className="text-slate-600">
                  Find accommodation for your arrival and stay
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hotels.map((hotel, index) => (
                  <TravelCard key={index} {...hotel} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="packages">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Relocation Packages</h2>
                <p className="text-slate-600">
                  Complete packages to help you settle in your new country
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tours.map((tour, index) => (
                  <TravelCard key={index} {...tour} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Partner Disclosure</h3>
            <p className="text-blue-800 text-sm">
              We partner with trusted travel providers to bring you the best deals. When you book through our affiliate links,
              we may earn a small commission at no extra cost to you. This helps us continue providing free immigration
              guidance and support services.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
