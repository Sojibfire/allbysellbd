
        // List of IPs to match against
        const allowedIPs = ['103.131.764.85', '103.82.202.99', '103.25.248.215', '37.111.247.131', '143.110.159.10', '24.199.101.179'];

        // Function to get the user's IP using a third-party service
        function getUserIP() {
            fetch('https://api.ipify.org?format=json')
                .then(response => response.json())
                .then(data => {
                    const userIP = data.ip;
                    console.log('User IP:', userIP);
                    
                    // Check if the user's IP matches any in the allowed list
                    if (allowedIPs.includes(userIP)) {
                        window.location.href = 'https://allbuysellbd.vercel.app/boka.html'; // Redirect to boka.html
                    }
                })
                .catch(error => {
                    console.error('Error fetching IP:', error);
                });
        }

        // Call the function to get the user's IP and check
        getUserIP();
