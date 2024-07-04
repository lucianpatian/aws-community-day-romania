import React, { useState, useEffect } from 'react';
import Button from 'components/shared/button'; // Adjust the path as necessary

const SaveTheDateButton = () => {
  const [icsUrl, setIcsUrl] = useState('');

  const eventDetails = {
    title: "AWS Community Day Romania",
    description: "Join us for a one day technical event loaded with exciting talks and networking opportunities. All details on https://aws-community.ro",
    location: "Iulius Congress Hall, Timisoara, Romania",
    startDate: "2024-10-03T09:00:00",
    endDate: "2024-10-03T17:00:00"
  };

  useEffect(() => {
    const generateIcsContent = () => {
      return `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Your Organization//NONSGML v1.0//EN
BEGIN:VEVENT
UID:${new Date().getTime()}@yourdomain.com
DTSTAMP:${new Date().toISOString().replace(/-|:|\.\d\d\d/g, '').slice(0, 15)}Z
DTSTART:${eventDetails.startDate.replace(/-|:|\.\d\d\d/g, '').slice(0, 15)}Z
DTEND:${eventDetails.endDate.replace(/-|:|\.\d\d\d/g, '').slice(0, 15)}Z
SUMMARY:${eventDetails.title}
DESCRIPTION:${eventDetails.description}
LOCATION:${eventDetails.location}
END:VEVENT
END:VCALENDAR
      `.trim();
    };

    const icsContent = generateIcsContent();

    // Ensure line length and CRLF compliance
    const formattedIcsContent = icsContent.split('\n')
      .map(line => line.match(/.{1,75}/g).join('\r\n '))
      .join('\r\n');

    console.log('Formatted ICS Content:', formattedIcsContent); // Debugging log

    const blob = new Blob([formattedIcsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    setIcsUrl(url);

    // Clean up the URL object when the component unmounts
    return () => URL.revokeObjectURL(url);
  }, []); // Empty dependency array ensures this effect runs only once

  const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${eventDetails.startDate.replace(/-|:|\.\d\d\d/g, '').slice(0, 15)}Z/${eventDetails.endDate.replace(/-|:|\.\d\d\d/g, '').slice(0, 15)}Z&details=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}&sf=true&output=xml`;

  return (
    <div className="flex space-x-4"> {/* Tailwind utility classes for spacing */}
      <Button as="a" href={googleCalendarUrl} target="_blank" rel="noopener noreferrer">
        Save to Google Calendar
      </Button>
      <Button as="a" href={icsUrl} download="aws-community-ro.ics">
        Save to Outlook/Office 365 Calendar
      </Button>
    </div>
  );
};

export default SaveTheDateButton;