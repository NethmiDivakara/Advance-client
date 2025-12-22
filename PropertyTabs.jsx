import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './PropertyTabs.css'; // import your custom CSS

export default function PropertyTabs({ description, floorPlanUrl, mapEmbedUrl }) {
  return (
    <Tabs className="property-tabs">
      <TabList className="tab-list">
        <Tab className="tab">Description</Tab>
        <Tab className="tab">Floor Plan</Tab>
        <Tab className="tab">Map</Tab>
      </TabList>

      {/* Long Description */}
      <TabPanel className="tab-panel">
        <p className="tab-text">{description}</p>
      </TabPanel>

      {/* Floor Plan */}
      <TabPanel className="tab-panel">
        {floorPlanUrl ? (
          <img src={floorPlanUrl} alt="Floor Plan" className="floor-plan" />
        ) : (
          <p className="tab-text">No floor plan available</p>
        )}
      </TabPanel>

      {/* Google Map */}
      <TabPanel className="tab-panel">
        {mapEmbedUrl ? (
          <iframe
            src={mapEmbedUrl}
            className="map-frame"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Property Location"
          ></iframe>
        ) : (
          <p className="tab-text">Map not available</p>
        )}
      </TabPanel>
    </Tabs>
  );
}
