import React, { useState } from 'react';

import { EyeIcon } from '@heroicons/react/outline';

import LamboModal from 'components/LamboModal/LamboModal';
import TokenModal from 'components/TokenModal/TokenModal';
import Button from 'components/ui/Button/Button';
import GlowyBox from 'components/ui/GlowyBox/GlowyBox';
import LoadingText from 'components/ui/LoadingText/LoadingText';
import SwappableText from 'components/ui/SwappableText/SwappableText';
import { address as armouryAddress } from 'contracts/Arms/Arms';
import { address as creepzAddress } from 'contracts/Creepz/Creepz';
import useWalletStats from 'hooks/useWalletStats';

interface IProps {
  address: string;
}
const AddressDashboard: React.FunctionComponent<IProps> = ({ address }) => {
  const [isCreepzModalOpen, setIsCreepzModalOpen] = useState<boolean>(false);
  const [isArmouryModalOpen, setIsArmouryModalOpen] = useState<boolean>(false);
  const [isLamboModalOpen, setIsLamboModalOpen] = useState<boolean>(false);
  const {
    userReward,
    userYield,
    loomiPrice,
    stakedCreepz,
    stakedArmouries,
    totalArmouries,
    totalCreepz,
    floorData,
    isLoading,
  } = useWalletStats(address);
  return (
    <div className="-mt-12">
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 ">
        <GlowyBox
          title="$Loomi"
          titleIcon={
            <Button onClick={() => setIsLamboModalOpen(true)}>
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="-45.8975 264.1042 2012.4376 551.4816"
                enableBackground="new -45.8975 264.1042 2012.4376 551.4816"
                xmlSpace="preserve"
                className="h-10 w-10"
                fill="currentColor"
              >
                <g>
                  <path
                    d="M953.03,309.02c89.9099-6.58,180.37-3.16,269.89,6.98c15.1499,0.79,29.76,5.12,44.1899,9.45
		c45.58,3.89,91.14,8.07,136.6901,12.34c48.5399,4.84,96.8899,11.39,145.1699,18.29c46.4401,6.7,92.8101,13.86,139.13,21.33
		c53.29,8.5,106.4,18.07,159.75,26.18c10.65,1.83,21.42,3.06,32.01,5.25c2.91,0.29,5.52,2.91,5.1,5.95
		c-1.3999,1.94-3.6699,0.19-5.25-0.43c-1.77-1.03-3.77-0.23-5.5699,0.08c-16.91,4.07-33.86,7.98-50.75,12.1
		c-3.59,0.93-7.92,2.53-8.9301,6.54c-10.61,35.71-21.2999,71.4-32.0499,107.06c-0.6801,2.03,1.27,3.56,2.96,4.18
		c9.97,3.89,20.02,7.6,29.99,11.52c4.29,1.9,9.08,0.83,13.63,1.03c25.41,0,50.84-0.69,76.25-0.15c-0.73,8.64-2.73,18.02-9.7,23.88
		c-4.2001,3.46-8.7101,7.53-8.7201,13.45c0.2001,10.33,0.3,20.67,0.05,31c0.0699,2.26-1.28,4.89-3.8099,4.93
		c-23.6801,3.23-47.3601,6.46-71,9.96c-10.0701,13.18-21.51,25.43-34.88,35.31c-14.16,10.6-30.63,18.42-48.16,21.28
		c-6.62,1.1899-13.37,1.2-20.0601,1.56c-1.34,0.05-3.34-0.3701-3.39-2.01c1.05-3.31,3.7001-6.47,2.7301-10.12
		c-2.65-2.31-6.3-0.37-9.37-0.5c-2.0701,0.48-4.6801-1.02-3.8601-3.38c1.5-4.26,4.25-8.03,5.3101-12.49
		c5.87-20.3,5.49-41.77,4.03-62.66c-1.13-13.06-2.2001-26.34-6.8-38.74c-10.02-27.94-30.09-51.39-53.7-68.94
		c-30.23-22.28-68.12-35.43-105.89-32.27c-21.22,1.62-41.51,9.13-60.37,18.66c-25.75,13.11-48.2101,33.17-62.5701,58.39
		c-10.1899,17.55-16.4399,37.1299-20.12,57.02c-4.5699,22.68-1.6799,46.26,4.87,68.25c1.29,5.33,4.16,10.18,5.17,15.56
		c-1.8199,1.88-5.79-0.77-7.23,2c3.11,9.57,6.52,19.05,9.51,28.66c0.62,1.96,0.9199,5.65-2.11,5.46
		c-223.7201,6.83-447.46,13.65-671.1901,20.48c-66.83,1.84-133.62,4.8-200.44,6.95c8.03-4.22,15.97-8.6,23.94-12.9
		c3.2-12.44,6.91-24.75,11.23-36.85c3.13-8.16,4.98-16.87,4.88-25.6299c0.06-9.8-2.6201-19.3101-3.27-29.04
		c-0.19-2.86-0.99-5.64-2.3-8.18c-1.66,1.25-2.57,3.12-2.71,5.17c-3.84,36.19-21.19,70.75-47.61,95.73
		c-22.05,21.0099-51.39,33.88-81.67,36.63c-23.48,2.29-47.32-1.13-69.68-8.39c-27.28-8.92-51.77-26.49-68.15-50.15
		c-15.32-21.98-24.47-48.13-26.91-74.76c-0.8-5.65,0.78-11.88-2.19-17.03c-1.26,1.4-2.84,2.73-3.21,4.69
		c-7.21,35.37-3.54,73.6,13.76,105.61c1.32,2.03,2.23,6.66-1.59,6.17c-79.73-1.27-159.46-2.64-239.18-3.96
		c-7.26-0.75-14.74-3.19-20.26-8.09c-4.67-4.06-4.17-12.25,0.94-15.7c5.4-3.63,12.33-3.18,18.47-2.29
		c4.77-7.69,9.5-15.4,14.51-22.93c1.42-2.21,3.28-4.19,4.2-6.67c0.58-1.84-0.57-3.53-1.76-4.79c-15.07-16.03-29.47-33.45-37.46-54.2
		c-0.77-2.86,1.26-5.35,2.97-7.39c22.26-26.6,50.97-46.92,80.85-64.1c38.51-21.99,79.68-38.91,121.46-53.54
		c63.06-21.79,127.9-38.18,193.41-50.65c8.64-2.34,13.45,8.43,21.86,7.97c3.48-0.69,6.21-3.17,9.42-4.53
		c78.73-33.04,158.06-65.18,240.08-89.25c47.14-13.94,95.02-25.41,143.38-34.27C871.32,317.54,912.06,311.92,953.03,309.02
		 M848.93,351.03c-42.1,5.88-84.03,13.54-124.97,25.11c-25.12,7.13-50.34,14.07-74.94,22.89c-39.36,14.13-77.7,30.94-115.66,48.44
		c-6.71,3-13.23,6.48-20.22,8.8c-1.95,0.66-3.71,1.77-5.41,2.91c2.05,2.51,5.43,2.6,8.37,3.25c26.37,4.92,52.56,10.83,79.07,14.95
		c15.5,2.23,31.19,3.91,46.87,3.4c3.29,0.08,4.16-3.71,2.08-5.84c-9.97-13.69-20.25-27.15-30.25-40.81
		c-2.26-3.37,1.08-6.79,3.23-9.18c3.1801-3.03,5.19-7.63,9.6-9.08c12.67-4.93,25.19-10.25,37.87-15.11
		c8.1-0.82,16.29-0.87,24.43-1.24c-1.31,13.49-2.72,26.97-3.95,40.46c-4.65,4.11-9.34,8.25-14.71,11.42
		c-1.71,1.17-4.01,2.41-4.14,4.75c-0.07,2.55,2.22,4.17,3.8,5.85c4.87,4.44,8.15,10.23,11.99,15.51
		c14.01,0.05,27.95-1.57,41.85-3.18c42.97-5.3,85.58-13.04,128.34-19.68c35.64-5.51,71.3-10.81,106.97-16.04
		c28.92-4.11,57.79-8.59,86.7999-11.99c3.4601-0.46,7.4801-2.61,7.5601-6.55c2.58-24.06,5.6799-48.08,8.27-72.13
		c0.73-5.14-5.4501-4.69-8.8-4.98C984.92,339.85,916.4,340.86,848.93,351.03 M1224.25,344.85c1.02,1.53,2.2,3.01,3.77,4.03
		c14.6899,10.02,29.34,20.11,44.03,30.14c-15.7301,5.17-31.37,10.6-47.1801,15.52c-3.3199,1.07-6.86,1.69-9.84,3.57
		c-0.6901,2.56,2.5399,3.03,4.37,2.61c32.49-4.85,64.96-9.84,97.5-14.31c1.99-0.16,3.74-1.16,5.35-2.3
		c-1.65-1.56-3.46-2.97-5.59-3.76c-28.3301-11.38-56.65-22.77-84.9601-34.18C1229.35,345.15,1226.76,344.89,1224.25,344.85
		 M1100.54,351.17c-0.1801,19.28,0.0699,38.58-0.53,57.87c0.01,2.57,0.01,5.75,2.3099,7.45c1.7201,1.21,3.8601,0.26,5.77,0.14
		c29.65-4.8,59.4-9.05,88.9301-14.57c-9.6901-14.75-21.03-28.31-32.04-42.06c-4.8099-5.34-12.53-5.4-19.09-6.51
		c-13.28-2-26.55-4.16-39.9-5.59C1103.7,347.34,1100.53,348.43,1100.54,351.17 M1185.78,349.05c0.37,2.6,2.49,4.24,4.23,5.98
		c7.73,7.59,15.3,15.34,23.21,22.74c1.0901,0.93,2.05,2.36,1.4,3.85c-1.89,4.03-4.75,7.54-6.4399,11.67
		c-0.67,1.7-1.17,4.03,0.71,5.18c3.87-1.69,5.9299-5.74,8.9-8.57c3.1-4.01,7.52-7.06,9.64-11.77
		c-12.3301-9.24-24.8601-18.22-37.2301-27.41C1188.95,349.66,1187.33,349.3,1185.78,349.05 M628.87,517.35
		c-18.77,2.67-37.45,6.06-56.28,8.29c14.8199-0.62,29.49-3.19,44.24-4.78c163.71-19.84,327.43-39.59,491.1199-59.52
		c11.7101-1.86,23.29,1.23,34.8301,2.78c25.47,3.88,50.9399,7.85,76.4199,11.74c2.26,0.32,5.39,1.19,5.4701,4.01
		c-1.12,7.05-3.0701,13.96-4.17,21.03c-2.0699,10.34-2.29,21.2-6.66,30.96c-13.09,24.15-26.7,48.03-39.9,72.13
		c-0.7699,1.48-1.7599,2.88-3.2999,3.63c-9.88,5.78-19.72,11.66-29.59,17.46c-1.52,0.99-3.3601,1.02-5.0901,1.04
		c-18.6499,0.13-37.2999,0.38-55.95,0.56c-9.3201,0.26-18.67-0.18-27.96,0.66C897.23,645.35,742.41,663.31,587.6,681.33
		c27.79-1.04,55.58-2.63,83.37-3.84c126.03-5.95,252.0601-11.91,378.0901-17.85c3.7799-0.03,7.34-1.45,10.9399-2.44
		c22.6-6.5,45.21-12.99,67.8101-19.49c20.09-5.93,40.37-11.2401,60.2999-17.7c3.4501-1.1,7.11-1.26,10.59-2.26
		c4.0901-1.32,6.02-5.44,8.25-8.76c18.91-29.1,37.8501-58.18,56.91-87.19c9.78-14.82,19.35-29.8,29.5701-44.33
		c0.85-1.29,1.59-2.75,1.4199-4.35c-2.46-1.16-5.22-1.3-7.83-1.87c-48.53-9.3-97.0601-18.59-145.5601-27.99
		c-5.7799-1.16-11.63-2.54-17.5599-2C958.9,466.61,793.88,491.96,628.87,517.35 M401.52,503.84c-35.83,4.58-69.01,26.11-87.64,57.07
		c-20.71,33.34-23.5,76.88-7.56,112.7c8.72,20.02,23.05,37.53,40.85,50.17c26.84,19.23,61.7,26.62,94.06,20.18
		c33.18-6.29,63.18-27.23,80.57-56.17c20.1-32.59,23.2-74.81,8.38-110.08c-8.06-19.59-21.45-36.89-38.22-49.8
		C466.61,508.27,433.27,499.49,401.52,503.84 M172.27,522.14c-31.22,8.89-61.29,23.59-85.23,45.79c-3.43,3.33-7.36,6.22-10.04,10.25
		c2.2,2.02,5.24,1.38,7.91,1.09c6.18-0.85,12.4-1.25,18.6-1.8c5.85-5.89,12.26-11.2,18.92-16.16c27.53-20.13,58.53-34.94,90.04-47.7
		C198.9,515.54,185.45,518.38,172.27,522.14 M74.5,621.99c9.39,23.45,18.94,46.83,28.28,70.3c-11.31-22.67-22.13-45.57-33.3-68.31
		c-4.76,1.65-9.45,3.49-14.07,5.5c-1.89,0.93-3.99,1.91-5.11,3.81c-0.77,1.48,0.28,3.13,1.63,3.8c4.39,2.24,9.29,3.2599,13.72,5.41
		c2.75,4.59,4.92,9.54,7.66,14.16c5.34,9.64,2.56,21.15-0.54,31.05c-1.67,5.84-5.32,12.09-2.7,18.21c1.65,3.91,6.29,4.15,9.93,4.37
		c10.36,0.45,20.78-0.47,30.97-2.3c6.85-3.22,13.1-7.63,19.73-11.29c1.68-1.2,4.69-2.1,4.22-4.71c-0.52-2.68-2.51-4.74-3.9-7
		c-12.62-19.01-25.3-37.98-37.84-57.04c-2.67-3.73-3.55-10.43-9.05-10.86C80.63,618.03,77.71,620.38,74.5,621.99z"
                  />
                  <path
                    d="M1864.95,424.77c4.13-0.96,8.4501-2.33,12.7201-1.35c2.7699,0.63,3.6,4.11,2.33,6.41c-6.99,13.98-13.23,28.33-19.49,42.65
		c-15.34,0.19-30.6801,0.31-46.02,0.46c3.53-12.3,7.02-24.62,10.49-36.94C1838.26,432.11,1851.54,428.19,1864.95,424.77z"
                  />
                  <path
                    d="M1536.53,475.88c38.1799-3.56,77.58,8.09,107.38,32.3c27.52,22,46.6799,54.1,53.01,88.77
		c7.38,38.83-1.39,80.49-24.12,112.87c-19.74,28.58-49.8201,49.79-83.4,58.7c-41.04,11.29-86.78,3.96-122.1-19.85
		c-29.24-19.43-51.24-49.51-60.62-83.38c-11.76-41.13-4.88-87.21,18.83-122.88c17.75-27.06,44.53-48.12,75.14-58.71
		C1512.23,479.63,1524.3101,477.04,1536.53,475.88 M1533.52,503.81c-5.9401,0.78-11.8101,2.03-17.5701,3.66
		c-33.5199,9.31-62.3199,33.97-76.83,65.57c-17.3,36.59-14.61,81.73,7.05,115.93c19.24,31.25,53.33,52.78,89.87,56.4901
		c22.24,2.59,45.1599-1.32,65.4299-10.82c31.7001-14.75,56.3401-43.9,65.37-77.72c6.8401-24.56,5.62-51.24-3.2999-75.12
		c-11.3401-30.83-35.87-56.52-66.15-69.26C1577.39,504,1555.08,500.93,1533.52,503.81z"
                  />
                  <path
                    d="M1811.99,480.51c13.33,0.08,26.66,0.22,40,0.36c2.01,0.16,4.29-0.09,6.11,1.04c0.87,1.02,0.4,2.4,0.25,3.59
		c-2.02,9.01-2.27,18.27-2.6899,27.46c-0.36,11.99-0.36,23.99-0.16,35.99c-8.17-0.11-16.33-0.28-24.49-0.34
		c-2.65-0.05-5.39,0.13-7.83-1.01c-9.2201-3.77-18.51-7.35-27.7101-11.17C1801.0601,517.82,1806.49,499.15,1811.99,480.51z"
                  />
                  <path
                    d="M1541.4,512.54c21.75-1.46,43.9,3.45,62.85,14.28c27.02,15.17,47.04,42.13,53.71,72.4c5.64,24.97,2.54,51.88-8.99,74.78
		c-13.8099,28.01-39.98,49.57-70.14,57.69c-25.61,7.08-53.74,4.74-77.74-6.7c-26.9-12.59-48.23-36.44-57.76-64.57
		c-8.59-24.96-7.99-52.96,1.7201-77.52c10.63-27.25,32.46-49.87,59.36-61.39C1516.09,516.41,1528.6801,513.41,1541.4,512.54z"
                  />
                  <path
                    d="M401.45,514.72c34.87-5.37,71.86,7.05,96.34,32.46c14.2,14.57,24.35,33.09,28.83,52.95c5.06,21.93,3.32,45.37-4.95,66.31
		c-10.97,28.06-33.83,51.13-61.79,62.35c-23.58,9.59-50.46,10.71-74.81,3.33c-30.44-9.09-56.4-31.93-69.24-61.01
		c-15.5-34.01-12.36-75.79,8.31-106.97C341.26,537.6,370.18,519.1,401.45,514.72z"
                  />
                </g>
              </svg>
            </Button>
          }
        >
          <div className="grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            <div className="flex justify-center items-baseline">
              <LoadingText isLoading={isLoading}>
                <p className="text-2xl font-semibold text-creepz-green-light creepz-glowy-text">
                  {userReward}
                </p>
              </LoadingText>
              <p className="ml-2 items-baseline text-sm font-semibold text-creepz-green creepz-glowy-text">
                balance
              </p>
            </div>
            <div className="flex justify-center items-baseline">
              <LoadingText isLoading={isLoading}>
                <p className="text-2xl font-semibold text-creepz-green-light creepz-glowy-text">
                  {userYield}
                </p>
              </LoadingText>
              <p className="ml-2 items-baseline text-sm font-semibold text-creepz-green creepz-glowy-text">
                yield
              </p>
            </div>
            <div className="flex justify-center items-baseline">
              <LoadingText isLoading={isLoading}>
                <p className="text-2xl font-semibold text-creepz-green-light creepz-glowy-text">
                  <SwappableText>
                    {(swapped: boolean) =>
                      swapped ? (
                        <span>{loomiPrice.eth.toFixed(8)}</span>
                      ) : (
                        Intl.NumberFormat('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        }).format(loomiPrice.usd)
                      )
                    }
                  </SwappableText>
                </p>
              </LoadingText>
              <p className="ml-2 items-baseline text-sm font-semibold text-creepz-green creepz-glowy-text">
                Price
              </p>
            </div>
            <div className="flex justify-center items-baseline">
              <LoadingText isLoading={isLoading && !loomiPrice && !userReward}>
                <p className="text-2xl font-semibold text-creepz-green-light creepz-glowy-text">
                  <SwappableText>
                    {(swapped: boolean) =>
                      swapped ? (
                        Intl.NumberFormat('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        }).format(userReward * 0.75 * loomiPrice.usd)
                      ) : (
                        <span>
                          {(userReward * 0.75 * loomiPrice.eth).toFixed(2)}
                        </span>
                      )
                    }
                  </SwappableText>
                </p>
              </LoadingText>
              <p className="ml-2 items-baseline text-sm font-semibold text-creepz-green creepz-glowy-text">
                value
              </p>
            </div>
          </div>
          <LamboModal
            isOpen={isLamboModalOpen}
            handleClose={() => setIsLamboModalOpen(false)}
            title="Wen Lambo?"
            price={loomiPrice}
            userYield={+userYield}
            userReward={+userReward}
          />
        </GlowyBox>
        <GlowyBox
          title="Creepz"
          titleIcon={
            <Button onClick={() => setIsCreepzModalOpen(true)}>
              <EyeIcon className="h-8 w-8" aria-hidden="true" />
            </Button>
          }
        >
          <div className="grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            <div className="flex justify-center items-baseline">
              <LoadingText isLoading={isLoading}>
                <p className="text-2xl font-semibold text-creepz-green-light creepz-glowy-text">
                  {stakedCreepz.length}
                </p>
              </LoadingText>
              <p className="ml-2 items-baseline text-sm font-semibold text-creepz-green creepz-glowy-text">
                staked
              </p>
            </div>
            <div className="flex justify-center items-baseline">
              <LoadingText isLoading={isLoading}>
                <p className="text-2xl font-semibold text-creepz-green-light creepz-glowy-text">
                  {totalCreepz}
                </p>
              </LoadingText>
              <p className="ml-2 items-baseline text-sm font-semibold text-creepz-green creepz-glowy-text">
                total
              </p>
            </div>
            <div className="flex justify-center items-baseline">
              <LoadingText
                isLoading={
                  isLoading && !totalCreepz && !floorData?.prices?.creepz
                }
              >
                <p className="text-2xl font-semibold text-creepz-green-light creepz-glowy-text">
                  {floorData?.prices?.creepz}
                </p>
              </LoadingText>
              <p className="ml-2 items-baseline text-sm font-semibold text-creepz-green creepz-glowy-text">
                floor
              </p>
            </div>
            <div className="flex justify-center items-baseline">
              <LoadingText isLoading={isLoading && !floorData?.prices?.creepz}>
                <p className="text-2xl font-semibold text-creepz-green-light creepz-glowy-text">
                  {floorData?.prices?.creepz &&
                    (totalCreepz * floorData.prices.creepz).toFixed(2)}
                </p>
              </LoadingText>
              <p className="ml-2 items-baseline text-sm font-semibold text-creepz-green creepz-glowy-text">
                value
              </p>
            </div>
            <TokenModal
              isOpen={isCreepzModalOpen}
              handleClose={() => setIsCreepzModalOpen(false)}
              title="Your Creepz"
              tokenIds={stakedCreepz}
              baseUrl="https://api.creepz.co/creepz/_||_"
              address={creepzAddress}
            />
          </div>
        </GlowyBox>
        <GlowyBox
          title="Armouries"
          titleIcon={
            <Button onClick={() => setIsArmouryModalOpen(true)}>
              <EyeIcon className="h-8 w-8" aria-hidden="true" />
            </Button>
          }
        >
          <div className="grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            <div className="flex justify-center items-baseline">
              <LoadingText isLoading={isLoading}>
                <p className="text-2xl font-semibold text-creepz-green-light creepz-glowy-text">
                  {stakedArmouries.length}
                </p>
              </LoadingText>
              <p className="ml-2 items-baseline text-sm font-semibold text-creepz-green creepz-glowy-text">
                staked
              </p>
            </div>
            <div className="flex justify-center items-baseline">
              <LoadingText isLoading={isLoading}>
                <p className="text-2xl font-semibold text-creepz-green-light creepz-glowy-text">
                  {totalArmouries}
                </p>
              </LoadingText>
              <p className="ml-2 items-baseline text-sm font-semibold text-creepz-green creepz-glowy-text">
                total
              </p>
            </div>
            <div className="flex justify-center items-baseline">
              <LoadingText isLoading={isLoading && !floorData?.prices?.armoury}>
                <p className="text-2xl font-semibold text-creepz-green-light creepz-glowy-text">
                  {floorData?.prices?.armoury}
                </p>
              </LoadingText>
              <p className="ml-2 items-baseline text-sm font-semibold text-creepz-green creepz-glowy-text">
                floor
              </p>
            </div>
            <div className="flex justify-center items-baseline">
              <LoadingText
                isLoading={
                  isLoading && !totalArmouries && !floorData?.prices?.armoury
                }
              >
                <p className="text-2xl font-semibold text-creepz-green-light creepz-glowy-text">
                  {floorData?.prices?.armoury &&
                    (totalArmouries * floorData.prices.armoury).toFixed(2)}
                </p>
              </LoadingText>
              <p className="ml-2 items-baseline text-sm font-semibold text-creepz-green creepz-glowy-text">
                value
              </p>
            </div>
          </div>
          <TokenModal
            isOpen={isArmouryModalOpen}
            handleClose={() => setIsArmouryModalOpen(false)}
            title="Your Armouries"
            tokenIds={stakedArmouries}
            baseUrl="https://api.creepz.co/armoury/_||_/image/?1642708904765"
            address={armouryAddress}
          />
        </GlowyBox>
      </dl>
    </div>
  );
};

export default AddressDashboard;
