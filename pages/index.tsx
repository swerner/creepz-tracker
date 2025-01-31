import React, { useState } from 'react';

import DashboardLayout from 'components/DashboardLayout/DashboardLayout';
import GameDashboard from 'components/GameDashboard/GameDashboard';
import GameHeader from 'components/GameHeader/GameHeader';

const Home: React.FunctionComponent = () => {
  const [isAddressModalOpen, setIsAddressModalOpen] = useState<boolean>(false);
  return (
    <DashboardLayout
      isAddressModalOpen={isAddressModalOpen}
      setIsAddressModalOpen={setIsAddressModalOpen}
      header={
        <GameHeader openAddressModel={() => setIsAddressModalOpen(true)} />
      }
    >
      <GameDashboard />
    </DashboardLayout>
  );
};

export default Home;
