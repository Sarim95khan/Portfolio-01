import Image from 'next/image';

interface DevImageProps {
  containerStyle: string;
  imgSrc: string;
}
const DevImg = ({ containerStyle, imgSrc }: DevImageProps) => {
  return (
    <div>
      <Image alt="Developer Image" fill src={imgSrc} />
    </div>
  );
};

export default DevImg;
