// get
const getMyRestaurantRequest = createAsyncThunk(
    "myRestaurant/getMyRestaurantRequest",
    async (payload) => {
      const { token } = payload;
  
      const headers = {
        Authorization: `Bearer ${token}`,
      };
  
      try {
        const response = await fetch(`${API_BASE_URL}/api/my/restaurant/getMyRestaurant`, {
          headers: {
            ...headers,
          },
        });
  
        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(errorMessage || "An unknown error occurred");
        }
  
        const data = await response.json();
        return data;
      } catch (error) {
        throw new Error(error.message || "An unknown error occurred");
      }
    }
  );
  


// post
const createNewRestaurantAction = createAsyncThunk(
    "myRestaurant/createNewRestaurantAction",
    async (payload) => {
      const { token, formData } = payload;
  
      const headers = {
        Authorization: `Bearer ${token}`,
      };
  
      try {
        const response = await fetch(`${API_BASE_URL}/api/my/restaurant/createNewRestaurant`, {
          method: 'POST',
          headers: {
            ...headers,
          },
          body: formData,
        });
  
        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(errorMessage || "An unknown error occurred");
        }
  
        const data = await response.json();
        return data;
      } catch (error) {
        throw new Error(error.message || "An unknown error occurred");
      }
    }
  );
  