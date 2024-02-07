const axios = require('axios');

const Solution = async () => {
  try {
    // Write your code here
    const response = await axios.get('https://api.codingninjas.com/api/v3/event_tags');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

Solution();
module.exports = Solution;
