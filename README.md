# minimal_hotel_management_system

Description:  This is a minimal hotel management which allows people to add a user, find a user and update user details.

# Hoe to run the project:
1. npm install" - This will install all the required dependencies
2. "npm start" or "node bin/www" - will start the server by default in 3003 port.
3. "PORT=3000 npm start" - Set enviornment variable PORT to given port and start the server in given port.
# Assumptions:
1. I have used in memory to store the data hence it will flush all data upon restart.
2. I have not written any unit test cases. If required let me know will write the same.
3. I have not covered all edge cases and validation checks for input parameters.
4. Tried my best to handle error cases.
# Hotel services:
1. I have used hotelLayout.json file to initialize no of rooms, no of room types and prices for each room type. Also the same can be done by taking input from the user.
2. Upon checking rooms availability and/or upon doing a checkin for a room along with room type it initializes the hotel layout and do the needful.

# APIS
1. Get available Rooms: GET: http://localhost:3003/rooms/:availability
availability: true -> It will return all avaiable rooms with room type wise.
2. Create a User: POST: http://localhost:3003/users
Headers: 
Content-Type : application/json
body: {
	"name" : "manas",
	"idNo": "AYPPM2891M",
	"idType" : "PANCARD",
	"address": "NIGAM NAGAR 5th lane"
}
It will create a user.
Response: 200 and created user
{
    "id": 2,
    "name": "manas",
    "idNo": "AYPPM2891M",
    "idType": "PANCARD",
    "address": "NIGAM NAGAR 5th lane"
}
404: if user is not cretaed because of some error.
3. Get User details by Id of the user: GET: http://localhost:3003/users/:id
id: userid of the user
Response:
200 and user details if found
404 if the user not found
Example:
http://localhost:3003/users/1
{
    "id": 1,
    "name": "manas",
    "idNo": "AYPPM2891M",
    "idType": "PANCARD",
    "address": "NIGAM NAGAR 5th lane"
}
Failure:
http://localhost:3003/users/3
{
    "status": "FAILURE",
    "error": "user not found"
}
4. Update a user by providing its id: PUT: http://localhost:3003/users/id
Headers: 
Content-Type : application/json
body: {
	"name" : "manas",
	"idNo": "AYPPM2891M",
	"idType" : "PANCARD",
	"address": "NIGAM NAGAR 5th lane-fnaklnm"
}
Response 200 if the update successful
404 if it fails
5. Checkin to a hotel by a user: POST: http://localhost:3003/rooms/checkin/:hotelRoomTypeId/:hotelRoomId
Headers: 
Content-Type : application/json
body: {
	"user_id" : 1
}
Response :
200 if the rom is available to book
404 if the room is already booked
Assumption:
I have not done the validation check for user id.