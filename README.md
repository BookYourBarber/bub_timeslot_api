# Timeslot API

This is an API for managing **schedule** built with Node.js and Express.js.

## Table of Contents

- [Timeslot API](#timeslot-api)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
    - [Starting the Server](#starting-the-server)
    - [API Endpoints](#api-endpoints)
  - [Contributing](#contributing)

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Change to the project directory:

   ```bash
   cd time_slots
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

### Starting the Server

To start the API server, run the following command:

```bash
npm start
```

The server will start running on `http://localhost:5001`.

### API Endpoints

- **GET /timeslots** - Get all timeslots.
- **POST /timeslots** - Create a timeslot.

Make sure to replace `:id` with the actual ID of the appointment in the above endpoints.


## Contributing

Contributions are welcome! If you find any issues or want to enhance the functionality of the API, please submit a pull request.
