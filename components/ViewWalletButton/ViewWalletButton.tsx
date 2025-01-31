import * as React from 'react';

import Button from 'components/ui/Button/Button';

interface IProps {
  openAddressModel: () => void;
}
const ViewWalletButton: React.FunctionComponent<IProps> = ({
  openAddressModel,
}) => {
  return (
    <Button
      className="bg-creepz-green-light text-black w-full flex justify-center uppercase"
      onClick={openAddressModel}
    >
      <span className="hidden sm:block">View Wallet</span>
      <svg
        className="h-6 w-6 sm:hidden"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1000 1000"
        enableBackground="new 0 0 1000 1000"
        xmlSpace="preserve"
      >
        <g>
          <path d="M928.3,500V380.4c0-68.2-55.1-124.1-123-125.3v-60.6c0-67.8-56.4-123.3-125.4-123.3H135.4C66.4,71.2,10,126.6,10,194.4c0,0.6,0,1.2,0,1.8l0,0v607.2c0,68.9,56.4,125.4,125.4,125.4h667.6c68.9,0,125.4-56.4,125.4-125.4V683.5c34-0.5,61.7-28.5,61.7-62.7v-58.3C990,528.5,962.3,500.5,928.3,500z M927.3,620.8c0,0-0.1,0.1-0.1,0.1H746.1c0,0-0.1-0.1-0.1-0.1v-58c0,0,0.1-0.1,0.1-0.1h181.1c0,0,0.1,0.1,0.1,0.1V620.8z M90.8,152.1c12-11.8,27.8-18.2,44.6-18.2h544.4c16.8,0,32.7,6.5,44.6,18.2c11.7,11.5,18.1,26.5,18.1,42.4V255H135.4c-16.8,0-32.7-6.5-44.6-18.2c-11.7-11.5-18.1-26.5-18.1-42.4C72.7,178.6,79.1,163.5,90.8,152.1z M847.2,847.7c-11.9,11.9-27.6,18.5-44.2,18.5H135.4c-16.6,0-32.3-6.6-44.2-18.5c-11.9-11.9-18.5-27.6-18.5-44.2V301.1c18.5,10.6,39.9,16.6,62.7,16.6l0,0h0.1c0,0,0,0,0,0h544.4H803c16.6,0,32.3,6.6,44.2,18.5c11.9,11.9,18.5,27.6,18.5,44.2v119.6H746c-34.5,0-62.7,28.2-62.7,62.7v58.3c0,34.5,28.2,62.7,62.7,62.7h119.7v119.9C865.6,820.1,859.1,835.8,847.2,847.7z" />
        </g>
      </svg>
    </Button>
  );
};

export default ViewWalletButton;
