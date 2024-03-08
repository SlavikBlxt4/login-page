import React from 'react';

const Main: React.FC<MainProps> = ({ setPage }) => {
    return (
      <div>
        <h1>Main</h1>
      </div>
    );
  }

// Main component type or interface
type MainProps = {
    setPage: (page: string) => void;
}



export default Main;