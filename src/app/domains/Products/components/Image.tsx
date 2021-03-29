import { DEFAULT_IMG } from 'app/kernel/constants';
import { useState } from 'react';

export interface ImageProps {
  imgUrl: string;
  prodId: string;
  onClick: (data: { prodId: string; isSelected: boolean }) => void;
}
const addDefaultSrc = ev => {
  ev.target.src = DEFAULT_IMG;
};

const Image: React.FC<ImageProps> = ({ imgUrl, prodId, onClick }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    onClick({ prodId, isSelected: !isSelected });
  };
  return (
    <div
      className={`relative m-1 font-medium rounded-full justify-self-center cursor-pointer ${
        isSelected ? 'shadow-inner' : 'shadow-xl'
      }`}
    >
      {isSelected && (
        <span className="absolute inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full -right-0 -top-1 animate-ping dark:border-gray-800" />
      )}
      <img
        className={`w-12 h-12 md:w-20 md:h-20 mx-auto rounded-full lg:rounded ${
          isSelected && 'border-4 border-purple-300'
        }`}
        src={imgUrl}
        alt="Product"
        onError={addDefaultSrc}
        onClick={handleClick}
      />
    </div>
  );
};

export default Image;
