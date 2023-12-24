export const FetchCountriesData = async () => {
  try {
    const response = await fetch(
      `http://localhost:5000/data?page=1&limit=20&countryName=`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const countryData = await response.json();
    return countryData;
  } catch (error) {
    console.error('Error fetching countriesData:', error);
    throw error;
  }
};
