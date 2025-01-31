import React from 'react';

import { Dialog } from '@headlessui/react';

import Modal from 'components/ui/Modal/Modal';

interface IProps {
  isOpen: boolean;
  handleClose: () => void;
  title: string;
  userReward: number;
  userYield: number;
  price: {
    usd: number;
    eth: number;
  };
}
const LamboModal: React.FunctionComponent<IProps> = ({
  isOpen,
  handleClose,
  title,
  price,
  userYield,
  userReward,
}) => {
  const lamboCostUSD = 210000;
  const bribeAmount = userReward * 0.25;
  const currentUSDBalance = (userReward - bribeAmount) * price.usd;
  const remainingUSD = lamboCostUSD - currentUSDBalance;
  const percentage = ((lamboCostUSD - remainingUSD) / lamboCostUSD) * 100;
  const daysToLambo = Math.ceil(remainingUSD / (userYield * price.usd));
  return (
    <Modal isOpen={isOpen} handleClose={handleClose} title={title}>
      <Dialog.Title
        as="h3"
        className="text-xl leading-6 font-medium text-creepz-green-light creepz-glowy-text"
      >
        {daysToLambo < 0
          ? 'I think you mean wen lambos?!'
          : `${daysToLambo} days`}
      </Dialog.Title>
      <div className="mt-4">
        {daysToLambo < 0 && (
          <>
            <p className="text-creepz-green-light creepz-glowy-text mb-3">
              You&apos;re already there! Go get that Lambo!
            </p>
            <p className="text-creepz-green-light creepz-glowy-text">
              If you are saving up for your next Lambo...
            </p>
          </>
        )}
        <p className="text-creepz-green-light creepz-glowy-text">
          At a price of{' '}
          {Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(price.usd)}{' '}
          per $loomi and after giving the overlords their 25% ({bribeAmount}),
          you have{' '}
          {Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(currentUSDBalance)}
          .
        </p>
        <p className="text-creepz-green-light creepz-glowy-text mt-3">
          You are {percentage.toFixed(2)}% of the way to your Lambo.
        </p>
        <p className="text-creepz-green-light creepz-glowy-text mt-3">
          Only {daysToLambo} days to go!
        </p>
      </div>
    </Modal>
  );
};

export default LamboModal;
