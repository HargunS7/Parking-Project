import React, { useState } from 'react';
import '../Styles/ParkingSpace.css';

function ParkingSpace() {
  // State for parking spaces
  const [parkingSpaces, setParkingSpaces] = useState({
    twoWheeler: [
      { id: 1, status: 'Available' },
      { id: 2, status: 'Booked' },
      { id: 3, status: 'Available' },
      { id: 4, status: 'Available' },
    ],
    threeWheeler: [
      { id: 1, status: 'Available' },
      { id: 2, status: 'Available' },
      { id: 3, status: 'Booked' },
    ],
    fourWheeler: [
      { id: 1, status: 'Available' },
      { id: 2, status: 'Booked' },
      { id: 3, status: 'Booked' },
      { id: 4, status: 'Available' },
    ],
  });

  // Toggle booking status
  const toggleBooking = (type, id) => {
    setParkingSpaces({
      ...parkingSpaces,
      [type]: parkingSpaces[type].map((space) =>
        space.id === id
          ? { ...space, status: space.status === 'Available' ? 'Booked' : 'Available' }
          : space
      ),
    });
  };

  return (
    <div className="parking-space">
      <h1>Parking Management System</h1>

      {/* 2-Wheeler Parking */}
      <div className="vehicle-row">
        <h2>2-Wheeler Parking</h2>
        <div className="vehicle-spaces">
          {parkingSpaces.twoWheeler.map((space) => (
            <div
              key={space.id}
              className={`parking-space ${space.status.toLowerCase()}`}
              onClick={() => toggleBooking('twoWheeler', space.id)}
            >
              <p>Space {space.id}</p>
              <p>{space.status}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3-Wheeler Parking */}
      <div className="vehicle-row">
        <h2>3-Wheeler Parking</h2>
        <div className="vehicle-spaces">
          {parkingSpaces.threeWheeler.map((space) => (
            <div
              key={space.id}
              className={`parking-space ${space.status.toLowerCase()}`}
              onClick={() => toggleBooking('threeWheeler', space.id)}
            >
              <p>Space {space.id}</p>
              <p>{space.status}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4-Wheeler Parking */}
      <div className="vehicle-row">
        <h2>4-Wheeler Parking</h2>
        <div className="vehicle-spaces">
          {parkingSpaces.fourWheeler.map((space) => (
            <div
              key={space.id}
              className={`parking-space ${space.status.toLowerCase()}`}
              onClick={() => toggleBooking('fourWheeler', space.id)}
            >
              <p>Space {space.id}</p>
              <p>{space.status}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="info">Click on a parking space to toggle booking status.</p>
    </div>
  );
}

export default ParkingSpace;
