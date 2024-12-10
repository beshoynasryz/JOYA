import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '../axios'; // Assuming axiosInstance is used for API requests
import Sidebar from '../component/DashboredCompnents/SideBar';
import { useState } from 'react';

// Fetch function for properties
const fetchProperties = async () => {
  const response = await axiosInstance.get('/property'); // Adjust API endpoint as needed
  return response.data;
};

// Delete function for property
const deleteProperty = async (propertyId) => {
  const response = await axiosInstance.delete(`/property/${propertyId}`);
  return response.data;
};

function PropertiesPage() {
  // State for search query and selected type filter
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery({
    queryKey: ['property'],
    queryFn: fetchProperties,
  });

  const mutation = useMutation({
    mutationFn: deleteProperty,
    onSuccess: () => {
      // Refetch properties after a successful delete
      queryClient.invalidateQueries(['property']);
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Filter the properties based on the search query and type filter
  const filteredProperties = data.filter((property) => {
    // Ensure description is defined before calling .toLowerCase()
    const description = property.description ? property.description.toLowerCase() : '';

    // Filter by search query (description or any other field)
    const matchesSearch = description.includes(searchQuery.toLowerCase());

    // Filter by selected type
    const matchesType = selectedType === 'all' || property.type === selectedType;

    return matchesSearch && matchesType;
  });
  const baseURL = "https://sleepy-blinnie-beshoynasry-2859766e.koyeb.app";

  return (
    <div className="flex min-h-screen bg-[#111612] text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">PROPERTIES</h1>
        </div>

        {/* Search Bar and Filter */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search For Properties"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 w-64 rounded-md bg-[#1a1f1e] text-white border border-[#3d6a64] focus:outline-none placeholder-[#9da5a4]"
            />
          </div>
          <div>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="p-2 rounded-md bg-[#1a1f1e] text-white border border-[#3d6a64]"
            >
              <option value="all">All Types</option>
              <option value="luxury">Luxury</option>
              <option value="feature">Feature</option>
              <option value="offplan">Off Plan</option>
            </select>
          </div>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProperties.length === 0 ? (
            <div>No properties found</div> // Handle empty data scenario
          ) : (
            filteredProperties.map((property) => (
              <div key={property._id} className="bg-[#1a1f1e] rounded-lg shadow-md overflow-hidden">
                <img
                  src={`${baseURL}${property.imageProperty}`} 
                  alt={property.location} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-lg font-semibold">{property.location || 'No location'}</p> {/* Use location or fallback */}
                  <p className="text-sm text-gray-400 mt-2">
                    {/* Check if description is valid */}
                    {property.description ? property.description.slice(0, 100) + '...' : 'No description available'}
                  </p>
                  <div className="flex justify-end mt-4">
                    <button
                      onClick={() => mutation.mutate(property._id)} // Trigger delete on click
                      className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                      title="Delete Property"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default PropertiesPage;
