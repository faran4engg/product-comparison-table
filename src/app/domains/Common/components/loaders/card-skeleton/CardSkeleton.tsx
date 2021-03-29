import { FC } from 'react';
import SkeletonBody from './SkeletonBody';

import { CardSkeletonProps } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CardSkeleton: FC<CardSkeletonProps> = ({ noOfCards }): any => (
  <div className="grid gap-6 mb-8 sm:grid-cols-2 md:grid-cols-3">
    {Array(noOfCards)
      .fill('-')
      .map((_, i) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          className="w-full p-4 mx-auto rounded-md shadow-md h-28 dark:bg-dark-mode bg-light-mode"
        >
          <SkeletonBody />
        </div>
      ))}
    <div className="w-1/2 md:w-1/2"></div>
    <div className="w-1/3 md:w-1/3"></div>
    <div className="w-1/4 md:w-1/4"></div>
    <div className="w-1/5 md:w-1/5"></div>
  </div>
);

CardSkeleton.defaultProps = {
  noOfCards: 1,
};

export default CardSkeleton;
