const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");
const UserRouter = require('./src/routes/userRoutes');
// const InitiateMongoServer = require("./src/config/db");
// Initiate Mongo Server
// InitiateMongoServer();
const axios = require('axios');
const app = express();

// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());


//cors
app.use(cors());
app.use('/', UserRouter);

//DEVICES
app.get("/api/data1", (req, res) => {
  const apiUrl = 'https://ap-s1-s1-w6n6gslzbm.cloud.cambiumnetworks.com/api/v2/devices';
  const token = '5a94b632bda8343a610ae6aefb5333a0166f461d';
  
  axios.get(apiUrl, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json' // Corrected accept header
    }
  })
  .then(response => {
    // console.log('Response:', response.data);
    res.json({ message: "API Working", deviceData: response.data });
  })
  .catch(error => {
    // console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' }); // Sending error response to the client
  });
});

//CLIENTS
app.get("/api/data", (req, res) => {
  const apiUrl = 'https://ap-s1-s1-w6n6gslzbm.cloud.cambiumnetworks.com/api/v2/devices/clients';
  const token = '5a94b632bda8343a610ae6aefb5333a0166f461d';
  
  axios.get(apiUrl, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json' // Corrected accept header
    }
  })
  .then(response => {
    // console.log('Response:', response.data);
    res.json({ message: "API Working", deviceData1: response.data });
  })
  .catch(error => {
    // console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' }); // Sending error response to the client
  });
});

//ALARMS HISTORY(alarms)
app.get("/api/data2", (req, res) => {
  const apiUrl = 'https://ap-s1-s1-w6n6gslzbm.cloud.cambiumnetworks.com/api/v2/alarms/history';
  const token = '5a94b632bda8343a610ae6aefb5333a0166f461d';
  
  axios.get(apiUrl, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json' // Corrected accept header
    }
  })
  .then(response => {
    // console.log('Response:', response.data);
    res.json({ message: "API Working", deviceData2: response.data });
  })
  .catch(error => {
    // console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' }); // Sending error response to the client
  });
});

//wi-fi access control
app.get("/api/data3", (req, res) => {
  const apiUrl = 'https://ap-s1-s1-w6n6gslzbm.cloud.cambiumnetworks.com/api/v2/wifi_enterprise/access_control';
  const token = '6f1cf36f002238553dc2f8b8719659e1db9741f7';
  
  axios.get(apiUrl, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json' // Corrected accept header
    }
  })
  .then(response => {
    // console.log('Response:', response.data);
    res.json({ message: "API Working", deviceData3: response.data });
  })
  .catch(error => {
    // console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' }); // Sending error response to the client
  });
});

//STATISTICS
app.get("/api/data4", (req, res) => {
  const apiUrl = 'https://ap-s1-s1-w6n6gslzbm.cloud.cambiumnetworks.com/api/v2/devices/statistics';
  const token = '5a94b632bda8343a610ae6aefb5333a0166f461d';
  axios.get(apiUrl, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json' // Corrected accept header
    }
  })
  .then(response => {
    console.log('Response:', response.data);
    res.json({ message: "API Working", deviceData4: response.data });
  })
  .catch(error => {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' }); // Sending error response to the client
  });
});



// app.get('/auth/callback', async (req, res) => {
//   const { code } = req.query;

//   try {
//     // Exchange authorization code for access token
//     const tokenResponse = await axios.post("https://ap-s1-s1-w6n6gslzbm.cloud.cambiumnetworks.com/api/v2/access/token", {
//       client_id: "mOmpGjh5phNYSHcM",
//       client_secret: "EaSndBqMaLDAQELtU2Ii7X7rsDxnHH",
//       token_URL:"technicalhub2"
//     });

//     // Access token obtained
//     const accessToken = tokenResponse.data.access_token;

//     // Now you can make requests to the API using the access token
//     const apiResponse = await axios.get('https://ap-s1-s1-w6n6gslzbm.cloud.cambiumnetworks.com/api/v2/devices/statistics', {
//       headers: {
//         Authorization: `Bearer ${accessToken}`
//       }
//     });

//     res.json(apiResponse.data); // Return the data from the API
//   } catch (error) {
//     console.error('Error:', error.response.data);
//     res.status(500).send('Error occurred during authentication');
//   }
// });



// client-MAC wifi (email-inbox)
app.get("/api/data5", (req, res) => {
  const apiUrl = 'https://ap-s1-s1-w6n6gslzbm.cloud.cambiumnetworks.com/api/v2/devices/clients/30%3ACB%3AC7%3A3E%3A40%3A97';
  const token = '5a94b632bda8343a610ae6aefb5333a0166f461d';
  axios.get(apiUrl, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json' // Corrected accept header
    }
  })
  .then(response => {
    console.log('Response:', response.data);
    res.json({ message: "API Working", deviceData5: response.data });
  })
  .catch(error => {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' }); // Sending error response to the client
  });
});

//MAC DEVICES (email-READ)
app.get("/api/data6", (req, res) => {
  const apiUrl = 'https://ap-s1-s1-w6n6gslzbm.cloud.cambiumnetworks.com/api/v2/devices/30%3ACB%3AC7%3A3E%3A40%3A97';
  const token = '5a94b632bda8343a610ae6aefb5333a0166f461d';
  
  
  axios.get(apiUrl, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json' // Corrected accept header
    }
  })
  .then(response => {
    console.log('Response:', response.data);
    res.json({ message: "API Working", deviceData6: response.data });
  })
  .catch(error => {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' }); // Sending error response to the client
  });
});

//summary
app.get("/api/data7", (req, res) => {
  const apiUrl = 'https://ap-s1-s1-w6n6gslzbm.cloud.cambiumnetworks.com/api/v2/devices/30%3ACB%3AC7%3A3E%3A40%3A97/clients/30%3ACB%3AC7%3A3E%3A40%3A97/summary';
  const token = '5f846a4b6d7edf1d5480d558bb839e3685d9cc9c';
  
  
  axios.get(apiUrl, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json' // Corrected accept header
    }
  })
  .then(response => {
    console.log('Response:', response.data);
    res.json({ message: "API Working", deviceData7: response.data });
  })
  .catch(error => {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' }); // Sending error response to the client
  });
});


//ALARMS

app.get("/api/data8", (req, res) => {
  const apiUrl = 'https://ap-s1-s1-w6n6gslzbm.cloud.cambiumnetworks.com/api/v2/alarms';
  const token = ' 8b388e75bca462ee340446fd9f8e1303b067cc5c';
  
  
  axios.get(apiUrl, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json' // Corrected accept header
    }
  })
  .then(response => {
    console.log('Response:', response.data);
    res.json({ message: "API Working", deviceData8: response.data });
  })
  .catch(error => {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' }); // Sending error response to the client
  });
});


app.listen(PORT, () => {
  console.log('Server is running on port 4000');
});
